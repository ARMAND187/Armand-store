"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative flex flex-col items-center justify-start overflow-hidden pt-10 sm:pt-20 pb-16 px-4"
      aria-label="Hero"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Animated status pill — minimal white */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in animate-float-badge backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" aria-hidden="true" />
          {t("hero_tag")}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 animate-fade-in-up">
          <span className="text-zinc-200">ARMAND</span>
          <br />
          <span className="text-gradient-hero">STORE</span>
        </h1>

        {/* Thin divider glowing line */}
        <div className="divider-glow w-32 mx-auto mb-6 animate-fade-in animation-delay-100" />

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/40 font-normal mb-10 max-w-md mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          {t("hero_subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animation-delay-300">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-message-us"
            className="inline-flex items-center gap-2 justify-center w-full sm:w-auto text-sm px-7 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/15 hover:border-white/25 hover:shadow-[0_4px_30px_rgba(255,255,255,0.1)] transition-all duration-300"
            aria-label="Message Armand Store on Telegram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
            </svg>
            {t("cta_message_telegram")}
          </a>
        </div>
      </div>
    </section>
  );
}

