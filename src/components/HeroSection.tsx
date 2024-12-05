import { Button } from "./ui/button";

export const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">نحن نصنع مواقع الويب المميزة</h1>
        <p className="text-xl mb-8">نساعدك في تحويل أفكارك إلى واقع رقمي</p>
        <Button onClick={onContactClick} size="lg" className="bg-primary hover:bg-primary/90">
          ابدأ مشروعك الآن
        </Button>
      </div>
    </section>
  );
};