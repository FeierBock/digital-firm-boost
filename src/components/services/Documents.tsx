
import { SectionTitle } from '@/components/ui/section-title';
import { FileText } from 'lucide-react';

const Documents = () => {
  return (
    <section className="py-20 bg-gray-50" id="documents">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Dokumente & Verträge"
          subtitle="Transparenz und Klarheit in unserer Zusammenarbeit."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <FileText size={24} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Leistungsbeschreibungen</h3>
            <p className="text-gray-600 mb-4">
              Detaillierte Beschreibungen unserer Leistungen und Pakete, damit Sie genau wissen, was Sie erhalten.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <FileText size={24} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Musterverträge</h3>
            <p className="text-gray-600 mb-4">
              Einsicht in unsere Musterverträge, transparent und fair gestaltet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <FileText size={24} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Datenschutzerklärung</h3>
            <p className="text-gray-600 mb-4">
              Informationen darüber, wie wir mit Ihren Daten umgehen und diese schützen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
