
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

const CtaSection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = 'bg-brand-50'
}: CtaSectionProps) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild size="lg" variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
