
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto. ¡Gracias!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contacto" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-sigma-purple font-medium text-sm mb-4">
            Contáctanos
          </span>
          <h2 className="mb-4">
            ¿Listo para <span className="gradient-text">impulsar</span> tu negocio?
          </h2>
          <p className="text-lg text-gray-600">
            Compártenos tu proyecto y recibe una consultoría gratuita. Estamos aquí para ayudarte a crecer en el mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-sigma-purple focus:ring-sigma-purple/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-sigma-purple focus:ring-sigma-purple/10"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-sigma-purple focus:ring-sigma-purple/10"
                />
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="h-32 border-gray-300 focus:border-sigma-purple focus:ring-sigma-purple/10"
                />
              </div>
              <Button type="submit" className="bg-sigma-purple hover:bg-sigma-purple/90 text-white w-full md:w-auto">
                Enviar Mensaje <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sigma-purple mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Teléfono</p>
                    <p className="text-gray-600">04129856652</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sigma-purple mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contacto@cual.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
