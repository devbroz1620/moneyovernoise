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
        <div className="mb-8 rounded-lg bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center mb-4">
            <Button variant="ghost" asChild className="text-primary-foreground">
              <Link to="/etfs/screener">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to ETFs
              </Link>
            </Button>
            <div className="text-right">
              <h1 className="text-3xl font-bold mb-1">{etf.info.companyName}</h1>
              <Badge variant="secondary" className="font-mono">{etf.info.symbol}</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 w-full text-center">
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
              <span className="text-lg font-bold">{etf.priceInfo.open?.toFixed(2) || 'N/A'}</span>
              <span className="text-xs opacity-80">OPEN</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.weekHighLow.max?.toFixed(2) || 'N/A'}</span>
              <span className="text-xs opacity-80">HIGH</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.weekHighLow.min?.toFixed(2) || 'N/A'}</span>
              <span className="text-xs opacity-80">LOW</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{etf.priceInfo.vwap?.toFixed(2) || 'N/A'}</span>
              <span className="text-xs opacity-80">VWAP</span>
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
            <div className="grid gap-6 lg:grid-cols-3 mt-6">
              {/* ETF Information */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>ETF Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Category</span>
                    <span className="font-semibold">{etf.industryInfo.basicIndustry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Asset Class</span>
                    <span className="font-semibold">{etf.industryInfo.basicIndustry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expense Ratio</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AUM</span>
                    <span className="font-semibold">{formatCurrency(etf.securityInfo.issuedSize, 'crores')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Information */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Trading Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Volume</span>
                    <span className="font-semibold">{formatCurrency(etf.preOpenMarket.totalTradedVolume, 'lakhs')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Turnover</span>
                    <span className="font-semibold">{formatCurrency(etf.preOpenMarket.finalPrice * etf.preOpenMarket.finalQuantity, 'crores')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Market Cap</span>
                    <span className="font-semibold">{formatCurrency(etf.securityInfo.issuedSize * etf.priceInfo.lastPrice, 'crores')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Fund Details */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Fund Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Fund Manager</span>
                    <span className="text-sm text-muted-foreground">Free Float Market Cap (₹ Cr.)</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Impact cost</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">% of Deliverable / Traded Quantity</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Applicable Margin Rate</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Face Value</span>
                    <span className="font-semibold">{etf.securityInfo.faceValue !== undefined ? etf.securityInfo.faceValue : 'N/A'}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Price Information */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Price Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">52 Week High</span>
                    <span className="font-semibold">{etf.priceInfo.weekHighLow.max ? etf.priceInfo.weekHighLow.max.toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">52 Week Low</span>
                    <span className="font-semibold">{etf.priceInfo.weekHighLow.min ? etf.priceInfo.weekHighLow.min.toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Upper Band</span>
                    <span className="font-semibold">{etf.priceInfo.upperCP ? parseFloat(etf.priceInfo.upperCP).toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lower Band</span>
                    <span className="font-semibold">{etf.priceInfo.lowerCP ? parseFloat(etf.priceInfo.lowerCP).toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price Band (%)</span>
                    <span className="font-semibold">{etf.priceInfo.pPriceBand !== undefined ? parseFloat(etf.priceInfo.pPriceBand).toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Daily Volatility</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annualised Volatility</span>
                    <span className="font-semibold">N/A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">i-NAV</span>
                    <span className="font-semibold">{etf.priceInfo.iNavValue ? parseFloat(etf.priceInfo.iNavValue).toFixed(2) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tick Size</span>
                    <span className="font-semibold">{etf.priceInfo.tickSize !== undefined ? etf.priceInfo.tickSize.toFixed(2) : 'N/A'}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Securities Information */}
              <Card className="lg:col-span-3">
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
                    <div className="font-semibold">N/A</div>{/* Data not available in provided JSON */}
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
