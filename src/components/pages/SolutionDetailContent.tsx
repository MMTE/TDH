import React from 'react';
import { ArrowLeft, CheckCircle2, Cloud, Code2, GitBranch, Plug, MessageSquare } from 'lucide-react';
import type { Solution } from '@/lib/solutions';
import { Button } from '@/components/ui/button';
import { getSolutionBySlug } from '@/lib/solutions';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { PageLayout } from '@/components/layout/PageLayout';

// Icon map for client-side rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  'cloud-infrastructure-hosting': Cloud,
  'custom-software-development': Code2,
  'devops-cicd': GitBranch,
  'api-development-integration': Plug,
  'technical-consulting': MessageSquare,
};

interface SolutionDetailContentProps {
  solution: Solution;
}

export function SolutionDetailContent({ solution: sol }: SolutionDetailContentProps) {
  // Get icon from map using slug (for client-side rendering)
  const Icon = iconMap[sol.slug] || sol.icon;

  // Get related solutions
  const relatedSolutions = sol.relatedSolutions
    ?.map((slug) => getSolutionBySlug(slug))
    .filter((s): s is Solution => s !== undefined) || [];

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
                {sol.title}
              </h1>
              <p className="text-lg sm:text-xl text-accent font-medium mb-6">
                {sol.tagline}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {sol.fullText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="/contact">
                    درخواست مشاوره رایگان
                    <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                  </a>
                </Button>
                {sol.pricing && (
                  <Button asChild variant="outline" size="lg">
                    <a href="/contact">
                      مشاهده قیمت‌ها
                      <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      {sol.problemsSolved && sol.problemsSolved.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="p-6 md:p-8 bg-muted/50 rounded-sm border-r-4 border-accent">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-6">
                مشکلاتی که حل می‌کند
              </h2>
              <ul className="space-y-3">
                {sol.problemsSolved.map((problem, index) => (
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
      {sol.keyBenefits && sol.keyBenefits.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  مزایای کلیدی
                </h2>
                <p className="text-lg text-muted-foreground">
                  ارزش واقعی که این راهکار برای کسب‌وکار شما ایجاد می‌کند
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sol.keyBenefits.map((benefit, index) => (
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
      {sol.features && sol.features.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                ویژگی‌ها و قابلیت‌ها
              </h2>
              <p className="text-lg text-muted-foreground">
                امکانات کامل این راهکار
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sol.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-sm p-6 hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {sol.process && sol.process.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  چگونه کار می‌کند؟
                </h2>
                <p className="text-lg text-muted-foreground">
                  فرآیند کار ما از شروع تا پایان
                </p>
              </div>
              <div className="space-y-6">
                {sol.process.map((step, index) => (
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
      {sol.useCases && sol.useCases.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                موارد استفاده
              </h2>
              <p className="text-lg text-muted-foreground">
                چه کسانی از این راهکار بهره می‌برند؟
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {sol.useCases.map((useCase, index) => (
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

      {/* Technologies Section */}
      {sol.technologies && sol.technologies.length > 0 && (
        <section className="bg-muted border-y border-border py-20 mb-20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                  تکنولوژی‌ها و ابزارها
                </h2>
                <p className="text-lg text-muted-foreground">
                  تکنولوژی‌های مورد استفاده در این راهکار
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {sol.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 bg-card border border-border text-foreground rounded-sm hover:border-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions Section */}
      {relatedSolutions.length > 0 && (
        <section className="container px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
                راهکارهای مرتبط
              </h2>
              <p className="text-lg text-muted-foreground">
                راهکارهای دیگری که ممکن است برای شما مفید باشند
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSolutions.map((relatedSol) => (
                <ServiceCard
                  key={relatedSol.slug}
                  icon={relatedSol.icon}
                  title={relatedSol.title}
                  description={relatedSol.shortText}
                  link={`/solutions/${relatedSol.slug}`}
                  linkText="مشاهده راهکار"
                />
              ))}
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
              برای دریافت مشاوره رایگان و اطلاعات بیشتر در مورد این راهکار، با ما تماس بگیرید. تیم ما آماده است تا به شما کمک کند.
            </p>
            {sol.pricing && (
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2">شروع از</p>
                <p className="text-3xl font-heading font-bold text-foreground">{sol.pricing}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="/contact">
                  تماس با ما
                  <ArrowLeft size={20} strokeWidth={1.5} className="mr-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  درخواست دمو
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
