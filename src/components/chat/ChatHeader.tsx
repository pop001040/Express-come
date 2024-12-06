import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => (
  <div className="flex justify-between items-center p-4 border-b bg-[#1A1F2C] text-white rounded-t-lg">
    <div className="flex items-center gap-3">
      <Avatar className="h-8 w-8 border-2 border-[#FF7F00]">
        <AvatarImage src="/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png" alt="Bot Avatar" />
        <AvatarFallback>EC</AvatarFallback>
      </Avatar>
      <h3 className="font-bold">المساعد الافتراضي</h3>
    </div>
    <button
      onClick={onClose}
      className="text-white/80 hover:text-white transition-colors"
      aria-label="إغلاق المحادثة"
    >
      ✕
    </button>
  </div>
);