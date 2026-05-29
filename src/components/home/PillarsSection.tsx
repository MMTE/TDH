import { useState } from 'react';
import { PartnershipDiagram } from './PartnershipDiagram';

const pillars = [
  { number: '01', tag: 'مسأله‌شناسی', title: 'اول درک، بعد راه‌حل', description: 'قبل از هر خطی کد، وقت می‌ذاریم تا مسأله‌ی واقعی رو بفهمیم. چون راه‌حل درست از سوال درست شروع میشه، نه از فروش سریع.' },
  { number: '02', tag: 'ساخت', title: 'چیزی که واقعاً نیاز دارید', description: 'نه نرم‌افزار برای نشون دادن — چیزی که دقیقاً حل مسأله می‌کنه. ساده، سریع، و متناسب با کسب‌وکار شما. بدون اضافه‌بار.' },
  { number: '03', tag: 'همراهی', title: 'کنارتون در طول مسیر', description: 'پروژه تموم میشه ولی ما نمی‌ریم. همراهتون هستیم — پشتیبانی واقعی، رشد مشترک، و هر چیزی که برای موفقیتتون لازمه.' },
];

export function PillarsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 md:py-28 md:px-10" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header: title then diagram, both centered */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-8 md:gap-10">
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 48px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-fg)', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>
            اینجوری <span style={{ color: 'var(--color-accent)' }}>شریک</span> تجاریتون میشیم.
          </h2>
          <div style={{ width: '100%', maxWidth: 560 }}>
            <PartnershipDiagram
              activeIndex={activeIndex}
              onNodeEnter={setActiveIndex}
              onNodeLeave={() => setActiveIndex(null)}
            />
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--color-line)' }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="p-6 md:p-8"
              style={{
                borderInlineStart: i > 0 ? '1px solid var(--color-line)' : 'none',
                background: activeIndex === i ? 'oklch(0.30 0.04 55 / 0.25)' : 'transparent',
                transition: 'background 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="mono text-5xl md:text-[64px]" style={{ fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1 }}>
                {pillar.number}
              </div>
              <span className="mono" style={{ fontSize: 13, color: 'var(--color-fg-subtle)', display: 'block', marginTop: 16, marginBottom: 16 }}>
                / {pillar.tag}
              </span>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 16, fontFamily: 'var(--font-sans)' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-sans)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
