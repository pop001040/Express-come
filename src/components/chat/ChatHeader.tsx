import React from 'react';

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => (
  <div className="flex justify-between items-center p-4 border-b bg-[#1A1F2C] text-white">
    <h3 className="font-bold">المساعد الافتراضي</h3>
    <button
      onClick={onClose}
      className="text-white/80 hover:text-white"
    >
      ✕
    </button>
  </div>
);