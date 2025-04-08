
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bluex-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img src="/logo.png" alt="BlueX Agency" className="h-8 mr-2" />
              BLUEX
            </h3>
            <p className="text-gray-300 mb-4">
              Agencia de diseño web profesional especializada en crear sitios impactantes y efectivos.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-bluex-primary text-white p-2 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-bluex-primary text-white p-2 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-bluex-primary text-white p-2 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-bluex-primary text-white p-2 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-white transition-colors">Landing Page</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Página Web</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Desarrollo a Medida</a></li>
              <li><a href="#mantenimiento" className="hover:text-white transition-colors">Soporte y Mantenimiento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© {currentYear} BlueX Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
