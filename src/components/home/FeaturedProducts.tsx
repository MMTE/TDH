import { products } from '@/lib/products';
import { MockDashboard } from '@/components/shared/MockDashboard';

const variantMap: Record<string, 'suite' | 'data' | 'workflow'> = {
  'business-suite': 'suite',
  'data-platform': 'data',
  'workflow': 'workflow',
};

export function FeaturedProducts() {
  const featured = products.find((p) => p.slug === 'business-suite')!;
  const others = products.filter((p) => p.slug !== 'business-suite');

  return (
    <section className="py-16 px-4 md:py-24 md:px-10" style={{ background: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div>
            <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', letterSpacing: '0.04em', display: 'block', marginBottom: 16 }}>
              ۰۳ — محصولات
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
              سه پلتفرم.{' '}
              <span style={{ color: 'var(--color-accent)' }}>
                یک
              </span>{' '}
              زیرساخت.
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
            مجموعه‌ای از پلتفرم‌های یکپارچه که تمام نیازهای سازمانی شما را پوشش می‌دهد — از مدیریت ارتباط با مشتری و هوش تجاری تا اتوماسیون فرآیندها.
          </p>
        </div>

        <a
          href={`/products/${featured.slug}`}
          style={{
            display: 'block',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-line)',
            borderRadius: 8,
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            marginBottom: 24,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
            <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-subtle)', letterSpacing: '0.06em', marginBottom: 16 }}>
                FEATURED · {featured.slug.toUpperCase().replace('-', ' ')}
              </span>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
                {featured.name}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-accent)', marginBottom: 16, fontFamily: 'var(--font-sans)' }}>
                {featured.tagline}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--color-fg-muted)', marginBottom: 24, fontFamily: 'var(--font-sans)' }}>
                {featured.shortDescription}
              </p>
              <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)', marginBottom: 24 }}>
                {featured.pricing}
              </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)' }}>
                مشاهده جزئیات
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </span>
            </div>
            <div style={{ borderInlineStart: '1px solid var(--color-line)' }}>
              <MockDashboard variant="suite" />
            </div>
          </div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{
                display: 'block',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-line)',
                borderRadius: 8,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ padding: '24px 24px 16px' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--color-fg-subtle)', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>
                  {product.slug.toUpperCase().replace('-', ' ')}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 4, fontFamily: 'var(--font-sans)' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--color-accent)', marginBottom: 4, fontFamily: 'var(--font-sans)' }}>
                  {product.tagline}
                </p>
                <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-muted)' }}>
                  {product.pricing}
                </span>
              </div>
              <MockDashboard variant={variantMap[product.slug]} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
