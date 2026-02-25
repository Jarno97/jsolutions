"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, nl: string) => string;
  isAnimating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevLang = useRef<Language>("nl");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
      prevLang.current = saved;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    if (lang !== language) {
      setIsAnimating(true);
      prevLang.current = language;
      setLanguage(lang);
      localStorage.setItem("language", lang);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const t = (en: string, nl: string) => {
    return language === "en" ? en : nl;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isAnimating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Return default values during SSR
  if (!context) {
    return {
      language: "nl" as Language,
      setLanguage: () => {},
      t: (en: string, nl: string) => nl, // Default to Dutch during SSR
      isAnimating: false,
    };
  }
  return context;
}
