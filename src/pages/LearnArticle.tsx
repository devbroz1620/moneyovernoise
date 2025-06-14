import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';

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
          <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className={`flex flex-wrap items-center gap-3 mb-4 ${isMobile ? 'gap-2 mb-3' : 'gap-3 mb-4'}`}>
              <Badge variant="outline" className={isMobile ? 'text-xs' : ''}>
                {article.category}
              </Badge>
              <div className={`flex items-center text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'}`}>
                <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                {article.readingTime}
              </div>
            </div>
            
            <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl mb-4'}`}>
              {article.title}
            </h1>
            
            <p className={`text-muted-foreground mb-6 leading-relaxed ${isMobile ? 'text-base mb-4' : 'text-xl mb-6'}`}>
              {article.description}
            </p>
          </header>

          {/* Footer Navigation */}
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
                  title={article.title}
                  url={`${window.location.origin}/learn/etfs/${article.slug}`}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </footer>

          {/* Content */}
          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            <style>{`
              .prose {
                line-height: 1.8;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
              }
              
              .prose h2 {
                margin-top: 2.5em;
                margin-bottom: 1em;
                font-size: ${isMobile ? '1.5em' : '1.75em'};
                font-weight: 700;
                line-height: 1.3;
                color: hsl(var(--foreground));
              }
              
              .prose h3 {
                margin-top: 2em;
                margin-bottom: 0.75em;
                font-size: ${isMobile ? '1.25em' : '1.5em'};
                font-weight: 600;
                line-height: 1.4;
                color: hsl(var(--foreground));
              }
              
              .prose p {
                margin-bottom: 1.75em;
                line-height: 1.8;
                font-size: ${isMobile ? '16px' : '18px'};
                color: hsl(var(--foreground));
              }
              
              .prose ul, .prose ol {
                margin-bottom: 1.75em;
                padding-left: 1.5em;
              }
              
              .prose li {
                margin-bottom: 0.75em;
                line-height: 1.7;
                font-size: ${isMobile ? '16px' : '18px'};
                position: relative;
                color: hsl(var(--foreground));
              }
              
              .prose ul li {
                list-style: none;
                padding-left: 1.5em;
              }
              
              .prose ul li:before {
                content: "•";
                color: hsl(var(--primary));
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 1.2em;
                line-height: 1.4;
              }
              
              .prose ol li {
                padding-left: 0.5em;
              }
              
              .prose strong {
                font-weight: 600;
                color: hsl(var(--foreground));
              }
              
              .prose blockquote {
                margin: 2.5em 0;
                padding: 1.5em;
                background: hsl(var(--muted));
                border-left: 4px solid hsl(var(--primary));
                border-radius: 0 8px 8px 0;
                font-style: italic;
              }
              
              .prose blockquote p {
                color: hsl(var(--muted-foreground));
              }
              
              .prose table {
                width: 100%;
                border-collapse: collapse;
                margin: 2em 0;
                font-size: ${isMobile ? '14px' : '16px'};
                overflow-x: auto;
                display: block;
                white-space: nowrap;
              }
              
              @media (min-width: 768px) {
                .prose table {
                  display: table;
                  white-space: normal;
                }
              }
              
              .prose th, .prose td {
                padding: ${isMobile ? '8px 6px' : '12px 16px'};
                text-align: left;
                border-bottom: 1px solid hsl(var(--border));
              }
              
              .prose th {
                font-weight: 600;
                background: hsl(var(--muted));
                font-size: ${isMobile ? '13px' : '15px'};
              }
              
              .prose td {
                font-size: ${isMobile ? '13px' : '15px'};
              }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Comments section now BELOW navigation/footer */}
          {/* If there is a Comments component normally rendered here, it would be below */}
          {/* Example: <Comments articleId={article.slug} /> */}
        </article>
      </div>
    </MainLayout>
  );
};

export default LearnArticle;
