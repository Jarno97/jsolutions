"use client";

import { useLanguage } from "./LanguageContext";
import { ReactNode, useEffect, useState } from "react";

export default function LanguageWrapper({ children }: { children: ReactNode }) {
  const { isAnimating } = useLanguage();
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setFlash(true);
      const timer = setTimeout(() => setFlash(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        flash ? "opacity-0" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
}
