
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Check, Globe, Smartphone, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebsiteService = () => {
  const benefits = [
    'Diseño web profesional y a medida',
    'Optimizado para dispositivos móviles y tablets',
    'Hasta 5 páginas interiores incluidas',
    'Panel de administración para gestionar contenido',
    'Optimización SEO básica',
    'Integración con Google Analytics y redes sociales'
  ];
  
  const features = [
    {
      icon: <Globe className="h-12 w-12 text-bluex-primary" />,
      title: 'Presencia Digital Completa',
      description: 'Creamos sitios web completos que representan profesionalmente a su empresa y mejoran su presencia online.'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-bluex-primary" />,
      title: 'Responsive Design',
      description: 'Su sitio web se verá perfectamente en todos los dispositivos, desde smartphones hasta pantallas de escritorio.'
    },
    {
      icon: <Search className="h-12 w-12 text-bluex-primary" />,
      title: 'SEO Optimizado',
      description: 'Implementamos las mejores prácticas SEO para que su sitio web sea fácilmente encontrado en los motores de búsqueda.'
    }
  ];

  return (
    <ServiceLayout 
      title="Sitio Web Profesional" 
      description="Establecemos su presencia digital con un sitio web completo, moderno y optimizado para atraer a su audiencia"
      service="pagina-web"
    >
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Establezca una sólida <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">presencia digital</span> con un sitio web profesional</h2>
              <p className="text-lg text-bluex-gray mb-8">
                Su sitio web es su escaparate digital 24/7. En BlueX diseñamos sitios web atractivos, funcionales y optimizados que representan profesionalmente a su empresa y generan confianza en sus clientes.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-bluex-primary mr-3 flex-shrink-0" />
                    <span className="text-bluex-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-bluex-primary hover:bg-bluex-dark text-white">
                Solicitar Sitio Web <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-bluex-light-gray p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Website Example" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-bluex-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">¿Por qué elegir <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">nuestros sitios web</span>?</h2>
            <p className="text-bluex-gray text-lg">
              Desarrollamos sitios web que no solo se ven bien, sino que también funcionan perfectamente y cumplen sus objetivos de negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-bluex-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bluex-primary to-bluex-light rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="mb-6">Solicite su sitio web profesional hoy</h2>
              <p className="text-lg mb-8">
                Obtenga un sitio web completo y profesional en tan solo 14 días. Comience a mejorar su presencia digital ahora.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-bluex-primary hover:bg-gray-100">
                  Ver portfolio
                </Button>
                <Button className="bg-bluex-dark hover:bg-bluex-dark/90 text-white">
                  Solicitar presupuesto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default WebsiteService;
