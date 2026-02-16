import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollTimeline } from '@/components/ui/scroll-timeline';
import { GridBackground } from '@/components/ui/grid-background';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { LayoutVisibilityWrapper } from '@/components/LayoutVisibilityWrapper';

export const metadata: Metadata = {
  // Forces all metadata links (canonical, OG images) to use the www domain
  metadataBase: new URL('https://www.getpik.in'),
  title: {
    template: '%s | GetPik - Reels, Content, & Websites',
    default: 'GetPik - Same-Day Reels, Content & Websites',
  },
  description:
    'Get your brand picked on social media with same-day content delivery. High-quality reels, commercial videos, and high-performance websites in Hyderabad.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GetPik - Content & Websites',
    description: 'Same-day delivery for reels and digital marketing content.',
    url: 'https://www.getpik.in',
    siteName: 'GetPik',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Ensure you have an OG image in your public folder
        width: 1200,
        height: 630,
        alt: 'GetPik - Professional Content Creation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetPik - Content & Websites',
    description: 'Same-day reels and website development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Professional Service Schema for Local SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GetPik',
    url: 'https://www.getpik.in',
    logo: 'https://www.getpik.in/logo.png',
    image: 'https://www.getpik.in/og-image.png',
    description: 'Same-day reels, video content, and website development services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'TS',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.3850', // Hyderabad coordinates
      longitude: '78.4867',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.instagram.com/getpik', // Replace with your actual URLs
      'https://www.facebook.com/getpik',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
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