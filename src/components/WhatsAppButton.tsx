'use client';

import Link from 'next/link';
import Image from 'next/image';

export function WhatsAppButton() {
  const phoneNumber = '917337583794';
  const message = 'Hi I found GetPik on your website and would like to know more.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWhatsApp.webp?alt=media&token=91513a5f-7e55-4114-8ae9-25f3da8cd22f"
        alt="WhatsApp icon"
        width={64}
        height={64}
        className="relative rounded-full"
      />
    </Link>
  );
}
