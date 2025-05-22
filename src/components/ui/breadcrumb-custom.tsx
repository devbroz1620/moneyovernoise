
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbCustom({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 md:mb-6">
      <ol className="flex flex-wrap items-center text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
            {item.isCurrent ? (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
