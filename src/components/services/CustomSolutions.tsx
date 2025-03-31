
import { SectionTitle } from '@/components/ui/section-title';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const CustomSolutions = () => {
  return (
    <section className="py-20 bg-white" id="custom-solutions">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Individuelle Lösungen"
          subtitle="Maßgeschneiderte digitale Lösungen für Ihre speziellen Anforderungen."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Jedes Unternehmen ist einzigartig</h3>
            <p className="text-gray-600 mb-6">
              Sie haben spezielle Anforderungen, die nicht mit unseren Standardpaketen abgedeckt werden? Kein Problem! Wir entwickeln gemeinsam mit Ihnen individuelle digitale Lösungen, die perfekt zu Ihren Geschäftszielen passen.
            </p>
            <p className="text-gray-600 mb-6">
              Unser erfahrenes Team analysiert Ihre Bedürfnisse und erarbeitet ein maßgeschneidertes Konzept. Von speziellen Website-Funktionen über individuelle Social-Media-Strategien bis hin zu komplexen digitalen Workflows - wir finden die passende Lösung.
            </p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-4 mx-auto animate-spin-slow">
                <RefreshCw className="text-brand-600" size={24} />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Individueller Prozess</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 text-xs font-semibold">1</span> Bedarfsanalyse</li>
                  <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 text-xs font-semibold">2</span> Konzeptentwicklung</li>
                  <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 text-xs font-semibold">3</span> Umsetzung</li>
                  <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 text-xs font-semibold">4</span> Testen & Optimieren</li>
                  <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 text-xs font-semibold">5</span> Übergabe & Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
