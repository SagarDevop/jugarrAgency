import AdminPage from '@/src/views/AdminPage';

export const metadata = {
  title: 'Admin CMS Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRoute() {
  return <AdminPage />;
}
