import type { Product } from '@/lib/products';
import { getProductBySlug } from '@/lib/products';
import { MockDashboard } from '@/components/shared/MockDashboard';
import { CTABlock } from '@/components/shared/CTABlock';

const slugToVariant: Record<string, 'suite' | 'data' | 'workflow'> = {
  'business-suite': 'suite',
  'data-platform': 'data',
  'workflow': 'workflow',
};

const slugToNum: Record<string, string> = {
  'business-suite': '01',
  'data-platform': '02',
  'workflow': '03',
};

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
  sectionHeader: {
    maxWidth: 1440,
    margin: '0 auto',
    padding: '60px 40px 40px',
  },
  sectionGrid: {
    maxWidth: 1440,
    margin: '0 auto',
    padding: '0 40px 60px',
  },
};

interface ProductDetailContentProps {
  product: Product;
}

export function ProductDetailContent({ product: prod }: ProductDetailContentProps) {
  const variant = slugToVariant[prod.slug] || 'suite';
  const num = slugToNum[prod.slug] || '01';

  const relatedProducts = (prod.relatedProducts || [])
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);

  const totalFeatures = prod.features.length;
  const totalProcess = (prod.process || []).length;
  const totalTech = (prod.technologies || []).length;

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <PdHero product={prod} variant={variant} num={num} totalProcess={totalProcess} totalTech={totalTech} />

      <PdProblems product={prod} />

      <PdFeatures product={prod} total={totalFeatures} />

      <PdProcess product={prod} />

      <PdTech product={prod} />

      <PdRelated relatedProducts={relatedProducts} />

      <CTABlock heading="۱۴ روز رایگان دمو بگیرید." accentWord="۱۴ روز" />
    </div>
  );
}

