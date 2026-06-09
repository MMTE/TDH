import { solutions } from '@/lib/solutions';

export function SolutionsContent() {
  return (
    <main>
      <section
        className="py-16 px-4 md:py-24 md:px-10"
        style={{ borderBottom: '1px solid var(--color-line)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16, fontFamily: 'var(--font-sans)' }}>
              خدمات ما
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 720, margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
              راهکارهایی برای ساخت، رشد و نگهداری نرم‌افزار.
              از زیرساخت و DevOps تا توسعه سفارشی و API؛ اول مسأله را می‌فهمیم، بعد راه‌حلی می‌سازیم که به کار کسب‌وکار شما بیاید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <a
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-line)',
                    borderRadius: 8,
                    padding: '32px 28px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(196, 137, 74, 0.10)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-line)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    background: 'var(--color-bg-soft)',
                    color: 'var(--color-accent)',
                  }}>
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
<h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
                    {sol.title}
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--color-fg-muted)', lineHeight: 1.65, fontFamily: 'var(--font-sans)', marginBottom: 24, flex: 1 }}>
                    {sol.shortText}
                  </p>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)' }}>
                    اطلاعات بیشتر
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
