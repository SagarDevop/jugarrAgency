import HomePage from '@/src/views/HomePage';

export const metadata = {
  title: 'Jugarr — Web Development & Digital Solutions Studio',
  description: 'Jugarr, founded by Sagar Singh Rajawat, builds modern websites, e-commerce storefronts, and custom full-stack web applications for businesses.',
  alternates: {
    canonical: 'https://jugarr.in/',
  },
  openGraph: {
    title: 'Jugarr — Web Development & Digital Solutions Studio',
    description: 'Websites and digital products, built with purpose by Sagar Singh Rajawat.',
    url: 'https://jugarr.in/',
  },
};

export default function Page() {
  return <HomePage />;
}
