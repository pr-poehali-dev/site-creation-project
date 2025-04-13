
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-math-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Михаил Присмаков</h3>
            <p className="mb-4 text-math-light">
              Ваш личный проводник в мир математики
            </p>
            <p className="text-sm opacity-80">
              Давайте сделаем математику понятной и интересной вместе!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-math-light" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-math-light" />
                <span>math@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-math-light" />
                <span>Москва</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Расписание</h3>
            <p className="mb-2">Понедельник - Пятница: 10:00 - 20:00</p>
            <p>Суббота: 10:00 - 18:00</p>
            <p className="mt-4 text-sm opacity-80">
              Воскресенье — выходной день
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Михаил Присмаков. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
