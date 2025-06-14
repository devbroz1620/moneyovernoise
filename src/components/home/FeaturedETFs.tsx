import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeaturedETF {
  name: string;
  ticker: string;
  description: string;
  aum: string;
  expenseRatio: string;
  idealFor: string;
  icon: React.ElementType;
  category: string;
  gradient: string;
}

const featuredETFs: FeaturedETF[] = [
  {
    name: "JuniorBees",
    ticker: "JUNIORBEES",
    description: "Tracks the Nifty Next 50 Index — emerging large-cap leaders of India.",
    aum: "₹8,000+ Cr",
    expenseRatio: "0.22%",
    idealFor: "Growth-focused investors beyond Nifty 50",
    icon: TrendingUp,
    category: "Growth",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    name: "GoldBeES",
    ticker: "GOLDBEES", 
    description: "Invests in physical gold, offering a hedge against inflation and crises.",
    aum: "₹7,000+ Cr",
    expenseRatio: "0.81%",
    idealFor: "Safe haven and portfolio diversification",
    icon: Shield,
    category: "Safety",
    gradient: "from-yellow-500 to-yellow-700"
  },
  {
    name: "HDFC Smallcap 250 ETF",
    ticker: "HDFCSMALLCAP250",
    description: "Exposure to high-growth Indian smallcap companies via the Nifty Smallcap 250 index.",
    aum: "~₹1,500 Cr",
    expenseRatio: "0.30%",
    idealFor: "High-risk, long-term wealth creation",
    icon: Zap,
    category: "High Growth",
    gradient: "from-purple-500 to-purple-700"
  }
];

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'Growth':
      return 'bg-blue-50 border-blue-200 text-blue-700';
    case 'Safety':
      return 'bg-green-50 border-green-200 text-green-700';
    case 'High Growth':
      return 'bg-purple-50 border-purple-200 text-purple-700';
    default:
      return 'bg-gray-50 border-gray-200 text-gray-700';
  }
};

const FeaturedETFs = () => {
  const isMobile = useIsMobile();

  const ETFCard = ({ etf }: { etf: FeaturedETF }) => {
    const IconComponent = etf.icon;
    return (
      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 h-full flex flex-col overflow-hidden">
        {/* Hero Image Section */}
        <div className={`relative h-40 bg-gradient-to-br ${etf.gradient} p-6 flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <IconComponent className="h-12 w-12 text-white mb-2 mx-auto" />
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              {etf.category}
            </Badge>
          </div>
        </div>
        
        {/* Content Section */}
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {etf.name}
          </CardTitle>
          <div className="text-sm text-muted-foreground font-mono mb-3">
            {etf.ticker}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {etf.description}
          </p>
        </CardHeader>
        
        <CardContent className="flex flex-col flex-grow">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">AUM</p>
              <p className="font-semibold text-sm">{etf.aum}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Expense Ratio</p>
              <p className="font-semibold text-sm">{etf.expenseRatio}</p>
            </div>
          </div>
          
          <div className="space-y-2 mb-4 flex-grow">
            <p className="text-xs text-muted-foreground font-medium">Ideal For</p>
            <p className="text-sm font-medium text-foreground">{etf.idealFor}</p>
          </div>

          <Button 
            asChild 
            className="w-full group-hover:shadow-md transition-all mt-auto"
          >
            <Link to={`/list/etfs/${etf.ticker}`} onClick={() => window.scrollTo(0, 0)}>
              Explore ETF
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="container py-8 md:py-12">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured ETFs</h2>
          <p className="text-muted-foreground">Discover top-performing ETFs across different categories</p>
        </div>
        <Link 
          to="/list/etfs" 
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center text-primary font-medium hover:underline text-sm px-2 py-1 rounded transition-colors"
          style={{ lineHeight: 1.2 }}
        >
          View All ETFs
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredETFs.map((etf) => (
            <CarouselItem key={etf.ticker} className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'basis-1/2 lg:basis-1/3'}`}>
              <ETFCard etf={etf} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default FeaturedETFs;
