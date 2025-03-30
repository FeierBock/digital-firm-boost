
import ServiceCard from '@/components/ServiceCard';
import { Monitor, PenTool, Briefcase } from 'lucide-react';

const WebsiteServices = () => {
  return (
    <>
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
    </>
  );
};

export default WebsiteServices;
