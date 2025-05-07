
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

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
  
  const serviceCategories = [
    { id: 'website-creation', label: 'Website-Erstellung' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'comprehensive-packages', label: 'Komplettpakete' },
    { id: 'support-consulting', label: 'Beratung & Support' },
    { id: 'custom-solutions', label: 'Individuelle Lösungen' }
  ];
  
  return (
    <section className="pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-r from-brand-50 to-accent2-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Unsere Leistungen</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Wir bieten maßgeschneiderte digitale Lösungen für kleine Unternehmen, 
            um ihre Online-Präsenz zu stärken und Geschäftsprozesse zu optimieren.
          </p>
          
          {!isMobile && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {serviceCategories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 transition-colors"
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
