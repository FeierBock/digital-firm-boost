
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import CtaSection from '@/components/CtaSection';
import ServiceSection from '@/components/services/ServiceSection';
import HeroSection from '@/components/services/HeroSection';
import WebsiteServices from '@/components/services/WebsiteServices';
import SocialMediaServices from '@/components/services/SocialMediaServices';
import ComprehensivePackages from '@/components/services/ComprehensivePackages';
import SupportConsulting from '@/components/services/SupportConsulting';
import CustomSolutions from '@/components/services/CustomSolutions';
import Documents from '@/components/services/Documents';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Delay scrolling slightly to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Website Creation Section */}
      <ServiceSection 
        id="website-creation"
        title="Website-Erstellung"
        subtitle="Professionelle, responsive Websites, die Ihr Unternehmen perfekt repräsentieren."
        backgroundClass="bg-white"
      >
        <WebsiteServices />
      </ServiceSection>

      {/* Social Media Section */}
      <ServiceSection 
        id="social-media"
        title="Social Media Management"
        subtitle="Professionelle Betreuung Ihrer Social Media Kanäle für mehr Reichweite und Engagement."
        backgroundClass="bg-gray-50"
      >
        <SocialMediaServices />
      </ServiceSection>

      {/* Comprehensive Packages Section */}
      <ServiceSection 
        id="comprehensive-packages"
        title="Komplettpakete"
        subtitle="Unsere All-in-One Lösungen für Ihre gesamte digitale Präsenz."
        backgroundClass="bg-white"
      >
        <ComprehensivePackages />
      </ServiceSection>

      {/* Support & Consulting Section */}
      <ServiceSection 
        id="support-consulting"
        title="Beratung & Support"
        subtitle="Professionelle Unterstützung für Ihre digitalen Herausforderungen."
        backgroundClass="bg-gray-50"
      >
        <SupportConsulting />
      </ServiceSection>

      {/* Custom Solutions Section */}
      <div id="custom-solutions">
        <CustomSolutions />
      </div>

      {/* Documents Section */}
      <Documents />

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
