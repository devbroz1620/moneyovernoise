import { useEffect, useState } from "react";
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, Shield, GraduationCap, BadgeIndianRupee, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from "react-router-dom";
import Loader from "@/components/ui/Loader";

const iconMap: { [key: string]: React.ElementType } = {
  "Budgeting and Money Management": PiggyBank,
  "Saving Strategies": PiggyBank,
  "Credit & Loans": Shield,
  "Investment Options": BadgeIndianRupee,
  "Insurance & Risk Management": Shield,
  "Taxation & Tax Planning": BadgeIndianRupee,
  "Retirement Planning": Shield,
  "Digital Finance & Fintech": PiggyBank,
  "Financial Scams & Protection": Shield,
  "Entrepreneurship": BadgeIndianRupee,
  "Women's Financial Literacy": GraduationCap,
  "Youth & Student Education": GraduationCap,
};

const categoryDetails: { [key: string]: { summary: string; color: string; iconColor: string; borderColor: string; } } = {
  "Budgeting and Money Management": {
    summary: "Foundational for all financial decisions",
    color: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    borderColor: "border-l-green-500"
  },
  "Saving Strategies": {
    summary: "Prevents financial crises and builds future security",
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-l-blue-500"
  },
  "Credit & Loans": {
    summary: "Reduces debt traps and promotes responsible borrowing",
    color: "bg-red-50 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
    borderColor: "border-l-red-500"
  },
  "Investment Options": {
    summary: "Empowers wealth creation and financial independence",
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-l-purple-500"
  },
  "Insurance & Risk Management": {
    summary: "Shields against unforeseen events and losses",
    color: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-l-orange-500"
  },
  "Taxation & Tax Planning": {
    summary: "Maximizes savings and ensures compliance",
    color: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "border-l-indigo-500"
  },
  "Retirement Planning": {
    summary: "Prepares for old age and reduces dependence",
    color: "bg-teal-50 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-l-teal-500"
  },
  "Digital Finance & Fintech": {
    summary: "Adapts to India's digital transformation",
    color: "bg-sky-50 dark:bg-sky-900/20",
    iconColor: "text-sky-600 dark:text-sky-400",
    borderColor: "border-l-sky-500"
  },
  "Financial Scams & Protection": {
    summary: "Safeguards hard-earned money",
    color: "bg-rose-50 dark:bg-rose-900/20",
    iconColor: "text-rose-600 dark:text-rose-400",
    borderColor: "border-l-rose-500"
  },
  "Entrepreneurship": {
    summary: "Supports economic growth and job creation",
    color: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-l-amber-500"
  },
  "Women's Financial Literacy": {
    summary: "Promotes gender equality and family well-being",
    color: "bg-pink-50 dark:bg-pink-900/20",
    iconColor: "text-pink-600 dark:text-pink-400",
    borderColor: "border-l-pink-500"
  },
  "Youth & Student Education": {
    summary: "Builds a financially savvy next generation",
    color: "bg-cyan-50 dark:bg-cyan-900/20",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    borderColor: "border-l-cyan-500"
  }
};

export default function MoneyBasics() {
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://notion-server-delta.vercel.app/api/money-basics")
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20 py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4 w-16 h-16 flex items-center justify-center">
                <PiggyBank className="h-8 w-8 text-blue-600 dark:text-blue-400" />
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

      {/* Categories Section */}
      <section className="container py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <Loader text="Loading categories..." />
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const displayName = category.replace(/_/g, ' ');
                const Icon = iconMap[displayName] || PiggyBank;
                const details = categoryDetails[displayName] || { summary: "Learn more.", color: "bg-gray-50", iconColor: "text-gray-600", borderColor: "border-l-gray-500" };

                return (
                  <Link to={`/money-basics/categories/${category}`} key={category} className="h-full block">
                    <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${details.borderColor} h-full flex flex-col`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`rounded-lg ${details.color} p-3`}>
                            <Icon className={`h-6 w-6 ${details.iconColor}`} />
                          </div>
                          <CardTitle className="text-lg leading-tight">{displayName}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col pt-0">
                        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                          {details.summary}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}