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
        
        {/* Certificates Section */}
        <div className="flex justify-center gap-8 mb-8">
          <img 
            src="/lovable-uploads/0793a6d1-be09-4d11-acc0-0efff49df9c3.png" 
            alt="W3C Certificate" 
            className="h-20 w-auto"
          />
          <img 
            src="/lovable-uploads/9f86fcef-9546-402d-9a5e-0b05e92a8458.png" 
            alt="100% Guarantee" 
            className="h-20 w-auto"
          />
          <img 
            src="/lovable-uploads/6e3ce121-74eb-46b5-b4ef-a2b4686dc80f.png" 
            alt="SSL Secure" 
            className="h-20 w-auto"
          />
        </div>
        
        <div className="text-center">
          <div className="text-xl font-bold mb-2">Express come</div>
          <div className="text-gray-400">© {new Date().getFullYear()} جميع الحقوق محفوظة</div>
        </div>
      </div>
    </footer>
  );
};