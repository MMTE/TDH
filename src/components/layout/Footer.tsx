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
        className="mx-auto max-w-[1400px] pt-12 md:pt-20 px-4 md:px-10 pb-6 md:pb-8"
      >
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  width: 36,
                  height: 36,
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
                    fontSize: 18,
                    color: 'var(--color-bg)',
                    lineHeight: 1,
                  }}
                >
                  T
                </span>
              </div>
              <span className="text-fg font-bold text-[15px]">
                تکین داده هوشمند
              </span>
            </div>
            <p className="text-fg-muted" style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              ساخت و تجاری‌سازی نرم‌افزارها و خدمات کاربردی برای کسب‌وکارهایی که به راه‌حل واقعی نیاز دارند.
            </p>
          </div>

          <div>
            <h4
              className="mb-4 text-fg"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              PRODUCTS
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="/products/ai-chat" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                دستیار هوشمند فارسی
              </a>
              <a href="/products/serverguard" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                ServerGuard
              </a>
              <a href="/products/watch-tower" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                Watch Tower
              </a>
            </nav>
          </div>

          <div>
            <h4
              className="mb-4 text-fg"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              COMPANY
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="/about" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                درباره ما
              </a>
              <a href="/solutions" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                راهکارها
              </a>
              <a href="/faq" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                پرسش‌های متداول
              </a>
              <a href="/contact" className="text-fg-muted" style={{ fontSize: 14, transition: 'color 0.2s' }}>
                تماس
              </a>
            </nav>
          </div>

          <div>
            <h4
              className="mb-4 text-fg"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              CONTACT
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:02128428084"
                className="text-fg-muted"
                style={{ fontSize: 14 }}
                dir="ltr"
              >
                ۰۲۱-۲۸۴۲۸۰۸۴
              </a>
              <a
                href="mailto:info@tdh.ir"
                className="text-fg-muted"
                style={{ fontSize: 14 }}
                dir="ltr"
              >
                info@tdh.ir
              </a>
              <p className="text-fg-muted" style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
                تهران، هروی، اتوبان صیاد شیرازی، نبش گلستان ۴، پلاک ۱۲۹
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-between items-center mt-16 pt-6"
          style={{ borderTop: '1px solid var(--color-line)', fontSize: 13 }}
        >
          <span className="text-fg-muted">
            © ۱۴۰۳ تکین داده هوشمند. تمامی حقوق محفوظ است.
          </span>

        </div>
      </div>
    </footer>
  );
}
