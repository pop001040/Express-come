import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "نقدم لكم خدمات تطوير المواقع الإلكترونية",
        "تصميم وتطوير تطبيقات الويب",
        "حلول برمجية متكاملة",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span 
            ref={el} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 inline-block"
            style={{
              color: '#333333',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          ></span>
        </div>
      </div>
    </section>
  );
};