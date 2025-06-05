
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/etfs') ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/etfs/learn"
                      onClick={() => window.scrollTo(0, 0)}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">ETFs</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn about ETF investing and strategies
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/psychology"
                      onClick={() => window.scrollTo(0, 0)}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Psychology of Money</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Understand behavioral finance and money mindset
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none outline-none opacity-50 cursor-not-allowed">
                      <div className="text-sm font-medium leading-none">Debt</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Coming Soon: Fixed income investing
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/etfs/screener"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/etfs/screener') ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                Tools
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/psychology"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/psychology' ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                Blog
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/about' ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
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
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
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
              <div className="py-2">
                <div className="font-medium text-sm mb-2">Learn</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/etfs/learn"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    ETFs
                  </Link>
                  <Link
                    to="/psychology"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Psychology of Money
                  </Link>
                  <div className="block text-sm py-2 text-muted-foreground opacity-50">
                    Debt (Coming Soon)
                  </div>
                </div>
              </div>

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

              <Link
                to="/psychology"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
