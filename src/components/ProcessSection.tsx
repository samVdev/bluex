
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Planificación",
      description: "Analizamos tus necesidades y definimos los objetivos del proyecto.",
    },
    {
      number: "02",
      title: "Diseño",
      description: "Creamos bocetos y prototipos visuales personalizados para tu aprobación.",
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Implementamos la web con código limpio y optimizado para un rendimiento óptimo.",
    },
    {
      number: "04",
      title: "Pruebas",
      description: "Realizamos pruebas exhaustivas para garantizar que todo funcione perfectamente.",
    },
    {
      number: "05",
      title: "Lanzamiento",
      description: "Publicamos tu sitio web y lo configuramos en los motores de búsqueda.",
    },
    {
      number: "06",
      title: "Soporte",
      description: "Te brindamos soporte continuo para mantener tu web actualizada y segura.",
    },
  ];

  return (
    <section id="proceso" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
            Nuestro Proceso
          </span>
          <h2 className="mb-4">
            Metodología <span className="gradient-text">simple y efectiva</span>
          </h2>
          <p className="text-lg text-gray-600">
            Seguimos un proceso estructurado y transparente para asegurar que tu proyecto se desarrolle exitosamente, desde la concepción hasta el lanzamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-sigma-purple font-bold text-xl py-2 px-4 rounded-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

export default ProcessSection;
