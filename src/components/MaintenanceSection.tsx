
import { Check, Shield, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MaintenanceSection = () => {
  const maintenancePlans = [
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: 'Soporte Básico',
      description: 'Mantenimiento esencial para sitios web pequeños y landing pages.',
      price: '$49/mes',
      features: [
        'Actualizaciones de seguridad',
        'Monitoreo de caídas',
        'Backups mensuales',
        'Soporte por email',
        '1 modificación menor mensual'
      ],
      popular: false
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: 'Soporte Estándar',
      description: 'Mantenimiento completo para sitios web de empresas y negocios.',
      price: '$99/mes',
      features: [
        'Actualizaciones de seguridad',
        'Monitoreo 24/7',
        'Backups semanales',
        'Soporte por email y teléfono',
        '3 modificaciones menores mensuales',
        'Informes de rendimiento',
        'Optimización básica de SEO'
      ],
      popular: true
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: 'Soporte Premium',
      description: 'Mantenimiento avanzado para sitios web con altos requisitos técnicos.',
      price: '$199/mes',
      features: [
        'Actualizaciones de seguridad prioritarias',
        'Monitoreo 24/7 con alertas',
        'Backups diarios',
        'Soporte prioritario',
        'Modificaciones ilimitadas',
        'Informes avanzados',
        'Optimización avanzada de SEO',
        'CDN y optimización de velocidad'
      ],
      popular: false
    }
  ];

  return (
    <section id="mantenimiento" className="section bg-bluex-light-gray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-bluex-primary font-medium text-sm mb-4 animate-fade-in">
            Mantén tu sitio actualizado
          </span>
          <h2 className="mb-4">Planes de <span className="bg-gradient-to-r from-bluex-primary to-bluex-light bg-clip-text text-transparent">soporte y mantenimiento</span></h2>
          <p className="text-lg text-bluex-gray">
            Asegura el óptimo funcionamiento de tu sitio web con nuestros planes de mantenimiento continuo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenancePlans.map((plan, index) => (
            <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${plan.popular ? 'border-bluex-primary' : 'border-gray-200'} animate-zoom-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-6 ${plan.popular ? 'bg-gradient-to-r from-bluex-primary to-bluex-light' : 'bg-bluex-gray'}`}>
                <div className="flex justify-between items-center">
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center">
                    {plan.icon}
                  </div>
                  {plan.popular && (
                    <span className="bg-white text-bluex-primary px-3 py-1 rounded-full text-sm font-medium">
                      Recomendado
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mt-4 text-white">{plan.title}</h3>
                <p className="text-white/90 mt-2">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-white text-3xl font-bold">{plan.price}</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 bg-white">
                <h4 className="font-semibold text-bluex-gray">Incluye:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-bluex-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-bluex-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-white">
                <Button onClick={() => location.href = location.origin + '#contacto'} className={`w-full ${plan.popular ? 'bg-bluex-primary hover:bg-bluex-dark' : 'bg-bluex-gray hover:bg-bluex-dark'} text-white`}>
                  Contratar Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
