
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/CtaSection';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Heart, Users, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'Max Mustermann',
    role: 'Gründer & CEO',
    bio: 'Max hat über 15 Jahre Erfahrung in der digitalen Branche und hat DigitalFirmBoost gegründet, um kleinen Unternehmen zu helfen, ihr volles Potenzial im digitalen Raum zu entfalten.',
    image: null,
  },
  {
    name: 'Sarah Wagner',
    role: 'Creative Director',
    bio: 'Sarah ist unsere Kreativexpertin mit Hintergrund in Grafikdesign und digitaler Strategie. Sie sorgt dafür, dass jedes Projekt nicht nur funktional, sondern auch ästhetisch ansprechend ist.',
    image: null,
  },
  {
    name: 'Michael Becker',
    role: 'Social Media Manager',
    bio: 'Michael ist ein Social-Media-Experte mit besonderem Gespür für Trends und Strategien, die echtes Engagement und Wachstum fördern.',
    image: null,
  },
  {
    name: 'Lisa Schmidt',
    role: 'Website-Entwicklerin',
    bio: 'Lisa entwickelt responsive und benutzerfreundliche Websites, die nicht nur gut aussehen, sondern auch hervorragend funktionieren und konvertieren.',
    image: null,
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
            <p className="text-lg text-gray-600">
              Wir helfen kleinen Unternehmen, ihre digitale Präsenz zu stärken 
              und in der digitalen Welt erfolgreich zu sein.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-gray-600 mb-6">
                DigitalFirmBoost wurde aus der Überzeugung heraus gegründet, dass auch kleine Unternehmen 
                von den Vorteilen der Digitalisierung profitieren sollten - ohne komplizierte Technik 
                oder übermäßig hohe Kosten.
              </p>
              <p className="text-gray-600 mb-6">
                Wir haben festgestellt, dass viele kleine Unternehmen Schwierigkeiten haben, 
                in der digitalen Welt Fuß zu fassen. Sei es eine veraltete Website, fehlende 
                Social-Media-Präsenz oder ineffiziente Geschäftsprozesse - wir sahen überall 
                Potenzial für Verbesserungen.
              </p>
              <p className="text-gray-600">
                Heute unterstützen wir Unternehmen aller Größen dabei, ihre Online-Präsenz zu 
                optimieren, digitale Prozesse zu verbessern und von staatlichen Fördermitteln 
                zu profitieren - alles mit dem Ziel, ihr Wachstum und ihren Erfolg zu fördern.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team Meeting"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-400 rounded-lg opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent2-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Unsere Mission & Werte"
            subtitle="Was uns antreibt und wie wir arbeiten"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-6">
                    <Target className="text-brand-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Unsere Mission</h3>
                  <p className="text-gray-600 text-center">
                    Wir möchten kleinen Unternehmen helfen, in der digitalen Welt erfolgreich zu sein, 
                    indem wir zugängliche, effektive und maßgeschneiderte digitale Lösungen anbieten, 
                    die ihr Wachstum fördern.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent2-100 flex items-center justify-center mb-6">
                    <Lightbulb className="text-accent2-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Unsere Vision</h3>
                  <p className="text-gray-600 text-center">
                    Eine Welt, in der jedes kleine Unternehmen die digitalen Werkzeuge und Strategien 
                    nutzen kann, um sein volles Potenzial zu entfalten und nachhaltig zu wachsen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-6">
                    <Heart className="text-brand-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Unsere Werte</h3>
                  <p className="text-gray-600 text-center">
                    Unsere Arbeit basiert auf Transparenz, Ehrlichkeit, Qualität und einem tiefen Verständnis 
                    für die individuellen Bedürfnisse unserer Kunden. Wir gehen stets die Extra-Meile.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Unsere Kernwerte"
            subtitle="Diese Prinzipien leiten unsere tägliche Arbeit"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <CheckCircle className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Kundenorientierung</h3>
                <p className="text-gray-600">
                  Wir stellen die Bedürfnisse und Ziele unserer Kunden in den Mittelpunkt all unseres Handelns. 
                  Jedes Projekt beginnt mit aktivem Zuhören und einem tiefen Verständnis für die individuellen Herausforderungen.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <CheckCircle className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Qualität</h3>
                <p className="text-gray-600">
                  Wir setzen höchste Standards für unsere Arbeit und streben stets danach, diese zu übertreffen. 
                  Jedes Detail wird sorgfältig beachtet, um erstklassige Ergebnisse zu liefern.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <CheckCircle className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Transparenz</h3>
                <p className="text-gray-600">
                  Wir kommunizieren offen und ehrlich. Unsere Kunden verstehen genau, was wir tun, warum wir es tun 
                  und welchen Wert es für ihr Unternehmen schafft.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <CheckCircle className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Kontinuierliche Verbesserung</h3>
                <p className="text-gray-600">
                  Wir bleiben nie stehen, sondern entwickeln uns ständig weiter. Durch fortlaufendes Lernen 
                  und Anpassen bleiben wir an der Spitze der digitalen Entwicklung.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <CheckCircle className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Nachhaltigkeit</h3>
                <p className="text-gray-600">
                  Wir denken langfristig und streben nach nachhaltigen Lösungen, die unserem Planeten 
                  und den Menschen, die auf ihm leben, zugutekommen.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent2-100 flex items-center justify-center">
                  <CheckCircle className="text-accent2-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
                <p className="text-gray-600">
                  Wir glauben an die Kraft der Zusammenarbeit. Durch die Kombination unserer verschiedenen 
                  Fähigkeiten und Perspektiven schaffen wir außergewöhnliche Ergebnisse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Unser Team"
            subtitle="Die Experten hinter DigitalFirmBoost"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200 card-hover h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={member.image || undefined} alt={member.name} />
                    <AvatarFallback className="bg-brand-100 text-brand-700 text-2xl">
                      {member.name.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-brand-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 flex-grow">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Warum uns wählen?</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                      <Award className="text-brand-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expertise und Erfahrung</h3>
                    <p className="text-gray-600">
                      Unser Team verfügt über umfangreiche Erfahrung in der digitalen Branche und bringt dieses 
                      Know-how in jedes Projekt ein.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent2-100 flex items-center justify-center">
                      <Users className="text-accent2-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Kundenorientierter Ansatz</h3>
                    <p className="text-gray-600">
                      Wir verstehen, dass jedes Unternehmen einzigartig ist, und entwickeln maßgeschneiderte 
                      Lösungen, die Ihren individuellen Anforderungen entsprechen.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                      <Target className="text-brand-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ergebnisorientierte Lösungen</h3>
                    <p className="text-gray-600">
                      Unsere Strategien und Lösungen sind darauf ausgerichtet, messbare Ergebnisse zu liefern, 
                      die zum Wachstum Ihres Unternehmens beitragen.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent2-100 flex items-center justify-center">
                      <Heart className="text-accent2-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Langfristige Partnerschaften</h3>
                    <p className="text-gray-600">
                      Wir sehen uns als langfristigen Partner für Ihr Unternehmen, nicht nur als Dienstleister. 
                      Ihr Erfolg ist unser Erfolg.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-brand-600 hover:bg-brand-700">
                  <Link to="/contact">Mit uns arbeiten</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                  alt="Team Collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-400 rounded-lg opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent2-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Bereit, mit uns zusammenzuarbeiten?"
        description="Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihr Unternehmen digital voranbringen können."
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonLink="/contact"
        secondaryButtonText="Unsere Leistungen"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50"
      />
    </Layout>
  );
};

export default About;
