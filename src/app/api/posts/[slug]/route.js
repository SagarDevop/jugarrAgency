import { NextResponse } from 'next/server';
import { connectDB, getFallbackPosts, saveFallbackPosts } from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import mongoose from 'mongoose';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jugarr2026';

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    const conn = await connectDB();
    if (conn && mongoose.connection.readyState === 1) {
      const post = await Post.findOne({ slug });
      if (!post) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    const posts = getFallbackPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const adminPass = req.headers.get('x-admin-password');
    if (adminPass !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication required' }, { status: 401 });
    }

    const { slug } = await params;
    const updateData = await req.json();
    updateData.updatedAt = new Date().toISOString();

    const conn = await connectDB();
    if (conn && mongoose.connection.readyState === 1) {
      const updated = await Post.findOneAndUpdate({ slug }, updateData, { new: true });
      if (!updated) return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      return NextResponse.json({ success: true, post: updated });
    }

    const posts = getFallbackPosts();
    const index = posts.findIndex((p) => p.slug === slug);
    if (index === -1) return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    posts[index] = { ...posts[index], ...updateData };
    saveFallbackPosts(posts);
    return NextResponse.json({ success: true, post: posts[index] });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const adminPass = req.headers.get('x-admin-password');
    if (adminPass !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication required' }, { status: 401 });
    }

    const { slug } = await params;
    const conn = await connectDB();
    if (conn && mongoose.connection.readyState === 1) {
      await Post.findOneAndDelete({ slug });
      return NextResponse.json({ success: true, message: 'Article deleted from MongoDB' });
    }

    let posts = getFallbackPosts();
    posts = posts.filter((p) => p.slug !== slug);
    saveFallbackPosts(posts);
    return NextResponse.json({ success: true, message: 'Article deleted from disk DB' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
