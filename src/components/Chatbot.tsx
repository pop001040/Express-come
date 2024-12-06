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
            bubbleStyle={{
              backgroundColor: '#ff6b00',
              color: 'white',
              borderRadius: '15px',
              padding: '10px 15px',
              marginBottom: '10px',
              maxWidth: '80%',
            }}
            bubbleOptionStyle={{
              backgroundColor: '#9b87f5',
              color: 'white',
              borderRadius: '15px',
              padding: '10px 15px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
            avatarStyle={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
            botAvatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b00'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E"
            customStyle={{
              background: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '15px',
              fontFamily: 'Cairo, sans-serif',
            }}
            enableMobileAutoFocus={true}
            enableSmoothScroll={true}
            speechSynthesis={{ enable: false }}
          />
        </div>
      )}
    </div>
  );
};