import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Shield, Zap } from 'lucide-react';
import { getETFByTicker } from '@/services/etfService';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ETF } from '@/services/etfService';

const ETFDetail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  
  const { data: etf, isLoading, error } = useQuery<ETF>({
    queryKey: ['etf', symbol],
    queryFn: () => getETFByTicker(symbol || ''),
    enabled: !!symbol,
  });

  console.log(etf);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-32 w-full" />
            <div className="grid gap-6 lg:grid-cols-3">
              <Skeleton className="lg:col-span-2 h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error || !etf) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">ETF Not Found</h1>
          <p className="text-muted-foreground mb-8">The ETF you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/list">Browse All ETFs</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('gold') || category.toLowerCase().includes('commodity')) return Shield;
    if (category.toLowerCase().includes('small') || category.toLowerCase().includes('mid')) return Zap;
    return TrendingUp;
  };

  const CategoryIcon = getCategoryIcon(etf.industryInfo.basicIndustry);

  const absoluteChange = etf.priceInfo.change;

  return (
    <MainLayout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-zinc-900 text-primary-foreground p-6 flex flex-col items-center justify-center max-w-3xl mx-auto">
          <div className="w-full flex justify-between items-center mb-4">
            <Button variant="ghost" asChild className="text-primary-foreground">
              <Link to="/etfs/screener">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to ETFs
              </Link>
            </Button>
            <div className="text-right">
              <Badge variant="secondary" className="font-mono text-2xl py-2 px-4">{etf.info.symbol}</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 w-full text-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.lastPrice.toFixed(2)}</span>
              <span className="text-xs opacity-80">LAST PRICE</span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`text-lg font-bold ${absoluteChange > 0 ? 'text-green-400' : absoluteChange < 0 ? 'text-red-400' : ''}`}>
                {absoluteChange > 0 ? '+' : ''}{absoluteChange.toFixed(2)} ({formatPercent(etf.priceInfo.pChange)})
              </span>
              <span className="text-xs opacity-80">CHANGE</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.previousClose?.toFixed(2) || 'N/A'}</span>
              <span className="text-xs opacity-80">PREV. CLOSE</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.iNavValue ? parseFloat(etf.priceInfo.iNavValue).toFixed(2) : 'N/A'}</span>
              <span className="text-xs opacity-80">NAV</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-6">
              {/* ETF Information */}
              <Card className="flex-1 min-w-0">
                <CardHeader>
                  <CardTitle>ETF Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Category</span>
                    <span className="font-semibold text-right">{etf.industryInfo.basicIndustry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Asset Class</span>
                    <span className="font-semibold text-right">{etf.industryInfo.basicIndustry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expense Ratio</span>
                    <span className="font-semibold text-right">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AUM</span>
                    <span className="font-semibold text-right">{formatCurrency(etf.securityInfo.issuedSize, 'crores')}</span>
                  </div>
                </CardContent>
              </Card>
              {/* Price Information */}
              <Card className="flex-1 min-w-0">
                <CardHeader>
                  <CardTitle>Price Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">52 Week High</span>
                    <span className="font-semibold text-right">{etf.priceInfo.weekHighLow.max ? etf.priceInfo.weekHighLow.max.toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">52 Week Low</span>
                    <span className="font-semibold text-right">{etf.priceInfo.weekHighLow.min ? etf.priceInfo.weekHighLow.min.toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Upper Band</span>
                    <span className="font-semibold text-right">{etf.priceInfo.upperCP ? parseFloat(etf.priceInfo.upperCP).toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lower Band</span>
                    <span className="font-semibold text-right">{etf.priceInfo.lowerCP ? parseFloat(etf.priceInfo.lowerCP).toFixed(2) : 'N/A'}</span>
                  </div>
                </CardContent>
              </Card>
              {/* Securities Information */}
              <Card className="flex-1 min-w-0">
                <CardHeader>
                  <CardTitle>Securities Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <div className="font-semibold">{etf.metadata.status || 'N/A'}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Trading Status</span>
                    <div className="font-semibold">{etf.securityInfo.tradingStatus || 'N/A'}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Date of Listing</span>
                    <div className="font-semibold">{etf.metadata.listingDate || 'N/A'}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Adjusted P/E</span>
                    <div className="font-semibold">{etf.metadata.pdSectorPe || 'N/A'}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Symbol P/E</span>
                    <div className="font-semibold">{etf.metadata.pdSymbolPe || 'N/A'}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Index</span>
                    <div className="font-semibold">N/A</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Basic Industry</span>
                    <div className="font-semibold">{etf.industryInfo.basicIndustry || 'N/A'}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="historical-data">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Historical Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Historical data will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cogencis-invest">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Cogencis Invest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Investment information will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons (Removed as per new design) */}
        {/* <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="px-8">
            Add to Watchlist
          </Button>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default ETFDetail;
