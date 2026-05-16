"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Heart, Camera, Send, Calendar } from 'lucide-react';
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";

// --- FIREBASE INITIALIZATION ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const FlyingHearts = () => {
  const [heartArray, setHeartArray] = useState([]);
  useEffect(() => {
    const initialHearts = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      size: 12 + Math.random() * 15,
      duration: 8 + Math.random() * 5,
    }));
    setHeartArray(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {heartArray.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-30 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default function WeddingInvitation() {
  const [daysToGo, setDaysToGo] = useState("00");
  const [wishes, setWishes] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Target Date: June 17, 2026
  const weddingDate = "2026-06-17";
  
  // Updated to match exactly: Reception timing (11:00 AM - 3:00 PM IST) & Location (Sri Bannari Amman Mahal, Gobi)
  // 11:00 AM IST = 05:30 UTC | 03:00 PM IST = 09:30 UTC
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception%3A+Vishnu+%26+Akilandeshwari&dates=20260617T053000Z/20260617T093000Z&details=Join+us+for+our+Wedding+Reception%21&location=Sri+Bannari+Amman+Mahal%2C+Karattadipalayam+-+Bungalowpudur+Rd%2C+NanjaiPuliampatti%2C+Gobi&sf=true&output=xml`;

  useEffect(() => {
    const target = new Date(`${weddingDate}T11:00:00`).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDaysToGo(days > 0 ? days.toString().padStart(2, '0') : "00");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const q = query(collection(db, "Vishnu_Akila_Wishes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setWishes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (error) => { console.error("Firestore Error:", error); });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "Vishnu_Akila_Wishes"), { ...formData, createdAt: serverTimestamp() });
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) { console.error(err); }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center bg-[#f4f1ee] min-h-screen relative overflow-hidden">
      <Head>
        <title>Vishnu & Akilandeshwari | Wedding</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-stone-50 opacity-20 pointer-events-none animate-shimmer" />
      <FlyingHearts />

      <div className="w-full max-w-[450px] bg-white/95 backdrop-blur-md shadow-2xl relative overflow-x-hidden flex flex-col z-10">
        
        <section className="relative w-full px-6 pt-12 pb-8 text-center">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 border-b border-stone-100 pb-4 px-2">
            <div className="text-left font-decorative">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a37d] font-bold">Wednesday / புதன்கிழமை</p>
              <p className="text-xl text-stone-700 uppercase leading-tight font-bold">JUNE 17 / ஆனி 03</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">2026</p>
            </div>
            <div className="text-right">
                <span className="text-4xl font-light text-stone-300 leading-none tracking-tighter">{daysToGo}</span>
                <p className="text-[8px] uppercase tracking-widest text-stone-400 font-bold">Days to go</p>
            </div>
          </div>

          <div className="relative mx-auto w-[85%] aspect-[9/13] rounded-t-full overflow-hidden border-[8px] border-[#f4f1ee] shadow-sm mb-12">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Vishnu%26Akila%2FUntitled%20design%20(11).webp?alt=media&token=a3278ddf-db5a-466c-83f4-1853f448733b" 
              className="w-full h-full object-cover"
              alt="Vishnu and Akilandeshwari"
            />
          </div>

          <div className="relative mb-6 px-4">
            <span className="absolute top-1/2 left-1/2 -translate-x-[-20%] -translate-y-1/2 text-[120px] font-thin text-pink-100 pointer-events-none italic opacity-60">&</span>
            <div className="relative z-10 font-decorative">
                {/* Groom Section */}
                <div className="mb-8">
                    <h1 className="text-[32px] tracking-wide text-[#a69177] uppercase leading-tight">VISHNUPATHY</h1>
                    <p className="text-[20px] text-stone-700 font-bold mt-1">Er. V. விஷ்ணுபதி</p>
                    <p className="text-[11px] text-stone-400 uppercase tracking-widest mt-1 font-serif">B.E (Civil)., A.M.I.E</p>
                </div>
                
                <div className="h-px w-12 bg-stone-200 mx-auto mb-8"></div>

                {/* Bride Section */}
                <div>
                    <h1 className="text-[32px] tracking-wide text-[#a69177] uppercase leading-tight">AKILANDESHWARI</h1>
                    <p className="text-[20px] text-stone-700 font-bold mt-1">R. அகிலாண்டேஸ்வரி</p>
                    <p className="text-[11px] text-stone-400 uppercase tracking-widest mt-1 font-serif">M.Sc (Maths)., PGDCA</p>
                </div>
            </div>
          </div>

          <div className="mb-12 px-8 font-serif">
            <p className="text-stone-500 text-sm italic leading-relaxed">
              We cordially invite you to celebrate the union of our hearts.
              <br/>
              <span className="text-[12px] mt-2 block">எங்கள் திருமண விழாவிற்கு தங்களை அன்புடன் அழைக்கிறோம்.</span>
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative py-8 px-4">
            <div className="space-y-16 relative">

                {/* Reception */}
                <div className="relative flex items-center justify-between">
                    <div className="w-[42%] text-right pr-4">
                        <p className="text-md font-bold text-stone-700">17 JUNE</p>
                        <p className="text-stone-400 text-[9px] uppercase font-bold tracking-tighter">11:00 AM - 3:00 PM</p>
                    </div>

                    <div className="z-10 bg-white border-2 border-[#c5a37d] p-2 rounded-full shadow-sm">
                        <Calendar size={16} className="text-[#c5a37d]" />
                    </div>

                    <div className="w-[42%] text-left pl-4">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-widest font-decorative">Reception</h4>
                        <p className="text-[#c5a37d] text-[10px] font-bold mt-1">வரவேற்பு</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a37d] font-bold mb-2 font-serif">Reception Venue</h3>
                    <h2 className="text-xl text-stone-700 mb-1 font-decorative">Sri Bannari Amman Mahal</h2>
                    <p className="text-stone-600 text-sm font-bold">ஸ்ரீ பண்ணாரி அம்மன் மஹால்</p>
                    <p className="text-stone-500 text-[10px] mb-6 uppercase leading-relaxed font-serif">
                        Karattadipalayam - Bungalowpudur Rd,<br/>
                        NanjaiPuliampatti, Gobi.
                    </p>
                    
                    {/* Action Buttons Container with proper vertical gap spacing */}
                    <div className="flex flex-col gap-4 mt-2">
                        <a href="https://maps.app.goo.gl/knDx948oPzaFwBv47" target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full bg-stone-800 text-white uppercase text-[10px] font-bold tracking-[0.2em] shadow-lg active:scale-95 transition-all">
                            <MapPin size={14} /> Reception Location / வரைபடம்
                        </a>

                        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full border border-stone-300 text-stone-600 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-stone-50 active:scale-95 transition-all">
                            <Calendar size={14} className="text-blue-500" />
                            Save the Date / நினைவூட்டல்
                        </a>
                    </div>
                </div>

             </div>
          </div>
        </section>

        {/* Family Section */}
        <section className="py-10 px-8 bg-[#fdfbf9] border-y border-stone-100 text-center">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-6 font-bold">Family / குடும்பத்தினர்</h3>
            <div className="grid grid-cols-2 gap-8 text-[11px]">
                <div className="space-y-2">
                    <p className="font-bold text-[#a69177] uppercase tracking-wider">Groom's Parents</p>
                    <p className="text-stone-600 font-serif">Mr. K.R. Vijayaganesh M.A., LL.B.<br/>& Mrs. P. Vijayalakshmi</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-[#a69177] uppercase tracking-wider">Bride's Parents</p>
                    <p className="text-stone-600 font-serif">Mr. V.V. Ramesh<br/>& Mrs. Jothi</p>
                </div>
            </div>
        </section>

        {/* Guestbook Section */}
        <section className="bg-white/40 backdrop-blur-md py-16 px-6 border-t border-stone-100">
          <div className="text-center mb-10">
            <div className="mb-4 flex flex-col items-center opacity-70">
                <Camera size={20} className="text-[#c5a37d] mb-1" />
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-600 font-decorative">GetPik Photography & Videography</p>
            </div>
            <h3 className="text-2xl font-light uppercase text-stone-700 tracking-[0.2em] font-decorative">Guestbook</h3>
            <p className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.3em] mt-2 font-serif">Send your blessings</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 mb-12">
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-serif">
              <div className="flex flex-col gap-3">
                  <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 outline-none focus:border-[#c5a37d] transition-all" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                  <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 outline-none focus:border-[#c5a37d] transition-all" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
              </div>
              <textarea required placeholder="Write your wishes here..." rows={3} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 outline-none resize-none focus:border-[#c5a37d] transition-all" value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} />
              <button disabled={isSubmitting} className="w-full py-4 bg-[#c5a37d] text-white rounded-full font-bold uppercase text-[11px] tracking-[0.2em] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg hover:brightness-105">
                {isSubmitting ? "Delivering..." : <><Send size={14}/> Submit Blessing</>}
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-6">
            <AnimatePresence initial={false}>
              {wishes.map((wish) => (
                <motion.div key={wish.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start">
                  <span className="font-bold text-[8px] uppercase tracking-widest text-stone-400 mb-1 px-3">{wish.name}</span>
                  <div className="px-5 py-4 rounded-2xl bg-white text-stone-600 border border-stone-100 text-sm shadow-sm">
                    <p className="italic font-serif text-xs">"{wish.message}"</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <footer className="py-12 bg-white text-center border-t border-stone-100">
           <Heart className="mx-auto text-pink-200 mb-4 fill-pink-200" size={16} />
           <p className="text-[11px] uppercase tracking-[0.3em] text-stone-700 font-decorative">Vishnu & Akilandeshwari</p>
           <p className="text-[9px] text-stone-400 mt-2 font-serif italic">Together Forever</p>
        </footer>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');
        .font-decorative { font-family: 'Cinzel Decorative', cursive; }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.3; }
          85% { opacity: 0.3; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float { animation: float linear infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 10s infinite linear; }
        ::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}