
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Mantenimiento', href: '#mantenimiento' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#inicio" className="flex items-center">
            <img src="/lovable-uploads/a2af1ca2-2586-4367-b0dc-d0a65a396950.png" alt="BlueX Agency" className="h-10" />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="btn-hover-effect text-bluex-gray font-medium hover:text-bluex-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-bluex-primary hover:bg-bluex-dark text-white transition-colors">
            Consulta Gratis
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-bluex-gray hover:text-bluex-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-bluex-gray font-medium py-2 hover:text-bluex-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-bluex-primary hover:bg-bluex-dark text-white w-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Consulta Gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
