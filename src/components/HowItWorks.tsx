"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

const steps = [
  {
    number: "01",
    title: "Discovery",
    titleNl: "Ontdekking",
    description: "We talk about your problem. I learn your workflows, identify bottlenecks, and propose a solution that fits your needs.",
    descriptionNl: "We praten over je probleem. Ik leer je workflows, identificeer knelpunten en stel een oplossing voor die bij je past.",
    duration: "30-60 min call",
    durationNl: "30-60 min gesprek",
  },
  {
    number: "02",
    title: "Build",
    titleNl: "Bouwen",
    description: "I build the automation, agent, or chatbot. You get updates along the way and can test at each milestone.",
    descriptionNl: "Ik bouw de automatisering, agent of chatbot. Je krijgt updates en kunt testen bij elke mijlpaal.",
    duration: "1-4 weeks",
    durationNl: "1-4 weken",
  },
  {
    number: "03",
    title: "Deploy & Train",
    titleNl: "Launch & Trainen",
    description: "We launch it together. I make sure everything works smoothly and train your team if needed.",
    descriptionNl: "We lanceren samen. Ik zorg dat alles soepel werkt en train je team als dat nodig is.",
    duration: "1-2 days",
    durationNl: "1-2 dagen",
  },
  {
    number: "04",
    title: "Support",
    titleNl: "Ondersteuning",
    description: "Stuck on something? Need changes? I'm here to help. Monthly retainers available for ongoing improvements.",
    descriptionNl: "Vastgelopen? Veranderingen nodig? Ik help je. Maandelijkse ondersteuning beschikbaar voor doorlopende verbeteringen.",
    duration: "Ongoing",
    durationNl: "Doorlopend",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-100 dark:bg-charcoal-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-stripes dark:bg-stripes-dark opacity-50" />
      
      <FadeIn>
        <div className="max-w-6xl mx-auto relative">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("How it works", "Hoe het werkt")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("From idea to impact", "Van idee naar impact")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
            {t("Simple process, powerful results.", "Simpel proces, krachtige resultaten.")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative bg-white dark:bg-charcoal rounded-2xl p-6 md:p-8 h-full border border-transparent hover:border-lime/30 transition-all duration-300 group">
                  {/* Number - large background */}
                  <span className="absolute top-2 right-4 text-6xl md:text-7xl font-bold text-zinc-100 dark:text-zinc-800 select-none font-mono group-hover:text-lime/20 transition-colors">
                    {step.number}
                  </span>

                  {/* Content */}
                  <div className="relative pt-8">
                    <div className="absolute -top-0 left-4 px-3 py-1 bg-charcoal dark:bg-white rounded text-xs font-medium text-white dark:text-charcoal font-mono">
                      {t(step.duration, step.durationNl)}
                    </div>
                    
                    <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 font-mono">
                      {t(step.title, step.titleNl)}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {t(step.description, step.descriptionNl)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-[108px] h-0.5 -z-10">
            <div className="h-full w-full bg-zinc-200 dark:bg-zinc-700" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
