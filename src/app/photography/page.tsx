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
  
  const opacity = useTransform(progress, [start, end], [1, 0]);
  const scale = useTransform(progress, [start, end], [1, 0.9]);

  return (
    <motion.div 
      style={{ 
        opacity, 
        scale,
        zIndex: total - index,
      }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className={`
        relative w-full h-full md:w-[100vw] md:h-[100vh]
        bg-white shadow-2xl
        ${card.rotate} flex items-center justify-center
      `}>
        {/* Borderless Full-Bleed Image Container */}
        <div className="absolute inset-0 bg-zinc-100 overflow-hidden flex items-center justify-center">
           {imageUrl ? (
             <img 
               src={imageUrl} 
               alt={`GetPik Moment ${index + 1}`} 
               className="w-full h-full object-cover"
             />
           ) : (
             <span className="text-zinc-300 font-serif italic text-2xl md:text-5xl opacity-30 uppercase tracking-[0.5em]">
               Moment {card.id}
             </span>
           )}
        </div>

        {/* Text Overlay - Elevated for borderless design visibility */}
        <div className="absolute bottom-16 left-12 md:bottom-24 md:left-24 z-10 text-white mix-blend-difference">
          <p className="text-[10px] uppercase tracking-[0.6em] mb-2 opacity-70">GetPik Weddings</p>
          <h3 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-none">
             Vol // 0{card.id}
          </h3>
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
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();
    window.addEventListener('resize', fetchImages);
    return () => window.removeEventListener('resize', fetchImages);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-zinc-100">
      {/* Hero Header */}
      <section className="h-[50vh] flex flex-col items-center justify-center text-center bg-white">
        <h2 className="text-zinc-400 uppercase tracking-[0.4em] text-[10px] mb-4">GetPik Weddings</h2>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-zinc-900 leading-none">
          Chosen for stories <br /> 
          <span className="italic font-serif text-zinc-400 text-4xl md:text-7xl">others miss.</span>
        </h1>
      </section>

      {/* REVEAL STACK */}
      <section ref={container} className="relative h-[700vh]">
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

      {/* SEAMLESS CONTENT TRANSITION */}
      <div className="relative z-[100] bg-white">
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="relative aspect-video w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group cursor-pointer overflow-hidden rounded-sm">
               <div className="text-center group-hover:scale-110 transition-transform duration-700">
                  <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-black text-[10px] font-bold tracking-[0.5em] uppercase">Play the Film</h3>
               </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-light tracking-tighter mb-8 leading-tight">
                Authentic, <br/>
                <span className="font-serif italic text-zinc-400">forever GetPik.</span>
              </h2>
              <Link href="/admin/gallery" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-black pb-2 hover:text-zinc-400 transition">
                Access Admin Gallery
              </Link>
            </div>
            <p className="text-zinc-500 text-xl leading-relaxed">
              Based in Hyderabad and serving all of India, we document weddings with a focus on honesty and cinematic beauty. Our goal is to capture the legacy of your big day through soulful storytelling.
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