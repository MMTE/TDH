const reasons = [
  { number: '01', title: 'امنیت سازمانی', description: 'امنیت سطح بانکی در هر لایه. داده‌های شما با استانداردهای بین‌المللی محافظت می‌شوند.' },
  { number: '02', title: 'عملکرد بالا', description: '۹۹٫۹٪ آپتایم تضمین شده. پلتفرم‌های ما برای عملکرد بهینه و در دسترس بودن دائمی طراحی شده‌اند.' },
  { number: '03', title: 'پشتیبانی حرفه‌ای', description: 'تیم پشتیبانی ۲۴/۷ آماده کمک به شماست. بیش از ۱۰٬۰۰۰ کاربر فعال از خدمات ما استفاده می‌کنند.' },
  { number: '04', title: 'مقیاس‌پذیری', description: 'از ۱۰ تا ۱۰٬۰۰۰ کاربر، پلتفرم‌های ما با رشد کسب‌وکار شما مقیاس می‌شوند.' },
  { number: '05', title: 'راهکار یکپارچه', description: 'همه ابزارهای مورد نیاز در یک پلتفرم واحد. بدون نیاز به نرم‌افزارهای متعدد و پیچیده.' },
];

export function WhyTDHSection() {
  return (
    <section style={{ padding: '120px 40px', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', letterSpacing: '0.04em', display: 'block', marginBottom: 16 }}>
            § ۰۴ — چرا TDH
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            پنج دلیل که سازمان‌های پیشرو ما را انتخاب می‌کنند.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderTop: '1px solid var(--color-line)' }}>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              style={{
                padding: '40px 32px',
                borderBlockStart: i >= 2 ? '1px solid var(--color-line)' : 'none',
                borderInlineStart: i % 2 !== 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <span className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-accent)', display: 'block', marginBottom: 12 }}>
                {reason.number}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {reason.description}
              </p>
            </div>
          ))}
          <div
            style={{
              padding: '40px 32px',
              borderBlockStart: '1px solid var(--color-line)',
              borderInlineStart: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a
              href="/about"
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--color-accent)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-sans)',
              }}
            >
              بیشتر درباره TDH بدانید
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
