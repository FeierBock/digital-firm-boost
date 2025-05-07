
import { SectionTitle } from '@/components/ui/section-title';
import { FileText } from 'lucide-react';

const Documents = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50" id="documents">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Dokumente & Verträge"
          subtitle="Transparenz und Klarheit in unserer Zusammenarbeit."
          className="mb-8 md:mb-12 lg:mb-16"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
            <div className="mb-3 sm:mb-4">
              <FileText size={20} className="text-brand-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Leistungsbeschreibungen</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Detaillierte Beschreibungen unserer Leistungen und Pakete, damit Sie genau wissen, was Sie erhalten.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
            <div className="mb-3 sm:mb-4">
              <FileText size={20} className="text-brand-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Musterverträge</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Einsicht in unsere Musterverträge, transparent und fair gestaltet.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
            <div className="mb-3 sm:mb-4">
              <FileText size={20} className="text-brand-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Datenschutzerklärung</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Informationen darüber, wie wir mit Ihren Daten umgehen und diese schützen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
