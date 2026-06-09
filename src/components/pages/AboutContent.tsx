import { CTABlock } from '@/components/shared/CTABlock';

const s = {
  section: {
    fontFamily: 'var(--font-sans)',
    color: 'var(--color-fg)',
    boxSizing: 'border-box' as const,
  },
  mono: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--color-fg-muted)',
  },
  accent: {
    color: 'var(--color-accent)',
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 14px',
    border: '1px solid var(--color-line)',
    borderRadius: 6,
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    color: 'var(--color-fg-muted)',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'var(--color-accent)',
    flexShrink: 0,
  },
};

const values = [
  {
    num: '01',
    title: 'کیفیت',
    desc: 'هیچ نسخه‌ای بدون آزمون و بازبینی کافی منتشر نمی‌شود. کیفیت برای ما قابل مذاکره نیست.',
  },
  {
    num: '02',
    title: 'شفافیت',
    desc: 'از قیمت تا روند توسعه، همه‌چیز باید روشن باشد. هزینه پنهان جایی در همکاری ما ندارد.',
  },
  {
    num: '03',
    title: 'همراهی',
    desc: 'تحویل نقطه پایان نیست؛ شروع مرحله‌ای است که باید کنار شما بمانیم.',
  },
  {
    num: '04',
    title: 'عمل‌گرایی',
    desc: 'تکنولوژی وقتی ارزش دارد که مسأله‌ای را حل کند. از تکنولوژی برای جلوه استفاده نمی‌کنیم.',
  },
];


export function AboutContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-16 md:px-10"
        style={{
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
          ...s.section,
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
              marginBottom: 32,
              textAlign: 'center',
            }}
          >
            خلاقیت در خلق{' '}
            <span style={{ color: 'var(--color-accent)' }}>
              نرم‌افزار
            </span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            ما تیم TDH هستیم. نرم‌افزار می‌سازیم نه برای نمایش، بلکه برای حل مشکلات واقعی.
          </p>
        </div>
      </section>

      <section
        className="py-16 px-4 md:py-24 md:px-10"
        style={{
          background: 'var(--color-bg-soft)',
          ...s.section,
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-fg)',
              textAlign: 'center',
              marginBottom: 64,
            }}
          >
            چهار اصل که زیربنای هر تصمیم ماست.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="p-6 md:p-10"
                style={{
                  borderLeft:
                    i < values.length - 1 ? '1px solid var(--color-line)' : 'none',
                }}
              >
                <span
                  className="mono text-4xl"
                  style={{
                    fontWeight: 900,
                    color: 'var(--color-accent)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: 16,
                    fontSize: 'clamp(36px, 3vw, 48px)',
                  }}
                >
                  {v.num}
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: 12,
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

      <CTABlock
        heading="می‌خواهید بخشی از این مسیر باشید؟"
        accentWord="مسیر"
        subtext="چه مشتری باشید چه همکار، آماده گفت‌وگو هستیم."
      />
    </div>
  );
}
