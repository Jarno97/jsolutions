import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";

const services = [
  {
    icon: "🤖",
    title: "AI Agents",
    description:
      "Intelligent assistants that handle complex tasks autonomously. From customer support to data processing, our agents learn and adapt to your workflows.",
  },
  {
    icon: "⚡",
    title: "Automations",
    description:
      "Eliminate repetitive tasks with custom automation pipelines. We connect your tools and streamline processes so you can focus on high-value work.",
  },
  {
    icon: "💬",
    title: "Chatbots",
    description:
      "Conversational AI that actually understands. Natural language interfaces for websites, apps, or internal tools that engage users effectively.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#" className="text-lg md:text-xl font-bold text-black dark:text-white">
            JSolutions
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>
          {/* Mobile nav - simple version */}
          <div className="flex md:hidden gap-2 items-center">
            <ThemeToggle />
            <a href="#contact" className="text-sm px-3 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-6 py-16 md:py-24 text-center relative pt-28 md:pt-32">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
            alt="Technology abstract"
            fill
            className="object-cover opacity-30 dark:opacity-15 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/60 to-zinc-50/60 dark:from-black/60 dark:to-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white max-w-4xl mb-4 md:mb-6">
            AI Agents & Automations that work for you
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 md:mb-12">
            Smart solutions that handle the repetitive stuff so you can focus on what matters.
          </p>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-4">
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
            🤖 AI Agents
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
            ⚡ Automations
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
            💬 Chatbots
          </span>
        </div>

        <a
          href="#contact"
          className="px-6 py-3 md:px-8 md:py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-80 transition-opacity text-sm md:text-base"
        >
          Get in touch
        </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-zinc-900">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-8 md:mb-12">
              About me
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                <span className="text-black dark:text-white font-semibold">Hi, I'm Jarno Swinkels.</span> Years of experience as a software engineer, now focused on automation & AI.
              </p>
              <p>
                I've always believed AI should handle the boring stuff — so why not help others do the same?
              </p>
              <p>
                Building your product is a collaboration. <span className="text-black dark:text-white font-medium">Communication is my thing.</span> Let's make your life easier.
              </p>
            </div>
            <a
              href="mailto:hello@jsolutions.nl"
              className="inline-block mt-10 px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Get in touch
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-zinc-900">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-8 md:mb-16">
              What I do
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <FadeIn key={index} delay={index * 150}>
                  <div
                    className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 h-full"
                  >
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-50 dark:bg-black">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-4 md:mb-6">
              Let's work together
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6 md:mb-8">
              Have a project in mind? I'd love to hear about it.
            </p>
            <a
              href="mailto:hello@jsolutions.nl"
              className="text-base md:text-2xl font-medium text-black dark:text-white hover:underline underline-offset-4"
            >
              hello@jsolutions.nl
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} JSolutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@jsolutions.nl"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              hello@jsolutions.nl
            </a>
            <a
              href="https://github.com/Jarno97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
