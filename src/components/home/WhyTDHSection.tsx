const reasons = [
  { number: '01', title: 'امنیت سازمانی', description: 'امنیت سطح بانکی در هر لایه. داده‌های شما با استانداردهای بین‌المللی محافظت می‌شوند.' },
  { number: '02', title: 'عملکرد بالا', description: '۹۹٫۹٪ آپتایم تضمین شده. پلتفرم‌های ما برای عملکرد بهینه و در دسترس بودن دائمی طراحی شده‌اند.' },
  { number: '03', title: 'پشتیبانی حرفه‌ای', description: 'تیم پشتیبانی ۲۴/۷ آماده کمک به شماست. بیش از ۱۰٬۰۰۰ کاربر فعال از خدمات ما استفاده می‌کنند.' },
  { number: '04', title: 'مقیاس‌پذیری', description: 'از ۱۰ تا ۱۰٬۰۰۰ کاربر، پلتفرم‌های ما با رشد کسب‌وکار شما مقیاس می‌شوند.' },
  { number: '05', title: 'راهکار یکپارچه', description: 'همه ابزارهای مورد نیاز در یک پلتفرم واحد. بدون نیاز به نرم‌افزارهای متعدد و پیچیده.' },
];

export function WhyTDHSection() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div style={{ marginBottom: 64 }}>
          <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', letterSpacing: '0.04em', display: 'block', marginBottom: 16 }}>
            ۰۴ — چرا TDH
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            پنج دلیل که سازمان‌های پیشرو ما را انتخاب می‌کنند.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: '1px solid var(--color-line)' }}>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="py-6 md:py-8"
              style={{
                paddingInline: 32,
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
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {reason.description}
              </p>
            </div>
          ))}
          <div
            className="flex items-center py-6 md:py-8"
            style={{
              paddingInline: 32,
              borderBlockStart: '1px solid var(--color-line)',
              borderInlineStart: 'none',
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
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
