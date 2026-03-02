"use client";

import FadeIn from "@/components/FadeIn";
import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageContext";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Agents",
    titleNl: "AI Agents",
    slug: "ai-agents",
    description:
      "Intelligent assistants that handle complex tasks autonomously. From customer support to data processing, our agents learn and adapt to your workflows.",
    descriptionNl:
      "Intelligente assistenten die complexe taken autonoom uitvoeren. Van klantenservice tot dataverwerking, onze agents leren en passen zich aan jouw workflow aan.",
  },
  {
    icon: "⚡",
    title: "Automations",
    titleNl: "Automatisering",
    slug: "automations",
    description:
      "Eliminate repetitive tasks with custom automation pipelines. We connect your tools and streamline processes so you can focus on high-value work.",
    descriptionNl:
      "Elimineer repetitieve taken met aangepaste automatisering. We verbinden je tools en stroomlijnen processen zodat jij je kunt richten op waardevol werk.",
  },
  {
    icon: "💬",
    title: "Chatbots",
    titleNl: "Chatbots",
    slug: "chatbots",
    description:
      "Conversational AI that actually understands. Natural language interfaces for websites, apps, or internal tools that engage users effectively.",
    descriptionNl:
      "Conversationele AI die echt begrijpt. Natural language interfaces voor websites, apps of interne tools die gebruikers effectief betrekken.",
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#" className="text-lg md:text-xl font-bold font-mono text-charcoal dark:text-white tracking-tight">
            JSolutions<span className="text-lime">.</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("About", "Over")}
            </a>
            <a href="#services" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("Services", "Diensten")}
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("How it works", "Hoe het werkt")}
            </a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("Testimonials", "Referenties")}
            </a>
            <a href="#pricing" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("Pricing", "Prijzen")}
            </a>
            <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("Projects", "Projecten")}
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-charcoal dark:hover:text-lime transition-colors font-mono">
              {t("Contact", "Contact")}
            </a>
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {/* Mobile nav */}
          <div className="flex md:hidden gap-2 items-center">
            <LanguageToggle />
            <ThemeToggle />
            <a href="#contact" className="text-sm px-4 py-2 bg-lime text-charcoal font-semibold rounded-full font-mono hover:opacity-80 transition-opacity">
              {t("Contact", "Contact")}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 md:px-6 py-24 text-center relative pt-28 md:pt-32 overflow-hidden">
        {/* Background: Grid + noise */}
        <div className="absolute inset-0 z-0 bg-grid dark:bg-grid-dark" />
        <div className="absolute inset-0 z-0 noise-overlay" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-[15%] left-[5%] w-16 h-16 border-2 border-lime/20 rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[25%] left-[8%] w-2 h-2 bg-lime/60 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '2s' }} />
        
        <div className="absolute bottom-[20%] left-[10%] w-12 h-12 border border-charcoal/10 rotate-45 hidden lg:block animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 bg-concrete/50 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '3s' }} />
        
        <div className="absolute top-[20%] right-[8%] w-20 h-20 border border-charcoal/10 -rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[35%] right-[12%] w-3 h-3 bg-lime/40 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[15%] right-[5%] w-2 h-2 bg-lime/60 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '2.5s' }} />
        
        <div className="absolute bottom-[25%] right-[8%] w-14 h-14 border-2 border-lime/15 rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '4.5s' }} />
        <div className="absolute bottom-[15%] right-[12%] w-1.5 h-1.5 bg-concrete/40 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '3.5s' }} />
        
        {/* Extra small particles */}
        <div className="absolute top-[40%] left-[20%] w-1 h-1 bg-lime/30 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '1.5s' }} />
        <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-concrete/30 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-lime/30 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '1.8s' }} />
        <div className="absolute bottom-[40%] right-[20%] w-1 h-1 bg-concrete/30 rounded-full hidden lg:block animate-pulse" style={{ animationDuration: '2.2s' }} />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full hidden lg:block overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] left-[-10%] w-[40%] h-px bg-gradient-to-r from-transparent via-lime/10 to-transparent rotate-12" />
          <div className="absolute top-[60%] left-[-5%] w-[30%] h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent -rotate-6" />
        </div>

        <div className="relative z-10 px-4 max-w-5xl">
          {/* Tagline */}
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-concrete mb-6 animate-reveal">
            {t("AI & Automation Specialist", "AI & Automatisering Specialist")}
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-charcoal dark:text-white max-w-4xl mx-auto mb-6 md:mb-8 leading-[1.1] animate-reveal animation-delay-200">
            {t("AI Agents & Automations that work for you", "AI Agents & Automatisering die voor je werken")}
          </h1>
          
          {/* Subheading */}
          <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed animate-reveal animation-delay-300">
            {t("Smart solutions that handle the repetitive stuff so you can focus on what matters.", "Slimme oplossingen die het repetitieve werk doen, zodat jij je kunt richten op wat belangrijk is.")}
          </p>

        {/* Services pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14 px-4 animate-reveal animation-delay-400">
          <Link href="/ai-agents" className="px-5 py-2.5 bg-charcoal dark:bg-white rounded-full text-sm text-white dark:text-charcoal font-medium font-mono hover:bg-lime hover:text-charcoal transition-colors">
            🤖 {t("AI Agents", "AI Agents")}
          </Link>
          <Link href="/automations" className="px-5 py-2.5 bg-charcoal dark:bg-white rounded-full text-sm text-white dark:text-charcoal font-medium font-mono hover:bg-lime hover:text-charcoal transition-colors">
            ⚡ {t("Automations", "Automatisering")}
          </Link>
          <Link href="/chatbots" className="px-5 py-2.5 bg-charcoal dark:bg-white rounded-full text-sm text-white dark:text-charcoal font-medium font-mono hover:bg-lime hover:text-charcoal transition-colors">
            💬 {t("Chatbots", "Chatbots")}
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block px-8 py-4 md:px-10 md:py-5 bg-lime text-charcoal font-bold rounded-full text-base md:text-lg hover-lift btn-accent animate-reveal animation-delay-500"
        >
          {t("Get in touch →", "Neem contact op →")}
        </a>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-lime transition-colors"
          aria-label="Scroll to about section"
        >
          <svg className="w-6 h-6 text-concrete" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-50 dark:bg-charcoal-light">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime mb-6">
              {t("About", "Over")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white mb-8 md:mb-12 leading-tight">
              {t("Hi, I'm Jarno Swinkels.", "Hoi, ik ben Jarno Swinkels.")}
            </h2>
            <div className="space-y-5 md:space-y-7 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              <p>
                {t("I design AI and automation systems that reduce manual work and improve performance.", "Ik ontwerp AI- en automatiseringssystemen die handmatig werk verminderen en prestaties verbeteren.")}
              </p>
              <p className="font-mono text-charcoal dark:text-white">
                {t("Strategic thinking. Clean execution. Clear communication.", "Strategisch denken. Schone uitvoering. Duidelijke communicatie.")}
              </p>
              <p>
                {t("Let's build smarter operations.", "Laten we slimmere operaties bouwen.")}
              </p>
            </div>
            <a
              href="mailto:hello@jsolutions.nl"
              className="inline-block mt-12 px-8 py-4 border-2 border-charcoal dark:border-white text-charcoal dark:text-white font-semibold rounded-full hover:bg-lime hover:border-lime hover:text-charcoal dark:hover:bg-lime dark:hover:text-charcoal dark:hover:border-lime transition-all font-mono"
            >
              {t("Get in touch", "Neem contact op")}
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-lime text-center mb-6">
              {t("Services", "Diensten")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-6 md:mb-8">
              {t("What I do", "Wat ik doe")}
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mb-14 md:mb-20 max-w-xl mx-auto text-lg">
              {t("So you do less.", "Zodat jij minder doet.")}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <FadeIn key={index} delay={index * 150}>
                  <Link
                    href={`/${service.slug}`}
                    className="block p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-charcoal-light border border-transparent hover:border-lime/50 hover-lift transition-all duration-300 h-full group"
                  >
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3 font-mono">
                      {t(service.title, service.titleNl)}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t(service.description, service.descriptionNl)}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-10 md:py-16 px-4 md:px-6 bg-zinc-100 dark:bg-charcoal-light border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-mono">
            © {new Date().getFullYear()} JSolutions<span className="text-lime">.</span>
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/jarnoswinkels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-lime transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Jarno97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-lime transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
