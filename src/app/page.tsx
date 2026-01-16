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
  ShieldCheck,
  Zap,
  Users,
  Smile,
  Camera,
} from 'lucide-react';
import Link from 'next/link';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col pt-28 md:pt-0">
        <ContainerScroll
          titleComponent={
            <>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-normal mb-6 md:mb-8">
                <span>Premier Rapid-Deployment Content & Digital Services</span>
              </div>

              <h1 className="text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                We Shoot • Edit • Deliver Content in
              </h1>

              <p className="text-6xl md:text-9xl font-black text-primary leading-none tracking-tighter md:tracking-normal">
                Same Day<span className="text-3xl md:text-4xl align-super">*</span>
              </p>
            </>
          }
          deviceType="phone"
        >
          <video
            src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FGetpik%20Hero%20Reels.MP4?alt=media&token=8cefea4e-dfe8-4250-ab36-e3ee1c3937bb"
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            className="mx-auto rounded-none object-cover h-full w-full"
          />
        </ContainerScroll>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
              Not Just Instant Delivery, <br />
              <span className="text-primary not-italic">But So Much More.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MosaicCard
              icon={<Users className="w-6 h-6 text-primary" />}
              title="Vetted Pro Creators"
              description="Our partners are experienced professionals who know how to capture high-quality, engaging content."
            />
            <MosaicCard
              icon={<Smile className="w-6 h-6 text-primary" />}
              title="Effortless Booking"
              description="Get matched with a creator in minutes. Our booking process is fast, simple, and stress-free."
            />
            <MosaicCard
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Transparent Pricing"
              description="Affordable, upfront pricing with no hidden fees. Reels start at just ₹1999."
            />
            <MosaicCard
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Safe & Secure Platform"
              description="Your data and content are protected with advanced security and privacy protocols."
            />
            <MosaicCard
              icon={<PenTool className="w-6 h-6 text-primary" />}
              title="Lightning-Fast Delivery"
              description="True to our promise, we deliver your edited content the very same day."
            />
            <MosaicCard
              icon={<Camera className="w-6 h-6 text-primary" />}
              title="Pro-Grade Equipment"
              description="We shoot on the latest iPhones, mirrorless cameras, and other pro gear to ensure your content is top-notch."
            />
          </div>
        </div>
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

function MosaicCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-8 rounded-[2.5rem] bg-card/50 border border-border/30 overflow-hidden group hover:border-primary/40 transition-colors duration-300">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 bg-background border border-border rounded-2xl flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-black italic uppercase tracking-tighter text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">
          {description}
        </p>
      </div>
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
