"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Sparkles, Monitor, ShieldCheck, Star, 
  Image as LucideImage, Heart, Users, 
  ChevronRight, Activity, MousePointer2,
  Camera, Video, Clock, CheckCircle
} from 'lucide-react';

// --- REALISTIC BUTTERFLY COMPONENT ---
const RealisticButterfly = ({ delay, duration, top }: { delay: number; duration: number; top: string }) => (
  <div 
    className="fixed pointer-events-none z-0 opacity-60"
    style={{
      top,
      left: '-100px',
      animation: `butterfly-travel ${duration}s linear ${delay}s infinite`,
    }}
  >
    <div className="relative w-10 h-10 animate-butterfly-float">
      <div className="absolute left-1 w-5 h-8 bg-gradient-to-l from-rose-400 to-pink-200 rounded-full origin-right animate-wing-flap-left shadow-sm" />
      <div className="absolute right-1 w-5 h-8 bg-gradient-to-r from-rose-400 to-pink-200 rounded-full origin-left animate-wing-flap-right shadow-sm" />
      <div className="absolute left-1/2 top-1 w-1 h-6 bg-rose-900 rounded-full -translate-x-1/2 z-10" />
    </div>
  </div>
);

export default function GetPikWeddingQuotation() {
  const [tier, setTier] = useState<'signature' | 'elite'>('elite'); // Default to Elite
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = {
    signature: {
      total: "2,02,000",
      title: "The Signature",
      subtitle: "Dual-Event Ritual & Grandeur",
      ref: "VJ-WED-2026-SIG",
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 2 },
        { label: "Candid Photographer", count: 1 },
        { label: "Candid Videographer", count: 1 },
        { label: "Drone Operator", count: 1 }
      ]
    },
    elite: {
      total: "2,56,000",
      title: "The Elite",
      subtitle: "Dual-Event Luxury Coverage",
      ref: "GP-WED-2026-ELT",
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 2 },
        { label: "Candid Photographer", count: 2 },
        { label: "Candid Videographer", count: 2 },
        { label: "Drone Operator", count: 1 }
      ]
    }
  };

  const artistry = [
    { title: "Candid Excellence", desc: "We don't just take photos; we capture the 'shiver' in your breath. Our candid style is documentary-heavy, focusing on stolen glances and unscripted joy." },
    { title: "Cinematic Depth", desc: "Using 4K cinema-grade glass, our videography mimics the look of high-end feature films, ensuring your wedding video feels like a Netflix original." },
    { title: "The GetPik Edit", desc: "Our signature color grading balances the vibrant colors of Indian weddings with a timeless, airy aesthetic that won't look dated in 20 years." }
  ];

  const faqs = [
    { q: "What is GetPik's 'Signature Style'?", a: "We specialize in 'Fashion-Documentary'. It’s a mix of high-fashion lighting for portraits and a fly-on-the-wall approach for ceremonies." },
    { q: "How long until we see our memories?", a: "A 'Sneak Peek' teaser is delivered within 48 hours. The full high-res gallery and films are delivered within 45-60 business days." },
    { q: "Can we choose the music for our cinematic film?", a: "Absolutely. We encourage you to share your favorite playlist, and our editors sync the film to your rhythm." },
    { q: "Do you cover destination weddings outside Erode?", a: "Yes, we travel globally. Travel and stay are usually handled by the client or added to the quote at actuals." },
    { q: "What is the 'Private Online Selection Portal'?", a: "It's a password-protected digital gallery where you can 'heart' your favorite photos for the album design." },
    { q: "What are the payment terms?", a: "30% booking advance, 50% on the event day, and the remaining 20% upon digital delivery." }
  ];

  return (
    <div className="flex flex-col min-h-screen text-pink-950 selection:bg-pink-200 font-sans bg-[#fff5f7] overflow-x-hidden">
      <Head><meta name="robots" content="noindex, nofollow" /></Head>

      <RealisticButterfly top="15%" duration={12} delay={0} />
      <RealisticButterfly top="45%" duration={18} delay={4} />
      <RealisticButterfly top="75%" duration={15} delay={2} />

      <section className="pt-24 pb-32 container mx-auto px-6 relative z-10">
        
        {/* --- BRIDE & GROOM SECTION --- */}
        <div className="flex justify-center items-center gap-8 mb-12 opacity-90">
            <div className="flex flex-col items-center animate-float-slow">
                <div className="w-20 h-20 border-2 border-pink-400 rounded-full flex items-center justify-center p-2 mb-2 bg-white shadow-lg">
                    <Users size={36} className="text-pink-500" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-pink-600">Bride</span>
                <span className="text-lg font-black italic text-rose-950">Sruthi</span>
            </div>

            <div className="relative w-24 md:w-40 h-10 flex items-center">
                <div className="w-full h-[1px] bg-rose-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-rose-500 animate-heartbeat-line" />
                </div>
                <Heart className="absolute left-1/2 -translate-x-1/2 text-rose-500 fill-rose-500 animate-pulse" size={24} />
            </div>

            <div className="flex flex-col items-center animate-float">
                <div className="w-20 h-20 border-2 border-rose-300 rounded-full flex items-center justify-center p-2 mb-2 bg-white shadow-lg">
                    <Users size={36} className="text-rose-400" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">Groom</span>
                <span className="text-lg font-black italic text-rose-950">Akashvar</span>
            </div>
        </div>

        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>A Wedding Proposal // 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-4">
            <span className="text-rose-900 not-italic">Get</span>
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent italic">Pik.</span>
          </h1>
          <p className="text-rose-400 font-medium italic uppercase tracking-[0.2em] text-sm">Capturing Your Eternal Love Story</p>
          <p className="mt-4 text-rose-950 text-lg italic"><strong>May 19,20 - 2026 Kongu Maligai Erode</strong></p>
        </div>

        {/* --- TOGGLE WITH POINTER BELOW ELITE --- */}
        <div className="flex flex-col items-center mb-20 relative">
          <div className="bg-white p-2 rounded-2xl border border-rose-100 shadow-xl flex gap-1 z-20 relative">
            <button onClick={() => setTier('signature')} className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${tier === 'signature' ? 'bg-rose-600 text-white shadow-lg' : 'text-rose-300'}`}>Signature</button>
            <button onClick={() => setTier('elite')} className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 relative ${tier === 'elite' ? 'bg-pink-700 text-white shadow-[0_0_20px_rgba(190,24,93,0.4)] scale-105' : 'text-rose-300'}`}>
                Elite
                {tier === 'elite' && <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping" />}
            </button>
          </div>
          
          {/* POINTER BELOW ELITE */}
          <div className="mt-4 flex flex-col items-center animate-bounce ml-32">
             <MousePointer2 className="text-pink-600 w-6 h-6" />
             <span className="text-[9px] font-black text-pink-600 uppercase tracking-widest mt-1 italic"></span>
          </div>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(244,63,94,0.1)] border border-rose-100 mb-12">
          <div className="p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-2xl"><Users size={24} /></div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-rose-900">The Experts</h3>
                </div>
                <ul className="space-y-4 text-rose-400 text-sm italic font-medium">
                  {packages[tier].crew.map((member, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-rose-50 pb-2">
                      <span className="flex gap-3 items-center text-rose-900"><Star className="w-4 h-4 text-pink-400" /> {member.label}</span>
                      <span className="font-black text-rose-600">{member.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-700 text-white flex items-center justify-center rounded-2xl"><LucideImage size={24} /></div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-rose-900">Deliverables</h3>
                </div>
                <ul className="space-y-4 text-rose-400 text-sm italic font-medium">
                  <li className="flex gap-3 items-center text-rose-900"><Sparkles className="w-4 h-4 text-pink-400" /> <span> 2 Luxury Album with Designer Editing</span></li>
                  <li className="flex gap-3 items-center text-rose-900"><CheckCircle className="w-4 h-4 text-pink-400" /> <span>Cinematic Video Teasers & 4K Wedding Film</span></li>
                  <li className="flex gap-3 items-center text-rose-900"><Clock className="w-4 h-4 text-pink-400" /> <span>Complimentary 2026 Calendar & Photo Frame</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-12 bg-rose-950 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl">
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter text-rose-50">{packages[tier].total}<span className="text-lg ml-2 text-rose-400">₹</span></h4>
                <p className="text-rose-300 font-bold uppercase tracking-widest text-[10px]">Reference: {packages[tier].ref}</p>
              </div>
              <div className="relative z-10 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-heart-pop">
                 <Heart className="text-white fill-white" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* --- UNIQUE ARTISTRY --- */}
        <div className="mb-24 mt-24">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12 text-rose-950 text-center">Our Unique Artistry</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {artistry.map((item, i) => (
                    <div key={i} className="p-10 bg-white/60 border border-rose-100 rounded-[2.5rem] hover:bg-white transition-all duration-500 shadow-sm group">
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-black mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">0{i+1}</div>
                        <h4 className="text-xl font-black italic uppercase text-rose-900 mb-4">{item.title}</h4>
                        <p className="text-sm text-rose-400 italic leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-4xl mx-auto mb-24">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-10 text-rose-950 text-center">Frequently Asked</h3>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white/70 rounded-3xl border border-rose-100 overflow-hidden shadow-sm transition-all hover:shadow-md">
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-8 flex justify-between items-center text-left">
                            <span className="text-sm font-black uppercase text-rose-900 tracking-tight pr-4">{faq.q}</span>
                            <div className={`p-2 rounded-full bg-rose-50 text-rose-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                                <ChevronRight size={18} />
                            </div>
                        </button>
                        {openFaq === i && (
                            <div className="px-8 pb-8 text-sm italic text-rose-400 leading-relaxed animate-in slide-in-from-top-2">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* ENGAGEMENT CARD */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-[3rem] p-10 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div className="flex items-center gap-8">
                <div className="relative w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                    <Camera size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-black italic uppercase text-rose-900 tracking-tighter">Engagement Session</h3>
                    <p className="text-[10px] text-rose-300 uppercase font-black tracking-widest">March 8, 2026 • Rhukra Hall Erode</p>
                </div>
            </div>
            <div className="text-4xl font-black italic text-rose-950 mt-6 md:mt-0">48,000<span className="text-sm ml-1 text-rose-200">₹</span></div>
        </div>

      </section>

      <footer className="py-12 border-t border-rose-100 bg-white/40 text-center">
        <p className="text-rose-200 text-[8px] italic uppercase tracking-[1em]">GetPik Wedding Architecture // 2026</p>
      </footer>

      <style jsx global>{`
        @keyframes wing-flap-left { 0%, 100% { transform: rotateY(0deg); } 50% { transform: rotateY(70deg); } }
        @keyframes wing-flap-right { 0%, 100% { transform: rotateY(0deg); } 50% { transform: rotateY(-70deg); } }
        @keyframes butterfly-travel {
          0% { left: -100px; transform: translateY(0) rotate(5deg); }
          100% { left: 110%; transform: translateY(0) rotate(-5deg); }
        }
        @keyframes heartbeat-line { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-wing-flap-left { animation: wing-flap-left 0.25s ease-in-out infinite; }
        .animate-wing-flap-right { animation: wing-flap-right 0.25s ease-in-out infinite; }
        .animate-heartbeat-line { animation: heartbeat-line 2s linear infinite; }
        .animate-heart-pop { animation: heart-pop 1s ease-in-out infinite; }
        @keyframes heart-pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
      `}</style>
    </div>
  );
}