"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Most digital orders are delivered quickly after payment is confirmed. Time may vary depending on the service."
  },
  {
    question: "Is this safe and legal?",
    answer: "We provide digital products and services. We never ask for your password. You are responsible for using services according to each platform's rules."
  },
  {
    question: "How do I pay?",
    answer: "We accept FIB, FastPay, and ZainCash. Message us first, then we'll guide you through the payment."
  },
  {
    question: "What if I have an issue with my order?",
    answer: "Contact us through Telegram and send your order details. We'll check the issue and help you as soon as possible."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-[#8b8ba8]">Got a question? We've got answers.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div 
              key={i} 
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-violet-500/50' : 'border-white/[0.08]'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <div className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-violet-500/20 text-violet-400' : 'text-slate-400'}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 pt-1 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
