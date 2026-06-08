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
        tagline: 'ChatGPT فارسی — بدون VPN، بدون پرداخت ارزی',
        shortDescription: 'دسترسی فارسی به بهترین مدل‌های هوش مصنوعی دنیا؛ GPT-4، Claude و Gemini با اشتراک ریالی و پشتیبانی فارسی.',
        fullDescription: 'برای استفاده از مدل‌های هوش مصنوعی نباید درگیر VPN، پرداخت ارزی و رابط‌های ناآشنا باشید. chatgpt.ir همین مسأله را حل می‌کند: یک پلتفرم چت هوشمند فارسی با دسترسی به مدل‌هایی مثل GPT-4، Claude و Gemini، اشتراک ماهانه ریالی، رابط کاربری فارسی و داده‌هایی که در ایران می‌مانند. هزاران کاربر هر روز از آن استفاده می‌کنند.',
        problemsSolved: [
            'برای هر بار استفاده از ChatGPT باید VPN روشن کنید',
            'پرداخت ارزی برای اشتراک ChatGPT و Claude دسترسی سختی دارد',
            'رابط‌های انگلیسی برای تیم‌های فارسی‌زبان کند و خسته‌کننده است',
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
        tagline: 'مشکل سرور را قبل از بحران می‌بینیم',
        shortDescription: 'یک Agent سبک روی سرور نصب می‌شود؛ مصرف CPU، حافظه، دیسک و شبکه را می‌سنجد، ناهنجاری‌ها را با AI تحلیل می‌کند و قبل از بحران هشدار می‌دهد.',
        fullDescription: 'ServerGuard ابزار مانیتورینگ سرور با تشخیص ناهنجاری هوشمند است. یک Agent سبک و static که با Go نوشته شده روی سرور نصب می‌شود و متریک‌های CPU، حافظه، دیسک و شبکه را به API مرکزی می‌فرستد. وقتی مصرف منابع غیرعادی می‌شود، حمله brute force شناسایی می‌شود یا نشانه‌ای از اختلال دیده می‌شود، هوش مصنوعی تحلیل می‌کند و هشدار می‌فرستد؛ پیش از آنکه مشتری‌ها متوجه مشکل شوند.',
        problemsSolved: [
            'وقتی سرور خراب می‌شود، معمولاً مشتری‌ها زودتر از تیم فنی خبر می‌شوند',
            'لاگ‌ها پر از نویز است و پیدا کردن مشکل اصلی زمان می‌برد',
            'حملات brute force دیر و گاهی تصادفی تشخیص داده می‌شوند',
            'مانیتورینگ‌های موجود یا بیش از حد سنگین‌اند یا بیش از حد ساده',
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
            'تحلیل AI به‌جای بررسی دستی لاگ‌ها',
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
        tagline: 'از یک نقطه وصل کنید، همه‌جا اعلان بفرستید',
        shortDescription: 'هاب اعلان‌رسانی متن‌باز برای اپلیکیشن‌ها و Agent های هوشمند. با REST API یا MCP، اعلان‌ها به تلگرام، بله، Pushover، Gotify و ntfy می‌رسند.',
        fullDescription: 'Watch Tower یک notification hub متن‌باز برای اپلیکیشن‌های مدرن و AI Agent هاست. یک MCP Server دارد تا Agent ها مستقیم اعلان بفرستند، و یک REST API ساده برای هر اپلیکیشن دیگر. اعلان‌ها به کانال‌هایی که تنظیم کرده‌اید fan-out می‌شوند؛ تلگرام، بله، Pushover، Gotify و ntfy. افزودن کانال جدید هم ساختار مشخصی دارد و معمولاً با حدود ۵۰ خط کد انجام می‌شود.',
        problemsSolved: [
            'هر اپلیکیشن جداگانه به تلگرام، بله و کانال‌های دیگر وصل می‌شود',
            'AI Agent ها روش استانداردی برای ارسال اعلان ندارند',
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
            'افزودن کانال جدید با ساختاری ساده و قابل توسعه',
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
