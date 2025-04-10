
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    { name: 'Inicio', href: isHomePage ? '#inicio' : '/' },
    { name: 'Nosotros', href: isHomePage ? '#nosotros' : '/#nosotros' },
    { name: 'Servicios', href: isHomePage ? '#servicios' : '/#servicios' },
    { name: 'Mantenimiento', href: isHomePage ? '#mantenimiento' : '/#mantenimiento' },
    { name: 'Contacto', href: isHomePage ? '#contacto' : '/#contacto' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/#" className="flex items-center">
            <img src="/logo.png" alt="BlueX Agency" className="h-10" />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="btn-hover-effect text-bluex-gray font-medium hover:text-bluex-primary transition-colors"
              onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-bluex-primary hover:bg-bluex-dark text-white w-full transition-colors"
              onClick={handleLinkClick}
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
