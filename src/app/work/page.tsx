'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

// These would eventually come from a CMS or data file
const categories = [
  'All',
  'Makeup Artist',
  'Outfit Shoot',
  'Jewellery Shoot',
  'Personal Branding',
];

// Placeholder data for videos. When you have the links, you can add them here.
const works = [
  { id: 1, category: 'Makeup Artist', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2Fmakeup.mp4?alt=media&token=509e0cb2-faee-4f12-b360-3da450f5d27d' },
  { id: 2, category: 'Outfit Shoot', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2FOutfit.mp4?alt=media&token=a14ceb52-8ee1-4f3e-bcd2-ad6a1e9b33af' },
  { id: 3, category: 'Jewellery Shoot', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2FJewellery.mp4?alt=media&token=5101bb01-af88-41df-8aae-f8ec6628fcaa' },
  { id: 4, category: 'Jewellery Shoot', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2FJewellery%202.mp4?alt=media&token=e99f259e-526a-4206-8087-37047603c56f' },
  { id: 5, category: 'Personal Branding', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FGetpik%20Hero%20Reels.MP4?alt=media&token=8cefea4e-dfe8-4250-ab36-e3ee1c3937bb' },
  { id: 6, category: 'Outfit Shoot', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2FOutfit.mp4?alt=media&token=a14ceb52-8ee1-4f3e-bcd2-ad6a1e9b33af' },
  { id: 7, category: 'Makeup Artist', videoSrc: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FWork%2Fmakeup.mp4?alt=media&token=509e0cb2-faee-4f12-b360-3da450f5d27d' },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks =
    activeCategory === 'All'
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Layers className="w-3 h-3" />
            <span>Our Creations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">
            Discover Our Work
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-medium italic">
            Explore a curated selection of our best work, from stunning makeup artistry to compelling brand stories.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6 py-2 h-auto text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-primary/20"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Slideshow */}
        <div className="w-full max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700 delay-300">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredWorks.map((work) => (
                <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="rounded-3xl overflow-hidden aspect-[9/16] group border-2 border-transparent hover:border-primary/50 transition-all">
                      <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                        <video
                          src={work.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          onContextMenu={(e) => e.preventDefault()}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                           <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-bold uppercase tracking-widest">
                            {work.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-20 text-muted-foreground italic">
            <p>No works found for this category yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
}
