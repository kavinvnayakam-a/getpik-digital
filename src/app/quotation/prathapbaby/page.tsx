"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Sparkles, Monitor, Star, 
  Image as LucideImage, Users, 
  ChevronRight, Activity, MousePointer2,
  Camera, Video, Clock, CheckCircle, Database, BookOpen,
  Plane, Zap, Share2, MapPin
} from 'lucide-react';

// --- PLAYFUL FLOATING ELEMENTS ---
const FloatingStar = ({ delay, duration, top, left }: { delay: number; duration: number; top: string; left: string }) => (
  <div 
    className="fixed pointer-events-none z-0 opacity-40 text-yellow-500"
    style={{
      top,
      left,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    }}
  >
    <Star fill="currentColor" size={24} />
  </div>
);

export default function BirthdayQuotation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const itinerary = [
    {
      date: "April 30th",
      event: "Birthday Rituals - Session I",
      crew: ["Traditional Photographer"]
    },
    {
      date: "May 3rd",
      event: "Grand Birthday Celebration - Session II",
      crew: ["Traditional Photographer", "Traditional Videographer"]
    }
  ];

  const artistry = [
    { 
      title: "Candid Moments", 
      desc: "Capturing the pure innocence and spontaneous laughter of your little one without the 'staged' feel.",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "Crystal Clear Audio", 
      desc: "We record high-fidelity audio for the cake cutting and wishes, ensuring those tiny voices are preserved forever.",
      icon: <Activity className="w-6 h-6" />
    },
    { 
      title: "The GetPik Edit", 
      desc: "Vibrant, cheerful color grading designed to make children's parties look like a storybook dream.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-slate-900 selection:bg-blue-100 font-sans bg-[#f8fafc] overflow-x-hidden">
      <Head><meta name="robots" content="noindex, nofollow" /></Head>

      <FloatingStar top="10%" left="10%" duration={6} delay={0} />
      <FloatingStar top="60%" left="85%" duration={8} delay={2} />
      <FloatingStar top="80%" left="15%" duration={7} delay={1} />

      <section className="pt-24 pb-32 container mx-auto px-6 relative z-10">
        
        {/* --- CLIENT HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Star className="w-3 h-3 fill-current" />
            <span>Event Proposal // 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-4">
            <span className="text-slate-900 not-italic">Get</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent italic">Pik.</span>
          </h1>
          <p className="text-slate-400 font-medium italic uppercase tracking-[0.2em] text-sm">Capturing The Magic of Childhood</p>
          
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl italic">
                <Users className="text-blue-500" size={20} />
                <span>Client: Arvind </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-widest">
                <MapPin size={16} className="text-blue-400" />
                <span>Coimbatore</span>
            </div>
          </div>
        </div>

        {/* --- MAIN SERVICE CARD --- */}
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 mb-12">
          <div className="p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              
              {/* Coverage details */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-200"><Camera size={24} /></div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Coverage Plan</h3>
                </div>
                
                <div className="space-y-6">
                    {itinerary.map((item, idx) => (
                        <div key={idx} className="relative pl-6 border-l-2 border-blue-100">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white" />
                            <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest">{item.date}</h4>
                            <p className="text-slate-900 font-bold italic mb-2">{item.event}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.crew.map((person, i) => (
                                    <span key={i} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded-md border border-slate-100 font-bold uppercase">{person} x 1</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-2xl shadow-lg"><LucideImage size={24} /></div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Final Assets</h3>
                </div>
                <ul className="space-y-4 text-slate-500 text-sm italic font-medium">
                  <li className="flex gap-3 items-center text-slate-900"><BookOpen className="w-4 h-4 text-blue-500" /> <span>Premium <strong>Custom-Designed Photo Album</strong></span></li>
                  <li className="flex gap-3 items-center text-slate-900"><Video className="w-4 h-4 text-blue-500" /> <span>High-Definition Cinematic Highlight Film</span></li>
                  <li className="flex gap-3 items-center text-slate-900"><Database className="w-4 h-4 text-blue-500" /> <span>Full High-Res Digital Gallery Access</span></li>
                  <li className="flex gap-3 items-center text-slate-900"><Plane className="w-4 h-4 text-blue-500" /> <span>All <strong>Travel & Logistics Expenses</strong> Included</span></li>
                  <li className="flex gap-3 items-center text-slate-900"><CheckCircle className="w-4 h-4 text-blue-500" /> <span>Professional Color Grading & Retouching</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* --- INVESTMENT BOX --- */}
        <div className="max-w-5xl mx-auto mt-12 mb-20 p-12 bg-slate-900 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2 block">Total Investment</span>
                <h4 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-tight">
                    47,000<span className="text-2xl ml-2 text-blue-400">₹</span>
                </h4>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2 italic">Comprehensive Package • Ref: GP-BTH-2026-CBE</p>
            </div>
            <div className="relative z-10">
                <div className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl text-white text-center">
                    <div className="text-[10px] uppercase font-black tracking-widest text-blue-400 mb-1">Status</div>
                    <div className="font-bold italic">All-Inclusive Quote</div>
                </div>
            </div>
        </div>

        {/* --- ARTISTRY GRID --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
            {artistry.map((item, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                        {item.icon}
                    </div>
                    <h4 className="text-lg font-black italic uppercase text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 italic leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

      </section>

      <footer className="py-12 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-300 text-[8px] italic uppercase tracking-[1em]">GetPik Content Architecture // 2026</p>
      </footer>

      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        strong { color: #2563eb; }
      `}</style>
    </div>
  );
}