"use client";

import { QrCode, DownloadSimple, Copy, ChartLineUp, ToggleRight, ToggleLeft, WhatsappLogo, SlackLogo, CheckCircle, FileText, Plus, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { usePlatform } from "../context/PlatformContext";

export default function OwnerDashboard() {
  const [copied, setCopied] = useState(false);
  const { faqs, addFaq, removeFaq, webhooks, updateWebhook, handle } = usePlatform();
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddFaq = () => {
    if (newQ && newA) {
      addFaq(newQ, newA);
      setNewQ("");
      setNewA("");
    }
  };

  return (
    <div className="flex-1 w-full mx-auto px-4 py-12 md:py-16 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-gray-300 pb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Control Center
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-mono">
            STATUS: ACTIVE / URL: <a href={`/${handle}`} className="text-accent underline">omniverse.qr/{handle}</a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: QR Code & Integrations */}
        <div className="flex flex-col gap-8">
          
          {/* Dual-QR Master Card */}
          <section className="bg-white border border-gray-300 p-6 flex flex-col items-start">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6 w-full border-b border-gray-100 pb-2">
              QR Generators
            </h2>
            
            <div className="flex gap-4 w-full mb-2">
              <div className="flex-1 border border-gray-200 p-4 flex flex-col items-center group cursor-pointer hover:border-gray-400 transition-colors">
                <div className="w-full aspect-square bg-gray-50 border border-gray-200 mb-4 flex items-center justify-center">
                  <QrCode size={48} weight="light" className="text-gray-900 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xs font-semibold mb-1 uppercase tracking-wider">Main QR</h3>
                <button className="mt-2 w-full py-1.5 border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                  <DownloadSimple size={12} /> PNG
                </button>
              </div>
              
              <div className="flex-1 border border-gray-200 p-4 flex flex-col items-center group cursor-pointer hover:border-accent transition-colors">
                <div className="w-full aspect-square bg-[#0055ff]/5 border border-[#0055ff]/20 mb-4 flex items-center justify-center">
                  <QrCode size={48} weight="light" className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xs font-semibold mb-1 uppercase tracking-wider text-accent">Feedback</h3>
                <button className="mt-2 w-full py-1.5 border border-[#0055ff]/20 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-[#0055ff]/5 transition-colors flex items-center justify-center gap-1">
                  <DownloadSimple size={12} /> PNG
                </button>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white border border-gray-300 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-2">
              Webhook Alerts
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <WhatsappLogo size={20} weight="light" className="text-green-600" />
                  <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                </div>
                <button onClick={() => updateWebhook("whatsapp", !webhooks.whatsapp)} className="text-gray-400 hover:text-gray-600">
                  {webhooks.whatsapp ? <ToggleRight size={28} weight="fill" className="text-accent" /> : <ToggleLeft size={28} weight="light" />}
                </button>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <SlackLogo size={20} weight="light" className="text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">Slack</span>
                </div>
                <button onClick={() => updateWebhook("slack", !webhooks.slack)} className="text-gray-400 hover:text-gray-600">
                  {webhooks.slack ? <ToggleRight size={28} weight="fill" className="text-accent" /> : <ToggleLeft size={28} weight="light" />}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Anchor Link</h4>
              <div className="relative group">
                <div className="bg-gray-50 border border-gray-200 p-2 pr-8 text-[11px] font-mono text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                  {`https://omniverse.qr/${handle}`}
                </div>
                <button 
                  onClick={handleCopy}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  {copied ? <CheckCircle size={14} weight="fill" className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column: RAG Manager & Analytics */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Analytics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 p-6 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <ChartLineUp size={16} />
                <h3 className="text-xs font-semibold uppercase tracking-widest">Page Views</h3>
              </div>
              <div className="flex items-baseline gap-3 mt-auto">
                <span className="text-5xl font-mono tracking-tighter text-foreground">3,492</span>
                <span className="text-[10px] font-bold font-mono text-emerald-600 tracking-widest uppercase">+18%</span>
              </div>
            </div>

            <div className="bg-white border border-gray-300 p-6 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <ChartLineUp size={16} />
                <h3 className="text-xs font-semibold uppercase tracking-widest">Link CTR</h3>
              </div>
              <div className="flex items-baseline gap-3 mt-auto">
                <span className="text-5xl font-mono tracking-tighter text-foreground">42.5%</span>
                <span className="text-[10px] font-bold font-mono text-emerald-600 tracking-widest uppercase">+5%</span>
              </div>
            </div>
          </div>

          {/* RAG Manager */}
          <section className="bg-white border border-gray-300 p-8 flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900">AI Knowledge Base (RAG)</h3>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent/80 flex items-center gap-1 border border-accent/20 px-3 py-1.5 bg-accent/5">
                <FileText size={14} /> Sync Catalog
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {faqs.map(faq => (
                <div key={faq.id} className="p-4 border-l-2 border-accent bg-gray-50 relative group flex gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">{faq.question}</p>
                    <p className="text-xs text-gray-600 font-mono leading-relaxed">{faq.answer}</p>
                  </div>
                  <button onClick={() => removeFaq(faq.id)} className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1 h-fit">
                    <Trash size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border border-dashed border-gray-300 p-6 bg-white">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Add Custom Fact</h4>
              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="e.g. Do you offer bulk discounts?" 
                  value={newQ}
                  onChange={e => setNewQ(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-accent transition-colors font-medium rounded-none"
                />
                <textarea 
                  placeholder="e.g. Yes, 20% off for orders above $500." 
                  value={newA}
                  onChange={e => setNewA(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-xs focus:outline-none focus:border-accent transition-colors font-mono resize-none h-12 rounded-none"
                />
                <button 
                  onClick={handleAddFaq}
                  disabled={!newQ || !newA}
                  className="self-end px-6 py-2.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 mt-2"
                >
                  <Plus size={14} /> Append
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
