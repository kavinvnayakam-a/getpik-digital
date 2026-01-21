'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, ArrowRight, Zap, ShieldCheck, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const footerLinks = {
  product: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'SEO Analyzer', href: '/seo-analyzer' },
    { label: 'Content Ideas', href: '/ideas' },
  ],
  company: [
    { label: 'Clients', href: '/clients' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Background Neural Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary p-1.5 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                <Zap className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="font-black italic tracking-tighter text-2xl uppercase text-foreground">
                GetPik<span className="text-primary">.</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm italic">
              Empowering digital brands with neural insights and high-performance design strategies. 
              The future of creative execution, delivered.
            </p>

            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all group"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 italic">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 italic">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neural Newsletter Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 italic">Neural Updates</h4>
            <p className="text-xs text-muted-foreground font-medium italic">
              Subscribe to receive weekly technical audits and creative intelligence.
            </p>
            <div className="relative group">
              <Input 
                placeholder="INPUT EMAIL PROTOCOL..." 
                className="bg-muted/50 border-border h-14 rounded-2xl pl-6 pr-16 text-[10px] font-black tracking-widest text-foreground focus-visible:ring-primary focus-visible:border-primary/50 transition-all placeholder:text-muted-foreground uppercase"
              />
              <Button 
                size="icon" 
                className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* System Status Mockup */}
            <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-green-500">System Online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Activity className="w-3 h-3 text-primary" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-primary">Neural Link Active</span>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                © {new Date().getFullYear()} GetPik Intelligence Agency
            </p>
            <p className="text-[8px] font-bold text-muted-foreground/50 uppercase tracking-widest">
                Optimized for High-Performance Execution
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-muted-foreground/50">
             <ShieldCheck size={14} />
             <span className="text-[8px] font-black uppercase tracking-widest">Encrypted Transmission</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
