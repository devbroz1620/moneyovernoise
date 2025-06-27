import MainLayout from '@/components/layout/MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { Route } from 'react-router-dom';

import HomeHeroSection from '@/components/home/HomeHeroSection';
import HomeCategoryCards from '@/components/home/HomeCategoryCards';
import HomeWhyChooseUs from '@/components/home/HomeWhyChooseUs';
import HomeETFStatsSection from '@/components/home/HomeETFStatsSection';
import HomeNewsletterBlock from '@/components/home/HomeNewsletterBlock';
import WhyMoneyOverNoise from './WhyMoneyOverNoise';

const Index = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubscribeRedirect = () => {
    window.open('https://moneyovernoise-newsletter-ab7c12.beehiiv.com/subscribe', '_blank');
  };

  return (
    <MainLayout>
      <HomeHeroSection />
      <HomeCategoryCards handleScrollToTop={handleScrollToTop} />
      <HomeWhyChooseUs />
      <HomeETFStatsSection handleScrollToTop={handleScrollToTop} />
      <HomeNewsletterBlock onOpenSubscriptionModal={handleSubscribeRedirect} />
    </MainLayout>
  );
};

export default Index;
