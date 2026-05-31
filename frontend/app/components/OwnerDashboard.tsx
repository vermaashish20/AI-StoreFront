"use client";

import { useState } from "react";
import { usePlatform } from "../context/PlatformContext";
import { Plus, Trash, Storefront, ChartBar, BellRinging, Database, CheckCircle, Warning, UploadSimple } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";

type Tab = "studio" | "rag" | "alerts" | "analytics";

export default function OwnerDashboard() {
  const { handle, businessName, faqs } = usePlatform();
  const [localBusinessName, setLocalBusinessName] = useState(businessName);
  const [activeTab, setActiveTab] = useState<Tab>("studio");

  return (
    <div className="w-full h-[100dvh] bg-[#faf9f6] flex flex-col md:flex-row overflow-hidden font-sans border border-[#121212]">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#121212] flex flex-col shrink-0 border-r border-[#121212]">
        <div className="p-6 border-b border-gray-800 bg-[#1a1a1a]">
          <h2 className="text-white font-medium tracking-tight truncate">{businessName}</h2>
          <div className="text-[9px] text-emerald-400 font-mono mt-1 tracking-widest uppercase flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div> Live System</div>
        </div>

        <nav className="flex-1 flex flex-row md:flex-col p-4 gap-2 overflow-x-auto md:overflow-y-auto">
          <TabButton icon={<Storefront size={18} />} label="Storefront Studio" active={activeTab === "studio"} onClick={() => setActiveTab("studio")} />
          <TabButton icon={<Database size={18} />} label="AI Knowledge (RAG)" active={activeTab === "rag"} onClick={() => setActiveTab("rag")} />
          <TabButton icon={<BellRinging size={18} />} label="Alerts & Webhooks" active={activeTab === "alerts"} onClick={() => setActiveTab("alerts")} />
          <TabButton icon={<ChartBar size={18} />} label="Analytics Engine" active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} />
        </nav>

        <div className="p-4 border-t border-gray-800">
           <Link href={`/${handle}`} className="w-full flex justify-center items-center py-3 bg-white text-[#121212] font-bold text-[10px] tracking-widest uppercase hover:bg-gray-200 transition-colors">
             View Live Storefront
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#faf9f6] overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 md:p-12">
          {activeTab === "studio" && <StorefrontStudio businessName={localBusinessName} setBusinessName={setLocalBusinessName} />}
          {activeTab === "rag" && <RAGManager faqs={faqs} />}
          {activeTab === "alerts" && <AlertsConfig />}
          {activeTab === "analytics" && <AnalyticsEngine />}
        </div>
      </main>

    </div>
  );
}

function TabButton({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={clsx(
        "flex items-center gap-3 px-4 py-3 text-[10px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap",
        active ? "bg-white text-[#121212]" : "text-gray-400 hover:text-white hover:bg-white/5"
      )}
    >
      {icon} {label}
    </button>
  );
}

