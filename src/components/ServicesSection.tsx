
import { 
  GraduationCap, 
  Trophy, 
  BookOpen, 
  Brain 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <GraduationCap className="h-10 w-10 text-math" />,
    title: "Подготовка к ЕГЭ и ОГЭ",
    description: "Систематическая подготовка к экзаменам с акцентом на сложные задания и проработку типичных ошибок."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-math" />,
    title: "Школьная программа",
    description: "Помощь в освоении школьной программы — от базовых концепций до самых сложных тем для учеников всех классов."
  },
  {
    icon: <Trophy className="h-10 w-10 text-math" />,
    title: "Олимпиадная математика",
    description: "Подготовка к олимпиадам и вступительным испытаниям в топовые ВУЗы с разбором нестандартных задач."
  },
  {
    icon: <Brain className="h-10 w-10 text-math" />,
    title: "Развитие мышления",
    description: "Формирование математического мышления через индивидуальный подход и специальные методики."
  }
];

const ServicesSection = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Мои услуги</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-math/10 hover:shadow-md hover:border-math/30 transition duration-300">
            <CardHeader className="pb-2">
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
