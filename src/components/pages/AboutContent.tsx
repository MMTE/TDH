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
    desc: 'هیچ نسخه‌ای را بدون تست کامل ارائه نمی‌دهیم. کیفیت قابل مذاکره نیست.',
  },
  {
    num: '02',
    title: 'شفافیت',
    desc: 'از قیمت‌گذاری تا روند توسعه، همه چیز شفاف است. هیچ هزینه‌ی پنهانی.',
  },
  {
    num: '03',
    title: 'همراهی',
    desc: 'بعد از تحویل، رابطه شروع می‌شود. ما در طول مسیر در کنار شما هستیم.',
  },
  {
    num: '04',
    title: 'نوآوری',
    desc: 'از تکنولوژی‌های روز استفاده می‌کنیم، اما فقط زمانی که ارزش واقعی ایجاد کنند.',
  },
];

const timeline = [
  { year: '1395', title: 'تأسیس', desc: 'TDH با تیمی ۴ نفره در تهران آغاز به کار می‌کند.' },
  { year: '1397', title: 'اولین مشتری سازمانی', desc: 'استقرار موفق ERP برای یک هلدینگ ۲۰۰ نفره.' },
  { year: '1399', title: 'پلتفرم داده', desc: 'معرفی پلتفرم BI به‌عنوان دومین محصول ما.' },
  { year: '1401', title: '+۱۰\u200Cهـ کاربر', desc: 'گذر از مرز ۱۰٬۰۰۰ کاربر فعال روزانه.' },
  { year: '1403', title: 'گردش‌کار', desc: 'راه‌اندازی پلتفرم اتوماسیون فرآیند.' },
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
        style={{
          padding: '80px 40px',
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
          ...s.section,
        }}
      >
        <span className="mono" style={{ position: 'absolute', top: 24, left: 40, ...s.mono }}>
          REF · 03.ABOUT
        </span>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ ...s.chip, marginBottom: 32 }}>
            <span style={s.dot} />
            § ۰۳ — درباره ما
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px, 7vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
              marginBottom: 48,
            }}
          >
            از سال ۱۳۹۵{' '}
            <span
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.12em',
                textDecorationThickness: '0.06em',
                textDecorationColor: 'var(--color-accent)',
              }}
            >
              در حال ساختن
            </span>{' '}
            آینده‌ی نرم‌افزار سازمانی.
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
            }}
          >
            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--color-fg-muted)' }}>
              تکین داده هوشمند (TDH) از سال ۱۳۹۵ با هدف ارائه راهکارهای نرم‌افزاری سازمانی
              فعالیت خود را آغاز کرده است. ما باور داریم که فناوری باید در خدمت کسب‌وکار باشد،
              نه برعکس.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--color-fg-muted)' }}>
              امروز، با بیش از ۹ سال تجربه و صدها پروژه موفق، به سازمان‌های ایرانی در مسیر
              تحول دیجیتال خدمت می‌رسانیم. سه پلتفرم اصلی ما — مجموعه کسب‌وکار، پلتفرم داده
              و گردش‌کار — زیرساخت یکپارچه‌ای برای رشد سازمانی فراهم می‌کنند.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--color-bg-soft)',
          padding: '80px 40px',
          ...s.section,
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 40,
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}>
              § ۰۱ — اصول ما
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-fg)',
              }}
            >
              چهار اصلی که هر تصمیم را راهبری می‌کنند.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.num}
                style={{
                  padding: '32px 24px',
                  borderLeft:
                    i < values.length - 1 ? '1px solid var(--color-line)' : 'none',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 56,
                    fontWeight: 900,
                    color: 'var(--color-accent)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: 16,
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
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-fg-muted)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '80px 40px',
          borderBottom: '1px solid var(--color-line)',
          ...s.section,
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 40,
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}>
              § ۰۲ — مسیر ما
            </span>
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
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr 2fr auto',
                  gap: '32px 48px',
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
                  className="mono"
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: 'var(--color-fg)',
                    lineHeight: 1,
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
        style={{
          background: 'var(--color-bg-soft)',
          padding: '80px 40px',
          ...s.section,
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 40,
              alignItems: 'baseline',
              marginBottom: 64,
            }}
          >
            <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}>
              § ۰۳ — تیم
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-fg)',
              }}
            >
              افرادی که این کار را ممکن می‌کنند.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
            }}
          >
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
        heading="می‌خواهید بخشی از این داستان شوید؟"
        accentWord="بخشی"
        subtext="چه به‌عنوان مشتری، چه به‌عنوان همکار — همیشه آماده‌ی گفتگو هستیم."
      />
    </div>
  );
}
