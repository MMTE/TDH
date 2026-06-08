const reasons = [
  { number: '01', title: 'داده‌ها در ایران می‌مانند', description: 'زیرساخت داخلی، رمزنگاری، کنترل دسترسی و مراقبت امنیتی دوره‌ای؛ تا نگرانی جابه‌جایی و نگهداری داده کمتر شود.' },
  { number: '02', title: 'پایداری برای ما اصل است', description: 'ابزارها را برای استفاده روزانه ساخته‌ایم؛ با پشتیبان‌گیری، مانیتورینگ و طراحی‌ای که قرار است زیر فشار هم دوام بیاورد.' },
  { number: '03', title: 'پشتیبانی واقعی می‌دهیم', description: 'پشت محصول می‌مانیم. تلفن، ایمیل و تیکت از شنبه تا چهارشنبه فعال است و موضوعات بحرانی با اولویت پیگیری می‌شوند.' },
  { number: '04', title: 'با رشد شما جلو می‌آییم', description: 'از شروع کوچک تا استفاده جدی‌تر، معماری و همراهی ما طوری است که مجبور نباشید مدام از نو شروع کنید.' },
  { number: '05', title: 'اول خودمان به ابزارها اعتماد کردیم', description: 'دستیار هوشمند فارسی ما هر روز هزاران مکالمه فارسی را پردازش می‌کند. ServerGuard برای مراقبت از سرورهای خودمان ساخته شد و Watch Tower از نیاز واقعی به اعلان‌رسانی یکپارچه آمد.' },
];

export function WhyTDHSection() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            چرا تیم‌ها
            <br />
            TDH را انتخاب می‌کنند؟
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
              بیشتر درباره ما بدانید
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
