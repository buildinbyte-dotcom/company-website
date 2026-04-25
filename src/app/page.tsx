import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import AppShowcase from "@/components/AppShowcase";
import ChatbotDemo from "@/components/ChatbotDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <WebsiteShowcase />
        <AppShowcase />
        <ChatbotDemo />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
