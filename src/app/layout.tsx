import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollTimeline } from '@/components/ui/scroll-timeline';
import { GridBackground } from '@/components/ui/grid-background';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { LayoutVisibilityWrapper } from '@/components/LayoutVisibilityWrapper';

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
    url: 'https://www.getpik.in',
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
        <FirebaseClientProvider>
          <GridBackground />
          
          {/* This wrapper handles hiding the header/footer/whatsapp */}
          <LayoutVisibilityWrapper>
            {children}
          </LayoutVisibilityWrapper>

          <ScrollTimeline />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}