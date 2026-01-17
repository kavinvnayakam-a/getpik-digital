import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    "We partner with the world's most ambitious brands and creators. See the companies that trust GetPik for their digital content and marketing.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
