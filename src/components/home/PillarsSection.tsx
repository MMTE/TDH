const pillars = [
  { number: '01', title: 'نرم‌افزار', description: 'پلتفرم‌های SaaS سازمانی برای مقیاس و عملیات حیاتی.' },
  { number: '02', title: 'فناوری', description: 'زیرساخت ابری با ۹۹٫۹٪ آپتایم و امنیت سطح بانکی.' },
  { number: '03', title: 'نوآوری', description: 'تحقیق و توسعه برای حل چالش‌های پیچیده کسب‌وکار.' },
];

export function PillarsSection() {
  return (
    <section style={{ padding: '120px 40px', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'end', marginBottom: 64 }}>
          <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', letterSpacing: '0.04em' }}>
            § ۰۲ — ستون‌های ما
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            سه ستون که هر چیزی را که می‌سازیم نگه می‌دارند.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--color-line)' }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              style={{
                padding: '48px 32px',
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <div className="mono" style={{ fontSize: 64, fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1 }}>
                {pillar.number}
              </div>
              <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', display: 'block', marginTop: 16, marginBottom: 16 }}>
                / {pillar.number === '01' ? 'نرم‌افزار' : pillar.number === '02' ? 'فناوری' : 'نوآوری'}
              </span>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 16, fontFamily: 'var(--font-sans)' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
