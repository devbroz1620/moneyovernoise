import MainLayout from '@/components/layout/MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import SubscriptionModal from '@/components/shared/SubscriptionModal';
import { useState } from 'react';
import { Route } from 'react-router-dom';

import HomeHeroSection from '@/components/home/HomeHeroSection';
import HomeCategoryCards from '@/components/home/HomeCategoryCards';
import HomeWhyChooseUs from '@/components/home/HomeWhyChooseUs';
import HomeETFStatsSection from '@/components/home/HomeETFStatsSection';
import HomeNewsletterBlock from '@/components/home/HomeNewsletterBlock';
import WhyMoneyOverNoise from './WhyMoneyOverNoise';

const Index = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <HomeHeroSection />
      <HomeCategoryCards handleScrollToTop={handleScrollToTop} />
      <HomeWhyChooseUs />
      <HomeETFStatsSection handleScrollToTop={handleScrollToTop} />
      <HomeNewsletterBlock onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)} />
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </MainLayout>
  );
};

export default Index;
