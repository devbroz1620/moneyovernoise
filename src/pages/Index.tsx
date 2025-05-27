
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, TrendingUp, Brain, CreditCard, Mail, CheckCircle } from 'lucide-react';
import { learnArticles } from '@/data/learnData';

const Index = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const etfArticles = Object.values(learnArticles).slice(0, 3);
  
  // Mock psychology articles for demonstration
  const psychologyArticles = [
    {
      id: 'fomo-investing',
      title: 'Why FOMO Makes You a Bad Investor',
      description: 'Understanding how fear of missing out destroys long-term wealth building.',
      category: 'Psychology'
    },
    {
      id: 'social-media-money',
      title: 'How Social Media is Ruining Your Money Decisions',
      description: 'The hidden psychology behind why Instagram makes you spend more.',
      category: 'Psychology'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Simplifying Money for You
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              No jargon. No noise. Just clear, honest money content for Indian investors.
            </p>
            <Button asChild size="lg" className="font-medium text-lg px-8 py-6">
              <Link to="/etfs/learn" onClick={handleScrollToTop}>
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Category Cards */}
      <section className="container py-8 md:py-12">
        <h2 className="text-3xl font-bold text-center mb-12">What Would You Like to Learn?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
            <Link to="/etfs" onClick={handleScrollToTop}>
              <CardHeader className="text-center pb-4">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">ETFs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Master ETF investing with comprehensive guides and tools
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Explore ETF Guides
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Link>
          </Card>

          <Card className="group transition-all duration-300 border-2 opacity-60">
            <CardHeader className="text-center pb-4">
              <div className="rounded-full bg-gray-50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-gray-500" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <CardTitle className="text-xl">Debt</CardTitle>
                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Learn debt investing strategies and fixed income instruments
              </p>
              <span className="text-gray-500 font-medium">
                Coming Soon: Learn Debt Investing
              </span>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
            <Link to="/psychology" onClick={handleScrollToTop}>
              <CardHeader className="text-center pb-4">
                <div className="rounded-full bg-purple-50 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Psychology of Money</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Understand how psychology affects your financial decisions
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Decode How We Think About Money
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Why MoneyOverNoise */}
      <section className="container py-8 md:py-12 bg-muted/30 rounded-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why MoneyOverNoise?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Simple & Clear</h3>
              <p className="text-sm text-muted-foreground">We simplify money so anyone can understand it</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">No Hidden Agendas</h3>
              <p className="text-sm text-muted-foreground">No hype, no hidden agendas</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">India Focused</h3>
              <p className="text-sm text-muted-foreground">Built for real Indian investors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Research Backed</h3>
              <p className="text-sm text-muted-foreground">Backed by research, explained like you're 5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container py-8 md:py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {etfArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link to={`/etfs/learn/${article.slug}`} onClick={handleScrollToTop}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-blue-500 text-blue-700 bg-blue-50">
                      ETFs
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
          
          {psychologyArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link to={`/psychology/${article.id}`} onClick={handleScrollToTop}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-700 bg-purple-50">
                      Psychology
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/etfs/learn" onClick={handleScrollToTop}>
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="bg-primary/5 border-t border-b py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of the Noise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of Indians who prefer clarity over chaos when it comes to their money.
            </p>
            <Button size="lg" className="font-medium">
              Get Weekly Money Insights
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, just valuable insights delivered to your inbox every week.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
