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
            سه ابزار.{' '}
            <span style={{ color: 'var(--color-accent)' }}>
              اول برای نیاز واقعی ساختیم
            </span>.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg-muted)', maxWidth: 500 }}>
            هرکدام برای حل یک مسأله واقعی ساخته شده‌اند.
          </p>
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
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--color-fg-muted)',
                  letterSpacing: '0.06em',
                  display: 'inline-block',
                  padding: '3px 10px',
                  border: '1px solid var(--color-line)',
                  borderRadius: 4,
                  marginBottom: 12,
                }}
              >
                {product.tagline}
              </span>
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
