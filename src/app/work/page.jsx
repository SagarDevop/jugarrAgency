import WorkPage from '@/src/views/WorkPage';

export const metadata = {
  title: 'Selected Client Work & Engineering Case Studies',
  description: 'Explore verified client websites and web applications built by Jugarr, including Bandamart local grocery platform and 4 Lotus Interior website renovation.',
  alternates: {
    canonical: 'https://jugarr.in/work',
  },
  openGraph: {
    title: 'Selected Client Work & Engineering Case Studies | Jugarr',
    description: 'Explore verified client websites and web applications built by Sagar Singh Rajawat.',
    url: 'https://jugarr.in/work',
  },
};

export default function WorkRoute() {
  return <WorkPage />;
}
