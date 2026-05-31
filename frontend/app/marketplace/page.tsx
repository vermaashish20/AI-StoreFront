"use client";

import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlass, Storefront, Palette, Coffee, InstagramLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useState } from "react";
import clsx from "clsx";

export default function MarketplacePage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Manufacturers", "Cafes & Food", "Creators", "Freelance"];

  const entities = [
    { name: "Acme Textiles", type: "Manufacturers", handle: "acme-textiles", icon: Storefront, image: "/market_mfg.png", socials: [InstagramLogo, LinkedinLogo] },
    { name: "Brew & Co.", type: "Cafes & Food", handle: "brew-co", icon: Coffee, image: "/market_cafe.png", socials: [InstagramLogo] },
    { name: "Alex Design", type: "Freelance", handle: "alex-design", icon: Palette, image: "/market_creator.png", socials: [LinkedinLogo] },
    { name: "Tech Talk", type: "Creators", handle: "tech-talk", icon: YoutubeLogo, image: "/market_creator.png", socials: [YoutubeLogo, InstagramLogo] },
    { name: "Surat Silks", type: "Manufacturers", handle: "surat-silks", icon: Storefront, image: "/market_mfg.png", socials: [InstagramLogo] },
  ];

  const filtered = filter === "All" ? entities : entities.filter(e => e.type === filter);

  return (
    <div className="min-h-[100dvh] bg-[#faf9f6] text-[#121212] flex flex-col font-sans">
      <nav className="w-full px-8 py-6 flex items-center justify-between border-b border-gray-200/50 bg-[#faf9f6]/80 backdrop-blur sticky top-0 z-10">
        <div className="flex items-center gap-3 font-medium text-lg tracking-tight">
          <Link href="/">Omniverse</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 text-sm tracking-wide">DIRECTORY</span>
        </div>
        <Link href="/dashboard" className="text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-accent transition-colors">Owner Login</Link>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8 border-b border-gray-200/50">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">Discovery Engine</h1>
            <p className="text-base text-gray-500 mt-4 max-w-[40ch] leading-relaxed">Connect with verified businesses and creators directly through their digital anchors.</p>
          </div>
          <div className="relative w-full md:w-96">
            <MagnifyingGlass size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search handles..." 
              className="w-full bg-transparent border-b border-gray-300 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-foreground transition-all rounded-none"
            />
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map(c => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={clsx(
                "px-0 pb-1 text-xs font-semibold uppercase tracking-widest whitespace-nowrap transition-colors border-b-2",
                filter === c ? "border-foreground text-foreground" : "border-transparent text-gray-400 hover:text-gray-900"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(entity => {
            const Icon = entity.icon;
            return (
              <Link href={`/${entity.handle}`} key={entity.handle} className="group relative h-[400px] w-full rounded-none overflow-hidden bg-gray-100 flex flex-col justify-end">
                <Image src={entity.image} alt={entity.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply"></div>
                
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                     <span className="px-2.5 py-1 bg-white/10 backdrop-blur border border-white/20 text-white text-[10px] font-semibold tracking-widest uppercase">
                       {entity.type}
                     </span>
                     <div className="flex gap-2">
                       {entity.socials.map((Social, i) => <Social key={i} size={16} weight="fill" className="text-white/70" />)}
                     </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white tracking-tight mb-2">{entity.name}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-xs font-medium tracking-wide uppercase">
                      <Icon size={14} /> omniverse.qr/{entity.handle}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
