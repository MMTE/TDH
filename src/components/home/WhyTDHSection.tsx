const reasons = [
  { number: '01', title: 'داده‌ها امن می‌مانند', description: 'حریم خصوصی کاربران برای ما اهمیت دارد — زیرساخت داخلی، رمزنگاری و مراقبت امنیتی دوره‌ای.' },
  { number: '02', title: 'پایداری برای ما اصل است', description: 'ابزارها را برای استفاده روزانه ساخته‌ایم؛ با پشتیبان‌گیری و مانیتورینگ که زیر فشار هم دوام بیاورد.' },
  { number: '03', title: 'پشتیبانی واقعی می‌دهیم', description: 'پشت محصول می‌مانیم. تلفن، ایمیل و تیکت فعال است و موضوعات بحرانی با اولویت پیگیری می‌شوند.' },
];

export function WhyTDHSection() {
  return (
    <section className="py-20 px-4 md:py-24 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1000px] mx-auto">
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            چرا تیم‌ها TDH را انتخاب می‌کنند؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--color-line)' }}>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="p-6 md:p-8"
              style={{
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              <span className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-accent)', display: 'block', marginBottom: 12 }}>
                {reason.number}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
