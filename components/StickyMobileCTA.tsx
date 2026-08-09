"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function StickyMobileCTA() {
  const { t } = useLanguage();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      role="complementary"
      aria-label="Quick Telegram contact"
    >
      <div
        className="border-t border-[rgba(96,165,250,0.15)] px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]"
        style={{
          background: "rgba(8,20,38,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-telegram-cta"
          className="flex items-center justify-center gap-2.5 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 rounded-2xl transition-colors border border-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          style={{ boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
          aria-label="Message Armand Store on Telegram channel"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
          💬 {t("cta_message_telegram")}
        </a>
      </div>
    </div>
  );
}
