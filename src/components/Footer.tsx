import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { language, t } = useLanguage();
  
  return (
    <footer className={`bg-primary text-primary-foreground py-6 md:py-8 border-t border-border/20 mt-8 md:mt-12 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-full overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 truncate">{t.footer.quickLinks}</h3>
              <ul className="space-y-1 md:space-y-1.5">
                <li>
                  <a 
                    href="#services" 
                    className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t.nav.services}
                  </a>
                </li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{t.nav.about}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{t.footer.contact}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "ar" ? "الأسئلة الشائعة" : "FAQ"}</a></li>
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 truncate">{language === "en" ? "Government" : "الحكومة"}</h3>
              <ul className="space-y-1 md:space-y-1.5">
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "Ministries" : "الوزارات"}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "Entities" : "الجهات"}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "Initiatives" : "المبادرات"}</a></li>
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 truncate">{language === "en" ? "Resources" : "الموارد"}</h3>
              <ul className="space-y-1 md:space-y-1.5">
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{t.nav.openData}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "FAQ" : "الأسئلة الشائعة"}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "Publications" : "المنشورات"}</a></li>
                <li><a href="/" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block truncate">{language === "en" ? "Media" : "الإعلام"}</a></li>
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 truncate">{language === "en" ? "Connect" : "تواصل معنا"}</h3>
              <ul className="space-y-1 md:space-y-1.5">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors block">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-4 md:pt-6 border-t border-border/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <p className="text-xs md:text-sm text-primary-foreground/60 text-center md:text-left">
                {language === "en" 
                  ? `© ${new Date().getFullYear()} State of Qatar. All Rights Reserved.` 
                  : `© ${new Date().getFullYear()} دولة قطر. جميع الحقوق محفوظة.`}
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <a href="/" className="text-primary-foreground/60 hover:text-accent transition-colors whitespace-nowrap">
                  {language === "en" ? "Privacy" : "الخصوصية"}
                </a>
                <span className="text-primary-foreground/40">•</span>
                <a href="/" className="text-primary-foreground/60 hover:text-accent transition-colors whitespace-nowrap">
                  {language === "en" ? "Terms" : "الشروط"}
                </a>
                <span className="text-primary-foreground/40">•</span>
                <a href="/" className="text-primary-foreground/60 hover:text-accent transition-colors whitespace-nowrap">
                  {language === "en" ? "Accessibility" : "سهولة الوصول"}
                </a>
                <span className="text-primary-foreground/40 hidden md:inline">•</span>
                <a href="/sitemap.xml" className="text-primary-foreground/60 hover:text-accent transition-colors whitespace-nowrap hidden md:inline">
                  {language === "en" ? "Sitemap" : "خريطة الموقع"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
