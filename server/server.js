import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Post from './models/Post.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jugarr_agency';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jugarr2026';

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Ensure data directory exists for disk persistence fallback
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const FALLBACK_DB_FILE = path.join(DATA_DIR, 'posts_db.json');

// Helper for fallback file DB
function getFallbackPosts() {
  try {
    if (!fs.existsSync(FALLBACK_DB_FILE)) return [];
    const data = fs.readFileSync(FALLBACK_DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveFallbackPosts(posts) {
  try {
    fs.writeFileSync(FALLBACK_DB_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing fallback DB:', e);
  }
}

let isMongoConnected = false;

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
    });
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB successfully:', MONGODB_URI.split('@')[1] || 'Local MongoDB');
  } catch (err) {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB connection deferred or offline. Running on high-speed disk database fallback in server/data/posts_db.json.');
  }
}
connectDB();

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: isMongoConnected ? 'MongoDB (Connected)' : 'Disk Database (Ready for MongoDB Atlas URI)',
    mongoConnected: isMongoConnected,
    timestamp: new Date().toISOString()
  });
});

// Admin Authentication API
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, message: 'Admin authenticated' });
  }
  return res.status(401).json({ success: false, error: 'Incorrect master password' });
});

// GET all posts
app.get('/api/posts', async (req, res) => {
  try {
    if (isMongoConnected) {
      const posts = await Post.find().sort({ createdAt: -1 });
      return res.json(posts);
    }
    const posts = getFallbackPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (isMongoConnected) {
      const post = await Post.findOne({ slug });
      if (!post) return res.status(404).json({ error: 'Post not found' });
      return res.json(post);
    }
    const posts = getFallbackPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create post
app.post('/api/posts', async (req, res) => {
  try {
    const {
      title,
      slug,
      category,
      excerpt,
      content,
      coverImage,
      keywords,
      metaTitle,
      metaDescription,
      author,
      authorRole
    } = req.body;

    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Title, Slug, and HTML Content are required.' });
    }

    if (isMongoConnected) {
      const newPost = await Post.create({
        title,
        slug,
        category,
        excerpt,
        content,
        coverImage,
        keywords,
        metaTitle,
        metaDescription,
        author,
        authorRole,
        status: 'Published'
      });
      return res.status(201).json(newPost);
    }

    // Disk DB fallback
    const posts = getFallbackPosts();
    const existingIdx = posts.findIndex((p) => p.slug === slug);
    const newEntry = {
      _id: `post_${Date.now()}`,
      id: `post_${Date.now()}`,
      title,
      slug,
      category,
      excerpt,
      content,
      coverImage,
      keywords,
      metaTitle,
      metaDescription,
      author: author || 'Jugarr Founder',
      authorRole: authorRole || 'Digital Architect',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      createdAt: new Date().toISOString(),
      status: 'Published'
    };

    if (existingIdx >= 0) {
      posts[existingIdx] = newEntry;
    } else {
      posts.unshift(newEntry);
    }
    saveFallbackPosts(posts);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (isMongoConnected) {
      const updated = await Post.findByIdAndUpdate(id, updates, { new: true });
      return res.json(updated);
    }

    const posts = getFallbackPosts();
    const idx = posts.findIndex((p) => p._id === id || p.id === id || p.slug === id);
    if (idx >= 0) {
      posts[idx] = { ...posts[idx], ...updates, updatedAt: new Date().toISOString() };
      saveFallbackPosts(posts);
      return res.json(posts[idx]);
    }
    res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE single post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected) {
      await Post.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Deleted post' });
    }

    const posts = getFallbackPosts();
    const filtered = posts.filter((p) => p._id !== id && p.id !== id && p.slug !== id);
    saveFallbackPosts(filtered);
    res.json({ success: true, message: 'Deleted post' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE all posts
app.delete('/api/posts', async (req, res) => {
  try {
    if (isMongoConnected) {
      await Post.deleteMany({});
      return res.json({ success: true, message: 'All posts wiped' });
    }
    saveFallbackPosts([]);
    res.json({ success: true, message: 'All posts wiped' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 JUGARR Agency API & Database Server live on port ${PORT}`);
});
