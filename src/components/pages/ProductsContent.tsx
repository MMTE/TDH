import { products } from '@/lib/products';

export function ProductsContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-20 md:px-6"
        style={{ borderBottom: '1px solid var(--color-line)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-fg)',
              marginBottom: 16,
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>
              محصولات
            </span>{' '}
            نرم‌افزاری تکین داده هوشمند.
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 md:py-20 md:px-6">
        <div className="max-w-[800px] mx-auto">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              className="block mb-12"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '24px 28px',
                border: '1px solid var(--color-line)',
                borderRadius: 8,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-line)';
              }}
            >
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: 'var(--color-fg)',
                  marginBottom: 8,
                }}
              >
                {product.name}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--color-fg-muted)',
                }}
              >
                {product.shortDescription}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
