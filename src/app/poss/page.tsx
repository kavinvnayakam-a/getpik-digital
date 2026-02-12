'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Check, 
  ArrowRight, 
  QrCode, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  LayoutDashboard,
  Timer,
  Navigation,
  BellRing,
  ChefHat
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GetPikPOSPage() {
  return (
    <div className="min-h-screen pb-12 px-6 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto pt-24">
        
        {/* --- Hero Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Timer className="w-3 h-3" />
            <span>The 10-Minute Dining Revolution</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-slate-900 italic uppercase">
            Order. Track. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Never Wait.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium italic">
            On average, customers think and order within <span className="text-blue-600 font-black font-not-italic">10 minutes</span>. 
            GetPik bridges that gap with live updates and zero-friction logistics.
          </p>
        </div>

        {/* --- Simplified Logistics & Animation Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-6xl mx-auto mb-20">
          
          {/* Animated Mobile UI */}
          <div className="relative flex justify-center items-center h-[460px] bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner order-1 lg:order-2">
            <motion.div 
              initial={{ rotate: -2 }}
              animate={{ rotate: 2 }}
              transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
              className="relative w-52 lg:w-56 h-[420px] lg:h-[440px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden z-20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-2xl" />
              
              <div className="p-5 pt-10 space-y-4">
                <div className="relative h-32 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col items-center justify-center">
                   <QrCode className="w-12 h-12 text-slate-600" />
                   <motion.div animate={{ top: ['10%', '90%', '10%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute left-0 right-0 h-[1px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />
                   <p className="absolute bottom-2 text-[7px] font-black text-blue-400 uppercase tracking-widest">Scanning Table QR...</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>Live Status</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                  </div>
                  <div className="h-1 bg-slate-700 w-full rounded-full overflow-hidden">
                    <motion.div initial={{ width: "0%" }} animate={{ width: "75%" }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-blue-500" />
                  </div>
                  <p className="text-[11px] text-white font-black italic uppercase">Chef is preparing...</p>
                </div>

                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 flex justify-between items-center">
                  <p className="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">#GP-9928 • Table 05</p>
                  <Check className="w-3 h-3 text-green-500" />
                </div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl p-3 flex flex-col justify-end">
                  <p className="text-[8px] text-white/70 font-bold uppercase">Pickup Status</p>
                  <p className="text-xs font-black text-white italic">READY IN 2 MINS</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-2 top-20 bg-white p-3 rounded-2xl shadow-xl border border-blue-100 z-30 flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-xl text-white"><Navigation className="w-4 h-4" /></div>
              <div>
                <p className="text-[8px] font-black uppercase text-slate-400">Geo-Fencing</p>
                <p className="text-[10px] font-bold text-slate-900">Active Zone</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8 order-2 lg:order-1 text-left">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] text-slate-900">
              Zero Queues. <br/><span className="text-blue-600">Zero Mess.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium italic leading-relaxed">
              We sync your kitchen with your customer's distance. By the time they arrive, the order is ready for handover.
            </p>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {[
                { icon: <QrCode />, title: "Scan & Order", desc: "Table automation" },
                { icon: <Navigation />, title: "Geo-Arrival", desc: "Distance syncing" },
                { icon: <ChefHat />, title: "KOT Sync", desc: "Kitchen flow" },
                { icon: <BellRing />, title: "Live Pings", desc: "Guest updates" }
              ].map((f, i) => (
                <div key={i} className="space-y-1 border-l-2 border-blue-600 pl-3 text-left">
                  <div className="flex items-center gap-2 text-blue-600">
                    {React.cloneElement(f.icon as React.ReactElement, { className: "w-4 h-4" })}
                    <span className="font-black uppercase italic text-sm tracking-tighter">{f.title}</span>
                  </div>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Pricing Section --- */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2 font-mono">Pricing Protocol</p>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tighter leading-none">The Scale Engine</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          <PricingCard
            planName="Scale Plan"
            tagline="Growth Catalyst"
            description="The complete POS solution for modern restaurants looking for expansion."
            price="1,999"
            pricePeriod="/month"
            features={['Billing & CRM', 'Advanced Reporting', 'QR Code Ordering', 'KOT Integration', 'GEO-Fencing Enabled', 'Live Status Updates']}
            isPopular={true}
          />
          <PricingCard
            planName="Strategic Core"
            tagline="Enterprise"
            description="Customized workflows for large-scale operations and chains."
            price="Custom"
            pricePeriod=""
            features={['Multi-Outlet Sync', 'Dedicated Server', 'Full AI Inventory', 'Custom API Integrations', 'Priority 24/7 Support', 'GetPik Media Support']}
            isPopular={false}
          />
        </div>

        {/* --- Capabilities Grid --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-20">
          {[
            { icon: <LayoutDashboard />, label: "Billing" },
            { icon: <Users />, label: "CRM" },
            { icon: <BarChart3 />, label: "Reporting" },
            { icon: <ShieldCheck />, label: "Security" },
            { icon: <ChefHat />, label: "Easy KOT" },
            { icon: <Smartphone />, label: "mPOS" },
            { icon: <Navigation />, label: "GEO Fencing" },
            { icon: <BellRing />, label: "Interactive" }
          ].map((feature, i) => (
            <Card key={i} className="group p-6 rounded-[2rem] border-slate-50 bg-white hover:bg-slate-900 transition-all duration-300 border-2 shadow-sm text-center">
              <div className="text-blue-600 group-hover:text-blue-400 mb-3 flex justify-center">{React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}</div>
              <p className="text-lg font-black italic uppercase text-slate-900 group-hover:text-white transition-colors leading-none">{feature.label}</p>
            </Card>
          ))}
        </div>

        {/* --- Featured Modules Section --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <ModuleCard
            title="Tasks"
            tagline="Daily Ops"
            description="Automate & track daily tasks with real-time progress updates for smoother operations."
            features={['Task Automation', 'Manager Dashboard', 'Compliance Logs']}
            isPopular={true}
          />
          <ModuleCard
            title="Purchase"
            tagline="AI Inventory"
            description="Digitize invoices with a photo and automate your purchase ledgers effortlessly."
            features={['AI Receipt Scanning', 'Vendor Management', 'Stock Alerts']}
            isPopular={false}
          />
        </div>

        {/* --- Final CTA --- */}
        <div className="max-w-5xl mx-auto">
          <div className="p-8 lg:p-16 rounded-[3rem] bg-slate-900 text-white border border-blue-500/20 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-8 opacity-5"><QrCode className="w-40 h-40 text-blue-500" /></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-6 leading-[0.9]">
                Power Your <br/><span className="text-blue-500">Restaurant.</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 italic font-medium leading-relaxed">
                You already know what GetPik is capable of. We combine visual artistry with high-end POS logistics to scale your vision.
              </p>
              <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl font-black italic uppercase bg-blue-600 hover:bg-blue-500 transition-all group">
                <Link href="/contact">Enquire Now <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ planName, tagline, description, price, pricePeriod, features, isPopular }: { planName: string; tagline: string; description: string; price: string; pricePeriod: string; features: string[]; isPopular: boolean; }) {
  return (
    <Card className={cn(
      "p-8 rounded-[2.5rem] border bg-white flex flex-col h-full text-left",
      isPopular ? "border-blue-600 shadow-xl" : "border-slate-100"
    )}>
      <div className="flex-1">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-[9px] mb-1 font-mono">{tagline}</p>
        <h3 className="text-2xl font-black italic uppercase mb-3 text-slate-900 leading-none">{planName}</h3>
        <p className="text-xs text-slate-500 font-medium italic mb-6 leading-relaxed">{description}</p>
        <div className="mb-6">
            <span className="text-4xl font-black text-slate-900">{price !== 'Custom' ? '₹' + price : price}</span>
            <span className="text-slate-400 font-bold ml-1 text-sm">{pricePeriod}</span>
            {price !== 'Custom' && <span className="text-slate-400 text-[9px] font-black block mt-0.5 tracking-widest uppercase font-mono">+ GST / MONTH</span>}
        </div>
        <ul className="space-y-2.5 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700 italic leading-none">
              <Check className="w-3.5 h-3.5 text-blue-600" /> {f}
            </li>
          ))}
        </ul>
      </div>
      <Button asChild className={cn("w-full rounded-xl h-12 font-black italic uppercase group transition-all", isPopular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-slate-50 text-slate-900 hover:bg-slate-100 border-2 border-slate-200")}>
        <Link href="/contact">Enquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
      </Button>
    </Card>
  );
}

function ModuleCard({ title, tagline, description, features, isPopular }: { title: string; tagline: string; description: string; features: string[]; isPopular: boolean; }) {
  return (
    <Card className={cn("p-8 rounded-[3rem] border bg-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl text-left", isPopular ? "border-blue-600 shadow-xl" : "border-slate-100")}>
      <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 font-mono">{tagline}</p>
      <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 font-medium italic mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 italic leading-none">
            <Check className="w-4 h-4 text-blue-600" /> {f}
          </li>
        ))}
      </ul>
      <Button asChild className={cn("w-full rounded-2xl h-12 font-black italic uppercase group border-2 transition-all", isPopular ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" : "bg-white text-slate-900 hover:bg-slate-50 border-slate-200")}>
        <Link href="/contact">Enquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
      </Button>
    </Card>
  );
}