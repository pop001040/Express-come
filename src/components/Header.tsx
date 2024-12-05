import { Button } from "./ui/button";
import { Link } from "react-scroll";

export const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">شركتنا</div>
        <nav className="flex gap-6 items-center">
          <Link to="portfolio" smooth={true} className="cursor-pointer hover:text-primary">
            أعمالنا
          </Link>
          <Link to="pricing" smooth={true} className="cursor-pointer hover:text-primary">
            خطة الأسعار
          </Link>
          <Button onClick={onContactClick} variant="default">
            اتصل بنا
          </Button>
        </nav>
      </div>
    </header>
  );
};