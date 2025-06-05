
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Learn = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample articles data - you can replace this with actual data
  const articles = [
    {
      id: 'what-are-etfs',
      slug: 'what-are-etfs',
      title: 'What are ETFs? A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of Exchange-Traded Funds, how they work, and why they\'re perfect for Indian investors starting their investment journey.',
      readingTime: '8 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Basics', 'Investment', 'Beginner']
    },
    {
      id: 'etf-vs-mutual-funds',
      slug: 'etf-vs-mutual-funds',
      title: 'ETFs vs Mutual Funds: Which is Better for You?',
      description: 'A detailed comparison between ETFs and mutual funds, covering costs, flexibility, tax efficiency, and which option suits different investor profiles.',
      readingTime: '10 min read',
      category: 'Intermediate',
      tags: ['ETFs', 'Mutual Funds', 'Comparison', 'Investment Strategy']
    },
    {
      id: 'building-etf-portfolio',
      slug: 'building-etf-portfolio',
      title: 'How to Build a Diversified ETF Portfolio',
      description: 'Step-by-step guide to creating a well-balanced ETF portfolio that matches your risk tolerance and investment goals.',
      readingTime: '12 min read',
      category: 'Intermediate',
      tags: ['Portfolio', 'Diversification', 'Asset Allocation', 'Strategy']
    }
  ];

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
          <div className="grid gap-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <Link 
                key={article.id} 
                to={`/learn/etfs/${article.slug}`} 
                className="block"
                onClick={handleArticleClick}
              >
                <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${
                  index % 2 === 0 ? 'border-l-primary' : 'border-l-blue-500'
                } hover:border-l-primary`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className={`text-xs ${
                        article.category === 'Beginner' ? 'bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30 dark:text-primary' :
                        article.category === 'Intermediate' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300' :
                        'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-300'
                      }`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm gap-4">
                        <span>{new Date().toLocaleDateString()}</span>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readingTime}
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} mb-3 group-hover:text-primary transition-colors leading-tight`}>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed mb-4`}>
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors dark:bg-secondary/30 dark:text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-secondary/50 dark:bg-secondary/30 dark:text-secondary-foreground">
                          +{article.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="inline-flex items-center text-primary font-medium hover:underline">
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
