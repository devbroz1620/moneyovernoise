
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import SubscriptionModal from '@/components/shared/SubscriptionModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-orange-400">Money</span>
            <span className="text-xl font-semibold text-foreground">OverNoise</span>
          </Link>
        </div>

        {/* Desktop Navigation - moved to the right */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto mr-8">
          <Link
            to="/etfs"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              isActive('/etfs') ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            ETFs
          </Link>
          
          <Link
            to="/debt"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              isActive('/debt') ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Debt
          </Link>

          <Link
            to="/psychology"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              location.pathname === '/psychology' ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Mind Over Money
          </Link>

          <Link
            to="/etfs/screener"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              location.pathname === '/etfs/screener' ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Tools
          </Link>

          <Button
            variant="ghost"
            className="font-medium text-muted-foreground hover:text-primary"
            onClick={() => setIsSubscriptionModalOpen(true)}
          >
            Subscribe
          </Button>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <Link
                to="/etfs"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                ETFs
              </Link>

              <Link
                to="/debt"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Debt
              </Link>

              <Link
                to="/psychology"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Mind Over Money
              </Link>

              <Link
                to="/etfs/screener"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Tools
              </Link>

              <Button
                variant="ghost"
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors justify-start px-0"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSubscriptionModalOpen(true);
                }}
              >
                Subscribe
              </Button>
            </nav>
          </div>
        </div>
      )}

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </header>
  );
};

export default Navbar;
