
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const handleLearnClick = () => {
    window.scrollTo(0, 0);
  };

  const handleExploreClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-primary/5 border-t border-b py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start investing in ETFs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Use our screener to find the perfect ETFs for your investment goals, or deepen your knowledge with our educational resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/learn" onClick={handleLearnClick}>Learn More About ETFs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/list/etfs" onClick={handleExploreClick}>Explore ETF Screener</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
