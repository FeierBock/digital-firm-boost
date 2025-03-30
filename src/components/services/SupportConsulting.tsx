
import ServiceCard from '@/components/ServiceCard';
import { BarChart3, Database, Headphones } from 'lucide-react';

const SupportConsulting = () => {
  return (
    <>
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
    </>
  );
};

export default SupportConsulting;
