const pillars = [
  { number: '01', tag: 'مسأله‌شناسی', title: 'اول درک، بعد راه‌حل', description: 'قبل از هر خط کد، وقت می‌ذاریم تا مسأله‌ی واقعی رو بفهمیم.' },
  { number: '02', tag: 'ساخت', title: 'چیزی که واقعاً نیاز دارید', description: 'نه نرم‌افزار برای نشون دادن — چیزی که دقیقاً حل مسأله می‌کنه.' },
  { number: '03', tag: 'همراهی', title: 'کنارتون در طول مسیر', description: 'پروژه تموم میشه ولی ما نمی‌ریم. همراهتون هستیم.' },
];

export function PillarsSection() {
  return (
    <section className="py-20 px-4 md:py-24 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1000px] mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)' }}>
            اینجوری <span style={{ color: 'var(--color-accent)' }}>شریک</span> تجاریتون میشیم.
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
              <div className="mono" style={{ fontSize: 40, fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1 }}>
                {pillar.number}
              </div>
              <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginTop: 12, marginBottom: 12 }}>
                / {pillar.tag}
              </span>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
