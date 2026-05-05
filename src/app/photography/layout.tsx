import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetPik Photography - Wedding & Commercial',
  description:
    'Award-winning GetPik Photography in Hyderabad, Erode, and TN. Specialized in wedding storytelling, commercial shoots, and cinematic event coverage.',
  openGraph: {
    title: 'GetPik Photography | Hyderabad & Erode',
    description: 'The premier choice for photography in Erode and Hyderabad. High-end visuals and cinematic storytelling.',
    images: ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop'],
  }
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
