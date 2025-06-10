import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Heart, MapPin, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
const About = () => {
  const isMobile = useIsMobile();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whyChooseUs = [{
    icon: Eye,
    title: "Clarity First",
    description: "No jargon, no confusion."
  }, {
    icon: Heart,
    title: "No Hype",
    description: "Just honest, unbiased guidance."
  }, {
    icon: MapPin,
    title: "For India",
    description: "Tailored for Indian investors."
  }, {
    icon: Award,
    title: "Trustworthy",
    description: "Research-backed. Explained for everyone."
  }];
  return <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background md:py-[20px] py-[18px]">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className={`font-bold mb-8 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container md:py-12 py-[3px]">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-8 md:mb-12 prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              At <strong><span className="text-primary dark:text-primary">Money</span> Over Noise</strong>, we simplify money.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In a world flooded with jargon, hype, and half-truths—especially on social media—we help you 
              cut through the noise and make sense of your finances.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our mission is simple: <strong>clarity over confusion.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              We're building a platform that goes beyond just products or trends. Expect:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Deep, long-form money content</strong> that actually makes sense</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Visual storytelling</strong> that simplifies the complex</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Tools and guides</strong> that respect your time and brain</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Psychology-led money advice</strong> grounded in behavior, not buzzwords</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Everything we do is unbiased, research-backed, and Indian-first.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Because when you understand your money, you're in control of your future.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              Welcome to <strong><span className="text-primary dark:text-primary">Money</span> Over Noise</strong>. Welcome to clarity.
            </p>
          </div>

          {/* Why MoneyOverNoise */}
          <div className="mb-8 md:mb-12">
            <h2 className={`font-bold mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              Why <span className="text-primary dark:text-primary">Money</span>OverNoise?
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return <div key={index} className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className={`font-semibold mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>;
            })}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="text-center bg-primary/5 rounded-lg p-6 md:p-8">
            <h3 className={`font-bold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
              Ready to Start Your Financial Journey?
            </h3>
            <p className={`text-muted-foreground mb-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Join thousands of investors who are building wealth through smart, simple investing.
            </p>
            <Button asChild size={isMobile ? "default" : "lg"}>
              <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>
                Start Learning
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default About;