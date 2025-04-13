
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Опыт преподавания",
    description: "Опыт работы в ВУЗе и со школьниками разного уровня подготовки"
  },
  {
    title: "Научная деятельность",
    description: "Автор научных публикаций и участник исследований в области математики"
  },
  {
    title: "Авторская методика",
    description: "Разработчик уникальных методик подготовки, включая профориентацию через ИИ"
  }
];

const WhyChooseMe = () => {
  return (
    <div className="bg-math-light/30 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Почему мне доверяют</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-math flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Формат занятий</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-math-light flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold mb-2">Онлайн или очно</h4>
              <p className="text-sm text-muted-foreground">Занятия в Москве или через видеосвязь</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-math-light flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h4 className="font-semibold mb-2">Индивидуально и в группах</h4>
              <p className="text-sm text-muted-foreground">Персональный подход или групповые занятия</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-math-light flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold mb-2">Практика и разбор задач</h4>
              <p className="text-sm text-muted-foreground">Решение сложных задач и подготовка к экзаменам</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
