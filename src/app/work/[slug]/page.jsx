import { notFound } from 'next/navigation';
import CaseStudyDetailPage from '@/src/views/CaseStudyDetailPage';
import { DEDICATED_CASE_STUDIES } from '@/src/data/servicesAndWorkDetailData';

export async function generateStaticParams() {
  return Object.keys(DEDICATED_CASE_STUDIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = DEDICATED_CASE_STUDIES[slug];

  if (!project) {
    return {
      title: 'Case Study Not Found | Jugarr',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: {
      canonical: `https://jugarr.in/work/${slug}`,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://jugarr.in/work/${slug}`,
      type: 'article',
      images: project.image ? [project.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metaTitle,
      description: project.metaDescription,
    },
  };
}

export default async function CaseStudyRoute({ params }) {
  const { slug } = await params;
  const project = DEDICATED_CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jugarr.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work',
        item: 'https://jugarr.in/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://jugarr.in/work/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyDetailPage projectData={project} />
    </>
  );
}
