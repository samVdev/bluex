
import { Check, Layout, Globe, Code } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-white" />,
      title: 'Landing Page',
      description: 'Una página profesional enfocada en conversión para promocionar tu producto o servicio.',
      price: '$500',
      features: [
        'Diseño atractivo y profesional',
        'Optimizada para conversiones',
        'Adaptada a dispositivos móviles',
        'Formularios de contacto',
        'Enlace a redes sociales',
        'Entrega en 7 días'
      ],
      popular: false,
      path: '/servicios/landing-page'
    },
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: 'Página Web',
      description: 'Sitio web completo con múltiples páginas para establecer una presencia digital sólida.',
      price: '$700',
      features: [
        'Hasta 5 páginas interiores',
        'Blog integrado',
        'Panel de administración',
        'Formularios avanzados',
        'Integración con Google Analytics',
        'Optimización SEO básica',
        'Entrega en 14 días'
      ],
      popular: true,
      path: '/servicios/pagina-web'
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: 'Desarrollo a Medida',
      description: 'Solución web personalizada con funcionalidades específicas para tu negocio.',
      price: 'Desde $999',
      features: [
        'Análisis de requerimientos',
        'Diseño UX/UI personalizado',
        'Funcionalidades a medida',
        'Integración con sistemas',
        'Panel de administración avanzado',
        'Optimización de rendimiento',
        'Entrega según proyecto'
      ],
      popular: false,
      path: '/servicios/desarrollo-a-medida'
    }
  ];

  return (
    <section id="servicios" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-bluex-primary font-medium text-sm mb-4 animate-fade-in">
            Nuestros Servicios
          </span>
          <h2 className="mb-4">Planes de <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">desarrollo web</span> para tu negocio</h2>
          <p className="text-lg text-bluex-gray">
            Ofrecemos diferentes opciones adaptadas a tus necesidades y presupuesto para impulsar tu presencia digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${service.popular ? 'border-bluex-primary' : 'border-gray-200'} animate-zoom-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-6 ${service.popular ? 'bg-gradient-to-r from-bluex-primary to-bluex-light' : 'bg-bluex-gray'}`}>
                <div className="flex justify-between items-center">
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-white text-bluex-primary px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mt-4 text-white">{service.title}</h3>
                <p className="text-white/90 mt-2">{service.description}</p>
                <div className="mt-4">
                  <span className="text-white text-3xl font-bold">{service.price}</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 bg-white">
                <h4 className="font-semibold text-bluex-gray">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-bluex-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-bluex-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-white">
                <Button asChild className={`w-full ${service.popular ? 'bg-bluex-primary hover:bg-bluex-dark' : 'bg-bluex-gray hover:bg-bluex-dark'} text-white`}>
                  <Link to={service.path}>Solicitar Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
