import { Card } from "@/components/ui/card";
import { Shield, Clock, Smartphone, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Shield,
      titleEn: "Secure & Encrypted",
      titleAr: "آمن ومشفر",
      descEn: "Your data is protected with advanced encryption and security protocols ensuring complete privacy and safety",
      descAr: "بياناتك محمية بتشفير متقدم وبروتوكولات أمنية تضمن الخصوصية والأمان الكامل",
    },
    {
      icon: Clock,
      titleEn: "24/7 Availability",
      titleAr: "متاح على مدار الساعة",
      descEn: "Access government services anytime, anywhere with our always-available digital platform",
      descAr: "وصول للخدمات الحكومية في أي وقت ومن أي مكان عبر منصتنا الرقمية المتاحة دائماً",
    },
    {
      icon: Smartphone,
      titleEn: "Mobile-First Design",
      titleAr: "تصميم متجاوب",
      descEn: "Seamless experience across all devices - desktop, tablet, and mobile with responsive design",
      descAr: "تجربة سلسة عبر جميع الأجهزة - الحاسوب، اللوحي، والهاتف المحمول بتصميم متجاوب",
    },
    {
      icon: Award,
      titleEn: "Award-Winning Service",
      titleAr: "خدمة حائزة على جوائز",
      descEn: "Recognized internationally for excellence in digital government transformation and innovation",
      descAr: "معترف بها دولياً للتميز في التحول الرقمي الحكومي والابتكار",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 px-4">
              {language === "en" ? "Why Choose Hukoomi?" : "لماذا تختار حكومي؟"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {language === "en"
                ? "Experience the future of government services"
                : "استمتع بمستقبل الخدمات الحكومية"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 text-center border hover:shadow-soft transition-all"
              >
                <div className="mb-3 md:mb-4 mx-auto w-12 h-12 md:w-14 md:h-14 bg-primary/5 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary no-flip" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-1.5 md:mb-2">
                  {language === "en" ? feature.titleEn : feature.titleAr}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {language === "en" ? feature.descEn : feature.descAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};