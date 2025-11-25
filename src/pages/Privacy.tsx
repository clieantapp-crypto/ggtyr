import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          {language === "en" ? (
            <>
              <section>
                <p className="text-sm text-muted-foreground mb-4">
                  Last Updated: November 23, 2025
                </p>
                <p>
                  The State of Qatar ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our e-government portal ("Service").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  1. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Personal Information
                </h3>
                <p>
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Register for government services</li>
                  <li>Submit applications or forms</li>
                  <li>Contact us through official channels</li>
                  <li>Subscribe to newsletters or notifications</li>
                </ul>
                <p className="mt-4">
                  This information may include: name, national ID number, date of birth, contact details (phone, email, address), employment information, and any other information required for specific government services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Automatically Collected Information
                </h3>
                <p>
                  When you access our Service, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Access times and dates</li>
                  <li>Pages viewed and navigation patterns</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  2. How We Use Your Information
                </h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Process and deliver government services</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate with you regarding services and updates</li>
                  <li>Improve our website and service delivery</li>
                  <li>Comply with legal obligations</li>
                  <li>Conduct research and analysis for policy development</li>
                  <li>Ensure the security of our systems and users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p>
                  We may share your personal information with:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Government Entities:</strong> Other Qatar government ministries and agencies as required to deliver integrated services</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform under strict confidentiality agreements</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation</li>
                  <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of the State of Qatar and its citizens</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  4. Data Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Encryption of data in transit and at rest (SSL/TLS)</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the type of data and legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  6. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                  <li><strong>Objection:</strong> Object to certain processing of your data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another entity</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact our Data Protection Officer through the contact information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Essential cookies required for service functionality cannot be disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  8. Children's Privacy
                </h2>
                <p>
                  Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  9. International Data Transfers
                </h2>
                <p>
                  Your information is primarily stored and processed within Qatar. If data is transferred internationally, we ensure appropriate safeguards are in place to protect your information in accordance with Qatar's data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated "Last Updated" date. We encourage you to review this policy regularly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  11. Contact Information
                </h2>
                <p>
                  For questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-semibold">Data Protection Officer</p>
                  <p>State of Qatar - E-Government Portal</p>
                  <p>Email: privacy@hukoomi.gov.qa</p>
                  <p>Phone: +974 109 (Government Services Hotline)</p>
                  <p>Address: Doha, State of Qatar</p>
                </div>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm">
                  This Privacy Policy is governed by the laws of the State of Qatar. By using our services, you consent to the collection and use of information in accordance with this policy and Qatar's applicable data protection legislation.
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
                  تلتزم دولة قطر ("نحن" أو "الخاصة بنا") بحماية خصوصيتك ومعلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارتك لبوابتنا الحكومية الإلكترونية ("الخدمة").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  1. المعلومات التي نجمعها
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  المعلومات الشخصية
                </h3>
                <p dir="rtl">
                  قد نجمع معلومات تعريف شخصية تقدمها طوعًا عندما:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>تسجيل في الخدمات الحكومية</li>
                  <li>تقديم طلبات أو نماذج</li>
                  <li>التواصل معنا عبر القنوات الرسمية</li>
                  <li>الاشتراك في النشرات الإخبارية أو الإشعارات</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  قد تتضمن هذه المعلومات: الاسم، رقم الهوية الوطنية، تاريخ الميلاد، تفاصيل الاتصال (الهاتف، البريد الإلكتروني، العنوان)، معلومات التوظيف، وأي معلومات أخرى مطلوبة لخدمات حكومية محددة.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  المعلومات المجمعة تلقائيًا
                </h3>
                <p dir="rtl">
                  عند الوصول إلى خدمتنا، نجمع تلقائيًا معلومات معينة عن جهازك، بما في ذلك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>عنوان IP وبيانات الموقع</li>
                  <li>نوع المتصفح والإصدار</li>
                  <li>نظام التشغيل</li>
                  <li>أوقات وتواريخ الوصول</li>
                  <li>الصفحات المعروضة وأنماط التنقل</li>
                  <li>عناوين المواقع المُحيلة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  2. كيف نستخدم معلوماتك
                </h2>
                <p dir="rtl">نستخدم المعلومات المجمعة من أجل:</p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>معالجة وتقديم الخدمات الحكومية</li>
                  <li>التحقق من هويتك ومنع الاحتيال</li>
                  <li>التواصل معك بخصوص الخدمات والتحديثات</li>
                  <li>تحسين موقعنا وتقديم الخدمات</li>
                  <li>الامتثال للالتزامات القانونية</li>
                  <li>إجراء البحوث والتحليلات لتطوير السياسات</li>
                  <li>ضمان أمن أنظمتنا ومستخدمينا</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  3. مشاركة البيانات والإفصاح عنها
                </h2>
                <p dir="rtl">
                  قد نشارك معلوماتك الشخصية مع:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>الجهات الحكومية:</strong> وزارات وهيئات حكومة قطر الأخرى حسب الحاجة لتقديم خدمات متكاملة</li>
                  <li><strong>مقدمو الخدمات:</strong> البائعون الخارجيون الذين يساعدون في تشغيل منصتنا بموجب اتفاقيات سرية صارمة</li>
                  <li><strong>المتطلبات القانونية:</strong> عند الطلب بموجب القانون أو أمر المحكمة أو اللوائح الحكومية</li>
                  <li><strong>حماية الحقوق:</strong> لحماية حقوق وممتلكات وسلامة دولة قطر ومواطنيها</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  4. أمن البيانات
                </h2>
                <p dir="rtl">
                  نطبق تدابير أمنية متوافقة مع معايير الصناعة لحماية معلوماتك الشخصية، بما في ذلك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>تشفير البيانات أثناء النقل والتخزين (SSL/TLS)</li>
                  <li>المصادقة الآمنة وضوابط الوصول</li>
                  <li>عمليات تدقيق أمنية منتظمة وتقييمات الثغرات</li>
                  <li>تدريب الموظفين على حماية البيانات</li>
                  <li>إجراءات الاستجابة للحوادث والإخطار بالانتهاكات</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪. بينما نسعى لحماية معلوماتك، لا يمكننا ضمان الأمن المطلق.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  5. الاحتفاظ بالبيانات
                </h2>
                <p dir="rtl">
                  نحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، والامتثال للالتزامات القانونية، وحل النزاعات، وإنفاذ اتفاقياتنا. تختلف فترات الاحتفاظ بناءً على نوع البيانات والمتطلبات القانونية.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  6. حقوقك
                </h2>
                <p dir="rtl">لديك الحق في:</p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>الوصول:</strong> طلب نسخ من معلوماتك الشخصية</li>
                  <li><strong>التصحيح:</strong> طلب تصحيح البيانات غير الدقيقة أو غير الكاملة</li>
                  <li><strong>الحذف:</strong> طلب حذف بياناتك (مع مراعاة متطلبات الاحتفاظ القانونية)</li>
                  <li><strong>الاعتراض:</strong> الاعتراض على معالجة معينة لبياناتك</li>
                  <li><strong>قابلية النقل:</strong> طلب نقل بياناتك إلى كيان آخر</li>
                  <li><strong>سحب الموافقة:</strong> سحب الموافقة على معالجة البيانات حيثما ينطبق ذلك</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  لممارسة هذه الحقوق، يرجى الاتصال بمسؤول حماية البيانات من خلال معلومات الاتصال المقدمة أدناه.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  7. ملفات تعريف الارتباط وتقنيات التتبع
                </h2>
                <p dir="rtl">
                  نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح. لا يمكن تعطيل ملفات تعريف الارتباط الأساسية المطلوبة لوظائف الخدمة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  8. خصوصية الأطفال
                </h2>
                <p dir="rtl">
                  خدماتنا غير موجهة للأفراد دون سن 18 عامًا. لا نجمع عن قصد معلومات شخصية من القصر. إذا كنت تعتقد أننا جمعنا معلومات من قاصر، يرجى الاتصال بنا فورًا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  9. نقل البيانات الدولية
                </h2>
                <p dir="rtl">
                  يتم تخزين معلوماتك ومعالجتها بشكل أساسي داخل قطر. في حالة نقل البيانات دوليًا، نضمن وجود ضمانات مناسبة لحماية معلوماتك وفقًا لقوانين حماية البيانات في قطر.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  10. التغييرات على سياسة الخصوصية هذه
                </h2>
                <p dir="rtl">
                  قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سنخطرك بالتغييرات الهامة من خلال نشر السياسة الجديدة على هذه الصفحة مع تاريخ "آخر تحديث" محدث. نشجعك على مراجعة هذه السياسة بانتظام.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  11. معلومات الاتصال
                </h2>
                <p dir="rtl">
                  للأسئلة أو المخاوف أو الطلبات المتعلقة بسياسة الخصوصية هذه أو معلوماتك الشخصية، يرجى الاتصال بـ:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4" dir="rtl">
                  <p className="font-semibold">مسؤول حماية البيانات</p>
                  <p>دولة قطر - البوابة الحكومية الإلكترونية</p>
                  <p>البريد الإلكتروني: privacy@hukoomi.gov.qa</p>
                  <p>الهاتف: 109 974+ (الخط الساخن للخدمات الحكومية)</p>
                  <p>العنوان: الدوحة، دولة قطر</p>
                </div>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20" dir="rtl">
                <p className="text-sm">
                  تخضع سياسة الخصوصية هذه لقوانين دولة قطر. باستخدام خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة وتشريعات حماية البيانات المعمول بها في قطر.
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

export default Privacy;