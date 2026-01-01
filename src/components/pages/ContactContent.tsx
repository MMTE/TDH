import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PageLayout } from '@/components/layout/PageLayout';

export function ContactContent() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });

    // Reset submitted state after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <div className="text-center lg:text-right mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-h1 lg:text-hero font-heading font-bold text-foreground mb-4">
                تماس با ما
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                برای درخواست دمو، مشاوره یا سوالات خود با ما در تماس باشید. تیم ما در اسرع وقت پاسخ شما خواهد داد.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-sm">
                <p className="text-success font-medium">پیام شما با موفقیت ارسال شد</p>
                <p className="text-sm text-muted-foreground">تیم ما به زودی با شما تماس خواهد گرفت.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">نام و نام خانوادگی *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-card"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">نام شرکت</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="bg-card"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-card"
                    dir="ltr"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-card"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">پیام شما *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  rows={6}
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg">
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-sm p-8 sticky top-24">
              <h2 className="text-lg font-heading font-bold text-foreground mb-6">
                اطلاعات تماس
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground">تهران، هروی، اتوبان صیاد شیرازی، نرسیده به پل هروی، نبش گلستان ۴، پلاک ۱۲۹، ساختمان چوپان</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} strokeWidth={1.5} className="text-accent mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="mailto:info@tdh.ir"
                      className="block text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      info@tdh.ir
                    </a>
                    <a
                      href="mailto:sales@tdh.ir"
                      className="block text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      sales@tdh.ir
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} strokeWidth={1.5} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:02128428084"
                      className="text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      021-28428084
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  ساعات کاری
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰</p>
                  <p>پنج‌شنبه: ۹:۰۰ - ۱۳:۰۰</p>
                  <p>جمعه: تعطیل</p>
                </div>
              </div>

              {/* Info Note */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  نکات مهم
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>پاسخ ظرف ۲۴ ساعت</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>مشاوره رایگان</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>بدون تعهد و فشار فروش</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
