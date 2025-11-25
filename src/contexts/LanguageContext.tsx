import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About Qatar",
      directory: "Directory",
      openData: "Open Data",
      login: "Login",
    },
    hero: {
      badge: "Leading Digital Government 2025",
      title: "Renew Your Health Card",
      titleHighlight: "in Minutes Online",
      description: "Qatar Health Card Renewal made easy. Access your health card services, renew online instantly, and manage all healthcare documents through our secure digital platform. Fast, convenient, and available 24/7.",
      exploreServices: "Renew Health Card Now",
      searchPortal: "Search Services",
    },
    stats: {
      services: "Government Services",
      citizens: "Citizens & Residents",
      satisfaction: "Satisfaction Rate",
      digital: "Digital Services Available",
    },
    servicesSection: {
      title: "Featured Services",
      subtitle: "Discover comprehensive digital services designed to simplify your interaction with government entities across all sectors",
      health: {
        title: "Health Card Renewal Qatar",
        description: "Renew your Qatar health card online in minutes. Complete health card management, instant renewal service, appointment scheduling, medical records access, and comprehensive healthcare services - all available 24/7",
      },
      traffic: {
        title: "Transportation & Traffic",
        description: "Check and settle traffic violations, renew driving licenses, manage vehicle registrations, and access all transportation-related services online",
      },
      employment: {
        title: "Employment & Careers",
        description: "Explore government job opportunities, submit applications, track career development, and access workforce development programs through integrated platforms",
      },
      documents: {
        title: "Certificates & Authentication",
        description: "Request official certificates, authenticate documents, obtain permits and approvals, all processed digitally with secure verification",
      },
      civil: {
        title: "Civil Registry & Identity",
        description: "Manage civil registry records, obtain identity documents, register vital events, and access comprehensive population registration services",
      },
      business: {
        title: "Business & Commerce",
        description: "Launch and manage your business with streamlined company registration, commercial licensing, tax services, and comprehensive business support",
      },
    },
    footer: {
      about: "About Hukoomi",
      aboutText: "The unified government services portal of the State of Qatar, delivering excellence in digital governance and citizen-centric services.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      rights: "All Rights Reserved - State of Qatar",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      about: "عن قطر",
      directory: "الدليل",
      openData: "البيانات المفتوحة",
      login: "تسجيل الدخول",
    },
    hero: {
      badge: "الحكومة الرقمية الرائدة 2025",
      title: "جدد البطاقة الصحية",
      titleHighlight: "في دقائق عبر الإنترنت",
      description: "تجديد البطاقة الصحية في قطر أصبح سهلاً. وصول لخدمات البطاقة الصحية، التجديد الفوري عبر الإنترنت، وإدارة جميع المستندات الصحية من خلال منصتنا الرقمية الآمنة. سريع ومريح ومتاح 24/7.",
      exploreServices: "جدد البطاقة الصحية الآن",
      searchPortal: "البحث عن خدمة",
    },
    stats: {
      services: "خدمة حكومية",
      citizens: "مواطن ومقيم",
      satisfaction: "نسبة الرضا",
      digital: "خدمة رقمية متاحة",
    },
    servicesSection: {
      title: "الخدمات المميزة",
      subtitle: "اكتشف الخدمات الرقمية الشاملة المصممة لتبسيط تعاملك مع الجهات الحكومية عبر جميع القطاعات",
      health: {
        title: "تجديد البطاقة الصحية قطر",
        description: "جدد البطاقة الصحية في قطر عبر الإنترنت في دقائق. إدارة البطاقة الصحية الشاملة، خدمة التجديد الفوري، حجز المواعيد، الوصول للسجلات الطبية، وخدمات الرعاية الصحية الشاملة - كلها متاحة 24/7",
      },
      traffic: {
        title: "النقل والمرور",
        description: "تحقق من المخالفات المرورية وسددها، جدد رخص القيادة، أدر تسجيل المركبات، واحصل على جميع خدمات النقل عبر الإنترنت",
      },
      employment: {
        title: "التوظيف والمهن",
        description: "استكشف الفرص الوظيفية الحكومية، قدم طلباتك، تابع تطورك المهني، واحصل على برامج تطوير القوى العاملة عبر المنصات المتكاملة",
      },
      documents: {
        title: "الشهادات والتوثيق",
        description: "اطلب الشهادات الرسمية، وثق المستندات، احصل على التصاريح والموافقات، جميعها تُعالج رقمياً بتحقق آمن",
      },
      civil: {
        title: "السجل المدني والهوية",
        description: "أدر سجلات السجل المدني، احصل على وثائق الهوية، سجل الأحداث الحيوية، واحصل على خدمات تسجيل السكان الشاملة",
      },
      business: {
        title: "الأعمال والتجارة",
        description: "أطلق وأدر عملك بتسجيل مبسط للشركات، التراخيص التجارية، الخدمات الضريبية، والدعم الشامل للأعمال",
      },
    },
    footer: {
      about: "عن حكومي",
      aboutText: "البوابة الموحدة للخدمات الحكومية في دولة قطر، نقدم التميز في الحوكمة الرقمية والخدمات المرتكزة على المواطن.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة - دولة قطر",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    // Set RTL for Arabic
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
