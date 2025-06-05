
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Clock, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Comments from '@/components/shared/Comments';

const Psychology = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated articles with the new ones
  const articles = [
    {
      id: 'overspend-emotions',
      title: 'Why We Overspend When We\'re Happy (and Sad)',
      description: 'Understanding how our emotions drive spending decisions and learning to build strategies that work with our feelings, not against them.',
      readingTime: '6 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 20, 2024',
      content: `Money is often thought of as a simple equation: earn more, spend less, save the difference. But anyone who's tried to stick to a budget knows it's rarely that straightforward. The truth is, our spending habits are deeply tied to our emotions — sometimes in ways we don't even realize.

Take a moment to think about the last time you bought something you didn't really need. Was it because you were celebrating a success? Or maybe you were feeling down, stressed, or bored? Chances are, your mood played a bigger role than your logic.

I once spoke to a friend who had just landed a new job. To celebrate, she splurged on an expensive dinner and a new gadget. A few weeks later, after a tough breakup, she found herself ordering comfort food and online shopping late into the night. The purchases weren't about the items themselves — they were about how she was feeling.

This emotional spending is a universal human behavior. When we're happy, we reward ourselves. When we're sad, we seek comfort. When we're anxious, we try to regain control. Money becomes a tool to manage feelings, not just a means to buy things.

Here's the catch: most budgeting advice focuses on numbers and ignores emotions. But if you want to change your spending habits, you have to understand your emotional triggers. Instead of just tracking expenses, try tracking moods. Notice when you're more likely to spend impulsively. Is it after a stressful day? Or when you're celebrating a milestone?

Once you recognize these patterns, you can build strategies that work with your emotions, not against them. Maybe it's setting aside a small "fun fund" for celebrations, or finding healthier ways to cope with stress, like exercise or talking to a friend.

The goal isn't to eliminate emotional spending — that's impossible. It's to become aware of it, so your money decisions serve you, not your fleeting feelings.

In the end, money is more than math. It's psychology, emotion, and habit wrapped into one. The better you understand that, the better control you'll have over your financial life.`
    },
    {
      id: 'illusion-of-more',
      title: 'The Illusion of "More"',
      description: 'Why the finish line for "enough" keeps moving and how real wealth comes from learning to say "this is enough."',
      readingTime: '8 min read',
      category: 'Money Mindset',
      publishedAt: 'Dec 18, 2024',
      content: `A few years ago, a friend of mine got a big promotion. His salary doubled overnight. He called me, thrilled, and said, "Now I'll finally be able to save, invest, and feel secure." Six months later, we met for dinner. He looked tired. "I'm still living paycheck to paycheck," he confessed. "I don't know where it all goes."

This isn't unusual. In fact, it's almost universal. The finish line for "enough" keeps moving. When you're earning ₹30,000 a month, you dream of ₹60,000. When you reach ₹60,000, you want ₹1 lakh. And so on. The more we have, the more we want. It's a treadmill that never stops.

Why does this happen? Part of it is biology. Our brains are wired to seek progress, not contentment. We get a hit of dopamine when we achieve something new, but it fades quickly. The car that once seemed luxurious becomes ordinary after a few months. The bigger house, the new phone, the fancy vacation—all become the new baseline.

There's also the world around us. Social media, advertising, and even well-meaning friends constantly remind us of what we don't have. We compare ourselves not to where we started, but to whoever is just ahead. The illusion is that "more" will finally bring peace of mind, happiness, or security.

But here's the truth: "More" is a moving target. If you don't define "enough" for yourself, the world will define it for you—and it will always be just out of reach.

I've met people with modest incomes who feel wealthy, and people with millions who feel poor. The difference isn't in the numbers. It's in the expectations.

Real wealth is learning to say, "This is enough." It's the ability to enjoy what you have, to find satisfaction in progress without letting it become a prison. It's the freedom to step off the treadmill and rest.

If you want to feel rich, don't focus on getting more. Focus on needing less. The illusion of "more" is powerful, but the reality of "enough" is where true contentment lives.`
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
        return 'border-l-purple-500';
      case 'Money Mindset':
        return 'border-l-blue-500';
      case 'Digital Psychology':
        return 'border-l-green-500';
      case 'Cognitive Biases':
        return 'border-l-red-500';
      case 'Money Habits':
        return 'border-l-orange-500';
      default:
        return 'border-l-primary';
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
            <Card key={article.id} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${getCategoryColor(article.category)} hover:border-l-primary`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30 dark:text-primary">
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

        {/* Comments Section for the first article as an example */}
        <div className="max-w-4xl mx-auto mt-12">
          <Comments articleId="overspend-emotions" />
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
