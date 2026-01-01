import React from 'react';
import { ArrowLeft, CheckCircle2, Building2, BarChart3, Workflow } from 'lucide-react';
import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { getProductBySlug } from '@/lib/products';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { PageLayout } from '@/components/layout/PageLayout';

interface ProductDetailContentProps {
  product: Product;
}

// Icon map for client-side rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  'business-suite': Building2,
  'data-platform': BarChart3,
  'workflow': Workflow,
};

export function ProductDetailContent({ product: prod }: ProductDetailContentProps) {
  // Get icon from map using slug (for client-side rendering)
  const Icon = iconMap[prod.slug] || prod.icon;

  // Get related products
  const relatedProducts = prod.relatedProducts
    ?.map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined) || [];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-accent/10 rounded-sm flex items-center justify-center">
                {Icon && (
                  <Icon
                    size={48}
                    strokeWidth={1.5}
                    className="text-accent"
                  />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground mb-4">
                {prod.name}
              </h1>
              <p className="text-lg sm:text-xl text-accent font-medium mb-6">
                {prod.tagline}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {prod.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="/contact">
                    {prod.primaryCta}
                    <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/contact">
                    {prod.secondaryCta}
                    <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="container px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-muted rounded-sm p-8 flex items-center justify-center">
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      {prod.problemsSolved && prod.problemsSolved.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="p-6 md:p-8 bg-muted/50 rounded-sm border-r-4 border-accent">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-6">
                مشکلاتی که حل می‌کند
              </h2>
              <ul className="space-y-3">
                {prod.problemsSolved.map((problem, index) => (
                  <li key={index} className="text-base text-muted-foreground flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xl">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits Section */}
      {prod.keyBenefits && prod.keyBenefits.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  مزایای کلیدی
                </h2>
                <p className="text-lg text-muted-foreground">
                  ارزش واقعی که این محصول برای کسب‌وکار شما ایجاد می‌کند
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prod.keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-sm p-6 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <p className="text-foreground text-base leading-relaxed font-medium">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {prod.features && prod.features.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                ویژگی‌ها و قابلیت‌ها
              </h2>
              <p className="text-lg text-muted-foreground">
                امکانات کامل این محصول
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prod.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-sm p-6 hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <p className="text-foreground text-sm leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {prod.process && prod.process.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  فرآیند پیاده‌سازی
                </h2>
                <p className="text-lg text-muted-foreground">
                  مراحل راه‌اندازی و استقرار محصول
                </p>
              </div>
              <div className="space-y-6">
                {prod.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                      <span className="text-accent-foreground font-heading font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-sm p-6 hover:border-accent transition-colors">
                      <p className="text-foreground text-base leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {prod.useCases && prod.useCases.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                موارد استفاده
              </h2>
              <p className="text-lg text-muted-foreground">
                چگونه از این محصول استفاده می‌شود؟
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {prod.useCases.map((useCase, index) => (
                <span
                  key={index}
                  className="text-sm px-4 py-2 bg-accent/10 text-accent rounded-sm border border-accent/20 hover:border-accent transition-colors"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target Businesses Section */}
      {prod.targetBusinesses && prod.targetBusinesses.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  برای چه کسب‌وکارهایی مناسب است؟
                </h2>
                <p className="text-lg text-muted-foreground">
                  این محصول برای چه نوع سازمان‌هایی طراحی شده است
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {prod.targetBusinesses.map((business, index) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 bg-card border border-border text-foreground rounded-sm hover:border-accent transition-colors"
                  >
                    {business}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {prod.technologies && prod.technologies.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                تکنولوژی‌ها و فناوری‌ها
              </h2>
              <p className="text-lg text-muted-foreground">
                تکنولوژی‌های مورد استفاده در این محصول
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {prod.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-4 py-2 bg-card border border-border text-foreground rounded-sm hover:border-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  محصولات مرتبط
                </h2>
                <p className="text-lg text-muted-foreground">
                  محصولات دیگری که ممکن است برای شما مفید باشند
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProd) => (
                  <ServiceCard
                    key={relatedProd.slug}
                    icon={relatedProd.icon}
                    title={relatedProd.name}
                    description={relatedProd.shortDescription}
                    link={`/products/${relatedProd.slug}`}
                    linkText="مشاهده محصول"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              آماده شروع هستید؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              برای دریافت دمو رایگان و اطلاعات بیشتر در مورد این محصول، با ما تماس بگیرید. تیم ما آماده است تا به شما کمک کند.
            </p>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">شروع از</p>
              <p className="text-3xl font-heading font-bold text-foreground">{prod.pricing}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="/contact">
                  {prod.primaryCta}
                  <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  {prod.secondaryCta}
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

