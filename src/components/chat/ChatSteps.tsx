import React from 'react';

const FileUploadComponent = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create WhatsApp share URL with the file
      const whatsappNumber = "01030435987";
      const message = "مرحباً، لدي ملف للمشاركة";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept="image/*,.pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FF7F00] file:text-white hover:file:bg-[#FF7F00]/80 text-sm text-gray-500"
      />
      <button
        onClick={() => window.open(`https://wa.me/01030435987`, '_blank')}
        className="bg-[#FF7F00] text-white px-4 py-2 rounded-full hover:bg-[#FF7F00]/80 transition-colors text-sm"
      >
        إرسال عبر الواتساب
      </button>
    </div>
  );
};

export const chatSteps = [
  {
    id: '1',
    message: 'أهلًا وسهلًا! 😊 أنا هنا عشان أساعدك، إزاي أقدر أخدمك النهاردة؟',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'عايز أعرف إزاي أشترك في الخدمة', trigger: '3' },
      { value: 2, label: 'ما هي طرق الدفع المتاحة؟', trigger: '4' },
      { value: 3, label: 'عايز أتكلم مع خدمة العملاء', trigger: '5', link: 'https://wa.me/01030435987' },
      { value: 4, label: 'عندي استفسار تاني', trigger: '6' },
      { value: 5, label: 'عايز أرسل ملفات أو صور', trigger: 'upload' },
    ],
  },
  {
    id: '3',
    message: 'تمام جداً! 😊 الاشتراك سهل جداً، كل اللي عليك تضغط على زر "اتصل بنا" وهنتواصل معاك على طول لنساعدك تختار الباقة المناسبة ليك!',
    trigger: '7',
  },
  {
    id: '4',
    message: 'عندنا طرق دفع كتير ومرنة 💳 بنقبل التحويل البنكي، فودافون كاش، أسيستا بي، والدفع عند الاستلام. إيه الطريقة اللي تناسبك؟',
    trigger: '7',
  },
  {
    id: '5',
    component: (
      <a 
        href="https://wa.me/01030435987" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#FF7F00] hover:underline"
      >
        اضغط هنا للتواصل معنا على واتساب 📱
      </a>
    ),
    trigger: '7',
  },
  {
    id: '6',
    message: 'أكيد! احنا هنا عشان نساعدك 💬 اتفضل اسأل وأنا هجاوبك على طول!',
    trigger: '2',
  },
  {
    id: '7',
    message: 'في حاجة تانية تقدر أساعدك فيها؟ 😊',
    trigger: '2',
  },
  {
    id: 'upload',
    component: <FileUploadComponent />,
    trigger: '7',
  },
];