import { StatCard } from '@/components/ui/StatCard';

export function StatsSection() {
  const stats = [
    // { value: '+۱۰,۰۰۰', label: 'کاربر فعال' },
    // { value: '۹۹.۹٪', label: 'آپتایم پلتفرم' },
    // { value: '+۵۰', label: 'مشتری سازمانی' },
  ];

  return (
    <section className="py-20 bg-muted border-y border-border">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-reverse divide-border">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
