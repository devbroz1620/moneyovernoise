
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ShareButton } from '@/components/shared/ShareButton';

interface ArticleFooterProps {
  slug: string;
  title: string;
  isMobile: boolean;
}

export function ArticleFooter({ slug, title, isMobile }: ArticleFooterProps) {
  const location = useLocation();
  
  // Determine the correct back link based on current path
  const getBackLink = () => {
    if (location.pathname.includes('/debt/learn/')) {
      return '/debt/learn';
    } else if (location.pathname.includes('/etfs/learn/')) {
      return '/etfs/learn';
    } else if (location.pathname.includes('/psychology/')) {
      return '/psychology';
    }
    return '/learn';
  };

  const getBackLabel = () => {
    if (location.pathname.includes('/debt/learn/')) {
      return 'More Debt Articles';
    } else if (location.pathname.includes('/etfs/learn/')) {
      return 'More ETF Articles';
    } else if (location.pathname.includes('/psychology/')) {
      return 'More Psychology Articles';
    }
    return 'More Articles';
  };

  const getShareUrl = () => {
    if (location.pathname.includes('/debt/learn/')) {
      return `${window.location.origin}/debt/learn/${slug}`;
    } else if (location.pathname.includes('/etfs/learn/')) {
      return `${window.location.origin}/etfs/learn/${slug}`;
    } else if (location.pathname.includes('/psychology/')) {
      return `${window.location.origin}/psychology/${slug}`;
    }
    return `${window.location.origin}/learn/${slug}`;
  };

  return (
    <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button asChild variant="outline">
          <Link to={getBackLink()} onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {getBackLabel()}
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
            Found this helpful?
          </span>
          <ShareButton
            title={title}
            url={getShareUrl()}
            isMobile={isMobile}
          />
        </div>
      </div>
    </footer>
  );
}
