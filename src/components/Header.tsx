
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-math">М.П.</span>
          <span className="ml-2 text-lg hidden sm:inline">Михаил Присмаков</span>
        </div>
        
        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-math transition-colors">
            Услуги
          </a>
          <a href="#why-me" className="text-foreground hover:text-math transition-colors">
            Обо мне
          </a>
          <a href="#testimonials" className="text-foreground hover:text-math transition-colors">
            Отзывы
          </a>
          <a href="#contact" className="text-foreground hover:text-math transition-colors">
            Контакты
          </a>
          <Button className="bg-math hover:bg-math-dark">
            Записаться
          </Button>
        </nav>
        
        {/* Мобильное меню */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Мобильная навигация */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-foreground hover:text-math transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#why-me" 
              className="text-foreground hover:text-math transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Обо мне
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-math transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-math transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              className="bg-math hover:bg-math-dark w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
