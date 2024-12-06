import React from 'react';
import ChatBot from 'react-simple-chatbot';

interface ChatContainerProps {
  steps: any[];
}

export const ChatContainer = ({ steps }: ChatContainerProps) => (
  <ChatBot
    steps={steps}
    headerTitle="Express Come"
    placeholder="اكتب رسالتك..."
    floating={true}
    style={{ 
      width: '350px',
      minHeight: '400px',
      maxHeight: '600px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
    bubbleStyle={{
      backgroundColor: '#FF7F00',
      color: 'white',
      borderRadius: '15px',
      padding: '10px 15px',
      marginBottom: '10px',
      maxWidth: '80%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}
    bubbleOptionStyle={{
      backgroundColor: '#1A1F2C',
      color: 'white',
      borderRadius: '15px',
      padding: '10px 15px',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}
    avatarStyle={{
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #FF7F00',
    }}
    botAvatar="/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png"
    userAvatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231A1F2C'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E"
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
);