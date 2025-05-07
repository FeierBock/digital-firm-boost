
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                alt="Web-Attack Logo" 
                src="/lovable-uploads/98f2b43d-8a66-4dc7-9f8f-a2452ced1d72.png" 
                className="h-8 object-cover" 
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Wir helfen kleinen Unternehmen, ihre digitale Präsenz aufzubauen und zu optimieren, 
              um in der digitalen Welt erfolgreich zu sein.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Preise
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/services#website-creation" className="text-gray-400 hover:text-white transition-colors">
                  Website-Erstellung
                </Link>
              </li>
              <li>
                <Link to="/services#social-media" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services#comprehensive-packages" className="text-gray-400 hover:text-white transition-colors">
                  Komplettpakete
                </Link>
              </li>
              <li>
                <Link to="/services#support-consulting" className="text-gray-400 hover:text-white transition-colors">
                  Beratung & Support
                </Link>
              </li>
              <li>
                <Link to="/services#custom-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Individuelle Lösungen
                </Link>
              </li>
              <li>
                <Link to="/services#documents" className="text-gray-400 hover:text-white transition-colors">
                  Dokumente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-brand-400 flex-shrink-0" />
                <span className="text-gray-400">
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-400 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-400 hover:text-white transition-colors">
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-400 flex-shrink-0" />
                <a href="mailto:info@web-attack.de" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  info@web-attack.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
              &copy; {currentYear} Web-Attack. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link to="/terms" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">
                AGB
              </Link>
              <Link to="/imprint" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
