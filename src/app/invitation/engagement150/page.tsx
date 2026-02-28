"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

/**
 * 3D WEDDING INVITATION - REFINED LAYERS
 * - Lanterns: Moved behind text layer (Layer 1.5)
 * - Flowers: Hidden on Desktop (Mobile only)
 * - Animations: Reduced intensity for swaying/floating
 * - Maps: Tagged to RHUKRA MAHAL
 */

const ASSETS = {
  ganesh: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2FVinayager.webp?alt=media&token=779e6bd3-5dcf-42b8-a2d9-e0d4345ea9b3",
  mandala: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2Fbgmandala.webp?alt=media&token=f2875248-6a76-4654-9f58-f3810a9d8468",
  lanternLeft: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2FLeft%20lattern.webp?alt=media&token=a11a43b3-5ef1-4a05-b292-f977c0d81d66",
  lanternRight: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2FRIght_light.webp?alt=media&token=e53a8a6d-9e6b-4782-8a8e-1ca913a1f9f6",
  brideCart: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2Fbride%20cart.webp?alt=media&token=9a5e4003-e163-43dd-a864-6377d2070831",
  flowerForeground: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2Fengagementsruthi%2FForeground%20flower.webp?alt=media&token=226afcb8-bb7a-4936-b36d-4afcf442d97a"
};

export default function EngagementInvitation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFBF2] overflow-x-hidden font-serif selection:bg-orange-100">
      <Head>
        <title>Sruthi & Akashvar | Engagement Invitation</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>

      {/* --- LAYER 0: Background Mandala --- */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04]">
        <img src={ASSETS.mandala} alt="" className="w-[180%] max-w-none animate-spin-slow" />
      </div>

      {/* --- LAYER 1: Lanterns (Fixed, Behind Text) --- */}
      {/* Reduced z-index to 10 so text (z-30) stays on top */}
      <div className="fixed top-0 left-0 w-full h-0 z-10 pointer-events-none">
        <img 
            src={ASSETS.lanternLeft} 
            className="absolute top-0 left-[3%] w-44 md:w-80 drop-shadow-xl animate-float-slow opacity-90" 
            alt="" 
        />
        <img 
            src={ASSETS.lanternRight} 
            className="absolute top-0 right-[3%] w-44 md:w-80 drop-shadow-xl animate-float-delayed opacity-90" 
            alt="" 
        />
      </div>

      {/* --- LAYER 2: Main Scrolling Content (Above Lanterns) --- */}
      <main className="relative z-30 flex flex-col items-center pt-32 px-6 text-center">
        
        {/* Ganesha */}
        <div className="mb-8">
          <img src={ASSETS.ganesh} className="w-24 md:w-32" alt="Ganesha" />
        </div>

        {/* Text Details */}
        <div className="space-y-4 mb-10 max-w-sm md:max-w-xl">
          <p className="text-orange-800 uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold">
            Mr Vijayakumar & Mrs Ponne
          </p>
          <p className="text-stone-500 italic text-sm md:text-base leading-relaxed">
            cordially invite you to the engagement of their daughter
          </p>
        </div>

        {/* Names */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-6xl md:text-8xl font-light text-orange-900 drop-shadow-sm">Sruthi</h1>
          <span className="text-3xl text-orange-400 my-2 italic">&</span>
          <h1 className="text-6xl md:text-8xl font-light text-orange-900 drop-shadow-sm">Akashvar</h1>
        </div>

        <div className="mb-12">
          <p className="text-stone-400 text-xs mb-1 italic">son of</p>
          <p className="text-orange-800 uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold">
            Mr Sureshkumar & Mrs Punithavalli
          </p>
        </div>

        {/* Schedule */}
        <div className="w-full max-w-md border-y border-orange-100 py-8 mb-16">
          <h3 className="text-2xl md:text-3xl text-orange-950 tracking-tight font-semibold">
            SUNDAY, MARCH 08, 2026
          </h3>
          <p className="text-stone-500 tracking-[0.4em] text-[10px] mt-2 uppercase font-bold">At 10:00 AM</p>
        </div>

        {/* Venue & Map Section */}
        <div className="mb-10 w-full max-w-2xl">
          <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase mb-1">Venue</p>
          <h2 className="text-3xl text-orange-950 font-bold mb-6 tracking-wide">RHUKRA MAHAL</h2>
          
          <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-orange-100 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.34!2d77.7125!3d11.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzQ2LjkiTiA3N8KwNDInNDUuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=11.34636453992588,77.71250543963544" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-orange-800 text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-md active:scale-95 transition-all"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Bride Cart - Bottom of Content */}
        <div className="w-full max-w-md mt-10 p-0 leading-[0]">
           <img src={ASSETS.brideCart} alt="Bride" className="w-full h-auto m-0 p-0 block" />
        </div>
      </main>

      {/* --- LAYER 3: Swaying Foreground Flowers (Mobile Only) --- */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none overflow-hidden leading-[0] md:hidden">
          <img 
            src={ASSETS.flowerForeground} 
            className="w-[110%] max-w-none object-cover object-bottom animate-sway block" 
            alt="" 
          />
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(-1.5%) translateY(0); }
          50% { transform: translateX(1.5%) translateY(0); }
        }

        .animate-spin-slow { animation: spin-slow 160s linear infinite; }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 9s ease-in-out infinite; animation-delay: 2s; }
        .animate-sway { animation: sway 12s ease-in-out infinite; }

        body {
          background-color: #FFFBF2;
          margin: 0;
          padding: 0;
        }
        img { display: block; }
      `}</style>
    </div>
  );
}