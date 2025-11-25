import { Card } from "@/components/ui/card";
import { FileText, Car, Heart, Briefcase, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const ServicesGrid = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const services = [
    {
      title: t.servicesSection.health.title,
      description: t.servicesSection.health.description,
      icon: Heart,
      link: "/health-card-renewal",
    },
    {
      title: t.servicesSection.traffic.title,
      description: t.servicesSection.traffic.description,
      icon: Car,
      link: "#",
    },
    {
      title: t.servicesSection.employment.title,
      description: t.servicesSection.employment.description,
      icon: Briefcase,
      link: "#",
    },
    {
      title: t.servicesSection.documents.title,
      description: t.servicesSection.documents.description,
      icon: FileText,
      link: "#",
    },
    {
      title: t.servicesSection.civil.title,
      description: t.servicesSection.civil.description,
      icon: Users,
      link: "#",
    },
    {
      title: t.servicesSection.business.title,
      description: t.servicesSection.business.description,
      icon: Building2,
      link: "#",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 px-4">{t.servicesSection.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.servicesSection.subtitle}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <Card 
              key={index}
              onClick={() => service.link !== "#" && navigate(service.link)}
              className={`group p-4 md:p-6 hover:shadow-soft transition-all duration-300 cursor-pointer border hover:border-primary/30 bg-card ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 ring-2 ring-primary/20' : ''
              }`}
            >
              <div className={`mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${
                index === 0 ? 'bg-primary text-white' : 'bg-primary/5'
              }`}>
                <service.icon className={`h-5 w-5 md:h-6 md:w-6 no-flip ${
                  index === 0 ? 'text-white' : 'text-primary'
                }`} />
              </div>
              <h3 className={`text-base md:text-lg font-semibold mb-1.5 md:mb-2 ${
                index === 0 ? 'text-primary' : 'text-card-foreground'
              }`}>
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              {index === 0 && (
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-primary/20">
                  <p className="text-xs font-semibold text-primary">
                    {language === "en" ? "⚡ Most Popular Service" : "⚡ الخدمة الأكثر طلباً"}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
