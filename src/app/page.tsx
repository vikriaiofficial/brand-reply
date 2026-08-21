"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const translations = {
  en: {
    navHowItWorks: "How it Works",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navDownload: "Download App",
    heroBadge: "#1 Auto-Reply App for Businesses",
    heroTitle1: "Turn Every",
    heroTitle2: "Phone Call Into a",
    heroTitleGradient: "Paying Customer.",
    heroDesc1: "When someone calls your business — ",
    heroDesc2: "Incoming, Outgoing, or Missed",
    heroDesc3: " — Brand Reply instantly sends them your business details, offers & links via ",
    heroDesc4: "WhatsApp",
    heroDesc5: " and ",
    heroDesc6: "SMS",
    heroDesc7: ". Automatically. Zero manual work.",
    btnDownload: "Download APK Free",
    btnTalk: "Talk to Us",
    trustSafe: "100% Safe",
    trustRated: "4.8★ Rated",
    trustUsers: "5000+ Users",
    proofUsers: "Active Business Users",
    proofReplies: "Auto Replies Sent Daily",
    proofSaved: "Hours Saved Per Week",
    proofRating: "Average User Rating",
    perfectFor: "Perfect For",
    builtFor: "Built For Every ",
    builtForGradient: "Business Owner",
    builtForSub: "Whether you're a shop owner, doctor, freelancer, or real estate agent — Brand Reply grows your business on autopilot.",
    useCase1Title: "Shop Owners",
    useCase1Desc: "Send product catalogs, offers & shop location to every caller automatically.",
    useCase2Title: "Doctors & Clinics",
    useCase2Desc: "Share clinic timings, booking links & address instantly after every call.",
    useCase3Title: "Real Estate",
    useCase3Desc: "Send property photos, price lists & your portfolio to every enquiry call.",
    useCase4Title: "Freelancers",
    useCase4Desc: "Share your services, pricing & past work to potential clients automatically.",
    useCase5Title: "& Many More...",
    useCase5Desc: "Gym trainers, salons, tuition classes, restaurants, event planners — any business that gets calls!",
    problemTag: "The Problem",
    whyTitle1: "Every Call Follow-Up = ",
    whyTitleGradient: "Lost Money",
    whySub1: "You're busy. Someone calls. You can't answer, or you forget to follow up later. That caller goes to your competitor in 30 seconds. Brand Reply makes sure that ",
    whySub2: "never happens again",
    whySub3: ".",
    whyStat1Num: "0 sec",
    whyStat1Text: "Response time. While competitors take hours, you reply instantly.",
    whyStat2Num: "100%",
    whyStat2Text: "Automatic. No need to open any app. Runs silently 24/7.",
    whyStat3Num: "3x",
    whyStat3Text: "More conversions. Instant follow-ups have the highest conversion rates.",
    howTag: "3 Powerful Triggers",
    howTitle1: "How ",
    howTitleGradient: "Brand Reply",
    howTitle2: " Works",
    howSub: "Set up your message once. The app runs silently in the background and sends replies for every type of call — automatically.",
    trigger1Title: "📞 Incoming Calls",
    trigger1Desc: "Customer called you? After hanging up, your business profile, offers & catalog link gets sent automatically via WhatsApp & SMS.",
    trigger2Title: "📵 Missed Calls",
    trigger2Desc: "Too busy to pick up? The app instantly sends: \"Sorry I missed your call! Here are my details...\" — keeping the lead warm.",
    trigger3Title: "📲 Outgoing Calls",
    trigger3Desc: "Just pitched a client over the phone? Your portfolio, pricing PDF, or Google Maps location gets sent automatically after you hang up.",
    benefitTitle1: "Stop Manual Work. ",
    benefitTitleGradient: "Start Automating.",
    benefitDesc: "You don't need to save every caller's number, open WhatsApp, and type the same message 50 times a day. Brand Reply handles all of that silently — so you focus on real work.",
    benefit1: "Runs 24/7 in the background",
    benefit2: "Custom templates for WhatsApp & SMS",
    benefit3: "Send location, images & links",
    benefit4: "Set delay timers between reply",
    benefit5: "Works without internet for SMS",
    testimonialTag: "What Users Say",
    testimonialTitle1: "Loved by ",
    testimonialTitleGradient: "Business Owners",
    testimonial1Text: '"I run a boutique and used to miss 10-15 calls daily. Now every missed call gets an automatic WhatsApp with my catalog. My sales went up 40% in one month!"',
    testimonial1Name: "Priya Sharma",
    testimonial1Role: "Boutique Owner, Pune",
    testimonial2Text: '"Best ₹999 I have ever spent. I used to manually message every caller. Now Brand Reply does it in 0 seconds. Absolute game changer for my clinic."',
    testimonial2Name: "Dr. Rajesh Patil",
    testimonial2Role: "Dentist, Mumbai",
    testimonial3Text: '"I\'m a real estate agent. After every call, my property brochure and location gets sent automatically. My clients are always impressed!"',
    testimonial3Name: "Amit Deshmukh",
    testimonial3Role: "Real Estate Agent, Nashik",
    pricingTag: "Simple Pricing",
    pricingTitle1: "One Plan. ",
    pricingTitleGradient: "Unlimited Power.",
    pricingSub: "One extra customer won from Brand Reply pays for the entire year.",
    pricingBadge: "Best Value",
    pricingLabel: "Premium Annual Plan",
    pricingPriceYear: "/year",
    pricingPriceDay: "That's just ₹2.74 per day! ☕",
    pricingCTA: "Get Started — Download Now",
    pricingF1: "Unlimited Auto Replies",
    pricingF2: "Incoming + Outgoing + Missed Call Triggers",
    pricingF3: "WhatsApp & SMS Both",
    pricingF4: "Custom Message Templates",
    pricingF5: "Send Images, PDFs & Links",
    pricingF6: "Priority WhatsApp Support",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "Is my data safe?",
    faqA1: "Absolutely. Brand Reply runs locally on your phone. We do not upload your contacts, call logs, or messages to any server. Your data stays 100% on your device.",
    faqQ2: "Will my WhatsApp number get banned?",
    faqA2: "No. The app sends messages from your official WhatsApp to people who called you — this is natural behavior. Just avoid spammy content and you're completely safe.",
    faqQ3: "Do I need to keep the app open all the time?",
    faqA3: "No. Once you set your templates and permissions, Brand Reply runs efficiently in the background without draining your battery. Set it and forget it.",
    faqQ4: "Does it work on all Android phones?",
    faqA4: "Yes! Brand Reply supports Android 8.0 and above. It works on Samsung, Xiaomi, Realme, Oppo, Vivo, OnePlus, and all major brands.",
    downloadTitle1: "Ready to ",
    downloadTitleGradient: "Automate & Grow?",
    downloadSub: "Join 5,000+ smart Indian business owners who are saving time and growing their brand with Brand Reply.",
    downloadCTA: "Download Secure APK",
    downloadBadge1: "Virus Free",
    downloadBadge2: "No Ads",
    downloadBadge3: "Data Stays on Phone",
    downloadBadge4: "Works Offline (SMS)",
    footerRights: "Brand Reply. All rights reserved.",
    footerDesc: "Built for Indian businesses.",
    stickyPrice: "Just ₹2.74 / day",
    stickyPlan: "Premium Plan at ₹999/year",
    stickyCTA: "Chat on WhatsApp"
  },
  hi: {
    navHowItWorks: "यह कैसे काम करता है",
    navPricing: "कीमत",
    navFaq: "अक्सर पूछे जाने वाले सवाल",
    navDownload: "ऐप डाउनलोड करें",
    heroBadge: "व्यवसायों के लिए #1 ऑटो-रिप्लाई ऐप",
    heroTitle1: "हर फोन कॉल को",
    heroTitle2: "बदलें एक",
    heroTitleGradient: "भुगतान करने वाले ग्राहक में।",
    heroDesc1: "जब कोई आपके व्यवसाय को कॉल करता है — ",
    heroDesc2: "इनकमिंग, आउटगोइंग, या मिस्ड",
    heroDesc3: " — ब्रांड रिप्लाई तुरंत उन्हें व्हाट्सएप और एसएमएस के माध्यम से आपके व्यवसाय का विवरण, ऑफ़र और लिंक भेजता है। स्वचालित रूप से। शून्य मैन्युअल काम।",
    heroDesc4: "व्हाट्सएप",
    heroDesc5: " और ",
    heroDesc6: "एसएमएस",
    heroDesc7: "",
    btnDownload: "मुफ्त एपीके डाउनलोड करें",
    btnTalk: "हमसे बात करें",
    trustSafe: "100% सुरक्षित",
    trustRated: "4.8★ रेटिंग",
    trustUsers: "5000+ उपयोगकर्ता",
    proofUsers: "सक्रिय व्यावसायिक उपयोगकर्ता",
    proofReplies: "रोजाना भेजे जाने वाले ऑटो रिप्लाई",
    proofSaved: "प्रति सप्ताह बचाए गए घंटे",
    proofRating: "औसत उपयोगकर्ता रेटिंग",
    perfectFor: "के लिए बिल्कुल सही",
    builtFor: "हर एक के लिए निर्मित ",
    builtForGradient: "व्यवसाय के मालिक",
    builtForSub: "चाहे आप दुकान के मालिक हों, डॉक्टर हों, फ्रीलांसर हों या रियल एस्टेट एजेंट — ब्रांड रिप्लाई आपके व्यवसाय को ऑटोपायलट पर बढ़ाता है।",
    useCase1Title: "दुकान के मालिक",
    useCase1Desc: "हर कॉलर को स्वचालित रूप से उत्पाद कैटलॉग, ऑफ़र और दुकान का स्थान भेजें।",
    useCase2Title: "डॉक्टर और क्लीनिक",
    useCase2Desc: "हर कॉल के बाद तुरंत क्लीनिक का समय, बुकिंग लिंक और पता साझा करें।",
    useCase3Title: "रियल एस्टेट",
    useCase3Desc: "हर पूछताछ कॉल पर प्रॉपर्टी की तस्वीरें, मूल्य सूची और अपना पोर्टफोलियो भेजें।",
    useCase4Title: "फ्रीलांसर",
    useCase4Desc: "संभावित ग्राहकों को अपनी सेवाएं, मूल्य निर्धारण और पिछला काम स्वचालित रूप से साझा करें।",
    useCase5Title: "& कई और...",
    useCase5Desc: "जिम ट्रेनर, सैलून, ट्यूशन क्लासेस, रेस्तरां, इवेंट प्लानर — कोई भी व्यवसाय जिसे कॉल आती हैं!",
    problemTag: "समस्या",
    whyTitle1: "हर कॉल फॉलो-अप = ",
    whyTitleGradient: "खोया हुआ पैसा",
    whySub1: "आप व्यस्त हैं। कोई कॉल करता है। आप जवाब नहीं दे पाते, या बाद में फॉलो-अप करना भूल जाते हैं। वह कॉलर 30 सेकंड में आपके प्रतिस्पर्धी के पास चला जाता है। ब्रांड रिप्लाई सुनिश्चित करता है कि ऐसा ",
    whySub2: "फिर कभी न हो",
    whySub3: "।",
    whyStat1Num: "0 सेकंड",
    whyStat1Text: "प्रतिक्रिया समय। जहां प्रतिस्पर्धी घंटे लगाते हैं, आप तुरंत जवाब देते हैं।",
    whyStat2Num: "100%",
    whyStat2Text: "स्वचालित। किसी भी ऐप को खोलने की आवश्यकता नहीं है। 24/7 चुपचाप काम करता है।",
    whyStat3Num: "3x",
    whyStat3Text: "अधिक रूपांतरण। त्वरित फॉलो-अप में उच्चतम रूपांतरण दर होती है।",
    howTag: "3 शक्तिशाली ट्रिगर",
    howTitle1: "कैसे ",
    howTitleGradient: "ब्रांड रिप्लाई",
    howTitle2: " काम करता है",
    howSub: "अपना संदेश एक बार सेट करें। ऐप बैकग्राउंड में चुपचाप चलता है और हर प्रकार की कॉल के लिए स्वचालित रूप से उत्तर भेजता है।",
    trigger1Title: "📞 Incoming कॉल",
    trigger1Desc: "ग्राहक ने आपको कॉल किया? कॉल कटने के बाद, आपका व्यावसायिक प्रोफ़ाइल, ऑफ़र और कैटलॉग लिंक स्वचालित रूप से व्हाट्सएप और एसएमएस के माध्यम से भेजा जाता है।",
    trigger2Title: "📵 Missed कॉल",
    trigger2Desc: "उठाने में बहुत व्यस्त हैं? ऐप तुरंत भेजता है: \"कॉल मिस करने के लिए खेद है! यहाँ मेरा विवरण है...\" — लीड को खोने से बचाता है।",
    trigger3Title: "📲 Outgoing कॉल",
    trigger3Desc: "अभी फोन पर किसी क्लाइंट से बात की? कॉल समाप्त होने के बाद आपका पोर्टफोलियो, मूल्य निर्धारण पीडीएफ, या Google मैप्स स्थान स्वचालित रूप से भेजा जाता है।",
    benefitTitle1: "मैन्युअल काम बंद करें। ",
    benefitTitleGradient: "स्वचालन शुरू करें।",
    benefitDesc: "आपको हर कॉलर का नंबर सहेजने, व्हाट्सएप खोलने और दिन में 50 बार एक ही संदेश टाइप करने की आवश्यकता नहीं है। ब्रांड रिप्लाई यह सब चुपचाप संभालता है — ताकि आप असली काम पर ध्यान केंद्रित कर सकें।",
    benefit1: "बैकग्राउंड में 24/7 चलता है",
    benefit2: "व्हाट्सएप और एसएमएस के लिए कस्टम टेम्पलेट",
    benefit3: "स्थान, छवियां और लिंक भेजें",
    benefit4: "उत्तरों के बीच देरी के लिए टाइमर सेट करें",
    benefit5: "एसएमएस के लिए बिना इंटरनेट के काम करता है",
    testimonialTag: "उपयोगकर्ता क्या कहते हैं",
    testimonialTitle1: "इन्हें पसंद है ",
    testimonialTitleGradient: "व्यवसाय के मालिकों को",
    testimonial1Text: '"मैं एक बुटीक चलाती हूँ और रोजाना 10-15 कॉल मिस करती थी। अब हर मिस्ड कॉल पर कैटलॉग के साथ एक स्वचालित व्हाट्सएप जाता है। मेरी बिक्री एक महीने में 40% बढ़ गई!"',
    testimonial1Name: "प्रिया शर्मा",
    testimonial1Role: "बुटीक मालिक, पुणे",
    testimonial2Text: '"अब तक के सबसे अच्छे ₹999 जो मैंने अपने व्यवसाय पर खर्च किए हैं। मैं हर कॉलर को मैन्युअल रूप से संदेश भेजता था। अब ब्रांड रिप्लाई इसे 0 सेकंड में करता है। मेरे क्लिनिक के लिए बिल्कुल गेम चेंजर।"',
    testimonial2Name: "डॉ. राजेश पाटिल",
    testimonial2Role: "दंत चिकित्सक, मुंबई",
    testimonial3Text: '"मैं एक रियल एस्टेट एजेंट हूँ। हर कॉल के बाद, मेरा प्रॉपर्टी ब्रोशर और स्थान स्वचालित रूप से भेजा जाता है। मेरे ग्राहक हमेशा प्रभावित होते हैं!"',
    testimonial3Name: "अमित देशमुख",
    testimonial3Role: "रियल एस्टेट एजेंट, नासिक",
    pricingTag: "सरल मूल्य निर्धारण",
    pricingTitle1: "एक प्लान। ",
    pricingTitleGradient: "असीमित शक्ति।",
    pricingSub: "ब्रांड रिप्लाई से जीता गया एक अतिरिक्त ग्राहक पूरे साल का खर्च निकाल देता है।",
    pricingBadge: "सर्वोत्तम मूल्य",
    pricingLabel: "प्रीमियम वार्षिक योजना",
    pricingPriceYear: "/वर्ष",
    pricingPriceDay: "यह सिर्फ ₹2.74 प्रति दिन है! ☕",
    pricingCTA: "शुरू करें — अभी डाउनलोड करें",
    pricingF1: "असीमित ऑटो रिप्लाई",
    pricingF2: "इनकमिंग + आउटगोइंग + मिस्ड कॉल ट्रिगर",
    pricingF3: "व्हाट्सएप और एसएमएस दोनों",
    pricingF4: "कस्टम संदेश टेम्पलेट",
    pricingF5: "छवियां, पीडीएफ और लिंक भेजें",
    pricingF6: "प्राथमिकता व्हाट्सएप सहायता",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqQ1: "क्या मेरा डेटा सुरक्षित है?",
    faqA1: "बिल्कुल। ब्रांड रिप्लाई आपके फोन पर स्थानीय रूप से चलता है। हम आपके संपर्क, कॉल लॉग या संदेश किसी भी सर्वर पर अपलोड नहीं करते हैं। आपका डेटा आपके डिवाइस पर 100% सुरक्षित रहता है।",
    faqQ2: "क्या मेरा व्हाट्सएप नंबर बैन हो जाएगा?",
    faqA2: "नहीं। ऐप आपके आधिकारिक व्हाट्सएप से उन लोगों को संदेश भेजता है जिन्होंने आपको कॉल किया था — यह प्राकृतिक व्यवहार है। बस स्पैम सामग्री भेजने से बचें और आप पूरी तरह से सुरक्षित हैं।",
    faqQ3: "क्या मुझे हर समय ऐप को खुला रखना होगा?",
    faqA3: "नहीं। एक बार जब आप अपने टेम्पलेट और अनुमतियां सेट कर लेते हैं, तो ब्रांड रिप्लाई आपकी बैटरी को खत्म किए बिना बैकग्राउंड में कुशलता से चलता है। सेट करें और भूल जाएं।",
    faqQ4: "क्या यह सभी एंड्रॉइड फोन पर काम करता है?",
    faqA4: "हाँ! ब्रांड रिप्लाई एंड्रॉइड 8.0 और उससे ऊपर के संस्करणों का समर्थन करता है। यह सैमसंग, श्याओमी, रियलमी, ओप्पो, वीवो, वनप्लस और सभी प्रमुख ब्रांडों पर काम करता है।",
    downloadTitle1: "क्या आप तैयार हैं ",
    downloadTitleGradient: "ऑटोमेट और ग्रो करने के लिए?",
    downloadSub: "5,000+ स्मार्ट भारतीय व्यवसाय मालिकों में शामिल हों जो समय बचा रहे हैं और ब्रांड रिप्लाई के साथ अपना ब्रांड बढ़ा रहे हैं।",
    downloadCTA: "सुरक्षित एपीके डाउनलोड करें",
    downloadBadge1: "वायरस मुक्त",
    downloadBadge2: "कोई विज्ञापन नहीं",
    downloadBadge3: "डेटा फोन पर रहता है",
    downloadBadge4: "ऑफ़लाइन काम करता है (एसएमएस)",
    footerRights: "ब्रांड रिप्लाई। सभी अधिकार सुरक्षित।",
    footerDesc: "भारतीय व्यवसायों के लिए निर्मित.",
    stickyPrice: "सिर्फ ₹2.74 / दिन",
    stickyPlan: "₹999/वर्ष पर प्रीमियम योजना",
    stickyCTA: "व्हाट्सएप पर चैट करें"
  },
  mr: {
    navHowItWorks: "हे कसे काम करते",
    navPricing: "किंमत",
    navFaq: "नेहमी विचारले जाणारे प्रश्न",
    navDownload: "अ‍ॅप डाउनलोड करा",
    heroBadge: "व्यवसायांसाठी #१ ऑटो-रिप्लाय अ‍ॅप",
    heroTitle1: "प्रत्येक फोन कॉलला",
    heroTitle2: "बदला एका",
    heroTitleGradient: "ग्राहक मिळवून देणाऱ्या सुवर्णसंधीत.",
    heroDesc1: "जेव्हा कोणी तुमच्या व्यवसायाला कॉल करेल — ",
    heroDesc2: "इनकमिंग, आउटगोइंग किंवा मिस्ड",
    heroDesc3: " — ब्रँड रिप्लाय लगेच त्यांना व्हॉट्सअ‍ॅप आणि एसएमएसद्वारे तुमच्या व्यवसायाची माहिती, ऑफर्स आणि लिंक्स पाठवतो. ऑटोमॅटिकली. शून्य मॅन्युअल काम.",
    heroDesc4: "व्हॉट्सअ‍ॅप",
    heroDesc5: " आणि ",
    heroDesc6: "एसएमएस",
    heroDesc7: "",
    btnDownload: "मोफत एपीके डाउनलोड करा",
    btnTalk: "आमच्याशी बोला",
    trustSafe: "१००% सुरक्षित",
    trustRated: "४.८★ रेटिंग",
    trustUsers: "५०००+ युजर्स",
    proofUsers: "सक्रिय व्यावसायिक युजर्स",
    proofReplies: "दररोज पाठवले जाणारे ऑटो रिप्लाय",
    proofSaved: "प्रति आठवड्याला वाचणारे तास",
    proofRating: "सरासरी युजर रेटिंग",
    perfectFor: "यांच्यासाठी उत्तम",
    builtFor: "प्रत्येक कामासाठी बनवलेले ",
    builtForGradient: "व्यवसाय मालक",
    builtForSub: "तुम्ही दुकानाचे मालक, डॉक्टर, फ्रीलांसर किंवा रिअल इस्टेट एजंट असाल — ब्रँड रिप्लाय तुमचा व्यवसाय ऑटोपायलटवर वाढवतो.",
    useCase1Title: "दुकानदार",
    useCase1Desc: "प्रत्येक कॉलरला ऑटोमॅटिकली उत्पादन कॅटलॉग, ऑफर्स आणि दुकानाचे लोकेशन पाठवा.",
    useCase2Title: "डॉक्टर आणि क्लिनिक्स",
    useCase2Desc: "प्रत्येक कॉलनंतर क्लिनिकची वेळ, बुकिंग लिंक आणि पत्ता त्वरित शेअर करा.",
    useCase3Title: "रिअल इस्टेट",
    useCase3Desc: "प्रत्येक चौकशी कॉलनंतर प्रॉपर्टीचे फोटो, किंमत पत्रक आणि तुमचे पोर्टफोलिओ पाठवा.",
    useCase4Title: "फ्रीलांसर्स",
    useCase4Desc: "संभाव्य ग्राहकांना तुमच्या सेवा, किंमती आणि मागील काम ऑटोमॅटिकली शेअर करा.",
    useCase5Title: "& इतर अनेक...",
    useCase5Desc: "जिम ट्रेनर, सलून, tuition क्लासेस, रेस्टॉरंट्स, इव्हेंट प्लॅनर्स — कॉल येणारा कोणताही व्यवसाय!",
    problemTag: "समस्या",
    whyTitle1: "प्रत्येक कॉल फॉलो-अप = ",
    whyTitleGradient: "गमावलेला पैसा",
    whySub1: "तुम्ही व्यस्त आहात. कोणीतरी कॉल करतो. तुम्ही उत्तर देऊ शकत नाही किंवा नंतर फॉलो-अप करायला विसरता. तो कॉलर ३० सेकंदात तुमच्या प्रतिस्पर्ध्याकडे जातो. ब्रँड रिप्लाय खात्री देतो की हे पुन्हा कधीही ",
    whySub2: "होणार नाही",
    whySub3: ".",
    whyStat1Num: "० सेकंद",
    whyStat1Text: "प्रतिक्रिया वेळ. जिथे प्रतिस्पर्ध्यांना तास लागतात, तिथे तुम्ही त्वरित उत्तर देता.",
    whyStat2Num: "१००%",
    whyStat2Text: "ऑटोमॅटिक. कोणतेही अ‍ॅप उघडण्याची गरज नाही. २४/७ चालू राहते.",
    whyStat3Num: "३ पट",
    whyStat3Text: "अधिक कन्व्हर्जन. त्वरित फॉलो-अपमुळे जास्तीत जास्त ग्राहक जोडले जातात.",
    howTag: "३ शक्तिशाली ट्रिगर्स",
    howTitle1: "कसे ",
    howTitleGradient: "ब्रँड रिप्लाय",
    howTitle2: " काम करते",
    howSub: "तुमचा मेसेज एकदा सेट करा. अ‍ॅप बॅकग्राउंडमध्ये शांतपणे धावते आणि प्रत्येक प्रकारच्या कॉलसाठी ऑटोमॅटिकली रिप्लाय पाठवते.",
    trigger1Title: "📞 Incoming कॉल्स",
    trigger1Desc: "ग्राहकाने तुम्हाला कॉल केला? कॉल संपल्यानंतर, तुमचे बिझनेस प्रोफाईल, ऑफर्स आणि कॅटलॉग लिंक व्हॉट्सअ‍ॅप आणि एसएमएसद्वारे ऑटोमॅटिकली पाठवले जाते.",
    trigger2Title: "📵 Missed कॉल्स",
    trigger2Desc: "कॉल उचलायला वेळ नाही? अ‍ॅप लगेच पाठवते: \"कॉल मिस झाल्याबद्दल दिलगीर आहे! ही माझी माहिती आहे...\" — नवीन ग्राहक गमावण्यापासून वाचवते.",
    trigger3Title: "📲 Outgoing कॉल्स",
    trigger3Desc: "आताच फोनवर क्लायंटशी बोलणे झाले? कॉल संपल्यानंतर तुमचे पोर्टफोलिओ, प्राईसिंग पीडीएफ किंवा गुगल मॅप्स लोकेशन ऑटोमॅटिकली पाठवले जाते.",
    benefitTitle1: "मॅन्युअल काम थांबवा. ",
    benefitTitleGradient: "ऑटोमेशन सुरू करा.",
    benefitDesc: "तुम्हाला प्रत्येक कॉलरचा नंबर सेव्ह करण्याची, व्हॉट्सअ‍ॅप उघडण्याची आणि दिवसातून ५० वेळा तोच मेसेज टाईप करण्याची गरज नाही. ब्रँड रिप्लाय हे सर्व शांतपणे हाताळते — जेणेकरून तुम्ही प्रत्यक्ष कामावर लक्ष केंद्रित करू शकता.",
    benefit1: "बॅकग्राउंडमध्ये २४/७ चालते",
    benefit2: "व्हॉट्सअ‍ॅप आणि एसएमएससाठी सानुकूल टेम्पलेट्स",
    benefit3: "लोकेशन, इमेजेस आणि लिंक्स पाठवा",
    benefit4: "रिप्लायमध्ये वेळेची विलंबता (delay) सेट करा",
    benefit5: "एसएमएससाठी इंटरनेटशिवाय काम करते",
    testimonialTag: "युजर्स काय म्हणतात",
    testimonialTitle1: "यांच्या पसंतीचे ",
    testimonialTitleGradient: "व्यवसाय मालक",
    testimonial1Text: '"मी एक बुटीक चालवते आणि रोज १०-१५ कॉल्स मिस व्हायचे. आता प्रत्येक मिस कॉलवर कॅटलॉगसह ऑटोमॅटिक व्हॉट्सअ‍ॅप जातो. माझी विक्री एका महिन्यात ४०% वाढली!"',
    testimonial1Name: "Priya Sharma",
    testimonial1Role: "बुटीक मालक, पुणे",
    testimonial2Text: '"माझ्या व्यवसायावर खर्च केलेले आतापर्यंतचे सर्वोत्तम ९९९ रुपये. मी प्रत्येक कॉलरला मॅन्युअली मेसेज पाठवायचो. आता ब्रँड रिप्लाय हे ० सेकंदात करतो. माझ्या क्लिनिकसाठी गेम चेंजर ठरले."',
    testimonial2Name: "Dr. Rajesh Patil",
    testimonial2Role: "दंतचिकित्सक, मुंबई",
    testimonial3Text: '"मी एक रिअल इस्टेट एजंट आहे. प्रत्येक कॉलनंतर, माझे प्रॉपर्टी ब्रोशर आणि लोकेशन ऑटोमॅटिकली पाठवले जाते. माझे क्लायंट नेहमीच प्रभावित होतात!"',
    testimonial3Name: "Amit Deshmukh",
    testimonial3Role: "रिअल इस्टेट एजंट, नाशिक",
    pricingTag: "सोपी प्राईसिंग",
    pricingTitle1: "एकच प्लॅन. ",
    pricingTitleGradient: "अमर्याद शक्ती.",
    pricingSub: "ब्रँड रिप्लायमुळे मिळालेला एक जास्तीचा ग्राहक तुमच्या संपूर्ण वर्षाचा खर्च वसूल करतो.",
    pricingBadge: "उत्कृष्ट मूल्य",
    pricingLabel: "प्रीमियम वार्षिक प्लॅन",
    pricingPriceYear: "/वर्ष",
    pricingPriceDay: "हे फक्त ₹२.७४ प्रति दिन आहे! ☕",
    pricingCTA: "सुरू करा — आताच डाउनलोड करा",
    pricingF1: "अमर्याद ऑटो रिप्लाय",
    pricingF2: "इनकमिंग + आउटगोइंग + मिस्ड कॉल ट्रिगर्स",
    pricingF3: "व्हॉट्सअ‍ॅप आणि एसएमएस दोन्ही",
    pricingF4: "सानुकूल मेसेज टेम्पलेट्स",
    pricingF5: "इमेजेस, पीडीएफ आणि लिंक्स पाठवा",
    pricingF6: "प्राधान्याने व्हॉट्सअ‍ॅप सपोर्ट",
    faqTitle: "नेहमी विचारले जाणारे प्रश्न",
    faqQ1: "माझा डेटा सुरक्षित आहे का?",
    faqA1: "नक्कीच. ब्रँड रिप्लाय तुमच्या फोनवर स्थानिक पातळीवर चालतो. आम्ही तुमचे संपर्क, कॉल लॉग किंवा मेसेज कोणत्याही सर्व्हरवर अपलोड करत नाही. तुमचा डेटा तुमच्या डिव्हाइसवर १००% सुरक्षित राहतो.",
    faqQ2: "माझा व्हॉट्सअ‍ॅप नंबर ब्लॉक होईल का?",
    faqA2: "नाही. अ‍ॅप तुमच्या अधिकृत व्हॉट्सअ‍ॅपवरून तुम्हाला कॉल केलेल्या लोकांना मेसेज पाठवते — हे नैसर्गिक वर्तन आहे. फक्त स्पॅम मेसेज पाठवणे टाळा आणि तुम्ही पूर्णपणे सुरक्षित आहात.",
    faqQ3: "मला अ‍ॅप सतत उघडे ठेवावे लागेल का?",
    faqA3: "नाही. एकदा तुम्ही तुमचे टेम्पलेट्स आणि परवानग्या सेट केल्या की, ब्रँड रिप्लाय तुमची बॅटरी संपल्याशिवाय बॅकग्राउंडमध्ये कार्यक्षमतेने चालतो. सेट करा आणि विसरून जा.",
    faqQ4: "हे सर्व अँड्रॉइड फोनवर काम करते का?",
    faqA4: "होय! ब्रँड रिप्लाय अँड्रॉइड ८.० आणि त्यावरील व्हर्जनला सपोर्ट करतो. हे सॅमसंग, शाओमी, रियलमी, ओप्पो, विवो, वनप्लस आणि सर्व प्रमुख ब्रँडवर चालते.",
    downloadTitle1: "तुम्ही तयार आहात ",
    downloadTitleGradient: "ऑटोमेट आणि ग्रो करण्यासाठी?",
    downloadSub: "५,०००+ स्मार्ट भारतीय व्यवसाय मालकांमध्ये सामील व्हा जे वेळ वाचवत आहेत आणि ब्रँड रिप्लायसह त्यांचा ब्रँड वाढवत आहेत.",
    downloadCTA: "सुरक्षित एपीके डाउनलोड करा",
    downloadBadge1: "व्हायरस फ्री",
    downloadBadge2: "जाहिराती नाहीत",
    downloadBadge3: "डेटा फोनमध्येच राहतो",
    downloadBadge4: "इंटरनेटशिवाय काम करते (SMS)",
    footerRights: "ब्रँड रिप्लाय. सर्व हक्क सुरक्षित.",
    footerDesc: "भारतीय व्यवसायांसाठी बनवलेले.",
    stickyPrice: "फक्त ₹२.७४ / दिवस",
    stickyPlan: "₹९९९/वर्ष प्रीमियम प्लॅन",
    stickyCTA: "व्हॉट्सअ‍ॅपवर चॅट करा"
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi" | "mr">("en");
  const [showPopup, setShowPopup] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("brandreply-lang");
    if (!savedLang) {
      setShowPopup(true);
    } else {
      setLang(savedLang as "en" | "hi" | "mr");
    }
  }, []);

  const selectLanguage = (selectedLang: "en" | "hi" | "mr") => {
    setLang(selectedLang);
    localStorage.setItem("brandreply-lang", selectedLang);
    setShowPopup(false);
  };

  const whatsappNumber = "917350272829";
  const whatsappMessage = encodeURIComponent("I want to grow my business with Brand Reply. Tell me more!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Brand Reply Logo" width={44} height={44} className={styles.logoImage} />
            <span className={styles.brandName}>Brand Reply</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div className={styles.langSelector}>
              <button onClick={() => setLang("en")} className={`${styles.langBtn} ${lang === "en" ? styles.activeLang : ""}`}>EN</button>
              <button onClick={() => setLang("hi")} className={`${styles.langBtn} ${lang === "hi" ? styles.activeLang : ""}`}>हिंदी</button>
              <button onClick={() => setLang("mr")} className={`${styles.langBtn} ${lang === "mr" ? styles.activeLang : ""}`}>मराठी</button>
            </div>
            
            <div className={styles.navLinks}>
              <a href="#how-it-works">{t.navHowItWorks}</a>
              <a href="#pricing">{t.navPricing}</a>
              <a href="#faq">{t.navFaq}</a>
              <a href="#download" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
                {t.navDownload}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {/* ===== HERO ===== */}
        <header className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb1}></div>
            <div className={styles.heroOrb2}></div>
            <div className={styles.heroOrb3}></div>
          </div>
          <div className={`container ${styles.heroContainer}`}>
            <div className={`${styles.heroContent} animate-fade-in`}>
              <div className={styles.badge}>
                <i className="fa-solid fa-rocket"></i> {t.heroBadge}
              </div>
              <h1 className={styles.heroTitle}>
                {t.heroTitle1} <br/>{t.heroTitle2} <span className="text-gradient">{t.heroTitleGradient}</span>
              </h1>
              <p className={styles.heroDescription}>
                {t.heroDesc1}<strong style={{color: 'var(--bg-dark)'}}>{t.heroDesc2}</strong>{t.heroDesc3}<strong style={{color: 'var(--success-color)'}}>{t.heroDesc4}</strong>{t.heroDesc5}<strong style={{color: 'var(--success-color)'}}>{t.heroDesc6}</strong>{t.heroDesc7}
              </p>
              
              <div className={styles.heroActions}>
                <div className={styles.heroButtons}>
                  <a href="#download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
                    <i className="fa-brands fa-android"></i> {t.btnDownload}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
                    <i className="fa-brands fa-whatsapp" style={{ color: 'var(--success-color)' }}></i> {t.btnTalk}
                  </a>
                </div>

                <div className={styles.trustBadges}>
                  <div className={styles.trustBadge}>
                    <i className="fa-solid fa-shield-check"></i> {t.trustSafe}
                  </div>
                  <div className={styles.trustBadge}>
                    <i className="fa-solid fa-star"></i> {t.trustRated}
                  </div>
                  <div className={styles.trustBadge}>
                    <i className="fa-solid fa-users"></i> {t.trustUsers}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${styles.heroImageContainer} animate-float`}>
              <div className={styles.heroImageGlow}></div>
              <Image 
                src="/hero_realistic.jpg" 
                alt="Business Owner Using Brand Reply" 
                width={500} 
                height={500} 
                className={styles.heroImage} 
                priority
              />
            </div>
          </div>
        </header>

        {/* ===== SOCIAL PROOF BAR ===== */}
        <section className={styles.socialProofBar}>
          <div className={`container ${styles.socialProofContainer}`}>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>5000+</div>
              <div className={styles.proofLabel}>{t.proofUsers}</div>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>50K+</div>
              <div className={styles.proofLabel}>{t.proofReplies}</div>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>10+</div>
              <div className={styles.proofLabel}>{t.proofSaved}</div>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>4.8★</div>
              <div className={styles.proofLabel}>{t.proofRating}</div>
            </div>
          </div>
        </section>

        {/* ===== WHO IS IT FOR ===== */}
        <section className={styles.useCasesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>{t.perfectFor}</div>
              <h2 className={styles.sectionTitle}>{t.builtFor}<span className="text-gradient">{t.builtForGradient}</span></h2>
              <p className={styles.sectionSubtitle}>
                {t.builtForSub}
              </p>
            </div>

            <div className={styles.useCaseCards}>
              <div className={styles.useCaseCard}>
                <span className={styles.useCaseEmoji}>🏪</span>
                <h3>{t.useCase1Title}</h3>
                <p>{t.useCase1Desc}</p>
              </div>
              <div className={styles.useCaseCard}>
                <span className={styles.useCaseEmoji}>🏥</span>
                <h3>{t.useCase2Title}</h3>
                <p>{t.useCase2Desc}</p>
              </div>
              <div className={styles.useCaseCard}>
                <span className={styles.useCaseEmoji}>🏠</span>
                <h3>{t.useCase3Title}</h3>
                <p>{t.useCase3Desc}</p>
              </div>
              <div className={styles.useCaseCard}>
                <span className={styles.useCaseEmoji}>💼</span>
                <h3>{t.useCase4Title}</h3>
                <p>{t.useCase4Desc}</p>
              </div>
              <div className={styles.useCaseCard}>
                <span className={styles.useCaseEmoji}>🚀</span>
                <h3>{t.useCase5Title}</h3>
                <p>{t.useCase5Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY USE THIS APP ===== */}
        <section id="why" className={styles.whySection}>
          <div className={`container ${styles.whyContainer}`}>
            <div className={styles.sectionTag}>{t.problemTag}</div>
            <h2 className={styles.whyTitle}>{t.whyTitle1}<span className="text-gradient">{t.whyTitleGradient}</span></h2>
            <p className={styles.whySubtitle}>
              {t.whySub1}<strong style={{color: 'white'}}>{t.whySub2}</strong>{t.whySub3}
            </p>
            
            <div className={styles.whyStats}>
              <div className={styles.whyStatBox}>
                <div className={styles.whyStatNumber}>{t.whyStat1Num}</div>
                <div className={styles.whyStatText}>{t.whyStat1Text}</div>
              </div>
              <div className={styles.whyStatBox}>
                <div className={`${styles.whyStatNumber} ${styles.green}`}>{t.whyStat2Num}</div>
                <div className={styles.whyStatText}>{t.whyStat2Text}</div>
              </div>
              <div className={styles.whyStatBox}>
                <div className={`${styles.whyStatNumber} ${styles.white}`}>{t.whyStat3Num}</div>
                <div className={styles.whyStatText}>{t.whyStat3Text}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how-it-works" className={styles.triggersSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>{t.howTag}</div>
              <h2 className={styles.sectionTitle}>{t.howTitle1}<span className="text-gradient">{t.howTitleGradient}</span>{t.howTitle2}</h2>
              <p className={styles.sectionSubtitle}>
                {t.howSub}
              </p>
            </div>

            <div className={styles.triggerCards}>
              <div className={styles.triggerCard}>
                <div className={styles.triggerIcon}>
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h3>{t.trigger1Title}</h3>
                <p>{t.trigger1Desc}</p>
              </div>
              
              <div className={styles.triggerCard}>
                <div className={styles.triggerIcon} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                  <i className="fa-solid fa-phone-slash"></i>
                </div>
                <h3>{t.trigger2Title}</h3>
                <p>{t.trigger2Desc}</p>
              </div>

              <div className={styles.triggerCard}>
                <div className={styles.triggerIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                  <i className="fa-solid fa-phone-flip"></i>
                </div>
                <h3>{t.trigger3Title}</h3>
                <p>{t.trigger3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className={styles.benefitsSection}>
          <div className="container">
            <div className={styles.benefitRow}>
              <div>
                <Image src="/benefit_realistic.jpg" alt="WhatsApp Business Automation" width={700} height={467} className={styles.benefitImage} />
              </div>
              <div className={styles.benefitContent}>
                <h3>{t.benefitTitle1}<span className="text-gradient">{t.benefitTitleGradient}</span></h3>
                <p>{t.benefitDesc}</p>
                <ul className={styles.benefitList}>
                  <li><i className="fa-solid fa-check"></i> {t.benefit1}</li>
                  <li><i className="fa-solid fa-check"></i> {t.benefit2}</li>
                  <li><i className="fa-solid fa-check"></i> {t.benefit3}</li>
                  <li><i className="fa-solid fa-check"></i> {t.benefit4}</li>
                  <li><i className="fa-solid fa-check"></i> {t.benefit5}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>{t.testimonialTag}</div>
              <h2 className={styles.sectionTitle}>{t.testimonialTitle1}<span className="text-gradient">{t.testimonialTitleGradient}</span></h2>
            </div>

            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>{t.testimonial1Text}</p>
                <div className={styles.testimonialAuthor}>
                  <Image src="/testimonial_realistic.jpg" alt="Priya Sharma" width={48} height={48} className={styles.testimonialAvatar} />
                  <div>
                    <div className={styles.testimonialName}>{t.testimonial1Name}</div>
                    <div className={styles.testimonialRole}>{t.testimonial1Role}</div>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>{t.testimonial2Text}</p>
                <div className={styles.testimonialAuthor}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>R</div>
                  <div>
                    <div className={styles.testimonialName}>{t.testimonial2Name}</div>
                    <div className={styles.testimonialRole}>{t.testimonial2Role}</div>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>{t.testimonial3Text}</p>
                <div className={styles.testimonialAuthor}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--success-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>A</div>
                  <div>
                    <div className={styles.testimonialName}>{t.testimonial3Name}</div>
                    <div className={styles.testimonialRole}>{t.testimonial3Role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className={styles.pricingSection}>
          <div className={styles.pricingGlow}></div>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>{t.pricingTag}</div>
              <h2 className={styles.sectionTitle}>{t.pricingTitle1}<span className="text-gradient">{t.pricingTitleGradient}</span></h2>
              <p className={styles.sectionSubtitle}>{t.pricingSub}</p>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.popularBadge}>{t.pricingBadge}</div>
              <div className={styles.pricingLabel}>{t.pricingLabel}</div>
              <div className={styles.pricingPrice}>₹999<span>{t.pricingPriceYear}</span></div>
              <div className={styles.pricingSub}>{t.pricingPriceDay}</div>
              
              <a href="#download" className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
                {t.pricingCTA}
              </a>

              <ul className={styles.pricingFeatures}>
                <li><i className="fa-solid fa-check"></i> {t.pricingF1}</li>
                <li><i className="fa-solid fa-check"></i> {t.pricingF2}</li>
                <li><i className="fa-solid fa-check"></i> {t.pricingF3}</li>
                <li><i className="fa-solid fa-check"></i> {t.pricingF4}</li>
                <li><i className="fa-solid fa-check"></i> {t.pricingF5}</li>
                <li><i className="fa-solid fa-check"></i> {t.pricingF6}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t.faqTitle}</h2>
            </div>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <i className="fa-solid fa-shield-halved"></i> {t.faqQ1}
                </div>
                <div className={styles.faqAnswer}>
                  {t.faqA1}
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <i className="fa-brands fa-whatsapp"></i> {t.faqQ2}
                </div>
                <div className={styles.faqAnswer}>
                  {t.faqA2}
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <i className="fa-solid fa-battery-full"></i> {t.faqQ3}
                </div>
                <div className={styles.faqAnswer}>
                  {t.faqA3}
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <i className="fa-solid fa-mobile-screen-button"></i> {t.faqQ4}
                </div>
                <div className={styles.faqAnswer}>
                  {t.faqA4}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DOWNLOAD CTA ===== */}
        <section id="download" className={styles.downloadSection}>
          <div className={styles.downloadGlow}></div>
          <div className={`container ${styles.downloadContainer}`}>
            <Image src="/logo.png" alt="Brand Reply Logo" width={80} height={80} className={styles.downloadLogo} />
            <h2 className={styles.downloadTitle}>{t.downloadTitle1}<span className="text-success-gradient">{t.downloadTitleGradient}</span></h2>
            <p className={styles.downloadSubtitle}>
              {t.downloadSub}
            </p>
            
            <a href="/brandreply.apk" download="brandreply.apk" className="btn btn-success pulse-animation" style={{ padding: '1.25rem 3rem', fontSize: '1.4rem', boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)' }}>
              <i className="fa-brands fa-android"></i> {t.downloadCTA}
            </a>

            <div className={styles.downloadBadges}>
              <div className={styles.dBadge}><i className="fa-solid fa-shield-check"></i> {t.downloadBadge1}</div>
              <div className={styles.dBadge}><i className="fa-solid fa-ban"></i> {t.downloadBadge2}</div>
              <div className={styles.dBadge}><i className="fa-solid fa-lock"></i> {t.downloadBadge3}</div>
              <div className={styles.dBadge}><i className="fa-solid fa-bolt"></i> {t.downloadBadge4}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="Brand Reply" width={36} height={36} className={styles.footerLogoImage} />
            <span className={styles.brandName}>Brand Reply</span>
          </div>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} {t.footerRights} {t.footerDesc}
          </p>
        </div>
      </footer>

      {/* ===== STICKY BOTTOM BAR ===== */}
      <div className={styles.stickyBottomBar}>
        <div className={styles.stickyContainer}>
          <div className={styles.priceContainer}>
            <span className={styles.pricePerDay}>{t.stickyPrice}</span>
            <span className={styles.pricePerYear}>{t.stickyPlan}</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            <i className="fa-brands fa-whatsapp"></i> {t.stickyCTA}
          </a>
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContainer}>
            <div className={styles.popupLogoContainer}>
              <Image src="/logo.png" alt="Brand Reply Logo" width={60} height={60} className={styles.popupLogo} />
            </div>
            <h2 className={styles.popupTitle}>Choose Your Language <br/> भाषा निवडा | भाषा चुनें</h2>
            <p className={styles.popupSubtitle}>Select a language to browse the Brand Reply landing page.</p>
            <div className={styles.popupButtons}>
              <button onClick={() => selectLanguage("en")} className={styles.popupBtn}>
                🇺🇸 English
              </button>
              <button onClick={() => selectLanguage("hi")} className={styles.popupBtn}>
                🇮🇳 हिंदी
              </button>
              <button onClick={() => selectLanguage("mr")} className={styles.popupBtn}>
                🇮🇳 मराठी
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
