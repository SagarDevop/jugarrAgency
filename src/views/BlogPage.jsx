'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredPosts } from '../data/blogStore';
import { Search, Sparkles, ArrowUpRight, Clock, Calendar, Lock, Plus } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStoredPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', 'SEO Dominance', 'Web Architecture', 'Mobile Engineering'];

  const filteredPosts = posts.filter((post) => {
    const matchesCat = selectedCat === 'All' || post.category === selectedCat;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            <span>[ SEO INSIGHTS & ENGINEERING LAB ]</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink">
            The Jugarr Journal.
          </h1>
          <p className="text-base sm:text-xl text-charcoal-600 font-normal leading-relaxed pt-2">
            In-depth breakdowns on programmatic SEO, headless Next.js architectures, and 120fps native mobile app development.
          </p>
        </div>

        {/* Link to Admin */}
        <Link
          href="/admin"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-charcoal-300 font-mono text-xs text-charcoal-700 hover:text-ink hover:bg-charcoal-100 transition-colors shadow-sm"
        >
          <Lock className="w-3.5 h-3.5 text-accent" />
          <span>Admin CMS Dashboard</span>
        </Link>
      </div>

      {/* Search & Category Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? 'bg-ink text-white'
                  : 'bg-surface text-charcoal-700 border border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search engineering articles..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-surface border border-charcoal-300 text-xs text-ink placeholder-charcoal-400 focus:outline-none focus:border-accent font-mono"
          />
        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="py-24 text-center font-mono text-xs text-charcoal-500">
          <div className="animate-spin inline-block w-6 h-6 border-2 border-accent border-t-transparent rounded-full mb-3" />
          <div>Connecting to MongoDB Database...</div>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="py-24 text-center rounded-3xl border border-dashed border-charcoal-300 bg-surface/50 p-12 space-y-4">
          <Sparkles className="w-8 h-8 text-accent mx-auto" />
          <h3 className="font-display font-bold text-xl text-ink">No articles match your criteria</h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto">
            Try adjusting your search query, selecting another category, or compose a new post in the Admin CMS.
          </p>
          <div className="pt-2">
            <Link
              href="/admin"
              className="px-6 py-3 bg-ink hover:bg-accent text-white rounded-full font-display font-bold text-xs inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Compose in Admin CMS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post._id || post.id}
              className="group rounded-3xl border border-charcoal-300 bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] bg-charcoal-100 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider bg-ink/80 text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-charcoal-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal-200 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorAvatar || '/assets/founder/profile.jpg'}
                        alt={post.author}
                        className="w-6 h-6 rounded-full object-cover border border-charcoal-300"
                      />
                      <span className="text-charcoal-800 font-semibold">{post.author}</span>
                    </div>

                    <span className="text-accent font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
