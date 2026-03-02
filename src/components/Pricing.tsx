"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

interface Tier {
  name: string;
  nameNl: string;
  price: string;
  priceNl: string;
  description: string;
  descriptionNl: string;
  features: string[];
  featuresNl: string[];
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Quick Fix",
    nameNl: "Snelle Oplossing",
    price: "€750",
    priceNl: "€750",
    description: "Perfect for small automations",
    descriptionNl: "Perfect voor kleine automatiseringen",
    features: [
      "1 automation or chatbot",
      "Basic integration",
      "30-day support",
      "1 week delivery",
    ],
    featuresNl: [
      "1 automatisering of chatbot",
      "Basis integratie",
      "30 dagen ondersteuning",
      "1 week levering",
    ],
  },
  {
    name: "Growth",
    nameNl: "Groeien",
    price: "€2,500",
    priceNl: "€2.500",
    description: "For businesses ready to scale",
    descriptionNl: "Voor bedrijven die willen groeien",
    features: [
      "3 automations or chatbots",
      "Advanced integrations",
      "Custom AI training",
      "90-day support",
      "3 week delivery",
    ],
    featuresNl: [
      "3 automatiseringen of chatbots",
      "Geavanceerde integraties",
      "Custom AI training",
      "90 dagen ondersteuning",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    nameNl: "Enterprise",
    price: "Custom",
    priceNl: "Maatwerk",
    description: "Full-scale AI transformation",
    descriptionNl: "Volledige AI-transformatie",
    features: [
      "Unlimited automations",
      "Full system integration",
      "Dedicated support",
      "Monthly optimization",
      "Flexible timeline",
    ],
    featuresNl: [
      "Onbeperkte automatiseringen",
      "Volledige systeemintegratie",
      "Toegewijde ondersteuning",
      "Maandelijkse optimalisatie",
      "Flexibele tijdlijn",
    ],
  },
];

export default function Pricing() {
  const { t, language } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-50 dark:bg-charcoal-light">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Pricing", "Prijzen")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("Simple pricing", "Eenvoudige prijzen")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
            {t("No surprises. Just clear pricing.", "Geen verrassingen. Gewoon duidelijke prijzen.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div
                  className={`relative p-6 md:p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover-lift ${
                    tier.popular
                      ? "bg-charcoal text-white dark:bg-white dark:text-charcoal ring-2 ring-lime"
                      : "bg-white dark:bg-charcoal border border-zinc-200 dark:border-zinc-700 hover:border-lime/50 text-charcoal"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 text-xs font-bold bg-lime text-charcoal rounded-full font-mono uppercase tracking-wide">
                        {t("Most popular", "Meest populair")}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2 font-mono">
                      {t(tier.name, tier.nameNl)}
                    </h3>
                    <p className="text-4xl font-bold mb-2">
                      {t(tier.price, tier.priceNl)}
                    </p>
                    <p className={`text-sm ${tier.popular ? "text-zinc-400 dark:text-zinc-600" : "text-zinc-500"}`}>
                      {t(tier.description, tier.descriptionNl)}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(language === "en" ? tier.features : tier.featuresNl).map((feature, i) => (
                      <li key={i} className={`flex items-center gap-3 text-sm ${tier.popular ? "text-zinc-300 dark:text-zinc-400" : "text-zinc-600 dark:text-zinc-400"}`}>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-lime" : "text-lime"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center px-6 py-3.5 rounded-full font-bold transition-all ${
                      tier.popular
                        ? "bg-lime text-charcoal hover:bg-lime-dim"
                        : "bg-charcoal text-white dark:bg-white dark:text-charcoal hover:bg-charcoal-light"
                    }`}
                  >
                    {t("Get started", "Aan de slag")}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
