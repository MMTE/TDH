import type { Solution } from '@/lib/solutions';
import { PhotoPlaceholder } from '@/components/shared/PhotoPlaceholder';
import { CTABlock } from '@/components/shared/CTABlock';

const solutionMeta: Record<string, { num: string; accent: string; tag: string }> = {
  'cloud-infrastructure-hosting': { num: '01', accent: 'و هاستینگ', tag: 'CLOUD' },
  'custom-software-development': { num: '02', accent: 'سفارشی', tag: 'SOFTWARE' },
  'devops-cicd': { num: '03', accent: 'و CI/CD', tag: 'DEVOPS' },
  'api-development-integration': { num: '04', accent: 'و یکپارچه‌سازی', tag: 'API' },
  'technical-consulting': { num: '05', accent: 'فنی', tag: 'CONSULTING' },
};

interface SolutionDetailContentProps {
  solution: Solution;
}

export function SolutionDetailContent({ solution: sol }: SolutionDetailContentProps) {
  const meta = solutionMeta[sol.slug] || { num: '01', accent: '', tag: 'SOLUTION' };

  const accentIndex = sol.title.indexOf(meta.accent);
  let titleBefore = sol.title;
  let accentWord = meta.accent;
  let titleAfter = '';
  if (accentIndex >= 0) {
    titleBefore = sol.title.slice(0, accentIndex);
    titleAfter = sol.title.slice(accentIndex + accentWord.length);
  }

  return (
    <main>
      <section
        style={{
          padding: '80px 40px',
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <span style={{ fontSize: 14, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 24 }}>
            خانه / <a href="/solutions" style={{ color: 'var(--color-fg-subtle)', textDecoration: 'none' }}>راهکارها</a> / {sol.title}
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 24 }}>
                {titleBefore}
                <span style={{ color: 'var(--color-accent)' }}>
                  {accentWord}
                </span>
                {titleAfter}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', marginBottom: 40, maxWidth: 600 }}>
                {sol.fullText}
              </p>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                درخواست مشاوره ←
              </a>
            </div>
            <div>
              <PhotoPlaceholder label="SOLUTION VISUAL" aspect="4/5" caption={sol.tagline} />
            </div>
          </div>
        </div>
      </section>

      {sol.problemsSolved && sol.problemsSolved.length > 0 && (
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 40px', borderBottom: '1px solid var(--color-line)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 800, marginBottom: 48 }}>
              مشکلاتی که حل می‌کنیم
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {sol.problemsSolved.map((problem, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: 14,
                      color: 'var(--color-accent)',
                      minWidth: 28,
                      paddingTop: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg)' }}>
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {sol.features && sol.features.length > 0 && (
        <section style={{ padding: '80px 40px', borderBottom: '1px solid var(--color-line)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 800, marginBottom: 48 }}>
              ویژگی‌ها و قابلیت‌ها
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sol.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: 13,
                      color: 'var(--color-accent)',
                      minWidth: 24,
                      paddingTop: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-fg)' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {sol.technologies && sol.technologies.length > 0 && (
        <section style={{ padding: '80px 40px', borderBottom: '1px solid var(--color-line)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 800, marginBottom: 48 }}>
              تکنولوژی‌ها
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {sol.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mono"
                  style={{
                    padding: '8px 16px',
                    border: '1px solid var(--color-line)',
                    borderRadius: 6,
                    fontSize: 13,
                    color: 'var(--color-fg-muted)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock heading="بیایید درباره راهکار شما صحبت کنیم." accentWord="راهکار شما" />
    </main>
  );
}
