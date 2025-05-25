
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { learnArticles } from '@/data/learnData';

const Learn = () => {
  const articles = Object.values(learnArticles);

  return (
    <MainLayout>
      <PageHeader
        title="Learn ETF Investing"
        description="Master the fundamentals of ETF investing with our comprehensive guides and insights."
      />
      
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readingTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Link 
                  to={`/learn/etfs/${article.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Learn;
