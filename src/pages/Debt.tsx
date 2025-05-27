
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Debt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <section className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-orange-100 p-6 w-20 h-20 flex items-center justify-center">
              <CreditCard className="h-10 w-10 text-orange-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Debt Investing
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-lg text-muted-foreground">Coming Soon</span>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're working on comprehensive guides for debt investing, fixed deposits, government bonds, and other fixed-income instruments tailored for Indian investors.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-left">What's Coming:</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Government bonds and treasury bills</li>
              <li>• Corporate bonds and credit risk analysis</li>
              <li>• Fixed deposits vs debt mutual funds</li>
              <li>• Tax implications of debt investing</li>
              <li>• Building a balanced debt portfolio</li>
            </ul>
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/" onClick={handleScrollToTop}>
                Explore Other Topics
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Debt;
