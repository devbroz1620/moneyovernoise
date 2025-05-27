
import { useEffect } from 'react';
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

  // Mock articles for demonstration
  const articles = [
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

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-purple-100 p-4 w-16 h-16 flex items-center justify-center">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
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
        <div className="grid gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <Card key={article.id} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${
              index % 2 === 0 ? 'border-l-purple-500' : 'border-l-blue-500'
            } hover:border-l-primary`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200 text-purple-700">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm gap-4">
                    <span>{article.publishedAt}</span>
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
                
                <div className="inline-flex items-center text-primary font-medium hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Brain className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">More Stories Coming Soon</h3>
          <p className="text-muted-foreground">
            We're crafting more psychological insights to help you make better money decisions.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Psychology;
