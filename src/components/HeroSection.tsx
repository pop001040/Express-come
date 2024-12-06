export const HeroSection = () => {
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">إحنا بنصمم مواقع ويب فريدة تعزز نجاحك وتفتح لك فرص رقمية جديدة</h1>
          <p className="text-xl md:text-2xl mb-4">من الفكرة للتنفيذ، إحنا هنا علشان نحول رؤيتك لموقع ويب استثنائي.</p>
          <p className="text-xl md:text-2xl">ابدأ دلوقتي مع أحسن الحلول الرقمية اللي هتخليك تتفوق على المنافسين!</p>
        </div>
      </div>
    </section>
  );
};