import Image from "next/image";

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
    </div>
  );
}
