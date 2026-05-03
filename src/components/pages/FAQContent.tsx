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
        a: 'TDH یک شرکت ارائه‌دهنده راهکارهای نرم‌افزاری سازمانی است که از سال ۱۳۹۵ به سازمان‌های ایرانی در مسیر تحول دیجیتال خدمت می‌رساند. ما سه پلتفرم اصلی داریم: مجموعه کسب‌وکار (ERP/CRM)، پلتفرم داده (هوش تجاری) و گردش‌کار (اتوماسیون فرآیند).',
      },
      {
        q: 'محصولات TDH چه تفاوتی با سیستم‌های سنتی دارد؟',
        a: 'برخلاف سیستم‌های سنتی که نیاز به یکپارچه‌سازی پیچیده دارند، TDH از ابتدا یکپارچه طراحی شده. ERP، CRM، مدیریت پروژه و ابزارهای مالی همگی در یک پلتفرم واحد هستند. همچنین به‌طور خاص برای نیازهای کسب‌وکارهای ایرانی بهینه شده‌ایم.',
      },
      {
        q: 'آیا محصولات TDH نیاز به نصب دارند؟',
        a: 'خیر. تمام محصولات TDH به‌صورت SaaS ارائه می‌شوند. از مرورگر وب یا اپلیکیشن موبایل (iOS و Android) به پلتفرم دسترسی دارید. نیازی به خرید سرور یا زیرساخت خاصی نیست.',
      },
    ],
  },
  {
    name: 'محصولات',
    items: [
      {
        q: 'مجموعه کسب‌وکار TDH چه می‌تواند انجام دهد؟',
        a: 'مدیریت کامل چرخه فروش، برنامه‌ریزی و پیگیری پروژه‌ها، ابزارهای مالی و حسابداری، مدیریت انبار و موجودی، مرکز همکاری تیمی، پرتال پشتیبانی مشتری و گزارش‌دهی پیشرفته — همه در یک داشبورد واحد.',
      },
      {
        q: 'پلتفرم داده چه کاری انجام می‌دهد؟',
        a: 'داده‌های خام مالی، فروش، منابع انسانی و عملیاتی را به بینش‌های عملیاتی تبدیل می‌کند. داشبوردهای تعاملی، گزارش‌دهی خودکار، تحلیل پیش‌بینانه با یادگیری ماشین و هشدارهای بلادرنگ.',
      },
      {
        q: 'گردش‌کار TDH برای چه فرآیندهایی مناسب است؟',
        a: 'فرآیندهای تأیید و تصویب (خرید، مرخصی)، گردش کار تدارکات، فرآیندهای منابع انسانی (استخدام، ارزیابی)، تأیید فاکتور و پرداخت، و فرآیندهای انطباق. با سازنده بصری، هر فرآیندی بدون کدنویسی قابل طراحی است.',
      },
    ],
  },
  {
    name: 'قیمت‌گذاری و پیاده‌سازی',
    items: [
      {
        q: 'قیمت‌گذاری چگونه است؟',
        a: 'مجموعه کسب‌وکار از ۴۹۰,۰۰۰ تومان به ازای هر کاربر در ماه. پلتفرم داده از ۱,۹۹۰,۰۰۰ تومان در ماه. گردش‌کار از ۹۹۰,۰۰۰ تومان در ماه. برای شرکت‌های بزرگ تخفیف‌های ویژه و برای خرید همزمان چند محصول، تخفیف اضافی اعمال می‌شود.',
      },
      {
        q: 'زمان پیاده‌سازی چقدر است؟',
        a: 'مجموعه کسب‌وکار: ۲ تا ۴ هفته. پلتفرم داده و گردش‌کار: ۱ تا ۲ هفته. تیم ما مهاجرت داده‌ها از سیستم‌های قبلی را هم انجام می‌دهد.',
      },
      {
        q: 'آیا دمو رایگان وجود دارد؟',
        a: 'بله. جلسه نخست رایگان است و شامل تحلیل نیازهای سازمان شما و نمایش پلتفرم می‌شود. بدون تعهد و بدون فشار فروش.',
      },
      {
        q: 'آیا هزینه‌های پنهانی وجود دارد؟',
        a: 'خیر. قیمت اعلام‌شده شامل تمام ویژگی‌های اصلی پلتفرم است. هزینه‌های اضافی (مثل یکپارچه‌سازی‌های سفارشی) قبل از شروع کار اطلاع داده می‌شوند.',
      },
    ],
  },
  {
    name: 'پشتیبانی و امنیت',
    items: [
      {
        q: 'پشتیبانی چگونه ارائه می‌شود؟',
        a: 'از شنبه تا چهارشنبه ۹ تا ۱۸ و پنج‌شنبه ۹ تا ۱۳ از طریق تلفن، ایمیل و سیستم تیکتینگ. برای مشکلات بحرانی، پاسخگویی ظرف ۴ ساعت.',
      },
      {
        q: 'SLA چیست؟',
        a: 'تضمین ۹۹٫۹٪ آپتایم پلتفرم‌ها. پاسخگویی مشکلات بحرانی ظرف ۴ ساعت و مشکلات عادی ظرف ۲۴ ساعت. تمام SLAها در قرارداد مشخص شده‌اند.',
      },
      {
        q: 'امنیت داده‌ها چگونه تضمین می‌شود؟',
        a: 'رمزنگاری SSL/TLS برای انتقال و رمزنگاری در سطح پایگاه داده. تمام داده‌های مشتریان ایرانی در سرورهای داخل ایران ذخیره می‌شوند. پشتیبان‌گیری خودکار روزانه و ممیزی‌های امنیتی دوره‌ای.',
      },
      {
        q: 'به‌روزرسانی‌ها چگونه انجام می‌شود؟',
        a: 'خودکار و بدون مداخله شما. به‌روزرسانی‌های عملکردی و ویژگی‌های جدید منظم ارائه می‌شود و در ساعات کم‌ترافیک انجام می‌شود. قبل از به‌روزرسانی‌های بزرگ اطلاع داده می‌شود.',
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
            سوالات متداول
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--color-fg-muted)', maxWidth: 600 }}>
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
        heading="سوالی دارید؟ با ما صحبت کنید."
        accentWord="صحبت"
      />
    </div>
  );
}
