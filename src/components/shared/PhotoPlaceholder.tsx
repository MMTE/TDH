interface PhotoPlaceholderProps {
  label?: string;
  aspect?: string;
  caption?: string;
}

export function PhotoPlaceholder({ label = 'PHOTO', aspect = '16/10', caption = '' }: PhotoPlaceholderProps) {
  const patternId = `stripes-${label}`;

  return (
    <figure style={{ position: 'relative', width: '100%', aspectRatio: aspect, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <pattern id={patternId} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--color-line)" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="800" height="500" fill="var(--color-bg-soft)" />
        <rect width="800" height="500" fill={`url(#${patternId})`} opacity="0.4" />
        {/* Corner accents */}
        <line x1="0" y1="0" x2="60" y2="0" stroke="var(--color-accent)" strokeWidth="2" />
        <line x1="0" y1="0" x2="0" y2="60" stroke="var(--color-accent)" strokeWidth="2" />
        <line x1="800" y1="500" x2="740" y2="500" stroke="var(--color-accent)" strokeWidth="2" />
        <line x1="800" y1="500" x2="800" y2="440" stroke="var(--color-accent)" strokeWidth="2" />
        {/* Center icon - camera */}
        <rect x="360" y="210" width="80" height="60" rx="8" fill="none" stroke="var(--color-fg-muted)" strokeWidth="2" />
        <circle cx="400" cy="240" r="16" fill="none" stroke="var(--color-fg-muted)" strokeWidth="2" />
        <rect x="382" y="204" width="36" height="12" rx="4" fill="none" stroke="var(--color-fg-muted)" strokeWidth="2" />
        {/* Label */}
        <text
          x="400"
          y="320"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--color-fg-subtle)"
          fontSize="14"
          fontFamily="var(--font-mono)"
          letterSpacing="0.15em"
        >
          {label}
        </text>
      </svg>
      {caption && (
        <figcaption
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 16px',
            background: 'linear-gradient(transparent, var(--color-bg))',
            color: 'var(--color-fg-muted)',
            fontSize: 13,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
