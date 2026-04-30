import { products } from '@/lib/products';
import { MockDashboard } from '@/components/shared/MockDashboard';

const slugToVariant: Record<string, 'suite' | 'data' | 'workflow'> = {
  'business-suite': 'suite',
  'data-platform': 'data',
  'workflow': 'workflow',
};

const s = {
  section: {
    fontFamily: 'var(--font-sans)',
    color: 'var(--color-fg)',
    boxSizing: 'border-box' as const,
  },
  mono: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--color-fg-muted)',
  },
  accent: {
    color: 'var(--color-accent)',
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 14px',
    border: '1px solid var(--color-line)',
    borderRadius: 6,
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    color: 'var(--color-fg-muted)',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'var(--color-accent)',
    flexShrink: 0,
  },
};

export function ProductsContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-20 md:px-10"
        style={{
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
          ...s.section,
        }}
      >
        <span className="mono hidden md:block" style={{ position: 'absolute', top: 24, left: 40, ...s.mono }}>
          REF · 01.PRODUCTS
        </span>
        <div className="max-w-[1400px] mx-auto">
          <div style={{ ...s.chip, marginBottom: 32 }}>
            <span style={s.dot} />
            § ۰۱ — کاتالوگ محصولات
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px, 7vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
              marginBottom: 24,
            }}
          >
            سه پلتفرم. یک{' '}
            <span
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.12em',
                textDecorationThickness: '0.06em',
                textDecorationColor: 'var(--color-accent)',
              }}
            >
              زیرساخت یکپارچه
            </span>
            .
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: 'var(--color-fg-muted)',
              maxWidth: 600,
            }}
          >
            راه‌حل‌های SaaS سازمانی TDH — از مدیریت کسب‌وکار و هوش تجاری تا اتوماسیون فرآیندها.
            همه در یک زیرساخت یکپارچه.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:py-20 md:px-10 md:pb-28" style={{ ...s.section }}>
        <div className="max-w-[1400px] mx-auto">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const variant = slugToVariant[product.slug] || 'suite';

            return (
              <a
                key={product.slug}
                href={`/products/${product.slug}`}
                className="block mb-12 md:mb-20"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  className={`grid grid-cols-1 gap-8 md:gap-12 items-center ${
                    isEven ? 'md:grid-cols-[1.4fr_1fr]' : 'md:grid-cols-[1fr_1.4fr]'
                  }`}
                >
                  {isEven ? (
                    <>
                      <div>
                        <MockDashboard variant={variant} />
                      </div>
                      <MetaBlock product={product} />
                    </>
                  ) : (
                    <>
                      <MetaBlock product={product} />
                      <div>
                        <MockDashboard variant={variant} />
                      </div>
                    </>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function MetaBlock({ product }: { product: (typeof products)[number] }) {
  return (
    <div>
      <span
        className="mono"
        style={{
          fontSize: 13,
          color: 'var(--color-fg-muted)',
          border: '1px solid var(--color-line)',
          padding: '4px 10px',
          borderRadius: 4,
          display: 'inline-block',
          marginBottom: 16,
        }}
      >
        {product.tagline}
      </span>
      <h2
        style={{
          fontSize: 'clamp(24px, 3vw, 40px)',
          fontWeight: 800,
          lineHeight: 1.15,
          color: 'var(--color-fg)',
          marginBottom: 12,
        }}
      >
        {product.name}
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--color-fg-muted)',
          marginBottom: 24,
        }}
      >
        {product.shortDescription}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--color-line)',
          paddingTop: 16,
        }}
      >
        <span className="mono" style={{ fontSize: 14, color: 'var(--color-fg-muted)' }}>
          {product.pricing}
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            border: '1px solid var(--color-accent)',
            borderRadius: 6,
            color: 'var(--color-accent)',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
          }}
        >
          مشاهده جزئیات
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
