
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleLearnClick = () => {
    window.scrollTo(0, 0);
  };

  const handleExploreClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                Master ETFs.
                <br />
                <span className="text-primary">Invest Smart.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                India's premier ETF learning and screening platform. Find the right investments with data-driven insights explained simply.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-medium text-primary-foreground bg-primary hover:bg-primary/90">
                <Link to="/etfs/learn" onClick={handleLearnClick}>
                  Learn ETFs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-medium border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                <Link to="/etfs/screener" onClick={handleExploreClick}>
                  ETF Screener
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 bg-muted rounded-lg p-8 shadow-lg">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30 p-8 h-full flex flex-col justify-center">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Data-Driven Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive metrics and filtering to find the perfect ETF.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Educational Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn everything about ETFs through simple, practical articles.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">India Focused</h3>
                    <p className="text-sm text-muted-foreground">
                      Specifically built for Indian investors and the Indian market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
