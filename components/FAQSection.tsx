"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("faq_q1"),
      answer: t("faq_a1")
    },
    {
      question: t("faq_q2"),
      answer: t("faq_a2")
    },
    {
      question: t("faq_q3"),
      answer: t("faq_a3")
    },
    {
      question: t("faq_q4"),
      answer: t("faq_a4")
    }
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white mb-4">{t("faq_heading")}</h2>
        <p className="text-[#8b8ba8]">{t("faq_subheading")}</p>
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
                <div className="px-6 pb-5 pt-1 text-slate-400 text-sm leading-relaxed" dir="auto">
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
