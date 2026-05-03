const pillars = [
  { number: '01', title: 'نرم‌افزار', description: 'پلتفرم‌های SaaS سازمانی برای مقیاس و عملیات حیاتی. راهکارهای یکپارچه ERP، CRM، هوش تجاری و اتوماسیون که با رشد کسب‌وکار شما رشد می‌کنند.' },
  { number: '02', title: 'فناوری', description: 'زیرساخت ابری مقیاس‌پذیر با ۹۹٫۹٪ آپتایم تضمین‌شده. امنیت سطح بانکی و پشتیبانی ۲۴/۷ — بدون نگرانی از سرور و نگهداری.' },
  { number: '03', title: 'نوآوری', description: 'رویکرد مبتنی بر تحقیق و توسعه برای حل چالش‌های واقعی کسب‌وکار. تکنولوژی‌های روز دنیا، فقط وقتی ارزش واقعی ایجاد کنند.' },
];

export function PillarsSection() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 items-end mb-12 md:mb-16">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            سه ستون که هر چیزی را که می‌سازیم نگه می‌دارند.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--color-line)' }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="p-6 md:p-8"
              style={{
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <div className="mono text-5xl md:text-[64px]" style={{ fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1 }}>
                {pillar.number}
              </div>
              <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', display: 'block', marginTop: 16, marginBottom: 16 }}>
                / {pillar.number === '01' ? 'نرم‌افزار' : pillar.number === '02' ? 'فناوری' : 'نوآوری'}
              </span>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 16, fontFamily: 'var(--font-sans)' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}