
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import CallToAction from '@/components/home/CallToAction';
import { useState } from 'react';
import SubscriptionModal from '@/components/shared/SubscriptionModal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <MainLayout>
      <HeroSection />
      
      {/* ETF Statistics Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">
              80% of active mutual funds in India underperformed their benchmark over the last 5 years.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              In contrast, ETFs — the passive investing alternative — have quietly gained trust, transparency, and traction.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/etfs/learn">
                  Learn about ETFs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 md:space-y-20">
        <FeatureSection />
        
        {/* Newsletter Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Stay Ahead of the Noise
              </h2>
              <p className="text-lg text-muted-foreground">
                Get weekly insights on ETFs, market analysis, and smart investing strategies delivered to your inbox.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsSubscriptionModalOpen(true)}
                className="font-medium"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
      
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </MainLayout>
  );
};

export default Index;
