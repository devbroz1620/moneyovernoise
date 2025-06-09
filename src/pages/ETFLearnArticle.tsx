import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';
import Comments from '@/components/shared/Comments';

const ETFLearnArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Updated ETF articles data with all 14 articles and complete content
  const etfArticles: Record<string, any> = {
    'what-is-etf': {
      title: 'What is an ETF',
      description: 'A beginner-friendly introduction to ETFs – what they are, how they work, and why they\'ve become so popular among Indian investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Basics', 'Investment', 'Beginner'],
      content: `
        <h2>What is an ETF?</h2>
        <p>Imagine if you could buy a basket of top Indian stocks like HDFC, Reliance, TCS, and Infosys — all at once — without spending a fortune or picking them individually.</p>
        <p>That's exactly what an ETF (Exchange-Traded Fund) lets you do.</p>
        
        <h3>In Simple Words:</h3>
        <p>An ETF is a basket of securities (like stocks, bonds, or gold) that you can buy and sell on a stock exchange, just like you'd buy a single stock.</p>
        <p>So instead of buying 1 share of 50 different companies, you just buy 1 unit of an ETF and get exposure to all those companies.</p>
        
        <h2>Why Do People Use ETFs?</h2>
        <ul>
          <li><strong>✅ Diversification:</strong> One ETF can give you exposure to 50-100 stocks, reducing your risk.</li>
          <li><strong>✅ Low Cost:</strong> ETFs usually have very low fees (called expense ratios) — much lower than mutual funds.</li>
          <li><strong>✅ Transparency:</strong> You know exactly what's inside the ETF. Most track well-known indices like Nifty 50, Sensex, or Nifty Next 50.</li>
          <li><strong>✅ Liquidity:</strong> Since ETFs trade like stocks, you can buy/sell anytime during market hours.</li>
        </ul>
        
        <h3>Real-Life Analogy (Indian Style):</h3>
        <p>Think of an ETF like a thali at a restaurant.</p>
        <p>Instead of ordering 10 dishes separately (like stocks), you order a well-prepared thali — a mix of dal, sabzi, roti, rice — all balanced.</p>
        <p>That's what an ETF is: a ready-made investment thali.</p>
        
        <h2>🔍 Popular ETF Types in India:</h2>
        <table>
          <tr>
            <th>ETF Type</th>
            <th>Tracks…</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>Index ETFs</td>
            <td>Nifty 50, Sensex, etc.</td>
            <td>Nippon Nifty 50 ETF</td>
          </tr>
          <tr>
            <td>Sectoral ETFs</td>
            <td>Banks, IT, Pharma etc.</td>
            <td>ICICI Prudential IT ETF</td>
          </tr>
          <tr>
            <td>Gold ETFs</td>
            <td>Price of physical gold</td>
            <td>SBI Gold ETF</td>
          </tr>
          <tr>
            <td>International</td>
            <td>US markets like Nasdaq</td>
            <td>Motilal Oswal Nasdaq 100 ETF</td>
          </tr>
          <tr>
            <td>Debt ETFs</td>
            <td>Government or corporate bonds</td>
            <td>Bharat Bond ETF</td>
          </tr>
        </table>
        
        <h2>Who Should Consider ETFs?</h2>
        <ul>
          <li>New investors looking for easy diversification</li>
          <li>DIY investors wanting full control at low cost</li>
          <li>Long-term investors building a passive portfolio</li>
        </ul>
        
        <h2>How Do You Buy an ETF?</h2>
        <p>You need:</p>
        <ul>
          <li>A demat account (Zerodha, Groww, Upstox, etc.)</li>
          <li>Search for the ETF you want (e.g., "Nippon Nifty 50 ETF")</li>
          <li>Buy it just like a stock</li>
        </ul>
        
        <h2>🏁 Final Thoughts</h2>
        <p>ETFs are one of the simplest ways to start investing smartly. They combine the best of mutual funds and stocks: diversification, low cost, and liquidity.</p>
        <p>As India's markets grow, so will the number of ETFs — and the opportunities they unlock.</p>
      `
    },
    'etf-vs-mutual-fund': {
      title: 'ETFs v/s Mutual Funds',
      description: 'Understand the key differences between ETFs and mutual funds, and why ETFs are emerging as a better choice for modern investors.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETFs', 'Mutual Funds', 'Comparison', 'Investment Strategy'],
      content: `
        <h2>The Basic Definitions</h2>
        <p><strong>ETF (Exchange Traded Fund):</strong> A fund that tracks an index or theme, listed on a stock exchange, and can be bought/sold anytime during market hours.</p>
        <p><strong>Mutual Fund:</strong> A professionally managed fund where investors pool money and buy units based on NAV (Net Asset Value), settled only once a day.</p>
        <p>Both are pooled investment vehicles, but their structure and behavior differ.</p>
        
        <h2>Key Differences</h2>
        <table>
          <tr>
            <th>Feature</th>
            <th>ETF</th>
            <th>Mutual Fund</th>
          </tr>
          <tr>
            <td>Traded on Exchange</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>Market price throughout day</td>
            <td>Once-daily NAV</td>
          </tr>
          <tr>
            <td>Expense Ratio</td>
            <td>Very Low (as low as 0.05%)</td>
            <td>Higher (1%–2.5%)</td>
          </tr>
          <tr>
            <td>Minimum Investment</td>
            <td>1 Share (₹100–₹500)</td>
            <td>Usually ₹500–₹1000</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>High</td>
            <td>Moderate</td>
          </tr>
          <tr>
            <td>Transparency</td>
            <td>Daily holdings disclosed</td>
            <td>Monthly holdings</td>
          </tr>
          <tr>
            <td>Management</td>
            <td>Passive</td>
            <td>Mostly active</td>
          </tr>
        </table>
        
        <h2>Cost Matters — A Lot</h2>
        <p>Expense ratio eats into your returns over time.</p>
        <ul>
          <li><strong>ETF:</strong> If you invest ₹1 lakh at 0.1%, you pay ₹100/year in fees.</li>
          <li><strong>Mutual Fund:</strong> At 1.5%, you pay ₹1,500/year — 15x more!</li>
        </ul>
        <p>This difference compounds massively over the years.</p>
        
        <h2>Performance Transparency</h2>
        <p><strong>With ETFs, you always know:</strong></p>
        <ul>
          <li>Which stocks are in your fund</li>
          <li>How they are performing in real time</li>
        </ul>
        <p><strong>With mutual funds:</strong></p>
        <ul>
          <li>You only get updates once a month or so</li>
          <li>Fund manager decisions are not always visible</li>
        </ul>
        <p>This makes ETFs a better choice for DIY investors who want full control.</p>
        
        <h2>Buying & Selling — Flexibility Wins</h2>
        <ul>
          <li><strong>ETF:</strong> Buy/sell anytime during market hours. Prices may fluctuate just like stocks.</li>
          <li><strong>Mutual Fund:</strong> Buy/sell based on NAV declared at day's end.</li>
        </ul>
        
        <h2>Ideal Use Cases</h2>
        <ul>
          <li><strong>ETFs:</strong> Great for index-based, low-cost investing</li>
          <li><strong>Mutual Funds:</strong> May work better if you trust an active fund manager or want SIPs with auto-debit</li>
        </ul>
        
        <h2>Closing Thoughts</h2>
        <p>While mutual funds have served Indian investors for decades, ETFs bring a fresh approach — more transparency, lower cost, and real-time flexibility.</p>
        <p>Think of ETFs as the digital-first investing tool — perfect for the DIY, mobile-savvy generation.</p>
      `
    },
    'types-of-etfs-india': {
      title: 'Types of ETFs in India: A Simple Guide',
      description: 'From equity to gold to international funds, explore the main types of ETFs available to Indian investors and what they offer.',
      readingTime: '7 min read',
      category: 'Beginner',
      tags: ['ETF Types', 'Equity ETFs', 'Gold ETFs', 'International ETFs'],
      content: `
        <h2>Not All ETFs Are the Same</h2>
        <p>ETFs may all trade on the stock exchange, but what they hold inside can vary drastically.</p>
        <p>In India, the ETF universe is steadily expanding — from plain vanilla index trackers to gold, debt, and even international ETFs.</p>
        <p>Let's walk through the most common types you'll find.</p>
        
        <h2>1. Equity ETFs</h2>
        <p>These track stock indices. Think of them as simplified stock market investing.</p>
        <p><strong>Popular examples:</strong></p>
        <ul>
          <li><strong>Nifty 50 ETFs</strong> – Track top 50 Indian companies.</li>
          <li><strong>Sensex ETFs</strong> – Track 30 largest stocks on BSE.</li>
          <li><strong>Sectoral ETFs</strong> – Focus on specific sectors like banking, IT, pharma.</li>
        </ul>
        <p><strong>Use case:</strong> Broad market exposure or tactical bets on specific sectors.</p>
        
        <h2>2. Gold ETFs</h2>
        <p>These invest in physical gold on your behalf.</p>
        <p>Each unit represents about 1 gram of gold.</p>
        <p><strong>Why they're popular:</strong></p>
        <ul>
          <li>Purity is assured (99.5%+)</li>
          <li>You avoid storage hassles</li>
          <li>Easy to buy/sell like any stock</li>
        </ul>
        <p><strong>Use case:</strong> Add stability or hedge against inflation in your portfolio.</p>
        
        <h2>3. Debt ETFs</h2>
        <p>These invest in government securities or bonds.</p>
        <p><strong>Popular options:</strong></p>
        <ul>
          <li><strong>Bharat Bond ETF</strong> (target maturity)</li>
          <li><strong>Liquid ETFs</strong> (short-term, low risk)</li>
        </ul>
        <p><strong>Why consider them:</strong></p>
        <ul>
          <li>Safer than equities</li>
          <li>Predictable returns (esp. target maturity ETFs)</li>
          <li>Tax-efficient if held >3 years</li>
        </ul>
        <p><strong>Use case:</strong> Ideal for conservative investors or as part of a fixed-income allocation.</p>
        
        <h2>4. International ETFs</h2>
        <p>They give you exposure to global markets like the US or China.</p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Motilal Oswal Nasdaq 100 ETF</li>
          <li>Nippon India Hang Seng ETF</li>
        </ul>
        <p><strong>Why this matters:</strong></p>
        <ul>
          <li>Diversifies your currency and geographical exposure</li>
          <li>Lets you ride trends in tech, global indices</li>
        </ul>
        <p><strong>Use case:</strong> Hedge against Indian market risk, participate in global growth stories.</p>
        
        <h2>5. Factor-Based / Smart Beta ETFs</h2>
        <p>These go beyond traditional indices and use factors like:</p>
        <ul>
          <li>Low volatility</li>
          <li>High dividend yield</li>
          <li>Quality or momentum</li>
        </ul>
        <p><strong>Example:</strong> ICICI Prudential Nifty Alpha Low Vol 30 ETF</p>
        <p><strong>Use case:</strong> Tilt your portfolio toward specific strategies without picking individual stocks.</p>
        
        <h2>Bonus: Thematic ETFs</h2>
        <p>These focus on specific investment themes — like ESG (Environmental, Social, Governance), infrastructure, or defense.</p>
        <p>They're niche but growing in popularity.</p>
        
        <h2>Recap Table</h2>
        <table>
          <tr>
            <th>ETF Type</th>
            <th>What It Tracks</th>
            <th>Risk Level</th>
            <th>Key Benefit</th>
          </tr>
          <tr>
            <td>Equity ETF</td>
            <td>Stock indices (e.g. Nifty)</td>
            <td>Medium–High</td>
            <td>Market growth participation</td>
          </tr>
          <tr>
            <td>Gold ETF</td>
            <td>Physical gold</td>
            <td>Medium</td>
            <td>Inflation hedge</td>
          </tr>
          <tr>
            <td>Debt ETF</td>
            <td>Bonds, govt securities</td>
            <td>Low</td>
            <td>Stability & predictability</td>
          </tr>
          <tr>
            <td>International ETF</td>
            <td>Foreign indices (e.g. Nasdaq)</td>
            <td>High</td>
            <td>Global diversification</td>
          </tr>
          <tr>
            <td>Smart Beta ETF</td>
            <td>Factor-based portfolios</td>
            <td>Medium–High</td>
            <td>Strategic investing</td>
          </tr>
        </table>
        
        <h2>Final Thoughts</h2>
        <p>India may still be warming up to ETFs, but the diversity on offer already caters to a wide range of investor goals.</p>
        <p>Whether you want long-term equity growth, a hedge against inflation, or a low-risk debt solution, there's an ETF for it.</p>
        <p>Don't treat ETFs as a one-size-fits-all product.</p>
        <p>Understanding what's inside each ETF helps you use them more intelligently — as building blocks of a resilient portfolio.</p>
      `
    },
    'etf-popularity-india': {
      title: 'Why Are ETFs Gaining Popularity in India?',
      description: 'Explore the key reasons behind the explosive growth of ETFs in India and why they\'re attracting both retail and institutional investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['ETF Growth', 'Indian Markets', 'Investment Trends', 'SEBI'],
      content: `
        <h2>A Quiet Revolution in Indian Investing</h2>
        <p>Ten years ago, ETFs barely registered on Indian investors' radars. Today, they manage over ₹6 lakh crore in assets. What changed?</p>
        <p>This article explores the forces driving ETF adoption in India — and what it means for you as an investor.</p>
        
        <h2>1. Lower Costs Are Winning</h2>
        <p>The biggest draw? ETFs are extremely cheap.</p>
        <ul>
          <li>Most ETFs have an expense ratio between 0.05%–0.3%</li>
          <li>In comparison, mutual funds often charge 1.5%–2.5%</li>
        </ul>
        <p>When returns are uncertain, minimizing fees is one of the few things you can control. Over long periods, that cost difference compounds significantly.</p>
        
        <h2>2. The Rise of DIY Investors</h2>
        <p>Young Indians increasingly prefer:</p>
        <ul>
          <li>Making their own decisions</li>
          <li>Using apps like Zerodha, Groww, and Upstox</li>
          <li>Transparent, self-managed portfolios</li>
        </ul>
        <p>ETFs fit perfectly into this mindset — no fund manager, no lock-ins, just index-based investing at your fingertips.</p>
        
        <h2>3. Government Push</h2>
        <p>EPFO (Employees' Provident Fund Organisation) began investing a portion of retirement funds into ETFs from 2015 onwards — starting with Nifty and Sensex ETFs.</p>
        <p>This:</p>
        <ul>
          <li>Boosted ETF liquidity and credibility</li>
          <li>Signaled trust from the largest institutional investor in India</li>
        </ul>
        
        <h2>4. SEBI's Role in Promoting Transparency</h2>
        <p>SEBI has steadily nudged fund houses toward:</p>
        <ul>
          <li>Lower-cost products</li>
          <li>Greater transparency</li>
          <li>Simpler product structures</li>
        </ul>
        <p>ETFs check all the boxes — especially because their holdings are disclosed daily and they passively track indices.</p>
        
        <h2>5. Increased Index Awareness</h2>
        <p>Terms like Nifty 50, Sensex, Nasdaq, and S&P 500 have become familiar to retail investors.</p>
        <p>As people realize the difficulty of consistently beating the market, index investing has started to make more sense. ETFs are the easiest way to do it.</p>
        
        <h2>6. Market Volatility & Trust Issues</h2>
        <p>After multiple market cycles and poor-performing active funds, many investors are now asking:</p>
        <p><strong>"Why pay high fees for average results?"</strong></p>
        <p>ETFs offer a simple promise:</p>
        <ul>
          <li>Track the index</li>
          <li>Charge a fraction of the cost</li>
          <li>Deliver what the market delivers</li>
        </ul>
        <p>That's a proposition more and more investors are comfortable with.</p>
        
        <h2>7. Tech-First Access & Education</h2>
        <p>Thanks to fintech apps and social media, financial literacy is growing — and so is access to ETFs.</p>
        <p>Platforms like Zerodha Coin, Paytm Money, and smallcase are:</p>
        <ul>
          <li>Making ETF investing user-friendly</li>
          <li>Promoting index-based portfolios</li>
          <li>Highlighting costs and comparisons</li>
        </ul>
        
        <h2>The Numbers Tell the Story</h2>
        <table>
          <tr>
            <th>Year</th>
            <th>AUM in Indian ETFs</th>
          </tr>
          <tr>
            <td>2015</td>
            <td>₹25,000 crore</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>₹2.3 lakh crore</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>₹6.3 lakh crore</td>
          </tr>
        </table>
        <p>That's over 20x growth in 8 years, driven by both institutions and individual investors.</p>
        
        <h2>What It Means for You</h2>
        <p>If you're still sitting on the fence, here's the bottom line:</p>
        <ul>
          <li>ETFs are no longer niche</li>
          <li>They're cost-effective, transparent, and accessible</li>
          <li>They're likely to keep growing as SEBI, government bodies, and fintech platforms continue to support them</li>
        </ul>
        
        <h2>Final Thoughts</h2>
        <p>The ETF boom in India isn't hype — it's a fundamental shift in how people think about investing. Instead of trying to outsmart the market, more investors are choosing to ride the market through index ETFs.</p>
        <p>It's not about being flashy. It's about being consistent.</p>
      `
    },
    'how-to-choose-etf': {
      title: 'How to Choose the Right ETF',
      description: 'A practical guide to picking the right ETF using key metrics like tracking error, expense ratio, and liquidity.',
      readingTime: '8 min read',
      category: 'Beginner',
      tags: ['ETF Selection', 'Tracking Error', 'Expense Ratio', 'Liquidity'],
      content: `
        <h2>Choosing an ETF: It's Not Just About the Index</h2>
        <p>Let's say you want to invest in the Nifty 50.</p>
        <p>You search online and find 10+ ETFs that track it.</p>
        <p>So which one do you pick? Aren't they all the same?</p>
        <p><strong>Not quite.</strong></p>
        <p>This guide will show you how to evaluate and compare ETFs — using five clear, data-driven metrics — so you don't just buy an ETF, you buy the right one.</p>
        
        <h2>1. Tracking Error: How Well Does It Mirror the Index?</h2>
        <p><strong>Definition:</strong> Tracking error measures how closely an ETF's performance matches the index it's supposed to track.</p>
        <p>A lower tracking error is better. It means:</p>
        <ul>
          <li>The fund is replicating the index efficiently</li>
          <li>You're actually getting the index return you expect</li>
        </ul>
        <p><strong>📌 Look for:</strong></p>
        <ul>
          <li>Tracking error < 0.5% for large-cap indices</li>
          <li>Higher error is okay for thematic or international ETFs, but still should be monitored</li>
        </ul>
        <p><strong>👉 Where to find it:</strong> AMC websites, NSE/BSE factsheets, or portals like Morningstar</p>
        
        <h2>2. Expense Ratio: What Are You Paying?</h2>
        <p>Even if it's passive, an ETF still charges a fee — the expense ratio.</p>
        <p>This affects your net return.</p>
        <p><strong>For example:</strong></p>
        <ul>
          <li>If Nifty gives 12% and your ETF charges 0.2%, you only get 11.8%.</li>
        </ul>
        <p><strong>📌 Look for:</strong></p>
        <ul>
          <li>Expense ratio < 0.2% for plain vanilla ETFs like Nifty 50, Sensex</li>
          <li>Slightly higher ratios are okay for niche ETFs (e.g., sectoral or global)</li>
        </ul>
        <p><strong>👉</strong> Compare expense ratios across similar ETFs before buying.</p>
        
        <h2>3. Liquidity: Can You Easily Buy or Sell?</h2>
        <p>ETFs trade on the stock exchange, so liquidity matters.</p>
        <p>Low volumes = higher spreads = extra cost when buying/selling.</p>
        <p><strong>📌 Check:</strong></p>
        <ul>
          <li>Average daily traded volume</li>
          <li>Bid-ask spread — ideally < ₹0.10 for liquid ETFs</li>
          <li>Market depth — more buyers/sellers means tighter pricing</li>
        </ul>
        <p><strong>💡 Pro Tip:</strong> Use limit orders instead of market orders if liquidity is low.</p>
        
        <h2>4. AUM (Assets Under Management): Is It Too Small?</h2>
        <p>Very low AUM can be risky:</p>
        <ul>
          <li>The ETF might shut down</li>
          <li>Liquidity may stay poor</li>
          <li>Expense ratio might rise over time</li>
        </ul>
        <p><strong>📌 As a rule of thumb:</strong></p>
        <ul>
          <li>AUM > ₹500 crore = safer, more stable</li>
          <li>Be cautious with ETFs under ₹100 crore</li>
        </ul>
        
        <h2>5. Fund House & Tracking Method</h2>
        <p>Check who runs the ETF:</p>
        <ul>
          <li>Established AMCs like SBI, HDFC, ICICI, Motilal Oswal, and Nippon generally have better infrastructure</li>
        </ul>
        <p>Also check replication method:</p>
        <ul>
          <li><strong>Full replication:</strong> Buys all stocks in the index</li>
          <li><strong>Sampling:</strong> Buys a subset (common in bond/illiquid ETFs)</li>
          <li><strong>Synthetic:</strong> Uses derivatives (rare in India, but important for global ETFs)</li>
        </ul>
        <p>Prefer full replication for transparency and lower error.</p>
        
        <h2>Bonus: Growth vs Dividend Option</h2>
        <p>Most Indian ETFs offer Growth by default (returns get reinvested).</p>
        <p>Some offer Dividend, where payouts are made regularly.</p>
        <p>Unless you need income, Growth is better for long-term compounding.</p>
        
        <h2>Quick Comparison Table</h2>
        <table>
          <tr>
            <th>Metric</th>
            <th>What to Look For</th>
          </tr>
          <tr>
            <td>Tracking Error</td>
            <td>< 0.5% (lower is better)</td>
          </tr>
          <tr>
            <td>Expense Ratio</td>
            <td>< 0.2% for broad ETFs</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>High volume, tight spread</td>
          </tr>
          <tr>
            <td>AUM</td>
            <td>₹500 crore or more</td>
          </tr>
          <tr>
            <td>Replication Method</td>
            <td>Prefer full replication</td>
          </tr>
        </table>
        
        <h2>Example: Choosing Between Two Nifty ETFs</h2>
        <table>
          <tr>
            <th>Feature</th>
            <th>ETF A (SBI Nifty 50 ETF)</th>
            <th>ETF B (XYZ Nifty 50 ETF)</th>
          </tr>
          <tr>
            <td>Expense Ratio</td>
            <td>0.07%</td>
            <td>0.20%</td>
          </tr>
          <tr>
            <td>Tracking Error</td>
            <td>0.12%</td>
            <td>0.38%</td>
          </tr>
          <tr>
            <td>Avg Daily Volume</td>
            <td>₹15 crore</td>
            <td>₹1 crore</td>
          </tr>
          <tr>
            <td>AUM</td>
            <td>₹18,000 crore</td>
            <td>₹250 crore</td>
          </tr>
        </table>
        <p><strong>✅ ETF A wins on every parameter.</strong></p>
        
        <h2>Final Thoughts</h2>
        <p>Don't pick an ETF just because it tracks your desired index. Look under the hood.</p>
        <ul>
          <li>Low cost</li>
          <li>Low tracking error</li>
          <li>High liquidity</li>
          <li>Trusted AMC</li>
        </ul>
        <p>These small choices can add up to significant long-term gains.</p>
      `
    },
    'how-etfs-work-india': {
      title: 'What Makes an ETF Unique: How They\'re Created, Managed, and Traded',
      description: 'Ever wondered how ETFs actually function? Learn how ETFs are created, managed, and traded on exchanges – and what makes them different from mutual funds.',
      readingTime: '7 min read',
      category: 'Beginner',
      tags: ['ETF Mechanics', 'Creation', 'Trading', 'Market Makers'],
      content: `
        <h2>ETFs Are Simple on the Surface, Complex Behind the Scenes</h2>
        <p>To you, an ETF is just a stock-like product you buy on NSE or BSE.</p>
        <p>But underneath that clean UI is a complex machine:</p>
        <p>ETFs are created by institutions, tracked by index providers, traded by market makers, and priced by supply-demand dynamics.</p>
        <p>Let's lift the hood.</p>
        
        <h2>1. The ETF Creation Process: Behind-the-Scenes Magic</h2>
        <p>ETFs aren't made by adding stocks manually into a fund. It involves institutional muscle.</p>
        <p><strong>Key Players:</strong></p>
        <ul>
          <li><strong>AMC (Asset Management Company):</strong> Designs and manages the ETF</li>
          <li><strong>Index Provider:</strong> Defines what the ETF should track (e.g., NSE provides Nifty 50)</li>
          <li><strong>Authorised Participants (APs):</strong> Large institutions that create/redeem ETF units by depositing the underlying stocks</li>
          <li><strong>Custodian:</strong> Holds the underlying assets on behalf of the AMC</li>
        </ul>
        <p><strong>✅ Creation:</strong> AP gives the ETF issuer a basket of stocks (say Nifty 50) → gets ETF units</p>
        <p><strong>✅ Redemption:</strong> AP returns ETF units → gets the equivalent stock basket back</p>
        <p>This is called the in-kind creation/redemption process.</p>
        
        <h2>2. NAV vs. Market Price: Understanding ETF Pricing</h2>
        <p>Every ETF has two prices:</p>
        <ul>
          <li><strong>NAV (Net Asset Value):</strong> The value of underlying assets — calculated once daily</li>
          <li><strong>Market Price:</strong> The price at which the ETF trades on NSE/BSE — changes real-time</li>
        </ul>
        <p>Unlike mutual funds, which are bought at NAV, ETFs are bought at market price, which may trade slightly above or below NAV due to supply-demand.</p>
        <p>That difference is called a premium or discount.</p>
        <p><strong>📊 Example:</strong></p>
        <ul>
          <li>Nifty 50 ETF NAV: ₹225</li>
          <li>Trading on NSE at ₹226.50 → 0.67% premium</li>
        </ul>
        
        <h2>3. Role of Market Makers & Arbitrage</h2>
        <p>To ensure ETFs don't deviate too much from NAV, market makers step in.</p>
        <p><strong>If price > NAV:</strong></p>
        <ul>
          <li>→ Market makers sell ETF units and buy underlying stocks (arbitrage)</li>
          <li>→ This brings ETF price down</li>
        </ul>
        <p><strong>If price < NAV:</strong></p>
        <ul>
          <li>→ They buy ETF units and sell stocks</li>
          <li>→ This brings ETF price up</li>
        </ul>
        <p><strong>🧠</strong> This arbitrage mechanism keeps ETF prices efficient.</p>
        
        <h2>4. Why Liquidity Looks Low But Isn't Always</h2>
        <p>ETFs often show low "traded volumes" on screen — but that doesn't mean you can't buy/sell in large quantities.</p>
        <p>Because creation/redemption can happen on demand, institutions can offer liquidity even in low-volume ETFs.</p>
        <p><strong>📌 Tip:</strong> Look at the bid-ask spread and iNAV tracking instead of just volumes.</p>
        
        <h2>5. How ETFs Are Managed: Passive & Transparent</h2>
        <p>Most ETFs in India are passively managed — the fund manager doesn't take calls like which stock to buy/sell.</p>
        <p>They simply mirror the index.</p>
        <ul>
          <li>No human bias</li>
          <li>Lower costs</li>
          <li>Rebalanced automatically as per index changes</li>
        </ul>
        
        <h2>Key Takeaways</h2>
        <table>
          <tr>
            <th>Feature</th>
            <th>Mutual Funds</th>
            <th>ETFs</th>
          </tr>
          <tr>
            <td>Purchase Method</td>
            <td>NAV (end of day)</td>
            <td>Real-time on exchange</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>NAV only</td>
            <td>NAV + market price</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>AMC handles</td>
            <td>Exchange + APs + arbitrage</td>
          </tr>
          <tr>
            <td>Management Style</td>
            <td>Active/Passive</td>
            <td>Mostly passive</td>
          </tr>
          <tr>
            <td>Transparency</td>
            <td>Portfolio monthly</td>
            <td>Real-time tracking</td>
          </tr>
          <tr>
            <td>Costs</td>
            <td>Higher (1–2%)</td>
            <td>Lower (0.05% – 0.5%)</td>
          </tr>
        </table>
        
        <h2>Final Thoughts</h2>
        <p>ETFs may look simple, but they're backed by a sophisticated system designed for liquidity, efficiency, and low cost.</p>
        <p>Understanding how ETFs work helps you use them more confidently — whether you're buying a Nifty 50 ETF or exploring Bharat Bond.</p>
      `
    },
    'etf-liquidity-importance': {
      title: 'Liquidity in ETFs: What It Means and Why It Matters',
      description: 'A practical guide to understanding ETF liquidity, how it affects your buy/sell experience, and what to check before investing.',
      readingTime: '6 min read',
      category: 'Intermediate',
      tags: ['Liquidity', 'Bid-Ask Spread', 'Trading', 'Market Depth'],
      content: `
        <h2>What Is Liquidity in ETFs?</h2>
        <p>Liquidity refers to how easily and quickly you can buy or sell an ETF without significantly affecting its price.</p>
        <p>In the stock market, more liquidity = tighter bid-ask spread and smoother transactions.</p>
        <p>For ETFs, liquidity matters because:</p>
        <ul>
          <li>It affects how easily you can exit</li>
          <li>It determines how close your trade is to the actual value of the ETF</li>
        </ul>
        
        <h2>Two Layers of ETF Liquidity</h2>
        <p><strong>Primary Liquidity:</strong> This comes from the underlying securities in the ETF. If an ETF holds large, frequently traded stocks (like Reliance, HDFC Bank), it has high primary liquidity.</p>
        <p><strong>Secondary Liquidity (The one that matters to us):</strong> This comes from the ETF units themselves being traded on the exchange. The more active the ETF, the easier it is to buy/sell.</p>
        <p><strong>Important:</strong> Even if an ETF doesn't have high volume, if the underlying assets are liquid, market makers can still facilitate smooth buying/selling.</p>
        
        <h2>Example: Nifty 50 ETF vs PSU Bank ETF</h2>
        <p><strong>Nifty 50 ETF:</strong></p>
        <ul>
          <li>Underlying: Top 50 companies — highly liquid</li>
          <li>Units traded daily: High</li>
          <li>→ Very easy to buy/sell with tight spreads</li>
        </ul>
        <p><strong>PSU Bank ETF:</strong></p>
        <ul>
          <li>Underlying: Mostly liquid banks, but fewer traders</li>
          <li>Units traded daily: Moderate to low</li>
          <li>→ Slightly wider spreads, might take longer to execute large trades</li>
        </ul>
        
        <h2>What Is Bid-Ask Spread?</h2>
        <p>The bid is the highest price a buyer is willing to pay.</p>
        <p>The ask is the lowest price a seller is willing to accept.</p>
        <ul>
          <li>Tight spread = high liquidity</li>
          <li>Wide spread = lower liquidity</li>
        </ul>
        <p><strong>Example:</strong></p>
        <ul>
          <li>Bid: ₹102</li>
          <li>Ask: ₹102.05 → Tight spread, good liquidity</li>
          <li>Ask: ₹103.50 → Wide spread, poor liquidity</li>
        </ul>
        <p>Always check this when placing orders, especially in less popular ETFs.</p>
        
        <h2>How to Check ETF Liquidity?</h2>
        <p>Here's a simple checklist:</p>
        <ul>
          <li><strong>✅ Trading Volume:</strong> Look at the average daily traded volume on NSE/BSE. Higher is better.</li>
          <li><strong>✅ Bid-Ask Spread:</strong> Narrow spreads indicate better liquidity.</li>
          <li><strong>✅ Underlying Liquidity:</strong> Are the underlying stocks traded frequently?</li>
          <li><strong>✅ AUM Size:</strong> Larger AUM typically means more investor interest, hence better liquidity.</li>
          <li><strong>✅ Premium/Discount:</strong> Check if the ETF is trading close to its NAV. Big deviation signals potential liquidity issues.</li>
        </ul>
        
        <h2>Smart Tips for Retail Investors</h2>
        <ul>
          <li>Use limit orders instead of market orders for low-volume ETFs to avoid price shocks.</li>
          <li>Trade during high volume hours — usually between 10:30 AM to 2:30 PM.</li>
          <li>If you're investing a large amount, break it into chunks to avoid moving the price.</li>
        </ul>
        
        <h2>Final Thoughts</h2>
        <p>Liquidity is often ignored by new investors, but it directly affects your ETF investing experience. Even the best ETF can become frustrating if you can't exit when needed or if the price deviates significantly from NAV.</p>
        <p>By checking trading volume, spreads, and underlying liquidity, you can avoid surprises and invest with confidence.</p>
        <p>Just like you wouldn't buy real estate without checking resale value, don't ignore liquidity while buying ETFs.</p>
      `
    },
    'etf-nav-vs-market-price': {
      title: 'ETF NAV vs Market Price: Why They\'re Different',
      description: 'ETFs don\'t always trade exactly at their NAV. Here\'s why that happens, how iNAV works, and what you should watch out for – especially with international ETFs.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['NAV', 'iNAV', 'Premiums', 'Discounts', 'Pricing'],
      content: `
        <h2>What Is NAV in ETFs?</h2>
        <p>NAV (Net Asset Value) is the total value of the ETF's underlying holdings divided by the number of units.</p>
        <p><strong>For example:</strong> If an ETF holds ₹100 crore worth of stocks and has 10 lakh units outstanding, its NAV is:</p>
        <p><strong>NAV = ₹100 crore / 10 lakh = ₹1,000 per unit</strong></p>
        <p>NAV is calculated once a day, usually at the end of the trading session — just like mutual funds.</p>
        
        <h2>But ETFs Trade Like Stocks…</h2>
        <p>Unlike mutual funds, ETFs are listed on stock exchanges — so their price fluctuates throughout the day based on demand and supply.</p>
        <p>This traded price is what you see on platforms like Zerodha or Groww.</p>
        <p>That's why you might see:</p>
        <ul>
          <li>NAV of an ETF at ₹99</li>
          <li>But the traded price at ₹101</li>
        </ul>
        
        <h2>What is iNAV?</h2>
        <p>iNAV, or Indicative Net Asset Value, is a real-time estimate of an Exchange Traded Fund (ETF)'s value, updated frequently during market hours.</p>
        <p>To help bridge the gap, AMCs and exchanges publish a live estimate called iNAV (Indicative NAV) every 15 seconds.</p>
        <p>This helps investors see a near real-time value of what the ETF should be worth, based on current prices of its underlying holdings.</p>
        <p>However, this NAV doesn't always match the traded price, especially in the following situations.</p>
        
        <h2>Why Do ETFs Trade at a Premium or Discount?</h2>
        
        <h3>1. Demand–Supply Gap</h3>
        <p>Like any stock, if more people are buying the ETF than selling it, the price goes up. This demand may not immediately reflect in the NAV.</p>
        
        <h3>2. Market Timing Issues</h3>
        <p>For example, international ETFs (like Nasdaq 100 ETFs) track the US market. If you're trading them during Indian hours (when the US market is closed), the ETF price moves based on expectations, not actual NAV.</p>
        
        <h3>3. Creation/Redemption Delays</h3>
        <p>Large investors (called authorized participants) help maintain ETF pricing by creating or redeeming units. But if this process gets delayed — especially in smaller or international ETFs — pricing can go haywire temporarily.</p>
        
        <h3>4. Upper/Lower Circuit Limits</h3>
        <p>SEBI has imposed circuit limits (often 5%) on international ETFs to prevent wild swings. If the ETF hits the upper limit due to demand, but no more units are being created, it may trade significantly above its NAV.</p>
        
        <h2>Real Example: International ETFs and Premiums</h2>
        <p>In late 2022, several Nasdaq 100 and S&P 500 ETFs in India were trading at 8–15% premiums to their NAV.</p>
        <p><strong>Why?</strong></p>
        <ul>
          <li>SEBI had capped overseas investments at $7 billion per AMC.</li>
          <li>So, fund houses stopped creating new ETF units.</li>
          <li>But retail demand continued rising.</li>
          <li>Result: prices went up, but NAV stayed the same → leading to inflated premiums.</li>
        </ul>
        <p>Investors who bought during this period unknowingly paid much more than what the underlying US stocks were worth.</p>
        
        <h2>Why Should You Care?</h2>
        <p>Paying too much above NAV means you're overpaying for the same underlying assets.</p>
        <p><strong>Let's say:</strong></p>
        <ul>
          <li>NAV of Nasdaq ETF = ₹400</li>
          <li>Traded price = ₹460</li>
        </ul>
        <p>You're paying ₹60 extra per unit, which won't reflect in returns unless the index itself rises enough to cover that.</p>
        <p>When you eventually sell — especially if the premium normalizes — you may get lower returns or even a loss despite the index rising.</p>
        
        <h2>Tips to Avoid Overpaying</h2>
        
        <h3>Check NAV vs Market Price</h3>
        <p>Most AMCs publish NAV on their websites or stock exchange sites (NSE/BSE). Avoid buying when the market price is far above it.</p>
        
        <h3>Avoid Thinly Traded ETFs</h3>
        <p>If the ETF has low trading volume, spreads can be wide. Use limit orders instead of market orders.</p>
        
        <h3>Be Extra Cautious With International ETFs</h3>
        <p>Look at global market cues before investing. Also, check if unit creation is currently paused due to SEBI limits.</p>
        
        <h2>Final Thoughts</h2>
        <p>NAV is the true value of an ETF's assets. But ETFs don't always trade at that value due to market forces, especially in India where liquidity and regulatory limits can affect international ETF pricing.</p>
        <p>Understanding NAV, iNAV, and traded price can help you avoid overpaying — and make smarter, more informed decisions.</p>
        <p>An ETF is a powerful tool — just make sure you're not paying a premium price for a budget-value product.</p>
      `
    },
    'how-to-buy-etf-india': {
      title: 'How to Buy Your First ETF in India: Step-by-Step Guide for Beginners',
      description: 'A beginner-friendly walkthrough on opening a demat account, choosing a broker, and making your first ETF purchase.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETF Investing', 'Demat Account', 'DIY Investing', 'First Purchase'],
      content: `
        <h2>Why This Matters</h2>
        <p>ETFs are a great low-cost way to invest in the stock market, but the process of buying your first ETF can feel intimidating. This guide breaks it down — step by step — so that even if you've never invested before, you'll walk away knowing exactly what to do.</p>
        
        <h2>Step 1: Open a Demat + Trading Account</h2>
        <p>To invest in ETFs, you need both:</p>
        <ul>
          <li><strong>Demat Account</strong> – holds your ETF units electronically.</li>
          <li><strong>Trading Account</strong> – lets you place buy/sell orders on the exchange.</li>
        </ul>
        <p>Most platforms offer both together. Popular brokers in India include:</p>
        <table>
          <tr>
            <th>Platform</th>
            <th>Known For</th>
          </tr>
          <tr>
            <td>Zerodha</td>
            <td>Simplicity, low cost</td>
          </tr>
          <tr>
            <td>Groww</td>
            <td>Mobile-first interface</td>
          </tr>
          <tr>
            <td>Upstox</td>
            <td>Fast account opening</td>
          </tr>
          <tr>
            <td>Angel One</td>
            <td>Strong advisory tools</td>
          </tr>
        </table>
        <p><strong>✅ Tip:</strong> Choose a broker that charges zero account opening fees and low annual maintenance charges.</p>
        
        <h2>Step 2: Complete KYC</h2>
        <p>You'll need to verify your identity. Keep these ready:</p>
        <ul>
          <li>PAN Card</li>
          <li>Aadhaar Card (linked with mobile number for OTP)</li>
          <li>Bank proof (cheque or statement)</li>
          <li>A selfie</li>
        </ul>
        <p>The whole KYC process is digital and takes ~10–15 minutes. Approval can take a few hours to a day.</p>
        
        <h2>Step 3: Fund Your Account</h2>
        <p>Once your account is live:</p>
        <ul>
          <li>Add your bank account.</li>
          <li>Transfer funds using UPI, Net Banking, or IMPS.</li>
          <li>You'll now see this reflected in your broker dashboard.</li>
        </ul>
        <p>No need to pre-decide the ETF yet. Fund your account first.</p>
        
        <h2>Step 4: Search and Select Your ETF</h2>
        <p>You can now search for ETFs in your broker app like you search for stocks.</p>
        <p><strong>Example queries:</strong></p>
        <ul>
          <li>"Nifty 50 ETF"</li>
          <li>"Nippon Gold ETF"</li>
          <li>"ICICI US Equity ETF"</li>
          <li>"Kotak Banking ETF"</li>
        </ul>
        <p>Click on the result and check:</p>
        <ul>
          <li>Fund details</li>
          <li>Expense ratio</li>
          <li>Liquidity (volume traded)</li>
          <li>Underlying index (Nifty 50, Sensex, Nasdaq 100, etc.)</li>
        </ul>
        <p><strong>✅ Tip:</strong> For your first ETF, stick with a large, high-volume index like a Nifty 50 or Sensex ETF.</p>
        
        <h2>Step 5: Place Your First Order</h2>
        <p>Once you've decided:</p>
        <ul>
          <li>Enter the quantity (1 unit = 1 share of the ETF)</li>
          <li>Choose order type:
            <ul>
              <li><strong>Market order</strong> – buy instantly at best available price</li>
              <li><strong>Limit order</strong> – set your own price and wait for match</li>
            </ul>
          </li>
          <li>Hit Buy</li>
        </ul>
        <p>That's it — once it's executed, the ETF units will appear in your Demat holdings.</p>
        
        <h2>Step 6: Track Your Investment</h2>
        <ul>
          <li>You can track live prices daily</li>
          <li>Dividends (if any) get credited to your bank</li>
        </ul>
        <p><strong>✅ Optional:</strong> Set up reminders to review your ETF once a quarter. No need to check daily.</p>
        
        <h2>FAQs for First-Time ETF Investors</h2>
        <p><strong>Q: How much money do I need to start?</strong></p>
        <p>A: Just enough to buy 1 unit. For many ETFs, this is ₹100–₹500.</p>
        
        <p><strong>Q: Can I set up a SIP in an ETF?</strong></p>
        <p>A: Not directly like mutual funds. But you can manually invest a fixed amount every month.</p>
        
        <p><strong>Q: What if I want to sell later?</strong></p>
        <p>A: Just place a Sell order during market hours — it's as easy as buying.</p>
        
        <h2>Closing Thoughts</h2>
        <p>Buying your first ETF might feel like a big leap, but it's actually one of the simplest and smartest ways to start your investing journey.</p>
        <p>By following this 6-step process, you're not just buying a fund — you're building a lifelong habit of disciplined investing. Whether you want to invest ₹500 a month or ₹5,000, ETFs offer the flexibility and diversification to help you get started with confidence.</p>
      `
    },
    'etf-costs-india': {
      title: 'Understanding ETF Costs: Expense Ratios, Brokerage, and Hidden Fees Explained',
      description: 'Breaking down all the costs associated with ETF investing in India — what they are, how they impact returns, and what to watch out for.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['ETF Costs', 'Expense Ratio', 'Investing Fees', 'Hidden Charges'],
      content: `
        <h2>Why This Matters</h2>
        <p>One of the biggest attractions of ETFs is their low cost — but "low" doesn't mean "free." From expense ratios to brokerage to hidden trading charges, it's important to know what you're actually paying. Understanding these costs ensures you don't unknowingly lose returns to small fees that add up.</p>
        
        <h2>1. Expense Ratio (Charged by AMC)</h2>
        <p>This is the annual fee charged by the ETF provider (AMC) to manage the fund. It's expressed as a percentage of your investment.</p>
        <p><strong>Example:</strong></p>
        <ul>
          <li>You invest ₹10,000 in an ETF.</li>
          <li>The expense ratio is 0.20%.</li>
          <li>You pay ₹20 per year.</li>
        </ul>
        <p><strong>✅ Good to know:</strong> Expense ratios for Indian ETFs are very low, typically:</p>
        <ul>
          <li>0.05% – 0.30% for index ETFs</li>
          <li>0.40% – 0.75% for international or thematic ETFs</li>
        </ul>
        <p>You don't pay this directly — it's adjusted daily in the NAV.</p>
        
        <h2>2. Brokerage Charges (Charged by Broker)</h2>
        <p>ETFs are traded like stocks, so your broker may charge a fee when you buy/sell.</p>
        <table>
          <tr>
            <th>Broker</th>
            <th>Delivery Charges (Buy & Hold)</th>
          </tr>
          <tr>
            <td>Zerodha</td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>Groww</td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>Upstox</td>
            <td>₹20 or 2.5% (whichever lower)</td>
          </tr>
          <tr>
            <td>ICICI Direct</td>
            <td>~₹20–₹25 per trade</td>
          </tr>
        </table>
        <p><strong>✅ Pro Tip:</strong> If you're a long-term ETF investor, choose brokers with zero delivery charges.</p>
        
        <h2>3. Exchange Transaction Charges</h2>
        <p>These are standard charges collected by exchanges like NSE/BSE and passed to you by your broker. They're very small but good to be aware of.</p>
        <table>
          <tr>
            <th>Fee Type</th>
            <th>Approximate Rate</th>
          </tr>
          <tr>
            <td>Exchange transaction fee</td>
            <td>₹325 per crore (~₹0.03 per ₹1,000)</td>
          </tr>
          <tr>
            <td>SEBI turnover fee</td>
            <td>₹10 per crore</td>
          </tr>
          <tr>
            <td>Stamp duty</td>
            <td>0.015% on buy side only</td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on brokerage + fees</td>
          </tr>
        </table>
        <p><strong>🧠</strong> These add up to a few paise or rupees per ₹1,000 — not a deal-breaker, but still part of your total cost.</p>
        
        <h2>4. Bid-Ask Spread (Hidden Cost While Trading)</h2>
        <p>The bid is the highest price someone is willing to pay.</p>
        <p>The ask is the lowest price someone is willing to sell at.</p>
        <p>The difference = spread — and this affects your actual buying/selling cost.</p>
        <p><strong>Example:</strong></p>
        <ul>
          <li>You want to buy an ETF.</li>
          <li>Bid is ₹100. Ask is ₹101.</li>
          <li>You buy at ₹101 — that ₹1 gap is your "invisible" cost.</li>
        </ul>
        <p><strong>✅ Pro Tip:</strong> Stick to high-volume ETFs with narrow spreads (e.g., Nifty 50 ETFs) to avoid this cost.</p>
        
        <h2>5. Tracking Error (Indirect Cost)</h2>
        <p>Tracking error is the difference between the ETF's returns and the index it's supposed to mimic. It's not a fee, but a performance drag.</p>
        <p><strong>Reasons include:</strong></p>
        <ul>
          <li>Expense ratio</li>
          <li>Cash held for liquidity</li>
          <li>Delays in index replication</li>
          <li>Poor fund management</li>
        </ul>
        <p>Look for ETFs with low tracking error (less than 1% for broad index ETFs).</p>
        
        <h2>6. Currency Conversion Charges (For International ETFs)</h2>
        <p>If you buy international ETFs (like Nasdaq 100), they're often structured as Fund of Funds (FoFs). These involve currency conversion when the AMC buys foreign assets.</p>
        <p><strong>Indirect charges can include:</strong></p>
        <ul>
          <li>Currency spread (₹/$)</li>
          <li>Additional FoF expense ratio (sometimes > 0.5%)</li>
        </ul>
        <p><strong>✅ Pro Tip:</strong> Always check total expense ratio (TER) and not just base TER for such ETFs.</p>
        
        <h2>Summary: All ETF Costs You Should Know</h2>
        <table>
          <tr>
            <th>Cost Type</th>
            <th>Who Charges It?</th>
            <th>Typical Range</th>
          </tr>
          <tr>
            <td>Expense Ratio</td>
            <td>Fund House (AMC)</td>
            <td>0.05% – 0.75%</td>
          </tr>
          <tr>
            <td>Brokerage</td>
            <td>Broker</td>
            <td>₹0 – ₹25 per trade</td>
          </tr>
          <tr>
            <td>Exchange + Govt Charges</td>
            <td>NSE/BSE + Govt</td>
            <td>Negligible</td>
          </tr>
          <tr>
            <td>Bid-Ask Spread</td>
            <td>Market trading condition</td>
            <td>0.1% – 0.5% (varies)</td>
          </tr>
          <tr>
            <td>Tracking Error</td>
            <td>Indirect performance loss</td>
            <td>0.1% – 1%</td>
          </tr>
          <tr>
            <td>Currency Charges</td>
            <td>Fund Structure (FoF)</td>
            <td>0.5%+ (check factsheet)</td>
          </tr>
        </table>
        
        <h2>Closing Thoughts</h2>
        <p>ETFs are still one of the most cost-efficient ways to invest — especially when compared to mutual funds or ULIPs. But being aware of these costs puts you in control. Don't just chase the lowest expense ratio; look at total cost of ownership.</p>
        <p>Because in investing, what you don't see often hurts the most.</p>
      `
    },
    'top-etfs-for-beginners-india': {
      title: 'Top 10 ETFs Every Indian Beginner Should Know About',
      description: 'Discover 10 beginner-friendly ETFs in India with high liquidity, low expense ratios, and strong performance. A perfect starting point for new investors.',
      readingTime: '6 min read',
      category: 'Beginner',
      tags: ['Top ETFs', 'Beginner Investing', 'Popular ETFs', 'Diversification'],
      content: `
        <h2>A curated list of high-quality, liquid ETFs to get started with confidence</h2>
        <p>If you're just starting your ETF journey in India, the sheer number of choices can feel overwhelming. This article cuts through the noise and brings you a curated list of 10 ETFs that are beginner-friendly, widely used, and offer exposure to a diverse range of asset classes. These ETFs are selected based on liquidity, cost-efficiency, and relevance for Indian retail investors.</p>
        
        <h2>🧠 How This List Was Curated</h2>
        <p>We've considered the following key factors:</p>
        <ul>
          <li>High average daily traded volume</li>
          <li>Low tracking error</li>
          <li>Reasonable expense ratios</li>
          <li>Coverage across equity, debt, gold, and international themes</li>
        </ul>
        
        <h2>🏆 1. Nippon India Nifty 50 ETF</h2>
        <ul>
          <li><strong>Category:</strong> Large-cap equity</li>
          <li><strong>Tracks:</strong> Nifty 50 index</li>
          <li><strong>Why it matters:</strong> Great starting point for beginners. It gives exposure to India's 50 biggest and most traded companies.</li>
          <li><strong>Expense Ratio:</strong> ~0.05%</li>
          <li><strong>Liquidity:</strong> Very high</li>
        </ul>
        <p><strong>Ideal for:</strong> First-time investors who want core equity exposure.</p>
        
        <h2>🧰 2. ICICI Prudential Nifty Next 50 ETF</h2>
        <ul>
          <li><strong>Category:</strong> Mid-to-large cap equity</li>
          <li><strong>Tracks:</strong> Nifty Next 50 (the next 50 largest companies after the Nifty 50)</li>
          <li><strong>Why it matters:</strong> Historically shown strong long-term performance with slightly more volatility than Nifty 50.</li>
          <li><strong>Expense Ratio:</strong> ~0.09%</li>
        </ul>
        <p><strong>Ideal for:</strong> Investors looking to go slightly beyond blue-chips.</p>
        
        <h2>🌍 3. Motilal Oswal Nasdaq 100 ETF</h2>
        <ul>
          <li><strong>Category:</strong> International equity</li>
          <li><strong>Tracks:</strong> Nasdaq 100 (US tech-heavy index)</li>
          <li><strong>Why it matters:</strong> Exposure to global tech giants like Apple, Microsoft, and Google. Great diversification beyond India.</li>
          <li><strong>Expense Ratio:</strong> ~0.50%</li>
          <li><strong>Note:</strong> Keep an eye on tracking error and currency risk.</li>
        </ul>
        <p><strong>Ideal for:</strong> Adding global diversification to your Indian portfolio.</p>
        
        <h2>🏦 4. SBI ETF Nifty Bank</h2>
        <ul>
          <li><strong>Category:</strong> Sectoral (Banking)</li>
          <li><strong>Tracks:</strong> Nifty Bank index</li>
          <li><strong>Why it matters:</strong> Banking is a large and liquid sector in India. Useful for thematic bets or portfolio tilt.</li>
          <li><strong>Expense Ratio:</strong> ~0.25%</li>
        </ul>
        <p><strong>Ideal for:</strong> Investors who believe in the Indian banking growth story.</p>
        
        <h2>🛡️ 5. HDFC Gold ETF</h2>
        <ul>
          <li><strong>Category:</strong> Commodity</li>
          <li><strong>Tracks:</strong> Physical Gold Prices</li>
          <li><strong>Why it matters:</strong> Acts as an inflation hedge and portfolio stabilizer. Convenient way to invest in gold without storage hassles.</li>
          <li><strong>Expense Ratio:</strong> ~0.25%</li>
        </ul>
        <p><strong>Ideal for:</strong> Conservative investors or anyone looking to hedge equity exposure.</p>
        
        <h2>💰 6. Bharat Bond ETF (April 2033)</h2>
        <ul>
          <li><strong>Category:</strong> Debt</li>
          <li><strong>Tracks:</strong> PSU bonds maturing in 2033</li>
          <li><strong>Why it matters:</strong> Low-cost, tax-efficient way to invest in high-quality long-term debt. Held to maturity.</li>
          <li><strong>Expense Ratio:</strong> ~0.05%</li>
        </ul>
        <p><strong>Ideal for:</strong> Stable income seekers with long-term horizons.</p>
        
        <h2>📉 7. Nippon India Nifty BeES ETF</h2>
        <ul>
          <li><strong>Category:</strong> Large-cap equity</li>
          <li><strong>Tracks:</strong> Nifty 50 (India's first ETF)</li>
          <li><strong>Why it matters:</strong> Longest-running ETF in India. High liquidity and robust track record.</li>
          <li><strong>Expense Ratio:</strong> ~0.05%</li>
        </ul>
        <p><strong>Ideal for:</strong> Reliable and cost-efficient Nifty exposure.</p>
        
        <h2>🧠 8. Motilal Oswal Nifty 500 ETF</h2>
        <ul>
          <li><strong>Category:</strong> Broad-market equity</li>
          <li><strong>Tracks:</strong> Nifty 500</li>
          <li><strong>Why it matters:</strong> Diversified exposure to 500 companies across market caps and sectors.</li>
          <li><strong>Expense Ratio:</strong> ~0.30%</li>
        </ul>
        <p><strong>Ideal for:</strong> Investors seeking broader market exposure than just large caps.</p>
        
        <h2>🧪 9. ICICI Prudential IT ETF</h2>
        <ul>
          <li><strong>Category:</strong> Sectoral (Technology)</li>
          <li><strong>Tracks:</strong> Nifty IT Index</li>
          <li><strong>Why it matters:</strong> Captures India's strong IT exports and global competitiveness.</li>
          <li><strong>Expense Ratio:</strong> ~0.85%</li>
        </ul>
        <p><strong>Ideal for:</strong> Thematic investors who want to ride India's digital economy.</p>
        
        <h2>🌱 10. Edelweiss MSCI India Domestic ESG Select 30 ETF</h2>
        <ul>
          <li><strong>Category:</strong> ESG (Environmental, Social, Governance)</li>
          <li><strong>Tracks:</strong> ESG-focused Indian companies</li>
          <li><strong>Why it matters:</strong> A growing global trend — invests in companies with responsible and sustainable practices.</li>
          <li><strong>Expense Ratio:</strong> ~0.30%</li>
        </ul>
        <p><strong>Ideal for:</strong> Investors who want to align investing with values.</p>
        
        <h2>📌 Final Thoughts</h2>
        <p>This list offers something for every beginner: from core index funds to sectoral bets, from debt to international diversification. As you build your ETF portfolio, consider:</p>
        <ul>
          <li>Mixing different types (equity, debt, gold, international)</li>
          <li>Keeping expense ratios low</li>
          <li>Looking for high liquidity ETFs</li>
        </ul>
        <p>Stay consistent, stay diversified — and always invest with a goal in mind.</p>
      `
    },
    'dividend-etfs-vs-growth-etfs-india': {
      title: 'Dividend ETFs vs Growth ETFs: Which Strategy Suits Your Financial Goals?',
      description: 'Confused between dividend and growth ETFs? This guide helps Indian investors decide based on income needs, time horizon, and risk appetite.',
      readingTime: '5 min read',
      category: 'Beginner',
      tags: ['Dividend ETFs', 'Growth ETFs', 'Investing Strategy', 'Income Investing'],
      content: `
        <p>When investing in ETFs, you'll often come across two common types: Dividend ETFs and Growth ETFs. Both serve different purposes and cater to different financial goals. Understanding the distinction is crucial to building a portfolio that matches your needs.</p>
        
        <h2>What are Dividend ETFs?</h2>
        <p>Dividend ETFs invest in companies known for regularly paying dividends—a portion of profits shared with shareholders. These ETFs are designed to provide a steady income stream, which can be attractive for:</p>
        <ul>
          <li>Retirees seeking regular cash flows</li>
          <li>Conservative investors wanting lower volatility</li>
          <li>Those who prefer reinvesting dividends for compounding over time</li>
        </ul>
        <p>In India, some notable dividend ETFs include:</p>
        <ul>
          <li>ICICI Prudential Nifty Dividend ETF</li>
          <li>Nippon India Dividend Opportunities ETF</li>
          <li>HDFC Dividend Yield ETF</li>
        </ul>
        <p><strong>✅ Key Benefit:</strong> Regular income</p>
        <p><strong>⚠️ Watch Out:</strong> These ETFs may underperform in bull markets as dividend-paying companies tend to be more mature and slower-growing.</p>
        
        <h2>What are Growth ETFs?</h2>
        <p>Growth ETFs focus on companies with high growth potential, typically in sectors like technology, pharmaceuticals, or consumer services. These companies usually reinvest earnings back into the business rather than paying dividends.</p>
        <p>Growth ETFs aim for capital appreciation, making them ideal for:</p>
        <ul>
          <li>Young investors with longer time horizons</li>
          <li>Those seeking higher returns and are comfortable with volatility</li>
          <li>Investors who don't rely on investment income</li>
        </ul>
        <p>In India, examples of Growth ETFs include:</p>
        <ul>
          <li>Mirae Asset Nifty Next 50 ETF</li>
          <li>Motilal Oswal Nasdaq 100 ETF (International exposure)</li>
          <li>ICICI Prudential Nifty Midcap 150 ETF</li>
        </ul>
        <p><strong>✅ Key Benefit:</strong> Potential for higher returns</p>
        <p><strong>⚠️ Watch Out:</strong> More susceptible to market downturns and volatility</p>
        
        <h2>How to Decide Between Dividend and Growth ETFs?</h2>
        <p>Here's a basic framework to help guide your decision:</p>
        <table>
          <tr>
            <th>Question</th>
            <th>If Yes → Consider</th>
            <th>If No → Consider</th>
          </tr>
          <tr>
            <td>Do you need regular income?</td>
            <td>Dividend ETFs</td>
            <td>Growth ETFs</td>
          </tr>
          <tr>
            <td>Is your time horizon short?</td>
            <td>Dividend ETFs</td>
            <td>Growth ETFs</td>
          </tr>
          <tr>
            <td>Can you handle volatility for long-term gains?</td>
            <td>Growth ETFs</td>
            <td>Dividend ETFs</td>
          </tr>
          <tr>
            <td>Are you in retirement or nearing it?</td>
            <td>Dividend ETFs</td>
            <td>Growth ETFs</td>
          </tr>
          <tr>
            <td>Do you want international exposure and tech-focused returns?</td>
            <td>Growth ETFs</td>
            <td>Dividend ETFs</td>
          </tr>
        </table>
        
        <h2>Blending Both: A Balanced Approach</h2>
        <p>You don't have to choose just one.</p>
        <p>Many investors build a core-satellite portfolio, where Dividend ETFs provide a stable base (core), and Growth ETFs offer higher potential upside (satellite). For example:</p>
        <ul>
          <li>70% in Nifty 50/Nifty Dividend ETFs</li>
          <li>30% in Nasdaq 100/Next 50 Growth ETFs</li>
        </ul>
        <p>This approach offers diversification, stability, and growth potential.</p>
        
        <h2>Conclusion</h2>
        <p>Both Dividend and Growth ETFs have a place in a well-rounded portfolio. The best choice depends on your financial goals, time horizon, and risk appetite. As you gain clarity on what you want your investments to achieve—whether income or long-term wealth creation—you can mix and match these ETFs accordingly.</p>
      `
    },
    'smart-beta-vs-traditional-index-etfs': {
      title: 'Smart Beta ETFs vs Traditional Index ETFs — Understanding Factor Investing',
      description: 'Learn the difference between Smart Beta and traditional index ETFs. Understand how factor investing works and how to use these ETFs in your portfolio.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['Smart Beta', 'Factor Investing', 'Low Volatility', 'Value', 'Momentum'],
      content: `
        <h2>📘 Introduction: Index Investing, Upgraded</h2>
        <p>Traditional index ETFs simply track a market index like Nifty 50 or Sensex. They are passive and aim to replicate the market.</p>
        <p>Smart Beta ETFs try to do something better — they use rules-based strategies to target specific "factors" like:</p>
        <ul>
          <li>Low volatility (less risky stocks)</li>
          <li>Momentum (stocks that are rising fast)</li>
          <li>Value (cheap stocks)</li>
          <li>Quality (high-profit companies)</li>
        </ul>
        <p>So while traditional index ETFs ask: "What does the market look like?"</p>
        <p>Smart Beta ETFs ask: "What kind of stocks do I want exposure to within the market?"</p>
        
        <h2>📊 Example: Nifty 50 vs Nifty 50 Value 20</h2>
        <table>
          <tr>
            <th>ETF Name</th>
            <th>Tracks</th>
            <th>What It Focuses On</th>
          </tr>
          <tr>
            <td>Traditional Index ETF</td>
            <td>Nifty 50</td>
            <td>Top 50 large-cap companies</td>
          </tr>
          <tr>
            <td>Smart Beta ETF</td>
            <td>Nifty 50 Value 20</td>
            <td>20 value stocks from Nifty 50</td>
          </tr>
        </table>
        <p>The Value 20 ETF filters out the 20 stocks from the Nifty 50 that are considered "cheap" based on ratios like P/E, P/B, Dividend Yield.</p>
        <p>So you still get big companies, but with a "value" tilt.</p>
        
        <h2>🧠 Why It's Called "Smart Beta"</h2>
        <p>"Beta" = market return.</p>
        <p>"Smart" = you're tweaking that return using rules or filters.</p>
        <p>These are not actively managed by fund managers deciding which stock to buy.</p>
        <p>They follow a rules-based formula (ex: pick 30 stocks with lowest volatility).</p>
        
        <h2>🎯 Most Common Factors in Smart Beta</h2>
        <table>
          <tr>
            <th>Factor</th>
            <th>What It Targets</th>
            <th>ETF Example (India)</th>
          </tr>
          <tr>
            <td>Low Volatility</td>
            <td>Stocks that don't fluctuate much</td>
            <td>Nippon India Nifty Low Volatility 30</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>Undervalued stocks</td>
            <td>ICICI Prudential Nifty50 Value 20 ETF</td>
          </tr>
          <tr>
            <td>Momentum</td>
            <td>Stocks that are rising fast</td>
            <td>Motilal Oswal Nifty200 Momentum 30 ETF</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td>High-profitability companies</td>
            <td>ICICI Prudential Nifty200 Quality 30 ETF</td>
          </tr>
          <tr>
            <td>Alpha</td>
            <td>A mix of factors to outperform</td>
            <td>Mirae Asset Alpha ETF</td>
          </tr>
        </table>
        
        <h2>💡 When Should You Consider Smart Beta?</h2>
        <p><strong>✅ If you want to tilt your portfolio toward a certain style — like low-risk or value.</strong></p>
        <p><strong>✅ If you believe certain factors may outperform over time.</strong></p>
        <p><strong>✅ If you want slightly more control than just broad market exposure.</strong></p>
        <p>But remember — Smart Beta ETFs can underperform the broader market in certain conditions. For example:</p>
        <ul>
          <li>Momentum ETFs can fall fast in a correction</li>
          <li>Value ETFs may underperform when growth stocks are in favor</li>
        </ul>
        <p>So it's best to combine them with traditional ETFs.</p>
        
        <h2>🛠️ How to Build a Portfolio Using Both</h2>
        <p><strong>Sample Balanced Portfolio:</strong></p>
        <ul>
          <li>50% in Nifty 50 or Sensex ETF (Traditional Core)</li>
          <li>25% in Low Volatility ETF (Defensive Tilt)</li>
          <li>25% in Momentum or Value ETF (Growth Tilt)</li>
        </ul>
        <p>This is called a core-satellite approach:</p>
        <p>Core = Broad market index</p>
        <p>Satellite = Smart Beta for style tilts</p>
        
        <h2>📷 Infographic: Traditional vs Smart Beta ETFs</h2>
        <p>Here's a simple breakdown for clarity:</p>
        <table>
          <tr>
            <th></th>
            <th>Traditional ETF</th>
            <th>Smart Beta ETF</th>
          </tr>
          <tr>
            <td>Follows Market Index</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td>Actively Managed?</td>
            <td>❌ No</td>
            <td>❌ No</td>
          </tr>
          <tr>
            <td>Uses Rules/Factors?</td>
            <td>❌ No</td>
            <td>✅ Yes (like Low Volatility)</td>
          </tr>
          <tr>
            <td>Aims to Outperform?</td>
            <td>❌ No (match returns)</td>
            <td>✅ Yes (over long term)</td>
          </tr>
        </table>
        
        <h2>✅ Summary</h2>
        <p>Smart Beta ETFs give investors the power of index investing — with a twist.</p>
        <p>They help you:</p>
        <ul>
          <li>Target styles like value, momentum, or low risk</li>
          <li>Stick to rules, not fund manager predictions</li>
          <li>Potentially improve risk-adjusted returns</li>
        </ul>
        <p>They're not magic bullets — but they're smart tools.</p>
      `
    },
    'gold-etfs-vs-physical-vs-mutual-funds': {
      title: 'Gold ETFs vs Physical Gold vs Gold Mutual Funds — Complete Comparison',
      description: 'Confused between gold ETFs, physical gold, and gold mutual funds? Here\'s a simple comparison of all three options, covering costs, liquidity, and safety.',
      readingTime: '5 min read',
      category: 'Intermediate',
      tags: ['Gold ETFs', 'Physical Gold', 'Gold Mutual Funds', 'Investment Comparison'],
      content: `
        <h2>🪙 Gold Is Not Just Jewellery</h2>
        <p>In India, we love gold. But today, you don't need to buy coins or jewellery to invest in it.</p>
        <p>There are 3 popular ways to invest in gold:</p>
        <ul>
          <li>Physical Gold (coins, bars, jewellery)</li>
          <li>Gold ETFs (exchange-traded funds tracking gold price)</li>
          <li>Gold Mutual Funds (invest in gold ETFs indirectly)</li>
        </ul>
        
        <h2>⚖️ Side-by-Side Comparison</h2>
        <table>
          <tr>
            <th>Feature</th>
            <th>Physical Gold</th>
            <th>Gold ETFs</th>
            <th>Gold Mutual Funds</th>
          </tr>
          <tr>
            <td>Form</td>
            <td>Coins, bars, jewellery</td>
            <td>Demat units (1 unit = 1g)</td>
            <td>Mutual fund units</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>At home/bank locker</td>
            <td>In your demat account</td>
            <td>In mutual fund folio</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>Risk of theft</td>
            <td>Safe and insured</td>
            <td>Safe and insured</td>
          </tr>
          <tr>
            <td>Liquidity</td>
            <td>Medium (depends on buyer)</td>
            <td>High (buy/sell on stock exchange)</td>
            <td>Medium (redeem via AMC)</td>
          </tr>
          <tr>
            <td>Making Charges</td>
            <td>8-25% on jewellery</td>
            <td>No making charges</td>
            <td>No making charges</td>
          </tr>
          <tr>
            <td>Purity Concern</td>
            <td>Risk of adulteration</td>
            <td>99.5% pure (standardised)</td>
            <td>99.5% pure (via ETF)</td>
          </tr>
          <tr>
            <td>Minimum Investment</td>
            <td>High (few grams)</td>
            <td>As low as ₹1 on some platforms</td>
            <td>₹100–₹500 SIP possible</td>
          </tr>
          <tr>
            <td>Taxation</td>
            <td>LTCG after 3 years @ 20% with indexation</td>
            <td>Same as physical gold</td>
            <td>Same as physical gold</td>
          </tr>
          <tr>
            <td>Other Costs</td>
            <td>Locker rent</td>
            <td>Brokerage + Expense ratio (~0.5–1%)</td>
            <td>Expense ratio (~0.5–1.5%)</td>
          </tr>
        </table>
        
        <h2>🧠 What Are Gold ETFs?</h2>
        <p>Traded on the stock exchange, just like shares</p>
        <p>Each unit = 1 gram of gold (approx.)</p>
        <p>Backed by actual physical gold held by the fund</p>
        <p>You need a demat account to buy them</p>
        
        <p><strong>Popular Gold ETFs in India:</strong></p>
        <table>
          <tr>
            <th>ETF Name</th>
            <th>AMC</th>
          </tr>
          <tr>
            <td>Nippon India Gold ETF</td>
            <td>Nippon AMC</td>
          </tr>
          <tr>
            <td>SBI Gold ETF</td>
            <td>SBI Mutual Fund</td>
          </tr>
          <tr>
            <td>HDFC Gold ETF</td>
            <td>HDFC Mutual Fund</td>
          </tr>
          <tr>
            <td>ICICI Prudential Gold ETF</td>
            <td>ICICI Mutual Fund</td>
          </tr>
          <tr>
            <td>Axis Gold ETF</td>
            <td>Axis Mutual Fund</td>
          </tr>
        </table>
        
        <h2>🤔 What Are Gold Mutual Funds?</h2>
        <ul>
          <li>Mutual funds that invest in gold ETFs</li>
          <li>Good for investors without demat account</li>
          <li>Can start via SIP (₹100–₹500/month)</li>
        </ul>
        <p>They charge slightly higher expense ratio than Gold ETFs because they include the cost of the ETF + mutual fund management.</p>
        
        <h2>📦 Example Time</h2>
        <p>Let's say you want to invest ₹10,000 in gold.</p>
        <table>
          <tr>
            <th>Option</th>
            <th>What You Get</th>
            <th>Hidden Costs</th>
          </tr>
          <tr>
            <td>Physical Gold</td>
            <td>~5g gold (jewellery)</td>
            <td>Making charges, purity risk</td>
          </tr>
          <tr>
            <td>Gold ETF</td>
            <td>~10 units of ETF (1g each)</td>
            <td>Demat charges, brokerage</td>
          </tr>
          <tr>
            <td>Gold Mutual Fund</td>
            <td>Fund units worth ₹10,000</td>
            <td>Higher expense ratio</td>
          </tr>
        </table>
        
        <h2>🧩 Which One Should You Choose?</h2>
        <table>
          <tr>
            <th>You Should Consider…</th>
            <th>If You…</th>
          </tr>
          <tr>
            <td>Gold ETFs</td>
            <td>Want low-cost, safe, liquid exposure via demat</td>
          </tr>
          <tr>
            <td>Gold Mutual Funds</td>
            <td>Don't have demat account, want easy SIP in gold</td>
          </tr>
          <tr>
            <td>Physical Gold</td>
            <td>Want to wear it or gift it (not purely investment)</td>
          </tr>
        </table>
        
        <h2>📌 Final Thoughts</h2>
        <ul>
          <li>For investing purposes, Gold ETFs and Gold Mutual Funds are far better than physical gold</li>
          <li>ETFs are the most cost-effective if you already have a demat account</li>
          <li>Mutual Funds offer ease of SIPs and no need for demat</li>
          <li>Physical gold is good for emotions and culture — not portfolios</li>
        </ul>
      `
    }
  };
  
  if (!slug || !etfArticles[slug]) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="rounded-full bg-muted p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ArrowLeft className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/etfs" onClick={() => window.scrollTo(0, 0)}>Back to ETFs</Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  const article = etfArticles[slug];

  return (
    <MainLayout>
      <div className={`container ${isMobile ? 'py-4' : 'py-8'}`}>
        <Button variant="ghost" asChild className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to ETF Learning
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className={`mb-8 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className={`flex flex-wrap items-center gap-3 mb-4 ${isMobile ? 'gap-2 mb-3' : 'gap-3 mb-4'}`}>
              <Badge variant="outline" className={isMobile ? 'text-xs' : ''}>
                {article.category}
              </Badge>
              <div className={`flex items-center text-muted-foreground ${isMobile ? 'text-sm' : 'text-sm'}`}>
                <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                {article.readingTime}
              </div>
            </div>
            
            <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-2xl mb-3' : 'text-4xl mb-4'}`}>
              {article.title}
            </h1>
            
            <p className={`text-muted-foreground mb-6 leading-relaxed ${isMobile ? 'text-base mb-4' : 'text-xl mb-6'}`}>
              {article.description}
            </p>
          </header>

          {/* Content */}
          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            <style>{`
              .prose {
                line-height: 1.8;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
              }
              
              .prose h2 {
                margin-top: 2.5em;
                margin-bottom: 1em;
                font-size: ${isMobile ? '1.5em' : '1.75em'};
                font-weight: 700;
                line-height: 1.3;
                color: hsl(var(--foreground));
              }
              
              .prose h3 {
                margin-top: 2em;
                margin-bottom: 0.75em;
                font-size: ${isMobile ? '1.25em' : '1.5em'};
                font-weight: 600;
                line-height: 1.4;
                color: hsl(var(--foreground));
              }
              
              .prose p {
                margin-bottom: 1.75em;
                line-height: 1.8;
                font-size: ${isMobile ? '16px' : '18px'};
                color: hsl(var(--foreground));
              }
              
              .prose ul, .prose ol {
                margin-bottom: 1.75em;
                padding-left: 1.5em;
              }
              
              .prose li {
                margin-bottom: 0.75em;
                line-height: 1.7;
                font-size: ${isMobile ? '16px' : '18px'};
                position: relative;
                color: hsl(var(--foreground));
              }
              
              .prose ul li {
                list-style: none;
                padding-left: 1.5em;
              }
              
              .prose ul li:before {
                content: "•";
                color: hsl(var(--primary));
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 1.2em;
                line-height: 1.4;
              }
              
              .prose ol li {
                padding-left: 0.5em;
              }
              
              .prose strong {
                font-weight: 600;
                color: hsl(var(--foreground));
              }
              
              .prose blockquote {
                margin: 2.5em 0;
                padding: 1.5em;
                background: hsl(var(--muted));
                border-left: 4px solid hsl(var(--primary));
                border-radius: 0 8px 8px 0;
                font-style: italic;
              }
              
              .prose blockquote p {
                color: hsl(var(--muted-foreground));
              }
              
              .prose table {
                width: 100%;
                border-collapse: collapse;
                margin: 2em 0;
                font-size: ${isMobile ? '14px' : '16px'};
                overflow-x: auto;
                display: block;
                white-space: nowrap;
              }
              
              @media (min-width: 768px) {
                .prose table {
                  display: table;
                  white-space: normal;
                }
              }
              
              .prose th, .prose td {
                padding: ${isMobile ? '8px 6px' : '12px 16px'};
                text-align: left;
                border-bottom: 1px solid hsl(var(--border));
              }
              
              .prose th {
                font-weight: 600;
                background: hsl(var(--muted));
                font-size: ${isMobile ? '13px' : '15px'};
              }
              
              .prose td {
                font-size: ${isMobile ? '13px' : '15px'};
              }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Comments Section */}
          <div className={`mt-12 ${isMobile ? 'mt-8' : 'mt-12'}`}>
            <Comments articleId={slug || ''} />
          </div>

          {/* Footer Navigation */}
          <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link to="/etfs/learn" onClick={() => window.scrollTo(0, 0)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Link>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : ''}`}>
                  Found this helpful?
                </span>
                <ShareButton 
                  title={article.title}
                  url={`${window.location.origin}/etfs/learn/${slug}`}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </footer>
        </article>
      </div>
    </MainLayout>
  );
};

export default ETFLearnArticle;
