import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';

export const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: '1',
      message: 'مرحباً بك في Express Come! كيف يمكنني مساعدتك؟',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'كيف يمكنني الاشتراك في الخدمة؟', trigger: '3' },
        { value: 2, label: 'ما هي طرق الدفع المتاحة؟', trigger: '4' },
        { value: 3, label: 'أريد التحدث مع ممثل خدمة العملاء', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'يمكنك الاشتراك في خدماتنا بسهولة عن طريق التواصل معنا مباشرة أو اختيار إحدى باقاتنا',
      trigger: '2',
    },
    {
      id: '4',
      message: 'نقبل الدفع عن طريق التحويل البنكي والدفع عند الاستلام',
      trigger: '2',
    },
    {
      id: '5',
      message: 'يمكنك التواصل معنا مباشرة على واتساب: 01030435987',
      trigger: '2',
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ff6b00] text-white rounded-full p-4 shadow-lg hover:bg-[#ff6b00]/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-bold">المساعد الافتراضي</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <ChatBot
            steps={steps}
            headerTitle="Express Come"
            placeholder="اكتب رسالتك..."
            floating={true}
            style={{ width: '350px' }}
          />
        </div>
      )}
    </div>
  );
};