import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore our curated showcase of high-impact video reels. See how we help brands get picked on social media with stunning content for makeup artists, fashion, and more.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
