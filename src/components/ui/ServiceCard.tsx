import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  linkText,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'data-stream-card bg-card border border-border rounded-sm p-8 hover:border-accent group',
        className
      )}
    >
      <div className="mb-6">
        <Icon
          size={40}
          strokeWidth={1.5}
          className="text-secondary group-hover:text-accent"
        />
      </div>

      <h3 className="text-lg font-heading font-bold tracking-industrial uppercase mb-3 text-foreground">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      <a
        href={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        {linkText}
        <ArrowRight size={16} strokeWidth={1.5} />
      </a>
    </div>
  );
}
