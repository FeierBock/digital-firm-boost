
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
import ServicesNavigation from '@/components/services/ServicesNavigation';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the '#' symbol
      const targetId = location.hash.slice(1);
      
      // Find the element with the corresponding ID
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Add a small delay to ensure the page has fully loaded
        setTimeout(() => {
          const yOffset = -80; // Adjust this value based on your header height
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Navigation */}
      <ServicesNavigation />

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
      <div id="documents">
        <Documents />
      </div>

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

