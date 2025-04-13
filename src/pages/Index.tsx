
import Header from "@/components/Header";
import TeacherHero from "@/components/TeacherHero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <TeacherHero />
        </section>
        
        <section id="services" className="container mx-auto px-4">
          <ServicesSection />
        </section>
        
        <section id="why-me">
          <WhyChooseMe />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Запишитесь на пробное занятие</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
