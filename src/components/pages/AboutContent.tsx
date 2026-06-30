import { CTABlock } from '@/components/shared/CTABlock';

const values = [
  { title: 'کیفیت', desc: 'هیچ نسخه‌ای بدون آزمون منتشر نمی‌شود.' },
  { title: 'شفافیت', desc: 'هزینه پنهان جایی در همکاری ما ندارد.' },
  { title: 'همراهی', desc: 'تحویل نقطه پایان نیست؛ شروع مرحله‌ای است.' },
  { title: 'عمل‌گرایی', desc: 'تکنولوژی وقتی ارزش دارد که مسأله‌ای را حل کند.' },
];

export function AboutContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-20 md:px-6"
        style={{ borderBottom: '1px solid var(--color-line)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-fg)',
              marginBottom: 16,
            }}
          >
            خلاقیت در خلق{' '}
            <span style={{ color: 'var(--color-accent)' }}>نرم‌افزار</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-fg-muted)' }}>
            ما تیم TDH هستیم. نرم‌افزار می‌سازیم نه برای نمایش، بلکه برای حل مشکلات واقعی.
          </p>
        </div>
      </section>

      <section
        className="py-16 px-4 md:py-20 md:px-6"
        style={{ borderBottom: '1px solid var(--color-line)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-fg)',
              marginBottom: 48,
            }}
          >
            چهار اصل زیربنای هر تصمیم ماست.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: 6,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--color-fg-muted)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
