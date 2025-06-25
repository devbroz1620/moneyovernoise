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
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <Link to="/etfs" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-blue-50 dark:bg-blue-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
              <TrendingUp className="h-8 w-8 stroke-blue-600 dark:stroke-blue-400" fill="none" />
            </div>
            <CardTitle className="text-xl">Exchange Traded Funds (ETFs)</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1 justify-between">
            <p className="text-muted-foreground mb-4">
              Invest in a basket of stocks, easily with ETFs.
            </p>
            <Button variant="default" className="w-full h-12 mt-auto font-medium flex items-center justify-center">
              Explore ETF Guides <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Link>
      </Card>
      {/* Debt CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <Link to="/debt" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-orange-50 dark:bg-orange-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
              <img src="/debt.png" alt="Debt Icon" className="w-8 h-8 object-contain" />
            </div>
            <CardTitle className="text-xl">Debt</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1 justify-between">
            <p className="text-muted-foreground mb-4">
              Lend money and get regular interest.
            </p>
            <Button variant="default" className="w-full h-12 mt-auto font-medium flex items-center justify-center">
              Explore Debt Investing <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Link>
      </Card>
      {/* Mind Over Money CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <Link to="/psychology" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-purple-50 dark:bg-purple-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors">
              <Brain className="h-8 w-8 stroke-purple-600 dark:stroke-purple-400" fill="none" />
            </div>
            <CardTitle className="text-xl">Mind Over Money</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1 justify-between">
            <p className="text-muted-foreground mb-4">
              Understand how psychology affects your financial decisions
            </p>
            <Button variant="default" className="w-full h-12 mt-auto font-medium flex items-center justify-center">
              Money Habits Decoded <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Link>
      </Card>
      {/* MONEY BASICS CARD */}
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <Link to="/money-basics" onClick={handleScrollToTop} className="flex flex-col h-full">
          <CardHeader className="text-center pb-4">
            <div className="rounded-full bg-primary/10 dark:bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/20 transition-colors">
              <PiggyBank className="h-8 w-8 stroke-primary" fill="none" />
            </div>
            <CardTitle className="text-xl">Money Basics</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col flex-1 justify-between">
            <p className="text-muted-foreground mb-4">
              Core personal finance topics for your foundation
            </p>
            <Button variant="default" className="w-full h-12 mt-auto font-medium flex items-center justify-center">
              Explore Money Basics <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Link>
      </Card>
    </div>
  </section>
);

export default HomeCategoryCards;
