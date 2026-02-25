import Image from "next/image";

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
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white max-w-4xl mb-6">
          AI Agents & Automations that work for you
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12">
          Smart solutions that handle the repetitive stuff so you can focus on what matters.
        </p>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
            🤖 AI Agents
          </span>
          <span className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
            ⚡ Automations
          </span>
          <span className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
            💬 Chatbots
          </span>
        </div>

        <a
          href="#contact"
          className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-80 transition-opacity"
        >
          Get in touch
        </a>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12">
            About me
          </h2>
          <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16">
            What I do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <a
            href="mailto:hello@jsolutions.nl"
            className="text-xl md:text-2xl font-medium text-black dark:text-white hover:underline underline-offset-4"
          >
            hello@jsolutions.nl
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 dark:text-zinc-400">
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
