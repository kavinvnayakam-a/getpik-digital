'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    className="h-8 w-8 text-white"
    fill="currentColor"
  >
    <path fillRule="evenodd" d="M37.12 37.75c-.32.18-.7.3-1.15.35-.45.05-.9.08-1.33.08-1.15 0-2.28-.2-3.4-.6-1.1-.4-2.15-.93-3.14-1.58-1-.65-1.92-1.42-2.76-2.3-1.1-1.17-2-2.5-2.7-4-.57-1.24-.87-2.54-.9-3.92-.02-.82.1-1.6.38-2.32.28-.7.7-1.28 1.25-1.75l.4-.35c.2-.18.4-.32.6-.42.2-.1.4-.15.63-.15s.45.05.65.1c.2.08.38.18.52.3l.35.52c.12.2.22.4.3.6.08.2.12.4.12.6s-.03.4-.08.58c-.05.18-.13.35-.22.5l-.52.82c-.08.12-.12.23-.12.33s.03.2.08.28c.05.08.12.15.2.22.4.42.82.82 1.3 1.2.45.38.9.72 1.35 1 .08.05.15.1.2.13.1.03.2 0 .28-.02.08-.03.18-.08.25-.13l.82-.53c.2-.12.4-.2.6-.22.2-.02.4 0 .58.07.18.05.35.13.5.22l.52.35c.18.12.32.28.42.48.1.2.15.4.15.6s-.05.4-.15.6l-.35.52c-.12.2-.28.35-.48.48zM26 0C11.66 0 0 11.66 0 26s11.66 26 26 26 26-11.66 26-26S40.34 0 26 0zm0 48.8C13.53 48.8 3.2 38.47 3.2 26S13.53 3.2 26 3.2c12.47 0 22.8 10.33 22.8 22.8S38.47 48.8 26 48.8z" />
  </svg>
);

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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute h-full w-full animate-pulse rounded-full bg-[#25D366] opacity-50"></div>
      <WhatsAppIcon />
    </Link>
  );
}
