const reasons = [
  { title: 'داده‌ها در ایران می‌مانند', description: 'زیرساخت داخلی، رمزنگاری و مراقبت امنیتی دوره‌ای.' },
  { title: 'پایداری برای ما اصل است', description: 'ابزارها را برای استفاده روزانه ساخته‌ایم.' },
  { title: 'پشتیبانی واقعی می‌دهیم', description: 'پشت محصول می‌مانیم — تلفن، ایمیل و تیکت.' },
];

export function WhyTDHSection() {
  return (
    <section className="py-20 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[800px] mx-auto" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)', marginBottom: 64 }}>
          چرا تیم‌ها TDH را انتخاب می‌کنند؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <div key={i}>
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
