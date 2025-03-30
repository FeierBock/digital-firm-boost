
import { AlertCircle } from 'lucide-react';

const CustomSolutions = () => {
  return (
    <section className="py-20 bg-white" id="custom-solutions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Individuelle Lösungen</h2>
            <p className="text-lg text-gray-600 mb-6">
              Jedes Unternehmen ist einzigartig. Deshalb bieten wir auch maßgeschneiderte Lösungen, 
              die genau auf Ihre spezifischen Anforderungen und Ziele zugeschnitten sind.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch, in dem wir Ihre 
              individuellen Bedürfnisse besprechen und ein passendes Angebot erstellen können.
            </p>
            <div className="flex items-center">
              <AlertCircle size={20} className="text-brand-600 mr-2" />
              <p className="text-gray-700 font-medium">
                Alle Pakete können individuell angepasst werden
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-r from-brand-50 to-accent2-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Unsere Vorgehensweise:</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    1
                  </div>
                  <span className="text-gray-700">Analyse Ihrer Anforderungen und Ziele</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    2
                  </div>
                  <span className="text-gray-700">Erstellung eines individuellen Konzepts</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    3
                  </div>
                  <span className="text-gray-700">Detailliertes Angebot mit transparenter Preisgestaltung</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    4
                  </div>
                  <span className="text-gray-700">Umsetzung mit regelmäßigen Feedback-Schleifen</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    5
                  </div>
                  <span className="text-gray-700">Fortlaufende Betreuung und Optimierung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
