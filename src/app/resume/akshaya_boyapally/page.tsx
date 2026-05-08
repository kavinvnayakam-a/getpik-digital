"use client";

import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, Star, Sparkles, Users, BookOpen } from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: 'Bridal' | 'Editorial' | 'Masterclass';
  imageUrl: string;
}

const PortfolioContent: React.FC = () => {
  // --- Mock Data ---
  const projects: Project[] = [
    { id: 1, title: "Classic Bridal Glow", category: 'Bridal', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2FIMG-20220926-WA0001.webp?alt=media&token=8ae61a92-b56d-4560-9984-5700e167ca62" },
    { id: 2, title: "Vogue Editorial", category: 'Editorial', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2FIMG_20210923_123327_490.webp?alt=media&token=b31bea63-58eb-4870-af93-8af3cd72fa5b" },
    { id: 3, title: "Advanced Blending Class", category: 'Masterclass', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2F4-2.webp?alt=media&token=cdff4054-96c9-42d7-9cb0-6fa346e741de" },
    { id: 4, title: "Golden Hour Glam", category: 'Bridal', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2F0F5A0252%20copy.webp?alt=media&token=7955a798-cdd5-47e7-b32e-2f2d9a1bd212" },
    { id: 5, title: "Runway Bold", category: 'Editorial', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2F0F5A0364%20copy.webp?alt=media&token=1884f4be-8830-46a7-a28c-5a3e5cea5c10" },
    { id: 6, title: "1-on-1 Pro Training", category: 'Masterclass', imageUrl: "https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2Fmodals%2FViolet.webp?alt=media&token=2796727b-b6ec-41e3-a83d-32240095da50" },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-800 font-sans">
      
      {/* --- Hero / Intro Section --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Star size={14} fill="currentColor" /> Certified Trainer & Artist
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif mb-6 italic">Mastering the Art of <br/> Modern Beauty.</h2>
          <p className="text-lg text-stone-600 font-light tracking-wide max-w-2xl mx-auto">
            Providing luxury makeup services for elite clientele and professional 
            training for the next generation of world-class artists.
          </p>
        </div>
      </section>

      {/* --- Descriptive / About Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-stone-200">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/getpik-digital.firebasestorage.app/o/Akshaya%2F0F5A9420.webp?alt=media&token=13eee570-db10-4c11-b274-00913413199e" 
              alt="Artist in action" 
              className="rounded-2xl shadow-2xl grayscale-[30%] hover:grayscale-0 transition duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-stone-100 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold">10+</div>
                <div>
                  <p className="text-sm font-bold uppercase">Years of Experience</p>
                  <p className="text-xs text-stone-400 font-medium tracking-tighter">INDUSTRY EXCELLENCE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-serif mb-6">Beyond the Brush</h3>
            <p className="text-stone-600 leading-relaxed mb-8">
              My approach to makeup is rooted in the belief that every face tells a story. 
              As an artist, I focus on skin-first techniques that radiate under 4K cameras and 
              natural light alike. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <Sparkles className="text-rose-400 mb-4" size={28} />
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Bridal & Editorial</h4>
                <p className="text-sm text-stone-500">Specializing in timeless bridal transformations and high-fashion editorial looks.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <Users className="text-rose-400 mb-4" size={28} />
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Global Mentorship</h4>
                <p className="text-sm text-stone-500">Empowering artists through structured masterclasses and 1-on-1 career coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h3 className="text-4xl font-serif mb-4 uppercase tracking-tighter">The Visual Portfolio</h3>
          <div className="w-20 h-1 bg-rose-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden aspect-[4/5] rounded-xl cursor-crosshair">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] mb-2 text-rose-300">{project.category}</span>
                <h4 className="text-2xl font-serif italic">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Trainer Expertise Section --- */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Subtle Decorative Circle */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-5xl font-serif mb-6 italic">Educational Leadership</h3>
              <p className="text-stone-400 text-lg">
                As a seasoned educator, I bridge the gap between creative artistry and technical precision. 
                I am equipped to lead professional training programs, focusing on standardized techniques 
                and student career development.
              </p>
            </div>
            <div className="bg-stone-800 border border-stone-700 text-white p-6 rounded-lg text-center hidden md:block">
              <p className="text-3xl font-serif text-rose-400">1000+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80">Instruction Hours</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Teaching Module 1 */}
            <div className="group border-l border-stone-700 hover:border-rose-500 pl-8 py-4 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-stone-800 p-3 rounded-lg group-hover:bg-rose-500/20 transition">
                  <BookOpen className="text-rose-400" />
                </div>
                <h4 className="text-2xl font-serif">Core Technical Training</h4>
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Proficient in delivering structured curriculum covering the foundational and advanced 
                pillars of professional makeup artistry.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Advanced Color Theory & Skin Anatomy</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> HD & Airbrush Application Techniques</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Lighting for Photography & Videography</li>
              </ul>
            </div>

            {/* Teaching Module 2 */}
            <div className="group border-l border-stone-700 hover:border-rose-500 pl-8 py-4 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-stone-800 p-3 rounded-lg group-hover:bg-rose-500/20 transition">
                  <GraduationCap className="text-rose-400" />
                </div>
                <h4 className="text-2xl font-serif">Professional Mentorship</h4>
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Expertise in preparing students for the commercial industry, ensuring they are 
                kit-ready and business-savvy upon completion.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Client Communication & Soft Skills</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Social Media & Digital Branding</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Sanitation & Pro-Kit Management</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl">
             <h5 className="text-rose-400 uppercase tracking-widest text-xs font-bold mb-4">Available for:</h5>
             <div className="flex flex-wrap gap-6 text-stone-300 italic font-serif text-lg">
                <span>• Guest Lecturing</span>
                <span>• Corporate Artistry Training</span>
                <span>• Curriculum Design</span>
                <span>• Masterclass Demonstrations</span>
             </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default PortfolioContent;