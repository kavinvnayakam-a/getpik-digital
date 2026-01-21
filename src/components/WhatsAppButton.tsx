'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-8 w-8 text-white"
    fill="currentColor"
  >
    <path d="M16.75 13.96c.25.13.43.2.5.28.08.08.13.18.13.31 0 .13-.03.25-.08.38-.05.13-.15.25-.3.4l-.18.2a1.45 1.45 0 0 1-.73.45c-.3.13-.63.2-1 .2-.3 0-.58-.05-.85-.13a5.53 5.53 0 0 1-1.38-.63 8.4 8.4 0 0 1-2.2-1.93 8.35 8.35 0 0 1-1.9-2.25 5.2 5.2 0 0 1-.6-1.4c-.08-.28-.13-.55-.13-.83 0-.35.07-.68.2-1 .13-.3.33-.55.6-.73l.2-.18c.15-.15.28-.28.4-.38.1-.1.23-.15.38-.15.15 0 .3.03.45.08.15.05.28.13.4.2l.2.33c.1.15.18.3.23.48.05.18.08.35.08.53 0 .15-.02.3-.05.45a.9.9 0 0 1-.18.4l-.3.48c-.07.1-.1.2-.1.3 0 .1.02.18.07.25.05.07.1.13.15.17.25.3.55.6.9.9s.6.53.9.88c.07.05.13.1.17.15.07.05.15.08.25.07.1 0 .2-.03.3-.1l.48-.3c.15-.1.3-.18.48-.23.18-.05.35-.08.53-.08.18 0 .35.02.5.05.18.03.35.1.48.2l.33.2zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
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
