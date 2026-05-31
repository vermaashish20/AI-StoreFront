"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface FaqPair {
  id: string;
  question: string;
  answer: string;
}

export interface Webhooks {
  whatsapp: boolean;
  telegram: boolean;
  slack: boolean;
}

export interface PlatformState {
  handle: string;
  businessName: string;
  faqs: FaqPair[];
  webhooks: Webhooks;
  addFaq: (q: string, a: string) => void;
  updateFaq: (id: string, q: string, a: string) => void;
  removeFaq: (id: string) => void;
  updateWebhook: (key: keyof Webhooks, enabled: boolean) => void;
  setHandle: (handle: string) => void;
}

const defaultState: PlatformState = {
  handle: "surat-textiles",
  businessName: "Acme Textiles",
  faqs: [
    { id: "1", question: "What are your holiday timings?", answer: "We are open 10 AM to 4 PM on holidays." },
    { id: "2", question: "Can you ship 500 meters of fabric?", answer: "Yes, we handle wholesale bulk orders." }
  ],
  webhooks: { whatsapp: true, telegram: false, slack: false },
  addFaq: () => {},
  updateFaq: () => {},
  removeFaq: () => {},
  updateWebhook: () => {},
  setHandle: () => {},
};

const PlatformContext = createContext<PlatformState>(defaultState);

export const PlatformProvider = ({ children }: { children: ReactNode }) => {
  const [handle, setHandle] = useState(defaultState.handle);
  const [faqs, setFaqs] = useState<FaqPair[]>(defaultState.faqs);
  const [webhooks, setWebhooks] = useState<Webhooks>(defaultState.webhooks);

  const addFaq = (question: string, answer: string) => {
    setFaqs((prev) => [...prev, { id: Date.now().toString(), question, answer }]);
  };

  const updateFaq = (id: string, question: string, answer: string) => {
    setFaqs((prev) => prev.map((f) => (f.id === id ? { ...f, question, answer } : f)));
  };

  const removeFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  const updateWebhook = (key: keyof Webhooks, enabled: boolean) => {
    setWebhooks((prev) => ({ ...prev, [key]: enabled }));
  };

  return (
    <PlatformContext.Provider value={{ handle, businessName: defaultState.businessName, faqs, webhooks, addFaq, updateFaq, removeFaq, updateWebhook, setHandle }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => useContext(PlatformContext);
