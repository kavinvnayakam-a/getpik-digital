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
      className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black italic uppercase rounded-2xl transition-all shadow-lg shadow-blue-600/20"
    >
      {pending ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-5 h-5" />}
      {pending ? "Synthesizing..." : "Ignite Concepts"}
    </Button>
  );
}

export default function ContentGeneratorPage() {
  const [state, formAction] = useFormState(generateIdeasAction, initialState);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
            <Zap className="w-3 h-3" /> Creative Intelligence
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Idea <span className="text-gray-700 not-italic">Engine.</span>
          </h1>
          <p className="text-gray-500 max-w-xl text-lg font-medium">
            Generate high-conversion content concepts using our deep-blue neural creative processor.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Settings Sidebar */}
          <div className="lg:col-span-4 sticky top-32">
            <Card className="bg-white/5 border-white/10 rounded-[2.5rem] p-2 backdrop-blur-2xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] italic flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-blue-500" /> Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Content Format</Label>
                    <Select name="contentType" defaultValue="blog posts">
                      <SelectTrigger className="bg-black/40 border-white/10 h-12 rounded-xl text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111] border-white/10 text-white">
                        <SelectItem value="blog posts">Blog Posts</SelectItem>
                        <SelectItem value="website descriptions">Website Descriptions</SelectItem>
                        <SelectItem value="client outreach emails">Outreach Emails</SelectItem>
                        <SelectItem value="social media posts">Social Media Campaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Industry Keywords</Label>
                    <Textarea
                      name="industryKeywords"
                      placeholder="e.g., Ayurveda, SaaS, Web Design"
                      className="bg-black/40 border-white/10 rounded-xl min-h-[100px] text-white focus:border-blue-600/50 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Target Audience</Label>
                    <Input
                      name="targetAudience"
                      placeholder="e.g., Founders, Small Biz"
                      className="bg-black/40 border-white/10 h-12 rounded-xl text-white"
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
                <Alert className="bg-blue-600/10 border-blue-600/20 text-blue-400 rounded-2xl">
                  <AlertDescription className="font-bold uppercase text-xs tracking-widest">{state.message}</AlertDescription>
                </Alert>
              )}

              {!state.data && (
                <div className="flex h-full min-h-[450px] flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[3rem] p-12 text-center bg-white/[0.02]">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-10 w-10 text-gray-600" />
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                    Configure parameters to reveal concepts
                  </p>
                </div>
              )}

              {state.data?.contentIdeas?.map((idea, index) => (
                <Card key={index} className="bg-white/5 border-white/5 rounded-[2rem] hover:bg-white/10 transition-all group overflow-hidden">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center font-black italic text-blue-500 text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                      {index + 1}
                    </div>
                    <div className="space-y-4 flex-grow">
                      <p className="text-lg font-bold leading-relaxed text-gray-200">
                        {idea}
                      </p>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                         <button className="text-[10px] font-black uppercase text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
                           <Copy className="w-3 h-3" /> Copy
                         </button>
                         <button className="text-[10px] font-black uppercase text-blue-500 hover:text-blue-400 flex items-center gap-2 transition-colors">
                           <Send className="w-3 h-3" /> Deploy
                         </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Bottom Blue CTA */}
              {state.data && (
                <div className="mt-12 p-12 bg-blue-600 rounded-[4rem] text-center space-y-6 shadow-2xl shadow-blue-600/30 animate-in fade-in zoom-in-95">
                  <h3 className="text-4xl font-black italic uppercase text-white leading-none">Bring these to life.</h3>
                  <p className="text-white/80 font-medium italic max-w-lg mx-auto">
                    Concepts are the foundation. Our team builds the skyscraper. Let's discuss your execution.
                  </p>
                  <Button asChild className="rounded-full bg-white text-blue-600 hover:bg-gray-100 font-black italic px-12 h-16 text-lg uppercase shadow-xl">
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