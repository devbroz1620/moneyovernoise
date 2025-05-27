
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';

const Learn = () => {
  const articles = Object.values(learnArticles);
  const isMobile = useIsMobile();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleArticleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Learn ETF Investing
            </h1>
            <p className={`text-muted-foreground leading-relaxed ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Master the fundamentals of ETF investing with our comprehensive guides and insights. 
              Build wealth through evidence-backed strategies designed for Indian investors.
            </p>
          </div>
        </div>
      </section>
      
      <section className="container py-6 md:py-8">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Content Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on creating comprehensive ETF learning resources for you.
              </p>
              <Link 
                to="/"
                onClick={() => window.scrollTo(0, 0)}
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
              <Link 
                key={article.id} 
                to={`/learn/etfs/${article.slug}`} 
                className="block"
                onClick={handleArticleClick}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className={`${isMobile ? 'p-4' : 'p-6'} flex-grow`}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          article.category === 'Beginner' ? 'border-green-500 text-green-700 bg-green-50' :
                          article.category === 'Intermediate' ? 'border-blue-500 text-blue-700 bg-blue-50' :
                          'border-purple-500 text-purple-700 bg-purple-50'
                        }`}
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readingTime}
                      </div>
                    </div>
                    
                    <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'} mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight`}>
                      {article.title}
                    </CardTitle>
                    
                    <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'} leading-relaxed mb-4 line-clamp-3 flex-grow`}>
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
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
                    <div className="inline-flex items-center text-primary font-medium w-full justify-between group/link">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Learn;
