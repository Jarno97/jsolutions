"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";

interface UseCase {
  icon: string;
  title: string;
  titleNl: string;
  description: string;
  descriptionNl: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

export default function UseCases({ useCases }: UseCasesProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-50 dark:bg-charcoal-light">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Use Cases", "Gebruiksmogelijkheden")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("What can it do?", "Wat kan het doen?")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
            {t("Real applications for real businesses.", "Echte toepassingen voor echte bedrijven.")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((useCase, index) => (
              <FadeIn key={index} delay={index * 80}>
                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-charcoal border border-transparent hover:border-lime/30 hover-lift transition-all duration-300 h-full group">
                  <span className="text-4xl mb-4 block">{useCase.icon}</span>
                  <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 font-mono">
                    {t(useCase.title, useCase.titleNl)}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {t(useCase.description, useCase.descriptionNl)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
