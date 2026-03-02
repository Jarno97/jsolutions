"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Open mailto with pre-filled content
    const mailtoLink = `mailto:hello@jsolutions.nl?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = mailtoLink;
    setFormState("sent");
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-100 dark:bg-charcoal-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-50" />
      
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center relative">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
            {t("Contact", "Contact")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 md:mb-8">
            {t("Let's work together", "Laten we samenwerken")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 md:mb-12">
            {t("Have a project in mind? I'd love to hear about it.", "Heb je een project in gedachten? Ik hoor graag wat je wilt maken.")}
          </p>

          {formState === "sent" ? (
            <div className="p-8 bg-lime/10 rounded-2xl border border-lime/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lime flex items-center justify-center">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-charcoal dark:text-white font-bold text-lg mb-2">
                {t("Thanks! I've opened your email client.", "Bedankt! Ik heb je mailprogramma geopend.")}
              </p>
              <p className="text-concrete">
                {t("You can also email me directly at hello@jsolutions.nl", "Je kunt me ook direct mailen op hello@jsolutions.nl")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal dark:text-zinc-300 mb-2 font-mono">
                  {t("Name", "Naam")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-lime focus:outline-none transition-colors"
                  placeholder={t("Your name", "Je naam")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal dark:text-zinc-300 mb-2 font-mono">
                  {t("Email", "E-mail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-lime focus:outline-none transition-colors"
                  placeholder={t("your@email.com", "je@email.com")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal dark:text-zinc-300 mb-2 font-mono">
                  {t("Message", "Bericht")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent bg-white dark:bg-charcoal text-charcoal dark:text-white focus:border-lime focus:outline-none transition-colors resize-none"
                  placeholder={t("Tell me about your project", "Vertel me over je project")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-lime text-charcoal font-bold rounded-full hover:bg-lime-dim hover-lift transition-all text-lg"
              >
                {t("Send message →", "Verstuur bericht →")}
              </button>

              <p className="text-xs text-center text-concrete font-mono">
                {t("Opens your email client", "Opent je mailprogramma")}
              </p>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
