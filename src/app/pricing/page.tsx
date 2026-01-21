'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight, Camera, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    <span>Transparent Pricing</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                    Plans Built for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/40">
                    Rapid Growth.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Affordable plans for every need. Find the perfect fit for your project and launch your vision without breaking the bank.
                </p>
            </div>

            {/* --- Content Creation Section --- */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Camera className="w-3 h-3" />
                Content Creation
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                Same-Day Visuals
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <PricingCard
                planName="Hourly Plan"
                tagline="Quickest Content"
                description="Perfect for anyone who wants a single, fast, high-quality reel."
                price="1,999"
                features={[
                    '1 Hour Shoot',
                    '1 Edited Reel Delivered',
                    'Shot on Latest iPhone',
                    'Fast Delivery (10 mins post shoot)',
                    'Trained and Certified Reel Maker',
                    'GetPik Branding Included',
                ]}
                isPopular={false}
                />
                <PricingCard
                planName="Half-Day Plan"
                tagline="Event Essential"
                description="Ideal for events and creators who need more time and more content."
                price="4,999"
                features={[
                    'Up to 3 Hours Shoot',
                    '2 Edited reels',
                    'Shot on Latest iPhone',
                    'Fast Delivery (10 mins post shoot)',
                    'Trained and Certified Reel Maker',
                    'GetPik Branding Included',
                ]}
                isPopular={true}
                />
            </div>
            
            {/* --- Digital Marketing Section --- */}
            <div className="text-center max-w-3xl mx-auto mb-16 mt-32">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <BarChart3 className="w-3 h-3" />
                Digital & Social Media Marketing
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                Market Domination
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <PricingCard
                    planName="Growth Catalyst"
                    tagline="Monthly Marketing"
                    description="Consistent social media presence and digital marketing to grow your audience."
                    price="49,999"
                    pricePeriod="/month"
                    features={[
                        'Digital & Social Media Marketing',
                        '15 Carousel Posts',
                        '1 Free Reel Included',
                        '7-Day Free Trial',
                        'Ad Budget Excluded',
                    ]}
                    isPopular={false}
                />
                <PricingCard
                    planName="Scale Engine"
                    tagline="Full-Stack Dominance"
                    description="An all-in-one solution for aggressive growth, analytics, and market leadership."
                    price="99,999"
                    pricePeriod="/month"
                    features={[
                        'Digital & Social Media Marketing',
                        '20 Carousel Posts + 1 Free Reel',
                        'In-depth Social Media Analysis',
                        'Influencer Initiation (Add-on)',
                        'Free Static Website/Enhancement',
                        '7-Day Free Trial (Ad Budget Excluded)',
                    ]}
                    isPopular={true}
                />
            </div>

            <div className="mt-24 max-w-4xl mx-auto">
                <div className="p-8 md:p-12 rounded-[3rem] bg-foreground text-background border border-primary/30 shadow-2xl shadow-primary/10 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                <div className="text-center mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Enterprise & Brand Protocol</p>
                    <h3 className="text-5xl font-black italic uppercase text-background mb-4">Strategic Content</h3>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Scalable content solutions for enterprises. We deploy dedicated teams and cinematic equipment to produce high-fidelity visual assets for your campaigns, events, and brand showcases.
                    </p>
                </div>

                <div className="my-12 text-center">
                    <h4 className="text-4xl md:text-6xl font-bold text-primary">Customised Pricing <span className="text-lg md:text-2xl text-muted align-middle">+GST</span></h4>
                </div>

                <div>
                    <h5 className="font-bold text-center text-background mb-8 uppercase tracking-widest">Core Inclusions:</h5>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-muted">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>Bespoke Content Strategy</span></li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>Multi-Format Asset Delivery</span></li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>On-Demand Creative Teams</span></li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>Priority Scheduling & Logistics</span></li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>Expedited Post-Production</span></li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /><span>Full Commercial Licensing</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="default" className="rounded-full px-12 h-16 text-lg font-bold group bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                        Book Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// Re-usable PricingCard component
function PricingCard({
    planName,
    tagline,
    description,
    price,
    pricePeriod, // Added prop
    features,
    isPopular,
  }: {
    planName: string;
    tagline: string;
    description: string;
    price: string;
    pricePeriod?: string; // Optional prop
    features: string[];
    isPopular: boolean;
  }) {
    return (
      <Card
        className={cn(
          "relative flex flex-col p-8 rounded-[2.5rem] border bg-card/80 backdrop-blur-sm transition-all duration-300",
          isPopular ? "border-primary shadow-2xl shadow-primary/10" : "border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
        )}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
            Most Popular
          </div>
        )}
        <div className="flex-1">
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">{tagline}</p>
          <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3">{planName}</h3>
          <p className="text-sm text-muted-foreground font-medium italic mb-8">{description}</p>
          
          <div className="mb-8">
            <span className="text-5xl font-black text-foreground">₹{price}</span>
            {pricePeriod && <span className="text-muted-foreground font-bold">{pricePeriod}</span>}
            <span className="text-muted-foreground font-bold"> + GST</span>
          </div>
  
          <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] mb-4">What's Included</p>
          <ul className="space-y-3 text-sm font-medium text-foreground/80 italic">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mt-10">
          <Button asChild size="lg" className="w-full rounded-2xl h-14 font-black italic uppercase text-base">
            <Link href="/contact">
              Book Now <ArrowRight className="ml-2"/>
            </Link>
          </Button>
        </div>
      </Card>
    );
}
