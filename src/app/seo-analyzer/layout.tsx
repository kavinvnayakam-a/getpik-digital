import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Analyzer | Website Audit Tool',
  description:
    'Audit your website’s performance with GetPik’s technical SEO analyzer. Optimize for keywords like photography in TN and more.',
};

export default function SeoAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
