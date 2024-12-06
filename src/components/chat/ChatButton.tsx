import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: ChatButtonProps) => (
  <button
    onClick={onClick}
    className="rounded-full shadow-lg hover:bg-[#FF7F00]/10 transition-all duration-300 p-2"
    aria-label="فتح المحادثة"
  >
    <img 
      src="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png"
      alt="Chat Bot"
      className="w-[40px] h-[40px] rounded-full border-2 border-[#FF7F00] hover:scale-110 transition-transform duration-300"
    />
  </button>
);