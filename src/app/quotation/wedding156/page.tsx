"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Camera, Video, Sparkles, Box, 
  Monitor, Zap, ShieldCheck, Info, 
  ChevronRight, Diamond, Star, Image as LucideImage,
  Navigation, Heart, Users
} from 'lucide-react';

export default function GetPikWeddingQuotation() {
  const [tier, setTier] = useState<'signature' | 'elite'>('signature');

  const packages = {
    signature: {
      total: "2,02,000",
      title: "The Signature",
      subtitle: "Dual-Event Ritual & Grandeur",
      ref: "VJ-WED-2026-SIG",
      ledCount: 2,
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 2 },
        { label: "Candid Photographer", count: 1 },
        { label: "Candid Videographer", count: 1 },
        { label: "Drone Operator", count: 1 }
      ],
      notes: "The Signature package is engineered for a single-day primary event flow. It focuses on high-fidelity storytelling for a timeless wedding legacy."
    },
    elite: {
      total: "2,56,000",
      title: "The Elite",
      subtitle: "Dual-Event Luxury Coverage",
      ref: "GP-WED-2026-ELT",
      ledCount: 4,
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 2 },
        { label: "Candid Photographer", count: 2 },
        { label: "Candid Videographer", count: 2 },
        { label: "Drone Operator", count: 1 }
      ],
      notes: "The Elite tier provides double the candid resources to cover separate Reception and Wedding schedules. Ideal for grand celebrations with 4 LED screen setups."
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-pink-950 selection:bg-pink-200 font-sans bg-[#fff5f7]">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-300/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-300/20 blur-[120px] rounded-full" />
      </div>

      <section className="pt-32 pb-32 container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Heart className="w-3 h-3 animate-pulse text-rose-500 fill-rose-500" />
            <span>A Wedding Proposal // 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-4">
            <span className="text-rose-900 not-italic">Get</span>
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent italic">Pik.</span>
          </h1>
          <p className="text-rose-400 font-medium italic uppercase tracking-[0.2em] text-sm">Capturing Your Eternal Love Story</p>
        </div>

        {/* --- CHARACTER ANIMATION SECTION --- */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-12 md:gap-24 mb-8 relative h-40 w-full max-w-xl">
            
            

            {/* REALISTIC 3D HEART */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-rose-700 animate-heart-pop shadow-[0_0_40px_rgba(225,29,72,0.4)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-5 w-8 h-5 bg-white/30 rounded-full blur-[4px]" />
                <Heart size={40} className="text-white fill-white drop-shadow-md" />
              </div>
            </div>

            {/* BRIDE IN LEHENGA */}
            
          </div>

          <div className="bg-white p-2 rounded-2xl border border-rose-100 shadow-xl flex gap-1 z-20">
            <button 
              onClick={() => setTier('signature')}
              className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${tier === 'signature' ? 'bg-rose-600 text-white shadow-lg' : 'text-rose-300 hover:text-rose-600'}`}
            >
              Signature
            </button>
            <button 
              onClick={() => setTier('elite')}
              className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${tier === 'elite' ? 'bg-pink-700 text-white shadow-lg' : 'text-rose-300 hover:text-pink-700'}`}
            >
              Elite
            </button>
          </div>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(244,63,94,0.1)] border border-rose-100">
          <div className="p-8 md:p-16">
            
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-rose-950">
                {packages[tier].title} Deliverables
              </h2>
              <p className="text-rose-400 text-lg italic leading-relaxed">
                {packages[tier].subtitle}. A romantic visual ecosystem tailored for your big day, combining <strong>cinematic artistry</strong> with <strong>soulful photography</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 border-t border-rose-50 pt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-2xl shadow-rose-200 shadow-lg">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none text-rose-900">The Experts</h3>
                </div>
                <ul className="space-y-4 text-rose-400 text-sm italic font-medium">
                  {packages[tier].crew.map((member, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-rose-50 pb-2">
                      <span className="flex gap-3 items-center text-rose-900">
                        <Star className="w-4 h-4 text-pink-400" /> {member.label}
                      </span>
                      <span className="font-black text-rose-600 px-3 py-1 bg-rose-50 rounded-lg text-xs">
                        {member.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-700 text-white flex items-center justify-center rounded-2xl shadow-pink-200 shadow-lg">
                    <LucideImage size={24} />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none text-rose-900">The Keepsakes</h3>
                </div>
                <ul className="space-y-4 text-rose-400 text-sm italic font-medium">
                  <li className="flex gap-3 items-center text-rose-900"><Sparkles className="w-4 h-4 text-pink-400" /> <span>Luxury Album with Designer Editing</span></li>
                  <li className="flex gap-3 items-center text-rose-900"><ShieldCheck className="w-4 h-4 text-pink-400" /> <span>Private Online Selection Portal</span></li>
                  <li className="flex gap-3 items-center text-rose-900"><Heart className="w-4 h-4 text-pink-400 fill-pink-400/20" /> <span>Digital Invitations & Video Teasers</span></li>
                </ul>
              </div>
            </div>

            {/* --- ADD-ONS --- */}
            <div className="mt-16 bg-[#fffafd] rounded-[2rem] p-8 border border-rose-100">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-300 mb-6 flex items-center gap-2">
                 <Monitor className="w-4 h-4" /> Grand Tech Add-ons Included
               </h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex gap-4 p-4 bg-white rounded-2xl border border-rose-50 shadow-sm">
                    <Monitor className="w-10 h-10 text-rose-600 p-2 bg-rose-50 rounded-lg" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-rose-900">LED Walls ({packages[tier].ledCount} Nos)</h4>
                      <p className="text-xs text-rose-400 italic mt-1">Live mixing unit with HD output for all venue corners.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white rounded-2xl border border-rose-50 shadow-sm">
                    <Box className="w-10 h-10 text-pink-600 p-2 bg-pink-50 rounded-lg" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-rose-900">360 Video Booth</h4>
                      <p className="text-xs text-rose-400 italic mt-1">Fun interactive booth with instant guest file transfers.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* --- INVESTMENT BOX --- */}
            <div className="mt-12 p-12 bg-rose-950 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-rose-50">Quotation Total</h4>
                <p className="text-rose-300 font-bold uppercase tracking-widest text-[10px]">Quote Reference: {packages[tier].ref}</p>
              </div>
              <div className="text-center md:text-right relative z-10">
                <div className="text-rose-400 font-black italic uppercase tracking-tighter text-sm mb-1">Total Package Value</div>
                <div className="text-7xl md:text-8xl font-black italic tracking-tighter text-white">
                  {packages[tier].total}<span className="text-lg ml-2 text-rose-400 italic">₹</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ENGAGEMENT CARD */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm border border-rose-100 rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-center group transition-all hover:bg-rose-50">
            <div className="flex items-center gap-6">
                <Heart className="w-12 h-12 p-3 bg-rose-100 text-rose-600 rounded-full animate-pulse shadow-inner" />
                <div>
                    <h3 className="text-xl font-black italic uppercase tracking-tight text-rose-900">Engagement Session</h3>
                    <p className="text-xs text-rose-400 uppercase font-bold tracking-widest">Photography + Videography + Candid Essentials</p>
                </div>
            </div>
            <div className="mt-4 md:mt-0 text-3xl font-black italic text-rose-950">15,000<span className="text-sm ml-1 text-rose-200">₹</span></div>
        </div>

      </section>

      <footer className="py-12 border-t border-rose-100 bg-white/40">
        <div className="container px-6 mx-auto text-center">
          <p className="text-rose-200 text-[9px] italic uppercase tracking-[0.8em]">Built with Love by GetPik // Wedding Architecture 2026</p>
        </div>
      </footer>

      <style jsx global>{`
        strong { color: #881337; font-weight: 800; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes heart-pop {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(225,29,72,0.2); }
          50% { transform: scale(1.15); box-shadow: 0 0 40px rgba(225,29,72,0.5); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-heart-pop { animation: heart-pop 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}