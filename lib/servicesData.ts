export interface ServiceData {
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  metric: string;
  heroImage: string;
  deliverables: { title: string; desc: string; titleAr: string; descAr: string }[];
  faqs: { q: string; a: string; qAr: string; aAr: string }[];
}

export const servicesCatalog: Record<string, ServiceData> = {
  seo: {
    slug: "seo",
    title: "Enterprise SEO & Generative Engine Optimization (GEO)",
    titleAr: "تحسين محركات البحث والذكاء الاصطناعي للمؤسسات (SEO & GEO)",
    tagline: "Capture High-Intent Commercial Search Traffic Across Google & AI Engines in the GCC",
    taglineAr: "اقتنص الباحثين الجادين في محركات البحث ومنصات الذكاء الاصطناعي في الخليج",
    description:
      "Our SEO practice engineered for the UAE market combines deep technical core web vitals optimization, authoritative Arabic/English keyword clustering, and modern Generative Engine Optimization (GEO) so your brand is cited as the top recommendation by ChatGPT, Gemini, and Google SGE.",
    descriptionAr:
      "تجمع خدماتنا لتحسين محركات البحث في الإمارات بين البنية التقنية فائقة السرعة، بناء الكلمات المفتاحية الثنائية، والهيمنة على إجابات منصات الذكاء الاصطناعي لترشيح علامتك التجارية في الصدارة.",
    metric: "+240% Average Organic Inbound Lift",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    deliverables: [
      {
        title: "Technical Architecture & Core Web Vitals Audit",
        titleAr: "تدقيق المعمارية التقنية وسرعة التصفح",
        desc: "Deep crawl auditing to eliminate crawl budget wastage, render-blocking scripts, and server latency on UAE nodes.",
        descAr: "فحص تقني معمق لمعالجة بطء الخوادم وفهرسة الصفحات ورفع سرعة الموقع في الإمارات.",
      },
      {
        title: "Bilingual English & Arabic Semantic Clusters",
        titleAr: "بناء المحتوى الدلالي المزدوج بالعربية والإنجليزية",
        desc: "Targeting high-intent Khaleeji search queries with culturally refined, native Arabic long-tail keywords.",
        descAr: "استهداف الكلمات البحثية الأكثر ربحية بنصوص عربية أصيلة تلائم المستهلك الخليجي.",
      },
      {
        title: "Generative Engine Optimization (GEO)",
        titleAr: "تهيئة الموقع لمحركات الذكاء الاصطناعي (GEO)",
        desc: "Knowledge graph construction, schema markup, and authoritative citations that get your enterprise cited by AI models.",
        descAr: "ربط بيانات علامتك بالبيانات المرجعية المعترف بها عالمياً للظهور في إجابات روبوتات الذكاء الاصطناعي.",
      },
      {
        title: "Local Dubai & Abu Dhabi Map Pack Dominance",
        titleAr: "تصدر خرائط غوغل في دبي وأبوظبي",
        desc: "Hyper-localized Google Business Profile optimization to dominate the top 3 map pack positions for commercial terms.",
        descAr: "تحسين ملف الأنشطة التجارية لضمان الظهور بين أول ثلاثة نتائج في الخرائط للباحثين المحليين.",
      },
    ],
    faqs: [
      {
        q: "How long does enterprise SEO take in the UAE?",
        qAr: "كم يستغرق تحقيق نتائج ملموسة في السيو داخل الإمارات؟",
        a: "Initial technical indexation gains are typically visible within 30-45 days, with significant commercial keyword rankings and qualified leads compounding between months 3 and 6.",
        aAr: "تظهر التحسينات التقنية والفهرسة خلال 30 إلى 45 يوماً، وتبدأ القفزات الكبرى في الكلمات التنافسية وتدفق العملاء بين الشهر الثالث والسادس.",
      },
      {
        q: "Do you write native Arabic content in-house?",
        qAr: "هل تتم كتابة المحتوى العربي داخلياً دون ترجمة آلية؟",
        a: "Yes, 100%. All Arabic content is created by full-time senior Arabic copywriters in our Dubai office.",
        aAr: "نعم بنسبة 100%. نعتمد على كُتّاب محتوى محترفين ومقيمين في دبي لضمان الدقة الثقافية واللغوية.",
      },
    ],
  },
  ppc: {
    slug: "ppc",
    title: "PPC & High-ROAS Performance Advertising",
    titleAr: "الإعلانات الممولة عالية العائد الاستثماري (PPC)",
    tagline: "Scalable Customer Acquisition Engineered for Ultra-HNWI and Commercial Buyers in the UAE",
    taglineAr: "اكتساب عملاء ذوي ملاءة مالية عالية بمعدلات عائد استثماري استثنائية",
    description:
      "We manage millions in monthly ad spend across Google Search, YouTube, Meta (Instagram/Facebook), TikTok, and LinkedIn. Every campaign leverages first-party data, predictive bidding, and bespoke GCC creative to drive maximum pipeline value.",
    descriptionAr:
      "ندير ميزانيات إعلانية ضخمة عبر غوغل وميتا وتيك توك ولينكدإن باستخدام التتبع المتقدم والذكاء الاصطناعي لاستهداف الفئات الأكثر إنفاقاً في السوق الإماراتي والخليجي.",
    metric: "4.8x Average Blended ROAS",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
    deliverables: [
      {
        title: "High-Intent Google Search & Performance Max",
        titleAr: "حملات غوغل للبحث وحملات الأداء الأقصى",
        desc: "Capturing buyers at the peak of their decision journey with exact match negative pruning and value-based bidding.",
        descAr: "اقتناص العملاء في لحظة اتخاذ القرار الشرائي بدقة استهداف متناهية.",
      },
      {
        title: "Meta & TikTok Video Acquisition Funnels",
        titleAr: "مسارات التحويل المرئية عبر ميتا وتيك توك",
        desc: "Short-form luxury creative testing matrix with tailored Arabic voiceovers and high-converting hooks.",
        descAr: "اختبارات مستمرة لإعلانات الفيديو القصيرة بنبرة صوتية خليجية ترفع التفاعل والمبيعات.",
      },
      {
        title: "LinkedIn Account-Based Marketing (ABM)",
        titleAr: "التسويق المؤسسي القائم على الحسابات (ABM) عبر لينكدإن",
        desc: "Direct pipeline creation targeting C-suite executives, directors, and institutional fund managers in DIFC and ADGM.",
        descAr: "استهداف مباشر لكبار الرؤساء التنفيذيين ومدراء الصناديق في المراكز المالية بدبي وأبوظبي.",
      },
      {
        title: "Server-Side Conversion API & Closed-Loop Attribution",
        titleAr: "ربط واجهات التتبع من الخادم ونظام قياس العائد",
        desc: "Resilient first-party tracking sending verified CRM sale outcomes back to platform algorithms for compounding efficiency.",
        descAr: "إرسال بيانات الصفقات المكتملة إلى المنصات الإعلانية لتحسين الاستهداف التلقائي للذكاء الاصطناعي.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum recommended ad budget?",
        qAr: "ما هو الحد الأدنى المقترح للميزانية الإعلانية؟",
        a: "We recommend a minimum media budget of AED 10,000/month to allow the ad algorithms to exit the learning phase quickly.",
        aAr: "نوصي بميزانية إعلانية لا تقل عن 10,000 درهم شهرياً لتجاوز مرحلة التعلم في المنصات بسرعة.",
      },
    ],
  },
  "social-media": {
    slug: "social-media",
    title: "Bilingual Social Media Management & Creative",
    titleAr: "إدارة وسائل التواصل وصناعة المحتوى المزدوج",
    tagline: "Build Cult-Like Category Authority and Community in the UAE & GCC",
    taglineAr: "ابنِ مجتمعاً رقمياً ولاءً ومكانة رائدة لعلامتك التجارية في الخليج",
    description:
      "Turn passive scrollers into passionate brand ambassadors. From high-end lifestyle reels on Instagram to viral TikTok concepts and LinkedIn executive ghostwriting, we craft bilingual social experiences that command attention.",
    descriptionAr:
      "حوّل المشاهدات إلى مبيعات وعلاقات وثيقة مع جمهورك. من الفيديوهات الفاخرة على إنستغرام وتيك توك إلى كتابة المحتوى التنفيذي على لينكدإن، نصنع حضوراً رقمياً لا يمكن تجاهله.",
    metric: "+185% Engagement Velocity",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    deliverables: [
      {
        title: "Monthly Bilingual Content Calendar & Copywriting",
        titleAr: "تقويم المحتوى الشهري والكتابة الإبداعية",
        desc: "Strategic pillars covering education, authority, product spotlights, and trend alignment in Arabic and English.",
        descAr: "جدول محتوى تفاعلي يغطي الجوانب التعليمية والتسويقية باللغتين العربية والإنجليزية.",
      },
      {
        title: "High-Production Reel & Short-Form Video Filming",
        titleAr: "تصوير وإنتاج الريلز والفيديوهات القصيرة",
        desc: "On-site Dubai production crews capturing high-definition visual assets tailored for the TikTok and Reels algorithms.",
        descAr: "فرق تصوير وإنتاج ميدانية في دبي لإنتاج مقاطع مصورة مصممة لخوارزميات إنستغرام وتيك توك.",
      },
      {
        title: "VIP GCC Influencer Management",
        titleAr: "إدارة حملات المؤثرين والشخصيات البارزة",
        desc: "Vetted regional influencers with verified engagement rates and authentic audience demographics.",
        descAr: "شراكات حصرية وموثوقة مع أبرز المؤثرين الخليجيين ذوي الجماهيرية الحقيقية.",
      },
      {
        title: "Active Community Management & DM Conversions",
        titleAr: "إدارة التفاعل والرد السريع على الرسائل",
        desc: "24/7 bilingual community engagement, comment response, and DM lead capture routing straight to your sales team.",
        descAr: "إدارة سريعة للتعليقات والرسائل الخاصة وتحويل استفسارات العملاء مباشرة لفريق مبيعاتك.",
      },
    ],
    faqs: [
      {
        q: "Do you handle shooting video content at our Dubai premises?",
        qAr: "هل تقومون بتصوير المحتوى المرئي في موقع شركتنا بدبي؟",
        a: "Yes. Our production squad conducts monthly or bi-weekly shoots at your offices, developments, or venues in Dubai.",
        aAr: "نعم، يقوم فريق الإنتاج بزيارات تصوير دورية لمقر شركتكم أو مشاريعكم داخل دبي.",
      },
    ],
  },
  "web-design": {
    slug: "web-design",
    title: "High-Converting Web Design & Headless Development",
    titleAr: "تصميم وتطوير المواقع الفاخرة فائقة السرعة",
    tagline: "Ultra-Fast, Next-Gen Digital Flagships Engineered to Convert High-Net-Worth Visitors",
    taglineAr: "واجهات ومنصات رقمية متطورة مصممة لمضاعفة معدلات التحويل والمبيعات",
    description:
      "Your website is the single most critical asset in your digital ecosystem. We build bespoke Next.js and headless web experiences featuring sub-second load times, bespoke motion design with GSAP, and flawless bilingual LTR/RTL switching.",
    descriptionAr:
      "موقعك الإلكتروني هو المقر الرقمي الأهم لعلامتك. نطور مواقع سريعة وخفيفة باستخدام أحدث أطر العمل مثل Next.js مع دعم كامل لاتجاه القراءة من اليمين لليسار وتجربة مستخدم لا تضاهى.",
    metric: "+68% Conversion Rate Lift",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
    deliverables: [
      {
        title: "Custom UI/UX Architecture & Figma Prototypes",
        titleAr: "تصميم واجهات وتجربة المستخدم على Figma",
        desc: "Bespoke wireframes and clickable prototypes crafted specifically for UAE luxury consumer behaviors.",
        descAr: "نماذج تفاعلية مبهرة تراعي أدق تفاصيل تجربة المستخدم وسلوك المشتري في الإمارات.",
      },
      {
        title: "Headless Next.js & React Full-Stack Development",
        titleAr: "تطوير برمجي فائق السرعة بتقنيات Next.js",
        desc: "Modern JAMstack architecture delivering sub-second Largest Contentful Paint (LCP) and zero bloat.",
        descAr: "برمجة عصرية تضمن تحميل الصفحات في أقل من ثانية وتفادي أي بطء في الأداء.",
      },
      {
        title: "Native Bidirectional LTR / RTL Engine",
        titleAr: "محرك سلس ومتقن للاتجاهين (عربي وإنجليزي)",
        desc: "Pixel-perfect typography and directional mirroring for Arabic and English without visual glitching.",
        descAr: "تناسق بصري كامل ومتقن بين النسختين العربية والإنجليزية لكافة العناصر والخطوط.",
      },
      {
        title: "CRM & Payment Gateway Integrations",
        titleAr: "الربط مع بوابات الدفع وأنظمة الـ CRM",
        desc: "Seamless connection with Stripe, Telr, Tamara, Tabby, HubSpot, Salesforce, and Zoho.",
        descAr: "تكامل كامل مع حلول الدفع الخليجية مثل تابي وتمارا وسترايب وبوابات الـ CRM.",
      },
    ],
    faqs: [
      {
        q: "How fast will our new website load?",
        qAr: "ما مدى سرعة تحميل الموقع الجديد؟",
        a: "We engineer all platforms to achieve a 90+ Lighthouse performance score and under 1.2-second global LCP speeds.",
        aAr: "نضمن الحصول على تقييم 90+ في اختبارات غوغل لايتهاوس وزمن تحميل أقل من 1.2 ثانية.",
      },
    ],
  },
  branding: {
    slug: "branding",
    title: "Brand Identity & Luxury Market Positioning",
    titleAr: "بناء الهوية واستراتيجية التموضع الفاخر",
    tagline: "Cultivate Iconic Prestige and Undisputed Category Leadership in the Middle East",
    taglineAr: "اصنع هيبة استثنائية لعلامتك التجارية تتصدر بها مجالك في الشرق الأوسط",
    description:
      "In a crowded GCC marketplace, brand equity is the ultimate pricing power multiplier. We craft iconic visual identities, bespoke Arabic typography, brand architecture, and luxury positioning narratives that command premium margins.",
    descriptionAr:
      "في سوق تنافسي كالسوق الخليجي، قوة العلامة التجارية هي سر تميزك. نصنع هويات بصرية فخمة، خطوط عربية مخصصة، وأدلة استخدام متكاملة تمنح شركتك وقاراً وثقة لا تُضاهى.",
    metric: "100% Bespoke Brand Equity",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200",
    deliverables: [
      {
        title: "Brand Positioning Strategy & Value Proposition",
        titleAr: "استراتيجية التموضع والقيمة الجوهرية",
        desc: "Competitor whitespace analysis, archetype definition, and core customer promise formulation.",
        descAr: "تحليل ثغرات المنافسين وتحديد شخصية العلامة والوعد الجوهري الذي تقدمه للعميل.",
      },
      {
        title: "Bespoke Logo Mark & Arabic Calligraphic Suite",
        titleAr: "شعار وهوية خطية عربية راقية ومخصصة",
        desc: "Handcrafted vectors balancing timeless elegance with modern minimalist geometric harmony.",
        descAr: "تصميم شعار فريد وأيقونات متقنة تجمع بين الأصالة والخطوط العربية الحديثة.",
      },
      {
        title: "Comprehensive 80+ Page Brand Guidelines",
        titleAr: "دليل الهوية البصرية الشامل (80+ صفحة)",
        desc: "Complete documentation on color codes, typography scales, photography direction, and spacing rules.",
        descAr: "توثيق شامل لكافة درجات الألوان، مقاييس الخطوط، أساليب التصوير، وقواعد الاستخدام.",
      },
      {
        title: "Luxury Collateral & Packaging Design",
        titleAr: "تصميم المطبوعات والتغليف الفاخر",
        desc: "Premium business cards with gold foil stamping, corporate presentation decks, and packaging specs.",
        descAr: "تصاميم كروت العمل والبروفايل التعريفي وأغلفة المنتجات بمواصفات طباعة عالية الفخامة.",
      },
    ],
    faqs: [
      {
        q: "What is included in the final branding package?",
        qAr: "ما الذي يتضمنه تسليم مشروع الهوية التجارية؟",
        a: "You receive all master vector source files (AI, SVG, PDF, PNG), font licenses, digital assets, presentation templates, and the comprehensive brand guidelines book.",
        aAr: "تتسلم كافة الملفات المصدرية المفتوحة والخطوط والقوالب الرقمية ودليل الهوية الكامل.",
      },
    ],
  },
  "content-production": {
    slug: "content-production",
    title: "Cinematic Content & Commercial Video Production",
    titleAr: "الإنتاج المرئي وصناعة المحتوى السينمائي",
    tagline: "High-Impact Commercial Storytelling Filmed in 4K Across Dubai & the Emirates",
    taglineAr: "سرد بصري سينمائي يُصوّر بأحدث معدات الـ 4K في أبرز معالم دبي والإمارات",
    description:
      "Nothing commands trust like cinematic visuals. Our in-house film directors, licensed UAE drone operators, and editors produce stunning brand commercials, executive interviews, and viral social assets that position you as an industry giant.",
    descriptionAr:
      "الفيديو السينمائي هو الأداة الأقوى لبناء الثقة في الخليج. فريقنا المرخص في دبي ينتج إعلانات سينمائية ومقابلات تنفيذية ومشاهد جوية بالطائرات المسيرة تبرز فخامة مشاريعك.",
    metric: "12M+ Organic Video Views",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200",
    deliverables: [
      {
        title: "4K Commercial Brand Films & TV Spots",
        titleAr: "أفلام إعلانية سينمائية بدقة 4K",
        desc: "End-to-end production: scriptwriting, casting, Dubai location permits, multi-camera shoot, color grading.",
        descAr: "إنتاج متكامل: كتابة السيناريو، تصاريح التصوير في دبي، التصوير المتعدد وتعديل الألوان السينمائي.",
      },
      {
        title: "Licensed Drone & Aerial Cinematography",
        titleAr: "تصوير جوي سينمائي مرخص بالدرون",
        desc: "Certified UAE GCAA drone pilots capturing sweeping architectural vistas and Dubai landmarks.",
        descAr: "طيارون معتمدون من هيئة الطيران المدني في الإمارات لتصوير المشاريع العقارية والأيقونات المعمارية.",
      },
      {
        title: "Executive Leadership & Founder Interviews",
        titleAr: "مقابلات القيادة المؤسسية والمؤسسين",
        desc: "Elevated founder storytelling and thought leadership interviews designed for LinkedIn and corporate PR.",
        descAr: "مقابلات راقية للمؤسسين والرؤساء التنفيذيين تعزز الحضور الإعلامي والموثوقية المؤسسية.",
      },
      {
        title: "High-Velocity Short-Form Batch Production",
        titleAr: "إنتاج حزم الفيديوهات القصيرة لمنصات التواصل",
        desc: "Production days designed to produce 20 to 30 edited Reels and TikTok assets with dynamic subtitles.",
        descAr: "أيام تصوير مكثفة لإنتاج من 20 إلى 30 مقطعاً قصيراً جاهزاً للنشر مع نصوص تفاعلية.",
      },
    ],
    faqs: [
      {
        q: "Do you handle shooting permits with Dubai government entities?",
        qAr: "هل تتولون استخراج تصاريح التصوير من الجهات الحكومية في دبي؟",
        a: "Yes. We manage all Dubai Film and TV Commission (DFTC) permits, location clearances, and drone flight approvals.",
        aAr: "نعم، نتولى كافة تصاريح لجنة دبي للإنتاج التلفزيوني والسينمائي وموافقات الطيران المدني.",
      },
    ],
  },
};
