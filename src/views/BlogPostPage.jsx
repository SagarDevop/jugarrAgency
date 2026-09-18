'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { getPostBySlug } from '../data/blogStore';
import { ArrowLeft, Clock, Calendar, Share2, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../components/ClientLayout';

export default function BlogPostPage({ onOpenBooking, initialPost = null }) {
  const params = useParams();
  const slug = params?.slug;
  const router = useRouter();
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;

  useEffect(() => {
    if (initialPost) {
      setPost(initialPost);
      setLoading(false);
      return;
    }
    if (!slug) return;
    getPostBySlug(slug)
      .then((found) => {
        if (found) {
          setPost(found);
        }
      })
      .finally(() => setLoading(false));
  }, [slug, initialPost]);

  if (loading) {
    return (
      <div className="pt-40 pb-32 text-center max-w-xl mx-auto px-4 font-mono text-xs text-charcoal-500">
        <div className="animate-spin inline-block w-6 h-6 border-2 border-accent border-t-transparent rounded-full mb-3" />
        <div>Querying MongoDB for article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-display font-bold text-ink mb-4">Article Not Found</h1>
        <p className="text-sm text-charcoal-600 mb-6">
          The requested engineering insight may have been moved or updated.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-full bg-ink text-white font-bold text-xs inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-charcoal-500 hover:text-ink mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
      </Link>

      {/* Category & Metadata */}
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
        <span className="px-3 py-1 bg-ink text-white rounded-md font-bold uppercase">
          {post.category}
        </span>
        <span className="text-charcoal-400">•</span>
        <span className="flex items-center gap-1 text-charcoal-500">
          <Calendar className="w-3.5 h-3.5" /> {post.date}
        </span>
        <span className="text-charcoal-400">•</span>
        <span className="flex items-center gap-1 text-charcoal-500">
          <Clock className="w-3.5 h-3.5" /> {post.readTime}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-ink leading-[1.08] mb-6">
        {post.title}
      </h1>

      {/* Excerpt Lead */}
      <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-normal mb-8 pb-6 border-b border-charcoal-200">
        {post.excerpt}
      </p>

      {/* Author Bar */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <img
            src={post.authorAvatar || '/assets/founder/profile.jpg'}
            alt={post.author}
            className="w-11 h-11 rounded-full object-cover border border-charcoal-300"
          />
          <div>
            <div className="font-display font-bold text-sm text-ink">{post.author}</div>
            <div className="font-mono text-xs text-charcoal-500">{post.authorRole}</div>
          </div>
        </div>

        <button
          onClick={() => {
            if (typeof window !== 'undefined' && navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href);
              alert('Article link copied to clipboard!');
            }
          }}
          className="p-2.5 rounded-full bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-charcoal-700 transition-colors"
          title="Share Article"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Cover Image */}
      <div className="rounded-3xl border border-charcoal-300 overflow-hidden mb-10 aspect-[16/9] shadow-tactile">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content (HTML Rendered) */}
      <div
        className="prose prose-stone max-w-none text-charcoal-800 leading-relaxed font-sans text-base sm:text-lg blog-html-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Keywords Tags */}
      {post.keywords && (
        <div className="mt-12 pt-6 border-t border-charcoal-200 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-charcoal-500 mr-2">SEO ENTITIES:</span>
          {post.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-charcoal-100 text-charcoal-700 font-mono text-xs font-semibold"
            >
              #{kw}
            </span>
          ))}
        </div>
      )}

      {/* Bottom CTA Card */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-ink text-white shadow-tactile-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            READY TO SCALE?
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            Want these exact performance metrics for your business?
          </h3>
          <p className="text-xs text-charcoal-400 font-mono">
            Direct senior engineering sprint allocation. Zero template bloat.
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="px-6 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-display font-bold text-sm transition-colors flex items-center gap-2 shrink-0 shadow-md"
        >
          <span>Book a Strategy Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
