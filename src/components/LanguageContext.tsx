"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, nl: string) => string;
  key: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    if (lang !== language) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  const t = (en: string, nl: string) => {
    return language === "en" ? en : nl;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, key: language === "en" ? 1 : 0 }}>
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
      key: 0,
    };
  }
  return context;
}
