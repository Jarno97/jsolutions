"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-charcoal flex items-center justify-center animate-page-reveal">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-tight">
          J<span className="text-lime">.</span>
        </h1>
        <div className="mt-4 flex justify-center gap-1">
          <div className="w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
