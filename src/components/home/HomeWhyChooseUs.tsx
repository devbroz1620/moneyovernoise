
import { Eye, Heart, MapPin, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
    description: "Research-backed."
  }
];

const HomeWhyChooseUs = () => {
  const isMobile = useIsMobile();
  return (
    <section className="container py-6 md:py-8">
      <div className="mb-8 md:mb-12">
        <h2 className={`font-bold mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
          Why <span className="text-primary dark:text-primary">Money</span>OverNoise?
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
    </section>
  );
};

export default HomeWhyChooseUs;
