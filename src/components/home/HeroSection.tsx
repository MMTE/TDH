export function HeroSection() {
  return (
    <section className="relative py-24 px-4 md:py-36 md:px-10">
      <div className="max-w-[800px] mx-auto" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--color-fg)', marginBottom: 20, fontFamily: 'var(--font-sans)' }}>
          طراحی و توسعه
          <br />
          <span style={{ color: 'var(--color-accent)' }}>محصولات نرم‌افزاری</span>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 520, margin: '0 auto 36px' }}>
          طراحی و توسعه محصولات نرم‌افزاری شامل سیستم CRM جامع، راه‌حل‌های فروشگاهی و ابزارهای آنلاین.
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '14px 32px',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
            }}
          >
            شروع گفت‌وگو
          </a>
          <a
            href="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '14px 32px',
              background: 'transparent',
              color: 'var(--color-fg)',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              border: '1px solid var(--color-line-strong)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            مشاهده محصولات
          </a>
        </div>
      </div>
    </section>
  );
}
