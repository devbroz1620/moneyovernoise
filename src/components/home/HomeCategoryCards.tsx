
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, TrendingUp, Brain, CreditCard, PiggyBank } from 'lucide-react';

export interface HomeCategoryCardsProps {
  handleScrollToTop: () => void;
}

const HomeCategoryCards = ({ handleScrollToTop }: HomeCategoryCardsProps) => (
  <section className="container py-4 md:py-8">
    <h2 className="text-xl md:text-2xl font-bold text-center mb-8">What Would You Like to Learn?</h2>
    <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
      {/* ETFs CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 flex flex-col">
        <Link to="/etfs" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-blue-50 dark:bg-blue-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
              <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl">ETFs</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1">
            <p className="text-muted-foreground mb-4 flex-grow">
              Master ETF investing with comprehensive guides and tools
            </p>
            <span className="text-primary font-medium inline-flex items-center mt-auto">
              Explore ETF Guides
              <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </CardContent>
        </Link>
      </Card>
      {/* Debt CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 flex flex-col">
        <Link to="/debt" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-orange-50 dark:bg-orange-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
              <CreditCard className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle className="text-xl">Debt</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1">
            <p className="text-muted-foreground mb-4 flex-grow">
              Learn debt investing strategies and fixed income instruments
            </p>
            <span className="text-primary font-medium inline-flex items-center mt-auto">
              Explore Debt Investing
              <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </CardContent>
        </Link>
      </Card>
      {/* Mind Over Money CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 flex flex-col">
        <Link to="/psychology" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-purple-50 dark:bg-purple-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors">
              <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-xl">Mind Over Money</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1">
            <p className="text-muted-foreground mb-4 flex-grow">
              Understand how psychology affects your financial decisions
            </p>
            <span className="text-primary font-medium inline-flex items-center mt-auto">
              Money Habits Decoded
              <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </CardContent>
        </Link>
      </Card>
      {/* MONEY BASICS CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 flex flex-col">
        <Link to="/money-basics" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-primary/10 dark:bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/20 transition-colors">
              <PiggyBank className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Money Basics</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1">
            <p className="text-muted-foreground mb-4 flex-grow">
              Core personal finance topics for your foundation
            </p>
            <span className="text-primary font-medium inline-flex items-center mt-auto">
              Explore Money Basics
              <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </CardContent>
        </Link>
      </Card>
    </div>
  </section>
);

export default HomeCategoryCards;
