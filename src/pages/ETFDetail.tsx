
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';
import { getETFByTicker } from '@/services/etfService';
import { Skeleton } from '@/components/ui/skeleton';

const ETFDetail = () => {
  const { ticker = '' } = useParams<{ ticker: string }>();
  
  const { data: etf, isLoading, error } = useQuery({
    queryKey: ['etf', ticker],
    queryFn: () => getETFByTicker(ticker),
  });
  
  // Format percentage values
  const formatPercent = (value: number | undefined): string => {
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}%`;
  };

  // Format currency values (crores)
  const formatCurrency = (value: number | undefined): string => {
    if (value === undefined) return 'N/A';
    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(2)}k Cr`;
    }
    return `₹${value.toFixed(2)} Cr`;
  };
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="mb-8">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full max-w-md" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-[200px] w-full" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-[150px] w-full" />
              <Skeleton className="h-[200px] w-full" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  if (error || !etf) {
    return (
      <MainLayout>
        <div className="container py-8">
          <PageHeader
            title="ETF Details"
            breadcrumbs={[
              { href: "/", label: "Home" },
              { href: "/list/etfs", label: "ETF Screener" },
              { href: `/list/etfs/${ticker}`, label: ticker, isCurrent: true },
            ]}
          />
          <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
            {error ? 'Error loading ETF data. Please try again later.' : `No ETF found with ticker ${ticker}`}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/list/etfs">Back to ETF Screener</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title={etf.name}
          description={`${etf.ticker} • ${etf.category}`}
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/list/etfs", label: "ETF Screener" },
            { href: `/list/etfs/${ticker}`, label: etf.ticker, isCurrent: true },
          ]}
          actions={
            <div className="flex gap-4">
              {etf.amcLink && (
                <Button asChild variant="outline" size="sm">
                  <a href={etf.amcLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit AMC Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {etf.factSheetLink && (
                <Button asChild size="sm">
                  <a href={etf.factSheetLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View Factsheet
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          }
        />
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Main Content Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Key Information Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">AMC</p>
                    <p className="font-medium">{etf.amc}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Launch Date</p>
                    <p className="font-medium">{etf.launchDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{etf.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Subcategory</p>
                    <p className="font-medium">{etf.subcategory || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <Badge variant="outline" className={
                      etf.risk === 'High' ? 'border-red-200 bg-red-50 text-red-700' :
                      etf.risk === 'Moderate' ? 'border-yellow-200 bg-yellow-50 text-yellow-700' :
                      'border-green-200 bg-green-50 text-green-700'
                    }>
                      {etf.risk}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Suggested Use</p>
                    <p className="font-medium">{etf.useCase || 'N/A'}</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {etf.tags && etf.tags.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {etf.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Performance Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Returns and key performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for chart - would be implemented with Recharts */}
                <div className="h-[200px] bg-muted rounded-md mb-6 flex items-center justify-center text-muted-foreground">
                  Historical Return Chart (Coming Soon)
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">1Y Return</p>
                    <p className={`font-medium text-lg ${etf.returns1Y > 0 ? 'text-green-600' : etf.returns1Y < 0 ? 'text-red-600' : ''}`}>
                      {formatPercent(etf.returns1Y)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">3Y Return</p>
                    <p className={`font-medium text-lg ${etf.returns3Y > 0 ? 'text-green-600' : etf.returns3Y < 0 ? 'text-red-600' : ''}`}>
                      {formatPercent(etf.returns3Y)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">5Y Return</p>
                    <p className={`font-medium text-lg ${etf.returns5Y > 0 ? 'text-green-600' : etf.returns5Y < 0 ? 'text-red-600' : ''}`}>
                      {formatPercent(etf.returns5Y)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tracking Error</p>
                    <p className="font-medium text-lg">{formatPercent(etf.trackingError)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Holdings/Allocation Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Holdings & Allocation</CardTitle>
                <CardDescription>
                  Top holdings and sector allocation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Top Holdings */}
                  {etf.topHoldings && etf.topHoldings.length > 0 ? (
                    <div>
                      <h4 className="font-medium mb-3">Top Holdings</h4>
                      <ul className="space-y-2">
                        {etf.topHoldings.map((holding, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span>{holding}</span>
                            {/* Assuming percentage data would be available in real implementation */}
                            {/* <span className="text-muted-foreground">XX%</span> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-medium mb-3">Top Holdings</h4>
                      <p className="text-muted-foreground">No holdings data available</p>
                    </div>
                  )}
                  
                  {/* Sector Allocation */}
                  {etf.sectorAllocation && Object.keys(etf.sectorAllocation).length > 0 ? (
                    <div>
                      <h4 className="font-medium mb-3">Sector Allocation</h4>
                      <ul className="space-y-2">
                        {Object.entries(etf.sectorAllocation).map(([sector, percentage]) => (
                          <li key={sector} className="flex items-center justify-between">
                            <span>{sector}</span>
                            <span className="text-muted-foreground">
                              {typeof percentage === 'number' ? formatPercent(percentage) : percentage}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-medium mb-3">Sector Allocation</h4>
                      <p className="text-muted-foreground">No sector allocation data available</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current NAV</p>
                  <p className="font-medium text-lg">₹{etf.nav.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Market Price</p>
                  <p className="font-medium text-lg">₹{etf.marketPrice.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">AUM</p>
                  <p className="font-medium text-lg">{formatCurrency(etf.aum)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expense Ratio</p>
                  <p className="font-medium text-lg">{formatPercent(etf.expenseRatio)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Volume</p>
                  <p className="font-medium text-lg">{etf.volume.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bid-Ask Spread</p>
                  <p className="font-medium text-lg">{formatPercent(etf.bidAskSpread)}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQ Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is {etf.name}?
                    </AccordionTrigger>
                    <AccordionContent>
                      {etf.name} is an Exchange Traded Fund that tracks {etf.category.toLowerCase()} indices or securities. It was launched by {etf.amc} on {etf.launchDate}.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How can I buy this ETF?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can buy {etf.ticker} through your brokerage account as you would buy a regular stock. The ETF trades on Indian stock exchanges during market hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What are the tax implications?
                    </AccordionTrigger>
                    <AccordionContent>
                      ETFs are generally more tax efficient than mutual funds. Capital gains from ETFs held for more than one year are treated as long-term capital gains. Please consult with a tax professional for advice specific to your situation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Is this ETF suitable for me?
                    </AccordionTrigger>
                    <AccordionContent>
                      This ETF has a {etf.risk.toLowerCase()} risk profile and is suggested for {etf.useCase.toLowerCase() || 'various investment strategies'}. Whether it's suitable depends on your investment goals, risk tolerance, and time horizon. Consider consulting with a financial advisor.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ETFDetail;
