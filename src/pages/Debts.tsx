import { useEffect, useState } from "react";
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Landmark, Building, TrendingUp, PiggyBank, Receipt, BookOpen, CreditCard, Shield, Scale, Calculator, Clock } from "lucide-react";
import Loader from "@/components/ui/Loader";

const categoryDetails: { [key: string]: { description: string; color: string; iconColor: string; borderColor: string; icon: React.ElementType } } = {
  "Government Securities": {
    description: "G-Secs, SDLs, T-Bills, Sovereign Gold Bonds, RBI Bonds",
    color: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    borderColor: "border-l-green-500",
    icon: Landmark
  },
  "Corporate Debt": {
    description: "Corporate Bonds, Debentures, Commercial Paper, NCDs",
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-l-blue-500",
    icon: Building
  },
  "Debt Mutual Funds": {
    description: "Liquid Funds, Gilt Funds, Credit Risk Funds, Corporate Bond Funds",
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-l-purple-500",
    icon: TrendingUp
  },
  "Other Fixed Income Products": {
    description: "Fixed Deposits (FDs), Post Office Savings Schemes, FMPs",
    color: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-l-orange-500",
    icon: PiggyBank
  },
  "Tax Advantaged Debt Instruments": {
    description: "Learn more.",
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-l-indigo-500",
    icon: Receipt
  },
  "Debt Market Basics": {
    description: "Learn more.",
    color: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-l-teal-500",
    icon: BookOpen
  }
};

// Restore hardcoded descriptions for categories
const categoryDescriptions: { [key: string]: string } = {
  "Government Securities": "G-Secs (Government Securities), SDLs (State Development Loans), T-Bills (Treasury Bills), Sovereign Gold Bonds, RBI Bonds",
  "Corporate Debt": "Corporate Bonds, Debentures, Commercial Paper, Non-Convertible Debentures (NCDs)",
  "Debt Mutual Funds": "Liquid Funds, Gilt Funds, Credit Risk Funds, Corporate Bond Funds, other debt-oriented mutual funds",
  "Other Fixed Income Products": "Fixed Deposits (FDs), Post Office Savings Schemes, Fixed Maturity Plans (FMPs)",
  "Tax Advantaged Debt Instruments": "Tax-Free Bonds, Capital Gains Bonds",
  "Debt Market Basics": "Yield, Credit Rating, Risks in Debt Investing, How Bonds Are Traded"
};

export default function Debts() {
  const [categories, setCategories] = useState<string[]>([]); // Only store category names
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://notion-server-delta.vercel.app/api/debts")
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = Array.from(new Set(data.map((d: any) => d.category))) as string[];
        // Sort according to the required sequence
        const order = [
          "Government Securities",
          "Corporate Debt",
          "Debt Mutual Funds",
          "Other Fixed Income Products",
          "Tax Advantaged Debt Instruments",
          "Debt Market Basics"
        ];
        uniqueCategories.sort((a, b) => {
          const idxA = order.indexOf(a);
          const idxB = order.indexOf(b);
          if (idxA === -1 && idxB === -1) return a.localeCompare(b);
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxA - idxB;
        });
        setCategories(uniqueCategories);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/20 py-8 md:py-12">
            <div className="container text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-4 w-16 h-16 flex items-center justify-center">
                            <img src="/debt.png" alt="Debt Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Debt Investing
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                        Master the art of fixed-income investing with clear, practical guides designed for Indian investors.
                    </p>
                </div>
            </div>
        </section>

        {/* Categories Section */}
        <section className="container py-10 md:py-14">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    Debt Investment Categories
                </h2>
                {loading ? (
                    <Loader text="Loading categories..." />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {categories.map((cat) => {
                            const details = categoryDetails[cat] || { color: "bg-gray-50", iconColor: "text-gray-600", borderColor: "border-l-gray-500", icon: BookOpen };
                            const IconComponent = details.icon;
                            return (
                                <Link to={`/debts/categories/${cat.replace(/ /g, '_')}`} key={cat} className="h-full block">
                                    <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${details.borderColor} h-full flex flex-col items-center text-center py-8 px-4`}>
                                        <CardHeader className="pb-0 flex flex-col items-center">
                                            <div className={`rounded-lg ${details.color} p-4 mb-4 flex items-center justify-center mx-auto`}>
                                                <IconComponent className={`h-10 w-10 ${details.iconColor}`} />
                                            </div>
                                            <CardTitle className="text-2xl font-bold mb-2 w-full">{cat.replace(/_/g, ' ')}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col items-center pt-0 w-full">
                                            <p className="text-muted-foreground text-base mb-4 w-full">
                                                {categoryDescriptions[cat] || "Learn more."}
                                            </p>
                                            <span className="text-teal-400 dark:text-cyan-300 font-semibold hover:underline text-base">
                                                Read more <span className="ml-1">→</span>
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Why Debt Investing Matters */}
                <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Why Debt Investing Matters</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-primary mb-2">Stability</div>
                      <p className="text-sm text-muted-foreground">Predictable returns and capital preservation</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Scale className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-primary mb-2">Diversification</div>
                      <p className="text-sm text-muted-foreground">Balance your equity portfolio with fixed income</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Calculator className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-primary mb-2">Income</div>
                      <p className="text-sm text-muted-foreground">Regular interest payments for consistent cash flow</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </MainLayout>
  );
} 