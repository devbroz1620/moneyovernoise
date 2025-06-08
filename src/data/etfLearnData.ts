
export const etfLearnArticles: { [key: string]: any } = {
  'debt-etfs-india': {
    id: 'debt-etfs-india',
    slug: 'debt-etfs-india',
    title: 'Debt ETFs in India: Government Securities, Corporate Bonds, and Duration Strategies',
    description: 'Explore fixed-income ETF options available in India, including Gilt, Bharat Bond, and corporate bond ETFs. Understand how duration and credit risk play a role in returns and how debt ETFs can stabilize your portfolio.',
    readingTime: '5 min read',
    category: 'Intermediate' as const,
    tags: ['Debt ETFs', 'Government Securities', 'Corporate Bonds', 'Duration Risk'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    content: `
      <p>Most people think of the stock market when they hear "ETF." But not all ETFs chase equity returns. Some bring you stability and steady income — these are Debt ETFs.</p>
      
      <p>Debt ETFs are baskets of fixed-income securities like government bonds, PSU bonds, or corporate bonds. Think of them like a basket of IOUs from reliable borrowers.</p>
      
      <h2>🧱 Types of Debt ETFs in India</h2>
      <p>Let's look at the major categories of Debt ETFs:</p>
      
      <h3>1. Gilt ETFs (Government Securities)</h3>
      <p>These ETFs invest only in Government of India bonds (no credit risk).</p>
      <ul>
        <li><strong>Example:</strong> Nippon India ETF Long Term Gilt</li>
        <li><strong>Ideal for:</strong> Low-risk investors seeking safety</li>
        <li><strong>Risk:</strong> Interest rate risk. When interest rates go up, bond prices fall</li>
      </ul>
      
      <h3>2. Bharat Bond ETFs (Target Maturity)</h3>
      <p>Launched by Edelweiss MF, these invest in AAA-rated PSU bonds and have a fixed maturity date (like an FD).</p>
      <ul>
        <li><strong>Example:</strong> Bharat Bond ETF April 2030</li>
        <li><strong>Risk:</strong> Lower credit risk (AAA), some interest rate risk</li>
        <li><strong>Advantage:</strong> You get predictable returns if held till maturity</li>
      </ul>
      
      <h3>3. Corporate Bond ETFs</h3>
      <p>These hold bonds from top-rated companies.</p>
      <ul>
        <li><strong>Example:</strong> Axis AAA Bond Plus SDL ETF – 2026 Maturity</li>
        <li><strong>Suitable for:</strong> Medium-risk investors looking for slightly higher yield</li>
      </ul>
      
      <h2>⏳ What Is Duration and Why It Matters?</h2>
      <p>Duration tells you how sensitive a bond ETF is to interest rate changes.</p>
      <ul>
        <li><strong>Short Duration (&lt;3 years)</strong> → Less volatile</li>
        <li><strong>Medium Duration (3–7 years)</strong> → Balanced</li>
        <li><strong>Long Duration (&gt;7 years)</strong> → Higher volatility, higher potential return</li>
      </ul>
      
      <h2>🔍 Key Factors to Evaluate Debt ETFs</h2>
      <ul>
        <li><strong>Yield to Maturity (YTM)</strong> – Approximate annual return if held till maturity</li>
        <li><strong>Expense Ratio</strong> – Lower is better</li>
        <li><strong>Credit Risk</strong> – Govt bonds = safest, AAA = safe, below that = risky</li>
        <li><strong>Modified Duration</strong> – More duration = more sensitivity to rate changes</li>
        <li><strong>Tracking Error</strong> – Small difference between ETF return and its benchmark</li>
      </ul>
      
      <h2>🏁 Final Thoughts</h2>
      <p>Debt ETFs are a great way to diversify beyond equity and add stability to your portfolio. Whether you're a retiree or just looking to balance your aggressive bets, they deserve a place in your investing journey.</p>
      <p>And the best part? You don't need to pick individual bonds. You just buy one ETF — and get a whole bouquet of them.</p>
    `,
    relatedArticles: [],
    nextArticle: null
  },
  'currency-hedged-vs-unhedged-etfs': {
    id: 'currency-hedged-vs-unhedged-etfs',
    slug: 'currency-hedged-vs-unhedged-etfs',
    title: 'Currency Hedged vs Unhedged International ETFs: Managing Forex Risk',
    description: 'Learn the key difference between currency-hedged and unhedged ETFs. Understand how currency movements impact your international ETF returns and when you should consider hedging.',
    readingTime: '5 min read',
    category: 'Advanced' as const,
    tags: ['International ETFs', 'Currency Risk', 'Forex Hedging', 'Global Investing'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    content: `
      <p>When you invest in an international ETF, you're not just betting on foreign stocks. You're also indirectly exposed to currency fluctuations — and that can either boost or hurt your returns.</p>
      <p>This is where the concept of currency hedging comes in.</p>
      
      <h2>🎭 Two Faces of Global Investing</h2>
      
      <h3>📦 1. Unhedged International ETFs</h3>
      <p>These are the default.</p>
      <p><strong>Your returns = performance of the foreign stocks +/- currency movements.</strong></p>
      
      <h3>🛡️ 2. Currency Hedged ETFs</h3>
      <p>These ETFs use financial contracts (like forwards) to neutralize currency risk.</p>
      <p><strong>You only get the pure stock performance, without any INR-USD effect.</strong></p>
      
      <h2>🔍 Why Does This Matter for Indian Investors?</h2>
      <p>India's currency has historically depreciated against the US dollar — around 3–4% annually on average.</p>
      <p>That means:</p>
      <ul>
        <li>If you invest in unhedged ETFs, this depreciation works in your favor</li>
        <li>Currency-hedged ETFs may protect you, but you also give up that INR depreciation advantage</li>
      </ul>
      
      <h2>📈 Real-Life Example</h2>
      <p>Let's take the Motilal Oswal Nasdaq 100 ETF (unhedged).</p>
      <p>In 2022:</p>
      <ul>
        <li>Nasdaq 100 fell ~32% in USD terms</li>
        <li>But INR depreciated from ₹74 to ₹82 → ~10% gain</li>
        <li>So actual loss for Indian investors was closer to -22%, not -32%</li>
      </ul>
      
      <h2>📌 When to Choose Hedged vs Unhedged</h2>
      <ul>
        <li><strong>Long-term investing (&gt;5 years):</strong> Unhedged (currency risk averages out, you benefit from INR depreciation)</li>
        <li><strong>Short-term view or strong INR expected:</strong> Hedged</li>
        <li><strong>Want pure global equity exposure, no currency noise:</strong> Hedged</li>
        <li><strong>Expect INR to weaken further:</strong> Unhedged</li>
      </ul>
      
      <h2>🧠 Key Takeaways</h2>
      <ul>
        <li>Unhedged ETFs expose you to currency gains/losses — this is default in India</li>
        <li>Hedged ETFs remove currency impact — cleaner exposure, but less upside</li>
        <li>Indian rupee typically depreciates, helping unhedged investors in the long run</li>
        <li>Know your time horizon and currency view before picking</li>
      </ul>
    `,
    relatedArticles: [],
    nextArticle: null
  }
};
