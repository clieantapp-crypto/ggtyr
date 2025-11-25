import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const { language } = useLanguage();

  const faqsEn = [
    {
      question: "What is Hukoomi?",
      answer: "Hukoomi is the official e-government portal of the State of Qatar, providing centralized access to over 2,300 government services. It serves as a one-stop platform for citizens, residents, and businesses to access information and complete transactions with government entities digitally."
    },
    {
      question: "How do I create an account on Hukoomi?",
      answer: "To create an account, click on the 'Register' or 'Sign Up' button on the homepage. You will need to provide your Qatar ID number, mobile number, and email address. Follow the verification steps sent to your mobile and email to complete the registration process."
    },
    {
      question: "What services are available on Hukoomi?",
      answer: "Hukoomi offers a wide range of services including health card renewal, traffic violations inquiry and payment, business registration, employment services, visa applications, utility bill payments, document authentication, education services, and much more. You can browse all services by category on our services page."
    },
    {
      question: "How can I renew my health card online?",
      answer: "Log in to your Hukoomi account, navigate to Health Services, select 'Health Card Renewal', fill in the required information, upload necessary documents if requested, and proceed with payment. Your renewed health card will be processed and you'll receive a confirmation via SMS and email."
    },
    {
      question: "Is there a fee for using Hukoomi services?",
      answer: "Creating an account and browsing information on Hukoomi is free. However, specific government services may have associated fees as determined by the relevant government entities. Payment can be made securely online using credit/debit cards or other approved payment methods."
    },
    {
      question: "How do I check my traffic violations?",
      answer: "Go to the Traffic Services section, select 'Traffic Violations Inquiry', enter your vehicle plate number or driver's license number, and view all outstanding violations. You can also pay fines directly through the portal."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Hukoomi accepts various payment methods including Visa, Mastercard, and other major credit and debit cards. Some services may also accept payment through Qatar mobile wallets and bank transfers. All transactions are secured with encryption."
    },
    {
      question: "How secure is my personal information?",
      answer: "We implement the highest standards of data security including SSL/TLS encryption, secure authentication, regular security audits, and compliance with Qatar's data protection laws. Your personal information is never shared with unauthorized parties and is protected according to our Privacy Policy."
    },
    {
      question: "Can I access Hukoomi services from outside Qatar?",
      answer: "Yes, most Hukoomi services are accessible from anywhere in the world. However, some services may require you to be physically present in Qatar for document collection or in-person verification. Check the specific service requirements for details."
    },
    {
      question: "What should I do if I forgot my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your registered email or mobile number, and follow the password reset instructions sent to you. You'll receive a verification code to create a new password."
    },
    {
      question: "How can I update my personal information?",
      answer: "Log in to your account, go to 'My Profile' or 'Account Settings', and update your personal information such as mobile number, email address, or residence address. Some changes may require verification or documentation."
    },
    {
      question: "Are the services available in languages other than Arabic and English?",
      answer: "Currently, Hukoomi is available in Arabic and English to serve the diverse population of Qatar. We are continuously working to improve accessibility and may add additional languages in the future."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team by calling 109 (24/7 government services hotline), sending an email to support@hukoomi.gov.qa, or using the live chat feature available on the website during business hours."
    },
    {
      question: "What are the system requirements to use Hukoomi?",
      answer: "Hukoomi works on all modern web browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest browser version for optimal performance. The portal is also mobile-responsive and works on smartphones and tablets."
    },
    {
      question: "How long does it take to process service requests?",
      answer: "Processing times vary depending on the specific service and the government entity responsible. Most digital services are processed within 1-5 business days. You can track the status of your applications through your account dashboard."
    },
    {
      question: "Can businesses use Hukoomi for commercial services?",
      answer: "Yes, Hukoomi offers dedicated services for businesses including company registration, commercial licenses, work permits, import/export documentation, and tax services. Business users should register with their commercial registration number."
    },
    {
      question: "What should I do if I encounter technical issues?",
      answer: "If you experience technical difficulties, try clearing your browser cache, updating your browser, or trying a different browser. If the issue persists, contact our technical support team at support@hukoomi.gov.qa with details about the problem and any error messages."
    },
    {
      question: "How can I provide feedback about Hukoomi services?",
      answer: "We welcome your feedback! You can submit feedback through the 'Contact Us' form on the website, email us at feedback@hukoomi.gov.qa, or participate in our periodic satisfaction surveys. Your input helps us improve our services."
    }
  ];

  const faqsAr = [
    {
      question: "ما هو حكومي؟",
      answer: "حكومي هي البوابة الحكومية الإلكترونية الرسمية لدولة قطر، توفر وصولاً مركزيًا لأكثر من 2300 خدمة حكومية. وهي بمثابة منصة شاملة للمواطنين والمقيمين والشركات للوصول إلى المعلومات وإتمام المعاملات مع الجهات الحكومية رقميًا."
    },
    {
      question: "كيف أقوم بإنشاء حساب على حكومي؟",
      answer: "لإنشاء حساب، انقر على زر 'التسجيل' أو 'إنشاء حساب' في الصفحة الرئيسية. ستحتاج إلى تقديم رقم البطاقة الشخصية القطرية ورقم الهاتف المحمول وعنوان البريد الإلكتروني. اتبع خطوات التحقق المرسلة إلى هاتفك المحمول والبريد الإلكتروني لإكمال عملية التسجيل."
    },
    {
      question: "ما هي الخدمات المتاحة على حكومي؟",
      answer: "تقدم حكومي مجموعة واسعة من الخدمات بما في ذلك تجديد البطاقة الصحية، الاستعلام عن المخالفات المرورية ودفعها، تسجيل الشركات، خدمات التوظيف، طلبات التأشيرات، دفع فواتير المرافق، توثيق المستندات، الخدمات التعليمية، والكثير غير ذلك. يمكنك تصفح جميع الخدمات حسب الفئة في صفحة الخدمات."
    },
    {
      question: "كيف يمكنني تجديد بطاقتي الصحية عبر الإنترنت؟",
      answer: "سجل الدخول إلى حسابك في حكومي، انتقل إلى الخدمات الصحية، حدد 'تجديد البطاقة الصحية'، املأ المعلومات المطلوبة، حمّل المستندات اللازمة إذا طُلب منك ذلك، واستمر في الدفع. سيتم معالجة بطاقتك الصحية المجددة وستتلقى تأكيدًا عبر الرسائل القصيرة والبريد الإلكتروني."
    },
    {
      question: "هل هناك رسوم لاستخدام خدمات حكومي؟",
      answer: "إنشاء حساب وتصفح المعلومات على حكومي مجاني. ومع ذلك، قد تكون للخدمات الحكومية المحددة رسوم مرتبطة بها كما تحددها الجهات الحكومية ذات الصلة. يمكن الدفع بشكل آمن عبر الإنترنت باستخدام بطاقات الائتمان/الخصم أو طرق الدفع المعتمدة الأخرى."
    },
    {
      question: "كيف أتحقق من مخالفاتي المرورية؟",
      answer: "انتقل إلى قسم الخدمات المرورية، حدد 'الاستعلام عن المخالفات المرورية'، أدخل رقم لوحة مركبتك أو رقم رخصة القيادة، واعرض جميع المخالفات المستحقة. يمكنك أيضًا دفع الغرامات مباشرة من خلال البوابة."
    },
    {
      question: "ما هي طرق الدفع المقبولة؟",
      answer: "تقبل حكومي طرق دفع مختلفة بما في ذلك فيزا وماستركارد وبطاقات الائتمان والخصم الرئيسية الأخرى. قد تقبل بعض الخدمات أيضًا الدفع من خلال المحافظ الإلكترونية القطرية والتحويلات البنكية. جميع المعاملات مؤمنة بالتشفير."
    },
    {
      question: "ما مدى أمان معلوماتي الشخصية؟",
      answer: "نطبق أعلى معايير أمن البيانات بما في ذلك تشفير SSL/TLS، المصادقة الآمنة، عمليات التدقيق الأمني المنتظمة، والامتثال لقوانين حماية البيانات في قطر. لا يتم مشاركة معلوماتك الشخصية مع أطراف غير مصرح لها ويتم حمايتها وفقًا لسياسة الخصوصية الخاصة بنا."
    },
    {
      question: "هل يمكنني الوصول إلى خدمات حكومي من خارج قطر؟",
      answer: "نعم، معظم خدمات حكومي متاحة من أي مكان في العالم. ومع ذلك، قد تتطلب بعض الخدمات تواجدك فعليًا في قطر لاستلام المستندات أو التحقق الشخصي. تحقق من متطلبات الخدمة المحددة للحصول على التفاصيل."
    },
    {
      question: "ماذا علي أن أفعل إذا نسيت كلمة المرور الخاصة بي؟",
      answer: "انقر على 'نسيت كلمة المرور' في صفحة تسجيل الدخول، أدخل بريدك الإلكتروني أو رقم هاتفك المحمول المسجل، واتبع تعليمات إعادة تعيين كلمة المرور المرسلة إليك. ستتلقى رمز تحقق لإنشاء كلمة مرور جديدة."
    },
    {
      question: "كيف يمكنني تحديث معلوماتي الشخصية؟",
      answer: "سجل الدخول إلى حسابك، انتقل إلى 'ملفي الشخصي' أو 'إعدادات الحساب'، وقم بتحديث معلوماتك الشخصية مثل رقم الهاتف المحمول أو عنوان البريد الإلكتروني أو عنوان الإقامة. قد تتطلب بعض التغييرات التحقق أو التوثيق."
    },
    {
      question: "هل الخدمات متاحة بلغات أخرى غير العربية والإنجليزية؟",
      answer: "حاليًا، حكومي متاحة باللغتين العربية والإنجليزية لخدمة سكان قطر المتنوعين. نعمل باستمرار على تحسين إمكانية الوصول وقد نضيف لغات إضافية في المستقبل."
    },
    {
      question: "كيف أتواصل مع خدمة العملاء؟",
      answer: "يمكنك الاتصال بفريق خدمة العملاء لدينا عن طريق الاتصال بالرقم 109 (الخط الساخن للخدمات الحكومية على مدار الساعة)، أو إرسال بريد إلكتروني إلى support@hukoomi.gov.qa، أو استخدام ميزة الدردشة المباشرة المتاحة على الموقع خلال ساعات العمل."
    },
    {
      question: "ما هي متطلبات النظام لاستخدام حكومي؟",
      answer: "تعمل حكومي على جميع متصفحات الويب الحديثة بما في ذلك Chrome وFirefox وSafari وEdge. نوصي باستخدام أحدث إصدار من المتصفح للحصول على أداء مثالي. البوابة أيضًا متجاوبة مع الأجهزة المحمولة وتعمل على الهواتف الذكية والأجهزة اللوحية."
    },
    {
      question: "كم من الوقت يستغرق معالجة طلبات الخدمة؟",
      answer: "تختلف أوقات المعالجة اعتمادًا على الخدمة المحددة والجهة الحكومية المسؤولة. تتم معالجة معظم الخدمات الرقمية في غضون 1-5 أيام عمل. يمكنك تتبع حالة طلباتك من خلال لوحة تحكم حسابك."
    },
    {
      question: "هل يمكن للشركات استخدام حكومي للخدمات التجارية؟",
      answer: "نعم، تقدم حكومي خدمات مخصصة للشركات بما في ذلك تسجيل الشركات، التراخيص التجارية، تصاريح العمل، وثائق الاستيراد/التصدير، والخدمات الضريبية. يجب على مستخدمي الأعمال التسجيل برقم التسجيل التجاري الخاص بهم."
    },
    {
      question: "ماذا علي أن أفعل إذا واجهت مشكلات تقنية؟",
      answer: "إذا واجهت صعوبات تقنية، حاول مسح ذاكرة التخزين المؤقت للمتصفح، أو تحديث المتصفح، أو تجربة متصفح آخر. إذا استمرت المشكلة، اتصل بفريق الدعم الفني لدينا على support@hukoomi.gov.qa مع تفاصيل حول المشكلة وأي رسائل خطأ."
    },
    {
      question: "كيف يمكنني تقديم ملاحظات حول خدمات حكومي؟",
      answer: "نرحب بملاحظاتك! يمكنك تقديم الملاحظات من خلال نموذج 'اتصل بنا' على الموقع، أو مراسلتنا عبر البريد الإلكتروني على feedback@hukoomi.gov.qa، أو المشاركة في استطلاعات الرضا الدورية. مساهمتك تساعدنا على تحسين خدماتنا."
    }
  ];

  const currentFaqs = language === "en" ? faqsEn : faqsAr;

  // Generate JSON-LD structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{language === "en" ? "Frequently Asked Questions - Hukoomi" : "الأسئلة الشائعة - حكومي"}</title>
        <meta 
          name="description" 
          content={language === "en" 
            ? "Find answers to common questions about Hukoomi services, account management, payments, and technical support for Qatar's e-government portal." 
            : "اعثر على إجابات للأسئلة الشائعة حول خدمات حكومي وإدارة الحساب والمدفوعات والدعم الفني لبوابة قطر الحكومية الإلكترونية."}
        />
        <link rel="canonical" href="https://hukoomi.gov.qa/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
          </h1>
          <p className="text-lg text-muted-foreground" dir={language === "ar" ? "rtl" : "ltr"}>
            {language === "en" 
              ? "Find answers to common questions about Hukoomi services, features, and support." 
              : "اعثر على إجابات للأسئلة الشائعة حول خدمات حكومي وميزاتها والدعم."}
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {currentFaqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-soft"
            >
              <AccordionTrigger 
                className="text-left hover:no-underline py-5"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground pb-5 leading-relaxed"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <section className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/20">
          <h2 className="text-2xl font-semibold text-foreground mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
            {language === "en" ? "Still Have Questions?" : "لا تزال لديك أسئلة؟"}
          </h2>
          <p className="text-muted-foreground mb-6" dir={language === "ar" ? "rtl" : "ltr"}>
            {language === "en" 
              ? "If you couldn't find the answer you were looking for, our support team is here to help." 
              : "إذا لم تتمكن من العثور على الإجابة التي كنت تبحث عنها، فإن فريق الدعم لدينا هنا للمساعدة."}
          </p>
          <div className="grid md:grid-cols-2 gap-4" dir={language === "ar" ? "rtl" : "ltr"}>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                {language === "en" ? "Phone Support" : "الدعم الهاتفي"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Call us at: " : "اتصل بنا على: "}
                <a href="tel:+974109" className="text-accent hover:underline font-medium">
                  +974 109
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "en" ? "Available 24/7" : "متاح على مدار الساعة"}
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                {language === "en" ? "Email Support" : "الدعم عبر البريد الإلكتروني"}
              </h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:support@hukoomi.gov.qa" className="text-accent hover:underline">
                  support@hukoomi.gov.qa
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "en" ? "Response within 24 hours" : "الرد خلال 24 ساعة"}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;