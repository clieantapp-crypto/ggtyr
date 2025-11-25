import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "en" ? "Terms of Service" : "شروط الخدمة"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          {language === "en" ? (
            <>
              <section>
                <p className="text-sm text-muted-foreground mb-4">
                  Last Updated: November 23, 2025
                </p>
                <p>
                  Welcome to the State of Qatar E-Government Portal ("Hukoomi," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
                </p>
                <p className="mt-4">
                  By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By creating an account, accessing, or using any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations of the State of Qatar.
                </p>
                <p className="mt-4">
                  If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  2. Eligibility
                </h2>
                <p>
                  To use the Service, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Not be prohibited from using the Service under Qatar law</li>
                  <li>Provide accurate, current, and complete information during registration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  3. User Accounts and Registration
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Account Creation
                </h3>
                <p>
                  Certain services require you to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>Keep your login credentials confidential</li>
                  <li>Be responsible for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Account Security
                </h3>
                <p>
                  You are solely responsible for maintaining the security of your account. The State of Qatar will not be liable for any loss or damage arising from your failure to protect your account credentials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  4. Acceptable Use
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Use the Service for any unlawful purpose or in violation of any laws</li>
                  <li>Impersonate any person or entity or falsely state your affiliation</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Upload viruses, malware, or any harmful code</li>
                  <li>Engage in any activity that could damage Qatar's reputation or interests</li>
                  <li>Harvest or collect information about other users</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  5. Government Services
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Service Delivery
                </h3>
                <p>
                  The Service provides access to various government services, applications, and information. We strive to ensure accuracy and availability but do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Uninterrupted or error-free service operation</li>
                  <li>That all services will be available at all times</li>
                  <li>That all submitted applications will be approved</li>
                  <li>Specific processing times for applications</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Fees and Payments
                </h3>
                <p>
                  Some government services may require payment of fees. All fees are non-refundable unless specifically stated otherwise or required by law. You agree to pay all applicable fees and charges associated with your use of paid services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  6. Intellectual Property Rights
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Ownership
                </h3>
                <p>
                  All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of the State of Qatar or its licensors.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Limited License
                </h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes in accordance with these Terms.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Restrictions
                </h3>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Copy, modify, or create derivative works of the Service</li>
                  <li>Distribute, sell, lease, or sublicense the Service</li>
                  <li>Remove any copyright or proprietary notices</li>
                  <li>Use government logos or emblems without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  7. User Content
                </h2>
                <p>
                  When you submit information, documents, or content to the Service ("User Content"), you retain ownership but grant us a license to use, process, store, and share this content as necessary to provide services and comply with legal obligations.
                </p>
                <p className="mt-4">
                  You represent and warrant that your User Content:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Is accurate and truthful</li>
                  <li>Does not violate any laws or regulations</li>
                  <li>Does not infringe on any third-party rights</li>
                  <li>Does not contain malicious code or harmful content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  8. Third-Party Links and Services
                </h2>
                <p>
                  The Service may contain links to third-party websites or services. We do not control, endorse, or assume responsibility for any third-party sites or services. Your use of third-party websites is at your own risk and subject to their terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  9. Disclaimer of Warranties
                </h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                  <li>Warranties regarding accuracy, reliability, or availability of the Service</li>
                  <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                  <li>Warranties regarding the results obtained from using the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  10. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, the State of Qatar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or delays</li>
                  <li>Errors or inaccuracies in content</li>
                  <li>Unauthorized access to your information</li>
                  <li>Actions of third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  11. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless the State of Qatar, its ministries, agencies, officers, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any laws or regulations</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your use or misuse of the Service</li>
                  <li>Your User Content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  12. Termination
                </h2>
                <p>
                  We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Extended periods of inactivity</li>
                  <li>Technical or security concerns</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your right to use the Service will immediately cease. Sections that by their nature should survive termination shall survive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  13. Modifications to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on the Service with a new "Last Updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  14. Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of Qatar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  15. Dispute Resolution
                </h2>
                <p>
                  In the event of any dispute, claim, or controversy arising out of or relating to these Terms, the parties agree to first attempt to resolve the matter through good-faith negotiations. If negotiations fail, the dispute shall be resolved through the appropriate legal channels in Qatar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  16. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  17. Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy and any other legal notices published on the Service, constitute the entire agreement between you and the State of Qatar regarding your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  18. Contact Information
                </h2>
                <p>
                  For questions or concerns regarding these Terms, please contact:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-semibold">Legal Department</p>
                  <p>State of Qatar - E-Government Portal</p>
                  <p>Email: legal@hukoomi.gov.qa</p>
                  <p>Phone: +974 109 (Government Services Hotline)</p>
                  <p>Address: Doha, State of Qatar</p>
                </div>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-semibold mb-2">Acknowledgment</p>
                <p className="text-sm">
                  By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className="text-sm text-muted-foreground mb-4" dir="rtl">
                  آخر تحديث: 23 نوفمبر 2025
                </p>
                <p dir="rtl">
                  مرحبًا بك في بوابة دولة قطر الحكومية الإلكترونية ("حكومي" أو "نحن" أو "الخاصة بنا"). تحكم شروط الخدمة هذه ("الشروط") وصولك إلى موقعنا الإلكتروني وخدماتنا وتطبيقاتنا واستخدامك لها (يُشار إليها إجمالاً بـ "الخدمة").
                </p>
                <p className="mt-4" dir="rtl">
                  من خلال الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الخدمة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  1. قبول الشروط
                </h2>
                <p dir="rtl">
                  من خلال إنشاء حساب أو الوصول إلى أي جزء من الخدمة أو استخدامها، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا وجميع القوانين واللوائح المعمول بها في دولة قطر.
                </p>
                <p className="mt-4" dir="rtl">
                  إذا كنت تستخدم الخدمة نيابة عن مؤسسة، فإنك تقر وتضمن أن لديك السلطة لإلزام تلك المؤسسة بهذه الشروط.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  2. الأهلية
                </h2>
                <p dir="rtl">
                  لاستخدام الخدمة، يجب أن:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>تكون بعمر 18 عامًا على الأقل أو سن الرشد في ولايتك القضائية</li>
                  <li>تمتلك الأهلية القانونية للدخول في عقود ملزمة</li>
                  <li>لا تكون ممنوعًا من استخدام الخدمة بموجب قانون قطر</li>
                  <li>تقديم معلومات دقيقة وحديثة وكاملة أثناء التسجيل</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  3. حسابات المستخدمين والتسجيل
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  إنشاء الحساب
                </h3>
                <p dir="rtl">
                  تتطلب بعض الخدمات إنشاء حساب. أنت توافق على:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>تقديم معلومات دقيقة وصادقة</li>
                  <li>الحفاظ على معلوماتك وتحديثها حسب الحاجة</li>
                  <li>الحفاظ على سرية بيانات الدخول الخاصة بك</li>
                  <li>تحمل المسؤولية عن جميع الأنشطة تحت حسابك</li>
                  <li>إخطارنا فورًا بأي وصول غير مصرح به</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  أمان الحساب
                </h3>
                <p dir="rtl">
                  أنت المسؤول الوحيد عن الحفاظ على أمان حسابك. لن تكون دولة قطر مسؤولة عن أي خسارة أو ضرر ناتج عن فشلك في حماية بيانات حسابك.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  4. الاستخدام المقبول
                </h2>
                <p dir="rtl">أنت توافق على عدم:</p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>استخدام الخدمة لأي غرض غير قانوني أو بانتهاك أي قوانين</li>
                  <li>انتحال شخصية أي شخص أو كيان أو الإدلاء ببيان خاطئ عن انتمائك</li>
                  <li>تقديم معلومات خاطئة أو مضللة أو احتيالية</li>
                  <li>التدخل في الخدمة أو الخوادم أو تعطيلها</li>
                  <li>محاولة الوصول غير المصرح به إلى أي جزء من الخدمة</li>
                  <li>تحميل الفيروسات أو البرامج الضارة أو أي رمز ضار</li>
                  <li>الانخراط في أي نشاط قد يضر بسمعة قطر أو مصالحها</li>
                  <li>جمع أو استخراج معلومات حول مستخدمين آخرين</li>
                  <li>استخدام أنظمة آلية للوصول إلى الخدمة دون إذن</li>
                  <li>الهندسة العكسية أو محاولة استخراج الكود المصدري</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  5. الخدمات الحكومية
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  تقديم الخدمة
                </h3>
                <p dir="rtl">
                  توفر الخدمة الوصول إلى مختلف الخدمات والتطبيقات والمعلومات الحكومية. نسعى لضمان الدقة والتوفر ولكن لا نضمن:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>تشغيل الخدمة دون انقطاع أو خالية من الأخطاء</li>
                  <li>توفر جميع الخدمات في جميع الأوقات</li>
                  <li>الموافقة على جميع الطلبات المقدمة</li>
                  <li>أوقات معالجة محددة للطلبات</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  الرسوم والمدفوعات
                </h3>
                <p dir="rtl">
                  قد تتطلب بعض الخدمات الحكومية دفع رسوم. جميع الرسوم غير قابلة للاسترداد ما لم يُذكر خلاف ذلك صراحةً أو يقتضي القانون ذلك. أنت توافق على دفع جميع الرسوم والنفقات المعمول بها المرتبطة باستخدامك للخدمات المدفوعة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  6. حقوق الملكية الفكرية
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  الملكية
                </h3>
                <p dir="rtl">
                  جميع المحتويات والميزات ووظائف الخدمة، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والأيقونات والصور والمقاطع الصوتية والتنزيلات الرقمية ومجموعات البيانات والبرامج، هي ملكية حصرية لدولة قطر أو مرخصيها.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  الترخيص المحدود
                </h3>
                <p dir="rtl">
                  نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى الخدمة واستخدامها للأغراض الشخصية وغير التجارية وفقًا لهذه الشروط.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  القيود
                </h3>
                <p dir="rtl">
                  لا يجوز لك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>نسخ أو تعديل أو إنشاء أعمال مشتقة من الخدمة</li>
                  <li>توزيع أو بيع أو تأجير أو منح تراخيص فرعية للخدمة</li>
                  <li>إزالة أي إشعارات حقوق نشر أو ملكية</li>
                  <li>استخدام الشعارات أو الرموز الحكومية دون إذن</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  7. محتوى المستخدم
                </h2>
                <p dir="rtl">
                  عندما تقدم معلومات أو مستندات أو محتوى إلى الخدمة ("محتوى المستخدم")، فإنك تحتفظ بالملكية ولكنك تمنحنا ترخيصًا لاستخدام ومعالجة وتخزين ومشاركة هذا المحتوى حسب الضرورة لتوفير الخدمات والامتثال للالتزامات القانونية.
                </p>
                <p className="mt-4" dir="rtl">
                  أنت تقر وتضمن أن محتوى المستخدم الخاص بك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>دقيق وصادق</li>
                  <li>لا ينتهك أي قوانين أو لوائح</li>
                  <li>لا ينتهك أي حقوق لطرف ثالث</li>
                  <li>لا يحتوي على رمز ضار أو محتوى ضار</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  8. الروابط والخدمات الخارجية
                </h2>
                <p dir="rtl">
                  قد تحتوي الخدمة على روابط لمواقع أو خدمات خارجية. نحن لا نتحكم في أي مواقع أو خدمات خارجية أو نؤيدها أو نتحمل مسؤوليتها. استخدامك لمواقع الويب الخارجية على مسؤوليتك الخاصة ويخضع لشروطها وأحكامها.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  9. إخلاء المسؤولية عن الضمانات
                </h2>
                <p dir="rtl">
                  يتم توفير الخدمة "كما هي" و "حسب التوفر" دون ضمانات من أي نوع، صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>ضمانات القابلية للتسويق أو الملاءمة لغرض معين أو عدم الانتهاك</li>
                  <li>ضمانات تتعلق بدقة أو موثوقية أو توفر الخدمة</li>
                  <li>ضمانات بأن الخدمة ستكون دون انقطاع أو آمنة أو خالية من الأخطاء</li>
                  <li>ضمانات تتعلق بالنتائج التي تم الحصول عليها من استخدام الخدمة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  10. تحديد المسؤولية
                </h2>
                <p dir="rtl">
                  إلى أقصى حد يسمح به القانون، لن تكون دولة قطر مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>فقدان الأرباح أو البيانات أو الفرص التجارية</li>
                  <li>انقطاع أو تأخير الخدمة</li>
                  <li>الأخطاء أو عدم الدقة في المحتوى</li>
                  <li>الوصول غير المصرح به إلى معلوماتك</li>
                  <li>تصرفات أطراف ثالثة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  11. التعويض
                </h2>
                <p dir="rtl">
                  أنت توافق على تعويض والدفاع عن وإعفاء دولة قطر ووزاراتها ووكالاتها ومسؤوليها وموظفيها ووكلائها من أي مطالبات أو التزامات أو أضرار أو خسائر أو تكاليف أو نفقات ناشئة عن:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>انتهاكك لهذه الشروط</li>
                  <li>انتهاكك لأي قوانين أو لوائح</li>
                  <li>انتهاكك لأي حقوق لطرف ثالث</li>
                  <li>استخدامك أو إساءة استخدامك للخدمة</li>
                  <li>محتوى المستخدم الخاص بك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  12. الإنهاء
                </h2>
                <p dir="rtl">
                  نحتفظ بالحق في تعليق أو إنهاء وصولك إلى الخدمة في أي وقت، مع أو بدون إشعار، لأي سبب، بما في ذلك على سبيل المثال لا الحصر:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>انتهاك هذه الشروط</li>
                  <li>نشاط احتيالي أو غير قانوني</li>
                  <li>فترات طويلة من عدم النشاط</li>
                  <li>مخاوف تقنية أو أمنية</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  عند الإنهاء، سينتهي حقك في استخدام الخدمة فورًا. ستبقى الأقسام التي يجب أن تستمر بطبيعتها بعد الإنهاء سارية المفعول.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  13. التعديلات على الشروط
                </h2>
                <p dir="rtl">
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنخطر المستخدمين بالتغييرات الجوهرية من خلال نشر الشروط المحدثة على الخدمة مع تاريخ "آخر تحديث" جديد. يشكل استمرارك في استخدام الخدمة بعد هذه التعديلات قبولاً للشروط المحدثة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  14. القانون الحاكم والاختصاص القضائي
                </h2>
                <p dir="rtl">
                  تخضع هذه الشروط وتُفسر وفقًا لقوانين دولة قطر. أي نزاعات تنشأ عن هذه الشروط أو استخدامك للخدمة تخضع للاختصاص القضائي الحصري لمحاكم قطر.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  15. حل النزاعات
                </h2>
                <p dir="rtl">
                  في حالة حدوث أي نزاع أو مطالبة أو خلاف ناتج عن هذه الشروط أو متعلق بها، توافق الأطراف على محاولة حل الأمر أولاً من خلال مفاوضات حسنة النية. في حالة فشل المفاوضات، يتم حل النزاع من خلال القنوات القانونية المناسبة في قطر.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  16. القابلية للفصل
                </h2>
                <p dir="rtl">
                  إذا تبين أن أي بند من بنود هذه الشروط غير صحيح أو غير قانوني أو غير قابل للتنفيذ، فستظل الأحكام المتبقية سارية المفعول بالكامل.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  17. الاتفاقية الكاملة
                </h2>
                <p dir="rtl">
                  تشكل هذه الشروط، جنبًا إلى جنب مع سياسة الخصوصية الخاصة بنا وأي إشعارات قانونية أخرى منشورة على الخدمة، الاتفاقية الكاملة بينك وبين دولة قطر فيما يتعلق باستخدامك للخدمة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  18. معلومات الاتصال
                </h2>
                <p dir="rtl">
                  للأسئلة أو المخاوف المتعلقة بهذه الشروط، يرجى الاتصال بـ:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4" dir="rtl">
                  <p className="font-semibold">القسم القانوني</p>
                  <p>دولة قطر - البوابة الحكومية الإلكترونية</p>
                  <p>البريد الإلكتروني: legal@hukoomi.gov.qa</p>
                  <p>الهاتف: 109 974+ (الخط الساخن للخدمات الحكومية)</p>
                  <p>العنوان: الدوحة، دولة قطر</p>
                </div>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20" dir="rtl">
                <p className="text-sm font-semibold mb-2">إقرار</p>
                <p className="text-sm">
                  باستخدام الخدمة، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بشروط الخدمة هذه.
                </p>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;