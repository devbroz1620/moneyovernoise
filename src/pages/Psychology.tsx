
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Clock, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Psychology = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 'overspend-emotions',
      title: 'Why We Overspend When We Are Happy (and Sad)',
      description: 'Understanding how our emotions drive spending decisions and learning to build strategies that work with our feelings, not against them.',
      readingTime: '6 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 20, 2024'
    },
    {
      id: 'illusion-of-more',
      title: 'The Illusion of More',
      description: 'Why the finish line for enough keeps moving and how real wealth comes from learning to say this is enough.',
      readingTime: '8 min read',
      category: 'Money Mindset',
      publishedAt: 'Dec 18, 2024'
    },
    {
      id: 'fomo-investing',
      title: 'Why FOMO Makes You a Bad Investor',
      description: 'Understanding how fear of missing out destroys long-term wealth building and what you can do about it.',
      readingTime: '8 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 15, 2024'
    },
    {
      id: 'social-media-money',
      title: 'How Social Media is Ruining Your Money Decisions',
      description: 'The hidden psychology behind why Instagram makes you spend more and invest worse.',
      readingTime: '6 min read',
      category: 'Digital Psychology',
      publishedAt: 'Dec 10, 2024'
    },
    {
      id: 'loss-aversion',
      title: 'Why We Hate Losing Money More Than We Love Making It',
      description: 'Exploring loss aversion and how this cognitive bias affects every financial decision you make.',
      readingTime: '10 min read',
      category: 'Cognitive Biases',
      publishedAt: 'Dec 5, 2024'
    },
    {
      id: 'money-habits',
      title: 'The 5 Money Habits That Actually Matter',
      description: 'Forget budgeting apps. These psychological principles will transform your relationship with money.',
      readingTime: '7 min read',
      category: 'Money Habits',
      publishedAt: 'Nov 28, 2024'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Behavioral Finance':
        return 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30 dark:text-primary';
      case 'Money Mindset':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400';
      case 'Digital Psychology':
        return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30 dark:text-green-400';
      case 'Cognitive Biases':
        return 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/20 dark:border-red-500/30 dark:text-red-400';
      case 'Money Habits':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20 dark:bg-orange-500/20 dark:border-orange-500/30 dark:text-orange-400';
      default:
        return 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30 dark:text-primary';
    }
  };

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
        <div className="grid gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/psychology/${article.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="block"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/30 hover:border-l-primary h-full">
                <CardHeader className={`${isMobile ? 'pb-3 px-4 pt-4' : 'pb-4'}`}>
                  {/* Mobile-optimized header layout */}
                  <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex items-center justify-between mb-3'}`}>
                    <div className={`${isMobile ? 'order-1' : ''}`}>
                      <Badge variant="outline" className={`text-xs ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <div className={`flex items-center text-muted-foreground text-sm gap-3 ${isMobile ? 'order-2 justify-between' : ''}`}>
                      <span className={isMobile ? 'text-xs' : ''}>{article.publishedAt}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className={isMobile ? 'text-xs' : ''}>{article.readingTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className={`group-hover:text-primary transition-colors leading-tight text-foreground ${isMobile ? 'text-lg mb-2 order-3' : 'text-2xl mb-3'}`}>
                    {article.title}
                  </CardTitle>
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

        {/* Coming Soon Notice */}
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Brain className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">More Stories Coming Soon</h3>
          <p className="text-muted-foreground">
            We're crafting more psychological insights to help you make better money decisions.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Psychology;
