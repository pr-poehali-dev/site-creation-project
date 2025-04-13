
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    console.log("Форма отправлена:", formData);
    
    toast({
      title: "Заявка отправлена!",
      description: "Скоро я свяжусь с вами для обсуждения деталей.",
    });
    
    // Очистка формы
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-math-dark mb-4">Записаться на пробное занятие</h3>
      
      <div>
        <Input
          placeholder="Ваше имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-math/20 focus:border-math"
        />
      </div>
      
      <div>
        <Input
          placeholder="Номер телефона"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border-math/20 focus:border-math"
        />
      </div>
      
      <div>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-math/20 focus:border-math"
        />
      </div>
      
      <div>
        <Textarea
          placeholder="Ваше сообщение (необязательно)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-math/20 focus:border-math min-h-[100px]"
        />
      </div>
      
      <Button type="submit" className="w-full bg-math hover:bg-math-dark">
        Отправить заявку
      </Button>
    </form>
  );
};

export default ContactForm;
