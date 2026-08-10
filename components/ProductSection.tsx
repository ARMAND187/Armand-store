"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";
import { trackProductOrderClick } from "@/lib/analytics";


// ── Intersection Observer hook ────────────────────────────
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
    el.querySelectorAll(".reveal-card").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Shared Telegram CTA Button ────────────────────────────
function TgButton({
  label, id, colorClass = "btn-3d-blue",
}: { label: string; id: string; colorClass?: string; }) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      onClick={() => trackProductOrderClick(label)}
      className={`flex items-center justify-center gap-1 sm:gap-2 w-full text-white font-bold text-[10px] sm:text-sm py-2 sm:py-3 rounded-xl sm:rounded-2xl leading-none tracking-wide btn-3d-base focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05000f] ${colorClass}`}
      aria-label={`Message us about ${label} on Telegram`}
    >
      <TgIcon />
      <span>MESSAGE US</span>
    </a>
  );
}

function TgIcon() {
  return (
    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
    </svg>
  );
}

// ── Tier Row ──────────────────────────────────────────────
function TierRow({ label, price, highlight = false }: { label: string; price: string; highlight?: boolean }) {
  return (
    <div
      className={`flex flex-col xl:flex-row items-start xl:items-center justify-between gap-0.5 xl:gap-0 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 transition-colors ${
        highlight
          ? "bg-red-500/10 border border-red-500/20 hover:bg-red-500/15"
          : "bg-white/[0.035] border border-white/[0.06] hover:bg-white/[0.06]"
      }`}
    >
      <span className={`text-[10px] sm:text-sm font-medium leading-tight ${highlight ? "text-red-300" : "text-slate-300"}`}>{label}</span>
      <span className={`text-[11px] sm:text-sm font-bold whitespace-nowrap tabular-nums ${highlight ? "text-red-400" : "text-white"}`}>{price}</span>
    </div>
  );
}

// ── Windows Card ──────────────────────────────────────────
function WindowsCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card card-glow-blue reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4">

      <div>
        <h3 className="text-[13px] sm:text-base font-bold text-white leading-tight">{t("win_name")}</h3>
        <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{t("win_desc")}</p>
      </div>
      <div className="rounded-xl overflow-hidden flex-1 min-h-[100px] sm:min-h-[200px]">
        <img src="/windows-key.jpg" alt="Windows 10/11 Activation Key"
          className="w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>
      <div>
        <p className="text-xl sm:text-3xl font-extrabold text-white mb-1.5 sm:mb-3 tabular-nums">{t("win_price")}</p>
        <TgButton label={t("win_name")} id="cta-windows" colorClass="btn-3d-blue" />
      </div>
    </article>
  );
}

// ── Gemini Card ───────────────────────────────────────────
function GeminiCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card card-glow-violet reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4">

      <div>
        <h3 className="text-[13px] sm:text-base font-bold text-white leading-tight">{t("gemini_name")}</h3>
        <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{t("gemini_duration")}</p>
      </div>
      <div className="rounded-xl overflow-hidden flex-1 min-h-[100px] sm:min-h-[200px]">
        <img src="/gemini-18month.jpg" alt="Gemini Pro 18 Months subscription"
          className="w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>
      <div>
        <p className="text-xl sm:text-3xl font-extrabold text-white mb-1.5 sm:mb-3 tabular-nums">{t("gemini_price")}</p>
        <TgButton label={t("gemini_name")} id="cta-gemini" colorClass="btn-3d-violet" />
      </div>
    </article>
  );
}

