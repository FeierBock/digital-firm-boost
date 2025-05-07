
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust based on header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Update URL without reloading the page
      window.history.pushState(null, "", `/services#${sectionId}`);
    }
  };
  
  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Unsere Leistungen</h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Wir bieten maßgeschneiderte digitale Lösungen für kleine Unternehmen, 
            um ihre Online-Präsenz zu stärken und Geschäftsprozesse zu optimieren.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => scrollToSection('website-creation')}
              className="px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
            >
              Website-Erstellung
            </button>
            <button 
              onClick={() => scrollToSection('social-media')}
              className="px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
            >
              Social Media
            </button>
            <button 
              onClick={() => scrollToSection('comprehensive-packages')}
              className="px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
            >
              Komplettpakete
            </button>
            <button 
              onClick={() => scrollToSection('support-consulting')}
              className="px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
            >
              Beratung & Support
            </button>
            <button 
              onClick={() => scrollToSection('custom-solutions')}
              className="px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
            >
              Individuelle Lösungen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
