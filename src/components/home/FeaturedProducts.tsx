import { products } from '@/lib/products';

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[800px] mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            محصولات ما.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{
                display: 'block',
                padding: '28px 32px',
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
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 6, fontFamily: 'var(--font-sans)' }}>
                {product.name}
              </h3>
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
