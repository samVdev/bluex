
import { CheckCircle2, Users, Award, Gem } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="section bg-white py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-bluex-primary font-medium text-sm mb-4 animate-fade-in">
            Quiénes Somos
          </span>
          <h2 className="mb-4">Conoce a <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">BlueX Agency</span></h2>
          <p className="text-lg text-bluex-gray">
            Somos un equipo de profesionales apasionados por crear experiencias digitales excepcionales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 lg:order-1 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-bluex-gray mb-6">
              En BlueX Agency nos dedicamos a transformar ideas en soluciones digitales innovadoras que impulsan el crecimiento de nuestros clientes. Combinamos diseño creativo con tecnología de vanguardia para crear sitios web y aplicaciones que destacan en el mercado digital.
            </p>
            
            <div className="space-y-4">
              {[
                'Diseño centrado en la experiencia del usuario',
                'Tecnologías web modernas y eficientes',
                'Soluciones personalizadas para cada cliente',
                'Soporte continuo y mantenimiento profesional'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-bluex-primary mr-2 flex-shrink-0 mt-1" />
                  <p className="text-bluex-gray">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipo de BlueX trabajando" 
                className="rounded-lg shadow-xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-bluex-primary text-2xl">+100</p>
                <p className="text-bluex-gray">Proyectos exitosos</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-bluex-light-gray p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-bluex-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-4">Equipo Profesional</h4>
            <p className="text-bluex-gray">
              Contamos con diseñadores, desarrolladores y estrategas digitales con amplia experiencia en el sector.
            </p>
          </div>
          
          <div className="bg-bluex-light-gray p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-bluex-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-4">Reconocimiento</h4>
            <p className="text-bluex-gray">
              Nuestro trabajo ha sido reconocido por su calidad, innovación y resultados efectivos para nuestros clientes.
            </p>
          </div>
          
          <div className="bg-bluex-light-gray p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-bluex-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-4">Valores</h4>
            <p className="text-bluex-gray">
              Trabajamos con integridad, transparencia y compromiso para ofrecer siempre la mejor solución para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
