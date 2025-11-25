import { Button } from "@/components/ui/button";
import { Menu, Globe, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hukoomiLogo from "@/assets/hukoomi-logo.svg";
import { useState } from "react";
export const Navigation = () => {
  const {
    language,
    toggleLanguage,
    t
  } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-4 md:gap-12">
              <div className="flex items-center">
                <img src={hukoomiLogo} alt="Hukoomi Qatar e-Government Logo" className="h-8 md:h-12 w-auto object-contain" />
              </div>
              
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors font-medium text-sm xl:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t.nav.services}
                </a>
                <a href="/about" className="text-white/80 hover:text-white transition-colors font-medium text-sm xl:text-base">
                  {t.nav.about}
                </a>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors font-medium text-sm xl:text-base">
                  {language === "ar" ? "اتصل بنا" : "Contact"}
                </a>
                <a href="/faq" className="text-white/80 hover:text-white transition-colors font-medium text-sm xl:text-base">
                  {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleLanguage} 
                className="text-white hover:bg-white/10 h-9 w-9 md:h-10 md:w-10"
              >
                <Globe className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">{language === "en" ? "العربية" : "English"}</span>
              </Button>
              
              <Button className="hidden sm:flex bg-white hover:bg-white/90 font-semibold text-[#222222] px-4 md:px-6 h-9 md:h-10 text-sm md:text-base">
                {t.nav.login}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white hover:bg-white/10 h-9 w-9"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-16 right-0 bottom-0 w-64 bg-[#222222] border-l border-white/10 shadow-xl animate-slide-in-right">
            <div className="flex flex-col p-6 space-y-4">
              <a 
                href="#services" 
                className="text-white/80 hover:text-white transition-colors font-medium py-2 border-b border-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.nav.services}
              </a>
              <a 
                href="/about" 
                className="text-white/80 hover:text-white transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ar" ? "اتصل بنا" : "Contact"}
              </a>
              <a 
                href="/faq" 
                className="text-white/80 hover:text-white transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
              </a>
              <Button className="w-full bg-[] hover:bg-white/90 font-semibold text-[#222222] mt-4 sm:hidden">
                {t.nav.login}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};