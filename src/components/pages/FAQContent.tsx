import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageLayout } from '@/components/layout/PageLayout';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');

  const faqs: FAQItem[] = [
    // درباره محصولات
    {
      category: 'محصولات',
      question: 'مجموعه کسب‌وکار TDH چه تفاوتی با سایر سیستم‌های ERP دارد؟',
      answer: 'مجموعه کسب‌وکار TDH یک پلتفرم یکپارچه است که ERP، CRM، مدیریت پروژه و ابزارهای مالی را در یک سیستم واحد گرد هم می‌آورد. برخلاف سیستم‌های سنتی که نیاز به یکپارچه‌سازی پیچیده دارند، TDH از ابتدا به‌صورت یکپارچه طراحی شده است. همچنین، این پلتفرم به‌طور خاص برای کسب‌وکارهای ایرانی و نیازمندی‌های محلی آنها بهینه شده است.',
    },
    {
      category: 'محصولات',
      question: 'پلتفرم داده TDH چه نوع داده‌هایی را پشتیبانی می‌کند؟',
      answer: 'پلتفرم داده TDH از انواع مختلف داده‌ها پشتیبانی می‌کند: داده‌های مالی و حسابداری، داده‌های فروش و بازاریابی، داده‌های منابع انسانی، داده‌های عملیاتی و تولید، و داده‌های مشتریان. این پلتفرم می‌تواند با انواع سیستم‌های موجود شما یکپارچه شود و داده‌ها را از منابع مختلف جمع‌آوری کند.',
    },
    {
      category: 'محصولات',
      question: 'گردش‌کار TDH برای چه نوع فرآیندهایی مناسب است؟',
      answer: 'گردش‌کار TDH برای انواع فرآیندهای کسب‌وکار مناسب است: فرآیندهای تأیید و تصویب (مانند تأیید خرید، تأیید مرخصی)، فرآیندهای خرید و تدارکات، فرآیندهای منابع انسانی (استخدام، ارزیابی عملکرد)، فرآیندهای مالی (تأیید فاکتور، پرداخت)، و فرآیندهای انطباق و گزارش‌دهی. با سازنده بصری ما، می‌توانید هر فرآیندی را بدون نیاز به کدنویسی طراحی کنید.',
    },
    {
      category: 'محصولات',
      question: 'آیا محصولات TDH نیاز به نصب دارند؟',
      answer: 'خیر، تمام محصولات TDH به‌صورت SaaS (Software as a Service) ارائه می‌شوند و نیازی به نصب ندارند. شما می‌توانید از طریق مرورگر وب یا اپلیکیشن موبایل به پلتفرم دسترسی داشته باشید. تمام داده‌ها در ابر ذخیره می‌شوند و شما می‌توانید از هر جایی و در هر زمانی به سیستم دسترسی داشته باشید.',
    },
    // درباره قیمت‌گذاری
    {
      category: 'قیمت‌گذاری',
      question: 'نحوه قیمت‌گذاری محصولات TDH چگونه است؟',
      answer: 'قیمت‌گذاری محصولات TDH بر اساس تعداد کاربران و پلن انتخابی شما تعیین می‌شود. مجموعه کسب‌وکار TDH از ۴۹۰,۰۰۰ تومان به ازای هر کاربر در ماه شروع می‌شود. پلتفرم داده TDH از ۱,۹۹۰,۰۰۰ تومان در ماه و گردش‌کار TDH از ۹۹۰,۰۰۰ تومان در ماه شروع می‌شود. برای قیمت‌گذاری دقیق‌تر، لطفاً با تیم فروش ما تماس بگیرید.',
    },
    {
      category: 'قیمت‌گذاری',
      question: 'آیا تخفیف برای شرکت‌های بزرگ وجود دارد؟',
      answer: 'بله، برای شرکت‌های بزرگ و سازمان‌هایی که تعداد کاربران زیادی دارند، تخفیف‌های ویژه در نظر گرفته شده است. همچنین، در صورت خرید چند محصول به‌صورت همزمان، تخفیف‌های اضافی اعمال می‌شود. برای اطلاع از تخفیف‌های موجود، با تیم فروش ما تماس بگیرید.',
    },
    {
      category: 'قیمت‌گذاری',
      question: 'هزینه‌های اضافی چه هستند؟',
      answer: 'قیمت اعلام شده شامل تمام ویژگی‌های اصلی پلتفرم است. هزینه‌های اضافی ممکن است شامل: یکپارچه‌سازی‌های سفارشی، توسعه ویژگی‌های خاص، آموزش اضافی، و پشتیبانی سطح بالا باشد. تمام هزینه‌ها قبل از شروع کار به شما اطلاع داده می‌شود و هیچ هزینه پنهانی وجود ندارد.',
    },
    // درباره پیاده‌سازی
    {
      category: 'پیاده‌سازی',
      question: 'زمان پیاده‌سازی محصولات TDH چقدر است؟',
      answer: 'زمان پیاده‌سازی بستگی به پیچیدگی نیازمندی‌های شما دارد. برای پیاده‌سازی استاندارد مجموعه کسب‌وکار TDH، معمولاً ۲ تا ۴ هفته زمان نیاز است. پلتفرم داده TDH و گردش‌کار TDH معمولاً در ۱ تا ۲ هفته پیاده‌سازی می‌شوند. برای پیاده‌سازی‌های سفارشی، زمان دقیق پس از بررسی نیازمندی‌ها به شما اطلاع داده می‌شود.',
    },
    {
      category: 'پیاده‌سازی',
      question: 'آیا نیاز به زیرساخت خاصی داریم؟',
      answer: 'خیر، تمام محصولات TDH به‌صورت ابری ارائه می‌شوند و نیازی به خرید سرور یا زیرساخت خاصی ندارید. تنها چیزی که نیاز دارید، اتصال به اینترنت است. ما تمام زیرساخت، امنیت و پشتیبان‌گیری را مدیریت می‌کنیم.',
    },
    {
      category: 'پیاده‌سازی',
      question: 'آیا می‌توانیم داده‌های موجود خود را منتقل کنیم؟',
      answer: 'بله، تیم ما می‌تواند به شما در انتقال داده‌های موجود از سیستم‌های قبلی کمک کند. ما از انواع فرمت‌های داده پشتیبانی می‌کنیم و می‌توانیم داده‌ها را از اکسل، پایگاه‌داده‌های مختلف، و سیستم‌های ERP/CRM دیگر منتقل کنیم. این فرآیند به‌صورت ایمن و با حفظ یکپارچگی داده‌ها انجام می‌شود.',
    },
    {
      category: 'پیاده‌سازی',
      question: 'آموزش کاربران چگونه انجام می‌شود؟',
      answer: 'ما آموزش‌های جامعی برای کاربران ارائه می‌دهیم: جلسات آموزش آنلاین یا حضوری، ویدیوهای آموزشی، مستندات کامل، و پشتیبانی در طول دوره یادگیری. همچنین، تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست. برای سازمان‌های بزرگ، می‌توانیم برنامه آموزش اختصاصی طراحی کنیم.',
    },
    // درباره پشتیبانی
    {
      category: 'پشتیبانی',
      question: 'ساعات پشتیبانی TDH چه زمانی است؟',
      answer: 'تیم پشتیبانی ما از شنبه تا چهارشنبه از ساعت ۹ صبح تا ۶ عصر و پنج‌شنبه از ۹ صبح تا ۱ ظهر در دسترس است. برای مشتریان با پلن Enterprise، پشتیبانی ۲۴/۷ در دسترس است. همچنین، می‌توانید از طریق ایمیل، تلفن و سیستم تیکتینگ با ما در ارتباط باشید.',
    },
    {
      category: 'پشتیبانی',
      question: 'SLA (Service Level Agreement) TDH چیست؟',
      answer: 'ما تضمین می‌کنیم که پلتفرم‌های ما ۹۹.۹٪ از زمان در دسترس باشند. در صورت بروز مشکل، ما متعهد به پاسخگویی در کمتر از ۴ ساعت برای مشکلات بحرانی و ۲۴ ساعت برای مشکلات عادی هستیم. تمام SLAها در قرارداد به‌صورت واضح مشخص شده‌اند.',
    },
    {
      category: 'پشتیبانی',
      question: 'به‌روزرسانی‌ها چگونه انجام می‌شوند؟',
      answer: 'به‌روزرسانی‌ها به‌صورت خودکار و بدون نیاز به مداخله شما انجام می‌شوند. ما به‌روزرسانی‌های منظمی برای بهبود عملکرد، افزودن ویژگی‌های جدید و رفع باگ‌ها ارائه می‌دهیم. تمام به‌روزرسانی‌ها در ساعات کم‌ترافیک انجام می‌شوند تا اختلالی در کار شما ایجاد نشود. قبل از به‌روزرسانی‌های بزرگ، به شما اطلاع داده می‌شود.',
    },
    // درباره امنیت
    {
      category: 'امنیت',
      question: 'داده‌های ما چگونه محافظت می‌شوند؟',
      answer: 'امنیت داده‌های شما اولویت اول ماست. ما از رمزنگاری پیشرفته (SSL/TLS) برای انتقال داده‌ها و رمزنگاری در سطح پایگاه داده استفاده می‌کنیم. تمام سرورها در مراکز داده معتبر و امن قرار دارند. ما پشتیبان‌گیری خودکار روزانه انجام می‌دهیم و داده‌ها در چندین مکان جغرافیایی ذخیره می‌شوند. همچنین، ما به‌صورت منظم تست‌های امنیتی انجام می‌دهیم.',
    },
    {
      category: 'امنیت',
      question: 'آیا داده‌های ما در ایران ذخیره می‌شوند؟',
      answer: 'بله، تمام داده‌های مشتریان ایرانی در سرورهای داخل ایران ذخیره می‌شوند. این موضوع نه‌تنها از نظر امنیت و حریم خصوصی مهم است، بلکه سرعت دسترسی به داده‌ها را نیز افزایش می‌دهد. ما از مراکز داده معتبر و دارای گواهینامه‌های امنیتی استفاده می‌کنیم.',
    },
    {
      category: 'امنیت',
      question: 'آیا TDH با استانداردهای امنیتی بین‌المللی مطابقت دارد؟',
      answer: 'بله، ما با استانداردهای امنیتی بین‌المللی مطابقت داریم و به‌صورت منظم ممیزی‌های امنیتی انجام می‌دهیم. ما بهترین روش‌های امنیتی صنعت را پیاده‌سازی کرده‌ایم و به‌صورت مداوم سیستم‌های خود را به‌روزرسانی می‌کنیم تا در برابر تهدیدات جدید محافظت شوند.',
    },
  ];

  const categories = ['همه', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = selectedCategory === 'همه' 
    ? faqs 
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground mb-4">
            سوالات متداول
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            پاسخ به سوالات رایج درباره محصولات، خدمات، قیمت‌گذاری و پشتیبانی TDH
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={cn(
                'px-4 py-2 rounded-sm text-sm font-medium transition-all',
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  'bg-card border border-border rounded-sm transition-all',
                  isOpen && 'border-accent'
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-right gap-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-accent/70">
                    {faq.category}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-semibold text-foreground text-right">
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-sm p-8 max-w-2xl mx-auto">
            <h2 className="text-h2 font-heading font-bold text-foreground mb-4">
              سوال دیگری دارید؟
            </h2>
            <p className="text-muted-foreground mb-6">
              اگر پاسخ سوال خود را پیدا نکردید، با تیم ما تماس بگیرید. ما خوشحال می‌شویم به شما کمک کنیم.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-accent font-medium"
            >
              تماس با ما
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
