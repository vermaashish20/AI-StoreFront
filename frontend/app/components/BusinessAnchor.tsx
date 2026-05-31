"use client";

import { useState } from "react";
import Image from "next/image";
import { Storefront, ChatCircle, Star, PaperPlaneRight, InstagramLogo, LinkedinLogo, MapPin, PhoneCall, CheckCircle, ArrowLeft, X } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";
import { usePlatform } from "../context/PlatformContext";

export default function BusinessAnchor() {
  const { businessName, faqs } = usePlatform();
  const [chatOpen, setChatOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="w-full min-h-[100dvh] bg-[#faf9f6] flex flex-col relative font-sans">
      
      {/* Top Header / Profile Hero */}
      <header className="w-full relative bg-[#121212] overflow-hidden">
        <Image src="/anchor_texture.png" alt="Background Texture" fill className="object-cover opacity-40 mix-blend-overlay pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
          <Link href="/marketplace" className="absolute top-6 left-6 md:top-12 md:left-12 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
            <ArrowLeft size={16} /> Directory
          </Link>

          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur border border-white/20 rounded-none p-1 mb-6 shadow-xl">
             <div className="w-full h-full bg-[#121212] flex items-center justify-center overflow-hidden">
               <Storefront size={48} weight="light" className="text-white" />
             </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">{businessName}</h1>
          <p className="text-xs md:text-sm text-white/60 tracking-widest uppercase font-semibold max-w-[40ch] mb-8">
            Premium fabrics & wholesale supplies for the modern maker.
          </p>

          {/* CTA Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={() => setCallbackOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#121212] text-[10px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-full"
            >
              <PhoneCall size={14} weight="fill" /> Request Callback
            </button>
            <button 
              onClick={() => setFeedbackOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors rounded-full"
            >
              <Star size={14} weight="fill" /> Leave Review
            </button>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-white/60 hover:text-white transition-colors"><InstagramLogo size={24} /></a>
             <a href="#" className="text-white/60 hover:text-white transition-colors"><LinkedinLogo size={24} /></a>
             <a href="#" className="text-white/60 hover:text-white transition-colors"><MapPin size={24} /></a>
          </div>
        </div>
      </header>

      {/* Main Content Flow */}
      <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col gap-24 py-16 px-6 pb-32">
        <StoreView />
      </main>

      {/* Overlays / Modals */}
      <ChatWidget faqs={faqs} open={chatOpen} setOpen={setChatOpen} onCallbackTrigger={() => { setChatOpen(false); setCallbackOpen(true); }} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />

    </div>
  );
}

