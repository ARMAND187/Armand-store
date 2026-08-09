"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function HowToOrder() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("how_step1_title"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: t("how_step2_title"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: t("how_step3_title"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="how-to-order-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            id="how-to-order-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            {t("how_heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden sm:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                {/* Number badge */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-blue-400 mb-0.5">{step.number}</span>
                  <span className="text-blue-600">{step.icon}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-800">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
