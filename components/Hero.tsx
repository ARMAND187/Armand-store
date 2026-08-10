"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";
import ShareStore from "@/components/ShareStore";

const SERVICE_BADGES = [
  { label: "Windows",  color: "text-blue-300",   bg: "bg-blue-500/8 border-blue-500/15" },
  { label: "Gemini",   color: "text-violet-300",  bg: "bg-violet-500/8 border-violet-500/15" },
  { label: "YouTube",  color: "text-red-300",     bg: "bg-red-500/8 border-red-500/15" },
  { label: "TikTok",   color: "text-slate-300",   bg: "bg-white/4 border-white/8" },
  { label: "Telegram", color: "text-cyan-300",    bg: "bg-cyan-500/8 border-cyan-500/15" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative flex flex-col items-center justify-start overflow-hidden pt-16 sm:pt-28 pb-16 px-4"
      aria-label="Hero"
    >
      {/* Large hero glow core */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none animate-hero-glow"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.06) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Animated status pill */}
        <div className="inline-flex items-center gap-2.5 border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-semibold px-5 py-2 rounded-full mb-6 animate-fade-in animate-float-badge">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" aria-hidden="true" />
          {t("hero_tag")}
        </div>

        {/* Main heading — two-tone: white + animated gradient */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5 animate-fade-in-up"
        >
          <span className="text-white">ARMAND</span>
          <br />
          <span className="text-gradient-hero">STORE</span>
        </h1>

        {/* Thin divider glowing line */}
        <div className="divider-glow w-48 mx-auto mb-5 animate-fade-in animation-delay-100" />

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#8b8ba8] font-medium mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          {t("hero_subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 animate-fade-in-up animation-delay-300">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-message-us"
            className="btn-primary w-full sm:w-auto text-base px-7 py-3.5"
            aria-label="Message Armand Store on Telegram channel"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
            </svg>
            {t("cta_message_telegram")}
          </a>
          <a
            href="#services"
            id="hero-view-services"
            className="btn-ghost w-full sm:w-auto text-base px-7 py-3.5"
            aria-label="View Armand Store services"
          >
            {t("hero_cta_secondary")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Share Store */}
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-400">
          <ShareStore />
        </div>

        {/* Service badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 animate-fade-in-up animation-delay-500"
          aria-label="Available services"
        >
          {SERVICE_BADGES.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium tracking-wide ${badge.bg} ${badge.color}`}
            >
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
