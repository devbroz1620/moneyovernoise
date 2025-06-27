import { Award, Eye, MapPin, Heart } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: Award,
    title: 'Trustworthy',
    content: (
      <>
        <p className="mb-2 text-foreground/90">At Money Over Noise, trust isn't a buzzword — it's a responsibility. Every article is based on research, not trends or influencers. Our founder <a href="https://www.linkedin.com/in/keshavbang56/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">Keshav Bang</a> has cleared multiple financial certifications, including:</p>
        <ul className="list-disc pl-6 mb-2 space-y-1 text-foreground/90">
          <li>✅ CFA Level 1 (Chartered Financial Analyst)</li>
          <li>✅ CMT Level 1 (Chartered Market Technician)</li>
          <li>✅ NISM Research Analyst</li>
          <li>✅ NISM Investment Advisor Level 1</li>
        </ul>
        <p className="text-foreground/90">These credentials reflect our deep commitment to education, ethics, and empowering you with fact-based, transparent knowledge. We don't sell products. We build trust — one post at a time.</p>
      </>
    )
  },
  {
    icon: Eye,
    title: 'Clarity First',
    content: (
      <>
        <p className="mb-2 text-foreground/90">In a world full of financial jargon, we choose clarity. We believe that investing shouldn't feel intimidating or confusing. That's why every article we write is simplified, visual, and explained in everyday language — even a 5-year-old could follow it.</p>
        <p className="text-foreground/90">We break down complex topics like Exchange Traded Funds, debt instruments, and money psychology into small, digestible chunks so you can understand <span className="italic">why</span> something works, not just <span className="italic">what</span> to do. Clarity helps you make smarter decisions with confidence.</p>
      </>
    )
  },
  {
    icon: MapPin,
    title: 'For India',
    content: (
      <>
        <p className="mb-2 text-foreground/90">Finance is not one-size-fits-all, especially in India. Our platform is designed specifically for the Indian investor — from explaining Nifty Exchange Traded Funds to decoding taxation, regulatory rules, and local investing behavior.</p>
        <p className="text-foreground/90">We don't adapt Western content; we build from scratch for Indian needs, with Indian examples, Indian data, and Indian products. Whether you're a first-time investor in Delhi or a working mom in Nagpur — we've got your back.</p>
      </>
    )
  },
  {
    icon: Heart,
    title: 'No Hype',
    content: (
      <>
        <p className="mb-2 text-foreground/90">We don't chase the latest trend or hot tip. At Money Over Noise, we stick to timeless principles over temporary noise. Our content is built on sound financial thinking, not what's trending on Instagram or Twitter.</p>
        <p className="text-foreground/90">No sensationalism. No hidden agendas. Just honest, data-backed guidance that actually helps. We tell you what you <span className="italic">need</span> to hear, not what sounds exciting. Because long-term wealth is built on discipline — not drama.</p>
      </>
    )
  }
];

const WhyMoneyOverNoise = () => (
  <MainLayout>
    <section className="container py-10 md:py-16">
      <div className="bg-gradient-to-b from-primary/5 to-background rounded-2xl shadow-lg p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight font-display">
          Why <span className="text-primary">MoneyOverNoise?</span>
        </h1>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white/90 dark:bg-zinc-900/80 rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center border border-primary/10 hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary font-extrabold text-2xl md:text-3xl">{idx+1}.</span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight font-display">{section.title}</h2>
                </div>
                <div className="text-left max-w-none text-base md:text-lg leading-relaxed">
                  {section.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </MainLayout>
);

export default WhyMoneyOverNoise; 