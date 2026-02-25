"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, nl: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    if (lang !== language) {
      setIsTransitioning(true);
      setLanguage(lang);
      localStorage.setItem("language", lang);
      setTimeout(() => setIsTransitioning(false), 50);
    }
  };

  const t = (en: string, nl: string) => {
    return language === "en" ? en : nl;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isTransitioning }}>
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
      isTransitioning: false,
    };
  }
  return context;
}
