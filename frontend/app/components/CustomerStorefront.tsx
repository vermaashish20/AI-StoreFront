"use client";

import { useState } from "react";
import { Storefront, ChatCircle, Star, ArrowLeft, PaperPlaneRight, WarningCircle } from "@phosphor-icons/react";
import clsx from "clsx";

interface CustomerStorefrontProps {
  onBack: () => void;
}

export default function CustomerStorefront({ onBack }: CustomerStorefrontProps) {
  const [activeTab, setActiveTab] = useState<"store" | "chat" | "feedback">("store");

  return (
    <div className="flex-1 w-full bg-gray-100 flex items-center justify-center py-0 md:py-12">
      {/* Mobile Device Simulator Container */}
      <div className="w-full h-[100dvh] md:h-[844px] max-w-md bg-white md:rounded-[40px] md:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col relative border-0 md:border-[8px] border-[#121212]">
        
        {/* Dynamic Header */}
        <header className="px-6 pt-12 pb-6 bg-accent text-accent-fg shrink-0 relative">
          <button 
            onClick={onBack}
            className="absolute top-6 left-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col items-center text-center mt-4">
            <div className="w-20 h-20 bg-white rounded-full p-1 shadow-md mb-3">
              <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/textile-logo/160/160" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <h1 className="text-xl font-medium tracking-tight">Acme Textiles</h1>
            <p className="text-sm text-accent-fg/80 mt-1">Premium fabrics and wholesale</p>
            <div className="flex gap-2 mt-3">
              <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">B2B</span>
              <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">Verified</span>
            </div>
          </div>
        </header>

        {/* Tab Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
          {activeTab === "store" && <StoreView />}
          {activeTab === "chat" && <ChatView />}
          {activeTab === "feedback" && <FeedbackView />}
        </main>

        {/* Bottom Navigation */}
        <nav className="shrink-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center pb-8 md:pb-4">
          <button 
            onClick={() => setActiveTab("store")}
            className={clsx("flex flex-col items-center gap-1", activeTab === "store" ? "text-accent" : "text-gray-400 hover:text-gray-600")}
          >
            <Storefront size={24} weight={activeTab === "store" ? "fill" : "regular"} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Store</span>
          </button>
          <button 
             onClick={() => setActiveTab("chat")}
             className={clsx("flex flex-col items-center gap-1", activeTab === "chat" ? "text-accent" : "text-gray-400 hover:text-gray-600")}
          >
            <ChatCircle size={24} weight={activeTab === "chat" ? "fill" : "regular"} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Chat</span>
          </button>
          <button 
             onClick={() => setActiveTab("feedback")}
             className={clsx("flex flex-col items-center gap-1", activeTab === "feedback" ? "text-accent" : "text-gray-400 hover:text-gray-600")}
          >
            <Star size={24} weight={activeTab === "feedback" ? "fill" : "regular"} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Feedback</span>
          </button>
        </nav>

      </div>
    </div>
  );
}

// Subcomponents for tabs

function StoreView() {
  const catalog = [
    { id: 1, name: "Summer Linen Blend", price: "$12/yd", img: "textile-linen" },
    { id: 2, name: "Premium Silk Charmeuse", price: "$45/yd", img: "textile-silk" },
    { id: 3, name: "Organic Cotton Canvas", price: "$8/yd", img: "textile-canvas" },
    { id: 4, name: "Velvet Upholstery Grade", price: "$28/yd", img: "textile-velvet" },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium text-gray-900">Featured Catalog</h2>
        <button className="text-sm font-medium text-accent">View all</button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {catalog.map(item => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="h-32 w-full bg-gray-100 relative">
              <img src={`https://picsum.photos/seed/${item.img}/300/300`} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur rounded text-xs font-semibold text-gray-900">
                {item.price}
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 leading-tight">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatView() {
  const [messages, setMessages] = useState<{role: "user" | "ai", text: string}[]>([
    { role: "ai", text: "Namaste! I am the AI assistant for Acme Textiles. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [showFallback, setShowFallback] = useState(false);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    
    // Mock AI response
    setTimeout(() => {
      if (text.toLowerCase().includes("human") || text.toLowerCase().includes("manager")) {
        setShowFallback(true);
        setMessages(prev => [...prev, { role: "ai", text: "I understand. I am redirecting you to our human support team." }]);
      } else {
        setMessages(prev => [...prev, { role: "ai", text: "We have that in stock! Our summer linen blends start at $12/yd. Would you like to see patterns?" }]);
      }
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col relative h-full">
      {/* Fallback Banner */}
      {showFallback && (
        <div className="absolute top-0 inset-x-0 bg-amber-50 border-b border-amber-200 p-3 z-10 flex items-start gap-3">
          <WarningCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-900 font-medium">Want to speak to a human?</p>
            <button className="text-xs text-amber-700 underline font-medium mt-1">Click here to redirect to WhatsApp Chat.</button>
          </div>
        </div>
      )}

      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={clsx("flex max-w-[85%]", msg.role === "user" ? "self-end" : "self-start")}>
            <div className={clsx("p-3 rounded-2xl text-sm leading-relaxed", 
              msg.role === "user" 
                ? "bg-accent text-accent-fg rounded-br-sm" 
                : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-gray-200 flex flex-col gap-3">
        <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           <button onClick={() => handleSend("What are your holiday timings?")} className="shrink-0 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors whitespace-nowrap">
             Holiday timings?
           </button>
           <button onClick={() => handleSend("Show me luxury collections")} className="shrink-0 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors whitespace-nowrap">
             Luxury collections
           </button>
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend(input)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          />
          <button onClick={() => handleSend(input)} className="p-2.5 bg-accent text-accent-fg rounded-full shrink-0 hover:opacity-90 transition-opacity">
            <PaperPlaneRight size={18} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeedbackView() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <h2 className="text-xl font-medium text-gray-900 mb-2">Leave Feedback</h2>
        <p className="text-sm text-gray-500 mb-8">Your thoughts help us improve our catalog and service.</p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center text-center mt-4">
            <Star size={40} weight="fill" className="text-emerald-500 mb-3" />
            <h3 className="text-base font-medium text-emerald-900 mb-1">Thank you!</h3>
            <p className="text-sm text-emerald-700">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <div className="space-y-6 mt-4">
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map(star => (
                <button 
                  key={star} 
                  onClick={() => setRating(star)}
                  className={clsx("p-2 transition-transform hover:scale-110", star <= rating ? "text-amber-400" : "text-gray-200")}
                >
                  <Star size={40} weight="fill" />
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Detailed Comments</label>
              <textarea 
                rows={4}
                placeholder="What did you like or dislike?"
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
              ></textarea>
            </div>

            <button 
              onClick={() => setSubmitted(true)}
              disabled={rating === 0}
              className="w-full py-3.5 bg-accent text-accent-fg rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
