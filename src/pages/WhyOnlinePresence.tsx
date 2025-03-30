
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import CtaSection from '@/components/CtaSection';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  Globe, 
  Search, 
  BarChart3,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';

const WhyOnlinePresence = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Warum Online-Präsenz wichtig ist</h1>
            <p className="text-lg text-gray-600">
              In der heutigen digitalen Welt ist eine starke Online-Präsenz für kleine Unternehmen 
              nicht mehr optional, sondern entscheidend für den Geschäftserfolg.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Warum Ihre Online-Präsenz entscheidend ist"
            subtitle="Ein Blick auf die Zahlen und Fakten, die die Bedeutung einer starken Online-Präsenz unterstreichen."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Search className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">93%</h3>
                </div>
                <p className="text-gray-600">
                  93% aller Online-Erfahrungen beginnen mit einer Suchmaschine. Ohne Online-Präsenz verpassen Sie diese potenziellen Kunden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mr-4">
                    <TrendingUp className="text-accent2-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">70-80%</h3>
                </div>
                <p className="text-gray-600">
                  70-80% der Menschen recherchieren online über ein Unternehmen, bevor sie einen Kauf tätigen oder es besuchen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Users className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">78%</h3>
                </div>
                <p className="text-gray-600">
                  78% der lokalen mobilen Suchen führen zu Offline-Käufen, oft noch am selben Tag.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mr-4">
                    <Eye className="text-accent2-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">75%</h3>
                </div>
                <p className="text-gray-600">
                  75% der Verbraucher beurteilen die Glaubwürdigkeit eines Unternehmens anhand seiner Website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                    <Globe className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">4,9 Mrd.</h3>
                </div>
                <p className="text-gray-600">
                  4,9 Milliarden Menschen nutzen das Internet weltweit - das sind potenzielle Kunden für Ihr Unternehmen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mr-4">
                    <BarChart3 className="text-accent2-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">88%</h3>
                </div>
                <p className="text-gray-600">
                  88% der Verbraucher, die ein lokales Unternehmen auf einem Mobilgerät suchen, rufen an oder besuchen das Geschäft innerhalb von 24 Stunden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Vorteile einer starken Online-Präsenz"
            subtitle="Entdecken Sie, wie eine durchdachte digitale Strategie Ihr Unternehmen voranbringen kann."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <MapPin className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Lokale Sichtbarkeit steigern</h3>
                <p className="text-gray-600">
                  Werden Sie in Ihrer Region besser gefunden. Mit einer optimierten Online-Präsenz 
                  erscheinen Sie in lokalen Suchergebnissen und Google Maps, was mehr Kunden in Ihr 
                  Geschäft bringt.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <Clock className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Erreichbarkeit</h3>
                <p className="text-gray-600">
                  Ihre Website und Social-Media-Kanäle arbeiten rund um die Uhr für Sie. 
                  Kunden können Informationen abrufen, Anfragen stellen oder sogar Käufe tätigen - 
                  jederzeit und von überall.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <TrendingUp className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Wettbewerbsvorteil sichern</h3>
                <p className="text-gray-600">
                  Heben Sie sich von Mitbewerbern ab, die digital weniger präsent sind. 
                  Eine professionelle Online-Präsenz vermittelt Vertrauen und Kompetenz, 
                  was Kunden zu Ihnen statt zur Konkurrenz führt.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <BarChart3 className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Datenbasierte Entscheidungen</h3>
                <p className="text-gray-600">
                  Mit digitalen Tools erhalten Sie wertvolle Einblicke in das Kundenverhalten. 
                  Diese Daten helfen Ihnen, fundierte Geschäftsentscheidungen zu treffen und 
                  Ihre Marketing-Strategie zu optimieren.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Users className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Kundenbindung stärken</h3>
                <p className="text-gray-600">
                  Soziale Medien und regelmäßige Kommunikation über digitale Kanäle helfen Ihnen, 
                  langfristige Beziehungen zu Ihren Kunden aufzubauen und die Kundenbindung zu erhöhen.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <Award className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Markenbekanntheit aufbauen</h3>
                <p className="text-gray-600">
                  Online-Präsenz erhöht Ihre Reichweite und Sichtbarkeit. Durch konsistente 
                  Markenkommunikation über verschiedene digitale Kanäle steigern Sie Ihren 
                  Wiedererkennungswert und bauen Vertrauen auf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks of no online presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Risiken einer fehlenden Online-Präsenz"
            subtitle="Was passiert, wenn Ihr Unternehmen im digitalen Raum nicht ausreichend vertreten ist?"
            className="mb-16"
          />

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Shield className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Verlust potenzieller Kunden</h3>
                  <p className="text-gray-600">
                    Wenn Sie online nicht präsent sind, werden potenzielle Kunden Sie nicht finden und 
                    stattdessen bei Ihren Wettbewerbern kaufen, die online leichter zu finden sind.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Vertrauensverlust</h3>
                  <p className="text-gray-600">
                    Kunden erwarten heute, Informationen über ein Unternehmen online zu finden. 
                    Fehlt eine professionelle Online-Präsenz, kann dies das Vertrauen der Kunden beeinträchtigen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Verpasste Chancen</h3>
                  <p className="text-gray-600">
                    Digitale Plattformen bieten zahlreiche Möglichkeiten für Marketing, Kundenbindung 
                    und Umsatzsteigerung, die Ihnen ohne Online-Präsenz entgehen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Wettbewerbsnachteil</h3>
                  <p className="text-gray-600">
                    Während Ihre Konkurrenten ihre digitale Präsenz ausbauen und optimieren, 
                    fallen Sie ohne eigene Online-Strategie im Wettbewerb immer weiter zurück.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Die gute Nachricht:</h3>
            <p className="text-gray-700 text-center mb-6">
              Es ist nie zu spät, mit dem Aufbau Ihrer Online-Präsenz zu beginnen. Wir helfen Ihnen dabei!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
                <p className="text-gray-700 font-medium">Schnelle Implementierung</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
                <p className="text-gray-700 font-medium">Messbare Ergebnisse</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
                <p className="text-gray-700 font-medium">Kosteneffiziente Lösungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Importance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Warum Social Media immer wichtiger wird
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Social Media ist nicht nur ein Trend, sondern ein wesentlicher Bestandteil jeder erfolgreichen 
                digitalen Strategie. Hier sind einige Gründe, warum Social Media für Ihr Unternehmen 
                unverzichtbar ist:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Reichweite und Sichtbarkeit:</strong> Erreichen Sie Tausende potenzieller Kunden 
                    auf Plattformen, die sie täglich nutzen.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Direkter Kundenkontakt:</strong> Kommunizieren Sie direkt mit Ihrer Zielgruppe 
                    und erhalten Sie wertvolles Feedback.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Kosteneffizientes Marketing:</strong> Social Media ermöglicht gezieltes Marketing 
                    mit geringerem Budget als traditionelle Werbekanäle.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Markenidentität stärken:</strong> Präsentieren Sie Ihre Marke konsistent und 
                    bauen Sie eine loyale Community auf.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Wettbewerbsanalyse:</strong> Beobachten Sie Ihre Konkurrenz und bleiben Sie über 
                    Branchentrends informiert.
                  </span>
                </li>
              </ul>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Social Media Marketing" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent2-400 rounded-lg opacity-70 blur-xl"></div>
                <div className="absolute -top-5 -right-5 w-32 h-32 bg-brand-400 rounded-full opacity-70 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Invest KMU Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="DigitalInvest KMU - Förderung für Ihre Digitalisierung"
            subtitle="Nutzen Sie staatliche Fördermittel für die Digitalisierung Ihres Unternehmens."
            className="mb-16"
          />

          <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Was ist DigitalInvest KMU?</h3>
                <p className="text-gray-600 mb-6">
                  DigitalInvest KMU ist ein Förderprogramm, das kleine und mittlere Unternehmen bei der 
                  digitalen Transformation unterstützt. Es bietet finanzielle Zuschüsse für Investitionen 
                  in digitale Technologien und die Entwicklung digitaler Geschäftsmodelle.
                </p>
                <h4 className="text-xl font-semibold mb-3">Förderungswürdige Projekte:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Aufbau einer professionellen Webpräsenz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Implementierung von E-Commerce-Lösungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Digitalisierung interner Prozesse</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Einführung von CRM-Systemen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Digitales Marketing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Wie wir helfen können</h3>
                <p className="text-gray-600 mb-6">
                  Die Beantragung von Fördermitteln kann komplex sein. Wir unterstützen Sie bei 
                  jedem Schritt des Prozesses:
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Förderfähigkeitsprüfung</h4>
                    <p className="text-gray-600">
                      Wir prüfen, ob Ihr Unternehmen und Ihre geplanten Projekte förderfähig sind.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Antragsvorbereitung</h4>
                    <p className="text-gray-600">
                      Wir helfen Ihnen bei der Erstellung aller notwendigen Unterlagen und Nachweise.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Projektplanung</h4>
                    <p className="text-gray-600">
                      Wir entwickeln mit Ihnen einen detaillierten Plan für Ihr Digitalisierungsprojekt.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Umsetzungsbegleitung</h4>
                    <p className="text-gray-600">
                      Nach der Bewilligung unterstützen wir Sie bei der fachgerechten Umsetzung des Projekts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Starten Sie jetzt Ihre digitale Transformation"
        description="Lassen Sie sich kostenlos beraten und erfahren Sie, wie wir Ihr Unternehmen im digitalen Raum zum Erfolg führen können."
        primaryButtonText="Kostenlose Beratung anfragen"
        primaryButtonLink="/contact"
        secondaryButtonText="Unsere Leistungen entdecken"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50"
      />
    </Layout>
  );
};

export default WhyOnlinePresence;
