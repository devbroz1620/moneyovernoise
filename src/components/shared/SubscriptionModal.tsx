import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BEEHIIV_SCRIPT_SRC = 'https://subscribe-forms.beehiiv.com/embed.js';
const BEEHIIV_IFRAME_SRC = 'https://subscribe-forms.beehiiv.com/413aeab5-b660-40f5-aa45-5c44f01323ae';

const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    // Check if script already exists
    if (document.querySelector(`script[src=\"${BEEHIIV_SCRIPT_SRC}\"]`)) return;
    const script = document.createElement('script');
    script.src = BEEHIIV_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Optionally remove script on close
      // document.body.removeChild(script);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl w-full max-w-[95vw] px-6 py-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 justify-center w-full text-center">
            <Mail className="h-5 w-5 text-primary" />
            Subscribe to MoneyOverNoise
          </DialogTitle>
        </DialogHeader>
        <div
          className="w-full flex flex-col items-center justify-center bg-muted/40 rounded-xl p-2 sm:p-6 mt-4 mb-2 shadow-md"
          style={{
            maxHeight: 400,
            overflow: 'auto'
          }}
        >
          <iframe
            src={BEEHIIV_IFRAME_SRC}
            className="beehiiv-embed w-full max-w-full"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="auto"
            style={{
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              minHeight: 320,
              height: '100%',
              margin: 0,
              borderRadius: 12,
              backgroundColor: 'transparent',
              boxShadow: '0 0 #0000',
              display: 'block'
            }}
            title="Subscribe to MoneyOverNoise"
            />
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
