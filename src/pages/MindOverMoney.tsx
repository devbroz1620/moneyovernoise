import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Clock, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Loader from "@/components/ui/Loader";

export default function MindOverMoney() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://notion-server-delta.vercel.app/api/mind-over-money")
      .then(res => res.json())
      .then(data => {
        const publishedArticles = (data || []).filter((article: any) => article.published);
        setArticles(publishedArticles);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
       {/* Hero Section */}
       <section className="bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-4 w-16 h-16 flex items-center justify-center">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 text-foreground ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Mind over Money
            </h1>
            <p className={`text-muted-foreground leading-relaxed ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Understand the psychology behind your financial decisions. Because the biggest obstacle to building wealth isn't math — it's mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container py-6 md:py-8">
      {loading ? (
          <Loader text="Loading articles..." />
        ) : (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <Link 
                key={article.id} 
                to={`/mind-over-money/${article.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="block"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/30 hover:border-l-primary h-full">
                  <CardHeader className={`${isMobile ? 'pb-3 px-4 pt-4' : 'pb-4'}`}>
                    {!isMobile && (
                      <div className="flex items-center justify-end text-muted-foreground text-sm mb-3">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{article.readingTime}</span>
                      </div>
                    )}
                    <CardTitle className={`group-hover:text-primary transition-colors leading-tight text-foreground ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                      {article.name}
                    </CardTitle>
                    {isMobile && (
                      <div className="flex items-center text-muted-foreground text-sm mt-2">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{article.readingTime}</span>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className={isMobile ? 'px-4 pb-4' : ''}>
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      {article.description}
                    </p>
                    
                    <div className="inline-flex items-center text-primary font-medium hover:underline">
                      <span className={isMobile ? 'text-sm' : ''}>Read Article</span>
                      <ArrowRight className={`ml-1 group-hover:translate-x-1 transition-transform ${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} />
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
} 