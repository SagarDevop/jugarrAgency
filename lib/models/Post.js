import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      default: 'SEO Dominance',
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    },
    keywords: [
      {
        type: String,
      },
    ],
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    author: {
      type: String,
      default: 'Jugarr Founder',
    },
    authorRole: {
      type: String,
      default: 'Technical Web Architect',
    },
    readTime: {
      type: String,
      default: '4 min read',
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
