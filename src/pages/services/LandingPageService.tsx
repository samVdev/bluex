
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Check, Zap, Layout, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPageService = () => {
  const benefits = [
    'Diseño profesional optimizado para conversión',
    'Adaptado perfectamente a dispositivos móviles',
    'Carga rápida para mejor experiencia de usuario',
    'Elementos de llamado a la acción efectivos',
    'Optimización SEO básica incluida',
    'Integración con redes sociales y herramientas de análisis'
  ];
  
  const features = [
    {
      icon: <Layout className="h-12 w-12 text-bluex-primary" />,
      title: 'Diseño Atractivo',
      description: 'Creamos landing pages visualmente impactantes que captan la atención de los visitantes desde el primer momento.'
    },
    {
      icon: <Zap className="h-12 w-12 text-bluex-primary" />,
      title: 'Optimizado para Conversión',
      description: 'Cada elemento de la página está diseñado estratégicamente para maximizar las conversiones y generar leads.'
    }
  ];

  return (
    <ServiceLayout 
      title="Landing Page Profesional" 
      description="Una página de aterrizaje estratégica para aumentar conversiones y potenciar su campaña de marketing digital"
      service="landing-page"
    >
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Impulse sus <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">campañas de marketing</span> con landing pages de alto rendimiento</h2>
              <p className="text-lg text-bluex-gray mb-8">
                Las landing pages son herramientas esenciales para campañas publicitarias efectivas. En BlueX diseñamos páginas de aterrizaje atractivas y optimizadas para convertir visitantes en leads o clientes.
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
                Solicitar Landing Page <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-bluex-light-gray p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
                alt="Landing Page Example" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-bluex-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">¿Por qué elegir nuestras <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">Landing Pages</span>?</h2>
            <p className="text-bluex-gray text-lg">
              Nuestras landing pages están diseñadas con un objetivo claro: convertir visitantes en clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h2 className="mb-6">Comience hoy mismo con su Landing Page</h2>
              <p className="text-lg mb-8">
                Obtenga una landing page profesional y optimizada para conversiones en tan solo 7 días.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-bluex-primary hover:bg-gray-100">
                  Ver ejemplos
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

export default LandingPageService;
