const reasons = [
  { number: '01', title: 'داده‌ها تو ایران می‌مونن', description: 'سرورهاشون تو داخل ایرانه. رمزنگاری پیشرفته، کنترل دسترسی دقیق و ممیزی امنیتی دوره‌ای. نگرانی درباره جابجایی داده ندارید.' },
  { number: '02', title: 'پلتفرم همیشه بالاست', description: '۹۹٫۹٪ آپتایم تضمین‌شده با پشتیبان‌گیری خودکار. وقتی پلتفرم‌ها با این سطح دسترس‌پذیری طراحی بشن، خیالتون راحته.' },
  { number: '03', title: 'یقه‌مون رو می‌گیرید', description: 'پشتیبانی واقعی، نه یه اتوماسیون تلفنی. تلفن، ایمیل و تیکت — از شنبه تا چهارشنبه. مشکلات بحرانی ظرف ۴ ساعت.' },
  { number: '04', title: 'با شما رشد می‌کنیم', description: 'از ۱۰ تا ۱۰٬۰۰۰ کاربر — بدون مهاجرت و بدون تغییر زیرساخت. هر اندازه که بشید، جاتون هست.' },
  { number: '05', title: 'ابزارهایی که خودمون ازشون استفاده می‌کنیم', description: 'chatgpt.ir هر روز هزاران مکالمه فارسی پردازش می‌کنه. ServerGuard سرورها رو قبل از کرش نجات می‌ده. Watch Tower هر روز هزاران اعلان می‌فرسته. اگه خودمون بهش اعتماد نداشتیم، نمی‌فروختیم.' },
];

export function WhyTDHSection() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            چرا توسعه‌دهندگان
            <br />
            TDH رو انتخاب می‌کنن؟
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
              بیشتر درباره‌مون بدون
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