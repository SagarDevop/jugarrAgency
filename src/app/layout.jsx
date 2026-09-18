import './globals.css';
import ClientLayout from '@/src/components/ClientLayout';

export const metadata = {
  title: {
    default: 'Jugarr — Web Development & Digital Solutions Studio',
    template: '%s | Jugarr',
  },
  description: 'Jugarr, founded by Sagar Singh Rajawat, builds modern websites, e-commerce storefronts, and custom full-stack web applications for businesses.',
  keywords: ['web development', 'e-commerce websites', 'custom web applications', 'UI/UX design', 'Sagar Singh Rajawat', 'Jugarr'],
  metadataBase: new URL('https://jugarr.in'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Jugarr — Web Development & Digital Solutions Studio',
    description: 'Websites and digital products, built with purpose by Sagar Singh Rajawat.',
    url: 'https://jugarr.in/',
    siteName: 'Jugarr',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jugarr — Web Development & Digital Solutions Studio',
    description: 'Websites and digital products, built with purpose by Sagar Singh Rajawat.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://jugarr.in/#organization',
  name: 'Jugarr',
  url: 'https://jugarr.in',
  logo: 'https://jugarr.in/favicon.svg',
  email: 'contact@jugarr.in',
  description: 'Jugarr is a founder-led web development studio founded by Sagar Singh Rajawat, building custom websites, e-commerce storefronts, and full-stack web applications.',
  founder: {
    '@type': 'Person',
    '@id': 'https://jugarr.in/about#founder',
    name: 'Sagar Singh Rajawat',
    jobTitle: 'Founder & Technical Lead',
    url: 'https://jugarr.in/about',
    sameAs: [
      'https://github.com/SagarDevop',
      'https://www.linkedin.com/in/sagardevop/',
      'https://www.instagram.com/sgr_here/',
    ],
  },
  sameAs: [
    'https://www.instagram.com/sgr_here/',
    'https://github.com/SagarDevop',
    'https://www.linkedin.com/in/sagardevop/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://jugarr.in/#website',
  url: 'https://jugarr.in',
  name: 'Jugarr',
  publisher: {
    '@id': 'https://jugarr.in/#organization',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=VT323&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-canvas text-charcoal-900 selection:bg-accent selection:text-white antialiased overflow-x-hidden font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
