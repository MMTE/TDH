import { Shield, Zap, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export function WhyTDHSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'امنیت سازمانی',
      description: 'امنیت سطح بانکی در هر لایه. داده‌های شما با استانداردهای بین‌المللی محافظت می‌شوند.',
    },
    {
      icon: Zap,
      title: 'عملکرد بالا',
      description: '۹۹.۹٪ آپتایم تضمین شده. پلتفرم‌های ما برای عملکرد بهینه و در دسترس بودن دائمی طراحی شده‌اند.',
    },
    {
      icon: Users,
      title: 'پشتیبانی حرفه‌ای',
      description: 'تیم پشتیبانی ۲۴/۷ آماده کمک به شماست. بیش از ۱۰,۰۰۰ کاربر فعال از خدمات ما استفاده می‌کنند.',
    },
    {
      icon: TrendingUp,
      title: 'مقیاس‌پذیری',
      description: 'از ۱۰ تا ۱۰,۰۰۰ کاربر، پلتفرم‌های ما با رشد کسب‌وکار شما مقیاس می‌شوند.',
    },
    {
      icon: CheckCircle2,
      title: 'راهکار یکپارچه',
      description: 'همه ابزارهای مورد نیاز در یک پلتفرم واحد. بدون نیاز به نرم‌افزارهای متعدد و پیچیده.',
    },
  ];

  return (
    <section className="py-24 bg-muted border-y border-border">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
            چرا TDH را انتخاب کنیم؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ما راهکارهای نرم‌افزاری و پلتفرم‌های یکپارچه که تمام نیازهای کسب‌وکار شما را پوشش می‌دهند.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title}>
                <div className="bg-card border border-border rounded-sm p-6 h-full hover:border-accent">
                  <div className="mb-4">
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="text-accent"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            بیشتر درباره TDH بدانید
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
