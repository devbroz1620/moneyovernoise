
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

  const whyChooseUs = [
    {
      icon: Eye,
      title: "Clarity First",
      description: "No jargon, no confusion."
    },
    {
      icon: Heart,
      title: "No Hype",
      description: "Just honest, unbiased guidance."
    },
    {
      icon: MapPin,
      title: "For India",
      description: "Tailored for Indian investors."
    },
    {
      icon: Award,
      title: "Trustworthy",
      description: "Research-backed. Explained for everyone."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              About Us
            </h1>
            <p className={`text-muted-foreground leading-relaxed mb-6 ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Making money matters clear, practical, and accessible for everyday Indians.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-8 md:mb-12 prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              At <strong>Money Over Noise</strong>, we believe that financial clarity is the key to empowerment. 
              In a world flooded with confusing jargon, conflicting advice, and endless noise—especially in the 
              Indian investing landscape—our mission is simple: <strong>to make money matters clear, practical, 
              and accessible for everyday Indians.</strong>
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              We started with a focus on ETFs (Exchange Traded Funds), creating a comprehensive, easy-to-understand 
              learning hub that breaks down complex concepts into crisp, visual, and actionable insights. Whether 
              you're just starting your investment journey or looking to deepen your knowledge, our structured 
              content—ranging from beginner guides to advanced strategies—helps you make smarter financial 
              decisions with confidence.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              But we're more than just an ETF website. We're building a trusted platform that combines:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Long-form education</strong> that goes beyond the surface</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Visual storytelling</strong> that simplifies complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Interactive tools</strong> that guide your investment choices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span><strong>Behavioral finance insights</strong> that help you understand the psychology behind your money habits</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Our unique approach cuts through misinformation and social media hype by delivering research-backed, 
              unbiased content designed for the Indian context. We want you to navigate your financial journey 
              with clarity, not confusion.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Behind Money Over Noise is a passionate team committed to empowering you with knowledge, tools, 
              and support—because when you understand your money, you control your future.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              Welcome to a clearer, smarter way to invest. Welcome to <strong>Money Over Noise</strong>.
            </p>
          </div>

          {/* Why MoneyOverNoise */}
          <div className="mb-8 md:mb-12">
            <h2 className={`font-bold mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              Why MoneyOverNoise?
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className={`font-semibold mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
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
    </MainLayout>
  );
};

export default About;
