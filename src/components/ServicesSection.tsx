
import { Check, Laptop, ShoppingCart, Search, Code, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="h-10 w-10 text-sigma-purple" />,
      title: 'Diseño Web',
      description: 'Diseñamos sitios web atractivos y funcionales que representan la identidad de tu marca.',
      benefits: ['Diseño personalizado', 'Experiencia de usuario optimizada', 'Adaptable a todos los dispositivos']
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-sigma-purple" />,
      title: 'Tiendas Online',
      description: 'Desarrollamos tiendas virtuales con todas las funcionalidades para vender tus productos online.',
      benefits: ['Catálogo de productos', 'Gestión de inventario', 'Pasarelas de pago seguras']
    },
    {
      icon: <Search className="h-10 w-10 text-sigma-purple" />,
      title: 'SEO',
      description: 'Optimizamos tu sitio web para los motores de búsqueda y mejoramos su visibilidad online.',
      benefits: ['Análisis de palabras clave', 'Optimización on-page', 'Estrategia de contenidos']
    },
    {
      icon: <Code className="h-10 w-10 text-sigma-purple" />,
      title: 'Desarrollo Web',
      description: 'Creamos aplicaciones web personalizadas con las tecnologías más avanzadas del mercado.',
      benefits: ['Código limpio y optimizado', 'Soluciones escalables', 'Tecnologías modernas']
    },
    {
      icon: <BarChart className="h-10 w-10 text-sigma-purple" />,
      title: 'Marketing Digital',
      description: 'Implementamos estrategias de marketing digital para atraer clientes y aumentar tus ventas.',
      benefits: ['Gestión de redes sociales', 'Email marketing', 'Publicidad online']
    }
  ];

  return (
    <section id="servicios" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="mb-4">Soluciones digitales <span className="gradient-text">completas</span> para tu negocio</h2>
          <p className="text-lg text-gray-600">
            Ofrecemos servicios integrales de diseño y desarrollo web para ayudar a tu empresa a crecer en el entorno digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardContent className="p-6 space-y-4">
                <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-sigma-purple mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
