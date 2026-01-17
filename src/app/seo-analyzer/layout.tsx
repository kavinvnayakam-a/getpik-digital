import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Analyzer',
  description:
    "Analyze your website's technical SEO with our free tool. Get an instant score and identify opportunities to improve your ranking and get picked by search engines.",
};

export default function SeoAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
