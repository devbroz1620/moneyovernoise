
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CreditCard, Clock, TrendingUp, Shield, Calculator, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Debt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const upcomingTopics = [
    {
      icon: TrendingUp,
      title: "Government Bonds & Treasury Bills",
      description: "Understanding sovereign debt instruments and their role in your portfolio"
    },
    {
      icon: Shield,
      title: "Corporate Bonds & Credit Risk",
      description: "How to evaluate corporate debt and manage credit risk effectively"
    },
    {
      icon: Calculator,
      title: "Fixed Deposits vs Debt Mutual Funds",
      description: "Comparing traditional FDs with modern debt investment options"
    },
    {
      icon: FileText,
      title: "Tax Implications of Debt Investing",
      description: "Navigate taxation on debt investments and optimize your returns"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/20 py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-4 w-16 h-16 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Debt Investing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Master the art of fixed-income investing with clear, practical guides designed for Indian investors. 
              From government bonds to corporate debt, we'll help you build a stable foundation for your portfolio.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <span className="text-lg font-medium text-orange-600 dark:text-orange-400">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* What's Coming Section */}
      <section className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What's Coming</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {upcomingTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card key={index} className="border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-lg bg-orange-100 dark:bg-orange-900/30 p-2">
                        <IconComponent className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Why Debt Investing Matters */}
          <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Debt Investing Matters</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Stability</div>
                <p className="text-sm text-muted-foreground">Predictable returns and capital preservation</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Diversification</div>
                <p className="text-sm text-muted-foreground">Balance your equity portfolio with fixed income</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Income</div>
                <p className="text-sm text-muted-foreground">Regular interest payments for consistent cash flow</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              We're working hard to bring you comprehensive, easy-to-understand content on debt investing. 
              In the meantime, explore our other sections to start your investment journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/etfs" onClick={handleScrollToTop}>
                  Learn About ETFs
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/psychology" onClick={handleScrollToTop}>
                  Mind Over Money
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Debt;
