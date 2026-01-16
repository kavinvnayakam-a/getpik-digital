'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ScrollTimeline() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (totalHeight > 0) {
      const scrollProgress = (scrollPosition / totalHeight) * 100;
      setProgress(scrollProgress);
    } else {
      setProgress(0);
    }

    setShow(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={scrollToTop}
      className={cn(
        "fixed top-0 right-0 h-full w-4 z-50 cursor-pointer group transition-opacity duration-500",
        show ? 'opacity-100' : 'opacity-0'
      )}
      aria-label="Scroll to top"
    >
      {/* Track */}
      <div className="absolute top-0 right-2 w-[2px] h-full bg-border/40" />
      
      {/* Progress Line */}
      <div 
        className="absolute top-0 right-2 w-[2px] bg-primary transition-all duration-100 ease-linear"
        style={{ height: `${progress}%` }}
      />
      
      {/* Moving Dot */}
      <div
        className="absolute right-[5px] w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/30 transform -translate-y-1/2 transition-all duration-100 ease-linear"
        style={{ top: `${progress}%` }}
      >
         <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
      </div>
    </div>
  );
}
