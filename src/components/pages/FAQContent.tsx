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
        q: 'TDH چیه و چیکار می‌کنه؟',
        a: 'شرکت نرم‌افزاریه که از سال ۱۳۹۵ به سازمان‌های ایرانی سرویس می‌ده. سه تا پلتفرم اصلی داریم: مجموعه کسب‌وکار (ERP/CRM)، پلتفرم داده (هوش تجاری) و گردش‌کار (اتوماسیون فرآیند). همه‌شون SaaS هستن — یعنی مرورگرتون رو باز می‌کنید و شروع می‌کنید.',
      },
      {
        q: 'فرق TDH با سیستم‌های سنتی چیه؟',
        a: 'سیستم‌های سنتی جدا جدا هستن: CRM یه جاست، حسابداری یه جا، انبار جای دیگه. بعد باید هزینه کنید تا به هم وصلشون کنید. TDH از اول یکپارچه طراحی شده. همه‌چیز تو یه پلتفرمه و مخصوص نیاز کسب‌وکارهای ایرانی بهینه شده.',
      },
      {
        q: 'آیا نیاز به نصب چیزی داره؟',
        a: 'نه. همه محصولات SaaS هستن. مرورگر رو باز می‌کنید (یا اپ موبایل) و کار می‌کنید. سرور، نصب و نگهداری با ماست.',
      },
    ],
  },
  {
    name: 'محصولات',
    items: [
      {
        q: 'مجموعه کسب‌وکار دقیقاً چیکار می‌کنه؟',
        a: 'فروش (از لید تا فاکتور)، پروژه‌ها (کانبان و گانت)، حسابداری، انبار، همکاری تیمی، پرتال مشتری و گزارش‌دهی — همه تو یه داشبورد.',
      },
      {
        q: 'پلتفرم داده به چه دردی می‌خوره؟',
        a: 'داده‌های پراکنده رو جمع می‌کنه و به داشبورد و بینش تبدیل می‌کنه. گزارش‌دهی خودکار، تحلیل پیش‌بینانه با یادگیری ماشین و هشدارهای بلادرنگ. بدون کدنویسی.',
      },
      {
        q: 'گردش‌کار برای کجا مناسبه؟',
        a: 'هر جا تأیید و امضا دارید: درخواست خرید، مرخصی، ارزیابی، فاکتور. با سازنده بصری، فرآیندها رو بکشید و رها کنید — بدون کدنویسی.',
      },
    ],
  },
  {
    name: 'قیمت و پیاده‌سازی',
    items: [
      {
        q: 'قیمت‌ها چطوره؟',
        a: 'مجموعه کسب‌وکار از ۴۹۰ هزار تومان به ازای هر کاربر در ماه. پلتفرم داده از ۱,۹۹۰,۰۰۰ تومان در ماه. گردش‌کار از ۹۹۰ هزار تومان در ماه. برای خرید همزمان چند محصول تخفیف داریم.',
      },
      {
        q: 'پیاده‌سازی چقدر طول می‌کشه؟',
        a: 'مجموعه کسب‌وکار: ۲ تا ۴ هفته. پلتفرم داده و گردش‌کار: ۱ تا ۲ هفته. مهاجرت داده‌ها از سیستم قبلی هم توسط تیم ما انجام می‌شه.',
      },
      {
        q: 'دمو رایگانه؟',
        a: 'بله. جلسه اول رایگانه — تحلیل نیازهای سازمان شما + نمایش پلتفرم. بدون تعهد و بدون فشار فروش.',
      },
      {
        q: 'هزینه پنهانی دارید؟',
        a: 'نه. قیمت اعلام‌شده شامل همه ویژگی‌های اصلیه. اگه کار اضافه‌ای (مثل سفارشی‌سازی خاص) بخواید، قبل از شروع بهتون می‌گیم چقدر می‌شه.',
      },
    ],
  },
  {
    name: 'پشتیبانی و امنیت',
    items: [
      {
        q: 'پشتیبانی چطوره؟',
        a: 'شنبه تا چهارشنبه ۹ تا ۱۸ و پنج‌شنبه ۹ تا ۱۳ — تلفن، ایمیل و تیکت. مشکلات بحرانی ظرف ۴ ساعت جواب می‌خورن.',
      },
      {
        q: 'SLA چی دارید؟',
        a: '۹۹٫۹٪ آپتایم. مشکلات بحرانی ظرف ۴ ساعت و عادی ظرف ۲۴ ساعت. همه‌ش تو قرارداد ذکر شده.',
      },
      {
        q: 'امنیت داده‌ها چطور تضمین می‌شه؟',
        a: 'رمزنگاری SSL/TLS تو انتقال و رمزنگاری تو دیتابیس. همه داده‌ها تو سرورهای داخل ایران هستن. پشتیبان‌گیری خودکار روزانه و ممیزی امنیتی دوره‌ای.',
      },
      {
        q: 'آپدیت‌ها چطور انجام می‌شه؟',
        a: 'خودکار و تو ساعات کم‌ترافیک. آپدیت‌های بزرگ رو از قبل اطلاع می‌دیم.',
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
            سوالایی که بیشتر می‌پرسن.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--color-fg-muted)', maxWidth: 600 }}>
            سوالتون رو اینجا پیدا نمی‌کنید؟ یه پیام بذارید، جواب می‌دیم.
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
        heading="سوالی دارید؟ حرف بزنیم."
        accentWord="حرف"
      />
    </div>
  );
}
