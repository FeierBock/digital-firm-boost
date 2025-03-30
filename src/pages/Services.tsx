
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import ServiceCard from '@/components/ServiceCard';
import CtaSection from '@/components/CtaSection';
import { 
  Globe, 
  Users, 
  BarChart3, 
  Database, 
  PenTool, 
  Smartphone, 
  CheckCircle, 
  Monitor, 
  Briefcase, 
  FileText,
  AlertCircle,
  Headphones
} from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
            <p className="text-lg text-gray-600">
              Wir bieten maßgeschneiderte digitale Lösungen für kleine Unternehmen, 
              um ihre Online-Präsenz zu stärken und Geschäftsprozesse zu optimieren.
            </p>
          </div>
        </div>
      </section>

      {/* Website Creation Section */}
      <section className="py-20 bg-white" id="website-creation">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Website-Erstellung"
            subtitle="Professionelle, responsive Websites, die Ihr Unternehmen perfekt repräsentieren."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Website Basic"
              description="Eine professionelle Website für kleine Unternehmen, die online präsent sein möchten."
              icon={<Monitor size={24} />}
              features={[
                "Responsive Design",
                "Bis zu 5 Unterseiten",
                "Kontaktformular",
                "SEO-Grundoptimierung",
                "Social Media Integration",
                "Hosting für 12 Monate"
              ]}
              price="ab 99€"
              link="/contact"
              accentColor="bg-brand-500"
              id="website-basic"
            />

            <ServiceCard
              title="Website Professional"
              description="Eine umfangreichere Website mit mehr Funktionen und individuellem Design."
              icon={<PenTool size={24} />}
              features={[
                "Individuelles Design",
                "Bis zu 10 Unterseiten",
                "Blog-Funktion",
                "Erweiterte SEO-Optimierung",
                "Cookie-Banner & Datenschutz",
                "Google Analytics Integration",
                "Hosting für 12 Monate"
              ]}
              price="ab 249€"
              link="/contact"
              primary
              id="website-professional"
            />

            <ServiceCard
              title="E-Commerce Website"
              description="Eine vollwertige Online-Shop-Lösung für den Verkauf Ihrer Produkte."
              icon={<Briefcase size={24} />}
              features={[
                "Alle Features von Professional",
                "Produktkatalog",
                "Warenkorb & Checkout",
                "Zahlungsanbindung",
                "Versandoptionen",
                "Produkt-Verwaltungssystem",
                "Hosting für 12 Monate"
              ]}
              price="ab 499€"
              link="/contact"
              id="ecommerce"
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50" id="social-media">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Social Media Management"
            subtitle="Professionelle Betreuung Ihrer Social Media Kanäle für mehr Reichweite und Engagement."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Social Media Starter"
              description="Ideal für Unternehmen, die in Social Media einsteigen möchten."
              icon={<Users size={24} />}
              features={[
                "Setup von 2 Plattformen",
                "4 Posts pro Monat",
                "Erstellung von Inhalten",
                "Community Management",
                "Monatliche Analyse"
              ]}
              price="ab 199€"
              link="/contact"
              id="social-media-starter"
            />

            <ServiceCard
              title="Social Media Growth"
              description="Umfassendere Lösung für Unternehmen, die ihre Reichweite ausbauen möchten."
              icon={<Smartphone size={24} />}
              features={[
                "Setup von 3 Plattformen",
                "8 Posts pro Monat",
                "Erstellung von Inhalten",
                "Community Management",
                "Wettbewerbsanalyse",
                "Monatlicher Report",
                "1 Werbekampagne pro Monat"
              ]}
              price="ab 349€"
              link="/contact"
              primary
              id="social-media-growth"
            />

            <ServiceCard
              title="Social Media Premium"
              description="Für Unternehmen, die maximale Social Media Präsenz anstreben."
              icon={<Globe size={24} />}
              features={[
                "Setup von 4 Plattformen",
                "12 Posts pro Monat",
                "Premium Contentstrategie",
                "Proaktives Community Management",
                "Influencer-Recherche",
                "Konkurrenzbeobachtung",
                "Wöchentliche Reports",
                "2 Werbekampagnen pro Monat"
              ]}
              price="ab 599€"
              link="/contact"
              id="social-media-premium"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Packages Section */}
      <section className="py-20 bg-white" id="comprehensive-packages">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Komplettpakete"
            subtitle="Unsere All-in-One Lösungen für Ihre gesamte digitale Präsenz."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Digital Starter"
              description="Das Einsteigerpaket für Ihre digitale Präsenz."
              icon={<CheckCircle size={24} />}
              features={[
                "Website Basic",
                "Social Media Starter",
                "Einrichtung Google Business Profil",
                "SEO-Grundlagen",
                "Monatlicher Report"
              ]}
              price="ab 249€"
              link="/contact"
              id="digital-starter"
            />

            <ServiceCard
              title="Digital Professional"
              description="Das umfassende Paket für eine professionelle digitale Präsenz."
              icon={<CheckCircle size={24} />}
              features={[
                "Website Professional",
                "Social Media Growth",
                "Google Business Management",
                "Erweiterte SEO-Optimierung",
                "Content-Strategie",
                "Wöchentliche Reports"
              ]}
              price="ab 449€"
              link="/contact"
              primary
              id="digital-professional"
            />

            <ServiceCard
              title="Digital Premium"
              description="Das Premium-Paket für maximalen digitalen Erfolg."
              icon={<CheckCircle size={24} />}
              features={[
                "E-Commerce Website",
                "Social Media Premium",
                "Vollständiges Google Management",
                "Premium SEO-Optimierung",
                "Werbekampagnen (Google & Social)",
                "Wöchentliche Reports & Meetings",
                "Persönlicher Account Manager"
              ]}
              price="ab 849€"
              link="/contact"
              id="digital-premium"
            />
          </div>
        </div>
      </section>

      {/* Support & Consulting Section */}
      <section className="py-20 bg-gray-50" id="support-consulting">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Beratung & Support"
            subtitle="Professionelle Unterstützung für Ihre digitalen Herausforderungen."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Prozessoptimierung"
              description="Analyse und Optimierung Ihrer digitalen Prozesse."
              icon={<BarChart3 size={24} />}
              features={[
                "Ist-Analyse",
                "Prozessdokumentation",
                "Schwachstellenanalyse",
                "Optimierungsvorschläge",
                "Implementierungsplanung"
              ]}
              price="Auf Anfrage"
              link="/contact"
              id="process-optimization"
            />

            <ServiceCard
              title="DigitalInvest KMU Beratung"
              description="Kompetente Beratung zur Förderung 'DigitalInvest KMU'."
              icon={<Database size={24} />}
              features={[
                "Förderfähigkeitsprüfung",
                "Antragsunterstützung",
                "Projektplanung",
                "Dokumentation",
                "Abwicklungsbegleitung"
              ]}
              price="Auf Anfrage"
              link="/contact"
              primary
              id="digitalinvest-consulting"
            />

            <ServiceCard
              title="Support Pakete"
              description="Kontinuierlicher Support für Ihre digitalen Lösungen."
              icon={<Headphones size={24} />}
              features={[
                "Technischer Support",
                "Content-Updates",
                "Sicherheits-Updates",
                "Performance-Optimierung",
                "Regelmäßige Backups",
                "Notfall-Wiederherstellung"
              ]}
              price="ab 79€"
              link="/contact"
              id="support-packages"
            />
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
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

      {/* Documents Section */}
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

      {/* CTA Section */}
      <CtaSection
        title="Bereit, Ihre digitale Präsenz zu verbessern?"
        description="Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihr Unternehmen digital voranbringen können."
        primaryButtonText="Jetzt Kontakt aufnehmen"
        primaryButtonLink="/contact"
        secondaryButtonText="Preise ansehen"
        secondaryButtonLink="/pricing"
        backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50"
      />
    </Layout>
  );
};

export default Services;
