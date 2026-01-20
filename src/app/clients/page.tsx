'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Users2,
  LayoutTemplate,
  PenTool,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      {/* Background Mesh Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Users2 className="w-3 h-3" />
            <span>Strategic Partnerships</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Transforming Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/40">
              Through Collaboration.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We partner with ambitious companies to build high-performance
            digital products and execute AI-powered marketing strategies that
            deliver measurable results.
          </p>
        </div>

        {/* Storytelling Sections */}
        <div className="space-y-12 mb-24 max-w-4xl mx-auto">
          <StorySection
            icon={<LayoutTemplate className="w-10 h-10 text-primary" />}
            title="Intelligent Website Design"
          >
            We don't just build websites; we craft digital flagships. Our
            approach combines high-fidelity design with robust, scalable
            architecture to create web experiences that are not only beautiful
            but are engineered for peak performance, user engagement, and
            conversion.
          </StorySection>

          <StorySection
            icon={<PenTool className="w-10 h-10 text-primary" />}
            title="Strategic Content Creation"
          >
            Content is the currency of the digital world. We produce
            high-impact visual and written assets—from viral-ready reels to
            persuasive web copy—that capture attention, tell your brand's story,
            and are optimized to perform across all social and digital channels.
          </StorySection>

          <StorySection
            icon={<TrendingUp className="w-10 h-10 text-primary" />}
            title="Data-Driven SEO Analysis"
          >
            Visibility is paramount. We deploy aggressive SEO strategies,
            combining deep technical audits with strategic keyword mapping to
            dominate search rankings. Our goal is to drive sustained organic
            growth and ensure you're not just seen, but picked first.
          </StorySection>
        </div>

        {/* Trust Stats Section */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative grid md:grid-cols-3 gap-12 p-10 md:p-16 rounded-[3rem] bg-card/50 border border-border backdrop-blur-2xl">
            <StatItem
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              value="99.9%"
              label="Uptime & Reliability"
            />
            <StatItem
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              value="250+"
              label="Successful Launches"
            />
            <StatItem
              icon={<Star className="w-6 h-6 text-primary" />}
              value="4.9/5"
              label="Client Satisfaction"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">
            Ready to write your success story?
          </h2>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-semibold group bg-primary hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
          >
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function StorySection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group p-8 md:p-10 rounded-[2.5rem] bg-card/50 border border-border backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="relative flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-background border border-border flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 group-hover:border-primary/20 transition-transform duration-500">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed font-medium italic">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center shadow-2xl">
        {icon}
      </div>
      <div>
        <div className="text-4xl font-bold tracking-tighter mb-1">{value}</div>
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
      </div>
    </div>
  );
}