function StoreView() {
  const catalog = [
    { id: 1, name: "Summer Linen Blend", price: "$12/yd" },
    { id: 2, name: "Premium Silk Charmeuse", price: "$45/yd" },
    { id: 3, name: "Organic Cotton Canvas", price: "$8/yd" },
    { id: 4, name: "Velvet Upholstery", price: "$28/yd" },
    { id: 5, name: "Heavyweight Denim", price: "$18/yd" },
    { id: 6, name: "Raw Silk Noil", price: "$32/yd" },
  ];

  return (
    <div className="flex flex-col gap-12">
      <section>
         <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2 mb-6">Our Heritage</h2>
         <p className="text-base md:text-lg text-gray-900 leading-relaxed font-serif text-justify">
           Acme Textiles has been supplying premium fabrics to local boutiques and national designers since 1998. We specialize in organic cottons and pure silks, meticulously curated for the modern maker who values sustainability without sacrificing luxury.
         </p>
      </section>

      <section>
        <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2 mb-8">Featured Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {catalog.map(item => (
            <div key={item.id} className="group flex flex-col cursor-pointer">
              <div className="h-48 md:h-64 w-full bg-gray-100 border border-gray-200 mb-3 group-hover:border-foreground transition-colors relative overflow-hidden"></div>
              <h3 className="text-xs font-semibold text-gray-900 leading-tight mb-1">{item.name}</h3>
              <span className="text-[10px] font-mono font-bold text-gray-500 tracking-wider">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CallbackModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white border border-[#121212] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-[#faf9f6]">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-900">Request Callback</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900"><X size={20} /></button>
        </div>
        <div className="p-8">
          <p className="text-base text-gray-600 mb-8 font-serif">Leave your details and we will call you back shortly regarding your inquiry.</p>

          {submitted ? (
             <div className="border border-emerald-200 p-8 flex flex-col items-center text-center bg-emerald-50">
               <CheckCircle size={40} weight="light" className="text-emerald-500 mb-4" />
               <h3 className="text-xs font-bold tracking-widest uppercase text-emerald-900 mb-2">Request Received</h3>
               <p className="text-sm text-emerald-700 font-serif">We have notified the business owner directly.</p>
             </div>
          ) : (
            <div className="space-y-6">
              <input type="text" placeholder="FULL NAME" className="w-full bg-white border border-gray-300 p-4 text-xs font-bold tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-foreground transition-all shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none" />
              <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-white border border-gray-300 p-4 text-xs font-bold tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-foreground transition-all shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none" />
              <textarea placeholder="HOW CAN WE HELP YOU?" rows={4} className="w-full bg-white border border-gray-300 p-4 text-xs font-bold tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-foreground transition-all shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none resize-none" />
              <button onClick={() => setSubmitted(true)} className="w-full py-5 bg-foreground text-background text-[10px] font-bold tracking-widest uppercase hover:bg-foreground/90 transition-colors mt-2 border border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Send Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FeedbackModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white border border-[#121212] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-[#faf9f6]">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-900">Leave Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900"><X size={20} /></button>
        </div>
        <div className="p-8">
          <p className="text-base text-gray-600 mb-8 font-serif">Your thoughts help us improve our catalog and service quality.</p>

          {submitted ? (
            <div className="border border-emerald-200 p-8 flex flex-col items-center text-center bg-emerald-50">
              <Star size={40} weight="fill" className="text-emerald-500 mb-4" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-emerald-900 mb-2">Thank You</h3>
              <p className="text-sm text-emerald-700 font-serif">Your feedback has been successfully recorded.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className={clsx("p-2 transition-transform hover:scale-110", star <= rating ? "text-foreground" : "text-gray-200")}
                  >
                    <Star size={40} weight="fill" />
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <textarea 
                  rows={4}
                  placeholder="YOUR REVIEW..."
                  className="w-full bg-white border border-gray-300 p-5 text-xs font-bold tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-foreground transition-all shadow-sm focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none resize-none"
                ></textarea>
              </div>
              <button 
                onClick={() => setSubmitted(true)}
                disabled={rating === 0}
                className="w-full py-5 bg-foreground text-background text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed border border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatWidget({ faqs, open, setOpen, onCallbackTrigger }: { faqs: any[], open: boolean, setOpen: (val: boolean) => void, onCallbackTrigger: () => void }) {
  const [messages, setMessages] = useState<{role: "user" | "ai" | "intent", text: string}[]>([
    { role: "ai", text: "Welcome to Acme Textiles. Ask me anything regarding our inventory, shipping policies, or bulk discounts." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    
    setTimeout(() => {
      const lower = text.toLowerCase();
      if (lower.includes("buy") || lower.includes("ship") || lower.includes("order") || lower.includes("call")) {
        setMessages(prev => [...prev, { 
          role: "intent", 
          text: "I can help you place an order right away! Should I notify the owner to call you back?" 
        }]);
        return;
      }

      const matchedFaq = faqs.find(f => lower.includes(f.question.toLowerCase().split(" ")[0]) || lower.includes(f.answer.toLowerCase().split(" ")[0]));
      
      if (matchedFaq) {
        setMessages(prev => [...prev, { role: "ai", text: matchedFaq.answer }]);
      } else {
        setMessages(prev => [...prev, { role: "ai", text: "I can definitely help with that. Are you looking for a specific material?" }]);
      }
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setOpen(!open)}
        className={clsx(
          "fixed bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-accent text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all z-40 border-2 border-[#121212]",
          open ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <ChatCircle size={32} weight="fill" />
      </button>

      {/* Chat Window */}
      <div className={clsx(
        "fixed bottom-0 right-0 md:bottom-8 md:right-8 w-full md:w-[400px] h-[85dvh] md:h-[600px] bg-white border border-[#121212] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 flex flex-col transition-transform duration-300 transform origin-bottom-right",
        open ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )}>
        <div className="p-4 bg-[#121212] text-white flex justify-between items-center shrink-0 border-b-4 border-accent">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">AI Assistant</span>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#faf9f6]">
          {messages.map((msg, i) => (
            <div key={i} className={clsx("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}>
              <div className={clsx("p-4 text-sm leading-relaxed max-w-[85%] border", 
                msg.role === "user" ? "bg-white border-gray-300 text-gray-900 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : 
                msg.role === "intent" ? "bg-white border-accent text-gray-900 rounded-none shadow-[2px_2px_0px_0px_rgba(0,85,255,1)]" :
                "bg-white border-gray-200 text-gray-800 rounded-none shadow-sm"
              )}>
                {msg.text}
                {msg.role === "intent" && (
                  <button 
                    onClick={onCallbackTrigger}
                    className="mt-4 block w-full py-2 bg-accent text-white font-bold text-[10px] tracking-widest uppercase hover:opacity-90 transition-opacity border border-accent"
                  >
                    Open Callback Form
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-200 shrink-0">
          <div className="flex items-center gap-0 border border-gray-300 bg-[#faf9f6] focus-within:border-foreground focus-within:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all p-1">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend(input)}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none placeholder:text-gray-400 font-serif"
            />
            <button onClick={() => handleSend(input)} className="px-4 py-2 bg-foreground text-background font-bold text-[10px] tracking-widest uppercase hover:bg-foreground/90 transition-colors flex items-center gap-2">
              <PaperPlaneRight size={14} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
