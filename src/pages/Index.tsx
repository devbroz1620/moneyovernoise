
import MainLayout from '@/components/layout/MainLayout';
import AnimatedHeroText from '@/components/shared/AnimatedHeroText';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, TrendingUp, Brain, CreditCard, Mail, Eye, Heart, MapPin, Award } from 'lucide-react';
import { learnArticles } from '@/data/learnData';
import { useIsMobile } from '@/hooks/use-mobile';
import SubscriptionModal from '@/components/shared/SubscriptionModal';
import { useState } from 'react';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const etfArticles = Object.values(learnArticles).slice(0, 2);
  
  // Real psychology articles with actual slugs
  const psychologyArticles = [
    {
      id: 'fomo-investing',
      slug: 'fomo-investing',
      title: 'Why FOMO Makes You a Bad Investor',
      description: 'Understanding how fear of missing out destroys long-term wealth building.',
      category: 'Psychology'
    },
    {
      id: 'social-media-money',
      slug: 'social-media-money', 
      title: 'How Social Media is Ruining Your Money Decisions',
      description: 'The hidden psychology behind why Instagram makes you spend more.',
      category: 'Psychology'
    },
    {
      id: 'why-we-fear-investing',
      slug: 'why-we-fear-investing',
      title: 'Why We Fear Investing (And How to Overcome It)',
      description: 'Exploring the psychological barriers that keep us from building wealth.',
      category: 'Psychology'
    }
  ];

  const whyChooseUs = [
    {
      icon: Eye,
      title: "Clarity First",
      description: "No jargon, no confusion."
    },
    {
      icon: Heart,
      title: "No Hype",
      description: "Just honest, unbiased guidance."
    },
    {
      icon: MapPin,
      title: "For India",
      description: "Tailored for Indian investors."
    },
    {
      icon: Award,
      title: "Trustworthy",
      description: "Research-backed. Explained for everyone."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedHeroText />
          </div>
        </div>
      </section>

      {/* Content Category Cards */}
      <section className="container py-4 md:py-8">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-8">What Would You Like to Learn?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
            <Link to="/etfs" onClick={handleScrollToTop}>
              <CardHeader className="text-center pb-4">
                <div className="rounded-full bg-blue-50 dark:bg-blue-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">ETFs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Master ETF investing with comprehensive guides and tools
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Explore ETF Guides
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
            <Link to="/debt" onClick={handleScrollToTop}>
              <CardHeader className="text-center pb-4">
                <div className="rounded-full bg-orange-50 dark:bg-orange-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
                  <CreditCard className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl">Debt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Learn debt investing strategies and fixed income instruments
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Explore Debt Investing
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
            <Link to="/psychology" onClick={handleScrollToTop}>
              <CardHeader className="text-center pb-4">
                <div className="rounded-full bg-purple-50 dark:bg-purple-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors">
                  <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Mind Over Money</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Understand how psychology affects your financial decisions
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Decode How We Think About Money
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Why MoneyOverNoise */}
      <section className="container py-6 md:py-8">
        <div className="mb-8 md:mb-12">
          <h2 className={`font-bold mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Why MoneyOverNoise?
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className={`font-semibold mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container py-4 md:py-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {etfArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link to={`/etfs/learn/${article.slug}`} onClick={handleScrollToTop}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-blue-500 text-blue-700 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-400">
                      ETFs
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
          
          {psychologyArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link to={`/psychology/${article.slug}`} onClick={handleScrollToTop}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-700 bg-purple-50 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-400">
                      Psychology
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/etfs/learn" onClick={handleScrollToTop}>
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="bg-primary/5 border-t border-b py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of the Noise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of Indians who prefer clarity over chaos when it comes to their money.
            </p>
            <Button 
              size="lg" 
              className="font-medium"
              onClick={() => setIsSubscriptionModalOpen(true)}
            >
              Get Weekly Money Insights
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, just valuable insights delivered to your inbox every week.
            </p>
          </div>
        </div>
      </section>

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </MainLayout>
  );
};

export default Index;
