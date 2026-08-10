"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Cinematic background glow — violet + cyan */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.05) 50%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-semibold px-5 py-2 rounded-full mb-10 tracking-wider uppercase animate-float-badge">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" aria-hidden="true" />
          Ready to Order?
        </div>

        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
        >
          GET YOUR{" "}
          <span className="text-gradient-hero">PRODUCT</span>
          <br />
          TODAY
        </h2>

        <div className="divider-glow w-32 mx-auto mb-6" />

        <p className="text-[#8b8ba8] text-base sm:text-lg mb-12 max-w-md mx-auto leading-relaxed">
          {t("contact_body")}
        </p>

        {/* CTA button */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-telegram-cta"
          className="group inline-flex items-center justify-center gap-3 btn-primary text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 rounded-2xl"
          aria-label="Message Armand Store on Telegram channel"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
          {t("cta_message_telegram")}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
