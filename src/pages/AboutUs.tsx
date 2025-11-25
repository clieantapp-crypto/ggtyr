import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, Award, Globe } from "lucide-react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{language === "ar" ? "من نحن - حكومي قطر" : "About Us - Hukoomi Qatar"}</title>
        <meta 
          name="description" 
          content={language === "ar" 
            ? "تعرف على بوابة حكومي الإلكترونية ورؤية قطر 2030. الخدمات الحكومية الرقمية المتميزة لدولة قطر." 
            : "Learn about Hukoomi E-Government Portal and Qatar Vision 2030. Leading digital government services for the State of Qatar."
          } 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": language === "ar" ? "من نحن" : "About Us",
            "description": language === "ar"
              ? "معلومات عن بوابة حكومي الإلكترونية ورؤية قطر الوطنية 2030"
              : "Information about Hukoomi E-Government Portal and Qatar National Vision 2030",
            "url": "https://hukoomi.gov.qa/about",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "Hukoomi - Qatar E-Government Portal",
              "alternateName": "حكومي - بوابة قطر الحكومية الإلكترونية",
              "description": language === "ar"
                ? "بوابة حكومي هي البوابة الإلكترونية الموحدة للخدمات الحكومية في دولة قطر"
                : "Hukoomi is the unified e-government portal of the State of Qatar",
              "url": "https://hukoomi.gov.qa",
              "logo": "https://cdn.hukoomi.gov.qa/assets/images/logo/Hukoomi-new-logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "QA",
                "addressLocality": "Doha"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Qatar"
              },
              "knowsAbout": [
                "Qatar National Vision 2030",
                "رؤية قطر الوطنية 2030",
                "Digital Government Services",
                "E-Government",
                "Health Card Renewal",
                "Government Digital Transformation"
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {language === "ar" ? "من نحن" : "About Us"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "ar" 
              ? "بوابة حكومي هي البوابة الإلكترونية الموحدة للخدمات الحكومية في دولة قطر، نسعى لتقديم خدمات رقمية متميزة ومبتكرة تسهل حياة المواطنين والمقيمين."
              : "Hukoomi is the unified e-government portal of the State of Qatar, dedicated to delivering distinguished and innovative digital services that simplify the lives of citizens and residents."
            }
          </p>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-card p-6 md:p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {language === "ar" ? "رؤيتنا" : "Our Vision"}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === "ar"
                ? "أن نكون البوابة الرقمية الرائدة في المنطقة، نقدم خدمات حكومية متكاملة وسلسة تحقق رضا المتعاملين وتساهم في تحقيق رؤية قطر الوطنية 2030."
                : "To be the leading digital gateway in the region, providing integrated and seamless government services that achieve customer satisfaction and contribute to Qatar National Vision 2030."
              }
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {language === "ar" ? "مهمتنا" : "Our Mission"}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === "ar"
                ? "تقديم خدمات حكومية رقمية عالية الجودة، آمنة وسهلة الاستخدام، متاحة على مدار الساعة، تسهل التفاعل بين الحكومة والمواطنين والمقيمين وقطاع الأعمال."
                : "Delivering high-quality digital government services that are secure, user-friendly, available 24/7, and facilitate interaction between government, citizens, residents, and the business sector."
              }
            </p>
          </div>
        </section>

        {/* Qatar Vision 2030 */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-10 lg:p-12 rounded-xl border border-primary/20 mb-12 md:mb-16 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-xl shrink-0">
              <Globe className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {language === "ar" ? "رؤية قطر الوطنية 2030" : "Qatar National Vision 2030"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {language === "ar"
                  ? "تلتزم بوابة حكومي بدعم رؤية قطر الوطنية 2030 من خلال تحقيق التحول الرقمي الشامل وتقديم خدمات حكومية متطورة تساهم في بناء مجتمع متقدم ومزدهر."
                  : "Hukoomi portal is committed to supporting Qatar National Vision 2030 through comprehensive digital transformation and providing advanced government services that contribute to building an advanced and prosperous society."
                }
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "التنمية البشرية" : "Human Development"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "تمكين المواطنين من خلال خدمات رقمية ذكية"
                      : "Empowering citizens through smart digital services"
                    }
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "التنمية الاقتصادية" : "Economic Development"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "دعم الأعمال بحلول رقمية متكاملة"
                      : "Supporting businesses with integrated digital solutions"
                    }
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "التنمية الاجتماعية" : "Social Development"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "بناء مجتمع متكامل ومترابط"
                      : "Building an integrated and connected society"
                    }
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "التنمية البيئية" : "Environmental Development"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "الحد من الأوراق والممارسات المستدامة"
                      : "Reducing paper and sustainable practices"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            {language === "ar" ? "لماذا حكومي؟" : "Why Hukoomi?"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔒",
                titleAr: "آمن ومضمون",
                titleEn: "Safe & Secure",
                descAr: "أعلى معايير الأمن السيبراني لحماية بياناتك",
                descEn: "Highest cybersecurity standards to protect your data"
              },
              {
                icon: "⚡",
                titleAr: "سريع وفعال",
                titleEn: "Fast & Efficient",
                descAr: "إنجاز المعاملات في دقائق بدلاً من ساعات",
                descEn: "Complete transactions in minutes instead of hours"
              },
              {
                icon: "📱",
                titleAr: "متاح دائماً",
                titleEn: "Always Available",
                descAr: "خدمات متاحة 24/7 من أي مكان",
                descEn: "Services available 24/7 from anywhere"
              },
              {
                icon: "🌐",
                titleAr: "ثنائي اللغة",
                titleEn: "Bilingual",
                descAr: "دعم كامل للغتين العربية والإنجليزية",
                descEn: "Full support for Arabic and English"
              },
              {
                icon: "📊",
                titleAr: "شفاف ومنظم",
                titleEn: "Transparent & Organized",
                descAr: "تتبع معاملاتك بكل سهولة ووضوح",
                descEn: "Track your transactions easily and clearly"
              },
              {
                icon: "💡",
                titleAr: "مبتكر ومتطور",
                titleEn: "Innovative & Advanced",
                descAr: "تقنيات حديثة لتجربة استخدام متميزة",
                descEn: "Modern technologies for an excellent user experience"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-card p-6 md:p-10 rounded-xl border border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "ar"
              ? "نحن هنا لخدمتك. تواصل معنا للحصول على الدعم أو الاستفسارات"
              : "We're here to serve you. Contact us for support or inquiries"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:109" 
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              📞 <span className="font-semibold">109</span>
            </a>
            <a 
              href="mailto:info@motc.gov.qa" 
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              ✉️ <span>info@motc.gov.qa</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
