"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";

interface CaseStudyProps {
  client: string;
  industry: string;
  size: string;
  challenge: string;
  challengeNl: string;
  solution: string;
  solutionNl: string;
  results: { label: string; labelNl: string; value: string }[];
  impact: string;
  impactNl: string;
}

export default function CaseStudy({
  client,
  industry,
  size,
  challenge,
  challengeNl,
  solution,
  solutionNl,
  results,
  impact,
  impactNl,
}: CaseStudyProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Case Study", "Case Study")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("Real results from a real client", "Echte resultaten van een echte klant")}
          </h2>

          {/* Client info */}
          <div className="bg-zinc-50 dark:bg-charcoal-light rounded-2xl p-6 md:p-10 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="font-mono text-xs text-concrete uppercase mb-1">{t("Client", "Klant")}</p>
                <p className="font-bold text-charcoal dark:text-white">{client}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-concrete uppercase mb-1">{t("Industry", "Industrie")}</p>
                <p className="font-bold text-charcoal dark:text-white">{industry}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-concrete uppercase mb-1">{t("Size", "Grootte")}</p>
                <p className="font-bold text-charcoal dark:text-white">{size}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-concrete uppercase mb-1">{t("Stack", "Stack")}</p>
                <p className="font-bold text-charcoal dark:text-white">HubSpot, Slack, Zendesk</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Challenge */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-amber-500 mb-4">
                {t("The Challenge", "De Uitdaging")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t(challenge, challengeNl)}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-lime mb-4">
                {t("The Solution", "De Oplossing")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t(solution, solutionNl)}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16">
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-8">
              {t("Results after 90 days", "Resultaten na 90 dagen")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-zinc-50 dark:bg-charcoal-light">
                  <p className="text-3xl md:text-4xl font-bold text-lime mb-2">{result.value}</p>
                  <p className="text-xs md:text-sm text-concrete font-mono">{t(result.label, result.labelNl)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-charcoal dark:bg-white">
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-lime mb-4">
              {t("Business Impact", "Business Impact")}
            </h3>
            <p className="text-zinc-300 dark:text-zinc-600 leading-relaxed text-lg">
              {t(impact, impactNl)}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
