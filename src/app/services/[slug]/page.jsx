import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/src/views/ServiceDetailPage';
import { DEDICATED_SERVICES } from '@/src/data/servicesAndWorkDetailData';

export async function generateStaticParams() {
  return Object.keys(DEDICATED_SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = DEDICATED_SERVICES[slug];

  if (!service) {
    return {
      title: 'Service Not Found | Jugarr',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://jugarr.in/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://jugarr.in/services/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceRoute({ params }) {
  const { slug } = await params;
  const service = DEDICATED_SERVICES[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      '@id': 'https://jugarr.in/#organization',
      name: 'Jugarr',
      url: 'https://jugarr.in',
    },
    areaServed: 'Worldwide',
    url: `https://jugarr.in/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailPage serviceData={service} />
    </>
  );
}
