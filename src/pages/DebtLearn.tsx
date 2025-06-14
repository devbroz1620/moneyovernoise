
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllDebtArticles } from '@/data/debtData';
import { PageHeader } from '@/components/shared/PageHeader';

const DebtLearn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = getAllDebtArticles();

  return (
    <MainLayout>
      <div className="container py-6 md:py-8">
        <PageHeader
          title="Learn About Debt Investing"
          description="Comprehensive guides to help you understand fixed-income investments in India"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Debt', href: '/debt' },
            { label: 'Learn' }
          ]}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readingTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  <Link to={`/debt/learn/${article.slug}`} onClick={() => window.scrollTo(0, 0)}>
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    to={`/debt/learn/${article.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                  >
                    Read More
                    <BookOpen className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DebtLearn;
