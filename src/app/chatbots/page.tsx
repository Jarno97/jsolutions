import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import WhatIsIt from "@/components/WhatIsIt";
import UseCases from "@/components/UseCases";
import CaseStudy from "@/components/CaseStudy";
import RelatedServices from "@/components/RelatedServices";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Chatbots | Conversational AI for Business",
  description: "Build intelligent chatbots powered by large language models. Understand context, handle complex queries, and engage customers 24/7 across your website and channels.",
  keywords: ["chatbots", "conversational AI", "AI chatbot", "customer service chatbot", "LLM chatbot", "website chatbot", "AI support", "virtual assistant", "Netherlands", "Dutch AI developer"],
  openGraph: {
    title: "Chatbots | Conversational AI for Business",
    description: "Build intelligent chatbots powered by large language models. Understand context, handle complex queries, and engage customers 24/7.",
    url: "https://jsolutions.nl/chatbots",
    siteName: "JSolutions",
    locale: "en_US",
    alternateLocale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbots | Conversational AI for Business",
    description: "Build intelligent chatbots powered by large language models. Understand context and engage customers 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const chatbotsUseCases = [
  {
    icon: "🌐",
    title: "Website Visitor Engagement",
    titleNl: "Website Bezoeker Betrokkenheid",
    description: "Greet visitors, qualify leads, and answer questions in real-time before they leave your site.",
    descriptionNl: "Begroet bezoekers, kwalificeer leads en beantwoord vragen in real-time voordat ze je site verlaten.",
  },
  {
    icon: "❓",
    title: "FAQ Handling",
    titleNl: "FAQ Afhandeling",
    description: "Instantly answer frequently asked questions while maintaining a natural, helpful tone.",
    descriptionNl: "Beantwoord veelgestelde vragen direct terwijl je een natuurlijke, behulpzame toon behoudt.",
  },
  {
    icon: "📅",
    title: "Booking Assistance",
    titleNl: "Boeking Assistentie",
    description: "Help users book appointments, reservations, or meetings directly within the chat interface.",
    descriptionNl: "Help gebruikers om afspraken, reserveringen of vergaderingen direct te boeken binnen de chatinterface.",
  },
  {
    icon: "🛍️",
    title: "Product Recommendations",
    titleNl: "Product Aanbevelingen",
    description: "Understand user preferences and suggest relevant products or services based on their needs.",
    descriptionNl: "Begrijp gebruikersvoorkeuren en suggereer relevante producten of diensten op basis van hun behoeften.",
  },
  {
    icon: "👥",
    title: "Internal Employee Support",
    titleNl: "Interne Medewerker Ondersteuning",
    description: "Provide HR, IT, or policy answers to employees instantly through Slack, Teams, or intranet.",
    descriptionNl: "Geef HR-, IT- of beleidsantwoorden aan medewerkers direct via Slack, Teams of intranet.",
  },
  {
    icon: "🌍",
    title: "Multi-language Support",
    titleNl: "Meertalige Ondersteuning",
    description: "Communicate fluently in multiple languages, breaking down language barriers for global businesses.",
    descriptionNl: "Communiceer vloeiend in meerdere talen en doorbreek taalbarrières voor wereldwijde bedrijven.",
  },
];

