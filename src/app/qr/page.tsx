'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  QrCode, 
  Gamepad2, 
  Trophy, 
  Timer, 
  ChefHat, 
  Zap, 
  Utensils, 
  CheckCircle2,
  ArrowRight,
  Coins,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function GetPikCustomerPlayPage() {
  const [orderStatus, setOrderStatus] = useState('scanning'); // scanning -> live
  const [score, setScore] = useState(0);

  // Simulate the GetPik Connection Protocol
  useEffect(() => {
    const timer = setTimeout(() => setOrderStatus('live'), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden relative font-sans">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      {/* SPACING FIX: 
          pt-28 (mobile) and lg:pt-36 (desktop) ensure the content starts 
          well below any fixed site header.
      */}
      <main className="container mx-auto max-w-md px-6 pt-28 lg:pt-36 pb-28 relative z-10">
        
        <AnimatePresence mode="wait">
          {orderStatus === 'scanning' ? (
            /* --- SCANNING PHASE (Ref: Marketplace Page 11) --- */
            <motion.div 
              key="scanner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-10 space-y-12"
            >
              <div className="relative">
                {/* Corner Frames */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl" />
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-blue-600 rounded-tr-2xl" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-blue-600 rounded-bl-2xl" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-blue-600 rounded-br-2xl" />
                
                {/* Scanning Laser */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.8)] z-10"
                />
                
                <div className="p-12 bg-white rounded-[3rem] shadow-2xl border border-blue-50">
                  <QrCode className="w-40 h-40 text-slate-200" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                  <Zap className="w-3 h-3 animate-pulse" /> GetPik Uplink
                </div>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
                  Syncing <br/> Table 05
                </h2>
              </div>
            </motion.div>
          ) : (
            /* --- LIVE DASHBOARD & GAMING (Ref: Marketplace Page 3 & 14) --- */
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Order Status Card */}
              <Card className="p-8 rounded-[3rem] border-blue-100 bg-white shadow-2xl shadow-blue-100 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <ChefHat className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em] mb-1">Kitchen Status</p>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Preparing Order</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic font-mono">EST: 08:42</span>
                    <span className="text-blue-600 font-black text-sm italic tracking-tighter">75% Done</span>
                  </div>
                  <div className="h-5 bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      className="h-full bg-blue-600 rounded-full shadow-lg"
                    />
                  </div>
                </div>
              </Card>

              {/* Game Integration Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Wait-Time Play</h2>
                  <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                    <Coins className="w-3 h-3 text-yellow-600 animate-pulse" />
                    <span className="text-[9px] font-black uppercase text-yellow-700">{score} PTS</span>
                  </div>
                </div>

                <Card 
                  onClick={() => setScore(s => s + 100)}
                  className="bg-blue-600 border-none p-8 rounded-[3.5rem] relative overflow-hidden cursor-pointer group active:scale-95 transition-all shadow-xl shadow-blue-200"
                >
                  <Gamepad2 className="absolute -right-8 -bottom-8 w-44 h-44 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
                  
                  <div className="relative z-10 space-y-5">
                    <h4 className="text-4xl font-black italic uppercase leading-[0.85] text-white">Foodie <br/>Runner</h4>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-80 italic leading-relaxed max-w-[180px]">
                      Earn 500+ points for a free starter!
                    </p>
                    <Button className="bg-white text-blue-600 hover:bg-slate-50 rounded-2xl font-black italic uppercase px-12 h-14 text-sm shadow-lg shadow-blue-700/20">
                      Start Game
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Action Grid (Ref: Wireless Calling Device) */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center gap-4 hover:border-blue-600 transition-all group">
                  <div className="bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <Utensils className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Quick Add</span>
                </button>
                <button className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center gap-4 hover:border-blue-600 transition-all group">
                  <div className="bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <Zap className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Call Waiter</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Floating Bottom Order Summary --- */}
        <motion.div 
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          className="fixed bottom-8 left-6 right-6 z-50"
        >
          <div className="bg-white/90 border border-blue-100 backdrop-blur-2xl p-5 rounded-[2.5rem] flex justify-between items-center shadow-2xl shadow-blue-200">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Live Order</p>
                <p className="text-sm font-black italic text-slate-900 uppercase tracking-tighter">Table 5 • 3 Items</p>
              </div>
            </div>
            <Button className="bg-slate-900 hover:bg-slate-800 rounded-2xl h-14 px-8 font-black italic uppercase text-xs tracking-widest text-white shadow-xl">
              Pay Bill
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}