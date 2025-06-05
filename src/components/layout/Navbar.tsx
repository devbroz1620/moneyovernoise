
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <span className="text-xl font-bold text-primary">Money</span>
            <span className="text-xl font-semibold text-foreground">OverNoise</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/etfs"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              isActive('/etfs') ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            ETFs
          </Link>
          
          <div className="relative group">
            <span className="font-medium text-muted-foreground opacity-60 cursor-not-allowed">
              Debt
            </span>
            <span className="absolute -top-2 -right-4 text-xs bg-muted text-muted-foreground px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Coming Soon
            </span>
          </div>

          <Link
            to="/psychology"
            onClick={() => window.scrollTo(0, 0)}
            className={`font-medium transition-colors hover:text-primary ${
              location.pathname === '/psychology' ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Mind Over Money
          </Link>
        </nav>

        {/* Search Bar and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </form>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </form>

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

              <div className="text-sm py-2 text-muted-foreground opacity-50">
                Debt (Coming Soon)
              </div>

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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
