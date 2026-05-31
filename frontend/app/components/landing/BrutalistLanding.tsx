"use client";

import Link from "next/link";
import Image from "next/image";
import { QrCode, Storefront, ChartLineUp, ArrowRight, Brain, Factory, Coffee, PaintBrush, Quotes, ArrowUpRight } from "@phosphor-icons/react";

export default function BrutalistLanding() {
  return (
    <div className="min-h-[100dvh] bg-[#faf9f6] text-[#121212] flex flex-col font-sans selection:bg-emerald-200">
      
      {/* Navigation */}
      <nav className="w-full px-6 py-5 flex items-center justify-between border-b border-[#121212]">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-[#121212] flex items-center justify-center">
             <QrCode size={18} weight="bold" className="text-white" />
          </div>
          OMNIVERSE
        </div>
        <div className="flex items-center gap-6">
          <Link href="/onboarding" className="text-[10px] font-bold tracking-widest uppercase hover:text-emerald-600 transition-colors hidden sm:block">Log In</Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-[#121212] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] duration-200">
            Console
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col w-full">
        
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#121212]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start text-left">
               <span className="inline-block px-3 py-1 mb-6 border border-[#121212] text-[9px] font-bold tracking-widest uppercase text-[#121212] bg-emerald-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Public Beta 1.0
               </span>
               <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-[#121212]">
                 Physical presence.<br/>Digital scale.
               </h1>
               <p className="mt-8 text-lg font-serif text-gray-700 max-w-[40ch] leading-relaxed">
                 Instantly convert offline menus and wholesale catalogs into an AI-powered storefront. One dynamic QR code unlocks your business to the world.
               </p>
               
               <div className="mt-12 flex w-full max-w-lg bg-white border border-[#121212] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2">
                 <div className="flex-1 flex items-center px-4">
                   <span className="text-gray-400 text-sm font-mono select-none hidden sm:inline">omniverse.qr/</span>
                   <input type="text" placeholder="your-brand" className="w-full bg-transparent border-none focus:outline-none text-[#121212] font-mono text-sm" />
                 </div>
                 <Link href="/dashboard" className="px-6 py-3 bg-[#121212] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-400 hover:text-[#121212] transition-colors flex items-center gap-2 shrink-0">
                   Claim <ArrowRight size={16} />
                 </Link>
               </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] border-2 border-[#121212] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
               <Image src="/hero.png" alt="Hero Stand" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" priority />
            </div>
          </div>
        </section>

        {/* Audience Grid - Who is it for? */}
        <section className="px-6 md:px-12 py-24 bg-[#121212] text-white border-b border-[#121212]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-medium tracking-tighter mb-16">Built for operators, not influencers.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800">
              
              <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800 hover:bg-white/5 transition-colors group">
                <Factory size={32} className="text-emerald-400 mb-6 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-xl font-bold tracking-tight mb-4">Wholesale & Mfg</h3>
                <p className="text-sm font-serif text-gray-400 leading-relaxed mb-6">Convert 100-page PDF catalogs into an intelligent chat interface. Buyers ask for inventory; your AI captures the lead.</p>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">Explore B2B <ArrowUpRight size={12}/></span>
              </div>

              <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800 hover:bg-white/5 transition-colors group">
                <Coffee size={32} className="text-blue-400 mb-6 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-xl font-bold tracking-tight mb-4">Cafes & Restaurants</h3>
                <p className="text-sm font-serif text-gray-400 leading-relaxed mb-6">Replace static PDF menus. Your QR code routes dine-in customers to the menu, and delivery boxes to a 5-star feedback form.</p>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">Explore Hospitality <ArrowUpRight size={12}/></span>
              </div>

              <div className="p-10 hover:bg-white/5 transition-colors group">
                <PaintBrush size={32} className="text-yellow-400 mb-6 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-xl font-bold tracking-tight mb-4">Freelancers & Creators</h3>
                <p className="text-sm font-serif text-gray-400 leading-relaxed mb-6">A link-in-bio that actually converts. Let your AI agent negotiate rates and schedule callbacks while you focus on the craft.</p>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">Explore Solo <ArrowUpRight size={12}/></span>
              </div>

            </div>
          </div>
        </section>

        {/* Services / Feature Matrix */}
        <section className="px-6 md:px-12 py-24 border-b border-[#121212] bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div className="order-2 lg:order-1 relative w-full aspect-square border-2 border-[#121212] shadow-[-16px_16px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden p-6 hidden md:block">
                 {/* Abstract visual of features */}
                 <div className="w-full h-full border border-gray-200 bg-gray-50 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="h-4 w-1/3 bg-gray-200 animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-gray-200 animate-pulse delay-75"></div>
                    </div>
                    <div className="self-end bg-[#121212] text-white p-4 font-mono text-xs shadow-[4px_4px_0px_0px_#34d399] max-w-[80%]">
                      "I need 500m of organic cotton shipped to Mumbai."
                    </div>
                    <div className="self-start bg-white border border-[#121212] p-4 font-mono text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[80%] mt-4">
                      [Intent: Purchase]<br/>Firing Webhook ➔ WhatsApp Alert Sent.
                    </div>
                 </div>
               </div>

               <div className="order-1 lg:order-2 flex flex-col items-start text-left lg:pl-12">
                 <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1] text-[#121212] mb-12">
                   Zero friction.<br/>Total intelligence.
                 </h2>
                 
                 <div className="space-y-12">
                   <div className="flex gap-6 border-l-2 border-[#121212] pl-6">
                     <Brain size={28} className="text-[#121212] shrink-0 mt-1" />
                     <div>
                       <h3 className="text-lg font-bold text-[#121212] mb-2 uppercase tracking-widest">RAG Knowledge Base</h3>
                       <p className="text-base font-serif text-gray-600">Upload your raw PDFs, price lists, and FAQs. The AI agent instantly internalizes your brand and answers customer queries in real-time.</p>
                     </div>
                   </div>
                   
                   <div className="flex gap-6 border-l-2 border-[#121212] pl-6">
                     <Storefront size={28} className="text-[#121212] shrink-0 mt-1" />
                     <div>
                       <h3 className="text-lg font-bold text-[#121212] mb-2 uppercase tracking-widest">Smart Lead Capture</h3>
                       <p className="text-base font-serif text-gray-600">When the AI detects buying intent, it automatically triggers a Callback Modal, instantly pinging your WhatsApp or Slack channel.</p>
                     </div>
                   </div>

                   <div className="flex gap-6 border-l-2 border-[#121212] pl-6">
                     <ChartLineUp size={28} className="text-[#121212] shrink-0 mt-1" />
                     <div>
                       <h3 className="text-lg font-bold text-[#121212] mb-2 uppercase tracking-widest">Operator Console</h3>
                       <p className="text-base font-serif text-gray-600">A dedicated brutalist dashboard to track scans, review raw chat logs, and read 5-star customer feedback.</p>
                     </div>
                   </div>
                 </div>
               </div>

             </div>
          </div>
        </section>

        {/* Testimonials - Log Style */}
        <section className="px-6 md:px-12 py-24 bg-white border-b border-[#121212]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-medium tracking-tighter mb-4">System Outputs</h2>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Terminal Logs // User Feedback</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="border border-[#121212] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#faf9f6]">
                  <Quotes size={24} className="text-emerald-400 mb-4" />
                  <p className="font-serif text-lg leading-relaxed text-[#121212] mb-6">
                    "We used to lose B2B leads because our sales team couldn't reply to WhatsApps fast enough. Now the AI qualifies them instantly."
                  </p>
                  <div className="border-t border-[#121212] pt-4 font-mono text-[10px] tracking-widest uppercase">
                    — Rahul D., Textile Manufacturer
                  </div>
               </div>

               <div className="border border-[#121212] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#faf9f6]">
                  <Quotes size={24} className="text-blue-500 mb-4" />
                  <p className="font-serif text-lg leading-relaxed text-[#121212] mb-6">
                    "I dropped my Linktree. Having an AI agent that can actually tell clients my freelance rates is the ultimate flex."
                  </p>
                  <div className="border-t border-[#121212] pt-4 font-mono text-[10px] tracking-widest uppercase">
                    — Sarah K., Brand Designer
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Massive Final CTA */}
        <section className="px-6 md:px-12 py-32 bg-emerald-400 text-[#121212] flex flex-col items-center justify-center text-center">
           <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 max-w-4xl">
             Deploy your digital twin today.
           </h2>
           <Link href="/dashboard" className="px-10 py-5 bg-[#121212] text-white text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#121212] transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
             Launch Console <ArrowRight size={20} />
           </Link>
        </section>

      </main>

      <footer className="w-full px-8 py-8 bg-[#121212] text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
         <p>Omniverse QR MVP © 2024. Built for AI/ML local business integration.</p>
      </footer>
    </div>
  );
}
