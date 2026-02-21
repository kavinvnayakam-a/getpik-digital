"use client";

import React from 'react';
import Head from 'next/head';
import { 
  Camera, Video, Sparkles, Monitor, 
  ShieldCheck, Heart, Users, MapPin, 
  Calendar, Star, Image as LucideImage,
  Receipt, FileText, CheckCircle2, Cloud
} from 'lucide-react';

export default function WeddingQuotation() {
  const couple = {
    bride: "V. Akshaya Sree",
    groom: "Srinivas Naidu G.",
    location: "Hyderabad",
    total: "2,94,000"
  };

  const events = [
    {
      id: 1,
      title: "Event 01: Engagement",
      date: "April 9th, 2026",
      venue: "Hyderabad",
      crew: ["1 Traditional Photo", "1 Traditional Video"]
    },
    {
      id: 2,
      title: "Event 02: Haldi & Bride Side",
      date: "April 29th, 2026",
      time: "07:00 AM - 12:00 PM",
      crew: ["1 Traditional Photo", "1 Traditional Video", "1 Candid Photo", "1 Candid Video"]
    },
    {
      id: 3,
      title: "Event 03: Bride Side (Full Day)",
      date: "April 30th, 2026",
      crew: ["1 Traditional Photo", "1 Traditional Video", "1 Cinematic Photo", "1 Cinematic Video"]
    },
    {
      id: 4,
      title: "Event 04: The Big Day (Marriage)",
      date: "May 2026",
      time: "04:00 AM - 04:00 PM",
      crew: ["1 Traditional Photo", "1 Traditional Video", "1 Cinematic Photo", "1 Cinematic Video", "1 Drone Operator"],
      highlight: "LED Wall - 2 Nos Included"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-pink-950 selection:bg-pink-200 font-sans bg-[#fff5f7]">
      <Head>
        <title>Proposal | {couple.bride} & {couple.groom}</title>
      </Head>

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-300/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-300/10 blur-[120px] rounded-full" />
      </div>

      <section className="pt-20 pb-32 container mx-auto px-6 relative z-10">
        
        {/* --- HEADER & ANIMATED HEART CONNECTION --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-sm">
            <Heart className="w-3 h-3 animate-pulse text-rose-500 fill-rose-500" />
            <span>A Grand Wedding Proposal // 2026</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            {/* BRIDE NAME */}
            <div className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-rose-900 animate-float">
              {couple.bride}
            </div>

            {/* THE CONNECTING HEART */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-rose-700 animate-heart-pop shadow-[0_0_50px_rgba(225,29,72,0.4)] flex items-center justify-center relative z-20">
                <div className="absolute top-4 left-6 w-8 h-4 bg-white/30 rounded-full blur-[3px]" />
                <Heart size={44} className="text-white fill-white drop-shadow-md" />
              </div>
              <div className="absolute inset-0 bg-rose-400 rounded-full animate-ping opacity-20" />
            </div>

            {/* GROOM NAME */}
            <div className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-rose-900 animate-float-slow">
              {couple.groom}
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-rose-400 font-bold italic uppercase tracking-widest text-xs">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-rose-50">
                <MapPin size={14} className="text-rose-600" /> {couple.location}
            </span>
            <span className="hidden md:block opacity-30 text-rose-300">•</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-rose-50">
                <Calendar size={14} className="text-rose-600" /> April - May 2026
            </span>
          </div>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="bg-white/90 backdrop-blur-md rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(244,63,94,0.1)] border border-rose-100">
          <div className="p-8 md:p-16">
            
            {/* EVENT TIMELINE */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {events.map((event) => (
                <div key={event.id} className="p-8 bg-[#fffafd] rounded-[2.5rem] border border-rose-100 group hover:border-rose-300 transition-all duration-500">
                  <h3 className="text-2xl font-black italic text-rose-950 uppercase tracking-tighter mb-1">{event.title}</h3>
                  <p className="text-rose-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Calendar size={12} /> {event.date} {event.time ? `• ${event.time}` : ''}
                  </p>
                  <ul className="space-y-3">
                    {event.crew.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium italic text-rose-800">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full group-hover:scale-150 transition-transform" /> {item}
                      </li>
                    ))}
                  </ul>
                  {event.highlight && (
                    <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-2 text-rose-600 font-black text-[10px] uppercase tracking-widest">
                      <Monitor size={14} /> {event.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start border-t border-rose-50 pt-16">
              {/* DELIVERABLES */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-2xl shadow-lg">
                    <LucideImage size={24} />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-rose-900">Premium Deliverables</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "1 Luxury Album (50 Sheets / 100 Pages) with Designer Editing",
                    "Digital Invitation along with Event Location will be created for you",
                    "Digital Album hosting provided for 1 Year",
                    "Dedicated Digital Photo Selection Portal for your convenience",
                    "Traditional Full Length Video & Cinematic Highlights in 4K",
                    "Complimentary 2026 Calendar & Signature Photo Frame"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-rose-900 font-medium italic leading-tight">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PAYMENT SCHEDULE */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-700 text-white flex items-center justify-center rounded-2xl shadow-lg">
                    <Receipt size={24} />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-rose-900">Payment Milestones</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-5 bg-rose-50 rounded-2xl border border-rose-100 flex justify-between items-center group hover:bg-white transition-colors">
                    <div>
                        <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Booking Confirmation</p>
                        <span className="font-bold text-rose-900">Initial Advance Payment</span>
                    </div>
                    <span className="font-black text-2xl text-rose-600">25%</span>
                  </div>
                  <div className="p-5 bg-rose-50 rounded-2xl border border-rose-100 flex justify-between items-center group hover:bg-white transition-colors">
                    <div>
                        <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Milestone: April 9th</p>
                        <span className="font-bold text-rose-900">Second Installment</span>
                    </div>
                    <span className="font-black text-2xl text-rose-600">25%</span>
                  </div>
                  <div className="p-5 bg-rose-950 rounded-2xl border border-rose-950 flex justify-between items-center text-white shadow-xl shadow-rose-200">
                    <div>
                        <p className="text-[10px] font-black text-rose-300 uppercase tracking-widest">Completion: May 3rd</p>
                        <span className="font-bold">Final Settlement</span>
                    </div>
                    <span className="font-black text-2xl">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- INVESTMENT TOTAL --- */}
            <div className="mt-16 p-12 bg-rose-950 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/20 blur-[100px] rounded-full" />
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 text-rose-50">2,99,000<span className="text-xl ml-2 text-rose-400">INR</span></h4>
                <p className="text-rose-300 font-bold uppercase tracking-widest text-[10px]">Total Package Value (Inclusive of GST)</p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                 <div className="w-16 h-16 border-2 border-rose-500/30 rounded-full flex items-center justify-center">
                    <Cloud className="text-rose-500 animate-bounce" size={24} />
                 </div>
                 <div className="text-left">
                    <p className="text-white font-black italic uppercase text-sm leading-none">Archiving Memories</p>
                    <p className="text-rose-400 text-[10px] uppercase font-bold tracking-tighter">GetPik Premium 2026</p>
                 </div>
              </div>
            </div>

            {/* --- TERMS & CONDITIONS --- */}
            <div className="mt-16 pt-16 border-t border-rose-50">
               <div className="flex items-center gap-3 mb-8 text-rose-900">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-black italic uppercase tracking-widest text-sm">Terms & Conditions</h3>
               </div>
               <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-[11px] leading-relaxed text-rose-400 uppercase font-bold tracking-wider">
                  <p>• RAW footage remains the intellectual property of GetPik.</p>
                  <p>• Food and Travel for the crew to be provided by the client.</p>
                  <p>• Delivery of the final album will take 4-6 weeks after selection.</p>
                  <p>• Digital Album hosting valid for 12 months from the date of delivery.</p>
                  <p>• LED walls require stable power supply at the venue.</p>
                  <p>• Any extra hours beyond the schedule will be billed separately.</p>
                  <p>• Advance payment is non-refundable in case of cancellatxion.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-rose-100 bg-white/40">
        <div className="container px-6 mx-auto text-center">
          <p className="text-rose-300 text-[9px] italic uppercase tracking-[0.8em]">Designed with Love by GetPik // Wedding Architecture 2026</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes heart-pop {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(225,29,72,0.3); }
          50% { transform: scale(1.1); box-shadow: 0 0 60px rgba(225,29,72,0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-heart-pop { animation: heart-pop 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}