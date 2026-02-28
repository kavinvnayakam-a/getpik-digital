import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Sruthi & Akashvar | Engagement Invitation",
  description: "Join us in celebrating the engagement of Sruthi and Akashvar.",
  robots: { index: false, follow: false }, // FORCE NO CRAWLING
  openGraph: {
    title: "Sruthi & Akashvar | Engagement Invitation",
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2FSruthi.webp?alt=media&token=5084f7a4-7714-4fcf-ba69-d49a035a156e',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },
};

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}