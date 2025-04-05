
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
                Agencia de Diseño Web Profesional
              </span>
              <h1 className="mb-4 leading-tight">
                Diseñamos <span className="gradient-text">páginas web</span> que convierten visitantes en clientes
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Creamos sitios web personalizados, atractivos y optimizados para SEO que ayudan a tu negocio a destacar en el mundo digital.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sigma-purple hover:bg-sigma-purple/90 text-white px-8 py-6 text-lg">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-sigma-purple text-sigma-purple hover:bg-sigma-purple/10 px-8 py-6 text-lg">
                Ver Portafolio
              </Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Empresas que confían en nosotros:</p>
              <div className="flex flex-wrap gap-8">
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-sigma-purple/20 to-sigma-blue/20 rounded-xl p-4 md:p-8">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-white">
                <div className="h-64 md:h-80 bg-gray-200"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sigma-purple rounded-full flex items-center justify-center text-white font-bold animate-float shadow-lg">
              <div className="text-center">
                <div className="text-2xl">100%</div>
                <div className="text-xs">Responsivo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
