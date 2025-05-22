
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample article data - would come from a real API or CMS
const articles = {
  'what-is-an-etf': {
    title: 'What is an ETF?',
    category: 'Beginner',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    content: `
      <h2>Understanding Exchange Traded Funds</h2>
      <p>An Exchange Traded Fund (ETF) is a type of investment fund and exchange-traded product, with shares that trade on stock exchanges just like ordinary stocks. ETFs are designed to track the performance of a specific index, sector, commodity, or asset, but can be bought or sold throughout the day on a stock exchange at market price.</p>
      
      <p>ETFs offer investors a way to diversify their holdings by purchasing a single security that represents a fractional ownership interest in an entire portfolio of securities. ETFs can track various indices like the Nifty 50, Sensex, or specific industry sectors like banking or technology.</p>
      
      <h3>Key Features of ETFs</h3>
      <ul>
        <li><strong>Transparency:</strong> Most ETFs disclose their holdings daily.</li>
        <li><strong>Liquidity:</strong> ETFs can be bought and sold throughout the trading day at market prices.</li>
        <li><strong>Lower costs:</strong> ETFs generally have lower expense ratios compared to mutual funds.</li>
        <li><strong>Tax efficiency:</strong> ETFs typically generate fewer capital gains due to their structure.</li>
        <li><strong>Diversification:</strong> A single ETF can provide exposure to a broad market index or specific sectors.</li>
      </ul>
      
      <h3>How ETFs Work</h3>
      <p>ETFs operate through a unique mechanism involving authorized participants (APs) who create and redeem ETF shares. When demand for an ETF increases, APs create new shares by depositing the underlying securities with the ETF provider. When demand decreases, APs can redeem ETF shares for the underlying securities.</p>
      
      <p>This creation-redemption process helps keep the ETF's market price aligned closely with its net asset value (NAV), though slight premiums or discounts can occur.</p>
      
      <h3>Types of ETFs in India</h3>
      <p>The Indian ETF market offers various types of ETFs:</p>
      <ul>
        <li><strong>Index ETFs:</strong> Track major indices like Nifty 50 or Sensex</li>
        <li><strong>Sector ETFs:</strong> Focus on specific industries like banking or IT</li>
        <li><strong>Gold ETFs:</strong> Track the price of physical gold</li>
        <li><strong>Debt ETFs:</strong> Invest in fixed-income securities</li>
        <li><strong>International ETFs:</strong> Provide exposure to global markets</li>
      </ul>
      
      <h3>ETFs vs. Mutual Funds</h3>
      <p>While both ETFs and mutual funds offer diversified investment options, they differ in several ways:</p>
      
      <table>
        <tr>
          <th>Feature</th>
          <th>ETFs</th>
          <th>Mutual Funds</th>
        </tr>
        <tr>
          <td>Trading</td>
          <td>Throughout trading day</td>
          <td>Once per day after market close</td>
        </tr>
        <tr>
          <td>Pricing</td>
          <td>Market price (can differ slightly from NAV)</td>
          <td>NAV (calculated after market close)</td>
        </tr>
        <tr>
          <td>Minimum Investment</td>
          <td>Price of one share</td>
          <td>Specified by fund (often higher)</td>
        </tr>
        <tr>
          <td>Expense Ratios</td>
          <td>Generally lower</td>
          <td>Generally higher</td>
        </tr>
        <tr>
          <td>Tax Efficiency</td>
          <td>Higher (fewer capital gains)</td>
          <td>Lower (more capital gains distributions)</td>
        </tr>
      </table>
      
      <h3>Getting Started with ETFs</h3>
      <p>To start investing in ETFs in India, you'll need:</p>
      <ol>
        <li>A demat and trading account with a broker</li>
        <li>Understanding of which ETF matches your investment goals</li>
        <li>Knowledge of trading mechanics (market orders, limit orders)</li>
      </ol>
      
      <p>ETFs have democratized investing by offering instant diversification, lower costs, and greater flexibility compared to traditional investment vehicles.</p>
    `,
    nextArticle: {
      title: 'Thematic ETFs: Investing in Trends',
      slug: 'thematic',
    },
    relatedArticles: ['thematic', 'liquidity-volatility'],
  },
  'thematic': {
    title: 'Thematic ETFs: Investing in Trends',
    category: 'Intermediate',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    content: `
      <h2>Investing in Market Themes and Trends</h2>
      <p>Thematic ETFs represent one of the most exciting developments in the ETF landscape. These specialized funds allow investors to target specific market themes, trends, sectors, or investment strategies through a single instrument.</p>
      
      <p>Unlike broad market ETFs that provide exposure to entire indices, thematic ETFs focus on companies involved in specific business activities or technological innovations like artificial intelligence, clean energy, or digital payments.</p>
      
      <h3>Understanding Thematic ETFs</h3>
      <p>Thematic investing allows you to put your money behind your convictions about future trends and technological developments. It's a way to invest in the future while maintaining the benefits of diversification.</p>
      
      <p>These ETFs typically include companies across multiple traditional sectors and market capitalizations that share a common theme. For example, a "Future Mobility" thematic ETF might include automakers, battery manufacturers, semiconductor companies, and software providers all involved in the electric and autonomous vehicle revolution.</p>
      
      <h3>Popular Thematic ETF Categories in India</h3>
      <ul>
        <li><strong>Technology:</strong> AI, cloud computing, cybersecurity</li>
        <li><strong>Healthcare:</strong> Genomics, telehealth, medical devices</li>
        <li><strong>ESG:</strong> Environmental, social, and governance focused companies</li>
        <li><strong>Consumption:</strong> E-commerce, digital payments, consumer services</li>
        <li><strong>Infrastructure:</strong> Smart cities, digital infrastructure</li>
      </ul>
      
      <h3>Advantages of Thematic ETFs</h3>
      <ul>
        <li><strong>Targeted exposure:</strong> Access to specific themes or trends</li>
        <li><strong>Simplicity:</strong> One-stop access to a basket of relevant companies</li>
        <li><strong>Diversification within a theme:</strong> Spreading risk across multiple companies in the same theme</li>
        <li><strong>Innovation:</strong> Access to emerging technologies and business models</li>
      </ul>
      
      <h3>Risks and Considerations</h3>
      <p>While thematic ETFs offer exciting opportunities, they come with specific risks:</p>
      <ul>
        <li><strong>Higher volatility:</strong> Concentrated exposure can lead to greater price swings</li>
        <li><strong>Higher expense ratios:</strong> Specialized research and active management often result in higher fees</li>
        <li><strong>Thematic overlap:</strong> Multiple themed ETFs may contain the same underlying stocks</li>
        <li><strong>Theme durability:</strong> Some trends may be short-lived or fail to materialize as expected</li>
        <li><strong>Timing risk:</strong> Entering a theme after significant price appreciation</li>
      </ul>
      
      <h3>Evaluating Thematic ETFs</h3>
      <p>Before investing in a thematic ETF, consider:</p>
      <ol>
        <li><strong>The investment thesis:</strong> Is the theme likely to grow over time?</li>
        <li><strong>ETF construction:</strong> How are stocks selected and weighted?</li>
        <li><strong>Holdings:</strong> Do the actual holdings truly represent the stated theme?</li>
        <li><strong>Expense ratio:</strong> How much are you paying for exposure to this theme?</li>
        <li><strong>Liquidity:</strong> How easily can you buy and sell shares?</li>
        <li><strong>AUM:</strong> Is the fund large enough to survive and avoid closure?</li>
      </ol>
      
      <h3>Portfolio Integration</h3>
      <p>Most financial advisors suggest using thematic ETFs as "satellite" holdings around a core portfolio of broad market ETFs. A common approach is to allocate 10-20% of a portfolio to thematic investments while maintaining the majority in diversified index ETFs.</p>
    `,
    nextArticle: {
      title: 'Understanding Liquidity & Volatility',
      slug: 'liquidity-volatility',
    },
    relatedArticles: ['what-is-an-etf', 'liquidity-volatility'],
  },
  'liquidity-volatility': {
    title: 'Understanding Liquidity & Volatility',
    category: 'Intermediate',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
    content: `
      <h2>ETF Liquidity and Volatility Explained</h2>
      <p>Liquidity and volatility are crucial concepts for ETF investors to understand, as they directly impact trading costs, execution prices, and investment performance. This is particularly important in the Indian market where some ETFs trade with lower volume than their international counterparts.</p>
      
      <h3>Understanding ETF Liquidity</h3>
      <p>ETF liquidity refers to how easily units can be bought or sold without causing a significant impact on the price. Unlike individual stocks, ETFs have two layers of liquidity:</p>
      
      <ol>
        <li><strong>Primary liquidity:</strong> The liquidity of the underlying securities the ETF holds</li>
        <li><strong>Secondary liquidity:</strong> The trading volume of the ETF itself on the exchange</li>
      </ol>
      
      <p>This dual liquidity structure means that even ETFs with low trading volumes can be highly liquid if their underlying holdings are liquid. The creation-redemption process by Authorized Participants (APs) ensures that ETF prices remain close to their Net Asset Value (NAV).</p>
      
      <h3>Key Liquidity Metrics for ETFs</h3>
      <ul>
        <li><strong>Average daily trading volume:</strong> The average number of ETF units traded daily</li>
        <li><strong>Bid-ask spread:</strong> The difference between the highest buy price and lowest sell price</li>
        <li><strong>Creation unit size:</strong> The minimum block of ETF units that APs can create or redeem</li>
        <li><strong>Underlying asset liquidity:</strong> How easily the ETF's holdings can be bought or sold</li>
      </ul>
      
      <h3>ETF Volatility</h3>
      <p>Volatility measures the degree to which an ETF's price fluctuates over time. Higher volatility indicates larger price swings and potentially higher risk.</p>
      
      <h4>Factors Affecting ETF Volatility:</h4>
      <ul>
        <li><strong>Underlying asset volatility:</strong> The inherent volatility of the securities in the ETF</li>
        <li><strong>Market conditions:</strong> Overall market sentiment and economic factors</li>
        <li><strong>Sector or theme concentration:</strong> Focused ETFs tend to be more volatile than broad market ETFs</li>
        <li><strong>Tracking methodology:</strong> Full replication vs. sampling approaches</li>
        <li><strong>Fund structure:</strong> Physical ETFs vs. synthetic ETFs</li>
      </ul>
      
      <h3>Measuring Volatility</h3>
      <p>Common volatility metrics include:</p>
      <ul>
        <li><strong>Standard deviation:</strong> Measures dispersion of returns around the average</li>
        <li><strong>Beta:</strong> Measures an ETF's sensitivity to market movements</li>
        <li><strong>Maximum drawdown:</strong> The largest peak-to-trough decline</li>
        <li><strong>Average true range (ATR):</strong> Average price range over a specified period</li>
      </ul>
      
      <h3>Liquidity and Volatility in the Indian ETF Market</h3>
      <p>The Indian ETF market has some unique characteristics:</p>
      <ul>
        <li>Lower average trading volumes compared to developed markets</li>
        <li>Wider bid-ask spreads, especially for thematic or sector ETFs</li>
        <li>Concentration in index ETFs (Nifty 50, Sensex)</li>
        <li>Growing institutional participation improving liquidity</li>
      </ul>
      
      <h3>Practical Tips for Indian ETF Investors</h3>
      <ol>
        <li><strong>Use limit orders:</strong> Particularly for less liquid ETFs to control execution prices</li>
        <li><strong>Trade during market hours:</strong> Avoid trading near market open or close when spreads may be wider</li>
        <li><strong>Check premiums/discounts to NAV:</strong> Large deviations could indicate liquidity issues</li>
        <li><strong>Compare total costs:</strong> Consider both expense ratio and trading costs</li>
        <li><strong>Be cautious with stop-loss orders:</strong> They can trigger during temporary price swings</li>
      </ol>
      
      <h3>Managing ETF Volatility in Your Portfolio</h3>
      <ul>
        <li>Diversify across asset classes and geographies</li>
        <li>Consider volatility when determining position sizes</li>
        <li>Match investment horizon with ETF characteristics</li>
        <li>Rebalance periodically to maintain target allocations</li>
        <li>Use dollar-cost averaging for volatile ETFs</li>
      </ul>
    `,
    nextArticle: {
      title: 'Asset Allocation with ETFs',
      slug: 'asset-allocation',
    },
    relatedArticles: ['what-is-an-etf', 'thematic'],
  },
  'asset-allocation': {
    title: 'Asset Allocation with ETFs',
    category: 'Advanced',
    readingTime: '10 min',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    content: `
      <h2>Building a Diversified Portfolio with ETFs</h2>
      <p>Asset allocation is the process of dividing investments among different asset classes such as stocks, bonds, and cash to optimize returns for a given risk tolerance. ETFs have revolutionized asset allocation by providing low-cost, transparent, and liquid access to virtually every asset class, sector, and geography.</p>
      
      <h3>Why Asset Allocation Matters</h3>
      <p>Research suggests that asset allocation accounts for more than 90% of a portfolio's return variability over time. Your specific allocation should reflect your:</p>
      <ul>
        <li>Investment goals (growth, income, preservation)</li>
        <li>Time horizon (short, medium, long-term)</li>
        <li>Risk tolerance (conservative, moderate, aggressive)</li>
        <li>Liquidity needs (how quickly you might need to access funds)</li>
      </ul>
      
      <h3>Core ETF Asset Classes for Indian Investors</h3>
      
      <h4>1. Equity ETFs</h4>
      <p>Stock ETFs should typically form the growth engine of most long-term portfolios.</p>
      <ul>
        <li><strong>Broad Market:</strong> Nifty 50, Nifty 100, Sensex ETFs provide exposure to large Indian companies</li>
        <li><strong>Mid/Small Cap:</strong> Nifty Midcap 150, Nifty Smallcap 250 ETFs offer higher growth potential with higher risk</li>
        <li><strong>Factor-based:</strong> Quality, Value, Momentum ETFs target specific investment factors</li>
        <li><strong>International:</strong> US, Developed Markets, or Emerging Markets ETFs provide global diversification</li>
      </ul>
      
      <h4>2. Fixed Income ETFs</h4>
      <p>Bond ETFs provide stability, income, and diversification benefits.</p>
      <ul>
        <li><strong>Government Securities:</strong> Sovereign bonds with highest safety</li>
        <li><strong>Corporate Bonds:</strong> Higher yields with moderate credit risk</li>
        <li><strong>PSU Bonds:</strong> Quasi-government securities with good yields</li>
        <li><strong>Money Market:</strong> Short-term, high liquidity instruments</li>
      </ul>
      
      <h4>3. Gold ETFs</h4>
      <p>Gold serves as a hedge against inflation and currency depreciation while providing portfolio diversification.</p>
      
      <h4>4. Other Alternative ETFs</h4>
      <ul>
        <li><strong>Real Estate (REITs):</strong> Property exposure without direct ownership</li>
        <li><strong>International Commodities:</strong> Access global commodity markets</li>
      </ul>
      
      <h3>Sample ETF Allocation Models for Indian Investors</h3>
      
      <h4>Conservative Allocation (Lower Risk)</h4>
      <ul>
        <li>40% Equity ETFs (30% Large Cap, 5% Mid/Small Cap, 5% International)</li>
        <li>50% Fixed Income ETFs (25% Govt Securities, 25% Corporate/PSU Bonds)</li>
        <li>10% Gold ETFs</li>
      </ul>
      
      <h4>Moderate Allocation (Balanced Risk)</h4>
      <ul>
        <li>60% Equity ETFs (40% Large Cap, 10% Mid/Small Cap, 10% International)</li>
        <li>30% Fixed Income ETFs (15% Govt Securities, 15% Corporate/PSU Bonds)</li>
        <li>10% Gold ETFs</li>
      </ul>
      
      <h4>Aggressive Allocation (Higher Risk)</h4>
      <ul>
        <li>80% Equity ETFs (40% Large Cap, 25% Mid/Small Cap, 15% International)</li>
        <li>15% Fixed Income ETFs</li>
        <li>5% Gold ETFs</li>
      </ul>
      
      <h3>Implementation Strategies</h3>
      
      <h4>1. Core-Satellite Approach</h4>
      <p>Build a portfolio with:</p>
      <ul>
        <li><strong>Core holdings (70-80%):</strong> Broad-based index ETFs for stable exposure</li>
        <li><strong>Satellite positions (20-30%):</strong> Thematic or sector ETFs for targeted opportunities</li>
      </ul>
      
      <h4>2. Risk Parity</h4>
      <p>Allocate assets based on their risk contribution rather than rupee amounts. This typically results in more allocation to bonds and less to equities than traditional models.</p>
      
      <h4>3. Age-Based Allocation</h4>
      <p>A simple rule: Subtract your age from 100 to determine your equity allocation percentage. For example, a 30-year-old would have 70% in equities, while a 60-year-old would have 40% in equities.</p>
      
      <h3>Rebalancing Your ETF Portfolio</h3>
      <p>As market movements cause your asset allocation to drift from targets, periodic rebalancing is essential:</p>
      <ul>
        <li><strong>Calendar rebalancing:</strong> Review quarterly, semi-annually, or annually</li>
        <li><strong>Threshold rebalancing:</strong> Rebalance when allocations drift beyond predetermined percentage points (e.g., ±5%)</li>
        <li><strong>Tax-efficient rebalancing:</strong> Utilize new investments to restore target allocations instead of selling existing positions</li>
      </ul>
      
      <h3>Reviewing and Adjusting Your Allocation</h3>
      <p>Your asset allocation should evolve with changing circumstances:</p>
      <ul>
        <li>Shift to more conservative allocations as you approach financial goals</li>
        <li>Adjust based on significant life changes (marriage, children, retirement)</li>
        <li>Consider macroeconomic environments (high inflation might warrant more TIPS or gold)</li>
        <li>Review new ETF offerings that might provide better implementation options</li>
      </ul>
    `,
    nextArticle: null,
    relatedArticles: ['thematic', 'liquidity-volatility'],
  }
};

const LearnArticle = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const article = articles[slug as keyof typeof articles];
  
  if (!article) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
            Article not found.
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/learn">Back to Learn</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Beginner':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'Intermediate':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'Advanced':
        return 'bg-purple-50 border-purple-200 text-purple-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/learn", label: "Learn" },
            { href: `/learn/etfs/${slug}`, label: article.title, isCurrent: true },
          ]}
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{article.readingTime} read</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            </div>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {article.relatedArticles.map((relatedSlug) => {
                    const relatedArticle = articles[relatedSlug as keyof typeof articles];
                    return (
                      <Link 
                        key={relatedSlug} 
                        to={`/learn/etfs/${relatedSlug}`}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {relatedArticle.readingTime} read
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {article.nextArticle && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-2">Continue Learning</h3>
                  <p className="text-sm text-muted-foreground mb-4">Next article in this series</p>
                  
                  <Link 
                    to={`/learn/etfs/${article.nextArticle.slug}`}
                    className="flex flex-col space-y-2"
                  >
                    <span className="font-medium hover:text-primary transition-colors">
                      {article.nextArticle.title}
                    </span>
                    <Button variant="outline" className="w-full">Read Next Article</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearnArticle;
