
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, User } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';

const Learn = () => {
  const articles = Object.values(learnArticles);
  const isMobile = useIsMobile();

  return (
    <MainLayout>
      <PageHeader
        title="Learn ETF Investing"
        description="Master the fundamentals of ETF investing with our comprehensive guides and insights."
      />
      
      <section className="container py-8 md:py-12">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Content Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on creating comprehensive ETF learning resources for you.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Back to Home
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className={`${isMobile ? 'p-4 pb-2' : 'p-6 pb-4'} flex-shrink-0`}>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readingTime}
                    </div>
                  </div>
                  
                  <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'} mb-3 group-hover:text-primary transition-colors line-clamp-2`}>
                    {article.title}
                  </CardTitle>
                  
                  <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'} leading-relaxed mb-4 line-clamp-3 flex-grow`}>
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{article.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className={`${isMobile ? 'p-4 pt-0' : 'p-6 pt-0'} mt-auto`}>
                  <Link 
                    to={`/learn/etfs/${article.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline w-full justify-between group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Learn;
