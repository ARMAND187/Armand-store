"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL } from "@/config/site";

export default function Header() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/",              label: t("nav_home") || "Home" },
    { href: "/store",         label: t("nav_store") || "Store" },
    { href: "/how-it-works",  label: t("nav_how_it_works") || "How It Works" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center px-4 pt-3 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-3xl transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-[#0c0c0c]/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
            : "bg-[#0c0c0c]/50 backdrop-blur-xl border border-white/[0.06]"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 h-[52px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
            aria-label="Armand Store Home"
          >
            {/* Logo mark */}
            <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 rounded-xl border border-white/15 bg-white/5 group-hover:bg-white/10 group-hover:border-white/25 transition-all duration-300" />
              <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/10 to-transparent" />
              <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2 L3 22 H7.5 L12 12 L16.5 22 H21 Z"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeOpacity="0.9"
                />
                <path d="M 3 17 Q 12 17 22 5 Q 15 12 4 15 Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
            <span className="hidden sm:block font-bold text-[14px] text-zinc-200 tracking-tight">
              ARMAND <span className="text-gradient-hero font-black">STORE</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch={true}
                  className={`relative text-[11px] sm:text-xs font-medium transition-all duration-200 whitespace-nowrap px-2 sm:px-3 py-1.5 rounded-xl ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/45 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-white/70" />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language + CTA */}
          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <div className="flex items-center rounded-xl border border-white/10 overflow-hidden text-[10px] sm:text-[11px] font-semibold bg-white/5">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 sm:px-2.5 sm:py-1.5 transition-colors focus:outline-none ${
                  lang === "en" ? "bg-white/15 text-white" : "text-white/35 hover:text-white/70"
                }`}
                aria-label="Switch to English"
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ku")}
                className={`px-2 py-1 sm:px-2.5 sm:py-1.5 transition-colors focus:outline-none ${
                  lang === "ku" ? "bg-white/15 text-white" : "text-white/35 hover:text-white/70"
                }`}
                aria-label="Switch to Kurdish"
                aria-pressed={lang === "ku"}
              >
                کوردی
              </button>
            </div>

            {/* Telegram CTA pill */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-white bg-white/10 hover:bg-white/18 border border-white/15 hover:border-white/30 rounded-xl px-3 py-1.5 transition-all duration-200 whitespace-nowrap"
            >
              <svg className="w-3 h-3 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="11" fill="white" /><path fill="#24A1DE" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
              </svg>
              Order
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
