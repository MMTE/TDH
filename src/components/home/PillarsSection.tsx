import { Layers, Cloud, Lightbulb } from 'lucide-react';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function PillarsSection() {
  const pillars = [
    {
      icon: Layers,
      title: 'نرم‌افزار',
      text: 'پلتفرم‌های SaaS سازمانی ساخته شده برای مقیاس، امنیت و عملیات حیاتی. راهکارهای یکپارچه ERP، CRM، هوش تجاری و اتوماسیون که با کسب‌وکار شما رشد می‌کنند.',
      linkText: 'مشاهده محصولات',
      href: '/products',
    },
    {
      icon: Cloud,
      title: 'فناوری',
      text: 'زیرساخت قدرتمند و معماری ابری که تحویل نرم‌افزار قابل اطمینان را تقویت می‌کند. با ۹۹.۹٪ آپتایم و امنیت سطح بانکی، کسب‌وکار شما در امان است.',
      linkText: 'بررسی فناوری',
      href: '/solutions',
    },
    {
      icon: Lightbulb,
      title: 'نوآوری',
      text: 'رویکرد مبتنی بر تحقیق و توسعه برای حل چالش‌های پیچیده کسب‌وکار با نرم‌افزار هوشمند. ما با تکنولوژی‌های روز دنیا، راهکارهای آینده‌نگر ارائه می‌دهیم.',
      linkText: 'بررسی نوآوری',
      href: '/solutions',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <ServiceCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.text}
              link={pillar.href}
              linkText={pillar.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
