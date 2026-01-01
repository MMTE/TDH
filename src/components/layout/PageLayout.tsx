import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  minHeight?: boolean;
}

export function PageLayout({ children, className, minHeight = false }: PageLayoutProps) {
  return (
    <main
      className={cn(
        'pt-32 lg:pt-40 pb-20',
        minHeight && 'min-h-screen',
        className
      )}
    >
      {children}
    </main>
  );
}

