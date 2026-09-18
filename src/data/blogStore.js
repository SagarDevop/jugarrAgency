const API_BASE = '/api';

// Check DB & Server Health
export async function checkDatabaseHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('Server health check failed');
    return await res.json();
  } catch (err) {
    return {
      status: 'offline',
      database: 'Local Browser Cache',
      mongoConnected: false,
    };
  }
}

// Authenticate Admin Password with Backend
export async function authenticateAdmin(password) {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    // Fallback comparison if backend server offline
    if (password === 'jugarr2026') {
      return { success: true };
    }
    return { success: false, error: 'Connection failed' };
  }
}

// Fetch all posts from MongoDB
export async function getStoredPosts() {
  try {
    const res = await fetch(`${API_BASE}/posts`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    // Cache in localStorage as backup
    localStorage.setItem('jugarr_cached_posts', JSON.stringify(posts));
    return posts;
  } catch (err) {
    console.warn('API unavailable, loading from local cache:', err);
    try {
      const cached = localStorage.getItem('jugarr_cached_posts');
      return cached ? JSON.parse(cached) : [];
    } catch (e) {
      return [];
    }
  }
}

// Fetch single post by slug from MongoDB
export async function getPostBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/posts/${slug}`);
    if (!res.ok) throw new Error('Post not found');
    return await res.json();
  } catch (err) {
    // Fallback check in local cache
    const posts = await getStoredPosts();
    return posts.find((p) => p.slug === slug);
  }
}

// Save or Update post in MongoDB
export async function savePost(post) {
  const method = post._id || (post.id && !post.id.startsWith('post-')) ? 'PUT' : 'POST';
  const url = method === 'PUT' ? `${API_BASE}/posts/${post._id || post.id}` : `${API_BASE}/posts`;

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (!res.ok) throw new Error('Failed to save to MongoDB');
    return await getStoredPosts();
  } catch (err) {
    console.error('Error saving post to API:', err);
    // Fallback save in local cache
    const current = await getStoredPosts();
    const updated = [post, ...current.filter((p) => p.slug !== post.slug)];
    localStorage.setItem('jugarr_cached_posts', JSON.stringify(updated));
    return updated;
  }
}

// Delete post from MongoDB
export async function deletePost(idOrSlug) {
  try {
    await fetch(`${API_BASE}/posts/${idOrSlug}`, { method: 'DELETE' });
    return await getStoredPosts();
  } catch (err) {
    console.error('Error deleting from API:', err);
    const current = await getStoredPosts();
    const filtered = current.filter((p) => p._id !== idOrSlug && p.id !== idOrSlug && p.slug !== idOrSlug);
    localStorage.setItem('jugarr_cached_posts', JSON.stringify(filtered));
    return filtered;
  }
}

// Wipe all posts from MongoDB
export async function clearAllPosts() {
  try {
    await fetch(`${API_BASE}/posts`, { method: 'DELETE' });
    localStorage.removeItem('jugarr_cached_posts');
    return [];
  } catch (err) {
    localStorage.removeItem('jugarr_cached_posts');
    return [];
  }
}
