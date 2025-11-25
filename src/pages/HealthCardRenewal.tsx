import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { FileHeart } from "lucide-react";

interface FormData {
  cardNumber: string;
  operationType: string;
}

const steps = [
  { label: "Card Information", labelAr: "معلومات البطاقة" },
  { label: "Payment Details", labelAr: "تفاصيل الدفع" },
  { label: "Submission", labelAr: "استكمال التقديم" },
  { label: "Complete Process", labelAr: "إتمام العملية" },
];

export default function HealthCardRenewal() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      operationType: "renewal",
    },
  });

  const operationType = watch("operationType");

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Move to next step
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClearFields = () => {
    reset();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navigation />
      
      <main className="flex-1 px-4 md:px-6 py-4 md:py-6 max-w-full">
        {/* Compact Header */}
        <div className="max-w-3xl mx-auto mb-4 md:mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <FileHeart className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground no-flip" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                {language === "ar" 
                  ? "خدمة البطاقة الصحية الإلكترونية" 
                  : "Electronic Health Card Service"}
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {language === "ar"
              ? "طلب الاستعلام عن البطاقة الصحية -- سيوقف يستغرق حوالي 20 ثانية لإتمام الطلب."
              : "Health card inquiry request -- will stop. It takes about 20 seconds to complete the request."}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="max-w-3xl mx-auto mb-4">
          <StepIndicator currentStep={currentStep} totalSteps={4} steps={steps} />
        </div>

        {/* Form - No Card, Direct Background */}
        <div className="max-w-3xl mx-auto bg-background">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 pb-3 border-b">
            {language === "ar" ? "معلومات" : "Information"}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Card Number Input */}
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm md:text-base font-medium block">
                {language === "ar"
                  ? "الرجاء إدخال رقم البطاقة الشخصية"
                  : "Please enter your personal card number"}
                <span className="text-destructive mr-1">*</span>
              </Label>
              <Input
                id="cardNumber"
                {...register("cardNumber", {
                  required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: language === "ar" ? "الرجاء إدخال أرقام فقط" : "Please enter numbers only",
                  },
                })}
                placeholder={language === "ar" ? "الرجاء إدخال الرقم" : "Please enter the number"}
                className="h-12 text-base border-2"
                dir={language === "ar" ? "rtl" : "ltr"}
              />
              {errors.cardNumber && (
                <p className="text-sm text-destructive">{errors.cardNumber.message}</p>
              )}
            </div>

            {/* Operation Type Radio Group */}
            <div className="space-y-3">
              <Label className="text-sm md:text-base font-medium block">
                {language === "ar" ? "نوع العملية" : "Operation Type"}
                <span className="text-destructive mr-1">*</span>
              </Label>
              
              <RadioGroup
                value={operationType}
                onValueChange={(value) => {
                  const event = { target: { name: "operationType", value } };
                  register("operationType").onChange(event);
                }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="renewal" id="renewal" className="h-5 w-5" />
                  <Label htmlFor="renewal" className="font-normal cursor-pointer text-base flex-1">
                    {language === "ar" ? "تجديد" : "Renewal"}
                  </Label>
                </div>
                
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="reprint" id="reprint" className="h-5 w-5" />
                  <Label htmlFor="reprint" className="font-normal cursor-pointer text-base flex-1">
                    {language === "ar"
                      ? "إعادة الطبع (ePurse المفقود أو التالف)"
                      : "Reprint (Lost or Damaged ePurse)"}
                  </Label>
                </div>
                
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="verify" id="verify" className="h-5 w-5" />
                  <Label htmlFor="verify" className="font-normal cursor-pointer text-base flex-1">
                    {language === "ar"
                      ? "تدقيق من تاريخ انتهاء الصلاحية"
                      : "Verify from expiration date"}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-6">
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={handleClearFields}
                className="font-semibold flex-1 h-12 text-base border-2"
              >
                {language === "ar" ? "تفريغ الحقول" : "Clear Fields"}
              </Button>
              
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex-1 h-12 text-base"
              >
                {language === "ar" ? "تابع" : "Continue"}
              </Button>
            </div>
          </form>
        </div>

        {/* Back to Services */}
        <div className="text-center mt-8 max-w-3xl mx-auto">
          <Button
            variant="link"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            {language === "ar" ? "العودة إلى الخدمات ←" : "← Back to Services"}
          </Button>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}
