import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Seeyan | Ev Charge Branding Quotations",
  robots: { index: false, follow: false }, // FORCE NO CRAWLING
  openGraph: {
    title: "Seeyan | Ev Charge Branding Quotations",
    images: [{
      url: '',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },
};

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}