import { Building2, BarChart3, Workflow, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PageLayout } from '@/components/layout/PageLayout';

export function ProductsContent() {

  const products = [
    {
      icon: Building2,
      name: 'مجموعه کسب‌وکار TDH',
      tagline: 'پلتفرم جامع ERP و مدیریت کسب‌وکار',
      description: 'یک راهکار مدیریت کسب‌وکار یکپارچه که CRM، مدیریت پروژه، ابزارهای مالی و همکاری تیمی را در یک پلتفرم واحد گرد هم می‌آورد. این پلتفرم برای شرکت‌های تولیدی، بازرگانی، خدماتی و سازمان‌های دولتی طراحی شده است.',
      problemsSolved: [
        'مدیریت ناکارآمد فروش و عدم یکپارچگی داده‌ها',
        'گزارش‌دهی دستی و زمان‌بر',
        'عدم هماهنگی بین بخش‌های مختلف',
        'مدیریت پیچیده پروژه‌ها و منابع',
      ],
      targetBusinesses: [
        'شرکت‌های تولیدی',
        'شرکت‌های بازرگانی',
        'شرکت‌های خدماتی',
        'سازمان‌های دولتی',
      ],
      keyBenefits: [
        'افزایش ۳۰٪ بهره‌وری',
        'کاهش ۴۰٪ هزینه‌های عملیاتی',
        'دسترسی یکپارچه به اطلاعات',
        'گزارش‌دهی بلادرنگ',
      ],
      features: [
        'مدیریت فروش و CRM',
        'برنامه‌ریزی و پیگیری پروژه',
        'ابزارهای مالی و حسابداری',
        'مرکز همکاری تیمی',
        'مدیریت انبار و موجودی',
        'پرتال پشتیبانی مشتری',
        'گزارش‌دهی و تحلیل پیشرفته',
        'اپلیکیشن موبایل (iOS و Android)',
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pricing: 'از ۴۹۰,۰۰۰ تومان/کاربر/ماه',
      primaryCta: 'درخواست دمو',
      secondaryCta: 'مشاهده قیمت‌ها',
    },
    {
      icon: BarChart3,
      name: 'پلتفرم داده TDH',
      tagline: 'موتور هوش تجاری و تحلیل داده',
      description: 'داده‌های خام را با پلتفرم قدرتمند BI ما به بینش‌های عملیاتی تبدیل کنید. داشبوردهای سفارشی بسازید، گزارش تولید کنید و از تحلیل پیش‌بینانه بهره ببرید. این پلتفرم از داده‌های مالی، فروش، منابع انسانی و عملیاتی پشتیبانی می‌کند.',
      problemsSolved: [
        'عدم دسترسی به داده‌های یکپارچه',
        'گزارش‌دهی دستی و ناکارآمد',
        'عدم امکان تحلیل پیش‌بینانه',
        'داشبوردهای غیرقابل تنظیم',
      ],
      targetBusinesses: [
        'سازمان‌های نیازمند تحلیل داده',
        'شرکت‌های با حجم بالای داده',
        'مدیران نیازمند گزارش‌دهی پیشرفته',
        'سازمان‌های تصمیم‌محور',
      ],
      keyBenefits: [
        'تصمیم‌گیری مبتنی بر داده',
        'داشبوردهای تعاملی و بلادرنگ',
        'تحلیل پیش‌بینانه با ML',
        'کاهش زمان گزارش‌دهی تا ۷۰٪',
      ],
      features: [
        'تصویرسازی داده بلادرنگ',
        'سازنده گزارش سفارشی',
        'تحلیل پیش‌بینانه و ML',
        'موتور یکپارچه‌سازی API',
        'مدیریت انبار داده',
        'هشدارها و اعلان‌های خودکار',
        'کنترل دسترسی مبتنی بر نقش',
        'امکان برچسب‌گذاری سفید',
      ],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pricing: 'از ۱,۹۹۰,۰۰۰ تومان/ماه',
      primaryCta: 'شروع آزمایشی رایگان',
      secondaryCta: 'مشاهده امکانات',
    },
    {
      icon: Workflow,
      name: 'گردش‌کار TDH',
      tagline: 'اتوماسیون فرآیند و مدیریت کسب‌وکار',
      description: 'فرآیندهای کسب‌وکار خود را با سازنده گردش‌کار بصری طراحی، خودکار و بهینه کنید. وظایف دستی را حذف کرده و عملیات را تسریع کنید. این راهکار برای فرآیندهای تأیید، خرید، منابع انسانی و مالی ایده‌آل است.',
      problemsSolved: [
        'فرآیندهای دستی و زمان‌بر',
        'عدم ردیابی تغییرات',
        'خطاهای انسانی در گردش کار',
        'عدم انطباق با استانداردها',
      ],
      targetBusinesses: [
        'سازمان‌های با فرآیندهای پیچیده',
        'شرکت‌های نیازمند اتوماسیون',
        'سازمان‌های نیازمند انطباق',
        'کسب‌وکارهای در حال رشد',
      ],
      keyBenefits: [
        'کاهش ۵۰٪ زمان فرآیندها',
        'حذف خطاهای انسانی',
        'ردیابی کامل تغییرات',
        'انطباق خودکار با استانداردها',
      ],
      features: [
        'سازنده گردش‌کار بصری (کشیدن و رها کردن)',
        'سیستم مدیریت اسناد',
        'مسیریابی و گردش‌کار تأیید',
        'موتور اتوماسیون وظایف',
        'یکپارچه‌سازی امضای الکترونیکی',
        'ردیابی تغییرات و انطباق',
        'یکپارچه‌سازی با سرویس‌های ثالث',
        'سازنده فرم سفارشی',
      ],
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pricing: 'از ۹۹۰,۰۰۰ تومان/ماه',
      primaryCta: 'درخواست دمو',
      secondaryCta: 'مشاهده قیمت‌ها',
    },
  ];

  const integrations = [
    'درگاه‌های پرداخت ایرانی',
    'سامانه مالیاتی',
    'پیامک و ایمیل',
    'حسابداری سپیدار',
    'نرم‌افزار هلو',
    'وب‌سرویس‌های دولتی',
    'Zapier',
    'REST API',
  ];

  return (
    <PageLayout minHeight>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            محصولات ما
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            راه‌حل‌های SaaS سازمانی طراحی شده برای تحول در نحوه کار کسب‌وکار شما. پلتفرم‌های یکپارچه TDH شامل مجموعه کسب‌وکار (ERP/CRM)، پلتفرم داده (هوش تجاری) و گردش‌کار (اتوماسیون) برای شرکت‌های ایرانی.
          </p>
        </div>

        {/* Products - Alternating Layout */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Product Card */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-card border border-border rounded-sm p-6 hover:border-accent h-full">
                  <div className="mb-4">
                    <product.icon size={48} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-lg text-accent mb-4 font-medium">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Problems Solved */}
                  {product.problemsSolved && (
                    <div className="mb-6 p-4 bg-muted/50 rounded-sm border-r-2 border-accent">
                      <h3 className="text-sm font-semibold mb-2 text-foreground">
                        مشکلاتی که حل می‌کند:
                      </h3>
                      <ul className="space-y-1">
                        {product.problemsSolved.map((problem, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Target Businesses */}
                  {product.targetBusinesses && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-2 text-foreground">
                        برای چه کسب‌وکارهایی مناسب است؟
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.targetBusinesses.map((business, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-sm border border-accent/20"
                          >
                            {business}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Benefits */}
                  {product.keyBenefits && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3 text-foreground">
                        مزایای کلیدی:
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {product.keyBenefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span className="text-sm text-muted-foreground font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-foreground">
                      ویژگی‌های کلیدی:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">شروع از</p>
                    <p className="text-2xl font-bold text-foreground">{product.pricing}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <a href="/contact">{product.primaryCta}</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="/contact">{product.secondaryCta}</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-muted rounded-sm p-8 flex items-center justify-center min-h-[400px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-sm shadow-lg industrial-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrations Section */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-sm text-center p-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              یکپارچه با ابزارهای موجود شما
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              محصولات ما به‌صورت یکپارچه با نرم‌افزارهایی که در حال حاضر استفاده می‌کنید متصل می‌شوند. بدون مهاجرت پیچیده، بدون جزیره داده.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-60">
              {integrations.map((integration, index) => (
                <div key={index} className="px-4 py-2 border border-border rounded-sm">
                  <span className="text-muted-foreground font-semibold text-sm">{integration}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              + صدها مورد دیگر از طریق REST API
            </p>
            <Button variant="outline">
              مشاهده همه یکپارچه‌سازی‌ها
              <ArrowLeft className="inline mr-2" size={18} />
            </Button>
          </div>
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-sm p-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              نیاز به راهکار سفارشی دارید؟
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              محصولات ما بسیار قابل تنظیم هستند، اما اگر به چیزی نیاز دارید که به‌طور خاص برای کسب‌وکار شما ساخته شود، تیم ما می‌تواند یک راهکار نرم‌افزاری سفارشی ایجاد کند.
            </p>
            <Button asChild>
              <a href="/contact">
                رزرو مشاوره
                <ArrowLeft className="inline mr-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
