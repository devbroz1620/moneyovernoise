
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-primary">Money</span>
              <span className="text-xl font-semibold text-foreground">OverNoise</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Master ETFs. Invest smart with India's premier ETF learning and screening platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/learn/etfs/what-is-an-etf" className="text-muted-foreground text-sm hover:text-primary">
                  What is an ETF?
                </Link>
              </li>
              <li>
                <Link to="/learn/etfs/thematic" className="text-muted-foreground text-sm hover:text-primary">
                  Thematic ETFs
                </Link>
              </li>
              <li>
                <Link to="/learn/etfs/liquidity-volatility" className="text-muted-foreground text-sm hover:text-primary">
                  Liquidity & Volatility
                </Link>
              </li>
              <li>
                <Link to="/learn/etfs/asset-allocation" className="text-muted-foreground text-sm hover:text-primary">
                  Asset Allocation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/list/etfs" className="text-muted-foreground text-sm hover:text-primary">
                  ETF Screener
                </Link>
              </li>
              <li>
                <Link to="/list/compare" className="text-muted-foreground text-sm hover:text-primary">
                  Compare ETFs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground text-sm hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground text-sm hover:text-primary">
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
