'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Activity,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  Rocket,
  Share2,
  PenTool,
  Radio,
} from 'lucide-react';
import Link from 'next/link';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>Neural Intelligence Protocol v2.5</span>
              </div>

              <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
                The Digital <br />
                <span className="text-primary not-italic">Architect.</span>
              </h1>

              <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-medium italic mb-12">
                We develop brands, deploy high-speed ecosystems, and dominate
                search landscapes using aggressive neural execution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  asChild
                  size="xl"
                  className="rounded-2xl px-10 h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black italic uppercase text-lg shadow-2xl shadow-blue-600/40 group"
                >
                  <Link href="/contact">
                    Deploy Inquiry
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="rounded-2xl px-10 h-16 text-lg font-black italic uppercase border-input hover:bg-accent"
                >
                  <Link href="/portfolio">Our Work</Link>
                </Button>
              </div>
            </>
          }
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FPortfolio%2FPlush.webp?alt=media&token=14155cd5-9e6f-4955-a571-35549e4e2f0c"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* --- CORE CAPABILITIES (Services) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
              Execution <br />
              <span className="text-muted-foreground/50">Modules.</span>
            </h2>
            <p className="text-muted-foreground font-medium italic max-w-sm">
              Five core protocols designed to transform your market presence
              from static to dominant.
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
      <section className="py-32 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
              Intelligence Tools
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Activity className="text-primary" />}
              title="SEO AUDITOR"
              description="Deep-scan technical debt and liquidity of traffic with our neural diagnostic suite."
              href="/seo-analyzer"
            />
            <FeatureCard
              icon={<Layers className="text-primary" />}
              title="IDEA ENGINE"
              description="Synthesize infinite content concepts from raw industry data and user intent."
              href="/ideas"
            />
            <FeatureCard
              icon={<Activity className="text-primary" />}
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

function ServiceCard({
  icon,
  title,
  desc,
  className = '',
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`p-8 rounded-[2.5rem] bg-card border hover:border-primary/30 transition-all group ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="relative overflow-hidden group border-border/10 bg-card hover:bg-card/90 rounded-[3rem] transition-all duration-500 shadow-lg">
      <CardContent className="p-10 space-y-6">
        <div className="w-16 h-16 rounded-[1.5rem] bg-background border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground font-medium leading-relaxed italic mb-8">
            {description}
          </p>
          <Button
            asChild
            variant="ghost"
            className="p-0 hover:bg-transparent text-primary font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group/btn"
          >
            <Link href={href}>
              Access Protocol{' '}
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
