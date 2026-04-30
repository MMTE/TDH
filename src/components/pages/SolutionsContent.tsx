import { solutions } from '@/lib/solutions';

export function SolutionsContent() {
  return (
    <main>
      <section
        style={{
          padding: '80px 40px',
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
        }}
      >
        <span
          className="mono"
          style={{
            position: 'absolute',
            top: 24,
            insetInlineStart: 24,
            fontSize: 12,
            color: 'var(--color-fg-subtle)',
          }}
        >
          REF · 02.SOLUTIONS
        </span>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, background: 'var(--color-accent)', display: 'inline-block' }} />
            <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-muted)' }}>
              § ۰۲ — راهکارهای فنی
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 112px)', fontWeight: 900, lineHeight: 0.98, letterSpacing: '-0.025em', marginBottom: 24 }}>
            فراتر از محصول.{' '}
            <span style={{ color: 'var(--color-accent)' }}>
              راهکار
            </span>
            .
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--color-fg-muted)', maxWidth: 640 }}>
            از زیرساخت ابری و هاستینگ تا توسعه نرم‌افزار سفارشی، DevOps، یکپارچه‌سازی API و مشاوره فنی — ما تمام نیازهای فنی کسب‌وکار شما را پوشش می‌دهیم.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid var(--color-line)' }}>
        {solutions.map((sol, i) => (
          <a
            key={sol.slug}
            href={`/solutions/${sol.slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto auto',
              gap: 48,
              alignItems: 'center',
              padding: '48px 40px',
              textDecoration: 'none',
              color: 'inherit',
              borderBottom: i < solutions.length - 1 ? '1px solid var(--color-line)' : 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-soft)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 'clamp(40px, 3vw, 56px)',
                fontWeight: 900,
                fontFamily: 'JetBrains Mono, var(--font-mono)',
                color: 'var(--color-accent)',
                lineHeight: 1,
                direction: 'ltr',
              }}
            >
              0{i + 1}
            </span>
            <div>
              <span
                className="mono"
                style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 8 }}
              >
                {sol.tagline}
              </span>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
                {sol.title}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
                {sol.shortText}
              </p>
            </div>
            <span
              className="mono hidden sm:block"
              style={{ fontSize: 14, color: 'var(--color-fg-subtle)', direction: 'ltr' }}
            >
              0{i + 1} / 05
            </span>
            <span style={{ fontSize: 24, color: 'var(--color-accent)', transition: 'transform 0.2s' }}>←</span>
          </a>
        ))}
      </section>
    </main>
  );
}
