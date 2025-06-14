
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface HomeETFStatsSectionProps {
  handleScrollToTop: () => void;
}

const HomeETFStatsSection = ({ handleScrollToTop }: HomeETFStatsSectionProps) => (
  <section className="container py-6 md:py-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 border border-primary/20">
        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-2">
          <span className="font-bold text-2xl md:text-3xl text-primary">80%</span> of active mutual funds in India underperformed their benchmark over the last 5 years.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          In contrast, <span className="font-semibold text-foreground">ETFs</span> — the passive investing alternative — have quietly gained trust, transparency, and traction.
        </p>
        <Button asChild size="lg" className="font-medium">
          <Link to="/etfs/learn" onClick={handleScrollToTop}>
            Learn about ETFs
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HomeETFStatsSection;
