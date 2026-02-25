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
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-50 dark:bg-black">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-4 md:mb-6">
            {t("Let's work together", "Laten we samenwerken")}
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 md:mb-10">
            {t("Have a project in mind? I'd love to hear about it.", "Heb je een project in gedachten? Ik hoor graag wat je wilt maken.")}
          </p>

          {formState === "sent" ? (
            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl">
              <p className="text-green-700 dark:text-green-400 font-medium">
                {t("Thanks! I've opened your email client.", "Bedankt! Ik heb je mailprogramma geopend.")}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                {t("You can also email me directly at hello@jsolutions.nl", "Je kunt me ook direct mailen op hello@jsolutions.nl")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {t("Name", "Naam")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                  placeholder={t("Your name", "Je naam")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {t("Email", "E-mail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                  placeholder={t("your@email.com", "je@email.com")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {t("Message", "Bericht")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none resize-none"
                  placeholder={t("Tell me about your project", "Vertel me over je project")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-80 transition-opacity"
              >
                {t("Send message", "Verstuur bericht")}
              </button>

              <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
                {t("Opens your email client", "Opent je mailprogramma")}
              </p>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
