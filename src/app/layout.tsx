import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Reply | Automate SMS & WhatsApp for Your Business",
  description: "Brand Reply is the #1 auto-reply Android app for Indian businesses. Automatically send customized business catalogs, location details, and welcome messages via WhatsApp and SMS on missed, incoming, and outgoing calls.",
  keywords: [
    "Brand Reply",
    "Auto WhatsApp reply app",
    "Auto SMS call reply",
    "Missed call auto reply app",
    "Business automation app Android",
    "WhatsApp business automation",
    "SMS business marketing",
    "Android call auto reply",
    "Indian business automation",
    "Follow up automation app"
  ],
  authors: [{ name: "Brand Reply Team" }],
  creator: "Brand Reply",
  publisher: "Brand Reply",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brandreply.in",
    title: "Brand Reply | Automate SMS & WhatsApp for Your Business",
    description: "Instantly reply to incoming, outgoing, or missed calls automatically via WhatsApp and SMS. Grow your brand and save 10+ hours a week.",
    siteName: "Brand Reply",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Brand Reply Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Reply | Automate SMS & WhatsApp for Your Business",
    description: "Instantly reply to incoming, outgoing, or missed calls automatically via WhatsApp and SMS.",
    images: ["/logo.png"],
  },
  alternates: {
    languages: {
      "en-IN": "/en",
      "hi-IN": "/hi",
      "mr-IN": "/mr",
    },
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Brand Reply",
  "operatingSystem": "Android",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "999.00",
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "999.00",
      "priceCurrency": "INR",
      "referenceQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitCode": "ANN"
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "5124"
  },
  "description": "Automatically send customized business catalogs, location details, and welcome messages via WhatsApp and SMS on missed, incoming, and outgoing calls."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my data safe with Brand Reply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Brand Reply runs locally on your phone. We do not upload your contacts, call logs, or messages to any server. Your data stays 100% on your device."
      }
    },
    {
      "@type": "Question",
      "name": "Will my WhatsApp number get banned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The app sends messages from your official WhatsApp to people who called you — this is natural behavior. Just avoid spammy content and you're completely safe."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to keep the app open all the time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Once you set your templates and permissions, Brand Reply runs efficiently in the background without draining your battery."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work on all Android phones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Brand Reply supports Android 8.0 and above. It works on Samsung, Xiaomi, Realme, Oppo, Vivo, OnePlus, and all major brands."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
