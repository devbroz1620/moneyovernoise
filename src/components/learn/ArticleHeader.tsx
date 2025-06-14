
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface ArticleHeaderProps {
  category: string;
  readingTime: string;
  title: string;
  description: string;
  isMobile: boolean;
}

export function ArticleHeader({
  category,
  readingTime,
  title,
  description,
  isMobile
}: ArticleHeaderProps) {
  return (
    <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
      <div className={`flex flex-wrap items-center gap-3 mb-4 ${isMobile ? 'gap-2 mb-3' : 'gap-3 mb-4'}`}>
        <Badge variant="outline" className={isMobile ? 'text-xs' : ''}>
          {category}
        </Badge>
        <div className={`flex items-center text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'}`}>
          <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
          {readingTime}
        </div>
      </div>
      <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl mb-4'}`}>
        {title}
      </h1>
      <p className={`text-muted-foreground mb-6 leading-relaxed ${isMobile ? 'text-base mb-4' : 'text-xl mb-6'}`}>
        {description}
      </p>
    </header>
  );
}
