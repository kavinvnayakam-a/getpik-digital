'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bot, Menu, X, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/clients', label: 'Clients' },
  { href: '/seo-analyzer', label: 'SEO' },
  { href: '/ideas', label: 'Ideas' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // Fix for hydration
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent rendering until mounted to ensure server/client match
  if (!mounted) return null;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 pt-4",
        scrolled ? "pt-2" : "pt-6"
      )}
    >
      <div className={cn(
        "mx-auto max-w-6xl rounded-[2rem] border transition-all duration-500",
        "bg-background/80 backdrop-blur-2xl",
        scrolled 
          ? "border-blue-500/30 shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)]" 
          : "border-border/10 shadow-none"
      )}>
        <div className="container flex h-16 items-center justify-between px-6">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <Zap className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="font-black italic tracking-tighter text-xl uppercase">
              GetPik<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-muted/50 rounded-full px-1 py-1 border border-border">
            <ul className="flex items-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full',
                      pathname === link.href
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-blue-600/20'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild size="sm" className="rounded-full px-6 h-10 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black italic uppercase transition-all group border">
              <Link href="/contact">
                Enquiry
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "absolute top-full left-4 right-4 mt-4 p-6 rounded-[2.5rem] border border-border bg-background/95 backdrop-blur-3xl md:hidden transition-all duration-500 origin-top shadow-2xl",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all",
                pathname === link.href 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <Button asChild className="w-full justify-between h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black italic uppercase">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Start Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
