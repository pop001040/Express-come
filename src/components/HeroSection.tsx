export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center pt-20 md:pt-0">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <img 
          src="/lovable-uploads/bfc99d87-f65d-49dc-bb0b-6ca24c7f4ec9.png" 
          alt="Express Come Logo" 
          className="h-24 md:h-32 w-auto mb-8"
        />
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            إحنا بنصمم مواقع ويب فريدة تعزز نجاحك وتفتح لك فرص رقمية جديدة
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            من الفكرة للتنفيذ، إحنا هنا علشان نحول رؤيتك لموقع ويب استثنائي.
          </p>
          <p className="text-xl md:text-2xl font-bold">
            ابدأ دلوقتي مع أحسن الحلول الرقمية اللي هتخليك تتفوق على المنافسين!
          </p>
        </div>
      </div>
    </section>
  );
};