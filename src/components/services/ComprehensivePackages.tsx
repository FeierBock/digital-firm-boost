
import ServiceCard from '@/components/ServiceCard';
import { CheckCircle } from 'lucide-react';

const ComprehensivePackages = () => {
  return (
    <>
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
    </>
  );
};

export default ComprehensivePackages;
