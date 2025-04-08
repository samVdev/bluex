
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      category: 'Tienda Online',
      title: 'E-commerce de Moda',
      image: '/images/ecco.png',
    },
    {
      category: 'Portafolio',
      title: 'Portafolio',
      image: '/images/sam-desarrolloporsamcv.png',
    },
    {
      category: 'Inmobiliaria',
      title: 'Inmobiliaria',
      image: '/images/house.png',
    },

    {
      category: 'WowMedia',
      title: 'WowMedia',
      image: '/images/wow.jpeg',
    },

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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0"
            >
              <img src={project.image} alt="" className='h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105`'/>
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

      </div>
    </section>
  );
};

export default PortfolioSection;
