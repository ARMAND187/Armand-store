"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Language, translations, TranslationKey } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("armand-lang");
    if (stored === "en" || stored === "ku") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("armand-lang", newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang][key] as string;
    },
    [lang]
  );

  const isRTL = lang === "ku";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div className={isRTL ? "font-kurdish" : ""}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
