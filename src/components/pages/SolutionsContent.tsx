import { ServiceCard } from '@/components/ui/ServiceCard';
import { solutions } from '@/lib/solutions';
import { PageLayout } from '@/components/layout/PageLayout';

export function SolutionsContent() {

  return (
    <PageLayout>
      {/* Header */}
      <section className="container px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground mb-4">
            راهکارها و خدمات
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            توسعه سفارشی و خدمات زیرساختی برای تکمیل محصولات ما. از زیرساخت ابری و هاستینگ تا توسعه نرم‌افزار سفارشی، DevOps، یکپارچه‌سازی API و مشاوره فنی، ما تمام نیازهای فنی کسب‌وکار شما را پوشش می‌دهیم.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <ServiceCard
              key={solution.slug}
              icon={solution.icon}
              title={solution.title}
              description={solution.shortText}
              link={`/solutions/${solution.slug}`}
              linkText="بیشتر بدانید"
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
