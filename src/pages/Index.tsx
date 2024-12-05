import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen" dir="rtl">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <HeroSection onContactClick={() => setIsContactOpen(true)} />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <PricingSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;