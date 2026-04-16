"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Sparkles, Monitor, ShieldCheck, Star, 
  Image as LucideImage, Heart, Users, 
  ChevronRight, Activity, MousePointer2,
  Camera, Video, Clock, CheckCircle, Database, BookOpen,
  Plane, Zap, Share2, Printer, CreditCard
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
  const [tier, setTier] = useState<'basic' | 'signature' | 'elite'>('elite'); 
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = {
    basic: {
      total: "1,62,000",
      title: "The Basic",
      subtitle: "Essential Ritual Coverage",
      ref: "GP-WED-2026-BSC",
      led: "2 Nos (8x6)",
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 1 },
        { label: "Candid Photographer", count: 1 },
        { label: "Candid Videographer", count: 1 }
      ]
    },
    signature: {
      total: "2,12,000",
      title: "The Signature",
      subtitle: "Dual-Event Ritual & Grandeur",
      ref: "VJ-WED-2026-SIG",
      led: "2 Nos (12x8)",
      crew: [
        { label: "Traditional Photographer", count: 1 },
        { label: "Traditional Videographer", count: 2 },
        { label: "Candid Photographer", count: 1 },
        { label: "Candid Videographer", count: 1 },
        { label: "Drone Operator", count: 1 }
      ]
    },
    elite: {
      total: "2,76,000",
      title: "The Elite",
      subtitle: "Dual-Event Luxury Coverage",
      ref: "GP-WED-2026-ELT",
      led: "2 Nos (12x8) + 2 Nos (8x6)",
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
    { 
      title: "Candid Excellence", 
      desc: "We don't just take photos; we capture the 'shiver' in your breath. Our candid style is documentary-heavy, focusing on stolen glances and unscripted joy.",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "4K Drone Cinematography", 
      desc: "Our aerial experts provide a 'God's eye view' of your grand entry and venue. We use stable 4K drone tech to capture sweeping cinematic vistas that add a movie-like scale to your wedding film.",
      icon: <Plane className="w-6 h-6" />
    },
    { 
      title: "360° Social Hot Talk", 
      desc: "The ultimate entertainment hub! Guests record high-energy slo-mo videos that they can instantly share to Instagram or TikTok. It’s the viral highlight that keeps everyone talking.",
      icon: <Share2 className="w-6 h-6" />
    },
    { 
      title: "Instant Photo Prints", 
      desc: "Forget waiting for weeks. Our instant booth gives guests studio-quality physical prints in their hands seconds after the click—a tangible souvenir they’ll cherish forever.",
      icon: <Printer className="w-6 h-6" />
    },
    { 
      title: "Next-Gen LED Display", 
      desc: "We use ultra-high-definition LED tech with zero-latency live mixing. Every guest, even in the farthest corner, experiences every ritual in crystal-clear detail, as if they were on stage.",
      icon: <Monitor className="w-6 h-6" />
    },
    { 
      title: "The GetPik Edit", 
      desc: "Our signature color grading balances the vibrant colors of Indian weddings with a timeless, airy aesthetic that won't look dated in 20 years.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const faqs = [
    { q: "What is GetPik's 'Signature Style'?", a: "We specialize in 'Fashion-Documentary'. It’s a mix of high-fashion lighting for portraits and a fly-on-the-wall approach for ceremonies." },
    { q: "How long until we see our memories?", a: "A 'Sneak Peek' teaser is delivered within 48 hours. The full high-res gallery and films are delivered within 45-60 business days." },
    { q: "Can we choose the music for our cinematic film?", a: "Absolutely. We encourage you to share your favorite playlist, and our editors sync the film to your rhythm." },
    { q: "Do you cover destination weddings outside Erode?", a: "Yes, we travel globally. Travel and stay are usually handled by the client or added to the quote at actuals." },
    { q: "What is the 'Private Online Selection Portal'?", a: "It's a password-protected digital gallery where you can 'heart' your favorite photos for the album design." },
    { q: "What are the payment terms?", a: "50% as the advance for confirmation, 40% on the event date, and the remaining 10% during the album and other deliverables." }
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

        {/* --- TOGGLE SECTION --- */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="bg-white p-2 rounded-2xl border border-rose-100 shadow-xl flex gap-1 z-20 relative overflow-x-auto max-w-full">
            <button onClick={() => setTier('basic')} className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${tier === 'basic' ? 'bg-rose-500 text-white shadow-lg' : 'text-rose-300'}`}>Basic</button>
            <button onClick={() => setTier('signature')} className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${tier === 'signature' ? 'bg-rose-600 text-white shadow-lg' : 'text-rose-300'}`}>Signature</button>
            <button onClick={() => setTier('elite')} className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 relative ${tier === 'elite' ? 'bg-pink-700 text-white shadow-[0_0_20px_rgba(190,24,93,0.4)] scale-105' : 'text-rose-300'}`}>
                Elite
                {tier === 'elite' && <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping" />}
            </button>
          </div>
          
          <div className="mt-4 flex flex-col items-center animate-bounce ml-32">
             <MousePointer2 className="text-pink-600 w-6 h-6" />
             <span className="text-[9px] font-black text-pink-600 uppercase tracking-widest mt-1 italic">Our Recommendation</span>
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
                  <li className="flex gap-3 items-center text-rose-900"><Monitor className="w-4 h-4 text-pink-400" /> <span>LED Screens: <strong>{packages[tier].led}</strong></span></li>
                  <li className="flex gap-3 items-center text-rose-900"><Sparkles className="w-4 h-4 text-pink-400" /> <span>Luxury Album Production</span></li>
                  <li className="flex gap-3 items-center text-rose-900"><CheckCircle className="w-4 h-4 text-pink-400" /> <span>Cinematic 4K Wedding Film</span></li>
                  {tier !== 'basic' && (
                    <>
                      <li className="flex gap-3 items-center text-rose-900"><Activity className="w-4 h-4 text-pink-400" /> <span>360° Video Booth Experience</span></li>
                      <li className="flex gap-3 items-center text-rose-900"><Camera className="w-4 h-4 text-pink-400" /> <span>Instant Photo Booth Prints</span></li>
                    </>
                  )}
                  <li className="flex gap-3 items-center text-rose-900"><Clock className="w-4 h-4 text-pink-400" /> <span>Complimentary Calendar & Frame</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- UNIQUE ARTISTRY SECTION --- */}
        <div className="mb-24 mt-24">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12 text-rose-950 text-center">Our Unique Artistry</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artistry.map((item, i) => (
                    <div key={i} className="p-10 bg-white/60 border border-rose-100 rounded-[2.5rem] hover:bg-white transition-all duration-500 shadow-sm group">
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-black mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <h4 className="text-xl font-black italic uppercase text-rose-900 mb-4">{item.title}</h4>
                        <p className="text-sm text-rose-400 italic leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-4xl mx-auto mb-16">
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

        {/* --- INVESTMENT BOX --- */}
        <div className="max-w-5xl mx-auto mt-12 mb-8 p-12 bg-rose-950 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl border-4 border-rose-800/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-400 mb-2 block">The Investment</span>
                <h4 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-rose-50 leading-tight">
                    {packages[tier].total}<span className="text-2xl ml-2 text-rose-400">₹</span>
                </h4>
                <p className="text-rose-300 font-bold uppercase tracking-widest text-[10px] mt-2">Ref: {packages[tier].ref}</p>
            </div>
            <div className="relative z-10">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center animate-heart-pop border border-white/10">
                    <Heart className="text-rose-500 fill-rose-500" size={40} />
                </div>
            </div>
        </div>

        {/* --- PAYMENT MILESTONES --- */}
        <div className="max-w-5xl mx-auto mb-20 p-8 md:p-12 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-[3rem] shadow-lg">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-rose-600 text-white flex items-center justify-center rounded-xl shadow-md">
                    <CreditCard size={20} />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-rose-900">Payment Milestones</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 group hover:bg-white transition-all">
                    <div className="text-3xl font-black text-rose-600 mb-1">50%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-3">Phase 01</div>
                    <p className="text-sm font-bold text-rose-900 italic">Advance for Confirmation</p>
                </div>
                <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 group hover:bg-white transition-all">
                    <div className="text-3xl font-black text-rose-600 mb-1">40%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-3">Phase 02</div>
                    <p className="text-sm font-bold text-rose-900 italic">On the Event Date</p>
                </div>
                <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 group hover:bg-white transition-all">
                    <div className="text-3xl font-black text-rose-600 mb-1">10%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-3">Phase 03</div>
                    <p className="text-sm font-bold text-rose-900 italic">During Album & Deliverables</p>
                </div>
            </div>
        </div>

        {/* --- ENGAGEMENT CARD --- */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-[3rem] p-8 md:p-12 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Camera size={120} className="-rotate-12" />
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
                <div className="max-w-md">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                            <Camera size={32} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black italic uppercase text-rose-900 tracking-tighter">Engagement Session</h3>
                            <p className="text-xs text-rose-400 uppercase font-black tracking-widest mt-1">March 8, 2026 • Rhukra Hall Erode</p>
                        </div>
                    </div>
                    <div className="text-5xl font-black italic text-rose-950 mb-4">48,000<span className="text-xl ml-1 text-rose-200">₹</span></div>
                    <p className="text-sm text-rose-400 italic font-medium leading-relaxed">A focused pre-wedding session capturing the beginning of your grand celebration.</p>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-300 mb-4">On-Site Experts</h4>
                        <div className="flex justify-between items-center bg-rose-50/50 p-3 rounded-xl border border-rose-100/50">
                            <span className="text-xs font-bold text-rose-900">Traditional Photo</span>
                            <span className="text-[10px] bg-white px-2 py-1 rounded-md text-rose-600 font-black">1</span>
                        </div>
                        <div className="flex justify-between items-center bg-rose-50/50 p-3 rounded-xl border border-rose-100/50">
                            <span className="text-xs font-bold text-rose-900">Traditional Video</span>
                            <span className="text-[10px] bg-white px-2 py-1 rounded-md text-rose-600 font-black">1</span>
                        </div>
                        <div className="flex justify-between items-center bg-rose-50/50 p-3 rounded-xl border border-rose-100/50">
                            <span className="text-xs font-bold text-rose-900">Candid Photo</span>
                            <span className="text-[10px] bg-white px-2 py-1 rounded-md text-rose-600 font-black">1</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-300 mb-4">Physical & Digital</h4>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-rose-50 shadow-sm">
                            <BookOpen size={16} className="text-pink-400" />
                            <span className="text-xs font-bold text-rose-900">35-50 Page Photo Book</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-rose-50 shadow-sm">
                            <Monitor size={16} className="text-pink-400" />
                            <span className="text-xs font-bold text-rose-900">Digital Book Access</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-rose-50 shadow-sm">
                            <Database size={16} className="text-pink-400" />
                            <span className="text-xs font-bold text-rose-900 italic">1-Year Free Gallery Storage</span>
                        </div>
                    </div>
                </div>
            </div>
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
        strong { color: #be185d; }
      `}</style>
    </div>
  );
}