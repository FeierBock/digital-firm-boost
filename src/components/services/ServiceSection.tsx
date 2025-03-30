
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
    <section className={`py-20 ${backgroundClass}`} id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
