const stats = [
  { key: 'UPTIME', number: '۹۹٫۹٪', label: 'آپتایم تضمین‌شده' },
  { key: 'USERS', number: '+۱۰٬۰۰۰', label: 'کاربر فعال' },
  { key: 'CLIENTS', number: '+۵۰', label: 'مشتری سازمانی' },
  { key: 'EST. 1395', number: '۹+', label: 'سال تجربه' },
];

export function HeroSection() {
  return (
    <section style={{ position: 'relative', padding: '100px 40px 80px', borderBottom: '1px solid var(--color-line)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <span className="mono" style={{ position: 'absolute', top: 40, insetInlineStart: 40, fontSize: 12, color: 'var(--color-fg-subtle)' }}>
          REF · 00.HOME / HERO
        </span>
        <span className="mono" style={{ position: 'absolute', top: 40, insetInlineEnd: 40, fontSize: 12, color: 'var(--color-fg-subtle)' }}>
          ۱۴۰۴ · TEHRAN, IR
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
          <span style={{ width: 8, height: 8, background: 'var(--color-accent)', display: 'inline-block', borderRadius: '50%' }} />
          <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}>
            TDH·001 — پلتفرم سازمانی یکپارچه
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(56px, 7.5vw, 112px)', fontWeight: 900, lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--color-fg)', marginBottom: 64, fontFamily: 'var(--font-sans)' }}>
          سازمان شما،
          <br />
          <span style={{ textDecoration: 'underline', textUnderlineOffset: '0.12em', textDecorationThickness: '0.06em', textDecorationColor: 'var(--color-accent)', color: 'var(--color-accent)' }}>
            به طرز هوشمندانه‌ای
          </span>
          <br />
          یکپارچه.
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--color-fg-muted)', maxWidth: 520 }}>
            TDH مجموعه‌ای یکپارچه از پلتفرم‌های سازمانی است که فرآیندهای پیچیده کسب‌وکار را ساده می‌کند. از مدیریت ارتباط با مشتری تا هوش تجاری و اتوماسیون، همه چیز در یک زیرساخت واحد با ۹۹٫۹٪ آپتایم تضمین‌شده.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
              درخواست دمو رایگان
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
              مشاهده محصولات
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--color-line)' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.key}
              style={{
                padding: '24px 0',
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: 'var(--color-fg-subtle)', letterSpacing: '0.08em' }}>
                0{i + 1} · {stat.key}
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
