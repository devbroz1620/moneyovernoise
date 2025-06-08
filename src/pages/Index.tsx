
import MainLayout from '@/components/layout/MainLayout';
import AnimatedHeroText from '@/components/shared/AnimatedHeroText';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, TrendingUp, Brain, CreditCard, Mail, Eye, Heart, MapPin, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import SubscriptionModal from '@/components/shared/SubscriptionModal';
import { useState } from 'react';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">What Would You Like to Learn?</h2>
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
                  Money Habits Decoded
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

      {/* ETF Statistics Section */}
      <section className="container py-4 md:py-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 border border-primary/20">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-2">
              <span className="font-bold text-2xl md:text-3xl text-primary">80%</span> of active mutual funds in India underperformed their benchmark over the last 5 years.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              In contrast, <span className="font-semibold text-foreground">ETFs</span> — the passive investing alternative — have quietly gained trust, transparency, and traction.
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link to="/etfs/learn" onClick={handleScrollToTop}>
                Learn about ETFs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
