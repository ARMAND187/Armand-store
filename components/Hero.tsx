"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 sm:pt-20 sm:pb-28"
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Soft blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
          {t("hero_tag")}
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4 leading-none animate-fade-in-up">
          ARMAND{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            STORE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
          {t("hero_subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animation-delay-200">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-message-us"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base px-7 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Message Armand Store on Telegram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
            </svg>
            {t("hero_cta_primary")}
          </a>
          <a
            href="#services"
            id="hero-view-services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-bold text-base px-7 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="View Armand Store services"
          >
            {t("hero_cta_secondary")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
