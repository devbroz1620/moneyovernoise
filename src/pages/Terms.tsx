
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Terms = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Terms of Service
            </h1>
            <p className={`text-muted-foreground ${isMobile ? 'text-base' : 'text-lg'}`}>
              Effective Date: 1/06/2025
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Money Over Noise. By using our website, you agree to these terms.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Educational Purpose Only</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this site is for educational and informational purposes only. We are not SEBI-registered financial advisors. Please do your own research or consult a professional before making investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. No Financial Advice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All ETF guides, comparisons, and tools are created to simplify investing concepts — they do not constitute financial advice or recommendations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Content Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may share our articles on social media or use them for personal learning. Please credit us properly. You may not republish our content for commercial use without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Website Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update or remove content, features, or tools at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Money Over Noise is not responsible for any financial losses or decisions made based on our content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For legal concerns or questions about these terms, contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  📩 keshavbang56@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;
