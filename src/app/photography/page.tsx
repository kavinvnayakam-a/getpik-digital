"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { dbInstance } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

const cards = [
  { id: 1, rotate: 'rotate-0' },
  { id: 2, rotate: 'rotate-1' },
  { id: 3, rotate: '-rotate-1' },
  { id: 4, rotate: 'rotate-2' },
  { id: 5, rotate: '-rotate-2' },
  { id: 6, rotate: 'rotate-1' },
  { id: 7, rotate: 'rotate-0' },
];

const PhotoCard = ({ card, index, progress, total, imageUrl }: any) => {
  const start = index / total;
  const end = (index + 1) / total;
  const isLast = index === total - 1;
  
  const opacity = useTransform(
    progress, 
    [start, end - (isLast ? 0 : 0.1), end], 
    [1, 1, isLast ? 1 : 0]
  );
  
  const scale = useTransform(
    progress, 
    [start, end - (isLast ? 0 : 0.1), end], 
    [1, 1, isLast ? 1 : 0.9]
  );

  return (
    <motion.div 
      style={{ opacity, scale, zIndex: total - index }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden will-change-transform"
    >
      <div className={`
        relative w-full h-full md:w-[100vw] md:h-[100vh]
        bg-white shadow-2xl ${card.rotate} flex items-center justify-center
      `}>
        <div className="absolute inset-0 bg-zinc-100 overflow-hidden flex items-center justify-center">
           {imageUrl ? (
             <img 
               src={imageUrl} 
               alt="GetPik Moment" 
               className="w-full h-full object-cover"
             />
           ) : (
             <span className="text-zinc-200 font-serif italic text-2xl opacity-30 uppercase tracking-[0.5em]">
               Moment {card.id}
             </span>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export default function PhotographyPage() {
  const container = useRef(null);
  const [images, setImages] = useState<string[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const docRef = doc(dbInstance, "photography_config", "homepage_stack");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const isMobile = window.innerWidth < 768;
          setImages(isMobile ? data.mobileImages : data.desktopImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-zinc-100">
      {/* Hero Header */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center bg-white">
        <h2 className="text-zinc-400 uppercase tracking-[0.4em] text-[10px] mb-4">GetPik Weddings</h2>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-zinc-900 leading-none">
          Chosen for stories <br /> 
          <span className="italic font-serif text-zinc-400 text-4xl md:text-7xl">others miss.</span>
        </h1>
      </section>

      {/* REVEAL STACK */}
      <section ref={container} className="relative h-[800vh]">
        {cards.map((card, i) => (
          <PhotoCard 
            key={card.id} 
            card={card} 
            index={i} 
            progress={scrollYProgress} 
            total={cards.length} 
            imageUrl={images[i]} 
          />
        ))}
      </section>

      {/* SEAMLESS CONTENT TRANSITION WITH ZOOMED VIDEO */}
      <div className="relative z-[100] bg-white">
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             {/* Main Player Container */}
             <div className="relative aspect-video w-full bg-black overflow-hidden rounded-sm shadow-2xl">
                {/* 
                  Inner container with 20% zoom (scale-120) 
                  This removes black bars/scope from cinematic exports
                */}
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover opacity-95 scale-[1.5] origin-center"
                >
                  <source src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Videos%2FKavin%20%26%20Akshaya%20(1)%20(1).mp4?alt=media&token=c33d0fb9-29d7-47b5-9adf-06c19391a3b7" type="video/mp4" />
                </video>
                
                {/* Subtle Overlay to blend the video with the white page transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
             </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-light tracking-tighter mb-8 leading-tight">
                Authentic, <br/>
                <span className="font-serif italic text-zinc-400">forever GetPik.</span>
              </h2>
              <Link href="/admin/gallery" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-black pb-2 hover:text-zinc-400 transition">
                Access Admin Gallery
              </Link>
            </div>
            <p className="text-zinc-500 text-xl leading-relaxed font-light">
              Based in Hyderabad & Tamilnadu Erode, and serving all of India, we document weddings with a focus on honesty and cinematic beauty. Our goal is to capture the legacy of your big day through soulful storytelling.
            </p>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-zinc-100">
          <p className="text-zinc-300 text-[10px] tracking-[0.6em] uppercase font-medium">GetPik Photography • 2026</p>
        </footer>
      </div>
    </div>
  );
}