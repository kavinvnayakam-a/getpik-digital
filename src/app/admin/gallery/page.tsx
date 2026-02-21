'use client';

import React, { useState, useEffect } from 'react';
import { useRequireUser, storage, dbInstance } from '@/firebase'; 
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2, Upload, Monitor, Smartphone, Trash2, ArrowLeft, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function AdminGalleryPage() {
  const { user, loading: userLoading } = useRequireUser();
  const [uploading, setUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [slot, setSlot] = useState(1);
  const [currentImages, setCurrentImages] = useState<any>({ desktopImages: [], mobileImages: [] });

  const fetchConfig = async () => {
    try {
      const docRef = doc(dbInstance, "photography_config", "homepage_stack");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCurrentImages(docSnap.data());
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    if (user) fetchConfig();
  }, [user]);

  // HELPER: Extract storage path from URL to delete it
  const deleteFileByUrl = async (url: string) => {
    if (!url || !url.includes('firebasestorage')) return;
    try {
      // Create a reference from the existing URL
      const fileRef = ref(storage, url);
      await deleteObject(fileRef);
      console.log("Old file deleted from storage");
    } catch (err) {
      console.warn("Storage deletion failed (file might not exist):", err);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    try {
      const field = view === 'desktop' ? 'desktopImages' : 'mobileImages';
      const docRef = doc(dbInstance, "photography_config", "homepage_stack");
      
      // 1. Check if there's an existing image in this slot and delete it from Storage
      const oldUrl = currentImages[field]?.[slot - 1];
      if (oldUrl) await deleteFileByUrl(oldUrl);

      // 2. Upload new file
      const path = `photography/${view}_slot_${slot}_${Date.now()}`;
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      // 3. Update Firestore
      const newImages = [...(currentImages[field] || Array(7).fill(""))];
      newImages[slot - 1] = url;

      await setDoc(docRef, { [field]: newImages }, { merge: true });
      setCurrentImages((prev: any) => ({ ...prev, [field]: newImages }));
      
      alert(`Slot ${slot} Updated`);
    } catch (err) {
      console.error(err);
      alert("Error during transmission.");
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (index: number) => {
    if (!confirm("Remove image from storage and website?")) return;

    setIsDeleting(index);
    try {
      const field = view === 'desktop' ? 'desktopImages' : 'mobileImages';
      const oldUrl = currentImages[field]?.[index];

      // 1. Delete from Storage
      if (oldUrl) await deleteFileByUrl(oldUrl);

      // 2. Update Firestore
      const docRef = doc(dbInstance, "photography_config", "homepage_stack");
      const newImages = [...(currentImages[field] || [])];
      newImages[index] = ""; 

      await setDoc(docRef, { [field]: newImages }, { merge: true });
      setCurrentImages((prev: any) => ({ ...prev, [field]: newImages }));
    } catch (err) {
      console.error(err);
      alert("Delete failed.");
    } finally {
      setIsDeleting(null);
    }
  };

  if (userLoading || !user) return <div className="flex justify-center items-center min-h-screen"><Loader2 className="animate-spin text-black" /></div>;

  return (
    <div className="min-h-screen bg-white text-black p-8 pt-32 font-sans selection:bg-zinc-100">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex justify-between items-end">
          <div>
            <Link href="/admin" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block hover:text-black">← Dashboard</Link>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8]">Gallery <br/><span className="text-zinc-200 not-italic">Engine.</span></h1>
          </div>
          <button onClick={fetchConfig} className="text-zinc-400 hover:text-black transition p-2"><RefreshCcw className="w-4 h-4"/></button>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4">
            <Card className="p-8 bg-zinc-50 border-none rounded-[3rem] sticky top-32">
              <div className="space-y-10">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-4">Device Target</label>
                  <div className="flex gap-2 p-1 bg-white rounded-2xl border border-zinc-100">
                    <button onClick={() => setView('desktop')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition ${view === 'desktop' ? 'bg-black text-white' : 'text-zinc-400'}`}>Desktop</button>
                    <button onClick={() => setView('mobile')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition ${view === 'mobile' ? 'bg-black text-white' : 'text-zinc-400'}`}>Mobile</button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-4">Select Slot</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4,5,6,7].map(n => (
                      <button key={n} onClick={() => setSlot(n)} className={`py-3 rounded-xl text-[10px] font-black border transition ${slot === n ? 'bg-black text-white border-black' : 'bg-white text-zinc-400 border-zinc-100'}`}>{n}</button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <input type="file" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" disabled={uploading} accept="image/*" />
                  <div className="w-full py-12 border-2 border-dashed border-zinc-200 rounded-[2.5rem] flex flex-col items-center justify-center bg-white group-hover:border-black transition">
                    {uploading ? <Loader2 className="animate-spin" /> : <><Upload className="w-6 h-6 mb-2 text-zinc-300"/><span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Replace Slot {slot}</span></>}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid Preview */}
          <div className="lg:col-span-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(7)].map((_, i) => {
              const url = currentImages[`${view}Images`]?.[i];
              return (
                <div key={i} className="group relative aspect-[3/4] bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-100 transition-all">
                   <div className="absolute top-6 left-6 z-20 bg-white/90 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Vol {i+1}</div>
                   {url ? (
                     <>
                        <img src={url} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt={`Slot ${i+1}`} />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <button onClick={() => handleDelete(i)} className="p-5 bg-white rounded-full text-red-500 shadow-xl hover:bg-red-500 hover:text-white transition active:scale-90">
                            {isDeleting === i ? <Loader2 className="animate-spin w-5 h-5"/> : <Trash2 className="w-5 h-5" />}
                          </button>
                        </div>
                     </>
                   ) : (
                     <div className="h-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-zinc-300">Empty Slot</div>
                   )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}