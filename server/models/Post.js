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
      required: true, // Stores real HTML formatting with <h2>, <p>, <ul>, <img>
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
      default: 'Digital Architect & SEO Strategist',
    },
    authorAvatar: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    status: {
      type: String,
      enum: ['Published', 'Draft'],
      default: 'Published',
    },
  },
  {
    timestamps: true,
  }
);

// Format date for output
PostSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
});

PostSchema.set('toJSON', { virtuals: true });
PostSchema.set('toObject', { virtuals: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
