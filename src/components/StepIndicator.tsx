import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { label: string; labelAr: string }[];
}

export const StepIndicator = ({ currentStep, totalSteps, steps }: StepIndicatorProps) => {
  const { language } = useLanguage();

  return (
    <div className="w-full py-4 md:py-6 overflow-x-hidden">
      <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4 px-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center flex-shrink-0">
            <div
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base lg:text-lg transition-all duration-300",
                step === currentStep
                  ? "bg-primary text-primary-foreground scale-110"
                  : step < currentStep
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  "w-6 md:w-12 lg:w-16 h-0.5 md:h-1 mx-1 md:mx-2 transition-all duration-300",
                  step < currentStep ? "bg-accent" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="hidden md:flex justify-center gap-2 md:gap-4 text-center px-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "text-xs md:text-sm font-medium transition-colors duration-300",
              index + 1 === currentStep
                ? "text-primary"
                : index + 1 < currentStep
                ? "text-accent"
                : "text-muted-foreground"
            )}
          >
            {language === "ar" ? step.labelAr : step.label}
          </div>
        ))}
      </div>
      
      {/* Mobile: Show only current step label */}
      <div className="md:hidden text-center mt-2 px-2">
        <p className="text-xs font-medium text-primary">
          {language === "ar" ? steps[currentStep - 1].labelAr : steps[currentStep - 1].label}
        </p>
      </div>
    </div>
  );
};
