
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShareButton } from '@/components/shared/ShareButton';
import Comments from '@/components/shared/Comments';

const PsychologyArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const articles: Record<string, any> = {
    'overspend-emotions': {
      title: 'Why We Overspend When We\'re Happy (and Sad)',
      description: 'Understanding how our emotions drive spending decisions and learning to build strategies that work with our feelings, not against them.',
      readingTime: '6 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 20, 2024',
      content: `Money is often thought of as a simple equation: earn more, spend less, save the difference. But anyone who's tried to stick to a budget knows it's rarely that straightforward. The truth is, our spending habits are deeply tied to our emotions — sometimes in ways we don't even realize.

Take a moment to think about the last time you bought something you didn't really need. Was it because you were celebrating a success? Or maybe you were feeling down, stressed, or bored? Chances are, your mood played a bigger role than your logic.

I once spoke to a friend who had just landed a new job. To celebrate, she splurged on an expensive dinner and a new gadget. A few weeks later, after a tough breakup, she found herself ordering comfort food and online shopping late into the night. The purchases weren't about the items themselves — they were about how she was feeling.

This emotional spending is a universal human behavior. When we're happy, we reward ourselves. When we're sad, we seek comfort. When we're anxious, we try to regain control. Money becomes a tool to manage feelings, not just a means to buy things.

Here's the catch: most budgeting advice focuses on numbers and ignores emotions. But if you want to change your spending habits, you have to understand your emotional triggers. Instead of just tracking expenses, try tracking moods. Notice when you're more likely to spend impulsively. Is it after a stressful day? Or when you're celebrating a milestone?

Once you recognize these patterns, you can build strategies that work with your emotions, not against them. Maybe it's setting aside a small "fun fund" for celebrations, or finding healthier ways to cope with stress, like exercise or talking to a friend.

The goal isn't to eliminate emotional spending — that's impossible. It's to become aware of it, so your money decisions serve you, not your fleeting feelings.

In the end, money is more than math. It's psychology, emotion, and habit wrapped into one. The better you understand that, the better control you'll have over your financial life.`
    },
    'illusion-of-more': {
      title: 'The Illusion of "More"',
      description: 'Why the finish line for "enough" keeps moving and how real wealth comes from learning to say "this is enough."',
      readingTime: '8 min read',
      category: 'Money Mindset',
      publishedAt: 'Dec 18, 2024',
      content: `A few years ago, a friend of mine got a big promotion. His salary doubled overnight. He called me, thrilled, and said, "Now I'll finally be able to save, invest, and feel secure." Six months later, we met for dinner. He looked tired. "I'm still living paycheck to paycheck," he confessed. "I don't know where it all goes."

This isn't unusual. In fact, it's almost universal. The finish line for "enough" keeps moving. When you're earning ₹30,000 a month, you dream of ₹60,000. When you reach ₹60,000, you want ₹1 lakh. And so on. The more we have, the more we want. It's a treadmill that never stops.

Why does this happen? Part of it is biology. Our brains are wired to seek progress, not contentment. We get a hit of dopamine when we achieve something new, but it fades quickly. The car that once seemed luxurious becomes ordinary after a few months. The bigger house, the new phone, the fancy vacation—all become the new baseline.

There's also the world around us. Social media, advertising, and even well-meaning friends constantly remind us of what we don't have. We compare ourselves not to where we started, but to whoever is just ahead. The illusion is that "more" will finally bring peace of mind, happiness, or security.

But here's the truth: "More" is a moving target. If you don't define "enough" for yourself, the world will define it for you—and it will always be just out of reach.

I've met people with modest incomes who feel wealthy, and people with millions who feel poor. The difference isn't in the numbers. It's in the expectations.

Real wealth is learning to say, "This is enough." It's the ability to enjoy what you have, to find satisfaction in progress without letting it become a prison. It's the freedom to step off the treadmill and rest.

If you want to feel rich, don't focus on getting more. Focus on needing less. The illusion of "more" is powerful, but the reality of "enough" is where true contentment lives.`
    },
    'keeping-up-with-everyone': {
      title: 'Keeping Up With… Everyone',
      description: 'There\'s a simple trick to feeling poor: compare yourself to someone richer. Because the only person worth keeping up with is the person you were yesterday.',
      readingTime: '5 min read',
      category: 'Money Mindset',
      publishedAt: 'Dec 16, 2024',
      content: `There's a simple trick to feeling poor instantly: compare yourself to someone richer. It works every time.

Your neighbor gets a new car? Suddenly your reliable vehicle feels inadequate. A friend posts vacation photos from Europe? Your weekend getaway seems modest. A colleague mentions their investment returns? Your savings account feels embarrassingly small.

This is the comparison trap, and we all fall into it. Social media has made it worse, turning everyone's highlight reel into a 24/7 reminder of what we don't have. But the real problem isn't the comparison itself—it's who we're comparing ourselves to.

Most of us compare up, not down. We look at people who have more, earn more, or seem to be living better. We rarely compare ourselves to the billions of people who have less. This upward comparison is a recipe for perpetual dissatisfaction.

But here's what's even more interesting: the people you're comparing yourself to are doing the same thing. That friend with the fancy car? They're probably comparing themselves to someone with a fancier car. That colleague with great investment returns? They're looking at someone who's doing even better.

It's comparison all the way up, and no one wins.

The only comparison that actually matters is with yourself. Are you better off than you were last year? Are you making progress toward your goals? Are you learning, growing, and building something meaningful?

This isn't about lowering your standards or being content with mediocrity. It's about defining success on your own terms, not someone else's. It's about playing your own game instead of trying to win someone else's.

The person you were yesterday—that's your only real competition. Everyone else is just background noise.`
    },
    'why-we-fear-investing': {
      title: 'Why We Fear Investing (Even When We Know We Should)',
      description: 'Investing sounds simple on paper. But in real life, it\'s terrifying. Understanding loss aversion and why the biggest risk isn\'t losing money.',
      readingTime: '6 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 14, 2024',
      content: `On paper, investing sounds simple. Buy low, sell high. Diversify your portfolio. Think long-term. But if it's so simple, why do so many people avoid it?

The answer isn't ignorance—it's fear. And that fear has a name: loss aversion.

Loss aversion is a psychological principle that says we feel the pain of losing money roughly twice as strongly as we feel the pleasure of gaining the same amount. Losing ₹10,000 hurts more than gaining ₹10,000 feels good.

This creates a problem. When we think about investing, our brains immediately jump to the worst-case scenario. What if the market crashes? What if I lose everything? What if I pick the wrong stocks?

The media doesn't help. Financial news is filled with stories about market crashes, failed investments, and people who lost their life savings. These stories stick in our minds because they confirm our fears.

But here's the irony: by trying to avoid the risk of losing money in the market, we guarantee the risk of losing money to inflation. Cash sitting in a savings account earning 3% is losing purchasing power when inflation is 6%.

The biggest risk isn't losing money in a bad investment. The biggest risk is not investing at all.

This doesn't mean you should throw caution to the wind and put all your money in risky stocks. It means understanding that doing nothing is also a choice—and it comes with its own risks.

Start small. Invest amounts you can afford to lose. Learn as you go. The goal isn't to eliminate risk—it's to take smart risks that give you the best chance of building wealth over time.

Fear is natural. But don't let it rob you of your financial future.`
    },
    'power-of-doing-nothing': {
      title: 'The Power of Doing Nothing',
      description: 'In a world that celebrates action, doing nothing feels wrong. But most wealth is built quietly, slowly, patiently.',
      readingTime: '4 min read',
      category: 'Investment Psychology',
      publishedAt: 'Dec 12, 2024',
      content: `In a world that celebrates action, doing nothing feels wrong. We're told to hustle, optimize, and constantly look for the next opportunity. But when it comes to building wealth, the most powerful strategy is often the most boring one: doing nothing.

Warren Buffett calls it his favorite holding period: forever. Buy good companies and hold them. Don't trade. Don't try to time the market. Don't panic when prices drop or get greedy when they rise. Just... do nothing.

This goes against every instinct we have. When the market is falling, we want to sell before it gets worse. When it's rising, we want to buy more before we miss out. When we see others making money in hot stocks or crypto, we want in on the action.

But all of this activity—this constant buying and selling—usually makes us poorer, not richer. Studies show that the average investor underperforms the market by 2-3% per year, largely because they buy high and sell low.

The hardest part about investing isn't picking the right stocks or timing the market. It's sitting still when everything in you wants to do something.

Most wealth is built quietly, slowly, patiently. A diversified portfolio held for decades. Regular contributions to retirement accounts. Boring index funds that track the market.

This isn't exciting. It won't make you rich overnight. But it works.

The next time you feel the urge to make a move with your investments, ask yourself: "Is this action likely to make me better off, or does it just make me feel better?" There's a difference.

Sometimes the most powerful thing you can do is nothing at all.`
    },
    'stories-we-tell-ourselves': {
      title: 'The Stories We Tell Ourselves About Money',
      description: 'Money isn\'t just numbers. It\'s stories. From childhood, we absorb stories about money that shape how we think, feel, and act.',
      readingTime: '5 min read',
      category: 'Money Mindset',
      publishedAt: 'Dec 10, 2024',
      content: `Money isn't just numbers. It's stories.

From childhood, we absorb stories about money that shape how we think, feel, and act. Maybe your parents fought about money, so you learned that money causes conflict. Maybe they worked multiple jobs, so you learned that money requires sacrifice. Maybe they were generous with money, so you learned that money should be shared.

These stories become our financial blueprint. They influence every decision we make—how much we save, what we spend on, how we invest, even how we talk about money.

The problem is that most of us never examine these stories. We just live by them, assuming they're true. But stories that served our parents might not serve us. Stories that made sense in one context might be limiting in another.

I know someone who refuses to invest in the stock market because her grandfather lost money in the 1970s. That story—"the stock market is dangerous"—has cost her decades of potential growth. Another friend can't bring himself to spend money on anything "unnecessary" because he grew up poor. That story—"money should only be spent on necessities"—has made him wealthy but miserable.

The first step to changing your financial life is understanding the stories you tell yourself about money. Where did they come from? Are they helping you or hurting you? Are they based on facts or fears?

Once you identify your money stories, you can decide whether to keep them or rewrite them. Maybe "investing is risky" becomes "not investing is riskier." Maybe "I don't deserve nice things" becomes "I work hard and can enjoy the fruits of my labor."

Your money story is just that—a story. And stories can be changed.`
    },
    'underestimate-small-expenses': {
      title: 'Why We Underestimate Small Expenses',
      description: 'Small expenses are the silent killers of wealth. A ₹100 coffee every day is ₹3,000 a month. Don\'t underestimate the power of small.',
      readingTime: '5 min read',
      category: 'Money Habits',
      publishedAt: 'Dec 8, 2024',
      content: `It's just ₹100. What's the big deal?

That's what we tell ourselves when we buy a coffee, order lunch, or subscribe to another streaming service. Small amounts feel insignificant in the moment. But small expenses are the silent killers of wealth.

A ₹100 coffee every workday is ₹2,200 a month, or ₹26,400 a year. A ₹500 lunch is ₹11,000 a month. A few subscription services can easily add up to ₹2,000-3,000 monthly. Suddenly, what felt like "just ₹100" becomes lakhs of rupees over time.

This is called the "latte factor," popularized by financial author David Bach. It's the idea that small, recurring expenses have a much bigger impact on our wealth than we realize.

But it's not just about the money spent—it's about the money not invested. That ₹26,400 on coffee, if invested in a mutual fund earning 12% annually, would become over ₹7 lakhs in 10 years. Over 20 years? More than ₹23 lakhs.

The problem is psychological. Our brains are bad at understanding compound effects. We see ₹100 and think "small." We don't automatically think "₹26,400 per year" or "₹23 lakhs over 20 years."

This doesn't mean you should never spend money on things you enjoy. Life is meant to be lived. But it does mean being intentional about your small expenses. Ask yourself: "Is this worth it?" Not just today, but over time.

Track your spending for a month. You might be surprised by where your money goes. Those small expenses add up faster than you think.

Remember: wealth isn't built by making one big decision. It's built by making thousands of small decisions correctly.`
    },
    'myth-of-perfect-plan': {
      title: 'The Myth of the Perfect Plan',
      description: 'We all want a perfect plan. But life doesn\'t work that way. The best financial plan is one that can change.',
      readingTime: '5 min read',
      category: 'Financial Planning',
      publishedAt: 'Dec 6, 2024',
      content: `We all want a perfect financial plan. A clear roadmap that tells us exactly how much to save, where to invest, and when we'll reach our goals. But life doesn't work that way.

Markets crash. Jobs disappear. Health issues arise. Family situations change. The perfect plan you made at 25 probably won't look perfect at 35, and definitely won't look perfect at 45.

This uncertainty paralyzes many people. They spend months researching the "best" investment strategy or the "optimal" asset allocation. They wait for the perfect time to start investing or the perfect plan before taking action.

But while they're waiting for perfection, time is passing. And time is the most valuable asset in building wealth.

The best financial plan isn't perfect—it's adaptable. It's simple enough to understand, flexible enough to change, and automatic enough to work even when you're not paying attention.

Here's what an adaptable plan looks like:
- Start with broad goals, not specific numbers
- Use simple, diversified investments
- Automate as much as possible
- Review and adjust regularly
- Focus on progress, not perfection

Your plan will evolve as your life evolves. Your 30s plan will be different from your 20s plan. Your 40s plan will be different from your 30s plan. That's not a bug—it's a feature.

The worst plan that you actually follow is better than the perfect plan that sits in a drawer. Stop waiting for perfect. Start with good enough.

You can always adjust as you go.`
    },
    'time-warps-money-decisions': {
      title: 'How Time Warps Our Money Decisions',
      description: 'Time is the most powerful force in building wealth. Yet, it\'s also the hardest concept for most people to grasp when it comes to money.',
      readingTime: '7 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Dec 4, 2024',
      content: `Time is the most powerful force in building wealth. It's what turns small amounts into large amounts, what makes compound interest work its magic, what allows average investors to become wealthy.

Yet time is also the hardest concept for most people to grasp when it comes to money.

We're wired to think in the short term. Our brains evolved to focus on immediate threats and opportunities, not abstract concepts like "30 years from now." This creates problems when making financial decisions.

Consider this: Would you rather have ₹50,000 today or ₹1 lakh in 10 years? Most people, if they're being honest, would take the ₹50,000 today. It feels real, tangible, immediate. The ₹1 lakh feels hypothetical.

But this thinking is exactly backward. The ₹50,000 today will be worth less in 10 years due to inflation. Meanwhile, if you invested that ₹50,000 at just 8% annual returns, it would grow to over ₹1 lakh in 10 years anyway.

This is called "temporal discounting"—we value immediate rewards more highly than future rewards, even when the future rewards are objectively better.

It gets worse with longer time horizons. The difference between 20 years and 30 years feels small in our minds, but it's enormous when it comes to compound returns. An extra 10 years of growth can literally double your wealth.

The key is to make the future feel more real and immediate. Use calculators to see what your investments could become. Set up automatic transfers so you don't have to think about it. Visualize your future self and what they would want you to do today.

Time warps our perception, but it doesn't have to warp our decisions. The earlier you start, the more time can work in your favor.`
    },
    'talking-about-money-is-hard': {
      title: 'Why Talking About Money Is So Hard',
      description: 'Money is one of the most important parts of our lives. Yet, it\'s also one of the hardest topics to talk about openly.',
      readingTime: '6 min read',
      category: 'Money Psychology',
      publishedAt: 'Dec 2, 2024',
      content: `Money is one of the most important parts of our lives. It affects our choices, our relationships, our stress levels, our future. Yet it's also one of the hardest topics to talk about openly.

Why is that?

Money is deeply personal. It reveals our values, our fears, our insecurities. When we talk about money, we're not just sharing numbers—we're sharing pieces of ourselves.

There's also shame involved. If you have less money than others, you might feel embarrassed. If you have more, you might feel guilty. If you've made mistakes, you might feel stupid. These emotions make honest conversation difficult.

Cultural factors play a role too. Many of us grew up in families where money wasn't discussed openly. "Don't ask how much people make." "Money talk is rude." "Keep your financial business private." These messages stick with us.

But avoiding money conversations hurts us. We make decisions in isolation, without the benefit of others' experiences. We repeat mistakes that could have been avoided. We miss opportunities that others could have shared.

The solution isn't to overshare or make money the center of every conversation. It's to find trusted people—friends, family, mentors—with whom you can be honest about financial challenges and goals.

Start small. Share a financial goal you're working toward. Ask a friend how they approach saving or investing. Admit when you don't understand something.

Money conversations get easier with practice. And they're worth having. The insights you gain, the mistakes you avoid, the opportunities you discover—they can literally change your financial life.

Your money is personal, but it doesn't have to be secret.`
    },
    'writing-for-yourself': {
      title: 'Why Writing for Yourself Makes You a Better Investor',
      description: 'When you write for yourself, you clarify your own thinking. The same is true for money - invest for yourself, not someone else.',
      readingTime: '6 min read',
      category: 'Investment Psychology',
      publishedAt: 'Nov 30, 2024',
      content: `The best writing advice I ever received was simple: write for yourself first. Don't try to please everyone. Don't chase trends. Don't write what you think others want to read. Write what interests you, what you're curious about, what you genuinely care about.

This advice applies perfectly to investing.

Too many people invest for others. They buy stocks to impress friends. They chase hot trends to fit in. They make investment decisions based on what they think successful people would do, not what makes sense for their own situation.

This is a recipe for poor returns and constant anxiety.

When you invest for others, you're playing a game you don't understand with rules that constantly change. When you invest for yourself, you're playing your own game with your own rules.

What does investing for yourself look like?

It means understanding your own risk tolerance, not what others say it should be. It means choosing investments you can sleep well with, even if they're not the most exciting. It means having clear reasons for every investment decision that make sense to you.

It means ignoring the noise. Financial media is designed to create urgency and fear. Social media is full of people bragging about their wins and hiding their losses. None of this has anything to do with your financial goals.

Just like with writing, the best investment strategy is often the most boring one. Broad diversification. Regular contributions. Long-term thinking. It's not flashy, but it works.

When you invest for yourself, you stop caring what others think about your portfolio. You stop feeling pressure to beat the market or find the next big thing. You focus on what actually matters: building wealth steadily over time.

Invest for yourself. Everyone else is just background noise.`
    },
    'role-of-stories': {
      title: 'The Role of Stories in Shaping Financial Behavior',
      description: 'We like to think our financial decisions are logical. But stories shape our money choices far more than math ever could.',
      readingTime: '6 min read',
      category: 'Money Psychology',
      publishedAt: 'Nov 28, 2024',
      content: `We like to think our financial decisions are logical. We look at numbers, weigh pros and cons, make rational choices based on facts and data.

But that's not how our brains actually work.

Stories shape our financial behavior far more than math ever could. The story about your friend who got rich from Bitcoin. The story about your uncle who lost everything in the stock market. The story about your parents who worked two jobs but still struggled to pay bills.

These stories become our financial reality. They influence how we think about risk, opportunity, and what's possible. They determine whether we see investing as exciting or terrifying, whether we view debt as a tool or a trap, whether we believe wealth is achievable or reserved for others.

The problem is that stories aren't always accurate. They're often incomplete, outdated, or specific to someone else's situation. But they feel true because they're tied to real people and real emotions.

Your friend's Bitcoin story might leave out the months of research they did, the other investments that failed, or the fact that they only invested money they could afford to lose. Your uncle's stock market story might ignore that he panicked during a downturn and sold at the worst possible time.

Financial media knows this. That's why every article includes anecdotes and case studies. Stories stick better than statistics. We remember the person who retired early on index funds more than we remember average return data.

The key is to be conscious of the stories that shape your financial thinking. Where did they come from? Are they helping you or limiting you? Are they based on complete information or just the dramatic parts?

You can't eliminate the influence of stories—they're how our brains make sense of the world. But you can choose better stories. Stories of people who built wealth slowly and steadily. Stories of people who recovered from financial mistakes. Stories of people like you who achieved their goals.

The story you tell yourself about money might be the most important financial decision you ever make.`
    },
    'simple-financial-advice': {
      title: 'Why Simple Financial Advice Works Best',
      description: 'The world of finance is full of complexity. But the best financial advice is often surprisingly simple.',
      readingTime: '5 min read',
      category: 'Financial Wisdom',
      publishedAt: 'Nov 26, 2024',
      content: `The world of finance is full of complexity. Exotic investment products. Sophisticated trading strategies. Complex tax optimization schemes. It's easy to think that building wealth requires mastering all of this complexity.

But the best financial advice is often surprisingly simple:
- Spend less than you earn
- Invest the difference
- Be patient

That's it. Three sentences that can change your financial life.

Why does simple advice work better than complex advice?

First, simple advice is easier to follow. The more complicated a plan, the more likely you are to abandon it when life gets busy or stressful. Simple plans are robust. They work even when you're not paying attention.

Second, simple advice focuses on what matters most. In finance, a few key decisions drive the majority of your results: how much you save, how you invest it, and how long you stick with the plan. Everything else is details.

Third, simple advice is harder to screw up. Complex strategies have many moving parts, and any one of them can break. Simple strategies have fewer failure points.

The financial industry profits from complexity. Complicated products have higher fees. Sophisticated strategies require expensive advisors. Simple advice doesn't make anyone rich except you.

This doesn't mean you should never learn about finance or never consider more advanced strategies. But start with simple. Master the basics. Build good habits. Get comfortable with the fundamentals.

Once you've done that for several years, then you can consider adding complexity—if it's actually needed. Most of the time, it's not.

Warren Buffett, one of the greatest investors of all time, recommends a simple portfolio for most people: low-cost index funds. If it's good enough for Buffett's advice, it's probably good enough for you.

Keep it simple. Simple works.`
    },
    'danger-of-overconfidence': {
      title: 'The Danger of Overconfidence in Finance',
      description: 'Confidence is powerful. But too much confidence—overconfidence—can be dangerous, especially when it comes to money.',
      readingTime: '5 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Nov 24, 2024',
      content: `Confidence is powerful. It helps us take risks, make decisions, and pursue opportunities. But too much confidence—overconfidence—can be dangerous, especially when it comes to money.

Overconfidence shows up in many ways in finance:
- Believing you can time the market
- Thinking you can pick winning stocks consistently
- Assuming past success guarantees future success
- Underestimating risks
- Overestimating your knowledge

The problem with overconfidence is that it often feels like expertise. The person who made money on a few stock picks starts to think they're the next Warren Buffett. The person who timed one market correction thinks they can do it again.

But in finance, confidence and competence are not the same thing. You can be confident and wrong. Very, very wrong.

Studies show that overconfident investors trade more frequently, take bigger risks, and achieve lower returns than their more humble counterparts. They mistake luck for skill and short-term results for long-term evidence.

The antidote to overconfidence isn't under-confidence—it's appropriate confidence. Confidence in simple, proven strategies. Confidence in diversification. Confidence in the power of time and compound returns.

It's also intellectual humility. Accepting that you don't know what the market will do tomorrow, next month, or next year. Acknowledging that there are thousands of variables affecting investment returns, most of which are beyond your control or prediction.

This doesn't mean being paralyzed by uncertainty. It means building a strategy that works regardless of what happens. A strategy that doesn't require you to be right about the future.

The most dangerous investor is the one who's been right a few times and thinks they've figured it all out. The most successful investor is the one who knows they could be wrong and builds their strategy accordingly.

Stay confident in your ability to build wealth over time. Stay humble about your ability to predict what happens along the way.`
    },
    'history-helps-avoid-mistakes': {
      title: 'How History Can Help You Avoid Financial Mistakes',
      description: 'History doesn\'t repeat itself exactly, but it often rhymes. Studying past market cycles helps you understand human behavior.',
      readingTime: '5 min read',
      category: 'Financial History',
      publishedAt: 'Nov 22, 2024',
      content: `Mark Twain supposedly said, "History doesn't repeat itself, but it often rhymes." This is especially true in finance.

Market crashes happen regularly. Bubbles form and burst. People get greedy when they should be cautious and fearful when they should be optimistic. The details change, but the patterns remain remarkably consistent.

Studying financial history doesn't give you a crystal ball. You can't predict exactly when the next crash will happen or which investments will outperform. But you can understand how markets behave and, more importantly, how people behave in markets.

Take the dot-com bubble of the late 1990s. Tech stocks soared to ridiculous valuations. Everyone was convinced that "this time is different." Traditional metrics like profits and revenue didn't matter anymore. Anyone who questioned the bubble was called old-fashioned.

Sound familiar? The details were different in the housing bubble of 2006, the crypto bubble of 2021, and every other bubble in history. But the psychology was identical: euphoria, denial of risk, and the belief that normal rules don't apply.

Understanding this history helps you recognize when you're caught up in similar emotions. When everyone around you is getting rich from an investment you don't understand, when people say "this time is different," when traditional valuation metrics are ignored—these are warning signs.

History also shows that markets recover. Every crash in history has been followed by new highs. Every recession has ended. Every bubble that burst was eventually forgotten as markets moved on to new levels.

This doesn't make crashes less painful when they happen. But it provides perspective. What feels like the end of the world is usually just another chapter in a very long story.

The best financial decisions are often boring and historically proven: diversify your investments, buy regularly regardless of market conditions, hold for the long term. These strategies have worked for decades because they're based on how markets actually behave, not how we wish they would behave.

Learn from history. Not to predict the future, but to understand the present.`
    },
    'emotional-activation': {
      title: 'The Power of Emotional Activation in Money Decisions',
      description: 'Money decisions often feel like a battle between logic and emotion. Understanding emotional activation can help you pause before acting.',
      readingTime: '5 min read',
      category: 'Behavioral Finance',
      publishedAt: 'Nov 20, 2024',
      content: `Money decisions often feel like a battle between logic and emotion. Your logical brain knows you should save for retirement, but your emotional brain wants to buy that new gadget. Your logical brain knows market crashes are temporary, but your emotional brain wants to sell everything.

This isn't a character flaw—it's how our brains are wired. Emotions are fast and powerful. Logic is slow and effortful. In a crisis, emotions usually win.

Psychologists call this "emotional activation." When we're emotionally activated—by fear, greed, excitement, or anxiety—our ability to think clearly is compromised. We make decisions we later regret.

Understanding emotional activation can help you make better financial decisions. The key is learning to recognize when you're activated and creating space between the emotion and the action.

Here are common signs of emotional activation in money decisions:
- Feeling urgency ("I need to act now!")
- All-or-nothing thinking ("This will make or break me")
- Physical symptoms (racing heart, sweaty palms)
- Focusing only on upside or only on downside
- Ignoring your usual rules or processes

When you notice these signs, pause. Take a breath. Wait 24 hours before making any major financial decisions. Talk to someone you trust. Write down your reasoning and review it later.

The best financial decisions are made when you're calm, not when you're activated. This is why successful investors often seem boring—they're not more emotional than everyone else, they're just better at managing their emotions.

Create systems that work when you're not at your best. Automatic investments that don't require decision-making. Clear rules for when to buy and sell. Emergency funds that reduce financial stress.

You can't eliminate emotions from financial decisions—nor should you. Emotions provide important information about your values and priorities. But you can learn to work with your emotions instead of being controlled by them.

The goal isn't to become emotionless. It's to make sure your emotions serve your long-term goals instead of sabotaging them.`
    },
    'patience-beats-timing': {
      title: 'Why Patience Beats Timing in Investing',
      description: 'Everyone wants to buy low and sell high. But timing the market is incredibly difficult—even for professionals.',
      readingTime: '5 min read',
      category: 'Investment Psychology',
      publishedAt: 'Nov 18, 2024',
      content: `Everyone wants to buy low and sell high. It sounds simple, logical, obvious. But timing the market is incredibly difficult—even for professionals who do it for a living.

The problem isn't just predicting when markets will go up or down. It's that you have to be right twice: when to get out and when to get back in. Miss either timing, and you can easily end up worse off than if you had just stayed invested.

Consider this: The Indian stock market has had some of its best days right after some of its worst days. If you panic and sell during a crash, you might miss the recovery. If you try to wait for the "perfect" time to get back in, you might miss most of the gains.

Studies consistently show that trying to time the market leads to lower returns. The average investor, who tends to buy high and sell low based on emotions and news cycles, significantly underperforms simple buy-and-hold strategies.

But patience? Patience almost always wins.

The patient investor doesn't try to predict market movements. They understand that short-term volatility is the price of long-term returns. They stay invested through ups and downs, continuing to add money regularly regardless of market conditions.

This approach requires discipline, especially during scary times. When markets are falling and financial media is predicting doom, every instinct tells you to do something. But often, the best thing to do is nothing.

Time is your most powerful tool as an investor. The longer you stay invested, the more likely you are to achieve positive returns. This is because compound returns need time to work their magic, and because markets have historically trended upward over long periods.

Instead of trying to time the market, focus on time in the market. Start investing as early as possible. Invest regularly. Stay invested through market cycles. Be patient.

Patience isn't exciting. It doesn't make for good headlines or cocktail party stories. But it builds wealth better than any timing strategy ever invented.

The market rewards patience, not timing.`
    },
    'inner-scorecard': {
      title: 'How to Build an "Inner Scorecard" for Financial Success',
      description: 'Most people measure financial success by external markers. But building an inner scorecard means defining success on your own terms.',
      readingTime: '6 min read',
      category: 'Money Mindset',
      publishedAt: 'Nov 16, 2024',
      content: `Warren Buffett talks about having an "inner scorecard" versus an "outer scorecard." The outer scorecard is about what others think of you—your status, your possessions, your apparent success. The inner scorecard is about what you think of yourself—your values, your goals, your sense of fulfillment.

Most people measure financial success by the outer scorecard. How much money they make compared to friends. What kind of car they drive. What neighborhood they live in. Whether they can afford the latest gadgets or vacations.

But the outer scorecard is a trap. It's based on comparison, and there will always be someone with more. It's based on appearances, not reality. It's based on other people's definitions of success, not your own.

Building an inner scorecard for money means defining financial success on your own terms. What does financial success actually mean to you? Not to your parents, your friends, or society—but to you.

Maybe it's having six months of expenses in emergency savings. Maybe it's being able to work part-time to spend more time with family. Maybe it's having enough invested to retire comfortably. Maybe it's being able to be generous with causes you care about.

Your inner scorecard should reflect your actual values and goals, not what you think you should want. There's no right or wrong answer—just what's right or wrong for you.

Once you define your inner scorecard, you can make financial decisions that align with it. You stop caring whether your car impresses others and start caring whether it reliably gets you where you need to go. You stop competing with others' spending and start focusing on your own goals.

This doesn't mean becoming antisocial or ignoring all social norms. But it does mean being intentional about which external opinions matter to you and which don't.

The most financially successful people I know have strong inner scorecards. They know what they're working toward and why. They're not distracted by what everyone else is doing. They measure their progress against their own goals, not other people's lives.

Build your inner scorecard. Define success for yourself. Then let that guide your financial decisions.

The outer scorecard is exhausting. The inner scorecard is liberating.`
    },
    'importance-of-sample-size': {
      title: 'The Importance of Sample Size in Financial Decisions',
      description: 'When making financial decisions, it\'s tempting to rely on recent experiences. But small sample sizes can mislead us.',
      readingTime: '5 min read',
      category: 'Decision Making',
      publishedAt: 'Nov 14, 2024',
      content: `When making financial decisions, it's tempting to rely on recent experiences. The mutual fund that performed well last year must be a good choice. The investment strategy that worked for your friend must work for you. The market behavior you've witnessed recently must be normal.

But small sample sizes can mislead us, sometimes dramatically.

Consider this: If you flip a coin 10 times and get 7 heads, you might think the coin is biased toward heads. But if you flip it 1,000 times and get 520 heads, you'd probably conclude it's a fair coin. The small sample gave you misleading information.

The same thing happens with investments. A fund that outperformed for two years might have just gotten lucky. A strategy that worked during a bull market might fail during a bear market. Recent market behavior might be unusual, not typical.

This is especially problematic when we make long-term decisions based on short-term data. Someone who started investing in 2017 might think 15% annual returns are normal, because that's what they experienced. Someone who started in 2008 might think market crashes happen every year.

Both perspectives are skewed by their limited sample size.

The solution is to look at longer time periods and broader data sets. Instead of focusing on last year's returns, look at 10 or 20 years of performance. Instead of relying on one person's experience, study what has worked for many people over many market cycles.

This doesn't mean ignoring recent information—recent data can be relevant and important. But it does mean putting it in proper context. Is this recent experience typical or unusual? Is it likely to continue or revert to normal?

Good financial decisions are based on understanding normal ranges, not recent extremes. They account for the full spectrum of possible outcomes, not just what happened recently.

Be especially wary of making major financial changes based on recent market performance, either good or bad. Markets go through cycles, and what you're experiencing now probably isn't the new normal.

Expand your sample size. Look at more data, longer time periods, and broader experiences. Your future self will thank you for making decisions based on the full picture, not just the most recent chapter.`
    },
    'unique-financial-journey': {
      title: 'Why Everyone\'s Financial Journey Is Unique',
      description: 'No two financial journeys are the same. Your financial story is shaped by your experiences, values, and circumstances.',
      readingTime: '5 min read',
      category: 'Money Mindset',
      publishedAt: 'Nov 12, 2024',
      content: `Personal finance advice often sounds universal. "Save 20% of your income." "Invest in index funds." "Pay off high-interest debt first." This advice is generally good, but it misses something important: your financial journey is unique.

No two people have the same starting point, the same goals, or the same constraints. Your income, your family situation, your risk tolerance, your timeline, your values—all of these factors shape what the "right" financial strategy looks like for you.

Someone starting their career in their 20s should invest differently than someone starting to save in their 40s. Someone supporting aging parents has different priorities than someone planning for their own children's education. Someone who values experiences over possessions should allocate money differently than someone who prioritizes security above all else.

Even people in similar situations might make different choices based on their personalities and past experiences. One person might choose a conservative investment strategy because they watched their parents lose money in the stock market. Another might choose an aggressive strategy because they regret being too cautious in the past.

This doesn't mean all financial advice is worthless or that there are no universal principles. Some things—like the power of compound interest and the importance of diversification—apply to almost everyone.

But it does mean you need to adapt general advice to your specific situation. You need to understand the principles behind the advice so you can apply them appropriately to your circumstances.

It also means you should be cautious about comparing your financial progress to others. That friend who bought a house at 25? Maybe they had help from parents or a higher income or different priorities. That colleague who retired early? Maybe they lived more frugally or took more investment risk than you're comfortable with.

Your financial journey is your own. Measure your progress against your own goals, not someone else's achievements. Make decisions based on your values and circumstances, not what worked for someone else.

The best financial plan is not the theoretically optimal one—it's the one you'll actually follow. And the plan you'll follow is the one that fits your unique life and personality.

Embrace your financial uniqueness. Build a plan that works for you, not for some theoretical average person. Your money, your goals, your choices.`
    }
  };
  
  if (!slug || !articles[slug]) {
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
                <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>Browse All Articles</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  const article = articles[slug];

  return (
    <MainLayout>
      <div className={`container ${isMobile ? 'py-4' : 'py-8'}`}>
        <Button variant="ghost" asChild className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mind Over Money
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
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

          <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
            {article.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className={`mt-12 pt-8 border-t ${isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link to="/psychology" onClick={() => window.scrollTo(0, 0)}>
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
                  url={`${window.location.origin}/psychology/${slug}`}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </footer>

          <Comments articleId={slug} />
        </article>
      </div>
    </MainLayout>
  );
};

export default PsychologyArticle;
