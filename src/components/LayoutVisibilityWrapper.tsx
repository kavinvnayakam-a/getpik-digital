"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export function LayoutVisibilityWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define the path where you want to hide the global elements
  // Change '/quotation' to whatever your actual file path is
  const isPrivatePage = pathname === '/quotation/wedding156'; 

  return (
    <div className="flex min-h-screen flex-col">
      {!isPrivatePage && <Header />}
      <main className="flex-1">{children}</main>
      {!isPrivatePage && <Footer />}
      {!isPrivatePage && <WhatsAppButton />}
    </div>
  );
}