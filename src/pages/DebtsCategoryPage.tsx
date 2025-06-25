import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/ui/Loader";

const getCategoryColor = (category: string) => {
  const normalizedCategory = category.replace(/_/g, ' ');
  switch (normalizedCategory) {
    case 'Government Securities':
      return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30 dark:text-green-400';
    case 'Corporate Debt':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400';
    case 'Debt Mutual Funds':
      return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/20 dark:border-purple-500/30 dark:text-purple-400';
    case 'Other Fixed Income Products':
      return 'bg-orange-500/10 text-orange-600 border-orange-500/20 dark:bg-orange-500/20 dark:border-orange-500/30 dark:text-orange-400';
    case 'Tax Advantaged Debt Instruments':
      return 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:bg-indigo-500/20 dark:border-indigo-500/30 dark:text-indigo-400';
    case 'Debt Market Basics':
      return 'bg-teal-500/10 text-teal-600 border-teal-500/20 dark:bg-teal-500/20 dark:border-teal-500/30 dark:text-teal-400';
    default:
      return 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30 dark:text-primary';
  }
};

export default function DebtsCategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryDescription, setCategoryDescription] = useState<string>("");
  const displayName = categoryName?.replace(/_/g, ' ') || 'Category';

  useEffect(() => {
    if (!categoryName) return;

    fetch(`https://notion-server-delta.vercel.app/api/debts/category/${categoryName}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        const publishedArticles = (data || []).filter((article: any) => article.published);
        setArticles(publishedArticles);
        // Try to get the description from the first article in the category
        if (publishedArticles.length > 0 && publishedArticles[0].categoryDescription) {
          setCategoryDescription(publishedArticles[0].categoryDescription);
        } else if (publishedArticles.length > 0 && publishedArticles[0].description) {
          setCategoryDescription(publishedArticles[0].description);
        } else {
          setCategoryDescription("");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(`Failed to fetch articles for category ${categoryName}:`, error);
        // Fallback to fetching all and filtering
        fetch(`https://notion-server-delta.vercel.app/api/debts`)
          .then(res => res.json())
          .then(data => {
            const filtered = data.filter((d: any) => d.category.replace(/ /g, '_') === categoryName && d.published);
            setArticles(filtered);
            if (filtered.length > 0 && filtered[0].categoryDescription) {
              setCategoryDescription(filtered[0].categoryDescription);
            } else if (filtered.length > 0 && filtered[0].description) {
              setCategoryDescription(filtered[0].description);
            } else {
              setCategoryDescription("");
            }
          })
          .finally(() => setLoading(false));
      });
  }, [categoryName]);

  return (
    <MainLayout>
      <section className="container py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <button
              onClick={() => navigate('/debts')}
              className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              &larr; Back to Categories
            </button>
            <h1 className="text-4xl font-bold mb-2">{displayName}</h1>
            {categoryDescription && (
              <p className="text-muted-foreground mb-4">{categoryDescription}</p>
            )}
            <p className="text-muted-foreground">Browse all published articles in this category.</p>
          </header>

          {loading ? (
            <Loader text="Loading articles..." />
          ) : articles.length > 0 ? (
            <div className="flex flex-col gap-8">
              {articles.map((article) => (
                <Link to={`/debts/posts/${article.id}`} key={article.id} className="block">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/30 hover:border-l-primary h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                         <Badge variant="outline" className={`text-xs ${getCategoryColor(article.category)}`}>
                           {article.category}
                         </Badge>
                         <div className="flex items-center text-muted-foreground text-sm">
                           <Clock className="h-3 w-3 mr-1" />
                           <span>{article.readingTime || '5 min'}</span>
                         </div>
                       </div>
                      <CardTitle className="group-hover:text-primary transition-colors leading-tight text-foreground text-2xl mb-3">
                        {article.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {article.description && (
                         <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                           {article.description}
                         </p>
                       )}
                       <div className="inline-flex items-center text-primary font-medium hover:underline">
                         <span>Read Article</span>
                         <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform h-4 w-4" />
                       </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-card rounded-lg border">
              <p className="text-muted-foreground">No published articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
} 