"use client";

import Link from "next/link";
import Image from "next/image";
import { QrCode, ArrowRight, ArrowUpRight, Sparkle, ChatCircle, Factory, Coffee, PaintBrush, BellRinging, ChartBar } from "@phosphor-icons/react";

export default function NeoModernLanding() {
  return (
    <div className="min-h-[100dvh] bg-slate-950 text-white flex flex-col font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* Massive Glowing Orbs for the Neo-Modern background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Navigation */}
      <nav className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-3 font-medium text-xl tracking-tight text-white">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-[0.8rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
             <QrCode size={22} weight="bold" className="text-purple-400" />
          </div>
          Omniverse
        </div>
        <div className="flex items-center gap-6">
          <Link href="/onboarding" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">Log In</Link>
          <Link href="/dashboard" className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col w-full relative z-10">
        
        <section className="px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-xs font-medium text-purple-300">
            <Sparkle size={14} weight="fill" className="text-purple-400"/> Omniverse OS 2.0 is live
          </div>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 max-w-5xl">
            Physical spaces.<br/>Digital intelligence.
          </h1>
          <p className="mt-8 text-lg md:text-xl font-medium text-slate-400 max-w-2xl leading-relaxed">
            Instantly convert your offline business into an AI-powered digital storefront. One dynamic QR code. Infinite scale.
          </p>
          
          <div className="mt-12 flex w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-white/20 transition-colors">
            <div className="flex-1 flex items-center px-4">
              <span className="text-slate-500 text-sm font-mono select-none">omniverse.qr/</span>
              <input type="text" placeholder="your-brand" className="w-full bg-transparent border-none focus:outline-none text-white font-mono text-sm" />
            </div>
            <Link href="/dashboard" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 shrink-0 shadow-lg">
              Launch <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
             
             <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">
                
                {/* Huge Feature Card */}
                <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-10 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-700"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                       <ChatCircle size={28} weight="duotone" className="text-purple-300" />
                    </div>
                    <h3 className="text-3xl font-medium tracking-tight text-white mb-4">Smart Customer Chat</h3>
                    <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                      Upload your PDFs and catalogs. The AI agent instantly understands your business and answers customer queries in real-time, just like your best salesperson.
                    </p>
                  </div>
                  <div className="relative z-10 mt-12 bg-black/40 border border-white/10 rounded-2xl p-6 font-mono text-sm text-slate-300 shadow-2xl">
                     <div className="flex flex-col gap-4">
                       <div className="flex gap-4"><span className="text-purple-400 shrink-0">User:</span> <span>"Do you have organic cotton in stock?"</span></div>
                       <div className="flex gap-4"><span className="text-blue-400 shrink-0">Agent:</span> <span>"Yes! We have 500 meters of premium organic cotton available at $12/m. Would you like me to reserve it?"</span></div>
                     </div>
                  </div>
                </div>

                {/* Small Feature 1 */}
                <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/10 transition-colors">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[50px] rounded-full"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-4">
                       <BellRinging size={24} weight="duotone" className="text-emerald-300" />
                     </div>
                     <h3 className="text-xl font-medium tracking-tight text-white mb-2">Instant Lead Alerts</h3>
                     <p className="text-sm text-slate-400 leading-relaxed">When intent is high, the AI captures the lead and pings your WhatsApp instantly.</p>
                  </div>
                </div>

                {/* Small Feature 2 */}
                <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/10 transition-colors">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-4">
                       <ChartBar size={24} weight="duotone" className="text-blue-300" />
                     </div>
                     <h3 className="text-xl font-medium tracking-tight text-white mb-2">Operator Console</h3>
                     <p className="text-sm text-slate-400 leading-relaxed">Track scans, read raw chat logs, and monitor your 5-star customer feedback in one place.</p>
                  </div>
                </div>

             </div>

             {/* Audience Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                
                <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-8 group cursor-pointer hover:border-white/20 transition-all">
                   <div className="flex justify-between items-start mb-12">
                     <Factory size={32} weight="duotone" className="text-slate-300 group-hover:text-white transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="text-lg font-medium text-white mb-2">Wholesale & Mfg</h4>
                   <p className="text-sm text-slate-500">Digitize 100-page catalogs into instant B2B chat interfaces.</p>
                </div>

                <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-8 group cursor-pointer hover:border-white/20 transition-all">
                   <div className="flex justify-between items-start mb-12">
                     <Coffee size={32} weight="duotone" className="text-slate-300 group-hover:text-white transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="text-lg font-medium text-white mb-2">Cafes & Restaurants</h4>
                   <p className="text-sm text-slate-500">Smart menus and frictionless 5-star feedback collection.</p>
                </div>

                <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-lg p-8 group cursor-pointer hover:border-white/20 transition-all">
                   <div className="flex justify-between items-start mb-12">
                     <PaintBrush size={32} weight="duotone" className="text-slate-300 group-hover:text-white transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="text-lg font-medium text-white mb-2">Creators & Freelancers</h4>
                   <p className="text-sm text-slate-500">An intelligent link-in-bio that negotiates rates for you.</p>
                </div>

             </div>
          </div>
        </section>

        {/* Massive Final CTA */}
        <section className="px-6 md:px-12 py-32 mt-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none"></div>
           <div className="relative z-10 flex flex-col items-center">
             <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 max-w-4xl text-white">
               The future of local business.
             </h2>
             <p className="text-xl text-slate-400 mb-12 max-w-2xl font-medium">Join the next generation of operators scaling their physical presence through digital intelligence.</p>
             <Link href="/dashboard" className="px-10 py-5 bg-white text-slate-950 text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3">
               Launch Console <ArrowRight size={18} weight="bold" />
             </Link>
           </div>
        </section>

      </main>

      <footer className="w-full px-8 py-10 border-t border-white/10 text-center relative z-10">
         <p className="text-sm text-slate-600 font-medium tracking-tight">Omniverse OS © 2024. Designed for the modern operator.</p>
      </footer>
    </div>
  );
}
