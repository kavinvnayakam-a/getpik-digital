'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6 text-center">
      {/* Animated Character (Floating Lens) */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 bg-slate-100 border-4 border-slate-200 rounded-full relative mb-8 flex items-center justify-center"
      >
        {/* Blinking Eye/Lens */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.95, 1] }}
          className="w-8 h-8 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.3)]"
        />
        <div className="absolute top-2 right-4 w-3 h-3 bg-white/50 rounded-full" />
      </motion.div>

      {/* 404 Text in Red */}
      <h1 className="text-8xl md:text-9xl font-black italic tracking-tighter mb-2 text-red-600">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-black italic uppercase mb-4 tracking-tight">
        Frame Out of Focus
      </h2>
      
      <p className="text-slate-500 max-w-md mb-10 font-medium italic">
        We couldn't "get" the "pik" you were looking for. The page might have been moved or doesn't exist.
      </p>

      {/* Button with Red Branding */}
      <Link 
        href="/" 
        className="px-10 py-4 bg-red-600 hover:bg-slate-900 text-white font-black italic uppercase rounded-full transition-all transform hover:scale-105 shadow-xl shadow-red-600/20"
      >
        Back to Gallery
      </Link>

      {/* Bottom Subtle Branding */}
      <p className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
        GetPik Digital Logistics
      </p>
    </div>
  );
}