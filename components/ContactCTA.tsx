"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 mx-auto"
          aria-hidden="true"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4"
        >
          {t("contact_heading")}
        </h2>

        <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md mx-auto">
          {t("contact_body")}
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-telegram-cta"
          className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="Message Armand Store on Telegram"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
          {t("cta_message_telegram")}
        </a>
      </div>
    </section>
  );
}
