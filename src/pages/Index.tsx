
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import FeaturedETFs from '@/components/home/FeaturedETFs';
import VideoInsights from '@/components/home/VideoInsights';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="space-y-8 md:space-y-12">
        <FeatureSection />
        <FeaturedETFs />
        <VideoInsights />
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Index;
