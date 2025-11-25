import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 text-center border bg-card">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-4">
            {language === "en"
              ? "Ready to Get Started?"
              : "هل أنت مستعد للبدء؟"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            {language === "en"
              ? "Join millions of users accessing government services digitally"
              : "انضم لملايين المستخدمين الذين يستخدمون الخدمات الحكومية الرقمية"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base w-full sm:w-auto"
              onClick={() => navigate('/health-card-renewal')}
            >
              {language === "en" ? "Explore Services" : "استكشف الخدمات"}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold h-11 md:h-12 text-sm md:text-base w-full sm:w-auto"
              onClick={() => navigate('/faq')}
            >
              {language === "en" ? "Learn More" : "اعرف المزيد"}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};