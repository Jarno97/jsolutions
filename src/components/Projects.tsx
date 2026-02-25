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

function MetricBox({
  label,
  value,
  isAfter,
}: {
  label: string;
  value: string | number;
  isAfter: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-xl text-center ${
        isAfter
          ? "bg-emerald-50/50 dark:bg-emerald-950/20"
          : "bg-amber-50/50 dark:bg-amber-950/20"
      }`}
    >
      <div
        className={`text-2xl font-bold ${
          isAfter ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
        }`}
      >
        {value}
      </div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-4 md:mb-6">
            {t("Results that speak", "Resultaten die spreken")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 md:mb-16 max-w-xl mx-auto">
            {t("Real problems, real solutions. See what automation can do.", "Echte problemen, echte oplossingen. Zie wat automatisering kan doen.")}
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          {t(project.title, project.titleNl)}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                          {t(project.description, project.descriptionNl)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t("Before", "Voor")}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <MetricBox label={t("Time spent", "Tijd besteed")} value={t(project.before.time, project.before.timeNl)} isAfter={false} />
                          <MetricBox label={t("Steps", "Stappen")} value={project.before.steps} isAfter={false} />
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {project.before.manual ? t("✋ Manual process", "✋ Handmatig proces") : t("⚡ Semi-automated", "⚡ Semi-geautomatiseerd")}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                          <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-4 md:col-start-2">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t("After", "Na")}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <MetricBox label={t("Time spent", "Tijd besteed")} value={t(project.after.time, project.after.timeNl)} isAfter={true} />
                          <MetricBox label={t("Steps", "Stappen")} value={project.after.steps} isAfter={true} />
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {project.after.manual ? t("✋ Manual process", "✋ Handmatig proces") : t("⚡ Fully automated", "⚡ Volledig geautomatiseerd")}
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
