import { products } from '@/lib/products';

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4 md:py-24 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1000px] mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            ابزارهایی که خودمان به آن‌ها نیاز داشتیم.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{
                display: 'block',
                padding: '24px 28px',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-line)',
                borderRadius: 8,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-line)';
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: 'var(--color-fg-subtle)', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>
                {product.slug.toUpperCase().replace('-', ' ')}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 4, fontFamily: 'var(--font-sans)' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-accent)', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
                {product.tagline}
              </p>
              <p style={{ fontSize: 14, color: 'var(--color-fg-muted)', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                {product.shortDescription}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
