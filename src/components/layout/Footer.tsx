import { Linkedin, Instagram, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo-transparent-white.png"
                alt="TDH"
                className="h-12 w-auto"
              />
              <span className="text-xl font-heading font-bold">
                تکین داده هوشمند
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-2">
              راهکارهای نرم‌افزاری سازمانی
            </p>
            <p className="text-xs text-primary-foreground/50">
              فناوری | نوآوری | نرم‌افزار
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-4">
              محصولات
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/products"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                مجموعه کسب‌وکار TDH
              </a>
              <a
                href="/products"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                پلتفرم داده TDH
              </a>
              <a
                href="/products"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                گردش‌کار TDH
              </a>
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-4">
              راهکارها
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/solutions"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                زیرساخت ابری و هاستینگ
              </a>
              <a
                href="/solutions"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                توسعه نرم‌افزار سفارشی
              </a>
              <a
                href="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                درباره ما
              </a>
              <a
                href="/faq"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                سوالات متداول
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-4">
              تماس با ما
            </h4>
            <div className="space-y-3 text-[15px] text-primary-foreground/80 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="font-bold whitespace-nowrap">آدرس:</span>
                <span>تهران، هروی، اتوبان صیاد شیرازی، نرسیده به پل هروی، نبش گلستان ۴، پلاک ۱۲۹، ساختمان چوپان</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold whitespace-nowrap">تلفن:</span>
                <a href="tel:02128428084" className="hover:underline transition-colors">021-28428084</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold whitespace-nowrap">ایمیل:</span>
                <a href="mailto:info@tdh.ir" className="hover:underline transition-colors">info@tdh.ir</a>
                <span>|</span>
                <a href="mailto:sales@tdh.ir" className="hover:underline transition-colors">sales@tdh.ir</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                aria-label="لینکدین"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                aria-label="اینستاگرام"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                aria-label="تلگرام"
              >
                <Send size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-6">
          <p className="text-xs text-primary-foreground/50 text-center">
            © ۱۴۰۳ TDH. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
