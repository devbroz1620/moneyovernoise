
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';

const LearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
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
                <Link to="/learn">Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
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
          <Link to="/learn">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learn
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className={`aspect-video mb-6 overflow-hidden rounded-lg ${isMobile ? 'mb-4' : 'mb-6'}`}>
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
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
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className={isMobile ? 'text-xs' : ''}>
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className={isMobile ? 'h-8 px-3' : ''}>
                  <Bookmark className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                  Save
                </Button>
                <Button size="sm" variant="outline" className={isMobile ? 'h-8 px-3' : ''}>
                  <Share2 className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                  Share
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            <style jsx>{`
              .prose h2 {
                margin-top: 2em;
                margin-bottom: 1em;
                font-size: ${isMobile ? '1.5em' : '1.75em'};
                font-weight: 700;
                line-height: 1.3;
              }
              
              .prose h3 {
                margin-top: 1.5em;
                margin-bottom: 0.75em;
                font-size: ${isMobile ? '1.25em' : '1.5em'};
                font-weight: 600;
                line-height: 1.4;
              }
              
              .prose p {
                margin-bottom: 1.5em;
                line-height: 1.7;
                font-size: ${isMobile ? '16px' : '18px'};
              }
              
              .prose ul, .prose ol {
                margin-bottom: 1.5em;
              }
              
              .prose li {
                margin-bottom: 0.5em;
                line-height: 1.6;
                font-size: ${isMobile ? '16px' : '18px'};
              }
              
              .prose strong {
                font-weight: 600;
              }
              
              .prose blockquote {
                margin: 2em 0;
                padding: 1.5em;
                background: hsl(var(--muted));
                border-left: 4px solid hsl(var(--primary));
                border-radius: 0 8px 8px 0;
              }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Footer Navigation */}
          <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link to="/learn">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Link>
              </Button>
              
              <div className="flex items-center gap-2">
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
                  Found this helpful?
                </span>
                <Button size="sm" variant="outline">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Save for Later
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </MainLayout>
  );
};

export default LearnArticle;
