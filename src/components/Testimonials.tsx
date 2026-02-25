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
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-zinc-900">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-4 md:mb-6">
            {t("What clients say", "Wat клиënten zeggen")}
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 md:mb-16 max-w-xl mx-auto">
            {t("Don't just take my word for it.", "Neem niet alleen mijn woord ervoor.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 h-full">
                  {/* Quote icon */}
                  <div className="text-4xl text-zinc-300 dark:text-zinc-600 mb-4">"</div>
                  
                  {/* Quote */}
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {t(testimonial.quote, testimonial.quoteNl)}
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-semibold text-black dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
