"use client"; 

import React from 'react';

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="invitation-root">
      {children}
      
      <style jsx global>{`
        /* 1. Hide Site-Wide UI */
        header, footer, nav { 
          display: none !important; 
        }
        
        /* 2. Target the specific WhatsAppButton Component */
        /* This covers the common class names for your component */
        .whatsapp-button, 
        .WhatsAppButton_wrapper__xxxx, 
        [class*="WhatsAppButton"],
        #whatsapp-btn { 
          display: none !important; 
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        /* 3. Reset Global Body for a full-screen feel */
        body { 
          margin: 0 !important; 
          padding: 0 !important; 
          overflow-x: hidden !important;
          background-color: #FFFBF2 !important;
        }

        .invitation-root {
          width: 100%;
          min-height: 100vh;
          position: relative;
        }
      `}</style>
    </div>
  );
}