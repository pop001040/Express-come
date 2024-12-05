export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">أعمالنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={`https://picsum.photos/400/300?random=${item}`}
                alt={`مشروع ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-right">مشروع {item}</h3>
                <p className="text-gray-600 text-right">وصف مختصر للمشروع وتفاصيله</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};