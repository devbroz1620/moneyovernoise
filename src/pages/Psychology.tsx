
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
      category: 'Behavioral Finance'
    },
    {
      id: 'illusion-of-more',
      title: 'The Illusion of More',
      description: 'Why the finish line for enough keeps moving and how real wealth comes from learning to say this is enough.',
      readingTime: '8 min read',
      category: 'Money Mindset'
    },
    {
      id: 'keeping-up-with-everyone',
      title: 'Keeping Up With… Everyone',
      description: 'There\'s a simple trick to feeling poor: compare yourself to someone richer. Because the only person worth keeping up with is the person you were yesterday.',
      readingTime: '5 min read',
      category: 'Money Mindset'
    },
    {
      id: 'why-we-fear-investing',
      title: 'Why We Fear Investing (Even When We Know We Should)',
      description: 'Investing sounds simple on paper. But in real life, it\'s terrifying. Understanding loss aversion and why the biggest risk isn\'t losing money.',
      readingTime: '6 min read',
      category: 'Behavioral Finance'
    },
    {
      id: 'power-of-doing-nothing',
      title: 'The Power of Doing Nothing',
      description: 'In a world that celebrates action, doing nothing feels wrong. But most wealth is built quietly, slowly, patiently.',
      readingTime: '4 min read',
      category: 'Investment Psychology'
    },
    {
      id: 'stories-we-tell-ourselves',
      title: 'The Stories We Tell Ourselves About Money',
      description: 'Money isn\'t just numbers. It\'s stories. From childhood, we absorb stories about money that shape how we think, feel, and act.',
      readingTime: '5 min read',
      category: 'Money Mindset'
    },
    {
      id: 'underestimate-small-expenses',
      title: 'Why We Underestimate Small Expenses',
      description: 'Small expenses are the silent killers of wealth. A ₹100 coffee every day is ₹3,000 a month. Don\'t underestimate the power of small.',
      readingTime: '5 min read',
      category: 'Money Habits'
    },
    {
      id: 'myth-of-perfect-plan',
      title: 'The Myth of the Perfect Plan',
      description: 'We all want a perfect plan. But life doesn\'t work that way. The best financial plan is one that can change.',
      readingTime: '5 min read',
      category: 'Financial Planning'
    },
    {
      id: 'time-warps-money-decisions',
      title: 'How Time Warps Our Money Decisions',
      description: 'Time is the most powerful force in building wealth. Yet, it\'s also the hardest concept for most people to grasp when it comes to money.',
      readingTime: '7 min read',
      category: 'Behavioral Finance'
    },
    {
      id: 'talking-about-money-is-hard',
      title: 'Why Talking About Money Is So Hard',
      description: 'Money is one of the most important parts of our lives. Yet, it\'s also one of the hardest topics to talk about openly.',
      readingTime: '6 min read',
      category: 'Money Psychology'
    },
    {
      id: 'writing-for-yourself',
      title: 'Why Writing for Yourself Makes You a Better Investor',
      description: 'When you write for yourself, you clarify your own thinking. The same is true for money - invest for yourself, not someone else.',
      readingTime: '6 min read',
      category: 'Investment Psychology'
    },
    {
      id: 'role-of-stories',
      title: 'The Role of Stories in Shaping Financial Behavior',
      description: 'We like to think our financial decisions are logical. But stories shape our money choices far more than math ever could.',
      readingTime: '6 min read',
      category: 'Money Psychology'
    },
    {
      id: 'simple-financial-advice',
      title: 'Why Simple Financial Advice Works Best',
      description: 'The world of finance is full of complexity. But the best financial advice is often surprisingly simple.',
      readingTime: '5 min read',
      category: 'Financial Wisdom'
    },
    {
      id: 'danger-of-overconfidence',
      title: 'The Danger of Overconfidence in Finance',
      description: 'Confidence is powerful. But too much confidence—overconfidence—can be dangerous, especially when it comes to money.',
      readingTime: '5 min read',
      category: 'Behavioral Finance'
    },
    {
      id: 'history-helps-avoid-mistakes',
      title: 'How History Can Help You Avoid Financial Mistakes',
      description: 'History doesn\'t repeat itself exactly, but it often rhymes. Studying past market cycles helps you understand human behavior.',
      readingTime: '5 min read',
      category: 'Financial History'
    },
    {
      id: 'emotional-activation',
      title: 'The Power of Emotional Activation in Money Decisions',
      description: 'Money decisions often feel like a battle between logic and emotion. Understanding emotional activation can help you pause before acting.',
      readingTime: '5 min read',
      category: 'Behavioral Finance'
    },
    {
      id: 'patience-beats-timing',
      title: 'Why Patience Beats Timing in Investing',
      description: 'Everyone wants to buy low and sell high. But timing the market is incredibly difficult—even for professionals.',
      readingTime: '5 min read',
      category: 'Investment Psychology'
    },
    {
      id: 'inner-scorecard',
      title: 'How to Build an "Inner Scorecard" for Financial Success',
      description: 'Most people measure financial success by external markers. But building an inner scorecard means defining success on your own terms.',
      readingTime: '6 min read',
      category: 'Money Mindset'
    },
    {
      id: 'importance-of-sample-size',
      title: 'The Importance of Sample Size in Financial Decisions',
      description: 'When making financial decisions, it\'s tempting to rely on recent experiences. But small sample sizes can mislead us.',
      readingTime: '5 min read',
      category: 'Decision Making'
    },
    {
      id: 'unique-financial-journey',
      title: 'Why Everyone\'s Financial Journey Is Unique',
      description: 'No two financial journeys are the same. Your financial story is shaped by your experiences, values, and circumstances.',
      readingTime: '5 min read',
      category: 'Money Mindset'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Behavioral Finance':
        return 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30 dark:text-primary';
      case 'Money Mindset':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400';
      case 'Investment Psychology':
        return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30 dark:text-green-400';
      case 'Money Psychology':
        return 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/20 dark:border-red-500/30 dark:text-red-400';
      case 'Money Habits':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20 dark:bg-orange-500/20 dark:border-orange-500/30 dark:text-orange-400';
      case 'Financial Planning':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/20 dark:border-purple-500/30 dark:text-purple-400';
      case 'Financial Wisdom':
        return 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:bg-indigo-500/20 dark:border-indigo-500/30 dark:text-indigo-400';
      case 'Financial History':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:bg-yellow-500/20 dark:border-yellow-500/30 dark:text-yellow-400';
      case 'Decision Making':
        return 'bg-pink-500/10 text-pink-600 border-pink-500/20 dark:bg-pink-500/20 dark:border-pink-500/30 dark:text-pink-400';
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
                    {!isMobile && (
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{article.readingTime}</span>
                      </div>
                    )}
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
