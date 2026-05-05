import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollTimeline } from '@/components/ui/scroll-timeline';
import { GridBackground } from '@/components/ui/grid-background';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { LayoutVisibilityWrapper } from '@/components/LayoutVisibilityWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getpik.in'),
  title: {
    template: '%s | GetPik - Content & Photography',
    default: 'GetPik - Same-Day Reels, Content & Photography in Hyderabad & Erode',
  },
  description:
    'GetPik offers high-end wedding and commercial photography in Hyderabad, Erode, and TN. Same-day content delivery for reels, video content, and high-performance websites.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GetPik - Premium Content & Photography',
    description: 'Specializing in GetPik Photography and digital content delivery in Hyderabad and Erode.',
    url: 'https://www.getpik.in',
    siteName: 'GetPik',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GetPik Digital - Professional Photography & Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetPik - Content & Photography',
    description: 'Expert photography in Hyderabad and Erode. Same-day reels and content creation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GetPik',
    alternateName: 'Getpik Photography',
    url: 'https://www.getpik.in',
    logo: 'https://www.getpik.in/logo.png',
    image: 'https://www.getpik.in/og-image.png',
    description: 'Premium photography in Hyderabad, Erode, and across TN. We provide same-day reels, video content, and professional wedding photography.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'TS',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.3850',
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
      'https://www.instagram.com/getpik',
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
