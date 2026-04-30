interface CTABlockProps {
  heading?: string;
  accentWord?: string;
  subtext?: string;
  phone?: string;
}

export function CTABlock({
  heading = 'بیایید با هم چیز بزرگی بسازیم.',
  accentWord = 'چیز بزرگی',
  subtext = 'ظرف ۲۴ ساعت کاری پاسخ می‌دهیم. جلسه نخست رایگان است و با تحلیل وضعیت فعلی سازمان شما همراه خواهد بود.',
  phone = '۰۲۱-۲۸۴۲۸۰۸۴',
}: CTABlockProps) {
  const headingParts = heading.split(accentWord);

  return (
    <section
      className="py-16 px-4 md:py-28 md:px-10"
      style={{
        position: 'relative',
        background: 'var(--color-accent)',
        color: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      <div
        className="max-w-[1400px] mx-auto"
        style={{
          position: 'relative',
        }}
      >
        {/* Mono refs - positioned absolutely */}
        <span
          className="mono hidden sm:block"
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            fontSize: 12,
            opacity: 0.4,
            color: 'var(--color-bg)',
          }}
        >
          CTA-001
        </span>
        <span
          className="mono hidden sm:block"
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            fontSize: 12,
            opacity: 0.4,
            color: 'var(--color-bg)',
          }}
        >
          v2.0
        </span>

        {/* Content */}
        <div style={{ maxWidth: 800 }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 7vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              marginBottom: 24,
              color: 'var(--color-bg)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {headingParts.map((part, i) =>
              i < headingParts.length - 1 ? (
                <span key={i}>
                  {part}
                  <span
                    style={{
                      textDecoration: 'underline',
                      textUnderlineOffset: '0.12em',
                      textDecorationThickness: '0.06em',
                      textDecorationColor: 'var(--color-bg)',
                    }}
                  >
                    {accentWord}
                  </span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              opacity: 0.85,
              marginBottom: 48,
              maxWidth: 520,
              color: 'var(--color-bg)',
            }}
          >
            {subtext}
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                background: 'var(--color-bg)',
                color: 'var(--color-accent)',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
              }}
            >
              مشاوره رایگان
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`tel:${phone}`}
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                background: 'transparent',
                color: 'var(--color-bg)',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                border: '1px solid var(--color-bg)',
                opacity: 0.8,
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                direction: 'ltr',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
