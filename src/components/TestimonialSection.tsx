
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'María Rodríguez',
      position: 'CEO, Empresa Moda',
      content: 'Nuestra tienda online ha multiplicado las ventas por 3 desde que trabajamos con SIGMA. Su equipo entendió perfectamente nuestro negocio y nuestras necesidades.',
      stars: 5,
    },
    {
      name: 'Juan Martínez',
      position: 'Director, Firma Legal',
      content: 'El rediseño de nuestra web corporativa superó nuestras expectativas. Ahora tenemos un sitio web profesional que refleja perfectamente la imagen de nuestra firma.',
      stars: 5,
    },
    {
      name: 'Carlos Sánchez',
      position: 'Fundador, SaaS Tech',
      content: 'Gracias a SIGMA, nuestra landing page convierte visitantes en leads de manera efectiva. Su enfoque en UX ha sido clave para nuestro crecimiento.',
      stars: 4,
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-sigma-purple/5 to-sigma-blue/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
            Testimonios
          </span>
          <h2 className="mb-4">Lo que dicen <span className="gradient-text">nuestros clientes</span></h2>
          <p className="text-lg text-gray-600">
            Nuestros clientes satisfechos son nuestro mejor aval. Descubre cómo hemos ayudado a empresas como la tuya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-sigma-purple font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
