
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardContent className="p-6 flex flex-col h-full">
        {rating > 0 && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < rating ? '#FFB400' : 'none'}
                className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        
        <blockquote className="text-gray-700 mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-3 border border-gray-200">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              {author.split(' ').map(name => name[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-800">{author}</p>
            <p className="text-sm text-gray-500">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
