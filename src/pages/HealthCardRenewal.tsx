import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { FileHeart } from "lucide-react";

interface FormData {
  cardNumber: string;
  operationType: string;
}

const steps = [
  { label: "Card Information", labelAr: "معلومات البطاقة" },
  { label: "Submission", labelAr: "استكمال التقديم" },
  { label: "Payment Details", labelAr: "تفاصيل الدفع" },
  { label: "Complete Process", labelAr: "إتمام العملية" },
];

export default function HealthCardRenewal() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { operationType: "renewal" },
  });

  const operationType = watch("operationType");

  const onSubmit = (data: FormData) => {
    console.log("FORM DATA:", data);

    if (currentStep < 4) {
      setCurrentStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleClearFields = () => reset();

  return (
    <div
      className="min-h-screen bg-background flex flex-col overflow-x-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navigation />

      <main className="flex-1 px-4 md:px-6 py-4 md:py-6 max-w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-4 md:mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center">
              <FileHeart className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-lg md:text-xl font-bold text-foreground">
              {language === "ar"
                ? "خدمة البطاقة الصحية الإلكترونية"
                : "Electronic Health Card Service"}
            </h1>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            {language === "ar"
              ? "طلب الاستعلام عن البطاقة الصحية -- سوف يستغرق حوالي 20 ثانية لإتمام الطلب."
              : "Health card inquiry request will take about 20 seconds to complete."}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="max-w-3xl mx-auto mb-4">
          <StepIndicator currentStep={currentStep} totalSteps={4} steps={steps} />
        </div>

        <div className="max-w-3xl mx-auto bg-background">
          {/* -------------------------------------------------- */}
          {/*  STEP 1: CARD INFORMATION                          */}
          {/* -------------------------------------------------- */}
          {currentStep === 1 && (
            <>
              <h2 className="text-lg md:text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "معلومات البطاقة" : "Card Information"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Card Number */}
                <div>
                  <Label htmlFor="cardNumber">
                    {language === "ar"
                      ? "الرجاء إدخال رقم البطاقة الشخصية"
                      : "Please enter your personal card number"}
                    <span className="text-destructive">*</span>
                  </Label>

                  <Input
                    id="cardNumber"
                    {...register("cardNumber", {
                      required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message:
                          language === "ar" ? "الرجاء إدخال أرقام فقط" : "Please enter numbers only",
                      },
                    })}
                    placeholder={language === "ar" ? "الرجاء إدخال الرقم" : "Please enter the number"}
                    className="h-12 text-base mt-2"
                  />
                  {errors.cardNumber && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>

                {/* Operation Type */}
                <div>
                  <Label>
                    {language === "ar" ? "نوع العملية" : "Operation Type"}
                    <span className="text-destructive">*</span>
                  </Label>

                  <RadioGroup
                    className="mt-3 space-y-4"
                    value={operationType}
                    onValueChange={(value) => {
                      const event = { target: { name: "operationType", value } };
                      register("operationType").onChange(event);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="renewal" id="renewal" />
                      <Label htmlFor="renewal">
                        {language === "ar" ? "تجديد" : "Renewal"}
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="reprint" id="reprint" />
                      <Label htmlFor="reprint">
                        {language === "ar"
                          ? "إعادة الطبع (ePurse المفقود أو التالف)"
                          : "Reprint (Lost or Damaged ePurse)"}
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="verify" id="verify" />
                      <Label htmlFor="verify">
                        {language === "ar"
                          ? "تحقق من تاريخ انتهاء الصلاحية"
                          : "Verify from expiration date"}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClearFields}
                    className="flex-1 h-12"
                  >
                    {language === "ar" ? "تفريغ الحقول" : "Clear Fields"}
                  </Button>

                  <Button type="submit" className="flex-1 h-12 bg-primary text-primary-foreground">
                    {language === "ar" ? "تابع" : "Continue"}
                  </Button>
                </div>
              </form>
            </>
          )}

          {/* -------------------------------------------------- */}
          {/* STEP 2: PAYMENT DETAILS */}
          {/* -------------------------------------------------- */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "تفاصيل الدفع" : "Payment Details"}
              </h2>

              <p className="text-muted-foreground">
                {language === "ar"
                  ? "هنا ستظهر تفاصيل الدفع بعد التحقق من رقم البطاقة."
                  : "Payment details will appear here after validating the card."}
              </p>

              <div className="flex gap-3 pt-4">
                <Button onClick={goBack} variant="outline" className="flex-1 h-12">
                  {language === "ar" ? "رجوع" : "Back"}
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="flex-1 h-12 bg-primary text-primary-foreground">
                  {language === "ar" ? "متابعة" : "Next"}
                </Button>
              </div>
            </div>
          )}

          {/* -------------------------------------------------- */}
          {/* STEP 3: SUBMISSION */}
          {/* -------------------------------------------------- */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "استكمال التقديم" : "Submission"}
              </h2>

              <p className="text-muted-foreground">
                {language === "ar"
                  ? "راجع تفاصيل الطلب ثم قم بالإرسال."
                  : "Review your details then submit the request."}
              </p>

              <div className="flex gap-3 pt-4">
                <Button onClick={goBack} variant="outline" className="flex-1 h-12">
                  {language === "ar" ? "رجوع" : "Back"}
                </Button>

                <Button onClick={() => setCurrentStep(4)} className="flex-1 h-12 bg-primary text-primary-foreground">
                  {language === "ar" ? "إرسال" : "Submit"}
                </Button>
              </div>
            </div>
          )}

          {/* -------------------------------------------------- */}
          {/* STEP 4: COMPLETE PROCESS */}
          {/* -------------------------------------------------- */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "إتمام العملية" : "Complete Process"}
              </h2>

              <p className="text-green-600 text-lg font-semibold">
                {language === "ar"
                  ? "تم إكمال العملية بنجاح!"
                  : "Your process has been completed successfully!"}
              </p>

              <Button
                className="mt-4 bg-primary text-primary-foreground"
                onClick={() => navigate("/")}
              >
                {language === "ar" ? "العودة إلى الخدمات" : "Back to Services"}
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
