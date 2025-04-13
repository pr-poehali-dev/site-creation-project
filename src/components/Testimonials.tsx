
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Алексей Смирнов",
    role: "Ученик 11 класса",
    content: "Благодаря занятиям с Михаилом я смог поднять свой балл по ЕГЭ с 68 до 92! Его методики и индивидуальный подход помогли мне разобраться даже в самых сложных темах.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Мария Иванова",
    role: "Родитель ученика 9 класса",
    content: "Мой сын всегда испытывал трудности с математикой. После нескольких месяцев занятий с Михаилом его оценки значительно улучшились, а главное — появился интерес к предмету!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Дмитрий Козлов",
    role: "Студент МФТИ",
    content: "Михаил помог мне подготовиться к олимпиадам и поступить в МФТИ. Его глубокое понимание математики и умение объяснять сложные концепции простым языком просто бесценны.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Отзывы моих учеников</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Что говорят ученики и их родители о моем подходе к обучению и результатах наших занятий
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-math/10">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <blockquote className="italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
