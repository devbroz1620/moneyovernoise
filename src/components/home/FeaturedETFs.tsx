
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchETFData, ETF } from '@/services/etfService';
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedETFs = () => {
  const { data: etfs, isLoading, error } = useQuery({
    queryKey: ['etfs'],
    queryFn: fetchETFData,
  });

  // Get 3-4 ETFs to feature
  const getFeaturedETFs = (allETFs: ETF[] = []): ETF[] => {
    const featured = allETFs
      .filter(etf => etf.aum > 1000) // Filter for larger ETFs
      .sort((a, b) => b.returns1Y - a.returns1Y) // Sort by 1Y returns
      .slice(0, 4); // Take top 4
      
    return featured;
  };

  // Format percentage values
  const formatPercent = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };

  // Format currency values (crores)
  const formatCurrency = (value: number): string => {
    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(2)}k Cr`;
    }
    return `₹${value.toFixed(2)} Cr`;
  };

  const featuredETFs = getFeaturedETFs(etfs);

  if (isLoading) {
    return (
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Featured ETFs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-6 w-2/3 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Featured ETFs</h2>
        <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
          Unable to load ETF data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <section className="container py-12 md:py-16">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured ETFs</h2>
        <Link to="/list/etfs" className="text-primary font-medium hover:underline">
          View All ETFs
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuredETFs.map((etf) => (
          <Link key={etf.ticker} to={`/list/etfs/${etf.ticker}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold line-clamp-1 mb-1">
                  {etf.name}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {etf.ticker} • {etf.amc}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">1Y Return</p>
                    <p className={`font-medium ${etf.returns1Y > 0 ? 'text-green-600' : etf.returns1Y < 0 ? 'text-red-600' : ''}`}>
                      {formatPercent(etf.returns1Y)}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">AUM</p>
                    <p className="font-medium">{formatCurrency(etf.aum)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Expense Ratio</p>
                    <p className="font-medium">{formatPercent(etf.expenseRatio)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Risk</p>
                    <p className="font-medium">
                      <Badge variant="outline" className={
                        etf.risk === 'High' ? 'border-red-200 bg-red-50 text-red-700' :
                        etf.risk === 'Moderate' ? 'border-yellow-200 bg-yellow-50 text-yellow-700' :
                        'border-green-200 bg-green-50 text-green-700'
                      }>
                        {etf.risk}
                      </Badge>
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Category</p>
                  <p className="font-medium">{etf.category}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedETFs;
