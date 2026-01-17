import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Idea Engine',
  description:
    'Generate endless high-quality content ideas for your brand. Our AI-powered idea engine helps you create content that gets you picked by your target audience.',
};

export default function IdeasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
