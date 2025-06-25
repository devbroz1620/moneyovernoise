import { Eye, Heart, MapPin, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const whyChooseUs = [
  {
    icon: Award,
    title: "Trustworthy",
    description: "Research-backed.",
    to: "https://www.notion.so/Why-MoneyOverNoise-21c2f5df76a7801db88fe4d29958e4cc?source=copy_link"
  },
  {
    icon: Eye,
    title: "Clarity First",
    description: "No jargon, no confusion.",
    to: "https://www.notion.so/Why-MoneyOverNoise-21c2f5df76a7801db88fe4d29958e4cc?source=copy_link"
  },
  {
    icon: Heart,
    title: "No Hype",
    description: "Just honest, unbiased guidance.",
    to: "https://www.notion.so/Why-MoneyOverNoise-21c2f5df76a7801db88fe4d29958e4cc?source=copy_link"
  },
  {
    icon: MapPin,
    title: "For India",
    description: "Tailored for Indian investors.",
    to: "https://www.notion.so/Why-MoneyOverNoise-21c2f5df76a7801db88fe4d29958e4cc?source=copy_link"
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
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors block"
              >
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-semibold mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
