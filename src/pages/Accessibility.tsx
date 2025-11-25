import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Accessibility = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "en" ? "Accessibility Statement" : "بيان إمكانية الوصول"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          {language === "en" ? (
            <>
              <section>
                <p className="text-sm text-muted-foreground mb-4">
                  Last Updated: November 23, 2025
                </p>
                <p>
                  The State of Qatar is committed to ensuring digital accessibility for all citizens, residents, and visitors, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Our Commitment
                </h2>
                <p>
                  We strive to ensure that our e-government portal is accessible to people with diverse abilities, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Visual impairments (blindness, low vision, color blindness)</li>
                  <li>Hearing impairments (deafness, hard of hearing)</li>
                  <li>Motor impairments (difficulty using mouse, limited mobility)</li>
                  <li>Cognitive and learning disabilities</li>
                  <li>Speech impairments</li>
                  <li>Temporary disabilities or situational limitations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Conformance Standards
                </h2>
                <p>
                  Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and improve usability for all users.
                </p>
                <p className="mt-4">
                  We are committed to meeting the following international standards:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines</li>
                  <li><strong>Section 508:</strong> U.S. Federal Accessibility Standards</li>
                  <li><strong>EN 301 549:</strong> European Accessibility Standard</li>
                  <li><strong>Qatar National Standards:</strong> Local accessibility requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Accessibility Features
                </h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Navigation and Interface
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Keyboard Navigation:</strong> All functionality is accessible via keyboard</li>
                  <li><strong>Skip Links:</strong> Quick navigation to main content areas</li>
                  <li><strong>Consistent Layout:</strong> Predictable structure across all pages</li>
                  <li><strong>Clear Focus Indicators:</strong> Visible focus states for interactive elements</li>
                  <li><strong>Logical Tab Order:</strong> Intuitive navigation sequence</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Visual Design
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Color Contrast:</strong> Minimum 4.5:1 ratio for normal text, 3:1 for large text</li>
                  <li><strong>Text Resizing:</strong> Content readable when text size increased up to 200%</li>
                  <li><strong>Responsive Design:</strong> Optimized for various screen sizes and devices</li>
                  <li><strong>No Color-Only Information:</strong> Information not conveyed by color alone</li>
                  <li><strong>Readable Fonts:</strong> Clear, legible typography</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Content and Media
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Alternative Text:</strong> Descriptive alt text for all images</li>
                  <li><strong>Captions and Transcripts:</strong> Available for video and audio content</li>
                  <li><strong>Clear Language:</strong> Simple, understandable content</li>
                  <li><strong>Heading Structure:</strong> Proper heading hierarchy (H1-H6)</li>
                  <li><strong>Descriptive Links:</strong> Link text clearly indicates destination</li>
                  <li><strong>Document Accessibility:</strong> PDFs and documents are accessible</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Forms and Input
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Label Association:</strong> All form fields have clear labels</li>
                  <li><strong>Error Identification:</strong> Clear error messages and guidance</li>
                  <li><strong>Input Assistance:</strong> Help text and instructions provided</li>
                  <li><strong>Time Limits:</strong> Adjustable time limits for completing tasks</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Screen Reader Support
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>ARIA Labels:</strong> Proper ARIA attributes for dynamic content</li>
                  <li><strong>Semantic HTML:</strong> Meaningful HTML5 elements</li>
                  <li><strong>Live Regions:</strong> Announcements for dynamic updates</li>
                  <li><strong>Hidden Content:</strong> Properly hidden decorative elements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Assistive Technologies
                </h2>
                <p>
                  Our website is designed to work with commonly used assistive technologies, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software (ZoomText, MAGic)</li>
                  <li>Speech recognition software (Dragon NaturallySpeaking)</li>
                  <li>Alternative input devices (switches, eye-tracking devices)</li>
                  <li>Keyboard-only navigation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Supported Browsers
                </h2>
                <p>
                  For optimal accessibility, we recommend using the latest versions of:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Edge</li>
                  <li>Safari (macOS and iOS)</li>
                </ul>
                <p className="mt-4">
                  We support these browsers with common assistive technologies on Windows, macOS, iOS, and Android operating systems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Known Limitations
                </h2>
                <p>
                  Despite our best efforts, some content may not be fully accessible. We are aware of the following limitations and are working to address them:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Some PDF documents may not be fully accessible (we are working to remediate these)</li>
                  <li>Certain legacy content may not meet current standards (being updated)</li>
                  <li>Some third-party embedded content may have accessibility barriers</li>
                  <li>Historical archived content may have limited accessibility</li>
                </ul>
                <p className="mt-4">
                  If you encounter accessibility barriers, please contact us, and we will work to provide the information in an accessible format.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Alternative Access Methods
                </h2>
                <p>
                  If you experience difficulty accessing any content or feature on our website, we offer alternative ways to access government services:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>Phone Support:</strong> Call our helpline at +974 109</li>
                  <li><strong>In-Person Assistance:</strong> Visit our service centers</li>
                  <li><strong>Email Requests:</strong> Contact accessibility@hukoomi.gov.qa</li>
                  <li><strong>Alternative Formats:</strong> Request documents in accessible formats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Testing and Monitoring
                </h2>
                <p>
                  We regularly test our website for accessibility using:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Automated accessibility testing tools</li>
                  <li>Manual testing with keyboard-only navigation</li>
                  <li>Screen reader testing with multiple technologies</li>
                  <li>User testing with people with disabilities</li>
                  <li>Third-party accessibility audits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Ongoing Improvements
                </h2>
                <p>
                  Accessibility is an ongoing commitment. We continuously work to:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>Conduct regular accessibility audits</li>
                  <li>Train our content creators and developers</li>
                  <li>Update our accessibility guidelines and standards</li>
                  <li>Incorporate user feedback into improvements</li>
                  <li>Monitor emerging accessibility technologies and standards</li>
                  <li>Remediate identified accessibility issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Feedback and Complaints
                </h2>
                <p>
                  We welcome feedback on the accessibility of our e-government portal. If you encounter accessibility barriers or have suggestions for improvement:
                </p>
                
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-semibold mb-3">Contact Our Accessibility Team:</p>
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> accessibility@hukoomi.gov.qa</li>
                    <li><strong>Phone:</strong> +974 109 (Government Services Hotline)</li>
                    <li><strong>Online Form:</strong> Available on our contact page</li>
                    <li><strong>Address:</strong> Accessibility Office, E-Government Portal, Doha, Qatar</li>
                  </ul>
                </div>

                <p className="mt-4">
                  When reporting accessibility issues, please include:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>The specific page URL where you encountered the issue</li>
                  <li>A description of the problem</li>
                  <li>The assistive technology you were using (if applicable)</li>
                  <li>Your browser and operating system</li>
                  <li>Any error messages you received</li>
                </ul>

                <p className="mt-4">
                  We aim to respond to accessibility feedback within 5 business days and resolve issues as quickly as possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Formal Complaints Process
                </h2>
                <p>
                  If you are not satisfied with our response to your accessibility concern, you may:
                </p>
                <ol className="list-decimal list-inside space-y-2 mr-6">
                  <li>Submit a formal complaint to our Accessibility Coordinator</li>
                  <li>Request an escalation to senior management</li>
                  <li>Contact the relevant government oversight body</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Additional Resources
                </h2>
                <p>
                  For more information about web accessibility, visit:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li><strong>W3C Web Accessibility Initiative:</strong> <a href="https://www.w3.org/WAI/" className="text-accent hover:underline">www.w3.org/WAI</a></li>
                  <li><strong>WebAIM:</strong> <a href="https://webaim.org/" className="text-accent hover:underline">webaim.org</a></li>
                  <li><strong>Qatar Accessibility Standards:</strong> Contact us for local guidelines</li>
                </ul>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-semibold mb-2">Our Promise</p>
                <p className="text-sm">
                  The State of Qatar is dedicated to providing equitable access to government services for all. We view accessibility not just as a legal requirement, but as a fundamental right and core value in serving our diverse community.
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
                  تلتزم دولة قطر بضمان إمكانية الوصول الرقمي لجميع المواطنين والمقيمين والزوار، بما في ذلك الأشخاص ذوي الإعاقة. نعمل باستمرار على تحسين تجربة المستخدم للجميع وتطبيق معايير إمكانية الوصول ذات الصلة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  التزامنا
                </h2>
                <p dir="rtl">
                  نسعى جاهدين لضمان إمكانية الوصول إلى بوابتنا الحكومية الإلكترونية للأشخاص ذوي القدرات المتنوعة، بما في ذلك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>ضعف البصر (العمى، ضعف البصر، عمى الألوان)</li>
                  <li>ضعف السمع (الصمم، ضعف السمع)</li>
                  <li>إعاقات حركية (صعوبة استخدام الماوس، محدودية الحركة)</li>
                  <li>الإعاقات المعرفية والتعليمية</li>
                  <li>إعاقات النطق</li>
                  <li>الإعاقات المؤقتة أو القيود الظرفية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  معايير المطابقة
                </h2>
                <p dir="rtl">
                  يهدف موقعنا إلى التوافق مع إرشادات الوصول إلى محتوى الويب (WCAG) 2.1 المستوى AA. توضح هذه الإرشادات كيفية جعل محتوى الويب أكثر سهولة للأشخاص ذوي الإعاقة وتحسين سهولة الاستخدام لجميع المستخدمين.
                </p>
                <p className="mt-4" dir="rtl">
                  نحن ملتزمون بالوفاء بالمعايير الدولية التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>WCAG 2.1 المستوى AA:</strong> إرشادات الوصول إلى محتوى الويب</li>
                  <li><strong>القسم 508:</strong> معايير إمكانية الوصول الفيدرالية الأمريكية</li>
                  <li><strong>EN 301 549:</strong> المعيار الأوروبي لإمكانية الوصول</li>
                  <li><strong>المعايير الوطنية القطرية:</strong> متطلبات إمكانية الوصول المحلية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  ميزات إمكانية الوصول
                </h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  التنقل والواجهة
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>التنقل بلوحة المفاتيح:</strong> جميع الوظائف متاحة عبر لوحة المفاتيح</li>
                  <li><strong>روابط التخطي:</strong> التنقل السريع إلى مناطق المحتوى الرئيسية</li>
                  <li><strong>تخطيط متسق:</strong> هيكل يمكن التنبؤ به عبر جميع الصفحات</li>
                  <li><strong>مؤشرات تركيز واضحة:</strong> حالات تركيز مرئية للعناصر التفاعلية</li>
                  <li><strong>ترتيب تبويب منطقي:</strong> تسلسل تنقل بديهي</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  التصميم البصري
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>تباين الألوان:</strong> نسبة 4.5:1 كحد أدنى للنص العادي، 3:1 للنص الكبير</li>
                  <li><strong>تغيير حجم النص:</strong> المحتوى قابل للقراءة عند زيادة حجم النص حتى 200٪</li>
                  <li><strong>تصميم متجاوب:</strong> محسّن لمختلف أحجام الشاشات والأجهزة</li>
                  <li><strong>لا معلومات بالألوان فقط:</strong> لا يتم نقل المعلومات بالألوان وحدها</li>
                  <li><strong>خطوط قابلة للقراءة:</strong> طباعة واضحة ومقروءة</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  المحتوى والوسائط
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>النص البديل:</strong> نص بديل وصفي لجميع الصور</li>
                  <li><strong>التسميات التوضيحية والنصوص:</strong> متوفرة لمحتوى الفيديو والصوت</li>
                  <li><strong>لغة واضحة:</strong> محتوى بسيط ومفهوم</li>
                  <li><strong>هيكل العناوين:</strong> تسلسل هرمي مناسب للعناوين (H1-H6)</li>
                  <li><strong>روابط وصفية:</strong> نص الرابط يشير بوضوح إلى الوجهة</li>
                  <li><strong>إمكانية الوصول إلى المستندات:</strong> ملفات PDF والمستندات قابلة للوصول</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  النماذج والإدخال
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>ربط التسميات:</strong> جميع حقول النموذج لها تسميات واضحة</li>
                  <li><strong>تحديد الأخطاء:</strong> رسائل خطأ وإرشادات واضحة</li>
                  <li><strong>مساعدة الإدخال:</strong> نص المساعدة والتعليمات المقدمة</li>
                  <li><strong>حدود الوقت:</strong> حدود زمنية قابلة للتعديل لإكمال المهام</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" dir="rtl">
                  دعم قارئ الشاشة
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>تسميات ARIA:</strong> سمات ARIA المناسبة للمحتوى الديناميكي</li>
                  <li><strong>HTML دلالي:</strong> عناصر HTML5 ذات معنى</li>
                  <li><strong>المناطق المباشرة:</strong> إعلانات للتحديثات الديناميكية</li>
                  <li><strong>المحتوى المخفي:</strong> عناصر الزينة المخفية بشكل صحيح</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  التقنيات المساعدة
                </h2>
                <p dir="rtl">
                  تم تصميم موقعنا للعمل مع التقنيات المساعدة الشائعة الاستخدام، بما في ذلك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>قارئات الشاشة (JAWS، NVDA، VoiceOver، TalkBack)</li>
                  <li>برامج تكبير الشاشة (ZoomText، MAGic)</li>
                  <li>برامج التعرف على الكلام (Dragon NaturallySpeaking)</li>
                  <li>أجهزة الإدخال البديلة (المفاتيح، أجهزة تتبع العين)</li>
                  <li>التنقل بلوحة المفاتيح فقط</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  المتصفحات المدعومة
                </h2>
                <p dir="rtl">
                  للحصول على أفضل إمكانية وصول، نوصي باستخدام أحدث إصدارات:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>جوجل كروم</li>
                  <li>موزيلا فايرفوكس</li>
                  <li>مايكروسوفت إيدج</li>
                  <li>سفاري (macOS وiOS)</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  ندعم هذه المتصفحات مع التقنيات المساعدة الشائعة على أنظمة تشغيل Windows وmacOS وiOS وAndroid.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  القيود المعروفة
                </h2>
                <p dir="rtl">
                  على الرغم من بذل قصارى جهدنا، قد لا يكون بعض المحتوى قابلاً للوصول بالكامل. نحن على دراية بالقيود التالية ونعمل على معالجتها:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>قد لا تكون بعض مستندات PDF قابلة للوصول بالكامل (نعمل على معالجتها)</li>
                  <li>قد لا يفي بعض المحتوى القديم بالمعايير الحالية (يتم التحديث)</li>
                  <li>قد يحتوي بعض المحتوى المضمن من طرف ثالث على عوائق أمام إمكانية الوصول</li>
                  <li>قد يكون للمحتوى المؤرشف التاريخي إمكانية وصول محدودة</li>
                </ul>
                <p className="mt-4" dir="rtl">
                  إذا واجهت عوائق أمام إمكانية الوصول، يرجى الاتصال بنا، وسنعمل على توفير المعلومات بتنسيق قابل للوصول.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  طرق الوصول البديلة
                </h2>
                <p dir="rtl">
                  إذا واجهت صعوبة في الوصول إلى أي محتوى أو ميزة على موقعنا، فإننا نقدم طرقًا بديلة للوصول إلى الخدمات الحكومية:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>الدعم الهاتفي:</strong> اتصل بخط المساعدة على 109 974+</li>
                  <li><strong>المساعدة الشخصية:</strong> قم بزيارة مراكز خدماتنا</li>
                  <li><strong>طلبات البريد الإلكتروني:</strong> اتصل بـ accessibility@hukoomi.gov.qa</li>
                  <li><strong>التنسيقات البديلة:</strong> طلب المستندات بتنسيقات قابلة للوصول</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  الاختبار والمراقبة
                </h2>
                <p dir="rtl">
                  نختبر موقعنا بانتظام لإمكانية الوصول باستخدام:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>أدوات اختبار إمكانية الوصول الآلية</li>
                  <li>الاختبار اليدوي باستخدام التنقل بلوحة المفاتيح فقط</li>
                  <li>اختبار قارئ الشاشة بتقنيات متعددة</li>
                  <li>اختبار المستخدم مع الأشخاص ذوي الإعاقة</li>
                  <li>عمليات تدقيق إمكانية الوصول من طرف ثالث</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  التحسينات المستمرة
                </h2>
                <p dir="rtl">
                  إمكانية الوصول التزام مستمر. نعمل باستمرار على:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>إجراء عمليات تدقيق منتظمة لإمكانية الوصول</li>
                  <li>تدريب منشئي المحتوى والمطورين لدينا</li>
                  <li>تحديث إرشاداتنا ومعاييرنا لإمكانية الوصول</li>
                  <li>دمج ملاحظات المستخدمين في التحسينات</li>
                  <li>مراقبة تقنيات ومعايير إمكانية الوصول الناشئة</li>
                  <li>معالجة مشكلات إمكانية الوصول المحددة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  الملاحظات والشكاوى
                </h2>
                <p dir="rtl">
                  نرحب بالملاحظات حول إمكانية الوصول إلى بوابتنا الحكومية الإلكترونية. إذا واجهت عوائق أمام إمكانية الوصول أو لديك اقتراحات للتحسين:
                </p>
                
                <div className="bg-muted p-6 rounded-lg mt-4" dir="rtl">
                  <p className="font-semibold mb-3">اتصل بفريق إمكانية الوصول لدينا:</p>
                  <ul className="space-y-2">
                    <li><strong>البريد الإلكتروني:</strong> accessibility@hukoomi.gov.qa</li>
                    <li><strong>الهاتف:</strong> 109 974+ (الخط الساخن للخدمات الحكومية)</li>
                    <li><strong>النموذج الإلكتروني:</strong> متاح على صفحة الاتصال الخاصة بنا</li>
                    <li><strong>العنوان:</strong> مكتب إمكانية الوصول، البوابة الحكومية الإلكترونية، الدوحة، قطر</li>
                  </ul>
                </div>

                <p className="mt-4" dir="rtl">
                  عند الإبلاغ عن مشكلات إمكانية الوصول، يرجى تضمين:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li>عنوان URL المحدد للصفحة التي واجهت فيها المشكلة</li>
                  <li>وصف للمشكلة</li>
                  <li>التقنية المساعدة التي كنت تستخدمها (إن وجدت)</li>
                  <li>المتصفح ونظام التشغيل الخاص بك</li>
                  <li>أي رسائل خطأ تلقيتها</li>
                </ul>

                <p className="mt-4" dir="rtl">
                  نهدف إلى الرد على ملاحظات إمكانية الوصول في غضون 5 أيام عمل وحل المشكلات في أسرع وقت ممكن.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  عملية الشكاوى الرسمية
                </h2>
                <p dir="rtl">
                  إذا لم تكن راضيًا عن ردنا على قلقك بشأن إمكانية الوصول، يمكنك:
                </p>
                <ol className="list-decimal list-inside space-y-2 mr-6" dir="rtl">
                  <li>تقديم شكوى رسمية إلى منسق إمكانية الوصول لدينا</li>
                  <li>طلب تصعيد إلى الإدارة العليا</li>
                  <li>الاتصال بالهيئة الحكومية الرقابية ذات الصلة</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4" dir="rtl">
                  موارد إضافية
                </h2>
                <p dir="rtl">
                  لمزيد من المعلومات حول إمكانية الوصول إلى الويب، قم بزيارة:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6" dir="rtl">
                  <li><strong>مبادرة W3C لإمكانية الوصول إلى الويب:</strong> <a href="https://www.w3.org/WAI/" className="text-accent hover:underline">www.w3.org/WAI</a></li>
                  <li><strong>WebAIM:</strong> <a href="https://webaim.org/" className="text-accent hover:underline">webaim.org</a></li>
                  <li><strong>معايير إمكانية الوصول في قطر:</strong> اتصل بنا للحصول على الإرشادات المحلية</li>
                </ul>
              </section>

              <section className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20" dir="rtl">
                <p className="text-sm font-semibold mb-2">وعدنا</p>
                <p className="text-sm">
                  تلتزم دولة قطر بتوفير وصول عادل إلى الخدمات الحكومية للجميع. نرى إمكانية الوصول ليس فقط كمتطلب قانوني، ولكن كحق أساسي وقيمة أساسية في خدمة مجتمعنا المتنوع.
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

export default Accessibility;