
import { SectionTitle } from '@/components/ui/section-title';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw, Server, Database, HardDrive } from 'lucide-react';

const CustomSolutions = () => {
  return (
    <section className="py-20 bg-white" id="custom-solutions">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Individuelle Lösungen"
          subtitle="Maßgeschneiderte digitale Lösungen für Ihre speziellen Anforderungen."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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

        {/* Neuer Server-Hardware-Bereich */}
        <div className="bg-gray-50 rounded-lg p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center mb-4">
                <Server className="text-brand-600 mr-3" size={28} />
                <h3 className="text-2xl font-semibold">Server & Hardware-Lösungen</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Wir bieten umfassende Unterstützung bei der Einrichtung, Konfiguration und Verwaltung von lokalen Servern und Hardware-Infrastrukturen für Ihr Unternehmen.
              </p>
              <p className="text-gray-600 mb-6">
                Unser Expertenteam hilft Ihnen bei der Planung, Beschaffung und Installation der optimalen Server-Hardware, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <HardDrive className="text-brand-500 mr-2" size={18} />
                    <h4 className="font-semibold">Hardware-Bereitstellung</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Beschaffung und Konfiguration von Servern, Speichersystemen und Netzwerkkomponenten nach Ihren Anforderungen.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <Database className="text-brand-500 mr-2" size={18} />
                    <h4 className="font-semibold">Docker-Management</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Installation, Konfiguration und Verwaltung von Docker-Containern für effiziente und skalierbare Anwendungsbereitstellung.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Unsere Server-Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Server-Beschaffung & Aufbau</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Betriebssystem-Installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Docker-Container-Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Backup-Lösungen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Sicherheitskonfiguration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 font-bold mr-2">✓</span>
                    <span>Laufender Support & Wartung</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6 bg-brand-600 hover:bg-brand-700">
                  <Link to="/contact">Beratungsgespräch vereinbaren</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
