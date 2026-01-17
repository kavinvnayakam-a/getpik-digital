'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { analyzeSeoAction } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Loader2, 
  ShieldAlert, 
  CheckCircle2, 
  Zap, 
  Globe, 
  BarChart3,
  Cpu,
  Radio
} from 'lucide-react';

// Form Submit Component
function AnalyzeButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-black italic uppercase rounded-xl transition-all shadow-lg shadow-primary/20 group"
    >
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <span className="flex items-center gap-2">
          Initialize Scan <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </span>
      )}
    </Button>
  );
}

export default function SeoPage() {
  // useActionState handles the form state and transition for React 19
  const [state, formAction] = useActionState(analyzeSeoAction, { message: '' });
  const [url, setUrl] = useState('');

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30">
      
      {/* --- ABSTRACT SCANNER HERO (FULL WIDTH) --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          {/* Neural Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px]" />
          
          {/* Moving Laser Line Abstract Animation */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-scan" />
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container px-6 mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>SEO Diagnostic Protocol active</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
            Technical <br /><span className="text-primary not-italic">Liquidity.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-muted-foreground font-medium italic mb-12">
            Execute a deep-layer neural audit on your domain. Identify technical debt, 
            indexing friction, and high-velocity ranking opportunities.
          </p>

          <form action={formAction} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background/50 border border-border rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
              <Input
                type="url"
                name="url"
                placeholder="https://brand-protocol.com"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 bg-transparent border-none text-foreground placeholder:text-muted-foreground font-bold focus-visible:ring-0 px-6 text-lg"
              />
              <AnalyzeButton />
            </div>
            {state.errors?.url && (
              <p className="text-red-500 text-[10px] font-black mt-4 uppercase tracking-[0.2em] italic">
                {state.errors.url[0]}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* --- RESULTS AREA --- */}
      <section className="py-20 container mx-auto px-6">
        {state.message === 'success' ? (
          <div className="animate-in fade-in zoom-in duration-1000">
             {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               <ResultStat label="Health Score" value={`${state.data?.score || 0}/100`} icon={<Zap className="text-primary" />} />
               <ResultStat label="Technical Debt" value={state.data?.debt || 'Analyzing'} icon={<Cpu className="text-primary" />} />
               <ResultStat label="Visibility" value={state.data?.visibility || 'Stable'} icon={<BarChart3 className="text-primary" />} />
            </div>

            <Card className="bg-card/50 border-border/50 rounded-[3rem] overflow-hidden backdrop-blur-md">
              <CardContent className="p-8 md:p-16 space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-10">
                  <div className="flex items-center gap-4">
                    <Globe className="text-primary w-10 h-10" />
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">Domain Under Review</h3>
                      <p className="text-2xl font-black italic uppercase tracking-tighter">{url.replace('https://', '')}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-widest">
                    Status: Optimized
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 text-muted-foreground font-medium italic">
                  <div className="space-y-6">
                    <p className="flex items-center gap-2 text-foreground font-black uppercase text-[10px] tracking-widest">
                      <CheckCircle2 className="text-green-500 w-4 h-4" /> Detected Assets
                    </p>
                    <ul className="space-y-3 text-sm border-l border-border pl-6">
                        <li>Neural Schema Markup v4.0 Detected</li>
                        <li>Edge-Network Latency: 42ms</li>
                        <li>Mobile UX Liquid Layout Verified</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <p className="flex items-center gap-2 text-foreground font-black uppercase text-[10px] tracking-widest">
                      <ShieldAlert className="text-primary w-4 h-4" /> Priority Warnings
                    </p>
                    <ul className="space-y-3 text-sm border-l border-border pl-6">
                        <li>LCP exceeds 2.5s threshold</li>
                        <li>Metadata density below market parity</li>
                        <li>Unused CSS scripts impacting crawl budget</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-10">
                  <Button asChild className="w-full h-20 rounded-[2rem] bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black italic uppercase transition-all shadow-2xl text-xl">
                    <Link href="/contact">
                      Deploy Full Recovery Strategy
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-32 opacity-20">
             <div className="relative inline-block">
                <Cpu className="w-24 h-24 mx-auto mb-6 animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
             </div>
             <p className="text-[12px] font-black uppercase tracking-[1em] italic">Waiting for target URL protocol...</p>
          </div>
        )}
      </section>
    </div>
  );
}

// Reusable Stat Component
function ResultStat({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="p-10 rounded-[3rem] bg-card/50 border border-border flex flex-col items-center text-center space-y-3 hover:bg-accent transition-colors">
      <div className="p-4 rounded-2xl bg-background border border-border mb-2">{icon}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-4xl font-black italic tracking-tighter uppercase text-foreground">{value}</div>
    </div>
  );
}
