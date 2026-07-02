import { useState } from 'react';
import { CTABlock } from '@/components/shared/CTABlock';

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
};

const productOptions = ['CRM360', 'Factorino', 'Topinar', 'مشاوره فنی'];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-line-strong)',
  padding: '14px 0',
  fontSize: 16,
  color: 'var(--color-fg)',
  outline: 'none',
  fontFamily: 'var(--font-sans)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--color-fg-muted)',
  marginBottom: 8,
  display: 'block',
};

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    setSelectedProduct(null);
  };

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-16 md:px-10"
        style={{
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
          ...s.section,
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
            }}
          >
            <span
              style={{ color: 'var(--color-accent)' }}
            >
              گفت‌وگو
            </span>{' '}
            کنیم.
          </h1>
        </div>
      </section>

      <section
        className="py-16 px-4 md:py-16 md:pb-24 md:px-10"
        style={{ ...s.section }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12">
            <div
              className="p-6 md:p-12"
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-line)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 24 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 12 }}>
                    پیام شما رسید.
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--color-fg-muted)' }}>
                    ظرف ۲۴ ساعت با شما تماس می‌گیریم.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: 32 }}>
                    <div>
                      <label style={labelStyle}>نام و نام خانوادگی *</label>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>شرکت</label>
                      <input
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>ایمیل *</label>
                      <input
                        required
                        type="email"
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>تلفن *</label>
                      <input
                        required
                        type="tel"
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>محصول مورد نظر</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2" style={{ marginTop: 4 }}>
                      {productOptions.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setSelectedProduct(selectedProduct === p ? null : p)}
                          style={{
                            padding: '10px 18px',
                            border:
                              selectedProduct === p
                                ? '1px solid var(--color-accent)'
                                : '1px solid var(--color-line)',
                            borderRadius: 6,
                            background:
                              selectedProduct === p
                                ? 'var(--color-accent)'
                                : 'transparent',
                            color:
                              selectedProduct === p
                                ? 'var(--color-bg)'
                                : 'var(--color-fg-muted)',
                            fontSize: 14,
                            fontWeight: 500,
                            fontFamily: 'var(--font-sans)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 40 }}>
                    <label style={labelStyle}>پیام شما</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: 'none',
                        borderBottom: '1px solid var(--color-line-strong)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '16px 40px',
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      border: 'none',
                      borderRadius: 6,
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: 'var(--font-sans)',
                      cursor: 'pointer',
                    }}
                  >
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                {
                  label: 'OFFICE',
                  content: 'تهران، هروی، اتوبان صیاد شیرازی شمال، نبش گلستان ۴، پلاک ۱۲۹، طبقه ۳',
                },
                {
                  label: 'PHONE',
                  content: '۰۲۱-۲۸۴۲۸۰۸۴',
                  sub: 'شنبه تا چهارشنبه — ۹:۰۰ تا ۱۸:۰۰',
                },
                {
                  label: 'EMAIL',
                  content: 'info@tdh.ir',
                },
                {
                  label: 'RESPONSE TIME',
                  content: '< ۲۴ ساعت',
                  big: true,
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: '28px 0',
                    borderBottom:
                      i < 3 ? '1px solid var(--color-line)' : 'none',
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: 12, color: 'var(--color-fg-subtle)', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}
                  >
                    {item.label}
                  </span>
                  {item.big ? (
                    <span
                      className="mono"
                      style={{ fontSize: 36, fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1.1 }}
                    >
                      {item.content}
                    </span>
                  ) : (
                    <p style={{ fontSize: 17, color: 'var(--color-fg)', lineHeight: 1.6 }}>
                      {item.content}
                    </p>
                  )}
                  {item.sub && (
                    <p
                      className="mono"
                      style={{ fontSize: 13, color: 'var(--color-fg-muted)', marginTop: 4 }}
                    >
                      {item.sub}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
