"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

// ── Intersection Observer hook for reveal animation ───────
function useReveal() {
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
      { threshold: 0.12 }
    );
    const cards = el.querySelectorAll(".reveal-card");
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Shared Telegram CTA Button ────────────────────────────
function TgButton({
  label,
  id,
  colorClass = "bg-blue-600 hover:bg-blue-500 shadow-blue-600/25",
}: {
  label: string;
  id: string;
  colorClass?: string;
}) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className={`flex items-center justify-center gap-2 w-full text-white font-semibold text-sm py-3 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2F] ${colorClass}`}
      aria-label={`Message us about ${label} on Telegram`}
    >
      <TgIcon />
      <span>MESSAGE US</span>
    </a>
  );
}

function TgIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
    </svg>
  );
}

// ── Tier Row ──────────────────────────────────────────────
function TierRow({ label, price, highlight = false }: { label: string; price: string; highlight?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl px-4 py-3 ${
        highlight
          ? "bg-red-500/10 border border-red-500/20"
          : "bg-white/[0.04] border border-white/[0.06]"
      }`}
    >
      <span className={`text-sm font-medium ${highlight ? "text-red-300" : "text-slate-300"}`}>{label}</span>
      <span className={`text-sm font-bold ml-3 whitespace-nowrap ${highlight ? "text-red-400" : "text-white"}`}>{price}</span>
    </div>
  );
}

// ── Card Top Accent Bar ───────────────────────────────────
function AccentBar({ gradient }: { gradient: string }) {
  return <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-[22px] ${gradient}`} aria-hidden="true" />;
}

// ── Windows Card ──────────────────────────────────────────
function WindowsCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card reveal-card relative p-6 flex flex-col gap-4">
      <AccentBar gradient="bg-gradient-to-r from-blue-500 to-blue-700" />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{t("win_name")}</h3>
          <p className="text-xs text-slate-400">{t("win_desc")}</p>
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-3xl font-extrabold text-white mb-1">{t("win_price")}</p>
      </div>
      <TgButton label={t("win_name")} id="cta-windows" />
    </article>
  );
}

// ── Gemini Card ───────────────────────────────────────────
function GeminiCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card reveal-card relative p-6 flex flex-col gap-4">
      <AccentBar gradient="bg-gradient-to-r from-violet-500 to-blue-500" />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <defs>
              <linearGradient id="gem-v2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <path d="M12 2C12 2 14.5 7.5 12 12C9.5 7.5 12 2 12 2Z" fill="url(#gem-v2)" />
            <path d="M12 22C12 22 9.5 16.5 12 12C14.5 16.5 12 22 12 22Z" fill="url(#gem-v2)" />
            <path d="M2 12C2 12 7.5 9.5 12 12C7.5 14.5 2 12 2 12Z" fill="url(#gem-v2)" />
            <path d="M22 12C22 12 16.5 14.5 12 12C16.5 9.5 22 12 22 12Z" fill="url(#gem-v2)" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{t("gemini_name")}</h3>
          <p className="text-xs text-slate-400">{t("gemini_duration")}</p>
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-3xl font-extrabold text-white mb-1">{t("gemini_price")}</p>
      </div>
      <TgButton label={t("gemini_name")} id="cta-gemini" colorClass="bg-violet-600 hover:bg-violet-500 shadow-violet-600/25" />
    </article>
  );
}

// ── YouTube Card ──────────────────────────────────────────
function YouTubeCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card reveal-card relative p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
      <AccentBar gradient="bg-gradient-to-r from-red-500 to-red-700" />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-400" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{t("yt_name")}</h3>
          <p className="text-xs text-slate-400">{t("yt_subtitle")}</p>
        </div>
      </div>

      <div className="space-y-2">
        <TierRow label={t("yt_tier1_label")} price={t("yt_tier1_price")} />
        <TierRow label={t("yt_tier2_label")} price={t("yt_tier2_price")} />
        {/* BEST OFFER */}
        <div className="relative rounded-xl bg-red-500/10 border border-red-500/30 p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <span className="inline-flex items-center text-[10px] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full mb-1">
                {t("yt_best_offer")}
              </span>
              <p className="text-xs text-red-300 font-medium leading-tight">{t("yt_tier3_label")}</p>
            </div>
            <p className="text-xl font-extrabold text-red-400 whitespace-nowrap">{t("yt_tier3_price")}</p>
          </div>
        </div>
      </div>

      <TgButton label={t("yt_name")} id="cta-youtube" colorClass="bg-red-600 hover:bg-red-500 shadow-red-600/20" />
      <p className="text-[11px] text-slate-500 leading-relaxed">{t("yt_disclaimer")}</p>
    </article>
  );
}

// ── TikTok Card ───────────────────────────────────────────
function TikTokCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card reveal-card relative p-6 flex flex-col gap-4">
      <AccentBar gradient="bg-gradient-to-r from-slate-400 to-slate-600" />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-white">{t("tt_name")}</h3>
      </div>

      <div className="space-y-2 flex-1">
        <TierRow label={t("tt_tier1_label")} price={t("tt_tier1_price")} />
        <TierRow label={t("tt_tier2_label")} price={t("tt_tier2_price")} />
        <TierRow label={t("tt_tier3_label")} price={t("tt_tier3_price")} />
      </div>

      <TgButton label={t("tt_name")} id="cta-tiktok" colorClass="bg-white/10 hover:bg-white/15 border border-white/10 shadow-none" />
    </article>
  );
}

// ── Telegram Card ─────────────────────────────────────────
function TelegramCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card reveal-card relative p-6 flex flex-col gap-4">
      <AccentBar gradient="bg-gradient-to-r from-sky-400 to-blue-500" />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-400" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-white">{t("tg_name")}</h3>
      </div>

      <div className="space-y-2 flex-1">
        <TierRow label={t("tg_tier1_label")} price={t("tg_tier1_price")} />
        <TierRow label={t("tg_tier2_label")} price={t("tg_tier2_price")} />
        <TierRow label={t("tg_tier3_label")} price={t("tg_tier3_price")} />
      </div>
      <p className="text-xs text-slate-500">{t("tg_note")}</p>

      <TgButton label={t("tg_name")} id="cta-telegram-members" colorClass="bg-sky-600 hover:bg-sky-500 shadow-sky-600/20" />
    </article>
  );
}

// ── Main Section ──────────────────────────────────────────
export default function ProductSection() {
  const { t } = useLanguage();
  const gridRef = useReveal();

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #081426 50%, #050B18 100%)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">What we offer</p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            {t("products_heading")}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">{t("products_subheading")}</p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
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
