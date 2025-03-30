
import ServiceCard from '@/components/ServiceCard';
import { Users, Smartphone, Globe } from 'lucide-react';

const SocialMediaServices = () => {
  return (
    <>
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
    </>
  );
};

export default SocialMediaServices;
