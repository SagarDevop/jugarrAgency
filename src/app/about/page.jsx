import AboutPage from '@/src/views/AboutPage';

export const metadata = {
  title: 'About Sagar Singh Rajawat — Founder & Developer',
  description: 'Meet Sagar Singh Rajawat, founder and developer behind Jugarr. Building hand-crafted modern websites, e-commerce storefronts, and custom full-stack web applications for businesses.',
  alternates: {
    canonical: 'https://jugarr.in/about',
  },
  openGraph: {
    title: 'About Sagar Singh Rajawat — Founder & Developer | Jugarr',
    description: 'Learn about Sagar Singh Rajawat and the engineering principles behind Jugarr.',
    url: 'https://jugarr.in/about',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://jugarr.in/about#founder',
  name: 'Sagar Singh Rajawat',
  jobTitle: 'Founder & Technical Lead',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://jugarr.in/#organization',
    name: 'Jugarr',
    url: 'https://jugarr.in',
  },
  url: 'https://jugarr.in/about',
  sameAs: [
    'https://github.com/SagarDevop',
    'https://www.linkedin.com/in/sagardevop/',
    'https://www.instagram.com/sgr_here/',
  ],
  knowsAbout: [
    'Custom Web Development',
    'E-commerce Websites',
    'Full-stack Web Applications',
    'React and Next.js',
    'Node.js and MongoDB',
    'UI/UX Design',
    'Technical SEO',
  ],
};

export default function AboutRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutPage />
    </>
  );
}
