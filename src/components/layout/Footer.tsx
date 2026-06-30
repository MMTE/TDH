export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-line)',
        direction: 'rtl',
      }}
    >
      <div
        className="mx-auto max-w-[1000px] pt-12 md:pt-16 px-4 md:px-6 pb-8"
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{
                  width: 28,
                  height: 28,
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
                    fontSize: 14,
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
              ساخت و تجاری‌سازی نرم‌افزارها و خدمات کاربردی برای کسب‌وکارهایی که به راه‌حل واقعی نیاز دارند.
            </p>
          </div>

          <div>
            <h4
              className="mb-3"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--color-fg)' }}
            >
              PRODUCTS
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="/products/ai-chat" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                دستیار هوشمند فارسی
              </a>
              <a href="/products/serverguard" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                ServerGuard
              </a>
              <a href="/products/watch-tower" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                Watch Tower
              </a>
            </nav>
          </div>

          <div>
            <h4
              className="mb-3"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--color-fg)' }}
            >
              CONTACT
            </h4>
            <div className="flex flex-col gap-2">
              <a href="tel:02128428084" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }} dir="ltr">
                ۰۲۱-۲۸۴۲۸۰۸۴
              </a>
              <a href="mailto:info@tdh.ir" style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}>
                info@tdh.ir
              </a>
              <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-fg-muted)', maxWidth: 220, marginTop: 4 }}>
                تهران، هروی، اتوبان صیاد شیرازی، نبش گلستان ۴، پلاک ۱۲۹
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6"
          style={{ borderTop: '1px solid var(--color-line)', fontSize: 12, color: 'var(--color-fg-muted)' }}
        >
          © ۱۴۰۳ تکین داده هوشمند. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
