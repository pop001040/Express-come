export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-right">الشروط والأحكام</h3>
          <p className="text-gray-400 text-right leading-relaxed">
            بالتسجيل في موقعنا واستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
            نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إخطارك بأي تغييرات جوهرية.
            جميع المحتويات والمواد المتوفرة على هذا الموقع هي ملك لنا وتخضع لحقوق الطبع والنشر.
          </p>
        </div>
        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};