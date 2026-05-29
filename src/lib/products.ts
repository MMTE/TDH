import type { LucideIcon } from 'lucide-react';
import { MessageSquare, Shield, Bell } from 'lucide-react';

export interface Product {
    slug: string;
    icon: LucideIcon;
    name: string;
    tagline: string;
    shortDescription: string;
    fullDescription: string;
    problemsSolved: string[];
    targetBusinesses: string[];
    keyBenefits: string[];
    features: string[];
    process?: string[];
    technologies?: string[];
    useCases?: string[];
    image: string;
    pricing: string;
    primaryCta: string;
    secondaryCta: string;
    relatedProducts?: string[];
}

export const products: Product[] = [
    {
        slug: 'ai-chat',
        icon: MessageSquare,
        name: 'دستیار هوشمند فارسی',
        tagline: 'ChatGPT فارسی — بدون VPN، بدون ارز خارجی',
        shortDescription: 'دسترسی به بهترین مدل‌های AI دنیا به فارسی. GPT-4، Claude و Gemini با اشتراک ماهانه ریالی و پشتیبانی فارسی.',
        fullDescription: 'چرا باید برای استفاده از ChatGPT VPN داشته باشید، با ارز خارجی پرداخت کنید و رابط انگلیسی تحمل کنید؟ chatgpt.ir همه این‌ها رو حل می‌کنه. پلتفرم چت هوشمند فارسی با دسترسی به بهترین مدل‌های زبانی دنیا — GPT-4، Claude، Gemini و بیشتر — با اشتراک ماهانه ریالی، رابط کاربری کامل فارسی و داده‌هایی که تو ایران می‌مونن. هزاران کاربر روزانه ازش استفاده می‌کنن.',
        problemsSolved: [
            'برای هر بار استفاده از ChatGPT باید VPN روشن کنید',
            'پرداخت ارزی برای اشتراک ChatGPT و Claude دسترسی سختی دارد',
            'رابط‌های کاربری انگلیسی برای تیم‌های فارسی‌زبان کند و ناراحت‌کننده است',
            'داده‌های مکالمات روی سرورهای خارجی ذخیره می‌شوند',
            'باید بین چند سرویس مختلف برای مدل‌های مختلف جابجا شوید',
        ],
        targetBusinesses: [
            'تیم‌های کسب‌وکار',
            'دانشجویان و محققان',
            'توسعه‌دهندگان نرم‌افزار',
            'نویسندگان و تولیدکنندگان محتوا',
            'آموزگاران و مدرسان',
        ],
        keyBenefits: [
            'بدون VPN، بدون ارز خارجی',
            'چند مدل AI در یک اشتراک',
            'رابط کاربری کامل فارسی',
            'داده‌ها در ایران می‌مانند',
            'پشتیبانی فارسی واقعی',
        ],
        features: [
            'دسترسی به GPT-4، Claude، Gemini',
            'استریمینگ بلادرنگ پاسخ‌ها',
            'تاریخچه و مدیریت مکالمات',
            'اشتراک ماهانه با درگاه ریالی (زیبال)',
            'رابط کاربری فارسی کامل',
            'پشتیبانی چند مدل در یک اکانت',
            'API اختصاصی برای توسعه‌دهندگان',
            'اپ موبایل (iOS و Android)',
        ],
        process: [
            'ثبت‌نام با ایمیل',
            'انتخاب پلن مناسب',
            'پرداخت ریالی از طریق درگاه',
            'شروع چت فوری — بدون نصب',
        ],
        technologies: [
            'React 18 + TypeScript',
            'Node.js + Express + Clean Architecture',
            'PostgreSQL 16 + Redis',
            'OpenRouter → OpenAI fallback',
            'Zibal Payment Gateway',
            'Docker Compose + PM2',
        ],
        useCases: [
            'نوشتن، ویرایش و بازنویسی محتوا',
            'کمک به برنامه‌نویسی و دیباگ',
            'خلاصه‌سازی مقالات و اسناد طولانی',
            'ترجمه و یادگیری زبان',
            'تحقیق و گردآوری اطلاعات',
            'طوفان ذهنی و تولید ایده',
        ],
        image: 'https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1200',
        pricing: 'از ۱۹۰,۰۰۰ تومان/ماه',
        primaryCta: 'شروع رایگان',
        secondaryCta: 'مشاهده پلن‌ها',
        relatedProducts: ['serverguard', 'watch-tower'],
    },
    {
        slug: 'serverguard',
        icon: Shield,
        name: 'ServerGuard',
        tagline: 'سرورتون داره خراب می‌شه — قبل از همه می‌دونیم',
        shortDescription: 'یه Agent سبک روی سرورت نصب کن. CPU بالا رفت؟ حمله brute force شروع شد؟ هوش مصنوعی تحلیل می‌کنه و قبل از کرش خبرت می‌ده.',
        fullDescription: 'ServerGuard ابزار مانیتورینگ سرور با تشخیص ناهنجاری هوشمنده. یه Agent سبک و static که با Go نوشته شده رو روی سرورت نصب می‌کنی — متریک‌های CPU، حافظه، دیسک و شبکه رو به API مرکزی می‌فرسته. وقتی CPU از ۹۰٪ گذشت، حمله brute force شناسایی شد یا هر ناهنجاری دیگه‌ای تشخیص داده شد، هوش مصنوعی فوری تحلیل می‌کنه و هشدار می‌فرسته — قبل از اینکه مشتری‌هات بفهمن.',
        problemsSolved: [
            'وقتی سرور خراب می‌شه اول مشتری‌ها خبردار می‌شن',
            'لاگ‌ها پر از نویزن و مشکل اصلی پیدا نمی‌شه',
            'حملات brute force رو دیر و به صورت تصادفی تشخیص می‌دید',
            'مانیتورینگ‌های موجود یا خیلی سنگینن یا خیلی ساده',
            'هیچ دیدی به وضعیت واقعی سرور در لحظه ندارید',
        ],
        targetBusinesses: [
            'DevOps Engineers',
            'System Administrators',
            'توسعه‌دهندگان SaaS',
            'صاحبان VPS',
            'تیم‌های زیرساخت',
        ],
        keyBenefits: [
            'تشخیص مشکل قبل از کرش',
            'AI به‌جای بررسی دستی لاگ',
            'Agent سبک — بدون overhead',
            'هشدار فوری به تلگرام و بله',
            'داشبورد real-time با SSE',
        ],
        features: [
            'Agent سبک با بایناری static (Go)',
            'مانیتورینگ CPU، RAM، دیسک، شبکه',
            'تشخیص ناهنجاری با هوش مصنوعی',
            'هشدار خودکار (تلگرام، بله، ایمیل)',
            'داشبورد real-time با SSE Streaming',
            'تاریخچه کامل متریک‌ها',
            'مدیریت چند سرور از یک داشبورد',
            'MCP Server برای اتصال AI Agent',
            'REST API برای یکپارچه‌سازی',
            'کنترل دسترسی چند کاربره',
        ],
        process: [
            'ثبت‌نام و ایجاد حساب',
            'دانلود Agent با یک دستور curl',
            'شروع مانیتورینگ خودکار',
            'دریافت هشدار در تلگرام',
        ],
        technologies: [
            'Go (static binary, no cgo)',
            'Hono + Node.js API',
            'BullMQ + Redis Queue',
            'PostgreSQL + Prisma',
            'Server-Sent Events (SSE)',
            'MCP Protocol 1.x',
        ],
        useCases: [
            'مانیتورینگ VPS و سرور اختصاصی',
            'تشخیص حملات brute force',
            'هشدار قبل از اتمام فضای دیسک',
            'بررسی وضعیت سرویس‌های حیاتی',
            'تحلیل مصرف منابع با AI',
            'مدیریت cluster چند سروری',
        ],
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
        pricing: 'تا ۳ سرور رایگان',
        primaryCta: 'شروع رایگان',
        secondaryCta: 'مستندات نصب',
        relatedProducts: ['watch-tower', 'ai-chat'],
    },
    {
        slug: 'watch-tower',
        icon: Bell,
        name: 'Watch Tower',
        tagline: 'از یه جا وصل کن، همه‌جا بفرست',
        shortDescription: 'هاب اعلان‌رسانی متن‌باز برای اپ‌ها و Agent های هوشمند. REST API یا MCP — اعلان‌ها به تلگرام، بله، Pushover، Gotify و ntfy می‌رن.',
        fullDescription: 'Watch Tower یه notification hub متن‌باز برای اپ‌های مدرن و AI Agent‌هاست. یه MCP Server داره که AI Agent‌ها مستقیم می‌تونن اعلان بفرستن، و یه REST API ساده برای هر اپ دیگه‌ای. اعلان‌ها fan-out می‌شن به هر کانالی که تنظیم کردید — تلگرام، بله، Pushover، Gotify و ntfy — و افزودن کانال جدید فقط ۵۰ خط کد نیاز داره.',
        problemsSolved: [
            'هر اپ باید جداگانه به تلگرام، بله و بقیه وصل بشه',
            'AI Agent‌ها روش استانداردی برای ارسال اعلان ندارن',
            'افزودن کانال جدید یعنی تغییر کد همه‌جا',
            'مدیریت کلیدهای API چند سرویس پیچیده‌ست',
            'تست اعلان‌ها بدون سرویس خارجی سخته',
        ],
        targetBusinesses: [
            'توسعه‌دهندگان بک‌اند',
            'AI Agent developers',
            'تیم‌های DevOps',
            'مهندسان زیرساخت',
        ],
        keyBenefits: [
            'یه جا وصل کن، همه‌جا ارسال کن',
            'MCP native برای AI Agent‌ها',
            'متن‌باز — کد مال خودته',
            'Deploy سریع با Docker یا Railway',
            'اضافه کردن کانال جدید با ۵۰ خط کد',
        ],
        features: [
            'MCP Server برای AI Agent‌ها',
            'REST API ساده',
            'Fan-out به تلگرام، بله، Pushover، Gotify، ntfy',
            'پشتیبانی از ارسال فایل',
            'مدیریت از طریق Telegram Bot',
            'Docker Compose آماده',
            'Deploy یک‌کلیکی روی Railway',
            'افزودن کانال سفارشی',
            'Smoke test بدون نیاز به شبکه',
        ],
        process: [
            'git clone و تنظیم .env',
            'npm start یا docker compose up',
            'وصل کردن اپ از طریق REST یا MCP',
            'دریافت اعلان در همه کانال‌ها',
        ],
        technologies: [
            'Node.js + TypeScript',
            'MCP Protocol 1.x',
            'REST API',
            'Telegram Bot API',
            'Bale Messenger API',
            'Pushover + Gotify + ntfy',
            'Docker Compose',
        ],
        useCases: [
            'اعلان AI Agent‌ها از طریق MCP',
            'ارسال alert سرور به تلگرام',
            'اطلاع‌رسانی رویدادهای CI/CD',
            'اعلان خطاهای اپ به تیم',
            'ارسال گزارش‌های دوره‌ای',
            'notification pipeline برای microservices',
        ],
        image: 'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1200',
        pricing: 'متن‌باز و رایگان',
        primaryCta: 'دانلود از GitHub',
        secondaryCta: 'مستندات',
        relatedProducts: ['serverguard', 'ai-chat'],
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
    return products.map((product) => product.slug);
}
