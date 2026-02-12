'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitEnquiryAction } from './actions';
import { useToast } from '@/hooks/use-toast';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@/components/ui/select';
import { Loader2, Send, MessageSquare, Globe, Building2, Phone, Radio, Heart, UtensilsCrossed } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-black italic uppercase rounded-2xl transition-all shadow-lg shadow-primary/20 group"
    >
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <span className="flex items-center gap-2">
          Deploy Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitEnquiryAction, initialState);
  const [selectedService, setSelectedService] = useState('');
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const isWeddingService = selectedService.startsWith('wedding-');
  const isPOSSService = selectedService.startsWith('poss-');

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'TRANSMISSION RECEIVED',
        description: 'Our strategists are reviewing your data. Stand by.',
      });
      formRef.current?.reset();
      setSelectedService('');
    } else if (state.message && state.message !== 'success' && !state.errors) {
       toast({
        title: 'SIGNAL ERROR',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    /* pt-28 on mobile ensures we are well below the header. lg:pt-36 for desktop. */
    <div className="min-h-screen text-foreground pt-28 lg:pt-36 pb-20 px-6 relative overflow-hidden">
      {/* Background Abstract Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contextual Info */}
          <div className="space-y-6 lg:space-y-10 animate-in fade-in slide-in-from-left-8 duration-700 lg:sticky lg:top-36">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <Radio className="w-3 h-3 animate-pulse" /> Uplink Active
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] pt-2">
              Contact <br /><span className="text-muted-foreground/80 not-italic">Protocol.</span>
            </h1>
            
            <p className="text-muted-foreground text-base lg:text-lg font-medium max-w-md leading-relaxed">
              Initiate your brand upgrade. Our systems process inquiries in <span className="text-primary italic font-bold">&lt; 4 hours.</span>
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] bg-card border border-border space-y-1">
                <Globe className="w-4 h-4 text-primary" />
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground leading-none">Availability</p>
                <p className="text-xs font-bold italic leading-none">Global / Remote</p>
              </div>
              <div className="p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] bg-card border border-border space-y-1">
                <MessageSquare className="w-4 h-4 text-primary" />
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground leading-none">Direct Line</p>
                <p className="text-xs font-bold italic leading-none">WhatsApp Priority</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <Card className="mt-6 lg:mt-0 bg-card/80 border-border/50 rounded-[2.5rem] lg:rounded-[3rem] backdrop-blur-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700">
            <CardContent className="p-6 md:p-12">
              <form ref={formRef} action={formAction} className="space-y-5 lg:space-y-6">
                
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Service of Interest</Label>
                  <Select name="service" required onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                      <SelectValue placeholder="Select a service or plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectGroup>
                        <SelectLabel>QR Code POSS (Restaurant Tech)</SelectLabel>
                        <SelectItem value="poss-scale">Scale Plan - ₹1,999/mo + GST</SelectItem>
                        <SelectItem value="poss-enterprise">Enterprise / Custom POSS</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Content Creation</SelectLabel>
                        <SelectItem value="hourly-plan">Hourly Plan (Reels) - ₹1,999</SelectItem>
                        <SelectItem value="half-day-plan">Half-Day Plan (Reels) - ₹4,999</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Digital & Social Media Marketing</SelectLabel>
                        <SelectItem value="growth-catalyst">Growth Catalyst - ₹49,999/mo</SelectItem>
                        <SelectItem value="scale-engine">Scale Engine - ₹99,999/mo</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Wedding Memories</SelectLabel>
                        <SelectItem value="wedding-basic">Wedding - Basic - ₹13,999</SelectItem>
                        <SelectItem value="wedding-silver">Wedding - Silver - ₹42,999</SelectItem>
                        <SelectItem value="wedding-gold">Wedding - Gold - ₹55,999</SelectItem>
                        <SelectItem value="wedding-platinum">Wedding - Platinum - ₹99,999</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Your Name</Label>
                    <Input id="name" name="name" placeholder="Name" required className="bg-background/50 border-border h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Digital Mail</Label>
                    <Input id="email" name="email" type="email" placeholder="Email" required className="bg-background/50 border-border h-12 rounded-xl" />
                  </div>
                </div>

                {isWeddingService && (
                  <div className="grid gap-4 sm:grid-cols-2 animate-in fade-in duration-300">
                    <Input name="brideName" placeholder="Bride's Name" required className="bg-background/50 border-border h-12 rounded-xl" />
                    <Input name="bridePhone" placeholder="Bride's Phone" required className="bg-background/50 border-border h-12 rounded-xl" />
                    <Input name="groomName" placeholder="Groom's Name" required className="bg-background/50 border-border h-12 rounded-xl" />
                    <Input name="groomPhone" placeholder="Groom's Phone" required className="bg-background/50 border-border h-12 rounded-xl" />
                  </div>
                )}

                {isPOSSService ? (
                  <div className="space-y-2 animate-in fade-in duration-300">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Restaurant / Outlet Name</Label>
                    <div className="relative">
                      <UtensilsCrossed className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="company" name="company" placeholder="E.g. GetPik Cloud Kitchen" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                    </div>
                  </div>
                ) : !isWeddingService && (
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Brand / Company</Label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="company" name="company" placeholder="Brand Name" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">WhatsApp Protocol</Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <Input id="whatsapp" name="whatsapp" placeholder="+91" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Mission Brief</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder={isPOSSService ? "Tell us about your outlet type..." : "Describe your goals or project requirements..."}
                    className="min-h-[100px] bg-background/50 border-border rounded-xl"
                    required
                  />
                </div>

                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}