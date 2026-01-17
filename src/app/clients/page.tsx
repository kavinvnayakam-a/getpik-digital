'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Star, Zap, Users2 } from 'lucide-react';

// Modern Tech Dummy Logos using Clearbit API
const dummyClients = [
  { id: 1, name: 'Heartfulness', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FHEARTFULNESS.webp?alt=media&token=472a8032-985c-4aa8-b326-467ae2db2cef' },
  { id: 2, name: 'ShreeVarma', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FSVW-Logo.webp?alt=media&token=caf45a1c-9c1c-4f93-809e-3e118d3b8db4' },
  { id: 3, name: 'Plush', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FPlush%20Logo.ai.webp?alt=media&token=4ec643dd-74cc-460a-acb3-5161faf4d921' },
  { id: 4, name: 'Inforce Solar', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FInforces%20Solar%20Logo.webp?alt=media&token=57525c1a-65e6-4f1f-b342-a80a87454614' },
  { id: 5, name: 'Ayush Conclave', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FArogya%202026%20logo.webp?alt=media&token=f018c39f-ddd8-4acd-aed4-d8d9e9834cfd' },
  { id: 6, name: 'Prim9Events', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FPrime%209%20Events.webp?alt=media&token=7b9fb3e7-b524-4eab-a40d-25412d2b0c9f' },
  { id: 7, name: 'SAA-Builders', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FSAA%20Logo.webp?alt=media&token=9d182f03-c34d-4043-8f32-74f86e29dec6' },
  { id: 8, name: 'Godeals', logo: 'https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Getpik%20Website%2FLogos%2FGodeals%20Logo.webp?alt=media&token=15277e6b-809e-42c3-87a5-c4405bc11e7c' },
];

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
            <span>Global Partners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/40">
              world's best teams.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We collaborate with ambitious companies to build high-performance 
            digital products and AI-powered marketing strategies.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
          {dummyClients.map((client) => (
            <div
              key={client.id}
              className="group relative flex items-center justify-center h-32 md:h-48 rounded-[2.5rem] border border-border bg-muted/20 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-muted/40"
            >
              <div className="relative w-20 h-10 md:w-32 md:h-16 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-foreground/10 group-hover:bg-primary group-hover:scale-[3] transition-all duration-500" />
            </div>
          ))}
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
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Ready to elevate your brand?</h2>
          <Button size="lg" className="rounded-full px-10 h-14 text-base font-semibold group bg-primary hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center shadow-2xl">
        {icon}
      </div>
      <div>
        <div className="text-4xl font-bold tracking-tighter mb-1">{value}</div>
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
