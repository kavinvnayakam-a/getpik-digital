import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hire GetPik Photography',
  description:
    'Ready to launch? Contact GetPik for the best photography in Hyderabad and Erode. Fast inquiry response for weddings and commercial projects.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
