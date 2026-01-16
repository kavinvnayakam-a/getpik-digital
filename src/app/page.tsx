'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, Activity, Layers, Cpu, Globe, 
  Smartphone, Rocket, Share2, PenTool, Radio
} from 'lucide-react';
import Link from 'next/link';
import ShaderBackground from '@/components/ui/shader-background';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-600/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 overflow-hidden">
        <ShaderBackground />

        <div className="container px-6 mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>Neural Intelligence Protocol v2.5</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
            The Digital <br />
            <span className="text-blue-600 not-italic">Architect.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-500 font-medium italic mb-12">
            We develop brands, deploy high-speed ecosystems, and dominate search 
            landscapes using aggressive neural execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Button asChild size="xl" className="rounded-2xl px-10 h-16 bg-blue-600 hover:bg-blue-700 text-white font-black italic uppercase text-lg shadow-2xl shadow-blue-600/40 group border-none">
              <Link href="/contact">
                Deploy Inquiry
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="rounded-2xl px-10 h-16 text-lg font-black italic uppercase border-white/10 hover:bg-white/5 backdrop-blur-sm">
              <Link href="/portfolio">Our Work</Link>
            </Button>
          </div>
        </div>

        {/* FULL WIDTH ABSTRACT VISUAL ATTACHED TO HERO */}
        <div className="w-full relative h-[300px] md:h-[500px] border-y border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Spinning Abstract Core */}
            <div className="absolute w-[800px] h-[800px] bg-[conic-gradient(from_180deg,transparent,rgba(37,99,235,0.15),transparent)] animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-[600px] h-[600px] bg-[conic-gradient(from_0deg,transparent,rgba(37,99,235,0.1),transparent)] animate-[spin_20s_linear_infinite_reverse]" />
            
            <div className="relative z-20 text-center space-y-4">
              <div className="flex items-center justify-center gap-8 opacity-40">
                <Cpu className="w-12 h-12 text-blue-600" />
                <Activity className="w-12 h-12 text-blue-400" />
                <Layers className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[1em] text-blue-500/50">Processing Brand Identity</div>
            </div>
          </div>
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      </section>

      {/* --- CORE CAPABILITIES (Services) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
              Execution <br /><span className="text-gray-800">Modules.</span>
            </h2>
            <p className="text-gray-500 font-medium italic max-w-sm">
              Five core protocols designed to transform your market presence from 
              static to dominant.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            <ServiceCard 
              icon={<Globe />} 
              title="Brand Websites" 
              desc="High-performance digital flagships optimized for conversion speed." 
            />
            <ServiceCard 
              icon={<Smartphone />} 
              title="App Development" 
              desc="Native and cross-platform mobile ecosystems built for retention." 
            />
            <ServiceCard 
              icon={<Rocket />} 
              title="SEO Boosting" 
              desc="Aggressive keyword dominance and technical search optimization." 
            />
            <ServiceCard 
              icon={<Share2 />} 
              title="Social Manage" 
              desc="Algorithmic growth strategies across all major neural social networks." 
            />
            <ServiceCard 
              icon={<PenTool />} 
              title="Content Creation" 
              desc="High-fidelity visual and written assets designed to capture intent." 
              className="sm:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* --- ANALYTICS TOOLS (Your Original Features) --- */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">Intelligence Tools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Activity className="text-blue-500" />}
              title="SEO AUDITOR"
              description="Deep-scan technical debt and liquidity of traffic with our neural diagnostic suite."
              href="/seo-analyzer"
            />
            <FeatureCard
              icon={<Layers className="text-blue-500" />}
              title="IDEA ENGINE"
              description="Synthesize infinite content concepts from raw industry data and user intent."
              href="/ideas"
            />
            <FeatureCard
              icon={<Activity className="text-blue-500" />}
              title="DATA VIZ"
              description="High-fidelity visualizations of your brand's global digital performance."
              href="/portfolio"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc, className = "" }: { icon: React.ReactNode, title: string, desc: string, className?: string }) {
  return (
    <div className={`p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-blue-600/30 transition-all group ${className}`}>
      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:text-blue-500 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-medium italic leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden group border-white/5 bg-white/[0.03] hover:bg-white/[0.06] rounded-[3rem] transition-all duration-500 border-none shadow-2xl">
      <CardContent className="p-10 space-y-6">
        <div className="w-16 h-16 rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500 shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{title}</h3>
          <p className="text-gray-500 font-medium leading-relaxed italic mb-8">
            {description}
          </p>
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-blue-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group/btn">
            <Link href={href}>
              Access Protocol <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
