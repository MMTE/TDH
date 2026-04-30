interface MockDashboardProps {
  variant?: 'suite' | 'data' | 'workflow';
}

export function MockDashboard({ variant = 'suite' }: MockDashboardProps) {
  const p = {
    bg: 'var(--color-bg-soft)',
    panel: 'var(--color-bg-card)',
    line: 'var(--color-line)',
    text: 'var(--color-fg)',
    muted: 'var(--color-fg-muted)',
    accent: 'var(--color-accent)',
  };

  if (variant === 'data') {
    return (
      <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <clipPath id="dash-clip-data"><rect width="800" height="500" rx="12" /></clipPath>
        </defs>
        <g clipPath="url(#dash-clip-data)">
          <rect width="800" height="500" fill={p.bg} rx="12" />
          {/* Top bar */}
          <rect x="0" y="0" width="800" height="56" fill={p.panel} />
          <line x1="0" y1="56" x2="800" y2="56" stroke={p.line} />
          <rect x="24" y="18" width="100" height="20" rx="4" fill={p.muted} opacity="0.3" />
          <rect x="640" y="18" width="20" height="20" rx="10" fill={p.muted} opacity="0.2" />
          <rect x="672" y="18" width="20" height="20" rx="10" fill={p.muted} opacity="0.2" />
          <rect x="704" y="18" width="20" height="20" rx="10" fill={p.muted} opacity="0.2" />
          {/* Stat cards row */}
          <rect x="24" y="76" width="172" height="88" rx="8" fill={p.panel} />
          <rect x="40" y="92" width="60" height="10" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="40" y="116" width="100" height="24" rx="3" fill={p.text} opacity="0.7" />
          <rect x="40" y="148" width="40" height="6" rx="2" fill={p.accent} opacity="0.6" />
          <rect x="216" y="76" width="172" height="88" rx="8" fill={p.panel} />
          <rect x="232" y="92" width="50" height="10" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="232" y="116" width="90" height="24" rx="3" fill={p.text} opacity="0.7" />
          <rect x="232" y="148" width="32" height="6" rx="2" fill={p.accent} opacity="0.6" />
          <rect x="408" y="76" width="172" height="88" rx="8" fill={p.panel} />
          <rect x="424" y="92" width="70" height="10" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="424" y="116" width="110" height="24" rx="3" fill={p.text} opacity="0.7" />
          <rect x="424" y="148" width="48" height="6" rx="2" fill={p.accent} opacity="0.6" />
          <rect x="600" y="76" width="172" height="88" rx="8" fill={p.panel} />
          <rect x="616" y="92" width="55" height="10" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="616" y="116" width="95" height="24" rx="3" fill={p.text} opacity="0.7" />
          <rect x="616" y="148" width="36" height="6" rx="2" fill={p.accent} opacity="0.6" />
          {/* Bar chart */}
          <rect x="24" y="184" width="460" height="290" rx="8" fill={p.panel} />
          <rect x="40" y="200" width="80" height="10" rx="2" fill={p.muted} opacity="0.4" />
          {/* bars */}
          <rect x="56" y="340" width="32" height="110" rx="4" fill={p.accent} opacity="0.8" />
          <rect x="104" y="300" width="32" height="150" rx="4" fill={p.accent} opacity="0.6" />
          <rect x="152" y="260" width="32" height="190" rx="4" fill={p.accent} opacity="0.8" />
          <rect x="200" y="320" width="32" height="130" rx="4" fill={p.accent} opacity="0.6" />
          <rect x="248" y="280" width="32" height="170" rx="4" fill={p.accent} opacity="0.8" />
          <rect x="296" y="250" width="32" height="200" rx="4" fill={p.accent} />
          <rect x="344" y="290" width="32" height="160" rx="4" fill={p.accent} opacity="0.7" />
          <rect x="392" y="310" width="32" height="140" rx="4" fill={p.accent} opacity="0.5" />
          <rect x="440" y="330" width="32" height="120" rx="4" fill={p.accent} opacity="0.6" />
          {/* baseline */}
          <line x1="40" y1="452" x2="480" y2="452" stroke={p.line} />
          {/* Donut chart */}
          <rect x="500" y="184" width="276" height="140" rx="8" fill={p.panel} />
          <circle cx="580" cy="254" r="40" fill="none" stroke={p.accent} strokeWidth="12" opacity="0.8" />
          <circle cx="580" cy="254" r="40" fill="none" stroke={p.muted} strokeWidth="12" strokeDasharray="100 152" strokeDashoffset="75" opacity="0.3" />
          <rect x="636" y="230" width="60" height="8" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="636" y="246" width="80" height="8" rx="2" fill={p.accent} opacity="0.5" />
          <rect x="636" y="262" width="50" height="8" rx="2" fill={p.muted} opacity="0.3" />
          {/* Table */}
          <rect x="500" y="340" width="276" height="134" rx="8" fill={p.panel} />
          <rect x="516" y="356" width="60" height="10" rx="2" fill={p.muted} opacity="0.4" />
          {/* table rows */}
          <line x1="500" y1="376" x2="776" y2="376" stroke={p.line} />
          <rect x="516" y="388" width="100" height="8" rx="2" fill={p.muted} opacity="0.3" />
          <rect x="680" y="388" width="40" height="8" rx="2" fill={p.accent} opacity="0.5" />
          <line x1="500" y1="408" x2="776" y2="408" stroke={p.line} opacity="0.5" />
          <rect x="516" y="418" width="80" height="8" rx="2" fill={p.muted} opacity="0.3" />
          <rect x="680" y="418" width="50" height="8" rx="2" fill={p.accent} opacity="0.4" />
          <line x1="500" y1="438" x2="776" y2="438" stroke={p.line} opacity="0.5" />
          <rect x="516" y="448" width="110" height="8" rx="2" fill={p.muted} opacity="0.3" />
          <rect x="680" y="448" width="36" height="8" rx="2" fill={p.accent} opacity="0.5" />
        </g>
      </svg>
    );
  }

  if (variant === 'workflow') {
    return (
      <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <clipPath id="dash-clip-workflow"><rect width="800" height="500" rx="12" /></clipPath>
        </defs>
        <g clipPath="url(#dash-clip-workflow)">
          <rect width="800" height="500" fill={p.bg} rx="12" />
          {/* Connection lines */}
          <line x1="160" y1="140" x2="280" y2="140" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          <line x1="440" y1="140" x2="560" y2="140" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          <line x1="280" y1="200" x2="280" y2="300" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          <line x1="280" y1="360" x2="400" y2="360" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          <line x1="560" y1="200" x2="560" y2="300" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          <line x1="560" y1="360" x2="680" y2="360" stroke={p.line} strokeWidth="2" strokeDasharray="6 4" />
          {/* Arrow heads */}
          <polygon points="280,136 280,144 290,140" fill={p.line} />
          <polygon points="560,136 560,144 570,140" fill={p.line} />
          <polygon points="280,300 284,290 276,290" fill={p.line} />
          <polygon points="400,356 400,364 410,360" fill={p.line} />
          <polygon points="560,300 564,290 556,290" fill={p.line} />
          <polygon points="680,356 680,364 690,360" fill={p.line} />
          {/* Node 1 - Start */}
          <rect x="40" y="100" width="120" height="80" rx="10" fill={p.panel} stroke={p.accent} strokeWidth="2" />
          <rect x="60" y="124" width="60" height="8" rx="2" fill={p.muted} opacity="0.5" />
          <rect x="60" y="140" width="80" height="12" rx="3" fill={p.accent} opacity="0.7" />
          {/* Node 2 - Process */}
          <rect x="280" y="100" width="160" height="100" rx="10" fill={p.panel} stroke={p.line} />
          <rect x="300" y="120" width="70" height="8" rx="2" fill={p.muted} opacity="0.4" />
          <rect x="300" y="138" width="120" height="10" rx="2" fill={p.text} opacity="0.3" />
          <rect x="300" y="156" width="100" height="10" rx="2" fill={p.text} opacity="0.2" />
          <rect x="300" y="174" width="60" height="8" rx="2" fill={p.accent} opacity="0.4" />
          {/* Node 3 - Decision */}
          <rect x="560" y="100" width="140" height="100" rx="10" fill={p.panel} stroke={p.accent} strokeWidth="1.5" />
          <polygon points="630,130 660,150 630,170 600,150" fill={p.accent} opacity="0.2" stroke={p.accent} strokeWidth="1.5" />
          <rect x="596" y="120" width="68" height="8" rx="2" fill={p.muted} opacity="0.4" />
          {/* Node 4 - Action */}
          <rect x="280" y="300" width="120" height="80" rx="10" fill={p.panel} stroke={p.line} />
          <rect x="300" y="320" width="80" height="10" rx="2" fill={p.text} opacity="0.3" />
          <rect x="300" y="340" width="60" height="8" rx="2" fill={p.muted} opacity="0.3" />
          <rect x="300" y="358" width="40" height="12" rx="6" fill={p.accent} opacity="0.6" />
          {/* Node 5 - Action 2 */}
          <rect x="560" y="300" width="120" height="80" rx="10" fill={p.panel} stroke={p.line} />
          <rect x="580" y="320" width="70" height="10" rx="2" fill={p.text} opacity="0.3" />
          <rect x="580" y="340" width="50" height="8" rx="2" fill={p.muted} opacity="0.3" />
          <rect x="580" y="358" width="40" height="12" rx="6" fill={p.accent} opacity="0.6" />
          {/* Node 6 - End */}
          <rect x="680" y="320" width="80" height="60" rx="30" fill={p.accent} opacity="0.8" />
          <rect x="694" y="344" width="52" height="10" rx="2" fill={p.bg} opacity="0.8" />
          {/* Node 7 - Merge */}
          <rect x="400" y="320" width="80" height="60" rx="10" fill={p.panel} stroke={p.line} />
          <rect x="416" y="340" width="48" height="10" rx="2" fill={p.muted} opacity="0.4" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <clipPath id="dash-clip-suite"><rect width="800" height="500" rx="12" /></clipPath>
      </defs>
      <g clipPath="url(#dash-clip-suite)">
        <rect width="800" height="500" fill={p.bg} rx="12" />
        {/* Sidebar */}
        <rect x="0" y="0" width="180" height="500" fill={p.panel} />
        <line x1="180" y1="0" x2="180" y2="500" stroke={p.line} />
        {/* Sidebar logo */}
        <rect x="20" y="20" width="40" height="40" rx="8" fill={p.accent} opacity="0.8" />
        <rect x="72" y="30" width="80" height="12" rx="3" fill={p.muted} opacity="0.5" />
        <rect x="72" y="48" width="56" height="8" rx="2" fill={p.muted} opacity="0.3" />
        {/* Sidebar nav items */}
        {[120, 172, 224, 276].map((y, i) => (
          <rect key={i} x="12" y={y} width="156" height="36" rx="6" fill={i === 0 ? p.accent : 'transparent'} opacity={i === 0 ? 0.15 : 1} />
        ))}
        <rect x="28" y="132" width="80" height="10" rx="2" fill={p.accent} opacity="0.8" />
        <rect x="28" y="184" width="70" height="10" rx="2" fill={p.muted} opacity="0.4" />
        <rect x="28" y="236" width="90" height="10" rx="2" fill={p.muted} opacity="0.4" />
        <rect x="28" y="288" width="60" height="10" rx="2" fill={p.muted} opacity="0.4" />
        {/* Sidebar bottom section */}
        <rect x="12" y="420" width="156" height="64" rx="8" fill={p.accent} opacity="0.08" />
        <rect x="28" y="436" width="80" height="8" rx="2" fill={p.accent} opacity="0.5" />
        <rect x="28" y="452" width="60" height="6" rx="2" fill={p.muted} opacity="0.3" />
        {/* Main header */}
        <rect x="180" y="0" width="620" height="56" fill={p.panel} opacity="0.6" />
        <line x1="180" y1="56" x2="800" y2="56" stroke={p.line} />
        <rect x="204" y="18" width="120" height="18" rx="4" fill={p.muted} opacity="0.25" />
        <rect x="700" y="20" width="24" height="16" rx="8" fill={p.muted} opacity="0.2" />
        <rect x="736" y="20" width="24" height="16" rx="8" fill={p.muted} opacity="0.2" />
        <rect x="204" y="76" width="240" height="10" rx="2" fill={p.text} opacity="0.6" />
        <rect x="204" y="96" width="160" height="8" rx="2" fill={p.muted} opacity="0.4" />
        {/* Chart area */}
        <rect x="204" y="120" width="560" height="200" rx="8" fill={p.panel} />
        <rect x="224" y="140" width="80" height="10" rx="2" fill={p.muted} opacity="0.4" />
        {/* Area chart path */}
        <path d="M240 290 L290 270 L340 280 L390 240 L440 250 L490 210 L540 220 L590 190 L640 200 L700 170 L720 175 L720 300 L240 300 Z" fill={p.accent} opacity="0.1" />
        <path d="M240 290 L290 270 L340 280 L390 240 L440 250 L490 210 L540 220 L590 190 L640 200 L700 170 L720 175" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Chart dots */}
        {[240, 290, 340, 390, 440, 490, 540, 590, 640, 700, 720].map((cx, i) => (
          <circle key={i} cx={cx} cy={[290, 270, 280, 240, 250, 210, 220, 190, 200, 170, 175][i]} r="3.5" fill={p.accent} />
        ))}
        {/* Grid lines */}
        <line x1="240" y1="180" x2="720" y2="180" stroke={p.line} opacity="0.4" strokeDasharray="4 4" />
        <line x1="240" y1="220" x2="720" y2="220" stroke={p.line} opacity="0.4" strokeDasharray="4 4" />
        <line x1="240" y1="260" x2="720" y2="260" stroke={p.line} opacity="0.4" strokeDasharray="4 4" />
        {/* Bottom cards */}
        <rect x="204" y="340" width="268" height="140" rx="8" fill={p.panel} />
        <rect x="224" y="360" width="80" height="10" rx="2" fill={p.muted} opacity="0.4" />
        {/* List items */}
        {[388, 416, 444, 472].map((y, i) => (
          <g key={i}>
            <rect x="224" y={y} width="228" height="20" rx="4" fill={i % 2 === 0 ? p.accent : 'transparent'} opacity={i % 2 === 0 ? 0.06 : 1} />
            <rect x="236" y={y + 6} width="100" height="7" rx="2" fill={p.text} opacity="0.3" />
            <rect x="392" y={y + 6} width="44" height="7" rx="2" fill={p.accent} opacity={0.5} />
          </g>
        ))}
        {/* Right bottom card */}
        <rect x="496" y="340" width="268" height="140" rx="8" fill={p.panel} />
        <rect x="516" y="360" width="90" height="10" rx="2" fill={p.muted} opacity="0.4" />
        {/* Mini bars */}
        {[
          { x: 524, h: 80 },
          { x: 552, h: 60 },
          { x: 580, h: 90 },
          { x: 608, h: 50 },
          { x: 636, h: 70 },
          { x: 664, h: 40 },
          { x: 692, h: 55 },
        ].map((bar, i) => (
          <rect key={i} x={bar.x} y={380 + (90 - bar.h)} width="18" height={bar.h} rx="4" fill={p.accent} opacity={0.3 + i * 0.08} />
        ))}
        <line x1="516" y1="470" x2="740" y2="470" stroke={p.line} />
      </g>
    </svg>
  );
}
