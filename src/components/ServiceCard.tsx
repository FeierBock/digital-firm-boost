
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  price?: string;
  link: string;
  accentColor?: string;
  primary?: boolean;
  id?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  features,
  price,
  link,
  accentColor = 'bg-brand-500',
  primary = false,
  id,
}: ServiceCardProps) => {
  return (
    <Card 
      className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${primary ? 'border-brand-500 shadow-md relative overflow-hidden' : 'border-gray-200'}`}
      id={id}
    >
      {primary && (
        <div className="absolute top-0 right-0 bg-brand-500 text-white px-3 py-1 rounded-bl-lg font-medium text-xs sm:text-sm z-10">
          Empfohlen
        </div>
      )}
      <CardHeader className="pb-3 sm:pb-4">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${primary ? 'bg-brand-500' : 'bg-gray-100'}`}>
          <div className={`${primary ? 'text-white' : 'text-brand-500'}`}>
            {icon}
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 sm:pb-6 flex-grow">
        {price && (
          <div className="mb-4 sm:mb-6 flex items-end">
            <span className="text-xl sm:text-3xl font-bold">{price}</span>
            {price !== 'Auf Anfrage' && <span className="text-gray-500 ml-1 text-sm sm:text-base">/Monat</span>}
          </div>
        )}
        
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="mt-auto pt-3 sm:pt-4">
        <Button asChild className={`w-full ${primary ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
          <Link to={link}>
            {price ? 'Paket wählen' : 'Mehr erfahren'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
