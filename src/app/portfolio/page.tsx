'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/lib/data';
import { ArrowRight, ExternalLink, LayoutGrid, Globe, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <LayoutGrid className="w-3 h-3" />
            <span>Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Our <span className="text-muted-foreground">Work.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of high-performance digital experiences crafted with 
            precision and powered by intelligence.
          </p>
        </div>

        {/* Filter Pills (Visual Only) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['All Projects', 'Web Design', 'AI Solutions', 'Brand Identity'].map((filter, i) => (
            <button
              key={filter}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                i === 0 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-muted/50 border-white/5 hover:border-primary/50 text-muted-foreground hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-muted/30 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <Button variant="secondary" className="rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                   </Button>
                </div>
                
                {/* Project Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                    {index % 2 === 0 ? 'Digital Experience' : 'AI Platform'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{project.client}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowRight className="-rotate-45 h-5 w-5" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Globe className="w-3.5 h-3.5" />
                    Live Site
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Cpu className="w-3.5 h-3.5" />
                    AI Core
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom Section */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-b from-muted/50 to-transparent border border-white/10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a vision?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            We’re currently accepting new projects for 2025. Let’s build something 
            extraordinary together.
          </p>
          <Button size="xl" className="rounded-full px-10 group">
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}