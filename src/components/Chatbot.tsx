import { useState } from 'react';
import { ChatButton } from './chat/ChatButton';
import { ChatHeader } from './chat/ChatHeader';
import { ChatContainer } from './chat/ChatContainer';
import { chatSteps } from './chat/ChatSteps';

export const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[90vw] sm:w-[400px] md:w-[450px] transition-all duration-300 ease-in-out">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <ChatContainer steps={chatSteps} />
        </div>
      )}
    </div>
  );
};