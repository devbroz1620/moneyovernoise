
import MainLayout from '@/components/layout/MainLayout';
import { useState } from 'react';
import SubscriptionModal from '@/components/shared/SubscriptionModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp, CreditCard, Brain, Eye, Heart, MapPin, Award, Mail } from 'lucide-react';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-background text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simplifying <span className="text-primary">Money</span> for You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            No jargon, no overwhelm.
          </p>
        </div>
      </section>

      {/* What Would You Like to Learn Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Would You Like to Learn?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* ETFs Card */}
            <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">ETFs</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master ETF investing with comprehensive guides and tools
                </p>
                <Button asChild variant="link" className="text-primary font-medium">
                  <Link to="/etfs/learn" onClick={handleLinkClick}>
                    Explore ETF Guides →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Debt Card */}
            <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Debt</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn debt investing strategies and fixed income instruments
                </p>
                <Button asChild variant="link" className="text-primary font-medium">
                  <Link to="/debt" onClick={handleLinkClick}>
                    Explore Debt Investing →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mind Over Money Card */}
            <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mind Over Money</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Understand how psychology affects your financial decisions
                </p>
                <Button asChild variant="link" className="text-primary font-medium">
                  <Link to="/psychology" onClick={handleLinkClick}>
                    Money Habits Decoded →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why MoneyOverNoise Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-primary">MoneyOverNoise</span>?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Clarity First */}
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clarity First</h3>
              <p className="text-muted-foreground">
                No jargon, no confusion.
              </p>
            </div>

            {/* No Hype */}
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Hype</h3>
              <p className="text-muted-foreground">
                Just honest, unbiased guidance.
              </p>
            </div>

            {/* For India */}
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For India</h3>
              <p className="text-muted-foreground">
                Tailored for Indian investors.
              </p>
            </div>

            {/* Trustworthy */}
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trustworthy</h3>
              <p className="text-muted-foreground">
                Research-backed. Explained for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETF Statistics Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border p-8 md:p-12 text-center">
            <CardContent>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-4xl md:text-5xl">80%</span> of active mutual funds in India underperformed their benchmark over the last 5 years.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                In contrast, <span className="font-semibold">ETFs</span> — the passive investing alternative — have quietly gained trust, transparency, and traction.
              </p>
              <Button asChild size="lg" className="font-medium">
                <Link to="/etfs/learn" onClick={handleLinkClick}>
                  Learn about ETFs
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-8">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Ahead of the Noise
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of Indians who prefer clarity over chaos when it comes to their money.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsSubscriptionModalOpen(true)}
            className="font-medium mb-4"
          >
            Get Weekly Money Insights
          </Button>
          <p className="text-sm text-muted-foreground">
            No spam, just valuable insights delivered to your inbox every week.
          </p>
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
