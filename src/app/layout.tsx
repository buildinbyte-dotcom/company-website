import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://buildinbyte.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Build In Byte | Custom Websites, Mobile Apps & AI Chatbots — Australia",
    template: "%s | Build In Byte",
  },

  description:
    "Build In Byte is an Australian digital agency specializing in custom website development, cross-platform mobile apps, AI-powered chatbots, and enterprise solutions. We serve healthcare, e-commerce, hospitality, and corporate clients with 15+ years of engineering expertise.",

  keywords: [
    "web development Australia",
    "custom website development",
    "mobile app development",
    "AI chatbot development",
    "enterprise software solutions",
    "healthcare website development",
    "e-commerce website builder",
    "restaurant website design",
    "React Native app development",
    "Next.js development agency",
    "digital transformation consulting",
    "legacy system migration",
    "Gen AI integration",
    "LLM integration services",
    "cross-platform mobile apps",
    "Build In Byte",
    "Australian web agency",
    "custom software development",
    "SaaS development",
    "AI agents",
  ],

  authors: [{ name: "Build In Byte", url: SITE_URL }],
  creator: "Build In Byte",
  publisher: "Build In Byte",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Build In Byte",
    title: "Build In Byte | Custom Websites, Mobile Apps & AI Chatbots",
    description:
      "Premium digital solutions — custom websites, cross-platform mobile apps, AI chatbots, and enterprise software. Trusted by healthcare, e-commerce, and hospitality businesses across Australia.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Build In Byte — Digital Solutions That Scale",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Build In Byte | Custom Websites, Mobile Apps & AI Chatbots",
    description:
      "Premium digital solutions — custom websites, cross-platform mobile apps, AI chatbots, and enterprise software for modern businesses.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@buildinbyte",
  },

  alternates: {
    canonical: SITE_URL,
  },

  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Build In Byte",
      url: SITE_URL,
      email: "sales@buildinbyte.com",
      description:
        "Australian digital agency specializing in custom websites, mobile apps, AI chatbots, and enterprise solutions.",
      foundingDate: "2020",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Chatbot Development",
        "Enterprise Software",
        "Digital Transformation",
        "Cloud Architecture",
        "Generative AI",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Python",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Build In Byte",
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Build In Byte — Custom Websites, Mobile Apps & AI Chatbots for modern businesses.",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Build In Byte | Custom Websites, Mobile Apps & AI Chatbots — Australia",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "Build In Byte crafts premium websites, mobile apps, and AI-powered chatbots for healthcare, e-commerce, restaurants, and more.",
    },
    {
      "@type": "Service",
      name: "Website Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Pixel-perfect, responsive websites that convert visitors into customers. Specializing in healthcare, e-commerce, hospitality, and corporate websites.",
      serviceType: "Web Development",
      areaServed: "Australia",
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Native and cross-platform mobile applications built with React Native and Flutter for iOS and Android.",
      serviceType: "Mobile App Development",
      areaServed: "Australia",
    },
    {
      "@type": "Service",
      name: "AI Chatbot Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Intelligent conversational agents powered by cutting-edge AI for 24/7 customer support, lead generation, and appointment booking.",
      serviceType: "AI Development",
      areaServed: "Australia",
    },
    {
      "@type": "Service",
      name: "Enterprise Solutions & Gen AI",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Custom enterprise software, digital transformation, legacy system migration, and Gen AI adoption including LLM integration and RAG pipelines.",
      serviceType: "Enterprise Software Development",
      areaServed: "Australia",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
