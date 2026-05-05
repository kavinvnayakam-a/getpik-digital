import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients | Brands We Empower',
  description:
    "Trusted by leading brands for photography in Hyderabad and digital marketing in TN. See who partners with GetPik for high-growth strategies.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
