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
import { Loader2, Send, MessageSquare, Globe, Building2, Phone, Radio, Heart, User } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
};

/**
 * Isolated Submit Button component to utilize useFormStatus hook
 */
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

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'TRANSMISSION RECEIVED',
        description: 'Our strategists are reviewing your data. Stand by.',
      });
      // Reset form on successful Firestore write
      formRef.current?.reset();
      setSelectedService('');
    } else if (state.message && state.message !== 'success' && !state.errors) {
       // Only show error toast for global/server errors, not validation errors
       toast({
        title: 'SIGNAL ERROR',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <div className="min-h-screen text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Abstract Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contextual Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <Radio className="w-3 h-3 animate-pulse" /> Uplink Active
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
              Contact <br /><span className="text-muted-foreground/80 not-italic">Protocol.</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium max-w-md leading-relaxed">
              Initiate your brand upgrade. Our systems usually process inquiries in <span className="text-primary italic font-bold">&lt; 4 hours.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-[2rem] bg-card border border-border space-y-2">
                <Globe className="w-5 h-5 text-primary" />
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Availability</p>
                <p className="text-sm font-bold italic">Global / Remote</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-card border border-border space-y-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Direct Line</p>
                <p className="text-sm font-bold italic">WhatsApp Priority</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <Card className="bg-card/80 border-border/50 rounded-[3rem] backdrop-blur-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700">
            <CardContent className="p-8 md:p-12">
              <form ref={formRef} action={formAction} className="space-y-5">
                
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Service of Interest</Label>
                  <Select name="service" required onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                      <SelectValue placeholder="Select a service or plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
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
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Other</SelectLabel>
                        <SelectItem value="enterprise-custom">Enterprise / Custom Project</SelectItem>
                        <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {state.errors?.service && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.service[0]}</p>}
                </div>

                {/* Identity & Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Your Name</Label>
                    <Input id="name" name="name" placeholder="Name" required className="bg-background/50 border-border h-12 rounded-xl" />
                    {state.errors?.name && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Digital Mail</Label>
                    <Input id="email" name="email" type="email" placeholder="Email" required className="bg-background/50 border-border h-12 rounded-xl" />
                    {state.errors?.email && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.email[0]}</p>}
                  </div>
                </div>

                {isWeddingService ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                       <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Bride's Name</Label>
                        <Input id="brideName" name="brideName" placeholder="Bride's full name" required className="bg-background/50 border-border h-12 rounded-xl" />
                        {state.errors?.brideName && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.brideName[0]}</p>}
                      </div>
                       <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Bride's Phone</Label>
                        <Input id="bridePhone" name="bridePhone" placeholder="Contact number" required className="bg-background/50 border-border h-12 rounded-xl" />
                        {state.errors?.bridePhone && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.bridePhone[0]}</p>}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                       <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Groom's Name</Label>
                        <Input id="groomName" name="groomName" placeholder="Groom's full name" required className="bg-background/50 border-border h-12 rounded-xl" />
                        {state.errors?.groomName && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.groomName[0]}</p>}
                      </div>
                       <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Groom's Phone</Label>
                        <Input id="groomPhone" name="groomPhone" placeholder="Contact number" required className="bg-background/50 border-border h-12 rounded-xl" />
                        {state.errors?.groomPhone && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.groomPhone[0]}</p>}
                      </div>
                    </div>
                     <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Wedding Venue</Label>
                      <div className="relative">
                        <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="weddingVenue" name="weddingVenue" placeholder="City, Venue Name" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                      </div>
                      {state.errors?.weddingVenue && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.weddingVenue[0]}</p>}
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Brand / Company</Label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="company" name="company" placeholder="Brand Name" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                    </div>
                    {state.errors?.company && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.company[0]}</p>}
                  </div>
                )}
                
                {/* WhatsApp is always visible */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">WhatsApp Protocol</Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <Input id="whatsapp" name="whatsapp" placeholder="+91" required className="bg-background/50 border-border h-12 pl-11 rounded-xl" />
                  </div>
                  {state.errors?.whatsapp && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.whatsapp[0]}</p>}
                </div>


                {/* Mission Brief - Now allows 1 character minimum */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Mission Brief</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Describe your goals, event dates, or project requirements..."
                    className="min-h-[100px] bg-background/50 border-border rounded-xl"
                    required
                  />
                  {state.errors?.projectDetails && <p className="text-red-500 text-[10px] italic mt-1 font-bold">{state.errors.projectDetails[0]}</p>}
                </div>

                {/* Global Error Message Display */}
                {state.message && state.message !== 'success' && !state.errors && (
                  <p className="text-red-500 text-xs font-bold text-center uppercase tracking-tighter">
                    {state.message}
                  </p>
                )}

                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
