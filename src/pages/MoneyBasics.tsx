
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, Shield, GraduationCap, BadgeIndianRupee } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const basics = [
  {
    icon: PiggyBank,
    iconBg: 'bg-green-50 dark:bg-green-950/30',
    iconColor: 'text-green-600 dark:text-green-400',
    title: 'Budgeting & Money Management',
    summary: 'Foundational for all financial decisions',
  },
  {
    icon: PiggyBank,
    iconBg: 'bg-green-50 dark:bg-green-950/30',
    iconColor: 'text-green-600 dark:text-green-400',
    title: 'Saving Strategies',
    summary: 'Prevents financial crises and builds future security',
  },
  {
    icon: Shield,
    iconBg: 'bg-orange-50 dark:bg-orange-950/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    title: 'Credit & Loans',
    summary: 'Reduces debt traps and promotes responsible borrowing',
  },
  {
    icon: BadgeIndianRupee,
    iconBg: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Investment Options',
    summary: 'Empowers wealth creation and financial independence',
  },
  {
    icon: Shield,
    iconBg: 'bg-purple-50 dark:bg-purple-950/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    title: 'Insurance & Risk Management',
    summary: 'Shields against unforeseen events and losses',
  },
  {
    icon: BadgeIndianRupee,
    iconBg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    title: 'Taxation & Tax Planning',
    summary: 'Maximizes savings and ensures compliance',
  },
  {
    icon: Shield,
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    title: 'Retirement Planning',
    summary: 'Prepares for old age and reduces dependence',
  },
  {
    icon: PiggyBank,
    iconBg: 'bg-yellow-50 dark:bg-yellow-950/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    title: 'Digital Finance & Fintech',
    summary: "Adapts to India's digital transformation",
  },
  {
    icon: Shield,
    iconBg: 'bg-red-50 dark:bg-red-950/30',
    iconColor: 'text-red-600 dark:text-red-400',
    title: 'Financial Scams & Protection',
    summary: 'Safeguards hard-earned money',
  },
  {
    icon: BadgeIndianRupee,
    iconBg: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Entrepreneurship',
    summary: 'Supports economic growth and job creation',
  },
  {
    icon: GraduationCap,
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    title: 'Women’s Financial Literacy',
    summary: 'Promotes gender equality and family well-being',
  },
  {
    icon: GraduationCap,
    iconBg: 'bg-sky-50 dark:bg-sky-950/30',
    iconColor: 'text-sky-600 dark:text-sky-400',
    title: 'Youth & Student Education',
    summary: 'Builds a financially savvy next generation',
  },
];

export default function MoneyBasics() {
  const isMobile = useIsMobile();
  return (
    <MainLayout>
      {/* Hero Section for Money Basics */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <PiggyBank className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Money Basics
            </h1>
            <p className={`text-muted-foreground ${isMobile ? 'text-base' : 'text-lg'}`}>
              Foundational guides for everyone—start your journey to financial confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {basics.map((b, i) => (
              <Card
                key={b.title}
                className="flex flex-col h-full hover:shadow-xl border-2 border-transparent hover:border-primary/30 transition-all cursor-pointer group animate-fade-in bg-card"
                tabIndex={0}
              >
                <CardHeader className="flex flex-col gap-3 items-center text-center">
                  <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-2 transition-colors ${b.iconBg}`}>
                    <b.icon className={`h-7 w-7 ${b.iconColor}`} />
                  </div>
                  <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'}`}>{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center">
                  <p className="text-muted-foreground mb-3 flex-1">{b.summary}</p>
                  <span className="text-xs text-muted-foreground font-medium tracking-wide">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

