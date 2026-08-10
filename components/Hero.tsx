"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";
import ShareStore from "@/components/ShareStore";

// Service icons displayed subtly in the hero
const SERVICE_BADGES = [
  {
    label: "Windows",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
  },
  {
    label: "Gemini",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path d="M12 2C12 2 14.5 7.5 12 12C9.5 7.5 12 2 12 2Z" fill="url(#g1)" />
        <path d="M12 22C12 22 9.5 16.5 12 12C14.5 16.5 12 22 12 22Z" fill="url(#g1)" />
        <path d="M2 12C2 12 7.5 9.5 12 12C7.5 14.5 2 12 2 12Z" fill="url(#g1)" />
        <path d="M22 12C22 12 16.5 14.5 12 12C16.5 9.5 22 12 22 12Z" fill="url(#g1)" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    color: "text-slate-300",
    bg: "bg-white/5 border-white/10",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-8 pb-20 px-4"
      aria-label="Hero"
    >
      {/* Hero glow disc */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none animate-hero-glow"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Animated tag pill */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in animate-float-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
          {t("hero_tag")}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6 animate-fade-in-up">
          ARMAND{" "}
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #818CF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            STORE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
          {t("hero_subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-200">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-message-us"
            className="btn-primary w-full sm:w-auto text-base"
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
            className="btn-ghost w-full sm:w-auto text-base"
            aria-label="View Armand Store services"
          >
            {t("hero_cta_secondary")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Share Store */}
        <div className="flex justify-center mb-10 animate-fade-in-up animation-delay-300">
          <ShareStore />
        </div>

        {/* Service badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in-up animation-delay-300"
          aria-label="Available services"
        >
          {SERVICE_BADGES.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${badge.bg} ${badge.color}`}
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, #050B18)",
        }}
      />
    </section>
  );
}
