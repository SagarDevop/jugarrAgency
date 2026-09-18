import { NextResponse } from 'next/server';
import { connectDB, getFallbackPosts, saveFallbackPosts } from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import mongoose from 'mongoose';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jugarr2026';

export async function GET() {
  try {
    const conn = await connectDB();
    if (conn && mongoose.connection.readyState === 1) {
      const posts = await Post.find().sort({ createdAt: -1 });
      return NextResponse.json(posts);
    }
    const fallbackPosts = getFallbackPosts();
    return NextResponse.json(fallbackPosts);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const adminPass = req.headers.get('x-admin-password');
    if (adminPass !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication required' }, { status: 401 });
    }

    const body = await req.json();
    const { title, slug, category, excerpt, content, coverImage, keywords, metaTitle, metaDescription, author, authorRole, readTime } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: 'Missing required article fields: title, slug, excerpt, content' }, { status: 400 });
    }

    const autoMetaTitle = metaTitle || `${title} | Jugarr Technical Insights`;
    const autoMetaDesc = metaDescription || excerpt.slice(0, 160);

    const postData = {
      title,
      slug: slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-'),
      category: category || 'SEO Dominance',
      excerpt,
      content,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
      keywords: Array.isArray(keywords) ? keywords : (keywords || '').split(',').map(k => k.trim()).filter(Boolean),
      metaTitle: autoMetaTitle,
      metaDescription: autoMetaDesc,
      author: author || 'Jugarr Founder',
      authorRole: authorRole || 'Technical Web Architect',
      readTime: readTime || '4 min read',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const conn = await connectDB();
    if (conn && mongoose.connection.readyState === 1) {
      const existing = await Post.findOne({ slug: postData.slug });
      if (existing) {
        return NextResponse.json({ error: 'Article with this URL slug already exists' }, { status: 409 });
      }
      const newPost = new Post(postData);
      await newPost.save();
      return NextResponse.json({ success: true, message: 'Article published to MongoDB', post: newPost }, { status: 201 });
    }

    // Disk fallback
    const posts = getFallbackPosts();
    if (posts.some(p => p.slug === postData.slug)) {
      return NextResponse.json({ error: 'Article with this URL slug already exists' }, { status: 409 });
    }
    posts.unshift(postData);
    saveFallbackPosts(posts);
    return NextResponse.json({ success: true, message: 'Article published to Disk Database', post: postData }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
