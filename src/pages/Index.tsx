
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import CallToAction from '@/components/home/CallToAction';
import { useState } from 'react';
import SubscriptionModal from '@/components/shared/SubscriptionModal';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <MainLayout>
      <HeroSection 
        onSubscriptionClick={() => setIsSubscriptionModalOpen(true)} 
      />
      <div className="space-y-16 md:space-y-20">
        <FeatureSection />
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
