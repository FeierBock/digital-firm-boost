
import { useState } from 'react';
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import CtaSection from '@/components/CtaSection';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, HelpCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const webPackages = [
    {
      name: 'Basic',
      description: 'Ideale Einstiegslösung für kleine Unternehmen',
      monthlyPrice: 99,
      yearlyPrice: 89,
      features: [
        'Responsive Design',
        'Bis zu 5 Unterseiten',
        'Kontaktformular',
        'SEO-Grundoptimierung',
        'Social Media Integration',
        'Hosting für 12 Monate'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Umfassende Lösung für wachsende Unternehmen',
      monthlyPrice: 249,
      yearlyPrice: 219,
      features: [
        'Individuelles Design',
        'Bis zu 10 Unterseiten',
        'Blog-Funktion',
        'Erweiterte SEO-Optimierung',
        'Cookie-Banner & Datenschutz',
        'Google Analytics Integration',
        'Hosting für 12 Monate',
        'Content-Management-System'
      ],
      popular: true
    },
    {
      name: 'E-Commerce',
      description: 'Komplette Shop-Lösung für Online-Verkäufe',
      monthlyPrice: 499,
      yearlyPrice: 449,
      features: [
        'Alle Features von Professional',
        'Produktkatalog',
        'Warenkorb & Checkout',
        'Zahlungsanbindung',
        'Versandoptionen',
        'Produkt-Verwaltungssystem',
        'Kundenkonto-Funktion',
        'Rabatt- und Gutscheinsystem'
      ],
      popular: false
    }
  ];

  const socialPackages = [
    {
      name: 'Starter',
      description: 'Einstieg in die Social Media Welt',
      monthlyPrice: 199,
      yearlyPrice: 179,
      features: [
        'Setup von 2 Plattformen',
        '4 Posts pro Monat',
        'Erstellung von Inhalten',
        'Community Management',
        'Monatliche Analyse'
      ],
      popular: false
    },
    {
      name: 'Growth',
      description: 'Steigern Sie Ihre Reichweite und Engagement',
      monthlyPrice: 349,
      yearlyPrice: 309,
      features: [
        'Setup von 3 Plattformen',
        '8 Posts pro Monat',
        'Erstellung von Inhalten',
        'Community Management',
        'Wettbewerbsanalyse',
        'Monatlicher Report',
        '1 Werbekampagne pro Monat'
      ],
      popular: true
    },
    {
      name: 'Premium',
      description: 'Maximale Social Media Präsenz',
      monthlyPrice: 599,
      yearlyPrice: 539,
      features: [
        'Setup von 4 Plattformen',
        '12 Posts pro Monat',
        'Premium Contentstrategie',
        'Proaktives Community Management',
        'Influencer-Recherche',
        'Wöchentliche Reports',
        '2 Werbekampagnen pro Monat',
        'Social Media Advertising'
      ],
      popular: false
    }
  ];

  const completePackages = [
    {
      name: 'Digital Starter',
      description: 'Komplettlösung für Einsteiger',
      monthlyPrice: 249,
      yearlyPrice: 219,
      features: [
        'Website Basic',
        'Social Media Starter',
        'Einrichtung Google Business Profil',
        'SEO-Grundlagen',
        'Monatlicher Report'
      ],
      popular: false
    },
    {
      name: 'Digital Professional',
      description: 'Umfassende digitale Präsenz',
      monthlyPrice: 449,
      yearlyPrice: 399,
      features: [
        'Website Professional',
        'Social Media Growth',
        'Google Business Management',
        'Erweiterte SEO-Optimierung',
        'Content-Strategie',
        'Wöchentliche Reports',
        'E-Mail-Marketing-Setup'
      ],
      popular: true
    },
    {
      name: 'Digital Premium',
      description: 'Maximaler digitaler Erfolg',
      monthlyPrice: 849,
      yearlyPrice: 769,
      features: [
        'E-Commerce Website',
        'Social Media Premium',
        'Vollständiges Google Management',
        'Premium SEO-Optimierung',
        'Werbekampagnen (Google & Social)',
        'Wöchentliche Reports & Meetings',
        'Persönlicher Account Manager',
        'Online-Reputation-Management'
      ],
      popular: false
    }
  ];

  const supportPackages = [
    {
      name: 'Basic Support',
      description: 'Grundlegende Unterstützung',
      monthlyPrice: 79,
      yearlyPrice: 69,
      features: [
        'Technischer Support',
        'Content-Updates (2 pro Monat)',
        'Sicherheits-Updates',
        'Monitoring',
        'E-Mail-Support'
      ],
      popular: false
    },
    {
      name: 'Standard Support',
      description: 'Umfassendere Unterstützung',
      monthlyPrice: 149,
      yearlyPrice: 129,
      features: [
        'Technischer Support',
        'Content-Updates (5 pro Monat)',
        'Sicherheits-Updates',
        'Performance-Optimierung',
        'Regelmäßige Backups',
        'E-Mail & Telefon-Support',
        'Reaktionszeit: 24 Stunden'
      ],
      popular: true
    },
    {
      name: 'Premium Support',
      description: 'Rundum-Sorglos-Paket',
      monthlyPrice: 249,
      yearlyPrice: 219,
      features: [
        'Technischer Support',
        'Unbegrenzte Content-Updates',
        'Sicherheits-Updates',
        'Performance-Optimierung',
        'Tägliche Backups',
        'Notfall-Wiederherstellung',
        'Prioritäts-Support',
        'Reaktionszeit: 4 Stunden',
        'Monatliches Beratungsgespräch'
      ],
      popular: false
    }
  ];

  const consultingPackages = [
    {
      name: 'Prozessanalyse',
      description: 'Analyse Ihrer digitalen Prozesse',
      price: 'ab 499€',
      features: [
        'Ist-Analyse',
        'Prozessdokumentation',
        'Schwachstellenanalyse',
        'Optimierungsvorschläge',
        'Abschlussbericht'
      ],
      popular: false
    },
    {
      name: 'DigitalInvest KMU',
      description: 'Fördermittelberatung',
      price: 'ab 799€',
      features: [
        'Förderfähigkeitsprüfung',
        'Antragsunterstützung',
        'Projektplanung',
        'Dokumentation',
        'Abwicklungsbegleitung'
      ],
      popular: true
    },
    {
      name: 'Digitale Strategie',
      description: 'Ganzheitliche Digitalstrategie',
      price: 'ab 1.299€',
      features: [
        'Markt- und Wettbewerbsanalyse',
        'Kundenzielgruppenanalyse',
        'Digitale Roadmap',
        'Handlungsempfehlungen',
        'Implementierungsplanung',
        'Follow-up Beratung'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Preise</h1>
            <p className="text-lg text-gray-600">
              Transparente und faire Preise für unsere Dienstleistungen. 
              Wählen Sie das passende Paket für Ihre Bedürfnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg mb-8">
              <button
                className={`px-4 py-2 rounded-md ${
                  billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monatlich
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  billingCycle === 'yearly' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Jährlich <span className="text-green-500 text-xs ml-1">10% Rabatt</span>
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Bei jährlicher Zahlung sparen Sie 10%. Alle Preise zzgl. MwSt.
            </p>
          </div>

          <Tabs defaultValue="web" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-gray-100">
                <TabsTrigger value="web" className="data-[state=active]:bg-white">Website-Erstellung</TabsTrigger>
                <TabsTrigger value="social" className="data-[state=active]:bg-white">Social Media</TabsTrigger>
                <TabsTrigger value="complete" className="data-[state=active]:bg-white">Komplettpakete</TabsTrigger>
                <TabsTrigger value="support" className="data-[state=active]:bg-white">Support</TabsTrigger>
                <TabsTrigger value="consulting" className="data-[state=active]:bg-white">Beratung</TabsTrigger>
              </TabsList>
            </div>

            {/* Website Creation Packages */}
            <TabsContent value="web">
              <SectionTitle
                title="Website-Erstellung"
                subtitle="Professionelle Websites für Ihr Unternehmen, von einfachen Präsenzen bis hin zu kompletten Online-Shops."
                centered
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {webPackages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-brand-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Empfohlen
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{pkg.name}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={18} className="text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-64">
                                Einmalige Kosten für die Website-Erstellung. 
                                Optional: Support & Wartung als monatliches Paket buchbar.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">
                          {billingCycle === 'monthly' 
                            ? `${pkg.monthlyPrice}€` 
                            : `${pkg.yearlyPrice}€`}
                        </span>
                        <span className="text-gray-500 ml-1">einmalig</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link to="/contact">Angebot anfordern</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Social Media Packages */}
            <TabsContent value="social">
              <SectionTitle
                title="Social Media Management"
                subtitle="Professionelle Betreuung Ihrer Social Media Kanäle für mehr Reichweite und Kundenbindung."
                centered
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {socialPackages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-brand-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Empfohlen
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">
                          {billingCycle === 'monthly' 
                            ? `${pkg.monthlyPrice}€` 
                            : `${pkg.yearlyPrice}€`}
                        </span>
                        <span className="text-gray-500 ml-1">/Monat</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link to="/contact">Angebot anfordern</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Complete Packages */}
            <TabsContent value="complete">
              <SectionTitle
                title="Komplettpakete"
                subtitle="All-in-One Lösungen für Ihre gesamte digitale Präsenz von der Website bis zum Social Media Management."
                centered
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {completePackages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-brand-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Empfohlen
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">
                          {billingCycle === 'monthly' 
                            ? `${pkg.monthlyPrice}€` 
                            : `${pkg.yearlyPrice}€`}
                        </span>
                        <span className="text-gray-500 ml-1">/Monat</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link to="/contact">Angebot anfordern</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Support Packages */}
            <TabsContent value="support">
              <SectionTitle
                title="Support & Wartung"
                subtitle="Kontinuierliche Betreuung und Aktualisierung Ihrer Website und digitalen Präsenz."
                centered
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportPackages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-brand-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Empfohlen
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">
                          {billingCycle === 'monthly' 
                            ? `${pkg.monthlyPrice}€` 
                            : `${pkg.yearlyPrice}€`}
                        </span>
                        <span className="text-gray-500 ml-1">/Monat</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link to="/contact">Angebot anfordern</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Consulting Packages */}
            <TabsContent value="consulting">
              <SectionTitle
                title="Beratung & Consulting"
                subtitle="Professionelle Beratung für die Optimierung Ihrer digitalen Prozesse und Förderungsanträge."
                centered
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {consultingPackages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-brand-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                        Empfohlen
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{pkg.name}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle size={18} className="text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-64">
                                Der endgültige Preis hängt vom Umfang und der Komplexität des Projekts ab. 
                                Kontaktieren Sie uns für ein individuelles Angebot.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link to="/contact">Angebot anfordern</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Individuelle Lösungen</h2>
            <p className="text-lg text-gray-600 mb-6">
              Sie benötigen eine maßgeschneiderte Lösung, die nicht in unseren Standardpaketen enthalten ist? 
              Kein Problem! Wir erstellen gerne ein individuelles Angebot für Sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-brand-600 hover:bg-brand-700">
                <Link to="/contact">Individuelles Angebot anfordern</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Häufig gestellte Fragen"
            subtitle="Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Preisen und Leistungen."
            centered
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Gibt es versteckte Kosten?</h3>
                <p className="text-gray-600">
                  Nein, wir arbeiten mit transparenten Preisen. Alle Kosten werden vor Projektbeginn 
                  klar kommuniziert. Bei individuellen Projekten erstellen wir ein detailliertes Angebot, 
                  das alle Leistungen und Kosten umfasst.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wie lange dauert die Umsetzung?</h3>
                <p className="text-gray-600">
                  Die Umsetzungszeit hängt vom Umfang des Projekts ab. Eine einfache Website kann in 
                  2-3 Wochen fertiggestellt sein, komplexere Projekte benötigen entsprechend mehr Zeit. 
                  Den genauen Zeitplan besprechen wir im Rahmen der Projektplanung.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Kann ich mein Paket später upgraden?</h3>
                <p className="text-gray-600">
                  Ja, Sie können jederzeit zu einem höherwertigen Paket wechseln oder zusätzliche 
                  Services buchen. Wir wachsen gerne mit Ihren Anforderungen mit.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wie erfolgt die Abrechnung?</h3>
                <p className="text-gray-600">
                  Bei einmaligen Projekten wie der Website-Erstellung erfolgt die Zahlung in Raten: 
                  Eine Anzahlung zu Beginn, eine Zwischenzahlung und eine Restzahlung nach Fertigstellung. 
                  Bei laufenden Services wie Social Media Management erfolgt die Abrechnung monatlich oder 
                  jährlich im Voraus.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Gibt es eine Mindestvertragslaufzeit?</h3>
                <p className="text-gray-600">
                  Bei laufenden Services beträgt die Mindestvertragslaufzeit in der Regel 3 Monate, 
                  um messbare Ergebnisse erzielen zu können. Danach können Sie monatlich kündigen, 
                  sofern nicht anders vereinbart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Bereit, Ihre digitale Reise zu beginnen?"
        description="Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot."
        primaryButtonText="Jetzt Kontakt aufnehmen"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50"
      />
    </Layout>
  );
};

export default Pricing;
