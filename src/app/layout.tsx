import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build In Byte | Websites, Apps & AI Chatbots",
  description:
    "Build In Byte crafts premium websites, mobile apps, and AI-powered chatbots for healthcare, e-commerce, restaurants, and more. Transform your business with cutting-edge digital solutions.",
  keywords: [
    "web development",
    "mobile apps",
    "chatbots",
    "AI",
    "healthcare websites",
    "e-commerce",
    "restaurant websites",
    "Build In Byte",
  ],
  openGraph: {
    title: "Build In Byte | Websites, Apps & AI Chatbots",
    description:
      "Premium digital solutions — websites, apps, and AI chatbots for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
