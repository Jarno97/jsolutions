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
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-100 dark:bg-zinc-900">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-4 md:mb-6">
            {t("From idea to impact", "Van idee naar impact")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 md:mb-16 max-w-xl mx-auto">
            {t("Simple process, powerful results.", "Simpel proces, krachtige resultaten.")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-6 md:p-8 h-full">
                  {/* Number */}
                  <div className="text-5xl font-bold text-zinc-100 dark:text-zinc-700 absolute top-4 right-6">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                      {t(step.title, step.titleNl)}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {t(step.description, step.descriptionNl)}
                    </p>
                    <div className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      {t(step.duration, step.durationNl)}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10">
            <svg className="w-full h-4" preserveAspectRatio="none">
              <line
                x1="12%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-zinc-300 dark:text-zinc-700"
              />
            </svg>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