function PdHero({
  product: prod,
  variant,
  num,
  totalProcess,
  totalTech,
}: {
  product: Product;
  variant: 'suite' | 'data' | 'workflow';
  num: string;
  totalProcess: number;
  totalTech: number;
}) {
  return (
    <section
      style={{
        padding: '60px 40px 80px',
        borderBottom: '1px solid var(--color-line)',
        position: 'relative',
        ...s.section,
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <a
          href="/products"
          className="mono"
          style={{ fontSize: 13, color: 'var(--color-fg-muted)', textDecoration: 'none' }}
        >
          خانه / محصولات / {prod.name}
        </a>

        <div style={{ ...s.chip, marginTop: 24, marginBottom: 32 }}>
          <span style={s.dot} />
          PROD·{num} · {prod.tagline}
        </div>

        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
            color: 'var(--color-fg)',
            marginBottom: 20,
          }}
        >
          {prod.name}{' '}
          <span
            style={{
              textDecoration: 'underline',
              textUnderlineOffset: '0.12em',
              textDecorationThickness: '0.06em',
              textDecorationColor: 'var(--color-accent)',
            }}
          >
            TDH
          </span>
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: 'var(--color-fg-muted)',
            maxWidth: 640,
            marginBottom: 32,
          }}
        >
          {prod.fullDescription}
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
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
            {prod.primaryCta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--color-fg)',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              border: '1px solid var(--color-line-strong)',
            }}
          >
            {prod.secondaryCta}
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            borderTop: '1px solid var(--color-line)',
            paddingTop: 24,
            marginBottom: 48,
            maxWidth: 600,
          }}
        >
          <div>
            <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 4 }}>
              شروع از
            </span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-fg)' }}>{prod.pricing}</span>
          </div>
          <div>
            <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 4 }}>
              مراحل پیاده‌سازی
            </span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-fg)' }}>{totalProcess} مرحله</span>
          </div>
          <div>
            <span className="mono" style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 4 }}>
              تکنولوژی‌ها
            </span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-fg)' }}>{totalTech} فناوری</span>
          </div>
        </div>

        <div
          style={{
            border: '1px solid var(--color-line)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-line)',
              background: 'var(--color-bg-soft)',
            }}
          >
            <span style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </span>
            <span
              className="mono"
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--color-fg-muted)',
                background: 'var(--color-bg)',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid var(--color-line)',
              }}
            >
              app.tdh.ir/{prod.slug}
            </span>
          </div>
          <div style={{ background: 'var(--color-bg-soft)', padding: 16 }}>
            <MockDashboard variant={variant} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PdProblems({ product: prod }: { product: Product }) {
  return (
    <section style={{ background: 'var(--color-bg-soft)', ...s.section }}>
      <div style={s.sectionHeader}>
        <span className="mono" style={{ ...s.mono, display: 'block', marginBottom: 16 }}>
          REF · PROBLEMS
        </span>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--color-fg)',
          }}
        >
          مشکلاتی که حل می‌کنیم
        </h2>
      </div>
      <div style={{ ...s.sectionGrid, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {prod.problemsSolved.map((problem, i) => (
          <div
            key={i}
            style={{
              padding: 24,
              border: '1px solid var(--color-line)',
              borderRadius: 8,
              background: 'var(--color-bg)',
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 13, color: 'var(--color-accent)', display: 'block', marginBottom: 12 }}
            >
              0{i + 1}
            </span>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-fg)' }}>{problem}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PdFeatures({ product: prod, total }: { product: Product; total: number }) {
  return (
    <section style={{ ...s.section }}>
      <div style={s.sectionHeader}>
        <span className="mono" style={{ ...s.mono, display: 'block', marginBottom: 16 }}>
          REF · FEATURES
        </span>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--color-fg)',
          }}
        >
          ویژگی‌ها و قابلیت‌ها
        </h2>
      </div>
      <div style={{ ...s.sectionGrid, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {prod.features.map((feature, i) => (
          <div
            key={i}
            style={{
              padding: 20,
              border: '1px solid var(--color-line)',
              borderRadius: 8,
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 12, color: 'var(--color-fg-subtle)', display: 'block', marginBottom: 8 }}
            >
              0{i + 1} / 0{total}
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-fg)' }}>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PdProcess({ product: prod }: { product: Product }) {
  const steps = prod.process || [];
  return (
    <section style={{ background: 'var(--color-bg-soft)', ...s.section }}>
      <div style={s.sectionHeader}>
        <span className="mono" style={{ ...s.mono, display: 'block', marginBottom: 16 }}>
          REF · PROCESS
        </span>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--color-fg)',
          }}
        >
          فرآیند پیاده‌سازی
        </h2>
      </div>
      <div style={{ ...s.sectionGrid }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            position: 'relative',
            overflowX: 'auto',
            paddingBottom: 16,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 120,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '2px solid var(--color-accent)',
                  background: 'var(--color-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                }}
              >
                {i + 1}
              </div>
              <span style={{ fontSize: 13, color: 'var(--color-fg-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                {step}
              </span>
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 22,
                    left: '50%',
                    width: '100%',
                    height: 2,
                    background: 'var(--color-line)',
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PdTech({ product: prod }: { product: Product }) {
  const techs = prod.technologies || [];
  return (
    <section style={{ ...s.section }}>
      <div style={s.sectionHeader}>
        <span className="mono" style={{ ...s.mono, display: 'block', marginBottom: 16 }}>
          REF · TECH
        </span>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--color-fg)',
          }}
        >
          تکنولوژی‌ها
        </h2>
      </div>
      <div style={{ ...s.sectionGrid, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {techs.map((tech, i) => (
          <span
            key={i}
            className="mono"
            style={{
              padding: '8px 16px',
              border: '1px solid var(--color-line)',
              borderRadius: 6,
              fontSize: 13,
              color: 'var(--color-fg)',
              background: 'var(--color-bg)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

function PdRelated({ relatedProducts }: { relatedProducts: Product[] }) {
  return (
    <section
      style={{
        background: 'var(--color-bg-soft)',
        borderTop: '1px solid var(--color-line)',
        ...s.section,
      }}
    >
      <div style={s.sectionHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--color-fg)',
            }}
          >
            محصولات مرتبط
          </h2>
          <a
            href="/products"
            className="mono"
            style={{ fontSize: 14, color: 'var(--color-accent)', textDecoration: 'none' }}
          >
            همه محصولات ←
          </a>
        </div>
      </div>
      <div style={{ ...s.sectionGrid, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
        {relatedProducts.map((rp) => {
          const v = slugToVariant[rp.slug] || 'suite';
          return (
            <a
              key={rp.slug}
              href={`/products/${rp.slug}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid var(--color-line)',
                borderRadius: 10,
                overflow: 'hidden',
                background: 'var(--color-bg)',
              }}
            >
              <div style={{ padding: 16, borderBottom: '1px solid var(--color-line)', background: 'var(--color-bg-soft)' }}>
                <MockDashboard variant={v} />
              </div>
              <div style={{ padding: 20 }}>
                <span
                  className="mono"
                  style={{ fontSize: 12, color: 'var(--color-fg-muted)', display: 'block', marginBottom: 8 }}
                >
                  {rp.tagline}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 8 }}>
                  {rp.name}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-fg-muted)', marginBottom: 12 }}>
                  {rp.shortDescription}
                </p>
                <span
                  className="mono"
                  style={{ fontSize: 13, color: 'var(--color-accent)' }}
                >
                  {rp.pricing}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
