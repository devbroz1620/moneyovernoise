
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedETFs from '@/components/home/FeaturedETFs';
import VideoInsights from '@/components/home/VideoInsights';
import FeatureSection from '@/components/home/FeatureSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedETFs />
      <VideoInsights />
      <FeatureSection />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
