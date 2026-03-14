import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Sruthi & Akashvar | Wedding Invitation",
  description: "Join us in celebrating the Wedding of Sruthi and Akashvar.",
  robots: { index: false, follow: false }, // FORCE NO CRAWLING
  openGraph: {
    title: "Sruthi & Akashvar | Wedding Invitation",
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FSocial%20Share%20wedding%20invitation.webp?alt=media&token=68c0f8d2-e8d7-4d8d-ba26-cf27b746e060',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },
};

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}