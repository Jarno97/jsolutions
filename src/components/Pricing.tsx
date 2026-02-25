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
    price: "€500",
    priceNl: "€500",
    description: "Perfect for small automations",
    descriptionNl: "Perfect voor kleine automatiseringen",
    features: [
      "1 automation or chatbot",
      "Basic integration",
      "30-day support",
    ],
    featuresNl: [
      "1 automatisering of chatbot",
      "Basis integratie",
      "30 dagen ondersteuning",
    ],
  },
  {
    name: "Growth",
    nameNl: "Groeien",
    price: "€2,000",
    priceNl: "€2.000",
    description: "For businesses ready to scale",
    descriptionNl: "Voor bedrijven die willen groeien",
    features: [
      "3 automations or chatbots",
      "Advanced integrations",
      "Custom AI training",
      "90-day support",
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
    ],
    featuresNl: [
      "Onbeperkte automatiseringen",
      "Volledige systeemintegratie",
      "Toegewijde ondersteuning",
      "Maandelijkse optimalisatie",
    ],
  },
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-4 md:mb-6">
            {t("Simple pricing", "Eenvoudige prijzen")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 md:mb-16 max-w-xl mx-auto">
            {t("No surprises. Just clear pricing.", "Geen verrassingen. Gewoon duidelijke prijzen.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div
                  className={`relative p-6 md:p-8 rounded-2xl h-full flex flex-col ${
                    tier.popular
                      ? "bg-black dark:bg-white text-white dark:text-black ring-2 ring-black dark:ring-white"
                      : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold bg-emerald-500 text-white rounded-full">
                        {t("Most popular", "Meest populair")}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {t(tier.name, tier.nameNl)}
                    </h3>
                    <p className="text-3xl font-bold mb-2">
                      {t(tier.price, tier.priceNl)}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {t(tier.description, tier.descriptionNl)}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(tier.popular ? tier.features : tier.featuresNl).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-emerald-400" : "text-emerald-500"
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
                    className={`block text-center px-6 py-3 rounded-full font-semibold transition-colors ${
                      tier.popular
                        ? "bg-white text-black hover:bg-zinc-100"
                        : "bg-black text-white dark:bg-white dark:text-black hover:opacity-80"
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
