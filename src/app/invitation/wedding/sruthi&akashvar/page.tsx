"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Calendar, Camera, Send, MessageCircle } from 'lucide-react';
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";

// --- FIREBASE INITIALIZATION ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<any[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 15;
      const size = 10 + Math.random() * 20;
      setHearts((prev) => [...prev, { id, left, duration, size }]);
      setTimeout(() => setHearts((prev) => prev.filter((h) => h.id !== id)), duration * 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((h) => (
        <div key={h.id} className="absolute bottom-[-50px] text-rose-500 opacity-40 animate-float-up"
          style={{ left: `${h.left}%`, fontSize: `${h.size}px`, animationDuration: `${h.duration}s` }}>
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default function LongScrollWeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", mins: "00", secs: "00", passed: false });
  const [wishes, setWishes] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const target = new Date("2026-05-20T09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      const absDiff = Math.abs(diff);

      const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((absDiff / 1000 / 60) % 60);
      const secs = Math.floor((absDiff / 1000) % 60);

      const format = (num: number) => num.toString().padStart(2, '0');

      setTimeLeft({
        days: format(days),
        hours: format(hours),
        mins: format(mins),
        secs: format(secs),
        passed: diff < 0
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const q = query(collection(db, "Sruthi_Akashvar_Wishes"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setWishes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "Sruthi_Akashvar_Wishes"), { ...formData, createdAt: serverTimestamp() });
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) { console.error(err); }
    setIsSubmitting(false);
  };

  const layers = [
    { id: 7, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FBG%20-7.webp?alt=media&token=ced6ff87-c419-4683-9ef3-0169b67482a4" },
    { id: 2, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FTop.webp?alt=media&token=3a1a1b74-ef47-4035-a610-8395c77f2bb7" },
    { id: 5, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FLine%20-%205.webp?alt=media&token=e9146361-a952-466d-a5f8-dc892043d276" },
    { id: 4, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2Ftemple%20wtih%20ch.webp?alt=media&token=c4b87246-f9ff-41bf-afcf-68a4da760a9a" },
    { id: 3, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FCloud%20-3.webp?alt=media&token=7aca83c0-dfc0-4847-b7ff-0a83cf9f72d7" },
    { id: 1, url: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Sruthiwedding%20invitation%2FVinayagar%20-%201.webp?alt=media&token=abc757f2-0f13-4967-a641-00559f2f9414" },
  ];

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <Head>
        <title>Sruthi & Akashvar | Wedding Invitation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <div className="w-full max-w-[500px] bg-[#001f3f] relative overflow-x-hidden shadow-2xl font-playfair">
        <FloatingHearts />

        {/* --- SECTION 1: THE INVITATION --- */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1080 / 3840' }}>
          {layers.map((layer) => (
            <img key={layer.id} src={layer.url} alt="" className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill', margin: 0, padding: 0 }} />
          ))}

          <div className="absolute inset-0 z-10">
            
            {/* Header Text */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-[180px] w-full text-center px-6">
              <div className="space-y-3">
                <h2 className="text-[#5d1a1a] text-lg font-bold font-cinzel tracking-tight leading-tight">
                  Mr Vijayakumar & Mrs Ponne <br/> & <br/> Mr Sureshkumar & Mrs Punithavalli
                </h2>
                <p className="text-[#5d1a1a]/80 italic text-[10px] leading-relaxed max-w-[280px] mx-auto uppercase tracking-widest font-medium">
                  Cordially solicit your esteemed presence and blessings with your family and friends on the auspicious occasion of the wedding of
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                  <h1 className="text-5xl text-[#5d1a1a] font-dancing leading-none">Sruthi</h1>
                  <Heart className="text-[#d4af37] fill-[#d4af37] animate-pulse my-4" size={28} />
                  <h1 className="text-5xl text-[#5d1a1a] font-dancing leading-none">Akashvar</h1>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="absolute top-[810px] w-full px-10">
              <div className="relative border-l-2 border-dotted border-white/40 ml-4 pl-8 space-y-12 py-2 text-white text-left text-sm">
                
                <div className="relative">
                    <div className="absolute -left-[42px] top-1">
                        <div className="w-4 h-4 rounded-full bg-white relative z-10" />
                        <div className="w-4 h-4 rounded-full bg-white absolute top-0 animate-ping opacity-75" />
                    </div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-white">Reception</h4>
                    <p className="font-bold text-white">19th May 2026, Tuesday</p>
                    <p className="text-xs italic mt-2 border-t border-white/40 pt-1 inline-block text-white">From 6:00 PM onwards</p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[42px] top-1">
                        <div className="w-4 h-4 rounded-full bg-white relative z-10" />
                        <div className="w-4 h-4 rounded-full bg-white absolute top-0 animate-ping opacity-75" />
                    </div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-white">Muhurtham</h4>
                    <p className="font-bold text-white">20th May 2026, Wednesday</p>
                    <p className="text-xs font-black mt-2 border-t border-white/40 pt-1 inline-block text-white">9:00 AM to 9:45 AM</p>
                </div>

              </div>
            </div>

            {/* --- UPDATED DD:HH:MM:SS COUNTDOWN --- */}
            <div className="absolute top-[1030px] w-full px-8 flex flex-col items-center">
               
               <div className="mb-10 w-full max-w-[340px]">
                  <p className="text-[10px] uppercase tracking-[0.5em] mb-4 font-black text-white/60 text-center">
                    {timeLeft.passed ? "CELEBRATED" : "COUNTDOWN"}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                        { v: timeLeft.days, l: "Days" },
                        { v: timeLeft.hours, l: "Hours" },
                        { v: timeLeft.mins, l: "Mins" },
                        { v: timeLeft.secs, l: "Secs" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-full py-4 flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white tracking-widest leading-none">{item.v}</span>
                        </div>
                        <span className="text-[8px] mt-2 font-black text-[#d4af37] uppercase tracking-widest">{item.l}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-white/95 backdrop-blur-md p-6 rounded-[2.5rem] border border-[#d4af37]/30 w-full max-w-[280px] shadow-2xl text-[#5d1a1a] text-center">
                  <a href="https://maps.google.com/?q=Kongu+Maligai+Erode" target="_blank" className="flex flex-col items-center gap-1 group">
                      <MapPin size={20} className="text-[#d4af37]" />
                      <span className="text-sm font-bold uppercase tracking-widest group-hover:underline">Kongu Maligai, Erode</span>
                  </a>
                  <div className="h-px w-6 bg-[#d4af37]/30 mx-auto my-3" />
                  <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Sruthi+%26+Akashvar+Wedding&dates=20260519T180000/20260520T100000&location=Kongu+Maligai,+Erode" target="_blank" className="text-[10px] font-black uppercase tracking-widest text-[#5d1a1a] underline">Save the Date</a>
               </div>
            </div>
          </div>
        </div>

        {/* --- GUESTBOOK --- */}
        <section className="relative bg-[#fffcf5] py-20 px-6 border-t-[12px] border-[#5d1a1a]">
          <div className="max-w-md mx-auto">
            
            <div className="mb-10 flex flex-col items-center text-[#5d1a1a]">
              <div className="flex items-center gap-2 mb-1 opacity-70">
                <Camera size={18} />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">GetPik</span>
              </div>
              <p className="text-[8px] uppercase tracking-[0.5em] opacity-60">Photography & Videography</p>
              <div className="h-px w-12 bg-[#d4af37]/30 mx-auto mt-6" />
            </div>

            <div className="text-center mb-10 text-[#5d1a1a]">
              <h3 className="text-3xl font-black italic uppercase font-cinzel leading-none">Guestbook</h3>
              <p className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mt-2">Send Your Blessings</p>
            </div>

            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-rose-100 mb-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <input required placeholder="Name" className="w-1/2 px-4 py-3 rounded-xl bg-rose-50/50 border border-rose-100 text-sm outline-none" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                  <input placeholder="Phone" className="w-1/2 px-4 py-3 rounded-xl bg-rose-50/50 border border-rose-100 text-sm outline-none" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
                </div>
                <textarea required placeholder="Write your wishes..." rows={2} className="w-full px-4 py-3 rounded-xl bg-rose-50/50 border border-rose-100 text-sm outline-none" value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} />
                <button disabled={isSubmitting} className="w-full py-4 bg-[#5d1a1a] text-white rounded-full font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all">
                  {isSubmitting ? "Delivering..." : <><Send size={16}/> Send Blessing</>}
                </button>
              </form>
            </div>

            <div className="flex flex-col space-y-8">
              <AnimatePresence initial={false}>
                {wishes.map((wish, i) => {
                  const isRight = i % 2 !== 0;
                  return (
                    <motion.div key={wish.id} initial={{ opacity: 0, scale: 0.8, x: isRight ? 20 : -20 }} animate={{ opacity: 1, scale: 1, x: 0 }} className={`flex flex-col w-full ${isRight ? 'items-end' : 'items-start'}`}>
                      <span className="font-black text-[9px] uppercase tracking-widest text-[#5d1a1a]/40 mb-1 px-4">{wish.name}</span>
                      <div className={`relative px-5 py-3 rounded-[1.5rem] max-w-[85%] shadow-sm ${isRight ? 'bg-[#5d1a1a] text-white rounded-br-none bubble-right' : 'bg-white text-[#5d1a1a] border border-rose-100 rounded-bl-none bubble-left'}`}>
                        <p className="text-sm italic font-medium leading-tight">"{wish.message}"</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Cinzel:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: black; font-family: 'Playfair Display', serif; overflow-x: hidden; }
        .font-dancing { font-family: 'Dancing Script', cursive; }
        .font-cinzel { font-family: 'Cinzel', serif; }
        .bubble-left::after { content: ""; position: absolute; bottom: 0; left: -8px; width: 20px; height: 20px; background-color: white; border-left: 1px solid #ffe4e6; border-bottom: 1px solid #ffe4e6; border-bottom-right-radius: 15px; z-index: -1; }
        .bubble-right::after { content: ""; position: absolute; bottom: 0; right: -8px; width: 20px; height: 20px; background-color: #5d1a1a; border-bottom-left-radius: 15px; z-index: -1; }
        @keyframes float-up { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.4; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }
        .animate-float-up { animation: float-up linear forwards; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}