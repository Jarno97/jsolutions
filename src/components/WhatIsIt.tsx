"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";

interface WhatIsItProps {
  title: string;
  titleNl: string;
  description: string;
  descriptionNl: string;
  features?: { text: string; textNl: string }[];
  icon: string;
}

export default function WhatIsIt({ title, titleNl, description, descriptionNl, features, icon }: WhatIsItProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left column - Icon + Title + Description */}
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime mb-6">
                {t("What is it?", "Wat is het?")}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-tight">
                {t(title, titleNl)}
              </h2>
              <div className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                {t(description, descriptionNl).split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right column - Visual + Features */}
            <div className="relative">
              <div className="bg-zinc-50 dark:bg-charcoal-light rounded-2xl p-8 md:p-10 border border-zinc-100 dark:border-zinc-800">
                <span className="text-6xl mb-6 block">{icon}</span>
                
                {features && features.length > 0 && (
                  <div className="space-y-4 mt-6">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300 font-mono text-sm">
                          {t(feature.text, feature.textNl)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-lime/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-charcoal/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
