"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/WhatsAppButton'; // Added braces back

export function LayoutVisibilityWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // This targets your invitation folder specifically
  const isInvitationPage = pathname.includes('/invitation/engagement150');

  return (
    <div className="flex min-h-screen flex-col">
      {!isInvitationPage && <Header />}
      <main className="flex-1">{children}</main>
      {!isInvitationPage && <Footer />}
      {!isInvitationPage && <WhatsAppButton />}
    </div>
  );
}