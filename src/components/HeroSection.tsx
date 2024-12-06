export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white text-center">
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6">نحن نصنع مواقع الويب المميزة</h1>
        <p className="text-2xl mb-8">نساعدك في تحويل أفكارك إلى واقع رقمي</p>
      </div>
    </section>
  );
};