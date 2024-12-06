import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: ChatButtonProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 bg-[#1A1F2C] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#FF7F00] transition-colors duration-300 text-[18px]"
    aria-label="فتح المحادثة"
    style={{ fontFamily: 'Cairo, sans-serif' }}
  >
    <span>تحدث معنا</span>
    <MessageCircle className="w-5 h-5" />
  </button>
);