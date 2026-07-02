export function CTABlock() {
  return (
    <section
      className="py-20 px-4 md:py-28 md:px-10"
      style={{
        background: 'var(--color-accent)',
        color: 'var(--color-bg)',
      }}
    >
      <div className="max-w-[600px] mx-auto" style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
            color: 'var(--color-bg)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          از مسأله شروع کنیم.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            marginBottom: 32,
            color: 'var(--color-fg-subtle)',
          }}
        >
          یک جلسه کوتاه برای شنیدن مسأله شما — بدون تعهد و بدون فشار فروش.
        </p>
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
      </div>
    </section>
  );
}
