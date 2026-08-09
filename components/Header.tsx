"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { TELEGRAM_URL, SOCIAL_LINKS } from "@/config/site";

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
        setConnectOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConnectOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
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
            <div className="w-9 h-9 relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
              {/* Main Logo Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#0a1930] to-[#040914] border border-blue-500/30 rounded-xl flex items-center justify-center shadow-xl shadow-blue-900/20 overflow-hidden">
                 {/* Shiny glass overlay */}
                 <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                 {/* The SVG Logo */}
                 <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2L2 22H7L9.5 17H14.5L17 22H22L12 2Z" fill="url(#blue-grad)" />
                   <path d="M12 2L2 22H7L12 12L17 22H22L12 2Z" fill="url(#cyan-grad)" opacity="0.8" />
                   <path d="M10.75 14.5L12 12L13.25 14.5H10.75Z" fill="#ffffff" />
                   <defs>
                     <linearGradient id="blue-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#60A5FA" />
                       <stop offset="1" stopColor="#2563EB" />
                     </linearGradient>
                     <linearGradient id="cyan-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#22D3EE" />
                       <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                 </svg>
              </div>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              ARMAND <span className="text-blue-400">STORE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_home") || "Home"}
            </Link>
            <Link href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_services") || "Services"}
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {t("nav_contact") || "Contact"}
            </Link>
            
            {/* Connect Dropdown */}
            <div className="relative" ref={connectRef}>
              <button 
                onClick={() => setConnectOpen(!connectOpen)}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 focus:outline-none ${connectOpen ? "text-white" : "text-slate-400 hover:text-white"}`}
                aria-haspopup="true"
                aria-expanded={connectOpen}
              >
                Connect
                <svg className={`w-4 h-4 transition-transform duration-200 ${connectOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {connectOpen && (
                <div className="absolute top-full mt-4 right-0 w-56 bg-[#081426] border border-white/10 rounded-2xl shadow-xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2.5 mb-1 border-b border-white/5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Connect With Us</p>
                  </div>
                  <SocialMenuItem href={SOCIAL_LINKS.telegram} icon={<TelegramIcon className="w-4 h-4 text-sky-400"/>} label="Telegram" onClick={() => setConnectOpen(false)} />
                  <SocialMenuItem href={SOCIAL_LINKS.instagram} icon={<InstagramIcon className="w-4 h-4 text-pink-500"/>} label="Instagram" onClick={() => setConnectOpen(false)} />
                  <SocialMenuItem href={SOCIAL_LINKS.tiktok} icon={<TikTokIcon className="w-4 h-4 text-white"/>} label="TikTok" onClick={() => setConnectOpen(false)} />
                  <SocialMenuItem href={SOCIAL_LINKS.facebook} icon={<FacebookIcon className="w-4 h-4 text-blue-500"/>} label="Facebook" onClick={() => setConnectOpen(false)} />
                </div>
              )}
            </div>
          </nav>

          {/* Right: lang switch */}
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
              {t("nav_home") || "Home"}
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {t("nav_services") || "Services"}
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {t("nav_contact") || "Contact"}
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Connect With Us</p>
              <SocialMenuItem href={SOCIAL_LINKS.telegram} icon={<TelegramIcon className="w-4 h-4 text-sky-400"/>} label="Telegram" onClick={() => setMobileOpen(false)} />
              <SocialMenuItem href={SOCIAL_LINKS.instagram} icon={<InstagramIcon className="w-4 h-4 text-pink-500"/>} label="Instagram" onClick={() => setMobileOpen(false)} />
              <SocialMenuItem href={SOCIAL_LINKS.tiktok} icon={<TikTokIcon className="w-4 h-4 text-white"/>} label="TikTok" onClick={() => setMobileOpen(false)} />
              <SocialMenuItem href={SOCIAL_LINKS.facebook} icon={<FacebookIcon className="w-4 h-4 text-blue-500"/>} label="Facebook" onClick={() => setMobileOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function SocialMenuItem({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors group"
    >
      <div className="flex items-center gap-3">
        {icon}
        {label}
      </div>
      <span className="text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100">&rarr;</span>
    </a>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.65-2.22 2.14-5.08 3.22-8.02 3.12-2.79-.1-5.46-1.27-7.46-3.23-2.02-1.99-3.2-4.71-3.3-7.58-.1-2.88 1.05-5.69 3.08-7.7 2.03-1.99 4.79-3.15 7.63-3.19h.3v3.97c-1.62.08-3.17.68-4.4 1.75-1.22 1.05-2.06 2.5-2.33 4.08-.28 1.56.03 3.21.91 4.54.89 1.35 2.22 2.37 3.79 2.8 1.62.45 3.34.4 4.9-.19 1.51-.57 2.78-1.55 3.65-2.88.88-1.34 1.33-2.95 1.3-4.57V.02z"/>
    </svg>
  );
}