// ----------------------------------------------------
// TAB 1: Storefront Studio
// ----------------------------------------------------
function StorefrontStudio({ businessName, setBusinessName }: any) {
  return (
    <div className="space-y-12 pb-16">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-[#121212] mb-2">Storefront Studio</h1>
        <p className="text-sm font-serif text-gray-600">Configure your public-facing brand identity and layout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Business Name</label>
             <input value={businessName} onChange={e => setBusinessName(e.target.value)} className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono" />
           </div>
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Catchphrase / Subtitle</label>
             <input defaultValue="Premium fabrics & wholesale supplies for the modern maker." className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono" />
           </div>
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Heritage / About Story</label>
             <textarea rows={5} defaultValue="Acme Textiles has been supplying premium fabrics to local boutiques..." className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono resize-none" />
           </div>
        </div>

        <div className="space-y-6">
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Hero Texture Image (URL)</label>
             <input defaultValue="/anchor_texture.png" className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono" />
           </div>
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Instagram Link</label>
             <input defaultValue="https://instagram.com/acmetextiles" className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono text-gray-500" />
           </div>
           <div>
             <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Maps Location Link</label>
             <input defaultValue="https://maps.google.com/..." className="w-full bg-white border border-[#121212] p-3 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono text-gray-500" />
           </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 2: AI Knowledge Base (RAG)
// ----------------------------------------------------
function RAGManager({ faqs }: any) {
  const { addFaq: addContextFaq, removeFaq } = usePlatform();
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  const addFaq = () => {
    if(newQ && newA) {
      addContextFaq(newQ, newA);
      setNewQ(""); setNewA("");
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-[#121212] mb-2">AI Knowledge Base</h1>
        <p className="text-sm font-serif text-gray-600">Train your Chatbot. Upload documents or add raw FAQs.</p>
      </div>

      <div className="w-full border-2 border-dashed border-gray-300 bg-white p-12 flex flex-col items-center justify-center text-center hover:border-accent transition-colors cursor-pointer">
         <UploadSimple size={32} className="text-gray-400 mb-4" />
         <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-2">Drop Brand Documents</h3>
         <p className="text-xs font-mono text-gray-500">PDF, TXT, DOCX (Max 10MB)</p>
      </div>

      <div>
        <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 border-b border-[#121212] pb-2 mb-6">Extracted & Active Knowledge</h2>
        <div className="space-y-4 font-mono text-sm">
          {faqs.map((faq: any, i: number) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-4 bg-white border border-[#121212]">
               <div className="flex-1"><span className="text-gray-400 mr-2">Q:</span>{faq.question}</div>
               <div className="flex-1"><span className="text-gray-400 mr-2">A:</span>{faq.answer}</div>
               <button onClick={() => removeFaq(faq.id)} className="text-red-500 hover:text-red-700">
                 <Trash size={16} />
               </button>
            </div>
          ))}

          <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 border border-gray-300">
            <input value={newQ} onChange={e => setNewQ(e.target.value)} placeholder="Trigger Question..." className="flex-1 bg-transparent focus:outline-none" />
            <input value={newA} onChange={e => setNewA(e.target.value)} placeholder="AI Answer..." className="flex-1 bg-transparent focus:outline-none" />
            <button onClick={addFaq} className="text-accent hover:text-accent/80 font-bold text-[10px] tracking-widest uppercase flex items-center gap-1">
              <Plus size={14} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 3: Alerts & Webhooks
// ----------------------------------------------------
function AlertsConfig() {
  const integrations = [
    { name: "WhatsApp Business API", connected: true, value: "+1 (555) 019-2831" },
    { name: "Slack Channel Webhook", connected: false, value: "https://hooks.slack.com/services/T00..." },
    { name: "Telegram Bot", connected: false, value: "" },
  ];

  return (
    <div className="space-y-12 pb-16">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-[#121212] mb-2">Notification Center</h1>
        <p className="text-sm font-serif text-gray-600">Configure where your Callbacks and urgent leads are sent.</p>
      </div>

      <div className="space-y-6">
         {integrations.map((int, i) => (
            <div key={i} className="p-6 bg-white border border-[#121212] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between shadow-sm">
               <div className="flex-1 w-full">
                 <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900">{int.name}</h3>
                   {int.connected ? 
                     <span className="text-[9px] font-bold tracking-widest uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5">Active</span> :
                     <span className="text-[9px] font-bold tracking-widest uppercase bg-gray-100 text-gray-500 px-2 py-0.5">Disabled</span>
                   }
                 </div>
                 <input 
                   defaultValue={int.value} 
                   placeholder="Enter Webhook URL or Number" 
                   className="w-full bg-transparent border-b border-gray-300 py-2 text-xs font-mono focus:outline-none focus:border-[#121212] transition-colors" 
                 />
               </div>
               <button className={clsx(
                 "w-full md:w-auto px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-colors shrink-0",
                 int.connected ? "border border-[#121212] text-[#121212] hover:bg-gray-100" : "bg-[#121212] text-white hover:bg-[#1a1a1a]"
               )}>
                 {int.connected ? "Disconnect" : "Connect"}
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 4: Analytics Engine
// ----------------------------------------------------
function AnalyticsEngine() {
  return (
    <div className="space-y-12 pb-16">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-[#121212] mb-2">Analytics Engine</h1>
        <p className="text-sm font-serif text-gray-600">Monitor traffic, leads, and raw AI console logs.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Scans", val: "1,204" },
          { label: "Leads Captured", val: "84" },
          { label: "Avg Chat Time", val: "1m 12s" },
          { label: "Feedback Rating", val: "4.8" }
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-white border border-[#121212]">
             <span className="block text-[9px] font-bold tracking-widest uppercase text-gray-500 mb-2">{stat.label}</span>
             <span className="text-2xl font-mono text-gray-900">{stat.val}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 border-b border-[#121212] pb-2 mb-6">Recent Interaction Logs</h2>
        <div className="bg-[#121212] text-white p-6 font-mono text-xs leading-relaxed space-y-4 max-h-96 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-emerald-400 shrink-0">[LEAD]</span>
             <span className="text-gray-400 shrink-0">10:42 AM</span>
             <span>Callback Requested: "+91 98200XXXXX" - "Need 500m of Linen"</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-accent shrink-0">[CHAT]</span>
             <span className="text-gray-400 shrink-0">10:15 AM</span>
             <span>User: "Do you ship to Mumbai?" -&gt; AI: "Yes, standard shipping takes 2-3 days..."</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-yellow-400 shrink-0">[FBK]</span>
             <span className="text-gray-400 shrink-0">09:30 AM</span>
             <span>Rating: 5 Stars - "Great catalog and fast responses."</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-accent shrink-0">[CHAT]</span>
             <span className="text-gray-400 shrink-0">08:12 AM</span>
             <span>User: "Price for velvet?" -&gt; AI: "$28/yd."</span>
          </div>
        </div>
      </div>
    </div>
  );
}
