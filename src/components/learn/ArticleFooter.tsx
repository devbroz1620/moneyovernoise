
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShareButton } from '@/components/shared/ShareButton';

interface ArticleFooterProps {
  slug: string;
  title: string;
  isMobile: boolean;
}

export function ArticleFooter({ slug, title, isMobile }: ArticleFooterProps) {
  return (
    <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button asChild variant="outline">
          <Link to="/learn" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            More Articles
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
            Found this helpful?
          </span>
          <ShareButton
            title={title}
            url={`${window.location.origin}/learn/etfs/${slug}`}
            isMobile={isMobile}
          />
        </div>
      </div>
    </footer>
  );
}
