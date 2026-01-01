interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center px-8 py-6">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground tracking-industrial uppercase">
        {label}
      </div>
    </div>
  );
}
