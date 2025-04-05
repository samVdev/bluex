
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Check, Code, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomDevelopmentService = () => {
  const benefits = [
    'Desarrollo a medida según sus requisitos específicos',
    'Diseño UX/UI personalizado y enfocado en sus usuarios',
    'Integración con sistemas y API de terceros',
    'Funcionalidades avanzadas según necesidades',
    'Panel de administración completo',
    'Escalabilidad para crecimiento futuro',
    'Seguridad robusta y protección de datos'
  ];
  
  const features = [
    {
      icon: <Code className="h-12 w-12 text-bluex-primary" />,
      title: 'Desarrollo Personalizado',
      description: 'Creamos soluciones web completamente personalizadas que responden exactamente a las necesidades únicas de su negocio.'
    },
    {
      icon: <Database className="h-12 w-12 text-bluex-primary" />,
      title: 'Integración de Sistemas',
      description: 'Conectamos su solución web con sus sistemas existentes para un flujo de trabajo sin interrupciones y más eficiente.'
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-bluex-primary" />,
      title: 'Seguridad Avanzada',
      description: 'Implementamos las mejores prácticas de seguridad para proteger su aplicación web y los datos de sus usuarios.'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'GraphQL', 'Next.js', 'Python'
  ];

  return (
    <ServiceLayout 
      title="Desarrollo Web a Medida" 
      description="Soluciones digitales personalizadas que resuelven los desafíos específicos de su negocio"
      service="desarrollo-a-medida"
    >
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Soluciones <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">personalizadas</span> para desafíos únicos</h2>
              <p className="text-lg text-bluex-gray mb-8">
                Cuando las soluciones estándar no son suficientes, nuestro equipo de desarrollo crea aplicaciones y sistemas web a medida que se adaptan perfectamente a sus necesidades específicas y potencian su negocio.
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
                Consultar Proyecto a Medida <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-bluex-light-gray p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Custom Development" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-bluex-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Ventajas del <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">desarrollo a medida</span></h2>
            <p className="text-bluex-gray text-lg">
              El desarrollo personalizado le permite tener exactamente lo que necesita, ni más ni menos, optimizando recursos y maximizando resultados.
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
          
          <div className="mt-16 bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Tecnologías que utilizamos</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-bluex-light-gray rounded-full text-bluex-primary font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bluex-primary to-bluex-light rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="mb-6">¿Tiene un proyecto en mente?</h2>
              <p className="text-lg mb-8">
                Hablemos sobre su idea y cómo podemos convertirla en una solución digital efectiva para su negocio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-bluex-primary hover:bg-gray-100">
                  Ver proyectos similares
                </Button>
                <Button className="bg-bluex-dark hover:bg-bluex-dark/90 text-white">
                  Agendar una consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CustomDevelopmentService;