const chatbotsCaseStudy = {
  client: "International DTC Fashion Brand",
  industry: "Fashion E-commerce",
  size: "~80 employees",
  challenge: "70% of support chats were repetitive pre-purchase questions. High cart abandonment due to unanswered product inquiries. Limited after-hours support coverage. Slow response times during seasonal traffic spikes. Manual lead capture for wholesale inquiries. The support team was overwhelmed during campaigns and product launches.",
  challengeNl: "70% van de support chats waren repetitieve vragen voor aankoop. Hoge winkelwagen abandon door onbeantwoorde productvragen. Beperkte ondersteuning buiten kantooruren. Trage reactietijden tijdens seizoensgebonden verkeerspieken. Handmatige lead capture voor wholesale inquiries. Het support team was overweldigd tijdens campagnes en productlanceringen.",
  solution: "We deployed an advanced conversational AI chatbot powered by a large language model integrated with Shopify, Zendesk, and Klaviyo. Core capabilities: Website Visitor Engagement, Context-Aware FAQ, Product Recommendations, Seamless Human Handoff, and Multi-Language Support. Implementation took 4 weeks with no additional support hires required.",
  solutionNl: "We implementeerden een geavanceerde conversationele AI chatbot aangedreven door een large language model geïntegreerd met Shopify, Zendesk en Klaviyo. Kerncapaciteiten: Website Bezoeker Betrokkenheid, Context-Bewuste FAQ, Product Aanbevelingen, Naadloze Overdracht aan Mens, en Meertalige Ondersteuning. Implementatie duurde 4 weken zonder extra support medewerkers.",
  results: [
    { label: "Chats resolved", labelNl: "Chats opgelost", value: "64%" },
    { label: "Response time ↓", labelNl: "Reactietijd ↓", value: "38%" },
    { label: "Cart abandonment ↓", labelNl: "Winkelwagen abandon ↓", value: "22%" },
    { label: "AOV increase", labelNl: "AOV toename", value: "17%" },
    { label: "Coverage", labelNl: "Dekking", value: "24/7" },
    { label: "Peak volume", labelNl: "Piek volume", value: "3×" },
  ],
  impact: "Instead of acting as a scripted FAQ bot, the chatbot functioned as a scalable digital sales and support assistant. It understood natural language and context, guided users toward purchase decisions, reduced pressure on human agents, and delivered consistent, on-brand communication. The company transformed live chat from a cost center into a revenue-generating channel while improving customer experience globally.",
  impactNl: "In plaats van te fungeren als een scriptmatige FAQ bot, functioneerde de chatbot als een schaalbare digitale verkoop- en support assistent. Het begreep natuurlijke taal en context, leidde gebruikers naar aankoopbeslissingen, verminderde druk op menselijke agents en leverde consistente, merkspecifieke communicatie. Het bedrijf transformeerde live chat van een kostenpost naar een omzet genererend kanaal terwijl het de klantbeleving wereldwijd verbeterde.",
};

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-charcoal">
      <ServiceSchema service="chatbots" />
      <ServiceHero
        title="Conversational AI that actually understands"
        titleNl="Conversationele AI die echt begrijpt"
        subtitle="Advanced chatbots powered by large language models that engage users in natural, meaningful conversations. Not just Q&A — they understand context, handle complex queries, and integrate with your systems."
        subtitleNl="Geavanceerde chatbots aangedreven door large language models die gebruikers betrekken in natuurlijke, betekenisvolle gesprekken. Niet alleen Q&A — ze begrijpen context, verwerken complexe vragen en integreren met je systemen."
        cta="Get started →"
        ctaNl="Aan de slag →"
        icon="💬"
      />

      <WhatIsIt
        title="What is a Conversational AI Chatbot?"
        titleNl="Wat is een Conversationele AI Chatbot?"
        description={`A conversational AI chatbot goes beyond simple rule-based responses. Powered by large language models (LLMs), it understands natural language,上下文, and nuance — enabling truly meaningful conversations with your users.

These chatbots can handle complex queries, maintain context across multiple messages, and seamlessly handoff to human agents when needed. They're not just answering questions — they're solving problems.`}
        descriptionNl={`Een conversationele AI chatbot gaat verder dan eenvoudige regelgebaseerde reacties. Aangedreven door large language models (LLMs), begrijpt het natuurlijke taal, context en nuance — waardoor het echt betekenisvolle gesprekken met je gebruikers kan voeren.

Deze chatbots kunnen complexe vragen verwerken, context behouden over meerdere berichten en naadloos doorverbinden naar menselijke medewerkers wanneer nodig. Ze beantwoorden niet alleen vragen — ze lossen problemen op.`}
        icon="💬"
        features={[
          { text: "Natural language understanding", textNl: "Natuurlijke taalbegrip" },
          { text: "Context-aware conversations", textNl: "Context-bewuste gesprekken" },
          { text: "Seamless human handoff", textNl: "Naadloze overdracht aan mens" },
          { text: "Integrates with CRM & helpdesk", textNl: "Integratie met CRM en helpdesk" },
          { text: "Multi-language support", textNl: "Meertalige ondersteuning" },
        ]}
      />

      <UseCases useCases={chatbotsUseCases} />

      <CaseStudy {...chatbotsCaseStudy} />

      <RelatedServices currentService="chatbots" />

      <ServiceCTA />
    </main>
  );
}
