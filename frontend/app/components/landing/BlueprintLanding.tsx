"use client";

import { useState } from "react";
import Link from "next/link";
import { QrCode, ArrowRight, FileText, ChatCircle, BellRinging, Factory, PaintBrush, CheckCircle, Storefront, Package, Buildings, GraduationCap, Star } from "@phosphor-icons/react";

export default function BlueprintLanding() {
  const [businessName, setBusinessName] = useState("");
  const displayName = businessName || "Your Brand Name";

  return (
    <div className="w-full flex-1 bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-200 relative">
      
      {/* Light Glassmorphic Abstract Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-300/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#ffd8b8]/50 rounded-full blur-[140px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] bg-emerald-300/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* 1. Navigation Bar (The Trust Anchor) */}
      <nav className="w-full px-6 md:px-12 py-6 flex items-center justify-between relative z-50">
        <div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-slate-900">
          <div className="w-10 h-10 bg-white/60 backdrop-blur-xl border border-white/80 flex items-center justify-center rounded-[0.8rem] shadow-sm">
             <QrCode size={22} weight="bold" className="text-slate-900" />
          </div>
          Omniverse QR
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <Link href="#features" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</Link>
          <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/dashboard" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-transform hover:scale-105 shadow-md hidden sm:flex">
          Create Your Storefront (Free)
        </Link>
      </nav>

      <main className="flex-1 flex flex-col w-full relative z-10">
        
        {/* 2. Hero Section (The Instant Visualization Engine) */}
        <section className="px-6 md:px-12 py-20 md:py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left Column (The Hook) */}
           <div className="flex flex-col items-start text-left">
             <h1 className="text-5xl xl:text-7xl font-semibold tracking-tighter leading-[1.05] text-slate-900 max-w-3xl">
               One QR Code.<br/>10x More Leads.
             </h1>
             <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
               Turn your static menus, PDFs, and social links into an autonomous AI storefront that answers questions, books appointments, and captures leads 24/7 while you sleep.
             </p>
             <p className="mt-6 text-xs font-semibold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
               <CheckCircle size={16} weight="fill"/> Zero coding required. Live in 60 seconds.
             </p>

             <div className="mt-12 flex flex-col sm:flex-row w-full max-w-xl bg-white/70 backdrop-blur-2xl border border-white rounded-full p-2 shadow-lg">
                <div className="flex-1 flex items-center px-4">
                  <span className="text-slate-400 text-base font-mono select-none hidden sm:inline">omniverse.qr/</span>
                  <input 
                    type="text" 
                    placeholder="[ Type Your Business Name Here ]" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-slate-900 font-mono text-base placeholder:text-slate-400 py-2 sm:py-0" 
                  />
                </div>
                <Link href="/dashboard" className="px-8 py-4 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md">
                  Generate <ArrowRight size={16} weight="bold" />
                </Link>
             </div>
           </div>

           {/* Right Column (Laptop + Mobile UI Previews) */}
           <div className="relative w-full aspect-[16/10] flex items-center justify-center mt-10 lg:mt-0">
              
              {/* Laptop Frame */}
              <div className="absolute top-0 right-0 md:right-10 w-[95%] md:w-[85%] aspect-video bg-white border border-slate-200 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col z-10">
                 {/* Laptop Top Bar */}
                 <div className="w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5 shrink-0">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   <div className="mx-auto h-4 w-32 bg-white rounded text-[8px] flex items-center justify-center text-slate-400 font-mono">omniverse.qr</div>
                 </div>
                 {/* Laptop UI Layout */}
                 <div className="flex-1 flex bg-slate-50">
                    <div className="w-1/4 h-full bg-white border-r border-slate-200 p-4 flex flex-col gap-4 hidden sm:flex">
                       <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                         <div className="w-6 h-6 bg-slate-200 rounded-md shrink-0"></div>
                         <span className="truncate">{displayName}</span>
                       </div>
                       <div className="w-full h-px bg-slate-100"></div>
                       <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 p-2 rounded-md"><Storefront size={14}/> Storefront</div>
                       <div className="flex items-center gap-2 text-xs text-slate-500 p-2"><Package size={14}/> Catalog</div>
                       <div className="flex items-center gap-2 text-xs text-slate-500 p-2"><ChatCircle size={14}/> Inbox</div>
                    </div>
                    <div className="w-full sm:w-3/4 h-full p-6 flex flex-col gap-4 overflow-hidden">
                       <div className="w-full h-24 sm:h-32 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl relative shrink-0">
                          <div className="absolute bottom-4 left-4">
                             <h3 className="text-lg sm:text-xl font-bold text-slate-800 truncate pr-4">{displayName}</h3>
                             <p className="text-[10px] sm:text-xs text-slate-500">Premium Goods & Services</p>
                          </div>
                       </div>
                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                         <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                           <div className="w-full h-12 sm:h-16 bg-slate-100 rounded-md"></div>
                           <div className="w-3/4 h-2 sm:h-3 bg-slate-200 rounded"></div>
                           <div className="w-1/2 h-2 sm:h-3 bg-slate-100 rounded"></div>
                         </div>
                         <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                           <div className="w-full h-12 sm:h-16 bg-slate-100 rounded-md"></div>
                           <div className="w-3/4 h-2 sm:h-3 bg-slate-200 rounded"></div>
                           <div className="w-1/2 h-2 sm:h-3 bg-slate-100 rounded"></div>
                         </div>
                         <div className="hidden sm:flex bg-white p-3 rounded-lg border border-slate-200 flex-col gap-2">
                           <div className="w-full h-16 bg-slate-100 rounded-md"></div>
                           <div className="w-3/4 h-3 bg-slate-200 rounded"></div>
                           <div className="w-1/2 h-3 bg-slate-100 rounded"></div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Mobile Frame */}
              <div className="absolute bottom-[-15%] left-0 md:left-10 w-[140px] md:w-[180px] lg:w-[220px] aspect-[9/19] bg-white border-[6px] md:border-[8px] border-slate-900 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col z-20 transition-transform hover:-translate-y-2 duration-300">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-5 bg-slate-900 rounded-b-xl z-20"></div>
                 
                 {/* Mobile UI Layout */}
                 <div className="w-full h-24 md:h-32 lg:h-40 bg-gradient-to-b from-slate-200 to-slate-50 relative flex-shrink-0">
                    <div className="absolute bottom-3 left-3 pr-3">
                       <h2 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 leading-tight truncate w-[100px] md:w-[140px] lg:w-[180px]">
                         {displayName}
                       </h2>
                       <p className="text-slate-500 text-[9px] md:text-[10px] lg:text-xs mt-1">Official Store</p>
                    </div>
                 </div>
                 
                 <div className="flex-1 bg-white p-2 md:p-3 flex flex-col gap-2 md:gap-3">
                    <div className="w-full h-6 md:h-8 bg-slate-100 rounded-md"></div>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded-md"></div>
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded-md"></div>
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded-md"></div>
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded-md"></div>
                    </div>
                 </div>
                 
                 {/* Mobile FAB */}
                 <div className="absolute bottom-4 right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center z-20 animate-pulse">
                    <ChatCircle size={20} weight="fill" className="text-white"/>
                 </div>
              </div>

           </div>
        </section>

        {/* 3. The Service Pillars (Expanded Bento Grid) */}
        <section id="features" className="px-6 md:px-12 py-32 bg-white/40 backdrop-blur-md border-y border-white">
          <div className="max-w-7xl mx-auto w-full">
             <div className="text-center mb-20">
               <h2 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">Everything you need to scale.</h2>
               <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                 We replaced fragmented tools with a single, powerful operating system for your physical business.
               </p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[320px]">
                
                {/* Card 1: Unified Storefront */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
                   <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Storefront size={28} weight="duotone"/>
                     </div>
                     <h3 className="text-3xl font-semibold text-slate-900 mb-4">Unified Digital Storefront</h3>
                     <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md">
                       Combine all your online presence into one storefront. Upload links, documents, services, and define your personal or business identity instantly.
                     </p>
                   </div>
                   {/* Mock UI Decoration */}
                   <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
                   <div className="absolute bottom-8 right-8 hidden md:flex gap-4">
                      <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 font-mono text-xs text-slate-500 flex items-center gap-2"><FileText size={14}/> menu.pdf</div>
                      <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 font-mono text-xs text-slate-500 flex items-center gap-2">Instagram Link</div>
                   </div>
                </div>

                {/* Card 2: AI Agent */}
                <div className="lg:row-span-2 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden">
                   <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px]"></div>
                   <div className="relative z-10 mb-auto">
                     <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <ChatCircle size={28} weight="duotone"/>
                     </div>
                     <h3 className="text-3xl font-semibold text-slate-900 mb-4">Autonomous AI Agent</h3>
                     <p className="text-lg text-slate-600 font-medium leading-relaxed">
                       Let users inquire about your business, provide feedback, or book appointments through a smart, 24/7 AI assistant.
                     </p>
                   </div>
                   {/* Chat UI Mock */}
                   <div className="relative z-10 mt-8 space-y-4">
                     <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm w-[85%]">
                       <p className="text-sm text-slate-600">Can I book a consultation for tomorrow?</p>
                     </div>
                     <div className="bg-emerald-50 p-4 rounded-2xl rounded-br-none border border-emerald-100 shadow-sm w-[85%] ml-auto">
                       <p className="text-sm text-emerald-800">Yes! I have slots open at 2 PM and 4 PM. Which works best?</p>
                     </div>
                   </div>
                </div>

                {/* Card 3: Omnichannel Alerts */}
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
                   <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-[50px]"></div>
                   <div className="relative z-10">
                     <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <BellRinging size={28} weight="duotone"/>
                     </div>
                     <h3 className="text-2xl font-semibold text-slate-900 mb-4">Omnichannel Alerts</h3>
                     <p className="text-base text-slate-600 font-medium leading-relaxed">
                       Never miss a lead. Get instantly notified for queries and callbacks on WhatsApp, Slack, Telegram, and more.
                     </p>
                   </div>
                </div>

                {/* Card 4: Analytics */}
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
                   <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-[50px]"></div>
                   <div className="relative z-10">
                     <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v48H40a8,8,0,0,0-8,8v56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM48,152H88v48H48Z"></path></svg>
                     </div>
                     <h3 className="text-2xl font-semibold text-slate-900 mb-4">Analytics & Control</h3>
                     <p className="text-base text-slate-600 font-medium leading-relaxed">
                       Show all interactions in a comprehensive analytics dashboard and deeply customize your Storefront.
                     </p>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 4. Who Is This For? */}
        <section className="px-6 md:px-12 py-24 w-full max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-semibold tracking-tight text-slate-900">For anyone looking to scale.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2rem] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow">
                 <Storefront size={40} weight="duotone" className="text-blue-500 mb-6"/>
                 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Local & Small Businesses</h2>
                 <p className="text-base text-slate-600 font-medium leading-relaxed">
                   No website? No problem. Convert your physical store, cafes, or offline menus into a fully automated digital presence in minutes, without a line of code.
                 </p>
              </div>

              <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2rem] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow">
                 <Buildings size={40} weight="duotone" className="text-emerald-500 mb-6"/>
                 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Companies & Agencies</h2>
                 <p className="text-base text-slate-600 font-medium leading-relaxed">
                   Scale your B2B interactions. Turn 100-page catalogs and company knowledge bases into instant chat interfaces for clients to browse and request quotes.
                 </p>
              </div>

              <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2rem] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow">
                 <PaintBrush size={40} weight="duotone" className="text-orange-500 mb-6"/>
                 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Freelancers & Creators</h2>
                 <p className="text-base text-slate-600 font-medium leading-relaxed">
                   Replace your static link-in-bio. Deploy an AI agent that actively pitches your work, negotiates rates, and schedules Discovery calls while you create.
                 </p>
              </div>

              <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2rem] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow">
                 <GraduationCap size={40} weight="duotone" className="text-purple-500 mb-6"/>
                 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Students & Individuals</h2>
                 <p className="text-base text-slate-600 font-medium leading-relaxed">
                   Build a living portfolio. Turn your resumes, projects, and social links into a smart personal brand that speaks directly to recruiters for you.
                 </p>
              </div>

           </div>
        </section>

        {/* 5. How It Works Flow (Zig-Zag) */}
        <section id="how-it-works" className="px-6 md:px-12 py-32 bg-white/40 backdrop-blur-md border-y border-white">
          <div className="max-w-7xl mx-auto w-full">
             <div className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">From scan to scale in 3 steps.</h2>
               <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">No code, no drag-and-drop builders. Just upload your assets and let AI do the rest.</p>
             </div>
             
             <div className="flex flex-col gap-32">
                
                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div>
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">1</div>
                     <h3 className="text-3xl font-semibold text-slate-900 mb-4">Claim & Ingest</h3>
                     <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                       Claim your unique business URL and simply dump all your fragmented assets into one place to build your unified storefront:
                     </p>
                     <ul className="space-y-4">
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Social Media Links</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Business Details & Identity</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Customer FAQs & Policies</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Services & Pricing Menus</li>
                     </ul>
                   </div>
                   <div className="relative aspect-[4/3] bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-transparent"></div>
                      
                      {/* UI Mock: The Ingestion Engine */}
                      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                         
                         {/* Center Hub */}
                         <div className="relative z-20 w-24 h-24 bg-slate-900 text-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border-[6px] border-slate-100">
                           <Storefront size={32} weight="duotone" className="mb-1" />
                           <span className="text-[9px] font-bold tracking-widest uppercase">AI Core</span>
                         </div>

                         {/* Connecting Lines */}
                         <svg className="absolute inset-0 w-full h-full z-10 text-blue-200 stroke-current opacity-70" style={{ strokeDasharray: "6 6" }} fill="none" strokeWidth="2">
                           <line x1="25%" y1="25%" x2="50%" y2="50%" />
                           <line x1="75%" y1="25%" x2="50%" y2="50%" />
                           <line x1="25%" y1="75%" x2="50%" y2="50%" />
                           <line x1="75%" y1="75%" x2="50%" y2="50%" />
                         </svg>

                         {/* Floating Assets */}
                         <div className="absolute top-[12%] left-[10%] z-20 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-[bounce_3s_ease-in-out_infinite]">
                           <div className="w-6 h-6 bg-pink-100 text-pink-500 rounded-lg flex items-center justify-center"><QrCode size={14} weight="bold"/></div>
                           <span className="text-xs font-bold text-slate-700">Instagram</span>
                         </div>

                         <div className="absolute top-[18%] right-[8%] z-20 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-[bounce_4s_ease-in-out_infinite]">
                           <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center"><ChatCircle size={14} weight="bold"/></div>
                           <span className="text-xs font-bold text-slate-700">FAQs.docx</span>
                         </div>

                         <div className="absolute bottom-[20%] left-[8%] z-20 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-[bounce_3.5s_ease-in-out_infinite]">
                           <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><FileText size={14} weight="bold"/></div>
                           <span className="text-xs font-bold text-slate-700">pricing.pdf</span>
                         </div>

                         <div className="absolute bottom-[15%] right-[10%] z-20 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-[bounce_3.2s_ease-in-out_infinite]">
                           <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Buildings size={14} weight="bold"/></div>
                           <span className="text-xs font-bold text-slate-700">About Us</span>
                         </div>

                      </div>
                   </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="order-2 md:order-1 relative aspect-[4/3] bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 to-transparent"></div>
                      
                      {/* UI Mock: Two-Phase Generation */}
                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-6">
                         
                         {/* Animation 1: Processing */}
                         <div className="w-[85%] bg-white border border-slate-100 rounded-xl shadow-md p-4 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 h-full w-1 bg-emerald-500"></div>
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-3 h-3 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"></div>
                               <span className="text-xs font-bold text-slate-700">1. Processing Knowledge Base</span>
                            </div>
                            <div className="space-y-2">
                               <div className="w-full h-1.5 bg-slate-100 rounded overflow-hidden">
                                  <div className="w-full h-full bg-emerald-500 rounded animate-pulse"></div>
                               </div>
                               <div className="w-3/4 h-1.5 bg-slate-100 rounded overflow-hidden">
                                  <div className="w-full h-full bg-emerald-400 rounded animate-pulse delay-75"></div>
                               </div>
                            </div>
                         </div>

                         {/* Animation 2: Building UI Layouts */}
                         <div className="w-[85%] bg-white border border-slate-100 rounded-xl shadow-md p-4 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 h-full w-1 bg-blue-500"></div>
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-3 h-3 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
                               <span className="text-xs font-bold text-slate-700">2. Compiling Storefront UI</span>
                            </div>
                            
                            {/* Mini UI Layout Construction */}
                            <div className="w-full aspect-[3/1] bg-slate-50 border border-slate-100 rounded-lg p-2 flex gap-2">
                               {/* Sidebar */}
                               <div className="w-1/4 h-full bg-slate-200 rounded animate-pulse"></div>
                               {/* Main Content Area */}
                               <div className="w-3/4 h-full flex flex-col gap-2">
                                 {/* Header banner */}
                                 <div className="w-full h-1/2 bg-blue-100 rounded animate-pulse delay-100"></div>
                                 {/* Grid items */}
                                 <div className="w-full h-1/2 flex gap-2">
                                   <div className="flex-1 bg-slate-200 rounded animate-pulse delay-150"></div>
                                   <div className="flex-1 bg-slate-200 rounded animate-pulse delay-200"></div>
                                   <div className="flex-1 bg-slate-200 rounded animate-pulse delay-300"></div>
                                 </div>
                               </div>
                            </div>
                         </div>

                      </div>
                   </div>
                   <div className="order-1 md:order-2">
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">2</div>
                     <h3 className="text-3xl font-semibold text-slate-900 mb-4">Structure & Generate</h3>
                     <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                       Our engine instantly parses your unstructured data and compiles your storefront in real-time. No drag-and-drop builders required:
                     </p>
                     <ul className="space-y-4">
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Instantly builds a custom Knowledge Base</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Auto-generates your mobile UI layout</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Trains your autonomous AI Sales Agent</li>
                     </ul>
                   </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div>
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">3</div>
                     <h3 className="text-3xl font-semibold text-slate-900 mb-4">Scale & Automate</h3>
                     <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                       Place your physical QR code on tables, business cards, or link-in-bios. Your AI agent takes over instantly, driving real business results while you sleep:
                     </p>
                     <ul className="space-y-4">
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Zero missed inquiries or delayed replies</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Automated appointment bookings</li>
                       <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle size={22} className="text-emerald-500" weight="fill"/> Higher conversion rates via instant engagement</li>
                     </ul>
                   </div>
                   <div className="relative aspect-[4/3] bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 to-transparent"></div>
                      
                      {/* UI Mock: Multi-Benefit Showcase */}
                      <div className="relative w-full h-full">
                         
                         {/* Mock 1: Analytics Spike */}
                         <div className="absolute top-[10%] left-[10%] w-[60%] bg-white border border-slate-100 rounded-2xl shadow-lg p-4 animate-[bounce_4s_ease-in-out_infinite]">
                            <div className="flex justify-between items-center mb-4">
                               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Conversions</span>
                               <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+42%</span>
                            </div>
                            <div className="flex items-end gap-2 h-10">
                               <div className="w-1/5 bg-slate-100 rounded-t h-[40%]"></div>
                               <div className="w-1/5 bg-slate-100 rounded-t h-[60%]"></div>
                               <div className="w-1/5 bg-slate-100 rounded-t h-[50%]"></div>
                               <div className="w-1/5 bg-blue-100 rounded-t h-[80%]"></div>
                               <div className="w-1/5 bg-blue-500 rounded-t h-[100%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            </div>
                         </div>

                         {/* Mock 2: Booking Confirmed */}
                         <div className="absolute top-[45%] right-[5%] w-[60%] bg-white border border-slate-100 rounded-2xl shadow-xl p-3 flex gap-3 z-10 animate-[bounce_3.5s_ease-in-out_infinite_reverse]">
                            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                              <CheckCircle size={16} weight="fill"/>
                            </div>
                            <div>
                               <div className="flex justify-between items-center mb-0.5">
                                  <h4 className="font-bold text-slate-800 text-xs">New Booking</h4>
                                  <span className="text-[9px] text-slate-400">2m ago</span>
                               </div>
                               <p className="text-[10px] text-slate-600 leading-snug">Discovery Call confirmed for tomorrow at 2:00 PM.</p>
                            </div>
                         </div>

                         {/* Mock 3: WhatsApp Notification */}
                         <div className="absolute bottom-[10%] left-[15%] w-[65%] bg-white border border-slate-100 rounded-2xl shadow-xl p-3 flex gap-3 z-20 animate-[bounce_3s_ease-in-out_infinite]">
                            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                              <ChatCircle size={16} weight="fill"/>
                            </div>
                            <div>
                               <div className="flex justify-between items-center mb-0.5">
                                  <h4 className="font-bold text-slate-800 text-xs">Qualified Lead</h4>
                                  <span className="text-[9px] text-slate-400">Just now</span>
                               </div>
                               <p className="text-[10px] text-slate-600 leading-snug">"Hey! Checked the catalog via QR. Can we arrange a bulk order?"</p>
                            </div>
                         </div>

                      </div>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 6. Testimonials (Wall of Love) */}
        <section className="px-6 md:px-12 py-32 w-full max-w-7xl mx-auto">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Built for conversions.</h2>
             <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Don't just take our word for it. See how our users are scaling their physical presence.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                 <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                       <Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/>
                    </div>
                    <p className="text-lg font-medium text-slate-800 mb-8 leading-relaxed">
                      "We put the Omniverse QR on our wholesale garment boxes. Now, out-of-station buyers scan it to browse our complete catalog and request callbacks instantly without messy back-and-forth calling."
                    </p>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 inline-block self-start">
                       <p className="text-xs font-bold text-blue-700">Impact: 3x more wholesale inquiries</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">RS</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                        <p className="text-xs text-slate-500 font-medium">B2B Garment Manufacturer</p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                 <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                       <Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/>
                    </div>
                    <p className="text-lg font-medium text-slate-800 mb-8 leading-relaxed">
                      "I put the link on my X profile. Potential clients automatically audit my portfolio through the chat interface and book Discovery calls right then and there. It completely replaced my Linktree."
                    </p>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 inline-block self-start">
                       <p className="text-xs font-bold text-emerald-700">Impact: 12 Discovery calls booked</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">SD</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Sarah Davis</h4>
                        <p className="text-xs text-slate-500 font-medium">Freelance UI/UX Designer</p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                 <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                       <Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/><Star weight="fill" size={20}/>
                    </div>
                    <p className="text-lg font-medium text-slate-800 mb-8 leading-relaxed">
                      "As a local cafe, we don't have a website. We just uploaded a PDF of our menu. Now customers scan the QR on the table to order and ask the AI about vegan options instantly."
                    </p>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 inline-block self-start">
                       <p className="text-xs font-bold text-orange-700">Impact: Zero server bottlenecks</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">JM</div>
                      <div>
                        <h4 className="font-bold text-slate-900">James Miller</h4>
                        <p className="text-xs text-slate-500 font-medium">Local Cafe Owner</p>
                      </div>
                    </div>
                 </div>
              </div>

           </div>
        </section>

        {/* 7. Core CTA Banner */}
        <section className="px-6 md:px-12 py-32 mt-12 flex flex-col items-center justify-center text-center relative overflow-hidden bg-slate-900 text-white rounded-t-[4rem]">
           <div className="relative z-10 flex flex-col items-center">
             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12 max-w-4xl">
               Ready to capture every single lead?
             </h2>
             <Link href="/dashboard" className="px-12 py-6 bg-white text-slate-900 text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_8px_30px_rgba(255,255,255,0.2)] flex items-center gap-3">
               Generate Your Smart QR Hub Now
             </Link>
           </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="w-full px-8 py-16 bg-slate-900 text-slate-400">
         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <h3 className="text-white font-bold text-lg mb-4">Product</h3>
               <ul className="space-y-2 text-sm font-medium">
                 <li><Link href="#features" className="hover:text-white">Features</Link></li>
                 <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                 <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
               </ul>
            </div>
            <div>
               <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
               <ul className="space-y-2 text-sm font-medium">
                 <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                 <li><Link href="#" className="hover:text-white">Terms</Link></li>
               </ul>
            </div>
            <div className="md:text-right">
               <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-xl mb-4 md:ml-auto">
                 <QrCode size={22} weight="bold" className="text-white" />
               </div>
               <p className="text-xs font-mono tracking-widest uppercase">Engineered for high-conversion business identity.</p>
               <p className="text-xs mt-4">© 2024 Omniverse QR</p>
            </div>
         </div>
      </footer>
    </div>
  );
}
