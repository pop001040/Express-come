import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: ChatButtonProps) => (
  <button
    onClick={onClick}
    className="fixed bottom-4 right-4 z-50 w-[40px] h-[40px] rounded-full transition-all duration-300"
    aria-label="فتح المحادثة"
  >
    <img 
      src="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png"
      alt="Chat Bot"
      className="w-full h-full rounded-full border-2 border-[#FF7F00] hover:scale-110 transition-transform duration-300"
    />
  </button>
);