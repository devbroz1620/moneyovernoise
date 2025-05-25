
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Zap } from 'lucide-react';
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
    category: "Growth"
  },
  {
    name: "GoldBeES",
    ticker: "GOLDBEES", 
    description: "Invests in physical gold, offering a hedge against inflation and crises.",
    aum: "₹7,000+ Cr",
    expenseRatio: "0.81%",
    idealFor: "Safe haven and portfolio diversification",
    icon: Shield,
    category: "Safety"
  },
  {
    name: "HDFC Smallcap 250 ETF",
    ticker: "HDFCSMALLCAP250",
    description: "Exposure to high-growth Indian smallcap companies via the Nifty Smallcap 250 index.",
    aum: "~₹1,500 Cr",
    expenseRatio: "0.30%",
    idealFor: "High-risk, long-term wealth creation",
    icon: Zap,
    category: "High Growth"
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
      <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl h-full flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="outline" className={getCategoryStyle(etf.category)}>
              {etf.category}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {etf.name}
          </CardTitle>
          <div className="text-sm text-muted-foreground font-mono">
            {etf.ticker}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
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
            <Link to={`/list/etfs/${etf.ticker}`}>
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
        <Link to="/list/etfs" className="text-primary font-medium hover:underline">
          View All ETFs
        </Link>
      </div>
      
      {isMobile ? (
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredETFs.map((etf) => (
              <CarouselItem key={etf.ticker} className="pl-2 md:pl-4 basis-4/5">
                <ETFCard etf={etf} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredETFs.map((etf) => (
            <ETFCard key={etf.ticker} etf={etf} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedETFs;
