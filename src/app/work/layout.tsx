import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Commercial Video & Reels',
  description:
    'Explore the GetPik portfolio. See our latest reels, commercial videos, and brand storytelling projects from Hyderabad to Erode.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    name: 'GetPik Video Portfolio',
    description: 'A curated selection of high-performance social media reels and commercial video productions.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
