'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getStoredPosts,
  savePost,
  deletePost,
  clearAllPosts,
  authenticateAdmin,
  checkDatabaseHealth
} from '../data/blogStore';
import {
  Lock,
  Unlock,
  KeyRound,
  FileText,
  Trash2,
  Edit3,
  CheckCircle2,
  ExternalLink,
  Code2,
  Eye,
  Database,
  Download,
  Sparkles,
  ArrowUpRight,
  LogOut,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [dbStatus, setDbStatus] = useState(null);

  // CMS State
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [notification, setNotification] = useState('');
  const [editorTab, setEditorTab] = useState('code'); // 'code' | 'preview'

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('SEO Dominance');
  const [excerpt, setExcerpt] = useState('');
  const [contentHtml, setContentHtml] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [keywords, setKeywords] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [authorName, setAuthorName] = useState('Jugarr Founder');

  useEffect(() => {
    // Check DB health
    checkDatabaseHealth().then(setDbStatus);

    const authSession = sessionStorage.getItem('jugarr_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
      loadPosts();
    }
  }, []);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const data = await getStoredPosts();
      setPosts(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await authenticateAdmin(inputPassword);
    if (res.success) {
      setIsAuthenticated(true);
      sessionStorage.setItem('jugarr_admin_auth', 'true');
      setAuthError('');
      loadPosts();
    } else {
      setAuthError(res.error || 'Incorrect admin master password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('jugarr_admin_auth');
    setInputPassword('');
  };

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!editingPost) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generated);
      setMetaTitle(`${val} | JUGARR Agency`);
    }
  };

  const insertHtmlTag = (tagType) => {
    let snippet = '';
    switch (tagType) {
      case 'h2':
        snippet = '\n<h2>Enter Section Heading Here</h2>\n';
        break;
      case 'h3':
        snippet = '\n<h3>Enter Subheading Here</h3>\n';
        break;
      case 'p':
        snippet = '\n<p>Write your detailed paragraph content here with authoritative SEO terminology.</p>\n';
        break;
      case 'bold':
        snippet = '<strong>bold text</strong>';
        break;
      case 'ul':
        snippet = '\n<ul>\n  <li>First key deliverable or point</li>\n  <li>Second key metric or outcome</li>\n  <li>Third strategic advantage</li>\n</ul>\n';
        break;
      case 'blockquote':
        snippet = '\n<blockquote>\n  "Client quote or key takeaway that emphasizes market authority."\n</blockquote>\n';
        break;
      case 'code':
        snippet = '\n<pre><code>// Technical architecture example\nconst speed = 100;\n</code></pre>\n';
        break;
      case 'img':
        snippet = '\n<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80" alt="Descriptive SEO alt text" class="rounded-2xl my-6 w-full shadow-md" />\n';
        break;
      default:
        break;
    }
    setContentHtml((prev) => prev + snippet);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setExcerpt(post.excerpt);
    setContentHtml(post.content || '');
    setCoverImage(post.coverImage || '');
    setKeywords(post.keywords?.join(', ') || '');
    setMetaTitle(post.metaTitle || '');
    setMetaDescription(post.metaDescription || '');
    setAuthorName(post.author || 'Jugarr Founder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, postTitle) => {
    if (window.confirm(`Permanently delete article: "${postTitle}" from MongoDB?`)) {
      const updated = await deletePost(id);
      setPosts(updated);
      showToast(`Deleted "${postTitle}" from database.`);
      if (editingPost?._id === id || editingPost?.id === id) {
        handleCancel();
      }
    }
  };

  const handleWipeAll = async () => {
    if (window.confirm('⚠️ Are you sure you want to delete ALL blog posts from the database?')) {
      await clearAllPosts();
      setPosts([]);
      handleCancel();
      showToast('Database wiped cleanly.');
    }
  };

  const handleExportBackup = () => {
    const jsonStr = JSON.stringify(posts, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jugarr-mongodb-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('Downloaded MongoDB backup file to computer!');
  };

  const handleCancel = () => {
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setCategory('SEO Dominance');
    setExcerpt('');
    setContentHtml('');
    setCoverImage('');
    setKeywords('');
    setMetaTitle('');
    setMetaDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !contentHtml) {
      alert('Please fill in Title, Slug, and HTML Content.');
      return;
    }

    const postPayload = {
      _id: editingPost?._id,
      id: editingPost?.id,
      title,
      slug,
      category,
      excerpt: excerpt || title,
      content: contentHtml,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
      keywords: keywords.split(',').map((k) => k.trim()).filter(Boolean),
      metaTitle: metaTitle || `${title} | JUGARR Agency`,
      metaDescription: metaDescription || excerpt || title,
      author: authorName,
      status: 'Published'
    };

    const updated = await savePost(postPayload);
    setPosts(updated);
    showToast(editingPost ? 'Article updated in MongoDB!' : 'New real HTML article saved into MongoDB!');
    handleCancel();
  };

  // PASSWORD LOCK SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-md w-full p-8 rounded-4xl bg-surface border-2 border-charcoal-300 shadow-tactile-lg text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-ink text-white flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-8 h-8 text-accent" />
          </div>

          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase tracking-widest">
              RESTRICTED ACCESS
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink mt-1">
              Admin CMS & Database
            </h1>
            <p className="text-xs text-charcoal-600 mt-2 font-mono">
              Enter admin master password to authenticate with the database.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <KeyRound className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-mono"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-ink hover:bg-accent text-white font-display font-bold text-sm rounded-full transition-colors shadow-tactile flex items-center justify-center gap-2"
            >
              <span>Unlock Admin Dashboard</span>
              <Unlock className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-charcoal-200 text-charcoal-400 font-mono text-[11px] flex items-center justify-center gap-2">
            <Database className="w-3.5 h-3.5 text-accent" />
            <span>MONGODB ENGINE // JUGARR OS 2026</span>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-ink text-white border border-emerald-500 shadow-2xl flex items-center gap-3 font-mono text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal-200">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full font-mono text-xs font-bold">
              <Database className="w-3 h-3" />
              <span>{dbStatus?.database || 'MongoDB Engine'}</span>
            </span>
            <span className="font-mono text-xs text-charcoal-500">
              STATUS: {dbStatus?.status === 'online' ? 'ONLINE (PORT 5000)' : 'STANDALONE MODE'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Admin CMS: Database Publishing Deck.
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 font-mono">
            Every published article is saved directly to MongoDB and indexed for search engines.
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <button
            onClick={loadPosts}
            className="p-2 rounded-full bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-charcoal-800"
            title="Refresh database records"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleExportBackup}
            className="px-3.5 py-2 rounded-full bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-charcoal-800 flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-accent" />
            <span>Export Backup</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-full bg-charcoal-100 hover:bg-red-50 text-charcoal-700 hover:text-red-700 border border-charcoal-200 transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Form (Left Column) */}
        <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-4xl border border-charcoal-300 shadow-tactile">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-200">
            <h2 className="font-display font-bold text-xl text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              <span>{editingPost ? 'Edit MongoDB Post (HTML)' : 'Compose New Real Post (HTML)'}</span>
            </h2>

            {editingPost && (
              <button
                type="button"
                onClick={handleCancel}
                className="font-mono text-xs text-rose-600 hover:underline font-bold"
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1">
                Article Title (H1) *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. How We Built a 100/100 Core Web Vitals Next.js Architecture"
                className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm sm:text-base text-ink focus:outline-none focus:border-accent font-display font-bold"
              />
            </div>

            {/* Slug & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1">
                  Google URL Slug *
                </label>
                <div className="flex items-center">
                  <span className="px-3 py-2.5 bg-charcoal-100 border border-r-0 border-charcoal-300 rounded-l-xl font-mono text-xs text-charcoal-500">
                    /blog/
                  </span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="clean-url-slug"
                    className="w-full px-3 py-2.5 rounded-r-xl bg-canvas border border-charcoal-300 text-xs text-ink focus:outline-none focus:border-accent font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-charcoal-300 text-xs text-ink focus:outline-none focus:border-accent font-sans"
                >
                  <option value="SEO Dominance">SEO Dominance</option>
                  <option value="Web Architecture">Web Architecture</option>
                  <option value="Mobile Engineering">Mobile Engineering</option>
                  <option value="Case Study">Case Study</option>
                </select>
              </div>
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1">
                Featured Cover Image URL
              </label>
              <input
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2 rounded-xl bg-canvas border border-charcoal-300 text-xs text-ink focus:outline-none focus:border-accent font-mono"
              />
            </div>

            {/* Meta Excerpt */}
            <div>
              <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1">
                Google Search Snippet / Excerpt *
              </label>
              <textarea
                rows="2"
                required
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="2 sentences describing the core breakthrough for search engine snippets..."
                className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-charcoal-300 text-xs text-ink focus:outline-none focus:border-accent font-sans"
              />
            </div>

            {/* HTML Body Editor with Toolbar */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="font-mono text-xs font-bold text-charcoal-700 uppercase">
                  Article Body (HTML Format) *
                </label>

                {/* Editor Tabs */}
                <div className="flex items-center gap-1 bg-charcoal-100 p-1 rounded-xl font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setEditorTab('code')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      editorTab === 'code' ? 'bg-white text-ink font-bold shadow-sm' : 'text-charcoal-600'
                    }`}
                  >
                    HTML Code
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorTab('preview')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      editorTab === 'preview' ? 'bg-white text-ink font-bold shadow-sm' : 'text-charcoal-600'
                    }`}
                  >
                    Live Preview
                  </button>
                </div>
              </div>

              {/* HTML Quick Insertion Tags Toolbar */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-charcoal-100 rounded-xl font-mono text-[11px]">
                <span className="text-charcoal-500 mr-1 font-bold">Quick Tags:</span>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('h2')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800 font-bold"
                >
                  &lt;h2&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('h3')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800 font-bold"
                >
                  &lt;h3&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('p')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800"
                >
                  &lt;p&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('bold')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800 font-bold"
                >
                  &lt;strong&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('ul')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800"
                >
                  &lt;ul&gt; &lt;li&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('blockquote')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800"
                >
                  &lt;blockquote&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('code')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800"
                >
                  &lt;pre&gt; &lt;code&gt;
                </button>
                <button
                  type="button"
                  onClick={() => insertHtmlTag('img')}
                  className="px-2 py-1 bg-white hover:bg-charcoal-200 border border-charcoal-200 rounded text-charcoal-800"
                >
                  &lt;img&gt;
                </button>
              </div>

              {editorTab === 'code' ? (
                <textarea
                  rows="12"
                  required
                  value={contentHtml}
                  onChange={(e) => setContentHtml(e.target.value)}
                  placeholder="<h2>Why Custom Next.js Beats WordPress</h2>&#10;<p>Write your HTML paragraphs here...</p>&#10;<ul>&#10;  <li>Point 1</li>&#10;  <li>Point 2</li>&#10;</ul>"
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-xs font-mono text-ink focus:outline-none focus:border-accent leading-relaxed"
                />
              ) : (
                /* LIVE HTML PREVIEW BOX */
                <div className="p-6 rounded-xl bg-canvas border border-charcoal-300 min-h-[300px] overflow-y-auto prose prose-stone max-w-none text-xs sm:text-sm">
                  {contentHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                  ) : (
                    <div className="text-charcoal-400 font-mono italic">
                      HTML preview will appear here as you type...
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SEO Keywords & Meta Box */}
            <div className="p-4 rounded-2xl bg-charcoal-100/70 border border-charcoal-200 space-y-3">
              <div className="font-mono text-xs font-bold text-accent uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GOOGLE SEARCH RANKING ENTITIES</span>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-charcoal-600 mb-0.5">
                  Target Search Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. Next.js Agency, 120fps React Native, Programmatic SEO"
                  className="w-full px-3 py-2 rounded-lg bg-surface border border-charcoal-300 text-xs font-mono text-ink"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-charcoal-600 mb-0.5">
                  Custom &lt;title&gt; Tag (Defaults to H1 Title)
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="e.g. Custom Web Development & SEO | JUGARR Agency"
                  className="w-full px-3 py-2 rounded-lg bg-surface border border-charcoal-300 text-xs font-mono text-ink"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-ink text-white hover:bg-accent font-display font-bold text-sm sm:text-base rounded-full transition-all shadow-tactile flex items-center justify-center gap-2"
              >
                <span>{editingPost ? 'Save HTML Changes to MongoDB' : 'Publish Real Article to MongoDB'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Existing Articles List (Right Column) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="font-display font-bold text-lg text-ink">
              MongoDB Articles ({posts.length})
            </h3>

            {posts.length > 0 && (
              <button
                onClick={handleWipeAll}
                className="font-mono text-xs text-red-600 hover:text-red-800 flex items-center gap-1 font-semibold"
                title="Wipe all articles"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Wipe All</span>
              </button>
            )}
          </div>

          {posts.length === 0 ? (
            <div className="p-8 rounded-3xl bg-surface border-2 border-dashed border-charcoal-300 text-center space-y-3 font-mono text-xs text-charcoal-500">
              <Database className="w-8 h-8 text-charcoal-400 mx-auto" />
              <div className="font-bold text-ink text-sm">MongoDB Connected & Empty</div>
              <p>
                Zero fake data. Compose your first real HTML article on the left to save directly into MongoDB!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post._id || post.id}
                  className="p-4 rounded-2xl bg-surface border border-charcoal-300 shadow-sm flex flex-col justify-between hover:border-charcoal-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-charcoal-400 mb-1">
                      <span className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-800 font-semibold">
                        {post.category}
                      </span>
                      <span>{post.date || post.formattedDate}</span>
                    </div>

                    <h4 className="font-display font-bold text-sm text-ink line-clamp-2 mt-1">
                      {post.title}
                    </h4>

                    <div className="font-mono text-[11px] text-accent font-semibold mt-1">
                      /blog/{post.slug}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-charcoal-200 flex items-center justify-between font-mono text-xs">
                    <Link
                      to={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-charcoal-600 hover:text-ink flex items-center gap-1 font-semibold"
                    >
                      <span>Live View</span> <ExternalLink className="w-3 h-3" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-1.5 rounded-lg bg-charcoal-100 hover:bg-charcoal-200 text-ink transition-colors"
                        title="Edit article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(post._id || post.id, post.title)}
                        className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition-colors"
                        title="Delete article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hosting Guide Card */}
          <div className="p-6 rounded-3xl bg-charcoal-900 text-white font-mono text-xs space-y-3 shadow-tactile">
            <div className="text-accent font-bold uppercase flex items-center gap-1.5">
              <Database className="w-4 h-4" />
              <span>MONGODB CLOUD HOSTING SETUP</span>
            </div>
            <p className="text-charcoal-300 text-[11px] leading-relaxed font-sans">
              1. Create a free cluster on <strong>MongoDB Atlas</strong> (<a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer" className="text-accent underline">mongodb.com</a>).
            </p>
            <p className="text-charcoal-300 text-[11px] leading-relaxed font-sans">
              2. Paste your connection string into your <code className="text-terminal-green">.env</code> file:
              <br />
              <code className="text-cyan-300 text-[10px] break-all">MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/jugarr</code>
            </p>
            <p className="text-charcoal-300 text-[11px] leading-relaxed font-sans">
              3. When deploying to Vercel/Render, add <code className="text-terminal-green">MONGODB_URI</code> to your host's Environment Variables and your database is 100% cloud-synced!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
