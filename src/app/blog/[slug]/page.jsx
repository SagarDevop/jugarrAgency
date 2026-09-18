import BlogPostPage from '@/src/views/BlogPostPage';
import { getFallbackPosts } from '@/lib/mongodb';

export async function generateStaticParams() {
  const posts = getFallbackPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = getFallbackPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Jugarr Journal',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} | The Jugarr Journal`,
    description: post.excerpt || post.metaDescription,
    alternates: {
      canonical: `https://jugarr.in/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://jugarr.in/blog/${slug}`,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author || 'Sagar Singh Rajawat'],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostRoute({ params }) {
  const { slug } = await params;
  const posts = getFallbackPosts();
  const post = posts.find((p) => p.slug === slug);

  const articleSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage ? `https://jugarr.in${post.coverImage}` : undefined,
        datePublished: post.createdAt || '2026-09-17T00:00:00.000Z',
        dateModified: post.updatedAt || post.createdAt || '2026-09-17T00:00:00.000Z',
        author: {
          '@type': 'Person',
          '@id': 'https://jugarr.in/about#founder',
          name: post.author || 'Sagar Singh Rajawat',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://jugarr.in/#organization',
          name: 'Jugarr',
          logo: {
            '@type': 'ImageObject',
            url: 'https://jugarr.in/favicon.svg',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://jugarr.in/blog/${slug}`,
        },
      }
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostPage initialPost={post} />
    </>
  );
}
