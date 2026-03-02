"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

interface Testimonial {
  quote: string;
  quoteNl: string;
  author: string;
  role: string;
  roleNl: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Jarno transformed how we handle customer inquiries. The AI support agent handles 80% of questions instantly.",
    quoteNl: "Jarno heeft onze klantvragen getransformeerd. De AI support agent beantwoordt 80% van de vragen direct.",
    author: "John Doe",
    role: "CEO, Tech Company",
    roleNl: "CEO, Tech Bedrijf",
  },
  {
    quote: "Our invoice processing went from 5 hours to 2 minutes. The ROI was immediate.",
    quoteNl: "Onze factuurverwerking ging van 5 uur naar 2 minuten. De ROI was direct voelbaar.",
    author: "Jane Smith",
    role: "Finance Director, Accounting Firm",
    roleNl: "Finance Director, Administratiekantoor",
  },
  {
    quote: "Clear communication, fast delivery, and results that speak for themselves.",
    quoteNl: "Duidelijke communicatie, snelle levering, en resultaten die voor zich spreken.",
    author: "Bob Wilson",
    role: "Founder, Startup",
    roleNl: "Founder, Startup",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Testimonials", "Referenties")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
            {t("What clients say", "Wat klanten zeggen")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
            {t("Don't just take my word for it.", "Neem niet alleen mijn woord ervoor.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-charcoal-light border border-transparent hover:border-lime/30 transition-all duration-300 h-full group flex flex-col">
                  {/* Large decorative quote mark */}
                  <span className="text-8xl text-lime/20 font-serif leading-none select-none group-hover:text-lime/30 transition-colors">"</span>
                  
                  {/* Quote */}
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 -mt-4 relative z-10 flex-grow">
                    {t(testimonial.quote, testimonial.quoteNl)}
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4 mt-auto">
                    <p className="font-bold text-charcoal dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-concrete font-mono">
                      {t(testimonial.role, testimonial.roleNl)}
                    </p>
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
