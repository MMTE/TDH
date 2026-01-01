import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function AboutContent() {

  const companyInfo = [
    { label: 'نوع شرکت', value: 'شرکت با مسئولیت محدود' },
    { label: 'تاریخ تأسیس', value: '۱۴۰۲/۰۸/۲۹' },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground mb-6 px-4 sm:px-0">
            معرفی تکین داده هوشمند
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto px-4 sm:px-0">
            تکین داده هوشمند (TDH)
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto px-4 sm:px-0">
            در TDH معتقدیم نرم‌افزارهای سازمانی باید قدرتمند اما ساده باشند. ما پلتفرم‌های SaaS می‌سازیم که چالش‌های واقعی کسب‌وکارها را حل کنند؛ از برنامه‌ریزی منابع تا تحلیل داده و اتوماسیون فرآیندها.
          </p>

          {/* Company Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {companyInfo.map((info) => (
              <div key={info.label}>
                <div className="bg-card border border-border rounded-sm p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    {info.label}
                  </div>
                  <div className="text-xl font-heading font-bold text-foreground">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
              آماده شروع همکاری هستید؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              بیایید ببینیم چگونه می‌توانیم به کسب‌وکار شما کمک کنیم. یک دمو رایگان رزرو کنید و با تیم ما صحبت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="/contact">
                  درخواست دمو رایگان
                  <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/products">
                  مشاهده محصولات
                  <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
