import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
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

const faqCategories = [
  {
    name: 'عمومی',
    items: [
      {
        q: 'تکین داده هوشمند چیست؟',
        a: 'TDH یک شرکت ارائه‌دهنده‌ی راهکارهای نرم‌افزاری سازمانی است که از سال ۱۳۹۵ به سازمان‌های ایرانی در مسیر تحول دیجیتال خدمت می‌رساند.',
      },
      {
        q: 'محصولات TDH چه هستند؟',
        a: 'سه پلتفرم اصلی: مجموعه کسب‌وکار (ERP/CRM)، پلتفرم داده (BI/تحلیل) و گردش‌کار (اتوماسیون فرآیند).',
      },
    ],
  },
  {
    name: 'محصولات',
    items: [
      {
        q: 'مجموعه کسب‌وکار TDH چه تفاوتی دارد؟',
        a: 'یک پلتفرم یکپارچه شامل ERP، CRM، مدیریت پروژه و ابزارهای مالی — بدون نیاز به یکپارچه‌سازی پیچیده.',
      },
      {
        q: 'پلتفرم داده چه کاری انجام می‌دهد؟',
        a: 'تبدیل داده‌های خام به بینش‌های عملیاتی با داشبوردهای تعاملی، تحلیل پیش‌بینانه و گزارش‌دهی خودکار.',
      },
      {
        q: 'گردش‌کار برای چه کسانی مناسب است؟',
        a: 'سازمان‌هایی با فرآیندهای تأیید، خرید، منابع انسانی و مالی که نیاز به اتوماسیون دارند.',
      },
    ],
  },
  {
    name: 'قیمت‌گذاری و پیاده‌سازی',
    items: [
      {
        q: 'قیمت‌گذاری چگونه است؟',
        a: 'مجموعه کسب‌وکار از ۴۹۰,۰۰۰ تومان/کاربر/ماه. پلتفرم داده از ۱,۹۹۰,۰۰۰ تومان/ماه. گردش‌کار از ۹۹۰,۰۰۰ تومان/ماه.',
      },
      {
        q: 'زمان پیاده‌سازی چقدر است؟',
        a: 'مجموعه کسب‌وکار: ۲ تا ۴ هفته. پلتفرم داده و گردش‌کار: ۱ تا ۲ هفته.',
      },
      {
        q: 'آیا دمو رایگان وجود دارد؟',
        a: 'بله، جلسه نخست رایگان است و شامل تحلیل نیازها و نمایش پلتفرم می‌شود.',
      },
    ],
  },
  {
    name: 'پشتیبانی و امنیت',
    items: [
      {
        q: 'پشتیبانی چگونه ارائه می‌شود؟',
        a: 'تیم پشتیبانی ۲۴/۷ از طریق تلفن، ایمیل و پرتال مشتریان در دسترس است.',
      },
      {
        q: 'امنیت داده‌ها چگونه تضمین می‌شود؟',
        a: 'رمزنگاری در حالت استراحت و انتقال، کنترل دسترسی مبتنی بر نقش، و ممیزی‌های امنیتی دوره‌ای.',
      },
    ],
  },
];

export function FAQContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <section
        className="py-16 px-4 md:py-20 md:px-10"
        style={{
          borderBottom: '1px solid var(--color-line)',
          position: 'relative',
          ...s.section,
        }}
      >
        <span className="mono hidden md:block" style={{ position: 'absolute', top: 24, insetInlineStart: 40, ...s.mono }}>
          REF · 05.FAQ
        </span>
        <div className="max-w-[1400px] mx-auto">
          <div style={{ ...s.chip, marginBottom: 32 }}>
            <span style={s.dot} />
            § ۰۵ — سوالات متداول
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px, 7vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
              marginBottom: 24,
            }}
          >
            سوالات متداول
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-fg-muted)', maxWidth: 600 }}>
            پاسخ به سوالات رایج درباره محصولات، قیمت‌گذاری، پیاده‌سازی و پشتیبانی TDH.
          </p>
        </div>
      </section>

      <section
        className="py-16 px-4 md:py-20 md:pb-28 md:px-10"
        style={{ ...s.section }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {faqCategories.map((cat) => (
              <div key={cat.name}>
                <span
                  className="mono"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: 24,
                    paddingBottom: 12,
                    borderBottom: '1px solid var(--color-line)',
                  }}
                >
                  {cat.name}
                </span>

                <Accordion.Root type="multiple" collapsible>
                  {cat.items.map((item, i) => (
                    <Accordion.Item
                      key={`${cat.name}-${i}`}
                      value={`${cat.name}-${i}`}
                      style={{
                        borderBottom: '1px solid var(--color-line)',
                      }}
                    >
                      <Accordion.Header>
                        <Accordion.Trigger
                          className="gap-3 md:gap-5"
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '20px 0',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'right',
                            fontFamily: 'var(--font-sans)',
                            color: 'var(--color-fg)',
                          }}
                        >
                          <span
                            className="mono"
                            style={{
                              fontSize: 13,
                              color: 'var(--color-fg-subtle)',
                              minWidth: 24,
                              flexShrink: 0,
                            }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            style={{
                              flex: 1,
                              fontSize: 17,
                              fontWeight: 600,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.q}
                          </span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              flexShrink: 0,
                              color: 'var(--color-fg-muted)',
                              transition: 'transform 0.2s',
                            }}
                            className="faq-chevron"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content
                        style={{
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            padding: '0 0 20px 44px',
                          }}
                        >
                          <p
                            style={{
                              fontSize: 16,
                              lineHeight: 1.8,
                              color: 'var(--color-fg-muted)',
                            }}
                          >
                            {item.a}
                          </p>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="سوالی دارید؟ با ما صحبت کنید."
        accentWord="صحبت"
      />
    </div>
  );
}
