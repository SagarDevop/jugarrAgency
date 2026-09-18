import ContactPage from '@/src/views/ContactPage';

export const metadata = {
  title: 'Start a Web Development Project — Contact & Intake',
  description: 'Discuss your web development, e-commerce, or custom web application requirements directly with founder and developer Sagar Singh Rajawat.',
  alternates: {
    canonical: 'https://jugarr.in/contact',
  },
  openGraph: {
    title: 'Start a Web Development Project — Contact & Intake | Jugarr',
    description: 'Work directly with founder Sagar Singh Rajawat. Direct engineering sprint allocation.',
    url: 'https://jugarr.in/contact',
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
