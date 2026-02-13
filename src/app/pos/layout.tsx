import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QR Menu & POS for Restaurants, Resorts & Hotels',
  description:
    "Streamline your dining experience with GetPik's QR code menu and POS system. Perfect for restaurants, resorts, and hotels looking to improve efficiency and customer satisfaction.",
  openGraph: {
    title: 'QR Menu & POS for Restaurants, Resorts & Hotels | GetPik',
    description: "Streamline your dining experience with GetPik's QR code menu and POS system.",
    images: ['https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FSocial%20Sharing%20Getpik.png?alt=media&token=d6723fe8-984a-4242-899d-8de93a765841'],
  }
};

export default function POSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
