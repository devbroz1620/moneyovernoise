
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';

const articles = [
  {
    title: "What is an ETF?",
    slug: "what-is-an-etf",
    description: "An introduction to Exchange Traded Funds and how they work.",
    readingTime: "5 min",
    category: "Beginner",
    tags: ["Basics", "Introduction"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    title: "Thematic ETFs: Investing in Trends",
    slug: "thematic",
    description: "How to invest in specific market themes and trends using ETFs.",
    readingTime: "7 min",
    category: "Intermediate",
    tags: ["Thematic", "Sector"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
  },
  {
    title: "Understanding Liquidity & Volatility",
    slug: "liquidity-volatility",
    description: "Learn how liquidity and volatility impact ETF performance and trading.",
    readingTime: "8 min",
    category: "Intermediate",
    tags: ["Analysis", "Trading"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
  },
  {
    title: "Asset Allocation with ETFs",
    slug: "asset-allocation",
    description: "How to build a diversified portfolio using different ETF classes.",
    readingTime: "10 min",
    category: "Advanced",
    tags: ["Strategy", "Portfolio"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
];

const Learn = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Learn About ETFs"
          description="Expand your knowledge with our educational resources on Exchange Traded Funds."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/learn", label: "Learn", isCurrent: true },
          ]}
        />

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
                    <Badge variant="outline" className={
                      article.category === 'Beginner' ? 'bg-green-50 border-green-200 text-green-700' :
                      article.category === 'Intermediate' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                      'bg-purple-50 border-purple-200 text-purple-700'
                    }>
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
      </div>
    </MainLayout>
  );
};

export default Learn;
