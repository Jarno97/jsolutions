"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function ServiceCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-charcoal dark:bg-white">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-charcoal mb-6 md:mb-8">
            {t("Ready to get started?", "Klaar om te beginnen?")}
          </h2>
          <p className="text-lg text-zinc-300 dark:text-zinc-600 mb-10 md:mb-12">
            {t(
              "Let's discuss how we can help automate your business and reduce manual work.",
              "Laten we bespreken hoe we je bedrijf kunnen automatiseren en handmatig werk kunnen verminderen."
            )}
          </p>
          <Link
            href="/#contact"
            className="inline-block px-10 py-5 bg-lime text-charcoal font-bold rounded-full text-lg hover:bg-lime-dim hover-lift transition-all"
          >
            {t("Get in touch →", "Neem contact op →")}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
