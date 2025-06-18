import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { getDebtArticleBySlug } from '@/data/debtData';
import { ArticleHeader } from '@/components/learn/ArticleHeader';
import { ArticleContent } from '@/components/learn/ArticleContent';
import { ArticleFooter } from '@/components/learn/ArticleFooter';
import { useIsMobile } from '@/hooks/use-mobile';
import SchemaMarkup from '@/components/shared/SchemaMarkup';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const DebtLearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const foundArticle = getDebtArticleBySlug(slug);
      setArticle(foundArticle);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!article) {
    return <Navigate to="/debt/learn" replace />;
  }

  return (
    <MainLayout>
      <SchemaMarkup
        type="article"
        data={{
          title: article.title,
          description: article.description,
          publishedDate: article.publishedDate,
          category: article.category
        }}
      />
      
      <article className="container py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Debt', href: '/debt' },
              { label: 'Learn', href: '/debt/learn' },
              { label: article.title }
            ]}
          />
          
          <ArticleHeader
            category={article.category}
            readingTime={article.readingTime}
            title={article.title}
            description={article.description}
            isMobile={isMobile}
          />
          
          {article.content ? (
            <ArticleContent 
              content={article.content} 
              isMobile={isMobile} 
            />
          ) : (
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <p className="text-muted-foreground text-lg">
                This article content is coming soon. We're working hard to bring you comprehensive guides on debt investing.
              </p>
            </div>
          )}
          
          <ArticleFooter
            slug={article.slug}
            title={article.title}
            isMobile={isMobile}
          />
        </div>
      </article>
    </MainLayout>
  );
};

export default DebtLearnArticle;
