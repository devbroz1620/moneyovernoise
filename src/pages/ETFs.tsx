
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import FeaturedETFs from '@/components/home/FeaturedETFs';
import VideoInsights from '@/components/home/VideoInsights';

const ETFs = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="space-y-6 md:space-y-8">
        <FeatureSection />
        <FeaturedETFs />
        <VideoInsights />
      </div>
    </MainLayout>
  );
};

export default ETFs;
