import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import heroCityscape from "@/assets/hero-cityscape.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
export const Hero = () => {
  const {
    language,
    t
  } = useLanguage();
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroCityscape})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/95 via-[#222222]/85 to-[#222222]/60 md:from-[#222222]/90 md:via-[#222222]/80 md:to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/40">
            <p className="text-white font-semibold text-xs md:text-sm">{t.hero.badge}</p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t.hero.title}<br />
            <span className="text-primary bg-white/10 px-2 backdrop-blur-sm rounded inline-block mt-2">{t.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base group animate-fade-in w-full sm:w-auto"
              onClick={() => window.location.href = '/health-card-renewal'}
            >
              <span className="truncate">{t.hero.exploreServices}</span>
              <ArrowRight className={`${language === "ar" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform no-flip flex-shrink-0`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm animate-fade-in h-11 md:h-12 text-sm md:text-base w-full sm:w-auto"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Search className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4 md:h-5 md:w-5 no-flip flex-shrink-0`} />
              <span className="truncate">{t.hero.searchPortal}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};