// ── YouTube Card ──────────────────────────────────────────
function YouTubeCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card card-glow-red reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4 col-span-2 md:col-span-2 lg:col-span-1">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <div>
          <h3 className="text-[13px] sm:text-base font-bold text-white leading-tight">{t("yt_name")}</h3>
          <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{t("yt_subtitle")}</p>
        </div>
      </div>

      <div className="space-y-2">
        <TierRow label={t("yt_tier1_label")} price={t("yt_tier1_price")} />
        <TierRow label={t("yt_tier2_label")} price={t("yt_tier2_price")} />
        <div className="relative rounded-xl bg-red-500/10 border border-red-500/30 p-2 sm:p-3 hover:bg-red-500/15 transition-colors">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex-1">
              <span className="inline-flex items-center text-[8px] sm:text-[10px] font-bold text-red-400 bg-red-500/20 px-1.5 sm:px-2 py-0.5 rounded-full mb-1">
                {t("yt_best_offer")}
              </span>
              <p className="text-[10px] sm:text-xs text-red-300 font-medium leading-tight">{t("yt_tier3_label")}</p>
            </div>
            <p className="text-sm sm:text-xl font-extrabold text-red-400 whitespace-nowrap tabular-nums mt-0.5 xl:mt-0">{t("yt_tier3_price")}</p>
          </div>
        </div>
      </div>

      <TgButton label={t("yt_name")} id="cta-youtube" colorClass="btn-3d-red" />
      <p className="text-[9px] sm:text-[11px] text-slate-500 leading-relaxed">{t("yt_disclaimer")}</p>
    </article>
  );
}

// ── TikTok Card ───────────────────────────────────────────
function TikTokCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card card-glow-pink reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4 col-span-2 sm:col-span-1">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-pink-400" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
          </svg>
        </div>
        <h3 className="text-[13px] sm:text-base font-bold text-white leading-tight">{t("tt_name")}</h3>
      </div>

      <div className="space-y-2 flex-1">
        <TierRow label={t("tt_tier1_label")} price={t("tt_tier1_price")} />
        <TierRow label={t("tt_tier2_label")} price={t("tt_tier2_price")} />
        <TierRow label={t("tt_tier3_label")} price={t("tt_tier3_price")} />
      </div>

      <TgButton label={t("tt_name")} id="cta-tiktok" colorClass="btn-3d-pink" />
    </article>
  );
}

// ── Telegram Card ─────────────────────────────────────────
function TelegramCard() {
  const { t } = useLanguage();
  return (
    <article className="glass-card card-glow-sky reveal-card relative p-3 sm:p-6 flex flex-col gap-2 sm:gap-4 col-span-2 sm:col-span-1">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-cyan-500/12 border border-cyan-500/22 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
          </svg>
        </div>
        <h3 className="text-[13px] sm:text-base font-bold text-white leading-tight">{t("tg_name")}</h3>
      </div>

      <div className="space-y-2 flex-1">
        <TierRow label={t("tg_tier1_label")} price={t("tg_tier1_price")} />
        <TierRow label={t("tg_tier2_label")} price={t("tg_tier2_price")} />
        <TierRow label={t("tg_tier3_label")} price={t("tg_tier3_price")} />
      </div>
      <p className="text-xs text-slate-500">{t("tg_note")}</p>

      <TgButton label={t("tg_name")} id="cta-telegram-members" colorClass="btn-3d-sky" />
    </article>
  );
}

// ── Main Section ──────────────────────────────────────────
export default function ProductSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const { t } = useLanguage();
  const gridRef = useReveal();

  if (featuredOnly) {
    return (
      <section id="services" className="relative py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Featured Services</p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Top Products
            </h2>
            <p className="text-[#8b8ba8] text-base sm:text-lg max-w-md mx-auto">Our most popular digital products and social media services.</p>
          </div>

          <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 mb-12">
            <WindowsCard />
            <GeminiCard />
            <YouTubeCard />
          </div>

          <div className="text-center">
            <a href="/store" className="btn-ghost inline-flex items-center gap-2">
              View Full Store
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="store" className="relative pt-24 sm:pt-32 pb-8 sm:pb-12" aria-labelledby="store-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 id="store-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            PREMIUM <span className="text-gradient-hero">CATALOG</span>
          </h1>
          <p className="text-[#8b8ba8] text-lg sm:text-xl max-w-2xl mx-auto mb-8">{t("products_subheading")}</p>
          <div className="flex justify-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse hover:animate-none hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
              </svg>
              {t("cta_message_telegram")}
            </a>
          </div>
        </div>

        <div ref={gridRef} className="space-y-20">
          {/* Software & AI Category */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Software & AI</h2>
              <div className="h-px bg-violet-500/20 flex-1" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              <WindowsCard />
              <GeminiCard />
            </div>
          </div>

          {/* Social Media Category */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Social Media Growth</h2>
              <div className="h-px bg-cyan-500/20 flex-1" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              <YouTubeCard />
              <TikTokCard />
              <TelegramCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
