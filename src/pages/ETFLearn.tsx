import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Loader from '@/components/ui/Loader';

const ETFLearn = () => {
  const isMobile = useIsMobile();
  const [etfArticles, setEtfArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://notion-server-delta.vercel.app/api/etfs')
      .then(res => res.json())
      .then(data => {
        const publishedArticles = (data || []).filter((article: any) => article.published);
        setEtfArticles(publishedArticles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
        <div className="grid gap-8 max-w-4xl mx-auto">
          {loading ? (
            <Loader text="Loading articles..." />
          ) : (
            [...etfArticles].reverse().map((article, index) => (
              <Link 
                key={article.id} 
                to={`/etfs/posts/${article.id}`} 
                className="block"
                onClick={handleArticleClick}
              >
                <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${
                  index % 2 === 0 ? 'border-l-primary' : 'border-l-blue-500'
                } hover:border-l-primary`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      {article.tags && (
                        <Badge variant="outline" className="text-xs mr-2">
                          {article.tags}
                        </Badge>
                      )}
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readingTime || '5 min'}
                      </div>
                    </div>
                    
                    <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} mb-3 group-hover:text-primary transition-colors leading-tight`}>
                      {article.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed mb-4`}>
                      {article.description}
                    </p>
                    
                    <div className="inline-flex items-center text-primary font-medium hover:underline">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ETFLearn;
