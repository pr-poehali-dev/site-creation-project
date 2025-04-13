
import { Button } from "@/components/ui/button";

const TeacherHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-math-light/30 to-white p-8 md:p-16 rounded-lg overflow-hidden">
      {/* Математические символы в фоне */}
      <div className="absolute inset-0 opacity-5 text-9xl font-light text-math-dark select-none flex flex-wrap items-center justify-center">
        <span className="m-4">∑</span>
        <span className="m-4">∫</span>
        <span className="m-4">π</span>
        <span className="m-4">√</span>
        <span className="m-4">∞</span>
        <span className="m-4">△</span>
        <span className="m-4">≡</span>
        <span className="m-4">±</span>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Михаил Присмаков
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Ваш личный проводник в мир математики
          </p>
          <p className="mb-6 text-lg">
            Преподаватель кафедры математического анализа, наставник и олимпиадный тренер
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-math hover:bg-math-dark" size="lg">
              Записаться на занятие
            </Button>
            <Button variant="outline" className="border-math text-math hover:bg-math-light/20" size="lg">
              Программы обучения
            </Button>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-math-light flex items-center justify-center">
            {/* Здесь будет фото преподавателя */}
            <img 
              src="/placeholder.svg" 
              alt="Михаил Присмаков" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHero;
