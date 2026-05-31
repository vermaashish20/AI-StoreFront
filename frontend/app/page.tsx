"use client";

import Link from "next/link";
import Image from "next/image";
import { QrCode, Storefront, ChartLineUp, ArrowRight } from "@phosphor-icons/react";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex items-center justify-between border-b border-gray-200/50">
        <div className="flex items-center gap-3 font-semibold text-xl tracking-tight">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center rounded-[calc(var(--radius)-4px)]">
             <QrCode size={18} weight="bold" className="text-background" />
          </div>
          Omniverse
        </div>
        <div className="flex items-center gap-6">
          <Link href="/onboarding" className="text-sm font-medium hover:text-accent transition-colors">Log In</Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section (Asymmetric Split per SKILL.md) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start text-left">
             <span className="inline-block px-3 py-1 mb-6 border border-gray-300 rounded-full text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                Phase One
             </span>
             <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-foreground">
               Physical presence, digital scale.
             </h1>
             <p className="mt-6 text-lg text-gray-600 max-w-[50ch] leading-relaxed">
               Instantly convert offline menus and catalogs into an AI-powered storefront. One dynamic QR code unlocks your business to the world.
             </p>
             <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
               <div className="flex w-full items-center bg-white border border-gray-300 rounded-full p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-accent/20 focus-within:border-accent transition-all">
                 <span className="pl-4 text-gray-500 text-sm font-medium select-none">omniverse.qr/</span>
                 <input type="text" placeholder="your-brand" className="flex-1 bg-transparent border-none focus:outline-none text-foreground text-sm font-medium py-2 px-1" />
                 <Link href="/dashboard" className="px-6 py-2.5 bg-accent text-accent-fg font-medium rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm ml-2">
                   Claim <ArrowRight size={16} />
                 </Link>
               </div>
             </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            <Image 
              src="/hero.png" 
              alt="Omniverse QR Stand" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Cinematic Feature Section */}
        <div className="mt-32 md:mt-40 max-w-7xl w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div className="order-2 lg:order-1 relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
               <Image 
                 src="/feature.png" 
                 alt="Omniverse Mobile Experience" 
                 fill 
                 className="object-cover"
               />
             </div>

             <div className="order-1 lg:order-2 flex flex-col items-start text-left">
               <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">
                 Zero friction. Total intelligence.
               </h2>
               <p className="text-base text-gray-600 max-w-[45ch] leading-relaxed mb-12">
                 Your customers simply scan the code and instantly enter your digital world. They can browse products or chat directly with a brand-aware AI agent that knows your catalog perfectly.
               </p>

               <ul className="space-y-8">
                 <li className="flex gap-4">
                   <Storefront size={24} weight="light" className="text-accent shrink-0 mt-1" />
                   <div>
                     <h3 className="text-sm font-semibold text-foreground mb-1">Instant Catalog</h3>
                     <p className="text-sm text-gray-500 max-w-[40ch]">Unstructured PDFs and menus become a structured shopping experience.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <ChartLineUp size={24} weight="light" className="text-accent shrink-0 mt-1" />
                   <div>
                     <h3 className="text-sm font-semibold text-foreground mb-1">Actionable Analytics</h3>
                     <p className="text-sm text-gray-500 max-w-[40ch]">See exactly what your customers are searching for and buying.</p>
                   </div>
                 </li>
               </ul>
             </div>

           </div>
        </div>
      </main>

      <footer className="w-full px-8 py-12 border-t border-gray-200/50 text-center text-sm text-gray-400">
         <p>Omniverse QR MVP. Built for AI/ML local business integration.</p>
      </footer>
    </div>
  );
}
