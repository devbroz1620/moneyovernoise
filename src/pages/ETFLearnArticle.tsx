
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';
import { Comments } from '@/components/shared/Comments';

const ETFLearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // ETF articles data - moved from previous structure
  const etfArticles: Record<string, any> = {
    'what-are-etfs': {
      title: 'What are ETFs? A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of Exchange-Traded Funds, how they work, and why they\'re perfect for Indian investors starting their investment journey.',
      readingTime: '8 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Basics', 'Investment', 'Beginner'],
      content: `
        <h2>What is an ETF?</h2>
        <p>An Exchange-Traded Fund (ETF) is a type of investment fund that trades on stock exchanges like individual stocks. ETFs hold a diversified portfolio of assets such as stocks, bonds, or commodities, and they aim to track the performance of a specific index, sector, or investment strategy.</p>
        
        <h3>Key Features of ETFs</h3>
        <ul>
          <li><strong>Diversification:</strong> ETFs provide instant diversification by holding multiple securities in a single fund</li>
          <li><strong>Low Costs:</strong> Most ETFs have lower expense ratios compared to actively managed mutual funds</li>
          <li><strong>Liquidity:</strong> ETFs can be bought and sold during market hours, providing flexibility</li>
          <li><strong>Transparency:</strong> Holdings are disclosed daily, so you know exactly what you own</li>
        </ul>
        
        <h2>How ETFs Work</h2>
        <p>ETFs work by pooling money from many investors to buy a basket of securities. The fund is divided into shares, which are then traded on the stock exchange. The price of ETF shares fluctuates throughout the trading day based on the value of the underlying assets.</p>
        
        <h3>Types of ETFs Available in India</h3>
        <ul>
          <li><strong>Equity ETFs:</strong> Track stock market indices like Nifty 50 or Sensex</li>
          <li><strong>Debt ETFs:</strong> Invest in government and corporate bonds</li>
          <li><strong>Gold ETFs:</strong> Track the price of gold</li>
          <li><strong>International ETFs:</strong> Provide exposure to foreign markets</li>
        </ul>
        
        <h2>Why Choose ETFs?</h2>
        <p>ETFs are particularly suitable for Indian investors because they offer:</p>
        <ul>
          <li>Professional management at low cost</li>
          <li>Easy way to invest in entire market segments</li>
          <li>Tax efficiency compared to mutual funds</li>
          <li>No minimum investment requirements beyond the share price</li>
        </ul>
        
        <blockquote>
          <p>"ETFs democratize investing by making diversified portfolios accessible to everyone, regardless of the size of their investment."</p>
        </blockquote>
      `
    },
    'etf-vs-mutual-funds': {
      title: 'ETFs vs Mutual Funds: Which is Better for You?',
      description: 'A detailed comparison between ETFs and mutual funds, covering costs, flexibility, tax efficiency, and which option suits different investor profiles.',
      readingTime: '10 min read',
      category: 'Intermediate',
      tags: ['ETFs', 'Mutual Funds', 'Comparison', 'Investment Strategy'],
      content: `
        <h2>Understanding the Key Differences</h2>
        <p>Both ETFs and mutual funds pool money from multiple investors to create diversified portfolios, but they differ in structure, costs, and how they're traded.</p>
        
        <h3>Trading and Liquidity</h3>
        <table>
          <tr>
            <th>Feature</th>
            <th>ETFs</th>
            <th>Mutual Funds</th>
          </tr>
          <tr>
            <td>Trading</td>
            <td>Real-time during market hours</td>
            <td>Once daily after market close</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>Market price (may differ from NAV)</td>
            <td>NAV-based pricing</td>
          </tr>
          <tr>
            <td>Minimum Investment</td>
            <td>Price of one share</td>
            <td>₹500 to ₹5,000 typically</td>
          </tr>
        </table>
        
        <h2>Cost Comparison</h2>
        <p>ETFs generally have lower expense ratios due to their passive management structure:</p>
        <ul>
          <li><strong>ETF Expense Ratios:</strong> 0.05% to 0.75% annually</li>
          <li><strong>Mutual Fund Expense Ratios:</strong> 0.5% to 2.5% annually</li>
          <li><strong>Transaction Costs:</strong> ETFs may have brokerage fees, mutual funds may have entry/exit loads</li>
        </ul>
        
        <h3>Tax Efficiency</h3>
        <p>ETFs typically offer better tax efficiency:</p>
        <ul>
          <li>Lower portfolio turnover reduces capital gains distributions</li>
          <li>In-kind redemptions minimize taxable events</li>
          <li>More control over when to realize gains or losses</li>
        </ul>
        
        <h2>Which Should You Choose?</h2>
        <p><strong>Choose ETFs if you:</strong></p>
        <ul>
          <li>Want lower costs and fees</li>
          <li>Prefer trading flexibility</li>
          <li>Are comfortable with market-based pricing</li>
          <li>Want tax efficiency</li>
        </ul>
        
        <p><strong>Choose Mutual Funds if you:</strong></p>
        <ul>
          <li>Want active professional management</li>
          <li>Prefer systematic investment plans (SIPs)</li>
          <li>Don't mind paying higher fees for active management</li>
          <li>Want fractional share investing</li>
        </ul>
      `
    },
    // Add more articles as needed
    'building-etf-portfolio': {
      title: 'How to Build a Diversified ETF Portfolio',
      description: 'Step-by-step guide to creating a well-balanced ETF portfolio that matches your risk tolerance and investment goals.',
      readingTime: '12 min read',
      category: 'Intermediate',
      tags: ['Portfolio', 'Diversification', 'Asset Allocation', 'Strategy'],
      content: `
        <h2>Portfolio Construction Basics</h2>
        <p>Building a diversified ETF portfolio requires understanding your investment goals, risk tolerance, and time horizon. A well-constructed portfolio should balance growth potential with risk management.</p>
        
        <h3>Step 1: Determine Your Asset Allocation</h3>
        <p>Asset allocation is the foundation of portfolio construction:</p>
        <ul>
          <li><strong>Conservative (Age 50+):</strong> 30% Equity, 60% Debt, 10% Gold</li>
          <li><strong>Moderate (Age 30-50):</strong> 60% Equity, 30% Debt, 10% Gold</li>
          <li><strong>Aggressive (Age 20-30):</strong> 80% Equity, 15% Debt, 5% Gold</li>
        </ul>
        
        <h2>Core ETF Holdings</h2>
        <p>Start with core holdings that provide broad market exposure:</p>
        <ul>
          <li><strong>Large Cap ETF:</strong> Nifty 50 or Sensex ETF (40-50% of equity allocation)</li>
          <li><strong>Mid/Small Cap ETF:</strong> Nifty Next 50 or broader index (10-20% of equity)</li>
          <li><strong>Debt ETF:</strong> Government or corporate bond ETF</li>
          <li><strong>Gold ETF:</strong> Physical gold exposure</li>
        </ul>
        
        <h3>Satellite Holdings</h3>
        <p>Add satellite holdings for specific exposure:</p>
        <ul>
          <li>Sector-specific ETFs (Technology, Banking, Pharma)</li>
          <li>International ETFs for global diversification</li>
          <li>Thematic ETFs (ESG, Dividend-focused)</li>
        </ul>
        
        <h2>Rebalancing Strategy</h2>
        <p>Regular rebalancing maintains your target allocation:</p>
        <ul>
          <li>Review portfolio quarterly</li>
          <li>Rebalance when allocation deviates by 5% or more</li>
          <li>Consider tax implications when rebalancing</li>
        </ul>
        
        <blockquote>
          <p>"Diversification is the only free lunch in investing. Don't put all your eggs in one basket."</p>
        </blockquote>
      `
    }
  };
  
  if (!slug || !etfArticles[slug]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ArrowLeft className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/etfs" onClick={() => window.scrollTo(0, 0)}>Back to ETFs</Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  const article = etfArticles[slug];

  return (
    <MainLayout>
      <div className={`container ${isMobile ? 'py-4' : 'py-8'}`}>
        <Button variant="ghost" asChild className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to ETF Learning
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className={`flex flex-wrap items-center gap-3 mb-4 ${isMobile ? 'gap-2 mb-3' : 'gap-3 mb-4'}`}>
              <Badge variant="outline" className={isMobile ? 'text-xs' : ''}>
                {article.category}
              </Badge>
              <div className={`flex items-center text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'}`}>
                <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                {article.readingTime}
              </div>
            </div>
            
            <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl mb-4'}`}>
              {article.title}
            </h1>
            
            <p className={`text-muted-foreground mb-6 leading-relaxed ${isMobile ? 'text-base mb-4' : 'text-xl mb-6'}`}>
              {article.description}
            </p>
          </header>

          {/* Content */}
          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            <style>{`
              .prose {
                line-height: 1.8;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
              }
              
              .prose h2 {
                margin-top: 2.5em;
                margin-bottom: 1em;
                font-size: ${isMobile ? '1.5em' : '1.75em'};
                font-weight: 700;
                line-height: 1.3;
                color: hsl(var(--foreground));
              }
              
              .prose h3 {
                margin-top: 2em;
                margin-bottom: 0.75em;
                font-size: ${isMobile ? '1.25em' : '1.5em'};
                font-weight: 600;
                line-height: 1.4;
                color: hsl(var(--foreground));
              }
              
              .prose p {
                margin-bottom: 1.75em;
                line-height: 1.8;
                font-size: ${isMobile ? '16px' : '18px'};
                color: hsl(var(--foreground));
              }
              
              .prose ul, .prose ol {
                margin-bottom: 1.75em;
                padding-left: 1.5em;
              }
              
              .prose li {
                margin-bottom: 0.75em;
                line-height: 1.7;
                font-size: ${isMobile ? '16px' : '18px'};
                position: relative;
                color: hsl(var(--foreground));
              }
              
              .prose ul li {
                list-style: none;
                padding-left: 1.5em;
              }
              
              .prose ul li:before {
                content: "•";
                color: hsl(var(--primary));
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 1.2em;
                line-height: 1.4;
              }
              
              .prose ol li {
                padding-left: 0.5em;
              }
              
              .prose strong {
                font-weight: 600;
                color: hsl(var(--foreground));
              }
              
              .prose blockquote {
                margin: 2.5em 0;
                padding: 1.5em;
                background: hsl(var(--muted));
                border-left: 4px solid hsl(var(--primary));
                border-radius: 0 8px 8px 0;
                font-style: italic;
              }
              
              .prose blockquote p {
                color: hsl(var(--muted-foreground));
              }
              
              .prose table {
                width: 100%;
                border-collapse: collapse;
                margin: 2em 0;
                font-size: ${isMobile ? '14px' : '16px'};
                overflow-x: auto;
                display: block;
                white-space: nowrap;
              }
              
              @media (min-width: 768px) {
                .prose table {
                  display: table;
                  white-space: normal;
                }
              }
              
              .prose th, .prose td {
                padding: ${isMobile ? '8px 6px' : '12px 16px'};
                text-align: left;
                border-bottom: 1px solid hsl(var(--border));
              }
              
              .prose th {
                font-weight: 600;
                background: hsl(var(--muted));
                font-size: ${isMobile ? '13px' : '15px'};
              }
              
              .prose td {
                font-size: ${isMobile ? '13px' : '15px'};
              }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Comments Section */}
          <div className={`mt-12 ${isMobile ? 'mt-8' : 'mt-12'}`}>
            <Comments />
          </div>

          {/* Footer Navigation */}
          <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Link>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
                  Found this helpful?
                </span>
                <ShareButton 
                  title={article.title}
                  url={`${window.location.origin}/etfs/learn/${slug}`}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </footer>
        </article>
      </div>
    </MainLayout>
  );
};

export default ETFLearnArticle;
