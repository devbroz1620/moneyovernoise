
export interface DebtArticle {
  id: string;
  title: string;
  description: string;
  readingTime: string;
  category: string;
  slug: string;
  content: string;
  publishedDate: string;
  tags: string[];
}

export const governmentSecuritiesArticles: DebtArticle[] = [
  {
    id: "1",
    title: "What Are Government Securities (G-Secs) and Why Should Indian Investors Care?",
    description: "Understanding the basics of Government Securities and their importance in Indian investment portfolios.",
    readingTime: "8 min read",
    category: "Government Securities",
    slug: "what-are-government-securities-g-secs",
    content: "", // Will be filled when content is provided
    publishedDate: "2024-01-01",
    tags: ["G-Secs", "Government Securities", "Investment Basics", "Fixed Income"]
  },
  {
    id: "2",
    title: "State Development Loans (SDLs): How Indian States Raise Money—and How You Can Invest",
    description: "Learn about State Development Loans and how they offer investment opportunities for Indian investors.",
    readingTime: "7 min read",
    category: "Government Securities",
    slug: "state-development-loans-sdls-guide",
    content: "",
    publishedDate: "2024-01-02",
    tags: ["SDLs", "State Development Loans", "Government Securities", "Investment"]
  },
  {
    id: "3",
    title: "Treasury Bills (T-Bills): The Short-Term Government Debt You Should Know About",
    description: "Understanding Treasury Bills as a short-term investment option for Indian investors.",
    readingTime: "6 min read",
    category: "Government Securities",
    slug: "treasury-bills-t-bills-guide",
    content: "",
    publishedDate: "2024-01-03",
    tags: ["T-Bills", "Treasury Bills", "Short-term Investment", "Government Securities"]
  },
  {
    id: "4",
    title: "Sovereign Gold Bonds (SGBs): A Unique Way to Invest in Gold and Earn Interest",
    description: "Discover how Sovereign Gold Bonds combine gold investment with regular interest payments.",
    readingTime: "8 min read",
    category: "Government Securities",
    slug: "sovereign-gold-bonds-sgbs-guide",
    content: "",
    publishedDate: "2024-01-04",
    tags: ["SGBs", "Sovereign Gold Bonds", "Gold Investment", "Government Securities"]
  },
  {
    id: "5",
    title: "RBI Floating Rate Bonds: What They Are and Why They Matter for Indian Investors",
    description: "Understanding RBI Floating Rate Bonds and their role in protecting against interest rate risk.",
    readingTime: "7 min read",
    category: "Government Securities",
    slug: "rbi-floating-rate-bonds-guide",
    content: "",
    publishedDate: "2024-01-05",
    tags: ["RBI Bonds", "Floating Rate Bonds", "Interest Rate Risk", "Government Securities"]
  },
  {
    id: "6",
    title: "How to Buy Government Securities (G-Secs) in India: A Step-by-Step Guide for Beginners",
    description: "A practical guide for Indian investors on how to purchase Government Securities.",
    readingTime: "10 min read",
    category: "Government Securities",
    slug: "how-to-buy-government-securities-guide",
    content: "",
    publishedDate: "2024-01-06",
    tags: ["G-Secs", "Investment Guide", "Government Securities", "Beginner Guide"]
  },
  {
    id: "7",
    title: "Understanding Yield and Price of Government Bonds: What Every Indian Investor Should Know",
    description: "Learn the relationship between bond yields and prices and how it affects your investments.",
    readingTime: "9 min read",
    category: "Government Securities",
    slug: "understanding-yield-price-government-bonds",
    content: "",
    publishedDate: "2024-01-07",
    tags: ["Bond Yield", "Bond Price", "Government Bonds", "Investment Education"]
  },
  {
    id: "8",
    title: "How Interest Rate Changes Affect Government Bonds: A Simple Guide for Indian Investors",
    description: "Understanding the impact of interest rate changes on government bond investments.",
    readingTime: "8 min read",
    category: "Government Securities",
    slug: "interest-rate-changes-government-bonds",
    content: "",
    publishedDate: "2024-01-08",
    tags: ["Interest Rates", "Government Bonds", "Investment Risk", "Bond Investing"]
  },
  {
    id: "9",
    title: "Risks Associated with Government Securities: What Indian Investors Should Know",
    description: "Identifying and understanding the various risks involved in government securities investing.",
    readingTime: "7 min read",
    category: "Government Securities",
    slug: "risks-government-securities-investors",
    content: "",
    publishedDate: "2024-01-09",
    tags: ["Investment Risk", "Government Securities", "Risk Management", "Bond Investing"]
  },
  {
    id: "10",
    title: "How Government Securities Fit into Your Overall Investment Portfolio",
    description: "Learn how to integrate government securities into a diversified investment portfolio.",
    readingTime: "9 min read",
    category: "Government Securities",
    slug: "government-securities-investment-portfolio",
    content: "",
    publishedDate: "2024-01-10",
    tags: ["Portfolio Management", "Government Securities", "Asset Allocation", "Investment Strategy"]
  }
];

export const getDebtArticleBySlug = (slug: string): DebtArticle | undefined => {
  return governmentSecuritiesArticles.find(article => article.slug === slug);
};

export const getAllDebtArticles = (): DebtArticle[] => {
  return governmentSecuritiesArticles;
};
