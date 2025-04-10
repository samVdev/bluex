
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-bluex-primary font-medium text-sm mb-4">
                Agencia de Diseño Web Profesional
              </span>
              <h1 className="mb-4 leading-tight">
                Diseñamos <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">soluciones digitales</span> que impulsan tu negocio
              </h1>
              <p className="text-lg text-bluex-gray md:text-xl">
                Creamos sitios web modernos, funcionales y optimizados que convierten visitantes en clientes y potencian tu marca en el mundo digital.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => location.href = location.origin + '#contacto'} className="bg-bluex-primary hover:bg-bluex-dark text-white px-8 py-6 text-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => location.href = location.origin + '#portafolio'} variant="outline" className="border-bluex-primary text-bluex-primary hover:bg-blue-50 px-8 py-6 text-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                Ver Portafolio
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-br from-bluex-primary/20 to-bluex-light/20 rounded-xl p-4 md:p-8">
              <div className="rounded-lg relative shadow-2xl">
              <div className="h-64 md:h-80 bg-transparent"/>
              <img src='/home.jpg' className="h-64 md:h-80 bg-blue-100 object-cover -rotate-6 top-0 rounded-lg absolute"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
