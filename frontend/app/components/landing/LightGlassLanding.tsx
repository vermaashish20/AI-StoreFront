"use client";

import Link from "next/link";
import Image from "next/image";
import { QrCode, ArrowRight, ArrowUpRight, Sparkle, ChatCircle, Factory, Coffee, PaintBrush, BellRinging, ChartBar } from "@phosphor-icons/react";

export default function LightGlassLanding() {
  return (
    <div className="min-h-[100dvh] bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-200 overflow-x-hidden relative">
      
      {/* Soft Watercolor Mesh Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-300/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#ffd8b8]/50 rounded-full blur-[140px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] bg-emerald-300/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* Navigation */}
      <nav className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-slate-900">
          <div className="w-10 h-10 bg-white/60 backdrop-blur-xl border border-white/80 flex items-center justify-center rounded-[0.8rem] shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]">
             <QrCode size={22} weight="bold" className="text-slate-900" />
          </div>
          Omniverse
        </div>
        <div className="flex items-center gap-6">
          <Link href="/onboarding" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Log In</Link>
          <Link href="/dashboard" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-transform hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col w-full relative z-10">
        
        <section className="px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/60 border border-white backdrop-blur-xl rounded-full text-xs font-semibold text-slate-600 shadow-sm">
            <Sparkle size={14} weight="fill" className="text-blue-500"/> Omniverse OS 2.0 is live
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[1.05] text-slate-900 max-w-5xl">
            Physical spaces.<br/>Digital intelligence.
          </h1>
          <p className="mt-8 text-lg md:text-xl font-medium text-slate-600 max-w-2xl leading-relaxed">
            Instantly convert your offline business into an AI-powered digital storefront. One dynamic QR code. Infinite scale.
          </p>
          
          <div className="mt-12 flex w-full max-w-md bg-white/70 backdrop-blur-2xl border border-white rounded-full p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.12)] transition-shadow">
            <div className="flex-1 flex items-center px-4">
              <span className="text-slate-400 text-sm font-mono select-none">omniverse.qr/</span>
              <input type="text" placeholder="your-brand" className="w-full bg-transparent border-none focus:outline-none text-slate-900 font-mono text-sm placeholder:text-slate-300" />
            </div>
            <Link href="/dashboard" className="px-8 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2 shrink-0 shadow-md">
              Launch <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
             
             <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">
                
                {/* Huge Feature Card */}
                <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-400/10 blur-[80px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/80 border border-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                       <ChatCircle size={28} weight="duotone" className="text-blue-500" />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Smart Customer Chat</h3>
                    <p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                      Upload your PDFs and catalogs. The AI agent instantly understands your business and answers customer queries in real-time, just like your best salesperson.
                    </p>
                  </div>
                  <div className="relative z-10 mt-12 bg-white/90 border border-slate-100 rounded-2xl p-6 font-mono text-sm text-slate-600 shadow-xl">
                     <div className="flex gap-4 mb-4"><span className="text-slate-900 font-bold shrink-0">User:</span> <span>"Do you have organic cotton in stock?"</span></div>
                     <div className="flex gap-4"><span className="text-blue-600 font-bold shrink-0">Agent:</span> <span>"Yes! We have 500 meters of premium organic cotton available at $12/m. Would you like me to reserve it?"</span></div>
                  </div>
                </div>

                {/* Small Feature 1 */}
                <div className="rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/80 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/10 blur-[50px] rounded-full"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/80 border border-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                       <BellRinging size={24} weight="duotone" className="text-emerald-500" />
                     </div>
                     <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Instant Lead Alerts</h3>
                     <p className="text-sm text-slate-600 leading-relaxed font-medium">When intent is high, the AI captures the lead and pings your WhatsApp instantly.</p>
                  </div>
                </div>

                {/* Small Feature 2 */}
                <div className="rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/80 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400/10 blur-[50px] rounded-full"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/80 border border-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                       <ChartBar size={24} weight="duotone" className="text-orange-500" />
                     </div>
                     <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Operator Console</h3>
                     <p className="text-sm text-slate-600 leading-relaxed font-medium">Track scans, read raw chat logs, and monitor your 5-star customer feedback in one place.</p>
                  </div>
                </div>

             </div>

             {/* Audience Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                
                <div className="rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-8 group cursor-pointer hover:bg-white/90 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                   <div className="flex justify-between items-start mb-12">
                     <Factory size={32} weight="duotone" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                   </div>
                   <h4 className="text-lg font-semibold text-slate-900 mb-2">Wholesale & Mfg</h4>
                   <p className="text-sm text-slate-600 font-medium">Digitize 100-page catalogs into instant B2B chat interfaces.</p>
                </div>

                <div className="rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-8 group cursor-pointer hover:bg-white/90 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                   <div className="flex justify-between items-start mb-12">
                     <Coffee size={32} weight="duotone" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                   </div>
                   <h4 className="text-lg font-semibold text-slate-900 mb-2">Cafes & Restaurants</h4>
                   <p className="text-sm text-slate-600 font-medium">Smart menus and frictionless 5-star feedback collection.</p>
                </div>

                <div className="rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-8 group cursor-pointer hover:bg-white/90 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                   <div className="flex justify-between items-start mb-12">
                     <PaintBrush size={32} weight="duotone" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                     <ArrowUpRight size={20} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                   </div>
                   <h4 className="text-lg font-semibold text-slate-900 mb-2">Creators & Freelancers</h4>
                   <p className="text-sm text-slate-600 font-medium">An intelligent link-in-bio that negotiates rates for you.</p>
                </div>

             </div>
          </div>
        </section>

        {/* Massive Final CTA */}
        <section className="px-6 md:px-12 py-32 mt-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="relative z-10 flex flex-col items-center">
             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 max-w-4xl text-slate-900">
               The future of local business.
             </h2>
             <p className="text-xl text-slate-600 mb-12 max-w-2xl font-medium">Join the next generation of operators scaling their physical presence through digital intelligence.</p>
             <Link href="/dashboard" className="px-12 py-5 bg-slate-900 text-white text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center gap-3">
               Launch Console <ArrowRight size={18} weight="bold" />
             </Link>
           </div>
        </section>

      </main>

      <footer className="w-full px-8 py-10 border-t border-slate-200/50 text-center relative z-10 bg-white/40 backdrop-blur-lg">
         <p className="text-sm text-slate-500 font-medium tracking-tight">Omniverse OS © 2024. Designed for the modern operator.</p>
      </footer>
    </div>
  );
}
