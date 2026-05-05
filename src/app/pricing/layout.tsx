import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Packages | Photography & Content',
  description:
    'Transparent pricing for wedding photography in Hyderabad, reels in Erode, and full-stack digital marketing. Find your growth plan here.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
