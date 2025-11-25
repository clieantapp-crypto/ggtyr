import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { z } from "zod";

const ContactUs = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(2, { message: language === "ar" ? "الاسم يجب أن يكون حرفين على الأقل" : "Name must be at least 2 characters" }).max(100),
    email: z.string().trim().email({ message: language === "ar" ? "البريد الإلكتروني غير صحيح" : "Invalid email address" }).max(255),
    phone: z.string().trim().regex(/^[0-9+\-\s()]{8,20}$/, { message: language === "ar" ? "رقم الهاتف غير صحيح" : "Invalid phone number" }),
    subject: z.string().trim().min(3, { message: language === "ar" ? "الموضوع يجب أن يكون 3 أحرف على الأقل" : "Subject must be at least 3 characters" }).max(200),
    message: z.string().trim().min(10, { message: language === "ar" ? "الرسالة يجب أن تكون 10 أحرف على الأقل" : "Message must be at least 10 characters" }).max(1000),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // Validate data
      contactSchema.parse(data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: language === "ar" ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language === "ar" 
          ? "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن."
          : "Thank you for contacting us. We will respond as soon as possible.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: language === "ar" ? "خطأ في البيانات" : "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: language === "ar" ? "حدث خطأ" : "Error occurred",
          description: language === "ar" 
            ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
            : "An error occurred while sending the message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{language === "ar" ? "اتصل بنا - حكومي قطر" : "Contact Us - Hukoomi Qatar"}</title>
        <meta 
          name="description" 
          content={language === "ar" 
            ? "تواصل مع فريق حكومي للدعم والاستفسارات. نحن هنا لخدمتك على مدار الساعة." 
            : "Contact Hukoomi team for support and inquiries. We're here to serve you 24/7."
          } 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": language === "ar" ? "اتصل بنا" : "Contact Us",
            "description": language === "ar" 
              ? "صفحة الاتصال ببوابة حكومي الإلكترونية"
              : "Contact page for Hukoomi E-Government Portal",
            "url": "https://hukoomi.gov.qa/contact",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "Hukoomi - Qatar E-Government Portal",
              "telephone": "+974-109",
              "email": "support@hukoomi.gov.qa",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "QA",
                "addressLocality": "Doha"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+974-109",
                  "contactType": "Customer Service",
                  "availableLanguage": ["Arabic", "English"],
                  "areaServed": "QA"
                },
                {
                  "@type": "ContactPoint",
                  "email": "support@hukoomi.gov.qa",
                  "contactType": "Technical Support",
                  "availableLanguage": ["Arabic", "English"]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <section className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {language === "ar" ? "اتصل بنا" : "Contact Us"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "ar" 
              ? "نحن هنا لمساعدتك. يرجى ملء النموذج أدناه وسنتواصل معك في أقرب وقت ممكن."
              : "We're here to help you. Please fill out the form below and we'll get back to you as soon as possible."
            }
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "الهاتف" : "Phone"}
                  </h3>
                  <a href="tel:109" className="text-muted-foreground hover:text-primary transition-colors">
                    109
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "البريد الإلكتروني" : "Email"}
                  </h3>
                  <a href="mailto:info@motc.gov.qa" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    info@motc.gov.qa
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "العنوان" : "Address"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "الدوحة، دولة قطر"
                      : "Doha, State of Qatar"
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "ar" ? "ساعات العمل" : "Working Hours"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "الأحد - الخميس: 7:00 ص - 2:00 م"
                      : "Sunday - Thursday: 7:00 AM - 2:00 PM"
                    }
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === "ar" 
                      ? "الخدمات الإلكترونية متاحة 24/7"
                      : "Online services available 24/7"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 md:p-8 lg:p-10 rounded-xl border border-border shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">
                {language === "ar" ? "أرسل رسالة" : "Send a Message"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      {language === "ar" ? "الاسم الكامل *" : "Full Name *"}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="h-11"
                      placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      {language === "ar" ? "البريد الإلكتروني *" : "Email Address *"}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="h-11"
                      placeholder={language === "ar" ? "example@email.com" : "example@email.com"}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      {language === "ar" ? "رقم الهاتف *" : "Phone Number *"}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      className="h-11"
                      placeholder={language === "ar" ? "+974 XXXX XXXX" : "+974 XXXX XXXX"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      {language === "ar" ? "الموضوع *" : "Subject *"}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      maxLength={200}
                      className="h-11"
                      placeholder={language === "ar" ? "موضوع الرسالة" : "Message subject"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    {language === "ar" ? "الرسالة *" : "Message *"}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={6}
                    placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    {language === "ar" ? "الحد الأقصى 1000 حرف" : "Maximum 1000 characters"}
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === "ar" ? "جاري الإرسال..." : "Sending...")
                    : (language === "ar" ? "إرسال الرسالة" : "Send Message")
                  }
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
