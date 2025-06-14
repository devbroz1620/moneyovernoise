import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';
import { ArticleHeader } from '@/components/learn/ArticleHeader';
import { ArticleContent } from '@/components/learn/ArticleContent';
import { ArticleFooter } from '@/components/learn/ArticleFooter';

const LearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug || !learnArticles[slug]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ArrowLeft className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/learn" onClick={() => window.scrollTo(0, 0)}>Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  const article = learnArticles[slug];

  return (
    <MainLayout>
      <div className={`container ${isMobile ? 'py-4' : 'py-8'}`}>
        <Button variant="ghost" asChild className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          <Link to="/learn" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learn
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <ArticleHeader
            category={article.category}
            readingTime={article.readingTime}
            title={article.title}
            description={article.description}
            isMobile={isMobile}
          />

          {/* Footer Navigation and Share (moved above Comments) */}
          <ArticleFooter
            slug={article.slug}
            title={article.title}
            isMobile={isMobile}
          />

          {/* Content */}
          <ArticleContent content={article.content} isMobile={isMobile} />

          {/* Comments section now BELOW navigation/footer */}
          {/* Example: <Comments articleId={article.slug} /> */}
        </article>
      </div>
    </MainLayout>
  );
};

export default LearnArticle;
