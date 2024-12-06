export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center pt-20 md:pt-0">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">نحن نصنع مواقع الويب المميزة</h1>
        <p className="text-xl md:text-2xl">نساعدك في تحويل أفكارك إلى واقع رقمي</p>
      </div>
    </section>
  );
};