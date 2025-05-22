
import { ReactNode } from 'react';
import { BreadcrumbCustom, BreadcrumbItem } from '@/components/ui/breadcrumb-custom';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
}

export function PageHeader({ title, description, breadcrumbs, actions }: PageHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbCustom items={breadcrumbs} />
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
          {description && (
            <p className="text-muted-foreground text-lg">{description}</p>
          )}
        </div>
        
        {actions && <div className="flex-shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
