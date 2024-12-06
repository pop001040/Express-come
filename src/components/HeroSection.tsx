import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const HeroSection = () => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "إحنا بنصمم مواقع ويب فريدة تعزز نجاحك وتفتح لك فرص رقمية جديدة",
        "من الفكرة للتنفيذ، إحنا هنا علشان نحول رؤيتك لموقع ويب استثنائي.",
        "ابدأ دلوقتي مع أحسن الحلول الرقمية اللي هتخليك تتفوق على المنافسين!"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    };

    typed.current = new Typed(el.current!, options);

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 text-white text-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span ref={el} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 inline-block"></span>
        </div>
      </div>
    </section>
  );
};