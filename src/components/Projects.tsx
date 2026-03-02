"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

interface Project {
  title: string;
  titleNl: string;
  description: string;
  descriptionNl: string;
  before: {
    time: string;
    timeNl: string;
    steps: number;
    manual: boolean;
  };
  after: {
    time: string;
    timeNl: string;
    steps: number;
    manual: boolean;
  };
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Invoice Processing",
    titleNl: "Factuurverwerking",
    description: "Automated extraction and entry for accounting firm",
    descriptionNl: "Geautomatiseerde extractie en invoer voor administratiekantoor",
    before: {
      time: "5 hours",
      timeNl: "5 uur",
      steps: 12,
      manual: true,
    },
    after: {
      time: "2 minutes",
      timeNl: "2 minuten",
      steps: 1,
      manual: false,
    },
    tags: ["OCR", "GPT-4", "QuickBooks"],
  },
  {
    title: "Customer Support",
    titleNl: "Klantenservice",
    description: "AI triage handling 80% of inquiries automatically",
    descriptionNl: "AI triage die 80% van vragen automatisch afhandelt",
    before: {
      time: "24 hrs response",
      timeNl: "24 uur reactie",
      steps: 5,
      manual: true,
    },
    after: {
      time: "Instant",
      timeNl: "Direct",
      steps: 1,
      manual: false,
    },
    tags: ["LLM", "RAG", "Zapier"],
  },
  {
    title: "Lead Qualification",
    titleNl: "Lead kwalificatie",
    description: "Automated scoring and follow-up for sales pipeline",
    descriptionNl: "Geautomatiseerde scoring en opvolging voor verkooppipeline",
    before: {
      time: "Manual review",
      timeNl: "Handmatige review",
      steps: 6,
      manual: true,
    },
    after: {
      time: "Real-time",
      timeNl: "Real-time",
      steps: 0,
      manual: false,
    },
    tags: ["GPT-4", "Make", "CRM"],
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Projects", "Projecten")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("Results that speak", "Resultaten die spreken")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
            {t("Real problems, real solutions. See what automation can do.", "Echte problemen, echte oplossingen. Zie wat automatisering kan doen.")}
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-zinc-50 dark:bg-charcoal-light rounded-2xl overflow-hidden border border-transparent hover:border-lime/30 transition-all duration-300 hover-lift">
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-zinc-200 dark:border-zinc-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-charcoal dark:text-white font-mono">
                          {t(project.title, project.titleNl)}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                          {t(project.description, project.descriptionNl)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-medium bg-charcoal dark:bg-white text-white dark:text-charcoal rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                      {/* Before */}
                      <div className="relative pt-2">
                        <div className="absolute -top-0 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wide font-mono">
                          {t("Before", "Voor")}
                        </div>
                        <div className="pt-4 space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-zinc-700 text-center">
                              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                                {language === "en" ? project.before.time : project.before.timeNl}
                              </div>
                              <div className="text-xs text-concrete mt-1 font-mono">
                                {t("Time", "Tijd")}
                              </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-zinc-700 text-center">
                              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                                {project.before.steps}
                              </div>
                              <div className="text-xs text-concrete mt-1 font-mono">
                                {t("Steps", "Stappen")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-sm text-concrete font-mono">
                            <span className={project.before.manual ? "opacity-100" : "opacity-50"}>
                              {project.before.manual ? "✋" : "⚡"}
                            </span>
                            {project.before.manual 
                              ? t("Manual process", "Handmatig proces")
                              : t("Semi-automated", "Semi-geautomatiseerd")
                            }
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="relative pt-2">
                        <div className="absolute -top-0 left-4 px-3 py-1 bg-lime text-charcoal text-xs font-bold rounded-full uppercase tracking-wide font-mono">
                          {t("After", "Na")}
                        </div>
                        <div className="pt-4 space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-zinc-700 text-center">
                              <div className="text-2xl font-bold text-lime">
                                {language === "en" ? project.after.time : project.after.timeNl}
                              </div>
                              <div className="text-xs text-concrete mt-1 font-mono">
                                {t("Time", "Tijd")}
                              </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-zinc-700 text-center">
                              <div className="text-2xl font-bold text-lime">
                                {project.after.steps}
                              </div>
                              <div className="text-xs text-concrete mt-1 font-mono">
                                {t("Steps", "Stappen")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-sm text-concrete font-mono">
                            <span className={!project.after.manual ? "opacity-100" : "opacity-50"}>
                              {!project.after.manual ? "⚡" : "✋"}
                            </span>
                            {project.after.manual 
                              ? t("Manual process", "Handmatig proces")
                              : t("Fully automated", "Volledig geautomatiseerd")
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
