"use client";

import React from 'react';
import { 
  Activity, Cpu, Globe, 
  Rocket, Radio, CheckCircle2,
  CreditCard, GraduationCap, Scissors,
  Layers, Zap, ShieldCheck, Database, Search,
  Server, Info
} from 'lucide-react';

export default function Quotation125() {
  return (
    <div className="flex flex-col min-h-screen text-foreground selection:bg-primary/30 font-sans">
      
      {/* --- NEURAL BACKGROUND --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[180px] rounded-full" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <section className="pt-24 pb-32 container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>Neural Intelligence Protocol v2.5 // Inquiry #125</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-4">
            Lora <span className="text-primary not-italic">Lounge.</span>
          </h1>
          <p className="text-muted-foreground font-medium italic uppercase tracking-widest text-sm">Strategic Digital Deployment Quote</p>
        </div>

        {/* --- THE MOSAIC WHITE CARD --- */}
        <div className="bg-card text-card-foreground rounded-[3rem] overflow-hidden shadow-[0_0_100px_hsl(var(--primary)/0.2)] border border-border">
          <div className="p-8 md:p-16">
            
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">Technical Architecture</h2>
              <p className="text-muted-foreground text-lg italic leading-relaxed">
                For <strong>Lora Lounge</strong>, our execution focus is on <strong>Scalability and Frictionless User Flow</strong>. 
                We are deploying a proprietary architecture that bridges high-fidelity retail 
                with precision service scheduling.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 border-t border-border pt-12">
              
              {/* Module 1: E-com */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">E-com Intelligence</h3>
                    <p className="text-muted-foreground text-[10px] font-black italic uppercase tracking-widest mt-1">Retail Execution Layer</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground text-sm italic font-medium">
                  <li className="flex gap-3"><Zap className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Dynamic Landing Engine:</strong> Custom hero architecture designed to highlight Lora Lounge's unique brand story with ultra-fast load times.</span></li>
                  <li className="flex gap-3"><Database className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>SKU Management Dashboard:</strong> Advanced backend for real-time inventory adjustments, category mapping, and bulk product updates.</span></li>
                  <li className="flex gap-3"><Layers className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Order Operations Suite:</strong> Full-stack order lifecycle management, from instant payment confirmation to dispatch tracking.</span></li>
                </ul>
              </div>

              {/* Module 2: Booking */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-2xl">
                    <Scissors size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">Service Protocols</h3>
                    <p className="text-muted-foreground text-[10px] font-black italic uppercase tracking-widest mt-1">Scheduling Logic</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground text-sm italic font-medium">
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Salon Scheduling Engine:</strong> Automated real-time calendar syncing for appointment booking, service selection, and staff allocation.</span></li>
                  <li className="flex gap-3"><GraduationCap className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Academy Portal:</strong> A specialized educational sub-site for course displays, student inquiries, and digital enrollment management.</span></li>
                  <li className="flex gap-3"><Activity className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Neural Confirmation Flow:</strong> Multi-channel notification logic (Email/Dashboard) to ensure 0% scheduling leakage.</span></li>
                </ul>
              </div>

              {/* Module 3: Checkout */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">Checkout Layer</h3>
                    <p className="text-muted-foreground text-[10px] font-black italic uppercase tracking-widest mt-1">Financial Gateway</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground text-sm italic font-medium">
                  <li className="flex gap-3"><Zap className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Easy-Checkout System:</strong> Optimized one-page checkout protocol to minimize drop-offs and maximize successful conversions.</span></li>
                  <li className="flex gap-3"><ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Multi-Gateway Integration:</strong> Full support for UPI (PhonePe, GPay), Credit/Debit Cards, and Secure Net Banking protocols.</span></li>
                </ul>
              </div>

              {/* Module 4: SEO */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-2xl">
                    <Search size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">SEO & Visibility</h3>
                    <p className="text-muted-foreground text-[10px] font-black italic uppercase tracking-widest mt-1">Dominance Strategy</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground text-sm italic font-medium">
                  <li className="flex gap-3"><Rocket className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>Neural SEO Core:</strong> Strategic keyword mapping and technical site structure designed for aggressive search engine indexing.</span></li>
                  <li className="flex gap-3"><Layers className="w-4 h-4 text-primary flex-shrink-0" /> <span><strong>5 Core Brand Assets:</strong> Meticulously designed static pages (Home, About, Contact, FAQ, Terms) featuring high-fidelity brand copy.</span></li>
                </ul>
              </div>
            </div>

            {/* --- PRICING BOX --- */}
            <div className="mt-16 p-12 bg-muted/50 rounded-[2.5rem] border border-border flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-foreground">Investment Detail</h4>
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Reference: LoraLounge_FullStack_v1</p>
                <div className="mt-4 flex gap-6">
                    <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Market: <span className="text-foreground/80">85,000</span></div>
                    <div className="text-xs font-black uppercase tracking-widest text-primary">Adjustment: <span className="text-primary/80">-20,000</span></div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-muted-foreground font-black italic uppercase tracking-tighter text-sm mb-1">Total Project Investment</div>
                <div className="text-8xl font-black italic tracking-tighter text-primary">65,000<span className="text-lg ml-2 text-muted-foreground italic">₹</span></div>
              </div>
            </div>

            {/* --- TECHNICAL NOTES --- */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-foreground mb-2 italic underline decoration-orange-200 decoration-2">Infrastructure Note</h5>
                  <p className="text-[13px] text-muted-foreground italic leading-relaxed">
                    We use <strong>Firebase Storage and database</strong>, operational costs will be calculated as <strong>pay as you go</strong>, completely depending on system usage and traffic volume.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-foreground mb-2 italic underline decoration-primary/40 decoration-2">Service Exclusions</h5>
                  <p className="text-[13px] text-muted-foreground italic leading-relaxed">
                    If required, <strong>Social Media development + Off-page SEO</strong> will be considered <strong>totally additional costs</strong> and are not included in this deployment architecture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* STATUS BAR */}
        <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-[0.5em]">
                <Activity className="w-4 h-4 animate-pulse text-primary" />
                <span>Protocol Active // Awaiting Validation</span>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border bg-card/20">
        <div className="container px-6 mx-auto text-center">
          <p className="text-muted-foreground/50 text-[9px] italic uppercase tracking-[0.8em]">End of Documentation // Confidential & Encrypted</p>
        </div>
      </footer>

      <style jsx global>{`
        strong {
          color: #0f172a;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
}
