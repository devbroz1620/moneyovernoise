
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import { NotionArticle } from '@/types/notion';
import { getArticles } from '@/services/notionService';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotionConnectionTest from '@/components/shared/NotionConnectionTest';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

// Demo articles data to use as fallback
const demoArticles: NotionArticle[] = [
  {
    id: '1',
    title: "What is an ETF?",
    slug: "what-is-an-etf",
    description: "An introduction to Exchange Traded Funds and how they work.",
    readingTime: "5 min",
    category: "Beginner",
    tags: ["Basics", "Introduction"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    content: "",
    relatedArticles: ["thematic", "liquidity-volatility"],
    nextArticle: {
      title: "Thematic ETFs: Investing in Trends",
      slug: "thematic",
    },
  },
  {
    id: '2',
    title: "Thematic ETFs: Investing in Trends",
    slug: "thematic",
    description: "How to invest in specific market themes and trends using ETFs.",
    readingTime: "7 min",
    category: "Intermediate",
    tags: ["Thematic", "Sector"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    content: "",
    relatedArticles: ["what-is-an-etf", "liquidity-volatility"],
    nextArticle: {
      title: "Understanding Liquidity & Volatility",
      slug: "liquidity-volatility",
    },
  },
  {
    id: '3',
    title: "Understanding Liquidity & Volatility",
    slug: "liquidity-volatility",
    description: "Learn how liquidity and volatility impact ETF performance and trading.",
    readingTime: "8 min",
    category: "Intermediate",
    tags: ["Analysis", "Trading"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
    content: "",
    relatedArticles: ["what-is-an-etf", "thematic"],
    nextArticle: {
      title: "Asset Allocation with ETFs",
      slug: "asset-allocation",
    },
  },
  {
    id: '4',
    title: "Asset Allocation with ETFs",
    slug: "asset-allocation",
    description: "How to build a diversified portfolio using different ETF classes.",
    readingTime: "10 min",
    category: "Advanced",
    tags: ["Strategy", "Portfolio"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    content: "",
    relatedArticles: ["thematic", "liquidity-volatility"],
    nextArticle: null,
  },
];

const Learn = () => {
  const [articles, setArticles] = useState<NotionArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showConnectionTest, setShowConnectionTest] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const fetchArticles = async (showToast = false) => {
    setLoading(!refreshing);
    if (refreshing) setRefreshing(true);
    
    try {
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles.length > 0 ? fetchedArticles : demoArticles);
      setError(null);
      
      if (showToast) {
        toast({
          title: "Content refreshed",
          description: `Loaded ${fetchedArticles.length} articles from Notion`,
        });
      }
      
      if (fetchedArticles.length === 0) {
        setError('No articles found in your Notion database. Showing demo content instead.');
        setShowConnectionTest(true);
      }
    } catch (err: any) {
      console.error('Error fetching articles:', err);
      const errorMessage = err?.message || 'Failed to load articles. Please check your Notion connection.';
      setError(errorMessage);
      
      // Fall back to demo data if API fails
      setArticles(demoArticles);
      // Show connection test if there's an error
      setShowConnectionTest(true);
      
      if (showToast) {
        toast({
          variant: "destructive",
          title: "Refresh failed",
          description: errorMessage,
        });
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleRefresh = () => {
    fetchArticles(true);
  };

  const getCategoryStyle = (category: string) => {
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
        <div className="flex justify-between items-start mb-6">
          <PageHeader
            title="Learn About ETFs"
            description="Expand your knowledge with our educational resources on Exchange Traded Funds."
            breadcrumbs={[
              { href: "/", label: "Home" },
              { href: "/learn", label: "Learn", isCurrent: true },
            ]}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={loading || refreshing}
            className="mt-2"
          >
            {refreshing ? (
              <Loader2 className="h-4 w-4 animate-spin mr-1" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-1" />
            )}
            Refresh Content
          </Button>
        </div>

        {showConnectionTest && (
          <div className="mb-8">
            <NotionConnectionTest />
          </div>
        )}

        {error && !showConnectionTest && (
          <Alert variant="warning" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Content Issue</AlertTitle>
            <AlertDescription className="flex justify-between items-center">
              <span>{error}</span>
              <Button onClick={() => setShowConnectionTest(true)} variant="outline" size="sm">
                Test Connection
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {loading && !refreshing ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-lg">Loading articles...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} to={`/learn/etfs/${article.slug}`}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className={getCategoryStyle(article.category)}>
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readingTime} read</span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
        
        {!loading && articles.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No articles found. Please check your Notion connection and database.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Learn;
