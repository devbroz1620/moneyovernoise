
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Shield, Zap, Calendar, Building, Target, DollarSign } from 'lucide-react';
import { etfData } from '@/data/etfData';

const ETFDetail = () => {
  const { ticker } = useParams<{ ticker: string }>();
  
  if (!ticker || !etfData[ticker]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">ETF Not Found</h1>
          <p className="text-muted-foreground mb-8">The ETF you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/list/etfs">Browse All ETFs</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const etf = etfData[ticker];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-50 border-green-200 text-green-700';
      case 'Medium': return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'High': return 'bg-red-50 border-red-200 text-red-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Small Cap')) return Zap;
    if (category.includes('Gold') || category.includes('Commodity')) return Shield;
    return TrendingUp;
  };

  const CategoryIcon = getCategoryIcon(etf.category);

  return (
    <MainLayout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/list/etfs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to ETFs
            </Link>
          </Button>
          
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <CategoryIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{etf.name}</h1>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="font-mono">{etf.ticker}</Badge>
                  <Badge variant="outline" className={getRiskColor(etf.riskLevel)}>
                    {etf.riskLevel} Risk
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{etf.navValue}</div>
              <div className="text-sm text-muted-foreground">Current NAV</div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl">
            {etf.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Key Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">AUM</span>
                  </div>
                  <div className="text-2xl font-bold">{etf.aum}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Expense Ratio</span>
                  </div>
                  <div className="text-2xl font-bold">{etf.expenseRatio}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Inception</span>
                  </div>
                  <div className="text-2xl font-bold">{etf.inceptionDate}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Dividend Yield</span>
                  </div>
                  <div className="text-2xl font-bold">{etf.dividendYield}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fund Details */}
          <Card>
            <CardHeader>
              <CardTitle>Fund Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm text-muted-foreground">Fund House</span>
                <div className="font-semibold">{etf.fund_house}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Category</span>
                <div className="font-semibold">{etf.category}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Benchmark</span>
                <div className="font-semibold">{etf.benchmark}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Min Investment</span>
                <div className="font-semibold">{etf.minimumInvestment}</div>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(etf.performance).map(([period, value]) => (
                  <div key={period} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{period}</span>
                    <span className={`font-semibold ${
                      value.startsWith('+') ? 'text-green-600' : 
                      value.startsWith('-') ? 'text-red-600' : 'text-muted-foreground'
                    }`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Holdings */}
          <Card>
            <CardHeader>
              <CardTitle>Top Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {etf.holdings.slice(0, 10).map((holding, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{holding.company}</span>
                    <span className="font-semibold text-sm">{holding.weight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="px-8">
            Invest Now
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Add to Watchlist
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ETFDetail;
