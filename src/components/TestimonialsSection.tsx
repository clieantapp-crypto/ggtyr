import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialsSection = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      nameEn: "Ahmed Al-Marri",
      nameAr: "أحمد المري",
      roleEn: "Business Owner",
      roleAr: "صاحب شركة",
      textEn: "The business registration process was incredibly smooth. What used to take weeks now takes just a few hours. The digital platform has truly transformed how we interact with government services.",
      textAr: "كانت عملية تسجيل الشركة سلسة للغاية. ما كان يستغرق أسابيع أصبح الآن يستغرق ساعات قليلة فقط. المنصة الرقمية غيرت فعلاً طريقة تعاملنا مع الخدمات الحكومية.",
      rating: 5,
    },
    {
      nameEn: "Sarah Johnson",
      nameAr: "سارة جونسون",
      roleEn: "Healthcare Professional",
      roleAr: "متخصصة رعاية صحية",
      textEn: "Renewing my health card was effortless. The entire process was completed online in minutes, and the tracking system kept me updated every step of the way. Truly world-class service!",
      textAr: "كان تجديد بطاقتي الصحية سهلاً للغاية. تمت العملية بالكامل عبر الإنترنت في دقائق، ونظام التتبع أبقاني على اطلاع في كل خطوة. خدمة عالمية حقاً!",
      rating: 5,
    },
    {
      nameEn: "Mohammed Hassan",
      nameAr: "محمد حسن",
      roleEn: "Entrepreneur",
      roleAr: "رائد أعمال",
      textEn: "The 24/7 availability and mobile-friendly interface make managing my business documentation so convenient. I can access all services from anywhere, which is essential for my work.",
      textAr: "التوفر على مدار الساعة والواجهة الملائمة للهواتف تجعل إدارة وثائق عملي مريحة للغاية. يمكنني الوصول لجميع الخدمات من أي مكان، وهذا ضروري لعملي.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 px-4">
              {language === "en" ? "What Our Users Say" : "ماذا يقول مستخدمونا"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {language === "en"
                ? "Trusted by thousands across Qatar"
                : "موثوق به من قبل الآلاف في قطر"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 border hover:shadow-soft transition-all"
              >
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent no-flip" />
                  ))}
                </div>

                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed italic" dir={language === "ar" ? "rtl" : "ltr"}>
                  "{language === "en" ? testimonial.textEn : testimonial.textAr}"
                </p>

                <div className="pt-3 md:pt-4 border-t" dir={language === "ar" ? "rtl" : "ltr"}>
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {language === "en" ? testimonial.nameEn : testimonial.nameAr}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {language === "en" ? testimonial.roleEn : testimonial.roleAr}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};