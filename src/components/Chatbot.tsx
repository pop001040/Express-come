import { useState } from 'react';
import { ChatButton } from './chat/ChatButton';
import { ChatHeader } from './chat/ChatHeader';
import { ChatContainer } from './chat/ChatContainer';
import { chatSteps } from './chat/ChatSteps';

export const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[90vw] sm:w-[400px] md:w-[450px] animate-in slide-in-from-right-2 duration-200">
          <div className="rounded-lg overflow-hidden">
            <ChatHeader onClose={() => setIsOpen(false)} />
            <ChatContainer steps={chatSteps} />
          </div>
        </div>
      )}
    </>
  );
};