import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CtaSection from '@/components/CtaSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Users, BarChart3, PenTool, Smartphone, Database, CheckCircle } from 'lucide-react';
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-r from-brand-50 to-accent2-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Digitale Lösungen für <span className="gradient-text">kleine Unternehmen</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Wir helfen kleinen Unternehmen, ihre Online-Präsenz zu verbessern und digitale Prozesse zu optimieren, 
                um in der digitalen Welt erfolgreich zu sein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                  <Link to="/contact">Kostenlose Beratung</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                  <Link to="/services">Unsere Leistungen</Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-10 hidden lg:block">
              <div className="relative">
                <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden animate-float">
                  <img alt="Digital Marketing Dashboard" className="w-full h-auto object-cover" src="/lovable-uploads/9e063c47-ffde-45be-970d-7087adf5b127.png" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent2-400 rounded-lg opacity-60 blur-xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400 rounded-full opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Wir machen Ihr Unternehmen digital fit" subtitle="Unsere umfassenden digitalen Lösungen helfen kleinen Unternehmen, ihre Online-Präsenz zu stärken und Prozesse zu optimieren." centered className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <Globe className="text-brand-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website-Erstellung</h3>
              <p className="text-gray-600 mb-4">
                Professionelle, responsive Websites, die Ihr Unternehmen perfekt repräsentieren und Kunden überzeugen.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mb-4">
                <Users className="text-accent2-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
              <p className="text-gray-600 mb-4">
                Strategische Betreuung Ihrer Social-Media-Kanäle für mehr Reichweite und Kundenbindung.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <BarChart3 className="text-brand-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prozessoptimierung</h3>
              <p className="text-gray-600 mb-4">
                Analyse und Optimierung Ihrer Geschäftsprozesse für mehr Effizienz und bessere Ergebnisse.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mb-4">
                <Database className="text-accent2-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">DigitalInvest KMU Beratung</h3>
              <p className="text-gray-600 mb-4">
                Kompetente Beratung zur Förderung "DigitalInvest KMU" für die Digitalisierung Ihres Unternehmens.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <PenTool className="text-brand-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Management</h3>
              <p className="text-gray-600 mb-4">
                Kontinuierliche Betreuung und Aktualisierung Ihrer Website für optimale Performance und Aktualität.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center mb-4">
                <Smartphone className="text-accent2-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Zielgerichtete Kampagnen in sozialen Medien, die Ihre Marke stärken und neue Kunden gewinnen.
              </p>
              <Link to="/services" className="text-brand-600 font-medium inline-flex items-center hover:underline">
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Social Media Expertise" subtitle="Wir helfen Ihnen, in der digitalen Welt zu glänzen" centered className="mb-12" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">Erfolgreiche Social Media Strategien</h3>
              <p className="text-gray-600 mb-6">
                Mit unserer Expertise im Social Media Management helfen wir Ihnen, Ihre Zielgruppe effektiv zu erreichen und zu engagieren. Unsere maßgeschneiderten Strategien steigern Ihre Präsenz auf allen relevanten Plattformen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Professionelle Content-Erstellung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Zielgruppengerechte Ansprache</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Regelmäßige Performance-Analysen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Cross-Plattform Strategien</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-600 hover:bg-brand-700">
                <Link to="/services">Zu unseren Social Media Services</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src="/lovable-uploads/1cc61419-3eb9-4e82-976b-191a12f6032f.png" alt="Social Media Marketing" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/lovable-uploads/fbbbabd8-7479-4d48-9b4f-0f0e15279fe4.png" alt="Digitale Transformation" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent2-400 rounded-full opacity-20 blur-xl"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Digitale Transformation für Ihr Unternehmen</h3>
              <p className="text-gray-600 mb-6">
                Die Digitalisierung bietet enorme Chancen für Unternehmen jeder Größe. Mit unserer Unterstützung optimieren Sie Ihre Prozesse und nutzen digitale Tools, um effizienter und erfolgreicher zu arbeiten.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Automatisierung von Routineaufgaben</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Integration digitaler Werkzeuge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Optimierung der Kundeninteraktion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Datenbasierte Entscheidungsfindung</span>
                </li>
              </ul>
              <Button asChild className="bg-accent2-600 hover:bg-accent2-700">
                <Link to="/why-online-presence">Mehr über digitale Transformation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Unsere beliebtesten Pakete" subtitle="Wählen Sie das passende Paket für Ihr Unternehmen und starten Sie Ihre digitale Transformation." centered className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Website Basic" description="Eine professionelle Website für kleine Unternehmen, die online präsent sein möchten." icon={<Globe size={24} />} features={["Responsive Design", "Bis zu 5 Unterseiten", "Kontaktformular", "SEO-Grundoptimierung", "Social Media Integration"]} price="ab 99€" link="/services#website-basic" />

            <ServiceCard title="Social Media Starter" description="Professionelles Setup und Management Ihrer Social Media Kanäle." icon={<Users size={24} />} features={["Setup von 2 Plattformen", "Wöchentliche Posts", "Erstellung von Inhalten", "Community Management", "Monatliche Analyse"]} price="ab 199€" link="/services#social-media-starter" primary />

            <ServiceCard title="Digital Komplett" description="Das Rundum-sorglos-Paket für Ihre gesamte digitale Präsenz." icon={<CheckCircle size={24} />} features={["Website Basic inkl.", "Social Media Starter inkl.", "Content-Erstellung", "SEO-Optimierung", "Monatlicher Report"]} price="ab 299€" link="/services#digital-komplett" />
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <Link to="/pricing">Alle Pakete ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">Mobile Lösungen für moderne Unternehmen</h3>
              <p className="text-gray-600 mb-6">
                Die Zukunft ist mobil. Mit unseren maßgeschneiderten App-Lösungen erreichen Sie Ihre Kunden überall und jederzeit, während Sie gleichzeitig Ihre Geschäftsprozesse optimieren.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Native und Cross-Plattform Entwicklung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Benutzerfreundliche Interfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Integration mit bestehenden Systemen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Kontinuierliche Weiterentwicklung</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-600 hover:bg-brand-700">
                <Link to="/services">Unsere App-Entwicklungsdienste</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src="/lovable-uploads/0492f65e-9c47-45de-a210-387f11f30288.png" alt="Mobile App Development" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img alt="Datenanalyse und Visualisierung" className="rounded-lg shadow-lg w-full object-fill" src="/lovable-uploads/e2f2d587-36ed-4cb4-8e44-9889364cfe72.png" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent2-400 rounded-full opacity-20 blur-xl"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Datengetriebene Entscheidungen für Ihr Wachstum</h3>
              <p className="text-gray-600 mb-6">
                Nutzen Sie die Kraft Ihrer Daten. Unsere Analytics-Lösungen helfen Ihnen, wertvolle Erkenntnisse zu gewinnen und fundierte Geschäftsentscheidungen zu treffen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Umfassende Datenanalyse</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Übersichtliche Dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Kundenverhalten verstehen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent2-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Leistungskennzahlen im Blick</span>
                </li>
              </ul>
              <Button asChild className="bg-accent2-600 hover:bg-accent2-700">
                <Link to="/services">Mehr über Analytics-Lösungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Das sagen unsere Kunden" subtitle="Erfahren Sie, wie wir kleinen Unternehmen geholfen haben, ihre Online-Präsenz zu verbessern." centered className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard quote="Dank Web-Attack haben wir endlich eine professionelle Website, die unsere Dienstleistungen perfekt präsentiert. Der gesamte Prozess war unkompliziert und das Ergebnis hat unsere Erwartungen übertroffen." author="Lisa Schmitt" role="Geschäftsführerin" company="Blumen Schmitt" rating={5} />

            <TestimonialCard quote="Unsere Social-Media-Kanäle sind jetzt viel aktiver und wir erreichen deutlich mehr potenzielle Kunden. Das Team ist sehr professionell und kreativ. Absolut empfehlenswert!" author="Michael Weber" role="Inhaber" company="Weber Schreinerei" rating={5} />

            <TestimonialCard quote="Die Beratung zu DigitalInvest KMU war goldwert. Wir konnten finanzielle Unterstützung für unsere Digitalisierungsprojekte erhalten. Vielen Dank für die kompetente Begleitung!" author="Julia Fischer" role="Marketing Manager" company="Fischer & Söhne GmbH" rating={5} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection title="Bereit für den digitalen Erfolg?" description="Kontaktieren Sie uns für eine kostenlose Erstberatung und starten Sie Ihre digitale Transformation." primaryButtonText="Jetzt Kontakt aufnehmen" primaryButtonLink="/contact" secondaryButtonText="Mehr über unsere Leistungen" secondaryButtonLink="/services" backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50" />
    </Layout>;
};
export default Index;