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
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 800,
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
      </section>
    </main>
  );
}
