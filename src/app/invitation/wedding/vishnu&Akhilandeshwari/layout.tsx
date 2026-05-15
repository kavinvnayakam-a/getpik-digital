import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Vishnupathy & Akilandeshwari | Wedding Invitation",
  description: "Join us in celebrating the Wedding of Vishnupathy & Akilandeshwari.",
  robots: { index: false, follow: false }, // FORCE NO CRAWLING
  openGraph: {
    title: "Vishnupathy & Akilandeshwari | Wedding Invitation",
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Vishnu%26Akila%2FVishnu%20thumbnail.webp?alt=media&token=80cdd9aa-96bd-40c8-9453-38c165f86359',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },
};

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}