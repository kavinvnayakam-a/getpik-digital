import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Sruthi & Akashvar | Wedding Invitation",
  description: "Join us in celebrating the Wedding of Sruthi and Akashvar.",
  robots: { index: false, follow: false }, // FORCE NO CRAWLING
  openGraph: {
    title: "Sruthi & Akashvar | Wedding Invitation",
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FSruthi%202%20Social%20Sharing%20(1).webp?alt=media&token=8c801bd4-0b73-43ca-9d4a-3181f29885fe',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },
};

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}