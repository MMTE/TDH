import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Abstract Software Interface Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-40 border border-border/30 rounded-sm opacity-20 hidden lg:block">
          <div className="p-3 space-y-2">
            <div className="h-2 bg-secondary/30 rounded-sm w-1/2" />
            <div className="h-16 bg-accent/10 rounded-sm" />
            <div className="flex gap-2">
              <div className="h-3 bg-secondary/20 rounded-sm flex-1" />
              <div className="h-3 bg-secondary/20 rounded-sm flex-1" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-10 w-48 h-32 border border-border/30 rounded-sm opacity-20 hidden lg:block">
          <div className="p-3 space-y-2">
            <div className="h-2 bg-secondary/30 rounded-sm w-2/3" />
            <div className="flex gap-2 h-16">
              <div className="w-1/3 bg-secondary/20 rounded-sm" />
              <div className="flex-1 bg-accent/10 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 text-center py-12 sm:py-16 md:py-0">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - Static */}
          <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground leading-tight mb-4 sm:mb-6 text-center px-2 sm:px-0">
            مدیریت سازمان؛ از ERP و CRM تا هوش تجاری و اتوماسیون فرآیند
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">شرکت تکین داده هوشمند ارائه‌دهنده راهکارهای نرم‌افزاری سازمانی، با پلتفرم‌های قدرتمند ERP، سیستم CRM پیشرفته، هوش تجاری (BI) و اتوماسیون گردش‌کار، زیرساخت دیجیتال یکپارچه‌ای برای رشد هوشمند، تصمیم‌گیری دقیق و افزایش بهره‌وری سازمان شما فراهم می‌کند.</p>

          {/* CTA */}
          <Button asChild variant="hero" size="lg">
            <a href="/products">
              محصولات ما را ببینید
              <ArrowLeft size={20} strokeWidth={1.5} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
