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
        q: 'TDH چیست و چه کاری انجام می‌دهد؟',
        a: 'تکین داده هوشمند از سال ۱۳۹۵ نرم‌افزار و خدمات کاربردی می‌سازد؛ از دستیار هوشمند فارسی و مانیتورینگ سرور با AI تا اعلان‌رسانی یکپارچه برای Agent های هوشمند و توسعه نرم‌افزار سفارشی.',
      },
      {
        q: 'تفاوت کار شما با یک تیم پیمانکار معمولی چیست؟',
        a: 'ما قبل از راه‌حل، مسأله را جدی می‌گیریم. هدف فقط تحویل چند صفحه کد نیست؛ می‌خواهیم چیزی بسازیم که در عمل کار کند، قابل نگهداری باشد و بعد از تحویل هم بدون همراهی رها نشود.',
      },
      {
        q: 'آیا همه محصولات شما آماده استفاده هستند؟',
        a: 'بعضی محصولات مثل دستیار هوشمند فارسی آماده استفاده‌اند. برخی ابزارها مثل ServerGuard یا Watch Tower بسته به سناریوی شما نصب، تنظیم یا یکپارچه‌سازی می‌خواهند. در جلسه اول مسیر مناسب را روشن می‌کنیم.',
      },
    ],
  },
  {
    name: 'محصولات',
    items: [
      {
        q: 'دستیار هوشمند فارسی چه کاربردی دارد؟',
        a: 'دسترسی فارسی به مدل‌های هوش مصنوعی مثل GPT-4، Claude و Gemini را ساده می‌کند؛ با پرداخت ریالی، رابط فارسی و پشتیبانی فارسی.',
      },
      {
        q: 'ServerGuard دقیقاً چه مسأله‌ای را حل می‌کند؟',
        a: 'ServerGuard وضعیت سرور را پایش می‌کند، ناهنجاری‌ها را با کمک AI تحلیل می‌کند و پیش از تبدیل شدن مشکل به بحران هشدار می‌دهد.',
      },
      {
        q: 'Watch Tower برای چه تیم‌هایی مناسب است؟',
        a: 'برای تیم‌هایی که چند اپلیکیشن، سرویس یا AI Agent دارند و نمی‌خواهند برای هر کانال اعلان‌رسانی اتصال جداگانه بسازند. یک نقطه اتصال می‌سازید و اعلان را به چند کانال می‌فرستید.',
      },
    ],
  },
  {
    name: 'قیمت و پیاده‌سازی',
    items: [
      {
        q: 'قیمت‌ها چگونه تعیین می‌شوند؟',
        a: 'برای محصولات آماده، قیمت هر محصول در صفحه خودش مشخص شده یا در جلسه معرفی اعلام می‌شود. برای خدماتی مثل توسعه سفارشی، DevOps، زیرساخت و API، قیمت بر اساس دامنه پروژه و نیاز واقعی شما تعیین می‌شود.',
      },
      {
        q: 'پیاده‌سازی چقدر زمان می‌برد؟',
        a: 'به نوع کار بستگی دارد. راه‌اندازی یک ابزار آماده می‌تواند خیلی سریع انجام شود، اما توسعه سفارشی یا طراحی زیرساخت نیاز به تحلیل دقیق‌تر دارد. بعد از جلسه مسأله‌شناسی، زمان‌بندی شفاف ارائه می‌کنیم.',
      },
      {
        q: 'جلسه اول رایگان است؟',
        a: 'بله. جلسه اول برای شنیدن مسأله، شناخت نیاز و پیشنهاد مسیر اولیه است؛ بدون تعهد و بدون فشار فروش.',
      },
      {
        q: 'هزینه پنهانی دارید؟',
        a: 'نه. قبل از شروع، دامنه کار و هزینه‌ها را شفاف می‌کنیم. اگر در مسیر، نیاز تازه‌ای اضافه شود، قبل از انجام درباره هزینه و زمان آن توافق می‌کنیم.',
      },
    ],
  },
  {
    name: 'پشتیبانی و امنیت',
    items: [
      {
        q: 'پشتیبانی چطور انجام می‌شود؟',
        a: 'پشتیبانی از طریق تلفن، ایمیل و تیکت انجام می‌شود. موضوعات بحرانی با اولویت پیگیری می‌شوند و برای هر پروژه یا محصول، سطح پشتیبانی متناسب با نیاز مشخص می‌شود.',
      },
      {
        q: 'برای زیرساخت و سرویس‌ها SLA دارید؟',
        a: 'بله، بسته به نوع سرویس و قرارداد، سطح دسترس‌پذیری، زمان پاسخ و شیوه پیگیری مشخص می‌شود. هدف ما این است که تعهدها روشن و قابل سنجش باشند.',
      },
      {
        q: 'امنیت داده‌ها چطور تضمین می‌شه؟',
        a: 'از رمزنگاری در انتقال، کنترل دسترسی، پشتیبان‌گیری و نگهداری داده روی زیرساخت داخل ایران استفاده می‌کنیم. جزئیات دقیق امنیتی بر اساس نوع محصول یا پروژه مشخص می‌شود.',
      },
      {
        q: 'به‌روزرسانی‌ها چطور انجام می‌شوند؟',
        a: 'برای محصولات آماده، به‌روزرسانی‌ها با کمترین اختلال انجام می‌شوند و تغییرات مهم از قبل اطلاع‌رسانی می‌شوند. در پروژه‌های سفارشی، روند به‌روزرسانی طبق توافق و فرآیند استقرار انجام می‌شود.',
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
        <div className="max-w-[1400px] mx-auto">
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--color-fg)',
              marginBottom: 24,
            }}
          >
            پرسش‌هایی که بیشتر می‌شنویم.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--color-fg-muted)', maxWidth: 600 }}>
            اگر پاسخ‌تان را اینجا پیدا نکردید، پیام بگذارید؛ دقیق و کوتاه جواب می‌دهیم.
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
                              lineHeight: 1.7,
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
        heading="پرسشی دارید؟ گفت‌وگو کنیم."
        accentWord="گفت‌وگو"
      />
    </div>
  );
}
