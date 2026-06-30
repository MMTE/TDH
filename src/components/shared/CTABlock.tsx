export function CTABlock() {
  return (
    <section
      className="py-20 px-4 md:py-24 md:px-10"
      style={{
        background: 'var(--color-accent)',
        color: 'var(--color-bg)',
      }}
    >
      <div className="max-w-[700px] mx-auto" style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
            color: 'var(--color-bg)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          از مسأله شروع کنیم.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            opacity: 0.85,
            marginBottom: 36,
            color: 'var(--color-bg)',
          }}
        >
          یک جلسه کوتاه برای شنیدن مسأله شما — بدون تعهد و بدون فشار فروش.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: 'var(--color-bg)',
              color: 'var(--color-accent)',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
            }}
          >
            یک جلسه بگذاریم
          </a>
          <a
            href="tel:02128428084"
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--color-bg)',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              border: '1px solid var(--color-bg)',
              opacity: 0.8,
              fontFamily: 'var(--font-mono)',
              direction: 'ltr',
            }}
          >
            ۰۲۱-۲۸۴۲۸۰۸۴
          </a>
        </div>
      </div>
    </section>
  );
}
