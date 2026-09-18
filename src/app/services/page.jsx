import ServicesPage from '@/src/views/ServicesPage';

export const metadata = {
  title: 'Web Development & Digital Solutions Capabilities',
  description: 'Explore web development services offered by Jugarr: custom e-commerce storefronts, high-performance business websites, full-stack web applications, and ongoing maintenance.',
  alternates: {
    canonical: 'https://jugarr.in/services',
  },
  openGraph: {
    title: 'Web Development & Digital Solutions Capabilities | Jugarr',
    description: 'Explore custom web development, e-commerce, and full-stack solutions built with React, Next.js, and Node.js.',
    url: 'https://jugarr.in/services',
  },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
