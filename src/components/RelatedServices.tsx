"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

interface RelatedServicesProps {
  currentService: "ai-agents" | "chatbots" | "automations";
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const { t } = useLanguage();

  const services = [
    {
      slug: "ai-agents",
      icon: "🤖",
      title: "AI Agents",
      titleNl: "AI Agents",
      description: "Autonomous systems that handle complex tasks 24/7",
      descriptionNl: "Autonome systemen die complexe taken 24/7 afhandelen",
    },
    {
      slug: "chatbots",
      icon: "💬",
      title: "Chatbots",
      titleNl: "Chatbots",
      description: "Conversational AI that understands context",
      descriptionNl: "Conversationele AI die context begrijpt",
    },
    {
      slug: "automations",
      icon: "⚡",
      title: "Automations",
      titleNl: "Automatisering",
      description: "Eliminate repetitive tasks with smart workflows",
      descriptionNl: "Elimineer repetitieve taken met slimme workflows",
    },
  ];

  const relatedServices = services.filter((s) => s.slug !== currentService);

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-50 dark:bg-charcoal-light">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Related Services", "Gerelateerde Diensten")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12 md:mb-16">
            {t("Explore other services", "Ontdek andere diensten")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {relatedServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 100}>
                <Link
                  href={`/${service.slug}`}
                  className="block p-6 md:p-8 rounded-2xl bg-white dark:bg-charcoal border border-transparent hover:border-lime/30 hover-lift transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal dark:text-white font-mono mb-2 group-hover:text-lime transition-colors">
                        {t(service.title, service.titleNl)}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {t(service.description, service.descriptionNl)}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
