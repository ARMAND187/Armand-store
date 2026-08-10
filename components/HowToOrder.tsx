"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const STEPS = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    keyTitle: "how_step1_title" as const,
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    keyTitle: "how_step2_title" as const,
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    keyTitle: "how_step3_title" as const,
  },
];

export default function HowToOrder() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal-card").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-20 sm:py-24 bg-transparent"
      aria-labelledby="how-to-order-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">Simple process</p>
          <h2
            id="how-to-order-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {t("how_heading")}
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-3 gap-2 sm:gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="glass-card reveal-card flex flex-col items-center justify-start text-center p-3 sm:p-8 gap-1.5 sm:gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <span className="text-xl sm:text-4xl font-black text-blue-500/30 leading-none">{step.num}</span>
              {/* Icon circle */}
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <div className="scale-75 sm:scale-100">{step.icon}</div>
              </div>
              <h3 className="text-[9px] sm:text-sm font-semibold text-slate-200 leading-tight">{t(step.keyTitle)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
