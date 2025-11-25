import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";

export const StatsSection = () => {
  const { language, t } = useLanguage();
  
  const stats = [
    { value: "2,300+", label: t.stats.services },
    { value: "1,500+", label: t.stats.digital },
    { value: "98%", label: language === "en" ? "Service Accessibility" : "سهولة الوصول" },
    { value: "24/7", label: language === "en" ? "Available Support" : "دعم متواصل" },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
              {language === "en" ? "Trusted by Millions" : "موثوق به من الملايين"}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg px-4">
              {language === "en" 
                ? "Delivering excellence in digital government services" 
                : "نقدم التميز في خدمات الحكومة الرقمية"}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group p-4 md:p-0">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
