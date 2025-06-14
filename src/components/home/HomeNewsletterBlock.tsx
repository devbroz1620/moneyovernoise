
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface HomeNewsletterBlockProps {
  onOpenSubscriptionModal: () => void;
}

const HomeNewsletterBlock = ({ onOpenSubscriptionModal }: HomeNewsletterBlockProps) => (
  <section className="bg-primary/5 border-t border-b py-16 md:py-24 mt-12">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-6 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stay Ahead of the Noise
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of Indians who prefer clarity over chaos when it comes to their money.
        </p>
        <Button 
          size="lg" 
          className="font-medium"
          onClick={onOpenSubscriptionModal}
        >
          Get Weekly Money Insights
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          No spam, just valuable insights delivered to your inbox every week.
        </p>
      </div>
    </div>
  </section>
);

export default HomeNewsletterBlock;
