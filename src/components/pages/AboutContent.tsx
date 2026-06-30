import { CTABlock } from '@/components/shared/CTABlock';

const values = [
  { num: '01', title: 'کیفیت', desc: 'هیچ نسخه‌ای بدون آزمون و بازبینی کافی منتشر نمی‌شود. کیفیت برای ما قابل مذاکره نیست.' },
  { num: '02', title: 'شفافیت', desc: 'از قیمت تا روند توسعه، همه‌چیز باید روشن باشد. هزینه پنهان جایی در همکاری ما ندارد.' },
  { num: '03', title: 'همراهی', desc: 'تحویل نقطه پایان نیست؛ شروع مرحله‌ای است که باید کنار شما بمانیم.' },
  { num: '04', title: 'عمل‌گرایی', desc: 'تکنولوژی وقتی ارزش دارد که مسأله‌ای را حل کند. از تکنولوژی برای جلوه استفاده نمی‌کنیم.' },
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
              marginBottom: 24,
              textAlign: 'center',
            }}
          >
            خلاقیت در خلق{' '}
            <span style={{ color: 'var(--color-accent)' }}>نرم‌افزار</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
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
              textAlign: 'center',
              marginBottom: 56,
            }}
          >
            چهار اصل که زیربنای هر تصمیم ماست.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="p-4 md:p-6"
                style={{
                  borderInlineEnd: i < values.length - 1 ? '1px solid var(--color-line)' : 'none',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontWeight: 900,
                    color: 'var(--color-accent)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: 12,
                    fontSize: 'clamp(28px, 2.5vw, 36px)',
                  }}
                >
                  {v.num}
                </span>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: 8,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-fg-muted)' }}>
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
