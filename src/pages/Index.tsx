import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer className="bg-neutral-700" />
    </div>
  );
};

export default Index;