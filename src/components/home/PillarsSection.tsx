const pillars = [
  { title: 'اول درک، بعد راه‌حل', description: 'قبل از هر خط کد، مسأله‌ی واقعی رو می‌فهمیم.' },
  { title: 'ساخت چیزی که نیاز دارید', description: 'ساده، سریع، و متناسب با کسب‌وکار شما.' },
  { title: 'کنارتون در طول مسیر', description: 'پشتیبانی واقعی و همراهی بعد از تحویل.' },
];

export function PillarsSection() {
  return (
    <section className="py-20 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[800px] mx-auto" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)', marginBottom: 64 }}>
          ما خود را <span style={{ color: 'var(--color-accent)' }}>شریک تجاری</span> مشتریان می‌دانیم.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <div key={i}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
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
