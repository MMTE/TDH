const stats = [
  { key: 'UPTIME', number: '۹۹٫۹٪', label: 'آپتایم' },
  { key: 'USERS', number: '+۱۰٬۰۰۰', label: 'کاربر فعال' },
  { key: 'CLIENTS', number: '+۱۰۰', label: 'مشتری' },
  { key: 'SINCE 1395', number: '۹+', label: 'سال' },
];

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 px-4 md:pt-20 md:px-10 md:pb-20" style={{ borderBottom: '1px solid var(--color-line)', overflow: 'hidden' }}>
      <div className="max-w-[1400px] mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 64px)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--color-fg)', marginBottom: 24, fontFamily: 'var(--font-sans)' }}>
            ساخت و تجاری‌سازی نرم‌افزارها
            <br />
            <span style={{ color: 'var(--color-accent)' }}>
              و خدمات کاربردی
            </span>
            {' '}تخصص ویژه‌ی ماست.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 620, margin: '0 auto 36px' }}>
            از دستیار هوش مصنوعی فارسی با هزاران کاربر روزانه، تا مانیتورینگ سرور با AI و اعلان‌رسانی یکپارچه برای Agent های هوشمند — ابزارهایی ساختیم که خودمون بهشون نیاز داشتیم.
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
              مشاهده ابزارها
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: '1px solid var(--color-line)', marginTop: 48 }}>
          {stats.map((stat, i) => (
            <div
              key={stat.key}
              style={{
                paddingInlineStart: i > 0 ? 20 : 0,
                paddingInlineEnd: 20,
                paddingBlock: 24,
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: 'var(--color-fg-subtle)', letterSpacing: '0.08em', direction: 'ltr', display: 'block', textAlign: 'left' }}>
                {stat.key}
              </span>
              <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: 'var(--color-fg)', lineHeight: 1.2, marginTop: 8, fontFamily: 'var(--font-sans)' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 14, color: 'var(--color-fg-muted)', marginTop: 4, fontFamily: 'var(--font-sans)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
