
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Privacy = () => {
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
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Privacy Policy
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
                At Money Over Noise, your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your information.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. What Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect minimal personal data, and only when necessary. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Email address (if you contact us via a form)</li>
                  <li>Usage data (e.g., anonymous analytics through cookies)</li>
                  <li>Device/browser information (to improve website experience)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not collect financial information or sensitive personal details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Understand how users interact with our content</li>
                  <li>Improve the quality of our educational articles and user experience</li>
                  <li>Respond to user queries if you contact us</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell or share your information with third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Cookies and Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies to understand user behavior. You can disable cookies in your browser at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable precautions to protect your data, though no online system is ever fully secure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Privacy;
