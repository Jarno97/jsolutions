"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

interface ServiceHeroProps {
  title: string;
  titleNl: string;
  subtitle: string;
  subtitleNl: string;
  cta: string;
  ctaNl: string;
  icon: string;
}

export default function ServiceHero({ title, titleNl, subtitle, subtitleNl, cta, ctaNl, icon }: ServiceHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-6 py-24 text-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-[20%] left-[5%] w-16 h-16 border-2 border-lime/20 rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[25%] left-[8%] w-12 h-12 border border-charcoal/10 rotate-45 hidden lg:block animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[25%] right-[8%] w-20 h-20 border border-charcoal/10 -rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-[20%] right-[6%] w-14 h-14 border-2 border-lime/15 rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '4.5s' }} />
      <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-lime/60 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 bg-concrete/50 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '3s' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Icon */}
        <span className="text-6xl mb-6 block">{icon}</span>
        
        {/* Tagline */}
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-concrete mb-6 animate-reveal">
          {t("Service", "Dienst")}
        </p>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal dark:text-white max-w-3xl mx-auto mb-6 md:mb-8 leading-[1.1] animate-reveal animation-delay-200">
          {t(title, titleNl)}
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed animate-reveal animation-delay-300">
          {t(subtitle, subtitleNl)}
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 md:px-10 md:py-5 bg-lime text-charcoal font-bold rounded-full text-base md:text-lg hover-lift btn-accent animate-reveal animation-delay-400"
        >
          {t(cta, ctaNl)}
        </Link>
      </div>
      
      {/* Back to home */}
      <div className="absolute top-4 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-base md:text-sm text-concrete hover:text-lime transition-colors bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("Back", "Terug")}
          </Link>
        </div>
      </div>
    </section>
  );
}
