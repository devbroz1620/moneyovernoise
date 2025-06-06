import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ETFLearn = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ETF articles data with all 14 articles
  const etfArticles = [
    {
      id: 'what-is-etf',
      slug: 'what-is-etf',
      title: 'What is an ETF',
      description: 'A beginner-friendly introduction to ETFs – what they are, how they work, and why they\'ve become so popular among Indian investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Basics', 'Investment', 'Beginner']
    },
    {
      id: 'etf-vs-mutual-fund',
      slug: 'etf-vs-mutual-fund',
      title: 'ETFs v/s Mutual Funds',
      description: 'Understand the key differences between ETFs and mutual funds, and why ETFs are emerging as a better choice for modern investors.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Mutual Funds', 'Comparison', 'Investment Strategy']
    },
    {
      id: 'types-of-etfs-india',
      slug: 'types-of-etfs-india',
      title: 'Types of ETFs in India: A Simple Guide',
      description: 'From equity to gold to international funds, explore the main types of ETFs available to Indian investors and what they offer.',
      readingTime: '7 min read',
      category: 'Beginner',
      tags: ['ETF Types', 'Equity ETFs', 'Gold ETFs', 'International ETFs']
    },
    {
      id: 'etf-popularity-india',
      slug: 'etf-popularity-india',
      title: 'Why Are ETFs Gaining Popularity in India?',
      description: 'Explore the key reasons behind the explosive growth of ETFs in India and why they\'re attracting both retail and institutional investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['ETF Growth', 'Indian Markets', 'Investment Trends', 'SEBI']
    },
    {
      id: 'how-to-choose-etf',
      slug: 'how-to-choose-etf',
      title: 'How to Choose the Right ETF',
      description: 'A practical guide to picking the right ETF using key metrics like tracking error, expense ratio, and liquidity.',
      readingTime: '8 min read',
      category: 'Beginner',
      tags: ['ETF Selection', 'Tracking Error', 'Expense Ratio', 'Liquidity']
    },
    {
      id: 'how-etfs-work-india',
      slug: 'how-etfs-work-india',
      title: 'What Makes an ETF Unique: How They\'re Created, Managed, and Traded',
      description: 'Ever wondered how ETFs actually function? Learn how ETFs are created, managed, and traded on exchanges – and what makes them different from mutual funds.',
      readingTime: '7 min read',
      category: 'Beginner',
      tags: ['ETF Mechanics', 'Creation', 'Trading', 'Market Makers']
    },
    {
      id: 'etf-liquidity-importance',
      slug: 'etf-liquidity-importance',
      title: 'Liquidity in ETFs: What It Means and Why It Matters',
      description: 'A practical guide to understanding ETF liquidity, how it affects your buy/sell experience, and what to check before investing.',
      readingTime: '6 min read',
      category: 'Intermediate',
      tags: ['Liquidity', 'Bid-Ask Spread', 'Trading', 'Market Depth']
    },
    {
      id: 'etf-nav-vs-market-price',
      slug: 'etf-nav-vs-market-price',
      title: 'ETF NAV vs Market Price: Why They\'re Different',
      description: 'ETFs don\'t always trade exactly at their NAV. Here\'s why that happens, how iNAV works, and what you should watch out for – especially with international ETFs.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['NAV', 'iNAV', 'Premiums', 'Discounts', 'Pricing']
    },
    {
      id: 'how-to-buy-etf-india',
      slug: 'how-to-buy-etf-india',
      title: 'How to Buy Your First ETF in India: Step-by-Step Guide for Beginners',
      description: 'A beginner-friendly walkthrough on opening a demat account, choosing a broker, and making your first ETF purchase.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETF Investing', 'Demat Account', 'DIY Investing', 'First Purchase']
    },
    {
      id: 'etf-costs-india',
      slug: 'etf-costs-india',
      title: 'Understanding ETF Costs: Expense Ratios, Brokerage, and Hidden Fees Explained',
      description: 'Breaking down all the costs associated with ETF investing in India — what they are, how they impact returns, and what to watch out for.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETF Costs', 'Expense Ratio', 'Investing Fees', 'Hidden Charges']
    },
    {
      id: 'top-etfs-for-beginners-india',
      slug: 'top-etfs-for-beginners-india',
      title: 'Top 10 ETFs Every Indian Beginner Should Know About',
      description: 'Discover 10 beginner-friendly ETFs in India with high liquidity, low expense ratios, and strong performance. A perfect starting point for new investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['Top ETFs', 'Beginner Investing', 'Popular ETFs', 'Diversification']
    },
    {
      id: 'dividend-etfs-vs-growth-etfs-india',
      slug: 'dividend-etfs-vs-growth-etfs-india',
      title: 'Dividend ETFs vs Growth ETFs: Which Strategy Suits Your Financial Goals?',
      description: 'Confused between dividend and growth ETFs? This guide helps Indian investors decide based on income needs, time horizon, and risk appetite.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['Dividend ETFs', 'Growth ETFs', 'Investing Strategy', 'Income Investing']
    },
    {
      id: 'smart-beta-vs-traditional-index-etfs',
      slug: 'smart-beta-vs-traditional-index-etfs',
      title: 'Smart Beta ETFs vs Traditional Index ETFs — Understanding Factor Investing',
      description: 'Learn the difference between Smart Beta and traditional index ETFs. Understand how factor investing works and how to use these ETFs in your portfolio.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['Smart Beta', 'Factor Investing', 'Low Volatility', 'Value', 'Momentum']
    },
    {
      id: 'gold-etfs-vs-physical-vs-mutual-funds',
      slug: 'gold-etfs-vs-physical-vs-mutual-funds',
      title: 'Gold ETFs vs Physical Gold vs Gold Mutual Funds — Complete Comparison',
      description: 'Confused between gold ETFs, physical gold, and gold mutual funds? Here\'s a simple comparison of all three options, covering costs, liquidity, and safety.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['Gold ETFs', 'Physical Gold', 'Gold Mutual Funds', 'Investment Comparison']
    }
  ];

  const handleArticleClick = () => {
    window.scrollTo(0, 0);
  };

  console.log('ETF Articles loaded:', etfArticles.length); // Debug log

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Learn ETF Investing
            </h1>
            <p className={`text-muted-foreground leading-relaxed ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Master the fundamentals of ETF investing with our comprehensive guides and insights. 
              Build wealth through evidence-backed strategies designed for Indian investors.
            </p>
          </div>
        </div>
      </section>
      
      <section className="container py-6 md:py-8">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {etfArticles.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/etfs/learn/${article.slug}`} 
              className="block"
              onClick={handleArticleClick}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${
                index % 2 === 0 ? 'border-l-primary' : 'border-l-blue-500'
              } hover:border-l-primary`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className={`text-xs ${
                      article.category === 'Beginner' ? 'bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30 dark:text-primary' :
                      article.category === 'Intermediate' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300' :
                      'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-300'
                    }`}>
                      {article.category}
                    </Badge>
                    <div className={`flex items-center text-muted-foreground text-sm gap-4 ${isMobile ? 'hidden' : ''}`}>
                      <span>{new Date().toLocaleDateString()}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readingTime}
                      </div>
                    </div>
                    {isMobile && (
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readingTime}
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} mb-3 group-hover:text-primary transition-colors leading-tight`}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed mb-4`}>
                    {article.description}
                  </p>
                  
                  {!isMobile && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors dark:bg-secondary/30 dark:text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-secondary/50 dark:bg-secondary/30 dark:text-secondary-foreground">
                          +{article.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  <div className="inline-flex items-center text-primary font-medium hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default ETFLearn;
