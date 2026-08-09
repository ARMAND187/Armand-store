"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

// ── Windows Card ─────────────────────────────────────────────
function WindowsCard() {
  const { t } = useLanguage();
  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" aria-hidden="true" />
      <div className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-600" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{t("win_name")}</h3>
        <p className="text-sm text-gray-500 mb-4">{t("win_desc")}</p>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-extrabold text-gray-900">{t("win_price")}</span>
          </div>
        </div>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-windows"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label={`Message us about ${t("win_name")}`}
        >
          <TelegramIcon />
          {t("cta_message")}
        </a>
      </div>
    </article>
  );
}

// ── Gemini Card ──────────────────────────────────────────────
function GeminiCard() {
  const { t } = useLanguage();
  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500" aria-hidden="true" />
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-4" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            <defs>
              <linearGradient id="gemini-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path
              d="M12 2C12 2 14.5 7.5 12 12C9.5 7.5 12 2 12 2Z"
              fill="url(#gemini-grad)"
            />
            <path
              d="M12 22C12 22 9.5 16.5 12 12C14.5 16.5 12 22 12 22Z"
              fill="url(#gemini-grad)"
            />
            <path
              d="M2 12C2 12 7.5 9.5 12 12C7.5 14.5 2 12 2 12Z"
              fill="url(#gemini-grad)"
            />
            <path
              d="M22 12C22 12 16.5 14.5 12 12C16.5 9.5 22 12 22 12Z"
              fill="url(#gemini-grad)"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{t("gemini_name")}</h3>
        <p className="text-sm text-gray-500 mb-4">{t("gemini_duration")}</p>
        <span className="text-2xl font-extrabold text-gray-900">{t("gemini_price")}</span>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-gemini"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          aria-label={`Message us about ${t("gemini_name")}`}
        >
          <TelegramIcon />
          {t("cta_message")}
        </a>
      </div>
    </article>
  );
}

// ── YouTube Card ─────────────────────────────────────────────
function YouTubeCard() {
  const { t } = useLanguage();
  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-red-600" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-0.5">{t("yt_name")}</h3>
        <p className="text-xs text-gray-400 mb-4">{t("yt_subtitle")}</p>

        {/* Tiers */}
        <div className="space-y-2 mb-5">
          {/* Tier 1 */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("yt_tier1_label")}</span>
            <span className="text-sm font-bold text-gray-900 whitespace-nowrap ml-2">{t("yt_tier1_price")}</span>
          </div>
          {/* Tier 2 */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("yt_tier2_label")}</span>
            <span className="text-sm font-bold text-gray-900 whitespace-nowrap ml-2">{t("yt_tier2_price")}</span>
          </div>
          {/* Tier 3 — BEST OFFER */}
          <div className="relative flex items-center justify-between bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  {t("yt_best_offer")}
                </span>
              </div>
              <span className="text-sm text-gray-700 font-medium">{t("yt_tier3_label")}</span>
            </div>
            <span className="text-base font-extrabold text-red-600 whitespace-nowrap ml-3">{t("yt_tier3_price")}</span>
          </div>
        </div>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-youtube"
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          aria-label={`Message us about ${t("yt_name")}`}
        >
          <TelegramIcon />
          {t("cta_message")}
        </a>

        <p className="mt-3 text-xs text-gray-400 leading-relaxed">{t("yt_disclaimer")}</p>
      </div>
    </article>
  );
}

// ── TikTok Card ──────────────────────────────────────────────
function TikTokCard() {
  const { t } = useLanguage();
  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-600" aria-hidden="true" />
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{t("tt_name")}</h3>
        <div className="space-y-2 mb-5 mt-3">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tt_tier1_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tt_tier1_price")}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tt_tier2_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tt_tier2_price")}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tt_tier3_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tt_tier3_price")}</span>
          </div>
        </div>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-tiktok"
          className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          aria-label={`Message us about ${t("tt_name")}`}
        >
          <TelegramIcon />
          {t("cta_message")}
        </a>
      </div>
    </article>
  );
}

// ── Telegram Card ─────────────────────────────────────────────
function TelegramCard() {
  const { t } = useLanguage();
  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500" aria-hidden="true" />
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-sky-500" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{t("tg_name")}</h3>
        <div className="space-y-2 mb-4 mt-3">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tg_tier1_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tg_tier1_price")}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tg_tier2_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tg_tier2_price")}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-700 font-medium">{t("tg_tier3_label")}</span>
            <span className="text-sm font-bold text-gray-900 ml-2">{t("tg_tier3_price")}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-4">{t("tg_note")}</p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-telegram"
          className="flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          aria-label={`Message us about ${t("tg_name")}`}
        >
          <TelegramIcon />
          {t("cta_message")}
        </a>
      </div>
    </article>
  );
}

// ── Shared Icon ──────────────────────────────────────────────
function TelegramIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
    </svg>
  );
}

// ── Main Product Section ──────────────────────────────────────
export default function ProductSection() {
  const { t } = useLanguage();
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight"
          >
            {t("products_heading")}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">{t("products_subheading")}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <WindowsCard />
          <GeminiCard />
          <YouTubeCard />
          <TikTokCard />
          <TelegramCard />
        </div>
      </div>
    </section>
  );
}
