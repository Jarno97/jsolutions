"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "nl" : "en")}
      className="px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-700 dark:text-zinc-300"
      aria-label="Toggle language"
    >
      {language === "en" ? "NL" : "EN"}
    </button>
  );
}
