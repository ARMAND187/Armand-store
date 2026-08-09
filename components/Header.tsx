"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050B18]/90 backdrop-blur-xl border-b border-[rgba(96,165,250,0.10)] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Armand Store Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/30 group-hover:shadow-blue-500/50 transition-shadow">
              <span className="text-white font-bold text-sm" aria-hidden="true">A</span>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              ARMAND <span className="text-blue-400">STORE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_home")}
            </Link>
            <Link href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_services")}
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_contact")}
            </Link>
          </nav>

          {/* Right: lang switch + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <div className="flex items-center rounded-lg border border-[rgba(96,165,250,0.18)] overflow-hidden text-xs font-semibold bg-[rgba(13,27,47,0.60)]">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 transition-colors focus:outline-none ${
                  lang === "en"
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Switch to English"
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ku")}
                className={`px-2.5 py-1.5 transition-colors focus:outline-none ${
                  lang === "ku"
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Switch to Kurdish"
                aria-pressed={lang === "ku"}
              >
                کوردی
              </button>
            </div>

            {/* Desktop CTA */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18]"
              aria-label="Message Armand Store on Telegram"
            >
              <TelegramIcon className="w-4 h-4" />
              {t("cta_message")}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[rgba(96,165,250,0.10)] py-4 space-y-1 bg-[#081426]/95 backdrop-blur-xl -mx-4 px-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {t("nav_home")}
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {t("nav_services")}
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {t("nav_contact")}
            </Link>
            <div className="pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/25"
                aria-label="Message Armand Store on Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
                {t("cta_message_telegram")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
    </svg>
  );
}
