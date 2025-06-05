
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';
import Comments from '@/components/shared/Comments';

const PsychologyArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const articles: Record<string, any> = {
    'overspend-emotions': {
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
    'illusion-of-more': {
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
    }
  };
  
  if (!slug || !articles[slug]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ArrowLeft className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  const article = articles[slug];

  return (
    <MainLayout>
      <div className={`container ${isMobile ? 'py-4' : 'py-8'}`}>
        <Button variant="ghost" asChild className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mind Over Money
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className={`flex flex-wrap items-center gap-3 mb-4 ${isMobile ? 'gap-2 mb-3' : 'gap-3 mb-4'}`}>
              <Badge variant="outline" className={isMobile ? 'text-xs' : ''}>
                {article.category}
              </Badge>
              <div className={`flex items-center text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'}`}>
                <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                {article.readingTime}
              </div>
            </div>
            
            <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl mb-4'}`}>
              {article.title}
            </h1>
            
            <p className={`text-muted-foreground mb-6 leading-relaxed ${isMobile ? 'text-base mb-4' : 'text-xl mb-6'}`}>
              {article.description}
            </p>
          </header>

          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            {article.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Link>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
                  Found this helpful?
                </span>
                <ShareButton 
                  title={article.title}
                  url={`${window.location.origin}/psychology/${slug}`}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </footer>

          <Comments articleId={slug} />
        </article>
      </div>
    </MainLayout>
  );
};

export default PsychologyArticle;
