import { solutions } from '@/lib/solutions';

export function SolutionsContent() {
  return (
    <main>
      <section
        className="py-16 px-4 md:py-20 md:px-6"
        style={{ borderBottom: '1px solid var(--color-line)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
            خدمات ما
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
            اول مسأله را می‌فهمیم، بعد راه‌حلی می‌سازیم.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:py-20 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <a
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '20px 24px',
                    border: '1px solid var(--color-line)',
                    borderRadius: 8,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-line)';
                  }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: 'var(--color-bg-soft)',
                    color: 'var(--color-accent)',
                  }}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, fontFamily: 'var(--font-sans)' }}>
                      {sol.title}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--color-fg-muted)', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                      {sol.shortText}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
