'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import { trackShareStore } from '@/lib/analytics';

export default function ShareStore() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: SITE_CONFIG.name,
      text: 'Check out Armand Store — Digital Products & Services.',
      url: SITE_CONFIG.url,
    };

    // Try native Web Share API first (mobile browsers)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        trackShareStore('native');
        return;
      } catch {
        // User cancelled or share not available — fall through to clipboard
      }
    }

    // Desktop fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.url);
      trackShareStore('copy_link');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleShare}
        id="share-store-btn"
        aria-label="Share Armand Store"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/20 text-slate-300 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {/* Upload/Share icon */}
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        SHARE STORE
      </button>

      {/* Clipboard confirmation toast */}
      {copied && (
        <span
          role="status"
          aria-live="polite"
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-blue-500/20 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg animate-fade-in pointer-events-none"
        >
          Store link copied!
        </span>
      )}
    </div>
  );
}
