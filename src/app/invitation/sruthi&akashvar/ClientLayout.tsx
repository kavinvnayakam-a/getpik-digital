"use client"; // This marks it as a Client Component

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="invitation-root">
      {children}
      <style jsx global>{`
        header, footer, nav, .whatsapp-button, [class*="WhatsAppButton"] { 
          display: none !important; 
        }
        body { 
          margin: 0 !important; 
          padding: 0 !important; 
          overflow-x: hidden !important;
          background-color: #FFFBF2 !important;
        }
        .invitation-root { width: 100%; min-height: 100vh; position: relative; }
      `}</style>
    </div>
  );
}