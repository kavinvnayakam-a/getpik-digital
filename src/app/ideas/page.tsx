'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateIdeasAction } from './actions';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lightbulb, Loader2, Sparkles, Send, Copy, Zap, PenTool } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const initialState = { message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-black italic uppercase rounded-2xl transition-all shadow-lg shadow-blue-600/20"
    >
      {pending ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-5 h-5" />}
      {pending ? "Synthesizing..." : "Ignite Concepts"}
    </Button>
  );
}

export default function ContentGeneratorPage() {
  const [state, formAction] = useFormState(generateIdeasAction, initialState);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <Zap className="w-3 h-3" /> Creative Intelligence
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Idea <span className="text-muted-foreground/80 not-italic">Engine.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg font-medium">
            Generate high-conversion content concepts using our deep-blue neural creative processor.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Settings Sidebar */}
          <div className="lg:col-span-4 sticky top-32">
            <Card className="bg-card/80 border-border/50 rounded-[2.5rem] p-2 backdrop-blur-2xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] italic flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-primary" /> Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Content Format</Label>
                    <Select name="contentType" defaultValue="blog posts">
                      <SelectTrigger className="bg-background/40 border-border h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="blog posts">Blog Posts</SelectItem>
                        <SelectItem value="website descriptions">Website Descriptions</SelectItem>
                        <SelectItem value="client outreach emails">Outreach Emails</SelectItem>
                        <SelectItem value="social media posts">Social Media Campaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Industry Keywords</Label>
                    <Textarea
                      name="industryKeywords"
                      placeholder="e.g., Ayurveda, SaaS, Web Design"
                      className="bg-background/40 border-border rounded-xl min-h-[100px] focus:border-primary/50 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target Audience</Label>
                    <Input
                      name="targetAudience"
                      placeholder="e.g., Founders, Small Biz"
                      className="bg-background/40 border-border h-12 rounded-xl"
                    />
                  </div>

                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Generated Concepts</h2>
            </div>

            <div className="min-h-[400px] space-y-4">
              {state.message !== 'success' && state.message !== '' && (
                <Alert variant="destructive" className="rounded-2xl">
                  <AlertDescription className="font-bold uppercase text-xs tracking-widest">{state.message}</AlertDescription>
                </Alert>
              )}

              {!state.data && (
                <div className="flex h-full min-h-[450px] flex-col items-center justify-center border-2 border-dashed border-border/50 rounded-[3rem] p-12 text-center bg-muted/20">
                  <div className="w-20 h-20 bg-background/50 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">
                    Configure parameters to reveal concepts
                  </p>
                </div>
              )}

              {state.data?.contentIdeas?.map((idea, index) => (
                <Card key={index} className="bg-card border-border/30 rounded-[2rem] hover:bg-accent transition-all group overflow-hidden">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center font-black italic text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                      {index + 1}
                    </div>
                    <div className="space-y-4 flex-grow">
                      <p className="text-lg font-bold leading-relaxed text-foreground/80">
                        {idea}
                      </p>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                         <button className="text-[10px] font-black uppercase text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                           <Copy className="w-3 h-3" /> Copy
                         </button>
                         <button className="text-[10px] font-black uppercase text-primary hover:text-primary/80 flex items-center gap-2 transition-colors">
                           <Send className="w-3 h-3" /> Deploy
                         </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Bottom Blue CTA */}
              {state.data && (
                <div className="mt-12 p-12 bg-primary rounded-[4rem] text-center space-y-6 shadow-2xl shadow-primary/30 animate-in fade-in zoom-in-95">
                  <h3 className="text-4xl font-black italic uppercase text-primary-foreground leading-none">Bring these to life.</h3>
                  <p className="text-primary-foreground/80 font-medium italic max-w-lg mx-auto">
                    Concepts are the foundation. Our team builds the skyscraper. Let's discuss your execution.
                  </p>
                  <Button asChild variant="secondary" className="rounded-full bg-background text-foreground hover:bg-accent font-black italic px-12 h-16 text-lg uppercase shadow-xl">
                    <a href="/contact">Book Strategy Session</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
