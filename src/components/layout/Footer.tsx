export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-line)',
      }}
    >
      <div
        className="mx-auto max-w-[1000px] pt-12 px-4 md:px-6 pb-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: 'var(--color-accent)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 900,
                    fontSize: 12,
                    color: 'var(--color-bg)',
                    lineHeight: 1,
                  }}
                >
                  T
                </span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-fg)' }}>
                تکین داده هوشمند
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 280 }}>
              ساخت نرم‌افزارهای کاربردی برای کسب‌وکارهایی که به راه‌حل واقعی نیاز دارند.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <nav className="flex flex-col gap-2">
                <a href="/products" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                  محصولات
                </a>
                <a href="/solutions" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                  راهکارها
                </a>
                <a href="/about" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                  درباره ما
                </a>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-2">
                <a href="/contact" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                  تماس
                </a>
                <a href="mailto:info@tdh.ir" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                  info@tdh.ir
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6"
          style={{ borderTop: '1px solid var(--color-line)', fontSize: 12, color: 'var(--color-fg-muted)' }}
        >
          © ۱۴۰۳ TDH
        </div>
      </div>
    </footer>
  );
}
