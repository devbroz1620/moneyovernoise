import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CreditCard, Clock, TrendingUp, Shield, Calculator, FileText, Building, Landmark, PiggyBank, Receipt, Scale, BookOpen } from 'lucide-react';
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

  const debtCategories = [
    {
      icon: Landmark,
      title: "Government Securities",
      description: "G-Secs (Government Securities), SDLs (State Development Loans), T-Bills (Treasury Bills), Sovereign Gold Bonds, RBI Bonds",
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-l-green-500"
    },
    {
      icon: Building,
      title: "Corporate Debt",
      description: "Corporate Bonds, Debentures, Commercial Paper, Non-Convertible Debentures (NCDs)",
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-l-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Debt Mutual Funds",
      description: "Liquid Funds, Gilt Funds, Credit Risk Funds, Corporate Bond Funds, other debt-oriented mutual funds",
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-l-purple-500"
    },
    {
      icon: PiggyBank,
      title: "Other Fixed Income Products",
      description: "Fixed Deposits (FDs), Post Office Savings Schemes, Fixed Maturity Plans (FMPs)",
      color: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-l-orange-500"
    },
    {
      icon: Receipt,
      title: "Tax-Advantaged Debt Instruments",
      description: "Tax-Free Bonds, Capital Gains Bonds",
      color: "bg-indigo-50 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-l-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Debt Market Basics & Concepts",
      description: "Yield, Credit Rating, Risks in Debt Investing, How Bonds Are Traded",
      color: "bg-teal-50 dark:bg-teal-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "border-l-teal-500"
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
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Categories Section */}
      <section className="container py-4 md:py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-center mb-2">Debt Investment Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {debtCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${category.borderColor}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`rounded-lg ${category.color} p-3`}>
                        <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg leading-tight">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium">
                      <Clock className="h-4 w-4 mr-2" />
                      Coming Soon
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Why Debt Investing Matters */}
          <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Why Debt Investing Matters</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-xl font-bold text-primary mb-2">Stability</div>
                <p className="text-sm text-muted-foreground">Predictable returns and capital preservation</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <div className="text-xl font-bold text-primary mb-2">Diversification</div>
                <p className="text-sm text-muted-foreground">Balance your equity portfolio with fixed income</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <div className="text-xl font-bold text-primary mb-2">Income</div>
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
