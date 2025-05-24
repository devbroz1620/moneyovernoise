import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NotionArticle } from '@/types/notion';

// Local articles data
const articles: Record<string, NotionArticle> = {
  'what-is-an-etf': {
    id: 'what-is-an-etf',
    title: 'What is an ETF?',
    slug: 'what-is-an-etf',
    description: 'An introduction to Exchange Traded Funds and how they work.',
    readingTime: '5 min',
    category: 'Beginner',
    tags: ['Basics', 'Introduction'],
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
    `,
    relatedArticles: ['thematic', 'liquidity-volatility', 'why-etfs-are-great-for-beginners'],
    nextArticle: {
      title: 'Why ETFs are Great for Beginners',
      slug: 'why-etfs-are-great-for-beginners',
    },
  },
  'why-etfs-are-great-for-beginners': {
    id: 'why-etfs-are-great-for-beginners',
    title: 'Why ETFs are Great for Beginners',
    slug: 'why-etfs-are-great-for-beginners',
    description: 'Explore why Exchange Traded Funds are ideal for new investors stepping into the world of stock markets.',
    readingTime: '5 min',
    category: 'Beginner',
    tags: ['Beginners', 'Strategy', 'Diversification'],
    image: 'https://images.unsplash.com/photo-1556742400-b5c4ae9d8b39?w=800',
    content: `
      <h2>Why Beginners Should Consider ETFs</h2>
      <p>Getting started in the stock market can feel overwhelming — with thousands of stocks, market jargon, and fear of losses. Exchange Traded Funds (ETFs) offer a simple and low-risk entry point for beginners who want to learn by doing without betting on a single stock.</p>

      <p>ETFs combine the best of both worlds: diversification like mutual funds and flexibility like stocks. With a small amount of money, you can get exposure to a wide basket of assets, reducing your risk.</p>

      <h3>Benefits of ETFs for Beginners</h3>
      <ul>
        <li><strong>Easy Diversification:</strong> Buying one ETF can give exposure to 50–100+ companies across sectors or an index like Nifty 50.</li>
        <li><strong>Low Minimum Investment:</strong> Most ETFs on Indian exchanges can be purchased for under ₹100 — making it beginner-friendly.</li>
        <li><strong>No Lock-ins:</strong> Unlike ELSS or some mutual funds, you can exit anytime during market hours.</li>
        <li><strong>Low Expense Ratios:</strong> ETFs generally charge lower annual fees than actively managed mutual funds.</li>
        <li><strong>Transparency:</strong> You always know what's inside the ETF since holdings are disclosed daily.</li>
      </ul>

      <h3>Example: Instead of Picking a Stock, Pick the Market</h3>
      <p>Let's say you want to invest in Indian large-cap companies but don't know which stock to choose. A Nifty 50 ETF lets you invest in all top 50 companies in one shot. If the overall index grows, so does your investment.</p>

      <h3>How to Start with ETFs</h3>
      <ol>
        <li>Open a demat account with any stock broker.</li>
        <li>Search for ETFs like 'NiftyBees', 'BankBees', 'ICICI Sensex ETF', etc.</li>
        <li>Place a buy order just like you would for a stock.</li>
        <li>Track performance through your broker's app or a tool like MoneyOverNoise.</li>
      </ol>

      <p>For beginners, ETFs offer a safe, structured, and educational way to build wealth — one step at a time.</p>
    `,
    relatedArticles: ["what-is-an-etf", "thematic"],
    nextArticle: {
      title: "Thematic ETFs: Investing in Trends",
      slug: "thematic",
    },
  },
  'thematic': {
    id: 'thematic',
    title: 'Thematic ETFs: Investing in Trends',
    slug: 'thematic',
    description: 'How to invest in specific market themes and trends using ETFs.',
    readingTime: '7 min',
    category: 'Intermediate',
    tags: ['Thematic', 'Sector'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    content: `
      <h2>Investing in Market Themes and Trends</h2>
      <p>Thematic ETFs represent one of the most exciting developments in the ETF landscape. These specialized funds allow investors to target specific market themes, trends, sectors, or investment strategies through a single instrument.</p>
      
      <p>Unlike broad market ETFs that provide exposure to entire indices, thematic ETFs focus on companies involved in specific business activities or technological innovations like artificial intelligence, clean energy, or digital payments.</p>
      
      <h3>Understanding Thematic ETFs</h3>
      <p>Thematic investing allows you to put your money behind your convictions about future trends and technological developments. It's a way to invest in the future while maintaining the benefits of diversification.</p>
      
      <p>These ETFs typically include companies across multiple traditional sectors and market capitalizations that share a common theme. For example, a "Future Mobility" thematic ETF might include automakers, battery manufacturers, semiconductor companies, and software providers all involved in the electric and autonomous vehicle revolution.</p>
    `,
    relatedArticles: ['what-is-an-etf', 'liquidity-volatility', 'why-etfs-are-great-for-beginners'],
    nextArticle: {
      title: 'Understanding Liquidity & Volatility',
      slug: 'liquidity-volatility',
    },
  },
  'liquidity-volatility': {
    id: 'liquidity-volatility',
    title: 'Understanding Liquidity & Volatility',
    slug: 'liquidity-volatility',
    description: 'Learn how liquidity and volatility impact ETF performance and trading.',
    readingTime: '8 min',
    category: 'Intermediate',
    tags: ['Analysis', 'Trading'],
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
    `,
    relatedArticles: ['what-is-an-etf', 'thematic'],
    nextArticle: {
      title: 'Asset Allocation with ETFs',
      slug: 'asset-allocation',
    },
  },
  'asset-allocation': {
    id: 'asset-allocation',
    title: 'Asset Allocation with ETFs',
    slug: 'asset-allocation',
    description: 'How to build a diversified portfolio using different ETF classes.',
    readingTime: '10 min',
    category: 'Advanced',
    tags: ['Strategy', 'Portfolio'],
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
    `,
    relatedArticles: ['thematic', 'liquidity-volatility'],
    nextArticle: null,
  }
};

const LearnArticle = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const article = articles[slug];

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
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title={article.title}
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
            {article.relatedArticles.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {article.relatedArticles.map((relatedSlug) => {
                      const relatedArticle = articles[relatedSlug];
                      if (!relatedArticle) return null;
                      
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
            )}
            
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
