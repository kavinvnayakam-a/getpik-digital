import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Idea Engine | Creative Concepts',
  description:
    'Generate viral concepts for your photography or brand with GetPik’s neural idea engine. Perfect for creators in Erode and Hyderabad.',
};

export default function IdeasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
