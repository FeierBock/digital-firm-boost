
import { SectionTitle } from '@/components/ui/section-title';
import { Code, Database, BarChart3 } from 'lucide-react';

const CustomSolutions = () => {
  return (
    <section className="py-16 md:py-20 bg-white" id="custom-solutions">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Individuelle Lösungen"
          subtitle="Maßgeschneiderte digitale Lösungen für Ihre spezifischen Anforderungen."
          className="mb-12 md:mb-16"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-100 mb-4">
              <Code size={28} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Individuelle Programmierung</h3>
            <p className="text-gray-600">
              Von einfachen Plugins bis hin zu komplexen Webanwendungen - wir entwickeln die Software, die Sie für Ihr Unternehmen benötigen.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent2-100 mb-4">
              <Database size={28} className="text-accent2-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Datenbanklösungen</h3>
            <p className="text-gray-600">
              Effiziente Datenbankstrukturen und Verwaltungssysteme für Ihre Geschäftsdaten und Kundeninformationen.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-100 mb-4">
              <BarChart3 size={28} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytik und Reporting</h3>
            <p className="text-gray-600">
              Maßgeschneiderte Analyse-Tools und Dashboards, um Ihre Geschäftsdaten zu visualisieren und Erkenntnisse zu gewinnen.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Jedes Unternehmen ist einzigartig und hat besondere Anforderungen. Wir arbeiten eng mit Ihnen zusammen, um eine Lösung zu entwickeln, die genau zu Ihrem Geschäft passt.
          </p>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">Unser Entwicklungsprozess</h4>
            <ol className="space-y-4 text-left">
              <li className="flex">
                <span className="font-semibold text-brand-600 mr-2">1.</span>
                <span>Ausführliche Bedarfsanalyse und Anforderungsdefinition</span>
              </li>
              <li className="flex">
                <span className="font-semibold text-brand-600 mr-2">2.</span>
                <span>Konzeption und Prototyping</span>
              </li>
              <li className="flex">
                <span className="font-semibold text-brand-600 mr-2">3.</span>
                <span>Entwicklung nach agilen Methoden</span>
              </li>
              <li className="flex">
                <span className="font-semibold text-brand-600 mr-2">4.</span>
                <span>Umfassende Tests und Qualitätssicherung</span>
              </li>
              <li className="flex">
                <span className="font-semibold text-brand-600 mr-2">5.</span>
                <span>Implementierung, Schulung und Support</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
