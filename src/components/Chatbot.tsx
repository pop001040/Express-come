import { useState } from 'react';
import { ChatButton } from './chat/ChatButton';
import { ChatHeader } from './chat/ChatHeader';
import { ChatContainer } from './chat/ChatContainer';
import { chatSteps } from './chat/ChatSteps';

export const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <ChatContainer steps={chatSteps} />
        </div>
      )}
    </div>
  );
};