"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/config/site";

const FOOTER_SOCIAL = [
  {
    key: "telegram" as const,
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
      </svg>
    ),
  },
  {
    key: "instagram" as const,
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "tiktok" as const,
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
      </svg>
    ),
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-transparent pb-12 pt-4 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg"
            aria-label="Armand Store Home"
          >
            <div className="w-9 h-9 relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-700 rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
              {/* Main Logo Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#180a3e] to-[#05000f] border border-violet-500/30 rounded-xl flex items-center justify-center shadow-xl shadow-violet-900/20 overflow-hidden">
                 {/* Shiny glass overlay */}
                 <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                 {/* The SVG Logo */}
                 <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2L2 22H7L9.5 17H14.5L17 22H22L12 2Z" fill="url(#violet-grad-footer)" />
                   <path d="M12 2L2 22H7L12 12L17 22H22L12 2Z" fill="url(#cyan-grad-footer)" opacity="0.85" />
                   <path d="M10.75 14.5L12 12L13.25 14.5H10.75Z" fill="#ffffff" />
                   <defs>
                     <linearGradient id="violet-grad-footer" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#a78bfa" />
                       <stop offset="1" stopColor="#7c3aed" />
                     </linearGradient>
                     <linearGradient id="cyan-grad-footer" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#67e8f9" />
                       <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                 </svg>
              </div>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              ARMAND <span className="text-violet-400">STORE</span>
            </span>
          </Link>

          <p className="text-[#55556a] text-sm max-w-xs">{t("footer_tagline")}</p>

          {/* No social icons here (moved to Social Section) */}

          <p className="text-[#55556a] text-sm">{t("footer_copy")}</p>
        </div>
      </div>
    </footer>
  );
}
