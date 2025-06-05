
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
        
        {/* Why MoneyOverNoise Section - Moved to the end after Video Insights */}
        <section className="container py-8 md:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why MoneyOverNoise?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Clarity First</h3>
                <p className="text-muted-foreground text-sm">No jargon, no confusion.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">No Hype</h3>
                <p className="text-muted-foreground text-sm">Just honest, unbiased guidance.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">For India</h3>
                <p className="text-muted-foreground text-sm">Tailored for Indian investors.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Trustworthy</h3>
                <p className="text-muted-foreground text-sm">Research-backed. Explained for everyone.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ETFs;
