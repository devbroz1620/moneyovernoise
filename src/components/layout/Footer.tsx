
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" onClick={handleLinkClick} className="flex items-center mb-4">
              <span className="text-xl font-bold text-primary">Money</span>
              <span className="text-xl font-semibold text-foreground">OverNoise</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              MoneyOverNoise helps Indian investors cut through the noise — with clear, honest, and practical money insights. From investing to money mindset, we make money simple again.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/etfs/learn" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  ETF Guides
                </Link>
              </li>
              <li>
                <Link to="/psychology" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Psychology of Money
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground text-sm opacity-50">
                  Debt (Coming Soon)
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Tools & Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/etfs/screener" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  ETF Tools
                </Link>
              </li>
              <li>
                <Link to="/etfs/compare" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Compare ETFs
                </Link>
              </li>
              <li>
                <Link to="/psychology" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={handleLinkClick} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Money Over Noise. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Disclaimer: The information provided is for educational purposes only and not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
