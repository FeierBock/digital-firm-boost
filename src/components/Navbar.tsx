
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById('mobile-nav');
      if (isMenuOpen && navElement && !navElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  // Reordered navigation links as requested
  const navLinks = [{
    name: 'Startseite',
    path: '/'
  }, {
    name: 'Warum Online-Präsenz?',
    path: '/why-online-presence'
  }, {
    name: 'Leistungen',
    path: '/services'
  }, {
    name: 'Preise',
    path: '/pricing'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Über uns',
    path: '/about'
  }];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-20">
            <img 
              alt="Web-Attack Logo" 
              className="h-8 sm:h-10" 
              src="/lovable-uploads/2adcd205-59b6-4ad6-8a4c-d322d4c3dd99.png" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({isActive}) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            ))}
            <Button asChild className="ml-2 lg:ml-4 bg-brand-600 hover:bg-brand-700">
              <Link to="/contact">Kontakt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 z-20" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-nav"
            className="md:hidden fixed inset-0 top-0 pt-20 bg-white z-10 h-screen"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(link => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  className={({isActive}) => 
                    `${isActive ? 'text-brand-600 font-semibold' : 'text-gray-700'} text-lg py-2 border-b border-gray-100`
                  } 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button 
                asChild 
                className="mt-2 w-full bg-brand-600 hover:bg-brand-700"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Kontakt
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
