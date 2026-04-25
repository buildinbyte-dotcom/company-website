import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Build In Byte — Custom Websites, Apps & AI Chatbots",
    short_name: "Build In Byte",
    description:
      "Premium digital solutions — custom websites, mobile apps, AI chatbots, and enterprise software for modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
