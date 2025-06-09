import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const FeatureSection = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return <section className="container md:py-16 py-0 rounded-none bg-transparent">
      
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Comprehensive Screener</h3>
          <p className="mb-4 text-muted-foreground">
            Find the perfect ETF for your portfolio with our data-rich screener. Filter by returns, expense ratio, volume, and more.
          </p>
          <Button asChild variant="link" className="p-0" onClick={handleScrollToTop}>
            <Link to="/etfs/screener">Explore ETFs →</Link>
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Educational Content</h3>
          <p className="mb-4 text-muted-foreground">
            Learn everything about ETFs through easy-to-understand articles and guides tailored for Indian investors.
          </p>
          <Button asChild variant="link" className="p-0" onClick={handleScrollToTop}>
            <Link to="/etfs/learn">Start Learning →</Link>
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">India Focused</h3>
          <p className="mb-4 text-muted-foreground">
            Data, insights, and recommendations specifically tailored for Indian investors and the Indian ETF market.
          </p>
          <Button asChild variant="link" className="p-0" onClick={handleScrollToTop}>
            <Link to="/etfs/screener">Discover Indian ETFs →</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default FeatureSection;