
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      category: 'Tienda Online',
      title: 'E-commerce de Moda',
      image: 'bg-gray-200',
    },
    {
      category: 'Sitio Corporativo',
      title: 'Firma de Abogados',
      image: 'bg-gray-300',
    },
    {
      category: 'Landing Page',
      title: 'Producto SaaS',
      image: 'bg-gray-400',
    },
    {
      category: 'Blog',
      title: 'Portal de Noticias',
      image: 'bg-gray-500',
    }
  ];

  return (
    <section id="portafolio" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
              Nuestro Portafolio
            </span>
            <h2 className="mb-4">Proyectos <span className="gradient-text">destacados</span></h2>
            <p className="text-lg text-gray-600">
              Explora nuestra selección de trabajos para diversos clientes y sectores, demostrando nuestra experiencia y versatilidad.
            </p>
          </div>
          <Button variant="outline" className="border-sigma-purple text-sigma-purple hover:bg-sigma-purple/10">
            Ver todos los proyectos
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0"
            >
              <div className={`${project.image} h-56 w-full transition-transform duration-300 group-hover:scale-105`}></div>
              <CardContent className="p-4 bg-white">
                <div className="text-sm text-sigma-purple font-medium mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-sigma-purple transition-colors">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12">
          <Card className="lg:col-span-3 bg-gradient-to-br from-sigma-purple to-sigma-blue text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Listo para transformar tu presencia digital?
                </h3>
                <p className="mb-6 text-white/90">
                  Contáctanos hoy para una consultoría gratuita y descubre cómo podemos impulsar tu negocio online.
                </p>
                <Button className="bg-white text-sigma-purple hover:bg-white/90 shadow-lg">
                  Solicitar consulta
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2 overflow-hidden border-0">
            <div className="bg-gray-300 h-64 w-full"></div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">
                Casos de Éxito
              </h3>
              <p className="text-gray-600 mb-4">
                Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de negocio.
              </p>
              <Button variant="link" className="text-sigma-purple p-0 hover:text-sigma-purple/90">
                Leer testimonios
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
