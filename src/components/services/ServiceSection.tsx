
import { ReactNode } from 'react';
import { SectionTitle } from '@/components/ui/section-title';

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children: ReactNode;
}

const ServiceSection = ({ 
  id, 
  title, 
  subtitle, 
  backgroundClass = 'bg-white',
  children 
}: ServiceSectionProps) => {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${backgroundClass}`} id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="mb-8 md:mb-12 lg:mb-16"
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
