
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Custom labels for specific paths
      switch (segment) {
        case 'etfs':
          label = 'ETFs';
          break;
        case 'psychology':
          label = 'Mind Over Money';
          break;
        case 'screener':
          label = 'ETF Screener';
          break;
        case 'learn':
          label = 'Learn';
          break;
      }
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {item.href ? (
            <Link
              to={item.href}
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-primary transition-colors flex items-center"
            >
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium flex items-center">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
