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
                  <img alt="Digital Marketing Dashboard" src="/lovable-uploads/bbbe5d0e-9cf3-4527-b406-995f12382aca.png" className="w-full h-auto object-contain" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Das sagen unsere Kunden" subtitle="Erfahren Sie, wie wir kleinen Unternehmen geholfen haben, ihre Online-Präsenz zu verbessern." centered className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard quote="Dank DigitalFirmBoost haben wir endlich eine professionelle Website, die unsere Dienstleistungen perfekt präsentiert. Der gesamte Prozess war unkompliziert und das Ergebnis hat unsere Erwartungen übertroffen." author="Lisa Schmitt" role="Geschäftsführerin" company="Blumen Schmitt" rating={5} />

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