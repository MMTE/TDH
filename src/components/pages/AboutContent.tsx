import { PhotoPlaceholder } from '@/components/shared/PhotoPlaceholder';
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

const timeline = [
  { year: '1395', title: 'شروع', desc: 'TDH با تیمی کوچک در تهران کار خود را شروع کرد.' },
  { year: '1397', title: 'chatgpt.ir', desc: 'اولین نسخه دستیار هوشمند فارسی راه افتاد؛ تجربه‌ای فارسی، بدون VPN و با اشتراک ریالی.' },
  { year: '1399', title: '+۱۰۰ مشتری', desc: 'از مرز ۱۰۰ مشتری گذشتیم و پشتیبانی مستقیم را بخشی جدی از کار نگه داشتیم.' },
  { year: '1401', title: '+۱۰٬۰۰۰ کاربر', desc: 'محصولات ما به استفاده روزانه هزاران کاربر رسیدند.' },
  { year: '1403', title: 'ServerGuard و Watch Tower', desc: 'ابزارهایی ساختیم که اول برای مراقبت از زیرساخت خودمان لازم داشتیم؛ بعد دیدیم همین نیاز برای تیم‌های دیگر هم جدی است.' },
];

const team = [
  { name: 'علی محمدی', role: 'مدیرعامل و بنیان‌گذار' },
  { name: 'سارا احمدی', role: 'مدیر فناوری' },
  { name: 'رضا کریمی', role: 'مدیر محصول' },
  { name: 'مریم رضایی', role: 'مدیر طراحی' },
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
              marginBottom: 48,
            }}
          >
            از سال ۱۳۹۵{' '}
            <span
              style={{ color: 'var(--color-accent)' }}
            >
              داریم می‌سازیم
            </span>{' '}
            ابزارهایی که واقعاً کار می‌کنند.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)' }}>
              TDH از سال ۱۳۹۵ نرم‌افزار می‌سازد؛ نه برای نمایش، برای اینکه کار کند. باور ما این است که تکنولوژی باید در خدمت کسب‌وکار باشد، نه برعکس.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)' }}>
              در این مسیر سه محصول ساختیم که هزاران نفر هر روز از آن‌ها استفاده می‌کنند: دستیار هوشمند فارسی، ServerGuard و Watch Tower. هر سه را اول برای نیاز خودمان ساختیم.
            </p>
          </div>
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
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10"
            style={{
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-fg)',
              }}
            >
              چهار اصل که زیربنای هر تصمیم ماست.
            </h2>
          </div>

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

      <section
        className="py-16 px-4 md:py-24 md:px-10"
        style={{
          borderBottom: '1px solid var(--color-line)',
          ...s.section,
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10"
            style={{
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-fg)',
              }}
            >
              ۹ سال. ۵ نقطه عطف.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr_auto] gap-4 md:gap-12"
                style={{
                  alignItems: 'center',
                  padding: '32px 0',
                  borderBottom:
                    i < timeline.length - 1
                      ? '1px solid var(--color-line)'
                      : 'none',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 14,
                    color: 'var(--color-fg-subtle)',
                    textAlign: 'center',
                    minWidth: 48,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="mono text-3xl"
                  style={{
                    fontWeight: 900,
                    color: 'var(--color-fg)',
                    lineHeight: 1,
                    fontSize: 'clamp(28px, 2.5vw, 40px)',
                  }}
                >
                  {t.year}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--color-fg)',
                      marginBottom: 8,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-fg-muted)' }}>
                    {t.desc}
                  </p>
                </div>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
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
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10"
            style={{
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-fg)',
              }}
            >
              آدم‌هایی که این کار را ممکن می‌کنند.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name}>
                <PhotoPlaceholder label={m.name} aspect="3/4" />
                <div style={{ marginTop: 16 }}>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: 'var(--color-fg)',
                      marginBottom: 4,
                    }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="mono"
                    style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}
                  >
                    {m.role}
                  </p>
                </div>
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
