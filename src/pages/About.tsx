
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';

const About = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goals = [
    {
      icon: Target,
      title: "Demystify ETFs",
      description: "Through clear, contextual content that makes complex investing concepts simple to understand."
    },
    {
      icon: Users,
      title: "Empower Users",
      description: "With tools to compare, screen, and select the right funds for their investment journey."
    },
    {
      icon: TrendingUp,
      title: "Build Wealth",
      description: "Help Indians create long-term wealth through evidence-backed investment strategies."
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
              Money Over Noise is India's first ETF-first investing education platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-8 md:mb-12">
            <p className={`leading-relaxed mb-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
              We help retail investors cut through the noise of the stock market by focusing on simple, 
              transparent, low-cost investing — starting with Exchange Traded Funds (ETFs).
            </p>
            
            <p className={`leading-relaxed ${isMobile ? 'text-base' : 'text-lg'}`}>
              Whether you're just starting out or looking to build a diversified portfolio — we're here 
              to guide you every step of the way.
            </p>
          </div>

          {/* Our Goals */}
          <div className="mb-8 md:mb-12">
            <h2 className={`font-bold mb-6 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              Our Goal
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {goals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className={`font-semibold mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-muted/30 rounded-lg p-6 md:p-8">
            <h3 className={`font-bold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
              Real Knowledge. No Noise.
            </h3>
            <p className={`text-muted-foreground mb-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Join thousands of investors who are building wealth through smart, simple ETF investing.
            </p>
            <Button asChild size={isMobile ? "default" : "lg"}>
              <Link to="/learn">
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
