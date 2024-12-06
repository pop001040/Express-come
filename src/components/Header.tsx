import { Button } from "./ui/button";
import { Link } from "react-scroll";

export const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <img 
            src="/lovable-uploads/bfc99d87-f65d-49dc-bb0b-6ca24c7f4ec9.png" 
            alt="Express Come Logo" 
            className="h-16 w-auto"
          />
        </div>
        <nav className="flex gap-6 items-center">
          <Link to="portfolio" smooth={true} className="cursor-pointer hover:text-[#ff6b00] text-lg">
            أعمالنا
          </Link>
          <Link to="pricing" smooth={true} className="cursor-pointer hover:text-[#ff6b00] text-lg">
            خطة الأسعار
          </Link>
          <Button 
            onClick={onContactClick} 
            variant="default"
            className="bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-lg px-6 py-2"
          >
            اتصل بنا
          </Button>
        </nav>
      </div>
    </header>
  );
};