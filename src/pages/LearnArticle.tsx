
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { learnArticles } from '@/data/learnData';

const LearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !learnArticles[slug]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/learn">Browse All Articles</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const article = learnArticles[slug];

  return (
    <MainLayout>
      <div className="container py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/learn">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learn
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="outline">{article.category}</Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {article.readingTime}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </MainLayout>
  );
};

export default LearnArticle;
