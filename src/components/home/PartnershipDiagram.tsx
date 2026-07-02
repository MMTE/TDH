interface Props {
  activeIndex: number | null;
  onNodeEnter: (i: number) => void;
  onNodeLeave: () => void;
}

export function PartnershipDiagram({ activeIndex, onNodeEnter, onNodeLeave }: Props) {
  const dimColor = (color: string, i: number) =>
    activeIndex === null || activeIndex === i ? color : 'var(--color-fg-subtle)';

  const outerStroke = (i: number) =>
    activeIndex === i ? '#C4894A' : 'var(--color-line-strong)';

  const outerWidth = (i: number) => (activeIndex === i ? 1.5 : 1);

  return (
    <svg
      viewBox="0 0 480 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', transform: 'scaleX(-1)' }}
      aria-hidden="true"
    >
      <style>{`
        .radar-ping {
          transform-box: fill-box;
          transform-origin: center;
          fill: #C4894A;
          animation: radar-ping 2.6s ease-out infinite;
        }
        @keyframes radar-ping {
          0%   { transform: scale(1); fill-opacity: 0.55; }
          100% { transform: scale(7); fill-opacity: 0; }
        }
        .dot-beat {
          transform-box: fill-box;
          transform-origin: center;
          animation: dot-beat 1.8s ease-in-out infinite 0.6s;
        }
        @keyframes dot-beat {
          0%, 100% { transform: scale(1);   }
          45%       { transform: scale(1.7); }
        }
        .ring-l {
          animation: ring-l 3.4s ease-in-out infinite 1.2s;
        }
        @keyframes ring-l {
          0%, 100% { transform: translateX(0);   }
          50%       { transform: translateX(-7px); }
        }
        .ring-r {
          animation: ring-r 3.4s ease-in-out infinite 1.2s;
        }
        @keyframes ring-r {
          0%, 100% { transform: translateX(0);  }
          50%       { transform: translateX(7px); }
        }
      `}</style>

      {/* ── Amber connectors ── */}
      <line x1="128" y1="70" x2="189" y2="70"
        style={{ stroke: dimColor('#C4894A', 0), strokeWidth: 1.5, strokeDasharray: '5 4',
          transition: 'stroke 0.2s ease' }} />
      <polyline points="185,64 191,70 185,76"
        style={{ stroke: dimColor('#C4894A', 0), strokeWidth: 1.5,
          transition: 'stroke 0.2s ease' }}
        strokeLinecap="round" strokeLinejoin="round" />

      <line x1="291" y1="70" x2="352" y2="70"
        style={{ stroke: dimColor('#C4894A', 2), strokeWidth: 1.5, strokeDasharray: '5 4',
          transition: 'stroke 0.2s ease' }} />
      <polyline points="348,64 354,70 348,76"
        style={{ stroke: dimColor('#C4894A', 2), strokeWidth: 1.5,
          transition: 'stroke 0.2s ease' }}
        strokeLinecap="round" strokeLinejoin="round" />

      {/* ════ NODE 01 — Problem identification ════ */}
      <g
        style={{ opacity: 1, cursor: 'pointer' }}
        onMouseEnter={() => onNodeEnter(0)}
        onMouseLeave={onNodeLeave}
      >
        <circle cx="80" cy="70" r="48"
          style={{ fill: 'var(--color-bg-card)',
            stroke: outerStroke(0), strokeWidth: outerWidth(0),
            transition: 'stroke 0.2s ease, stroke-width 0.2s ease' }} />
        <circle cx="80" cy="66" r="13"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <line x1="80" y1="49" x2="80" y2="55"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, strokeLinecap: 'round' }} />
        <line x1="80" y1="77" x2="80" y2="83"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, strokeLinecap: 'round' }} />
        <line x1="63" y1="66" x2="69" y2="66"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, strokeLinecap: 'round' }} />
        <line x1="91" y1="66" x2="97" y2="66"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, strokeLinecap: 'round' }} />
        <circle className="radar-ping" cx="80" cy="66" r="3" />
        <circle cx="80" cy="66" r="3" style={{ fill: 'var(--color-fg-muted)' }} />
      </g>

      {/* ════ NODE 02 — Build (focal / amber) ════ */}
      <g
        style={{ opacity: 1, cursor: 'pointer' }}
        onMouseEnter={() => onNodeEnter(1)}
        onMouseLeave={onNodeLeave}
      >
        <circle cx="240" cy="70" r="54"
          style={{ stroke: 'var(--color-line-strong)', strokeWidth: 1, fill: 'none' }} />
        <circle cx="240" cy="70" r="48"
          style={{ fill: 'var(--color-bg-card)', stroke: '#C4894A',
            strokeWidth: activeIndex === 1 ? 2 : 1.5,
            transition: 'stroke-width 0.2s ease' }} />
        <rect x="225" y="56" width="12" height="12" rx="2"
          style={{ stroke: '#C4894A', strokeWidth: 1.5, fill: 'none' }} />
        <rect x="243" y="56" width="12" height="12" rx="2"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <rect x="225" y="74" width="12" height="12" rx="2"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <rect x="243" y="74" width="12" height="12" rx="2"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <rect className="dot-beat" x="228" y="59" width="6" height="6" rx="1"
          style={{ fill: '#C4894A' }} />
      </g>

      {/* ════ NODE 03 — Partnership ════ */}
      <g
        style={{ opacity: 1, cursor: 'pointer' }}
        onMouseEnter={() => onNodeEnter(2)}
        onMouseLeave={onNodeLeave}
      >
        <circle cx="400" cy="70" r="48"
          style={{ fill: 'var(--color-bg-card)',
            stroke: outerStroke(2), strokeWidth: outerWidth(2),
            transition: 'stroke 0.2s ease, stroke-width 0.2s ease' }} />
        <circle className="ring-l" cx="390" cy="70" r="13"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <circle className="ring-r" cx="410" cy="70" r="13"
          style={{ stroke: 'var(--color-fg-muted)', strokeWidth: 1.5, fill: 'none' }} />
        <circle cx="400" cy="70" r="2.5" style={{ fill: 'var(--color-fg-muted)' }} />
      </g>
    </svg>
  );
}
