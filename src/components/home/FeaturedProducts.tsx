import { LayoutGrid, BarChart3, GitBranch, ArrowLeft } from 'lucide-react';

export function FeaturedProducts() {
  const products = [
    {
      icon: LayoutGrid,
      title: 'مجموعه کسب‌وکار TDH',
      tagline: 'پلتفرم مدیریت کسب‌وکار یکپارچه',
    },
    {
      icon: BarChart3,
      title: 'پلتفرم داده TDH',
      tagline: 'تبدیل داده به تصمیم',
    },
    {
      icon: GitBranch,
      title: 'گردش‌کار TDH',
      tagline: 'عملیات خود را خودکار کنید',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
            محصولات برجسته
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            راه‌حل‌های نرم‌افزاری قدرتمند و پلتفرم‌های یکپارچه که تمام نیازهای کسب‌وکار شما را پوشش می‌دهند.
          </p>
        </div>

        {/* Products Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <a
                key={product.title}
                href="/products"
                className="data-stream-card group bg-card border border-border rounded-sm p-6 hover:border-accent"
              >
                {/* Product Mock */}
                <div className="aspect-video bg-muted/50 rounded-sm border border-border mb-4 overflow-hidden group-hover:border-accent/30">
                  <div className="w-full h-full p-3 flex flex-col gap-1.5">
                    <div className="h-2 bg-secondary/20 rounded-sm w-1/3" />
                    <div className="flex-1 flex gap-1.5">
                      <div className="w-1/4 bg-secondary/10 rounded-sm" />
                      <div className="flex-1 bg-accent/10 rounded-sm group-hover:bg-accent/15" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-accent mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="font-heading font-bold text-foreground">
                      {product.title}
                    </h3>
                  </div>
                  <Icon size={24} strokeWidth={1.5} className="text-secondary group-hover:text-accent" />
                </div>
              </a>
            );
          })}
        </div>

        {/* View All Products Link */}
        <div className="text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            مشاهده همه محصولات
            <ArrowLeft size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
