"use client";

import { QrCode, DownloadSimple, Copy, ChartLineUp, ChatCircleText, Smiley, ArrowRight, ToggleRight, ToggleLeft, WhatsappLogo, SlackLogo, DiscordLogo, CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";

interface OwnerDashboardProps {
  onNavigateToStorefront: () => void;
}

export default function OwnerDashboard({ onNavigateToStorefront }: OwnerDashboardProps) {
  const [copied, setCopied] = useState(false);
  const [toggles, setToggles] = useState({ whatsapp: true, slack: false, discord: false });

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Control Center
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Your storefront is live. Manage analytics and integrations here.
          </p>
        </div>
        <button
          onClick={onNavigateToStorefront}
          className="py-2.5 px-5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group"
        >
          Preview Storefront
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: QR Code & Integrations */}
        <div className="flex flex-col gap-8">
          
          {/* QR Master Card */}
          <section className="bg-white rounded-[var(--radius)] border border-gray-200 p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-50 border border-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              {/* Mock QR Code Visual */}
              <QrCode size={120} weight="light" className="text-gray-900" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 mix-blend-overlay"></div>
            </div>
            
            <h2 className="text-lg font-medium text-gray-900 mb-1">
              Storefront Portal
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Scan to access the AI catalog and chat.
            </p>

            <div className="flex gap-3 w-full">
              <button className="flex-1 py-2 rounded-[calc(var(--radius)-4px)] bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <DownloadSimple size={16} />
                PNG
              </button>
              <button className="flex-1 py-2 rounded-[calc(var(--radius)-4px)] bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <DownloadSimple size={16} />
                SVG
              </button>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white rounded-[var(--radius)] border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Real-time Hooks
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <WhatsappLogo size={24} weight="light" className="text-green-600" />
                  <span className="text-sm font-medium text-gray-900">WhatsApp Alert</span>
                </div>
                <button onClick={() => setToggles(p => ({...p, whatsapp: !p.whatsapp}))} className="text-gray-400 hover:text-gray-600">
                  {toggles.whatsapp ? <ToggleRight size={32} weight="fill" className="text-accent" /> : <ToggleLeft size={32} weight="light" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SlackLogo size={24} weight="light" className="text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">Slack Channel</span>
                </div>
                <button onClick={() => setToggles(p => ({...p, slack: !p.slack}))} className="text-gray-400 hover:text-gray-600">
                  {toggles.slack ? <ToggleRight size={32} weight="fill" className="text-accent" /> : <ToggleLeft size={32} weight="light" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DiscordLogo size={24} weight="light" className="text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900">Discord Webhook</span>
                </div>
                <button onClick={() => setToggles(p => ({...p, discord: !p.discord}))} className="text-gray-400 hover:text-gray-600">
                  {toggles.discord ? <ToggleRight size={32} weight="fill" className="text-accent" /> : <ToggleLeft size={32} weight="light" />}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-medium text-gray-500 mb-3">Website Embed</h4>
              <div className="relative group">
                <div className="bg-gray-50 border border-gray-200 rounded-[calc(var(--radius)-4px)] p-3 pr-10 text-xs font-mono text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                  {'<iframe src="https://omni.qr/..." />'}
                </div>
                <button 
                  onClick={handleCopy}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white border border-gray-200 rounded shadow-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {copied ? <CheckCircle size={14} weight="fill" className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column: Analytics & Content Engine */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Analytics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-[var(--radius)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <ChartLineUp size={20} />
                <h3 className="text-sm font-medium">Total Scans</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-medium tracking-tight">1,248</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">↑ 12%</span>
              </div>
              <div className="mt-6 h-12 w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded border-b-2 border-accent flex items-end">
                <div className="flex w-full h-full items-end gap-1 px-1 opacity-50">
                   {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                     <div key={i} className="flex-1 bg-accent rounded-t-sm" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[var(--radius)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <ChatCircleText size={20} />
                <h3 className="text-sm font-medium">Top Queries</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-gray-900 truncate">"Red floral print fabrics"</span>
                  <span className="text-gray-500 font-medium">45</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-gray-900 truncate">"Store holiday timings"</span>
                  <span className="text-gray-500 font-medium">28</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-gray-900 truncate">"Luxury collections"</span>
                  <span className="text-gray-500 font-medium">19</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-[var(--radius)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Smiley size={20} />
                <h3 className="text-sm font-medium">Feedback Sentiment</h3>
              </div>
              <div className="flex items-center justify-center h-24 relative mb-2">
                 <div className="w-20 h-20 rounded-full" style={{ background: "conic-gradient(#10b981 0% 70%, #f59e0b 70% 90%, #ef4444 90% 100%)" }}></div>
                 <div className="w-14 h-14 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-lg font-medium text-emerald-600">4.8</span>
                 </div>
              </div>
              <div className="flex justify-center gap-4 text-xs font-medium mt-2">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> 70%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> 20%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> 10%</span>
              </div>
            </div>
          </div>

          {/* AI Content Engine */}
          <section className="bg-gray-50 border border-gray-200 rounded-[var(--radius)] p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Weekly Content Engine</h3>
                <p className="text-sm text-gray-500 mt-1">Generated specifically from your extracted catalog assets.</p>
              </div>
              <button className="text-xs font-medium text-accent hover:text-accent/80 flex items-center gap-1">
                Refresh Ideas <ArrowRight size={12} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded mb-3">Instagram Hook</span>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "Looking for the perfect summer fabric? Our new red floral print just arrived. Swipe to see the details."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Derived from: PDF Catalog (Page 4)</span>
                  <button className="text-gray-400 hover:text-gray-900"><Copy size={16} /></button>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <span className="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded mb-3">WhatsApp Broadcast</span>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "Hello! Just a quick update that our holiday timings are changing this weekend. We will be open from 10 AM to 4 PM."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Derived from: Voice Notes</span>
                  <button className="text-gray-400 hover:text-gray-900"><Copy size={16} /></button>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
