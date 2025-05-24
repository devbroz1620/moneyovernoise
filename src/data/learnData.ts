
export interface LearnArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

export const learnArticles: Record<string, LearnArticle> = {
  'why-etfs-are-great-for-beginners': {
    id: 'why-etfs-are-great-for-beginners',
    title: 'Why ETFs are Great for Beginners',
    slug: 'why-etfs-are-great-for-beginners',
    description: 'Explore why Exchange Traded Funds are ideal for new investors stepping into the world of stock markets.',
    readingTime: '5 min',
    category: 'Beginner',
    tags: ['Beginners', 'Strategy', 'Diversification'],
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
    content: `
      <h2>Why Beginners Should Consider ETFs</h2>
      <p>Getting started in the stock market can feel overwhelming — with thousands of stocks, market jargon, and fear of losses. Exchange Traded Funds (ETFs) offer a simple and low-risk entry point for beginners who want to learn by doing without betting on a single stock.</p>

      <p>ETFs combine the best of both worlds: diversification like mutual funds and flexibility like stocks. With a small amount of money, you can get exposure to a wide basket of assets, reducing your risk.</p>

      <h3>Benefits of ETFs for Beginners</h3>
      <ul>
        <li><strong>Easy Diversification:</strong> Buying one ETF can give exposure to 50–100+ companies across sectors or an index like Nifty 50.</li>
        <li><strong>Low Minimum Investment:</strong> Most ETFs on Indian exchanges can be purchased for under ₹100 — making it beginner-friendly.</li>
        <li><strong>No Lock-ins:</strong> Unlike ELSS or some mutual funds, you can exit anytime during market hours.</li>
        <li><strong>Low Expense Ratios:</strong> ETFs generally charge lower annual fees than actively managed mutual funds.</li>
        <li><strong>Transparency:</strong> You always know what's inside the ETF since holdings are disclosed daily.</li>
      </ul>

      <h3>Example: Instead of Picking a Stock, Pick the Market</h3>
      <p>Let's say you want to invest in Indian large-cap companies but don't know which stock to choose. A Nifty 50 ETF lets you invest in all top 50 companies in one shot. If the overall index grows, so does your investment.</p>

      <h3>How to Start with ETFs</h3>
      <ol>
        <li>Open a demat account with any stock broker.</li>
        <li>Search for ETFs like 'NiftyBees', 'BankBees', 'ICICI Sensex ETF', etc.</li>
        <li>Place a buy order just like you would for a stock.</li>
        <li>Track performance through your broker's app or a tool like MoneyOverNoise.</li>
      </ol>

      <p>For beginners, ETFs offer a safe, structured, and educational way to build wealth — one step at a time.</p>
    `
  }
};
