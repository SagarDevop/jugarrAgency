import BlogPage from '@/src/views/BlogPage';

export const metadata = {
  title: 'The Jugarr Journal — Web Architecture, Performance & Technical SEO',
  description: 'Technical insights, Next.js architecture patterns, performance teardowns, and web engineering lessons from building client projects at Jugarr.',
  alternates: {
    canonical: 'https://jugarr.in/blog',
  },
  openGraph: {
    title: 'The Jugarr Journal — Web Architecture, Performance & Technical SEO',
    description: 'Technical breakdowns on headless Next.js architecture, performance tuning, and technical SEO.',
    url: 'https://jugarr.in/blog',
  },
};

export default function BlogRoute() {
  return <BlogPage />;
}
