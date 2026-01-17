import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollTimeline } from '@/components/ui/scroll-timeline';
import { GridBackground } from '@/components/ui/grid-background';

export const metadata: Metadata = {
  title: {
    template: '%s | GetPik - Reels, Content, & Websites',
    default: 'GetPik - Same-Day Reels, Content & Websites',
  },
  description:
    'Get your brand picked on social media with same-day content delivery. We create high-quality reels, videos, and websites that drive engagement and results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GetPik',
    url: 'https://www.getpik.in', // Please replace with your actual domain
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <GridBackground />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollTimeline />
        <Toaster />
      </body>
    </html>
  );
}
