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
      className="fixed bottom-6 right-6 z-50 h-16 w-16 transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp icon"
        width={64}
        height={64}
      />
    </Link>
  );
}
