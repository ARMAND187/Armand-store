"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #081426 100%)" }}
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
          Ready?
        </div>

        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5"
        >
          READY TO ORDER?
        </h2>

        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-md mx-auto">
          {t("contact_body")}
        </p>

        {/* Main CTA */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-telegram-cta"
          className="group inline-flex items-center justify-center gap-3 btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl"
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

        {/* Sub-note */}
        <p className="mt-5 text-xs text-slate-600">
          {t("contact_heading")} — {t("nav_contact")}
        </p>
      </div>
    </section>
  );
}
