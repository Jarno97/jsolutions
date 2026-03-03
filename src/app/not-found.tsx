import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-lg">
        {/* Large 404 */}
        <h1 className="text-[150px] md:text-[200px] font-bold text-white/10 font-mono leading-none">
          404
        </h1>
        
        {/* Message */}
        <div className="-mt-16 md:-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("Page not found", "Pagina niet gevonden")}
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-sm mx-auto">
            {t(
              "The page you're looking for doesn't exist or has been moved.",
              "De pagina die je zoekt bestaat niet of is verplaatst."
            )}
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-lime text-charcoal font-bold rounded-full hover:bg-lime-dim transition-colors"
            >
              {t("Back to home", "Terug naar home")}
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-lime hover:text-lime transition-colors"
            >
              {t("Contact me", "Neem contact op")}
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-lime/20 rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-10 w-14 h-14 border border-white/10 -rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: '5s' }} />
      </div>
    </main>
  );
}
