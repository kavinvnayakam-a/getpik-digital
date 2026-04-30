"use client";

import React from 'react';
import Head from 'next/head';
import { 
  Sparkles, Monitor, Star, Rocket, Instagram, Facebook, 
  Share2, CheckCircle, Database, Megaphone, Layers, 
  Zap, Palette, PenTool, Clock, Users, ExternalLink,
  Globe, Heart, Award, MessageSquare // <-- Added MessageSquare here
} from 'lucide-react';

// --- PLAYFUL FLOATING ELEMENTS ---
const FloatingElement = ({ delay, duration, top, left, children }: { delay: number; duration: number; top: string; left: string; children: React.ReactNode }) => (
  <div 
    className="fixed pointer-events-none z-0 opacity-20 text-blue-500"
    style={{
      top,
      left,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    }}
  >
    {children}
  </div>
);

export default function DigitalMarketingQuotation() {
  const detailedWork = [
    {
      title: "Visual Identity & Brand Kit",
      desc: "We don't just design a logo; we build a visual language. This includes defining your brand colors, typography, and a digital kit that ensures your brand looks premium across every screen.",
      points: ["Custom Vector Logo", "Typography Guidelines", "Social Media Display Kit"]
    },
    {
      title: "High-Conversion Website",
      desc: "A custom-built digital home for Seeyan EV Charge. We focus on speed, mobile responsiveness, and clear 'Call to Actions' to convert visitors into leads.",
      points: ["SEO Optimized Structure", "Modern UI/UX Design", "Lead Generation Forms"]
    },
    {
      title: "Social Ecosystem Management",
      desc: "Complete setup and optimization of Instagram, Facebook, and LinkedIn. We ensure your brand's voice is consistent and professional from day one.",
      points: ["Page Optimization", "Automated Bio Links", "Consistent Brand Theming"]
    },
    {
      title: "30-Day Content Blitz",
      desc: "A full month of high-quality content including graphics, reels, and educational posts about EV charging to build authority and trust in the market.",
      points: ["Daily/Scheduled Posting", "Engagement Strategy", "Copywriting & Hashtags"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-slate-900 selection:bg-blue-100 font-sans bg-[#f8fafc] overflow-x-hidden">
      <Head>
        <title>Proposal | Seeyan EV Charge x GetPik</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <FloatingElement top="15%" left="5%" duration={6} delay={0}><Sparkles size={30}/></FloatingElement>
      <FloatingElement top="65%" left="90%" duration={8} delay={2}><Megaphone size={24}/></FloatingElement>
      <FloatingElement top="85%" left="10%" duration={7} delay={1}><Layers size={24}/></FloatingElement>

      <section className="pt-20 pb-20 container mx-auto px-6 relative z-10">
        
        {/* --- CLIENT HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Rocket className="w-3 h-3 fill-current" />
            <span>Project Proposal // 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-tight mb-4 px-4">
            <span className="text-slate-900 not-italic">Seeyan</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">EV-Charge.</span>
          </h1>
          <p className="text-slate-400 font-medium italic uppercase tracking-[0.2em] text-xs md:text-sm">Complete Branding & Digital Ecosystem</p>
          
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg italic">
                <Users className="text-blue-500" size={18} />
                <span>Prepared for: Seeyan X GetPik</span>
            </div>
          </div>
        </div>

        {/* --- MAIN SERVICE HIGHLIGHTS & INVESTMENT --- */}
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 mb-12">
          <div className="p-8 md:p-14">
            <div className="grid lg:grid-cols-3 gap-x-12 gap-y-12 mb-12">
              <ServiceSummary icon={<Palette />} title="Identity" items={["Logo & Brand Kit", "Banner Design"]} />
              <ServiceSummary icon={<Monitor />} title="Web" items={["Full Website", "Mobile Optimized"]} />
              <ServiceSummary icon={<Share2 />} title="Social" items={["Page Setup", "30 Days Posting"]} />
            </div>

            <div className="p-10 bg-slate-900 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
                <div className="relative z-10 text-center md:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2 block">Total Project Investment</span>
                    <h4 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
                        ₹ ---,---
                    </h4>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mt-2 italic">Ref: SEEYAN-EV-2026</p>
                </div>
                <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-blue-400 font-bold italic text-sm">
                    Pending Budget Finalization
                </div>
            </div>
          </div>
        </div>

        {/* --- DETAILED SCOPE OF WORK --- */}
        <div className="max-w-5xl mx-auto mt-20">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-slate-200"></div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-800">Detailed Scope of Work</h2>
                <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {detailedWork.map((work, i) => (
                    <div key={i} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-600 font-black text-xl italic">0{i+1}.</span>
                            <h3 className="font-black italic uppercase tracking-tight text-slate-900">{work.title}</h3>
                        </div>
                        <p className="text-slate-500 text-sm italic leading-relaxed mb-6">
                            {work.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {work.points.map((p, pi) => (
                                <span key={pi} className="text-[10px] bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-100 font-bold uppercase tracking-tighter group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* --- ABOUT GETPIK SECTION --- */}
        <div className="max-w-6xl mx-auto mt-32 relative">
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-[3rem] border border-blue-100 p-8 md:p-16 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Globe size={18} />
                            </div>
                            <span className="font-black italic uppercase tracking-widest text-sm text-blue-600">The Agency</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-slate-900 mb-6 leading-[0.9]">
                            We Build <span className="text-blue-600">Digital</span> Legacies.
                        </h2>
                        <p className="text-slate-500 italic leading-relaxed mb-8">
                            At <strong>GetPik</strong>, we bridge the gap between complex technology and human-centric design. From capturing timeless moments to scaling digital brands, we specialize in high-impact storytelling and visual excellence.
                        </p>
                        <a 
                            href="https://www.getpik.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold italic uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                        >
                            <span>Visit getpik.in</span>
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm">
                                <Award className="text-blue-500 mb-3" size={24} />
                                <h4 className="font-black italic uppercase text-xs text-slate-900">Premium Quality</h4>
                                <p className="text-[10px] text-slate-400 italic mt-1">High-end production value in every asset.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm">
                                <Zap className="text-blue-500 mb-3" size={24} />
                                <h4 className="font-black italic uppercase text-xs text-slate-900">Swift Delivery</h4>
                                <p className="text-[10px] text-slate-400 italic mt-1">Efficient workflows to meet your launch goals.</p>
                            </div>
                        </div>
                        <div className="space-y-4 mt-8">
                            <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm">
                                <Heart className="text-blue-500 mb-3" size={24} />
                                <h4 className="font-black italic uppercase text-xs text-slate-900">Brand First</h4>
                                <p className="text-[10px] text-slate-400 italic mt-1">We treat your business like it's our own.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm">
                                <MessageSquare className="text-blue-500 mb-3" size={24} />
                                <h4 className="font-black italic uppercase text-xs text-slate-900">Real Support</h4>
                                <p className="text-[10px] text-slate-400 italic mt-1">Active communication & strategic advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

function ServiceSummary({ icon, title, items }: { icon: any, title: string, items: string[] }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg shadow-blue-100">
                    {React.cloneElement(icon, { size: 20 })}
                </div>
                <h3 className="text-lg font-black italic uppercase tracking-tighter text-slate-900">{title}</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center text-slate-500 text-xs font-medium italic">
                        <CheckCircle className="w-3 h-3 text-blue-500 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}