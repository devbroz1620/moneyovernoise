
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, Shield, GraduationCap, BadgeIndianRupee } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const basics = [
  {
    icon: PiggyBank,
    title: 'Budgeting & Money Management',
    summary: 'Foundational for all financial decisions',
  },
  {
    icon: PiggyBank, // Reuse, or swap for a "wallet" if you add new icons!
    title: 'Saving Strategies',
    summary: 'Prevents financial crises and builds future security',
  },
  {
    icon: Shield,
    title: 'Credit & Loans',
    summary: 'Reduces debt traps and promotes responsible borrowing',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Investment Options',
    summary: 'Empowers wealth creation and financial independence',
  },
  {
    icon: Shield,
    title: 'Insurance & Risk Management',
    summary: 'Shields against unforeseen events and losses',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Taxation & Tax Planning',
    summary: 'Maximizes savings and ensures compliance',
  },
  {
    icon: Shield,
    title: 'Retirement Planning',
    summary: 'Prepares for old age and reduces dependence',
  },
  {
    icon: PiggyBank,
    title: 'Digital Finance & Fintech',
    summary: "Adapts to India's digital transformation",
  },
  {
    icon: Shield,
    title: 'Financial Scams & Protection',
    summary: 'Safeguards hard-earned money',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Entrepreneurship',
    summary: 'Supports economic growth and job creation',
  },
  {
    icon: GraduationCap,
    title: 'Women’s Financial Literacy',
    summary: 'Promotes gender equality and family well-being',
  },
  {
    icon: GraduationCap,
    title: 'Youth & Student Education',
    summary: 'Builds a financially savvy next generation',
  },
];

export default function MoneyBasics() {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-[60vh] bg-background">
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Money Basics</h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-10">
          Foundational guides for everyone—start your journey to financial confidence.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {basics.map((b, i) => (
            <Card
              key={b.title}
              className="hover:shadow-xl border-2 border-transparent hover:border-primary/30 transition-all cursor-pointer group animate-fade-in"
              tabIndex={0}
            >
              <CardHeader className="flex flex-col gap-3 items-center text-center">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-2 transition-colors group-hover:bg-primary/20">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'}`}>{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{b.summary}</p>
                {/* Progress bar placeholder for the future */}
                <div className="w-full h-2 mt-5 rounded-full bg-muted/60 overflow-hidden">
                  <div className="h-full rounded-full bg-primary/60 w-0 group-hover:w-2/3 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
