import type { LucideIcon } from 'lucide-react';
import { Cloud, Code2, GitBranch, Plug, MessageSquare } from 'lucide-react';

export interface Solution {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  shortText: string;
  fullText: string;
  problemsSolved?: string[];
  useCases?: string[];
  keyBenefits?: string[];
  features?: string[];
  benefits?: string[];
  process?: string[];
  technologies?: string[];
  pricing?: string;
  relatedSolutions?: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'cloud-infrastructure-hosting',
    icon: Cloud,
    title: 'زیرساخت ابری و هاستینگ',
    tagline: 'سرورتون رو به ما بسپارید',
    shortText: 'زیرساخت ابری مقیاس‌پذیر با ۹۹٫۹٪ آپتایم. سرورها، امنیت و مانیتورینگ — همه با هم.',
    fullText: 'زیرساخت ابری مقیاس‌پذیر با ۹۹٫۹٪ آپتایم. سرورها، امنیت و مانیتورینگ — همه با هم. دیگه نیازی به تیم زیرساخت یا نگرانی درباره ترافیک بالا نیست. پشتیبان‌گیری خودکار، مقیاس‌پذیری آنی و امنیت سطح بانکی. برنامه‌هاتون تو بهترین سرورهای داخل ایران اجرا می‌شه.',
    problemsSolved: [
      'هزینه سرور و نگهداری زیرساخت سر به فلک کشیده',
      'سایت تو ساعت‌های اوج ترافیک از دسترس خارج می‌شه',
      'مقیاس‌پذیری محدود — ترافیک بالا مساوی با کرش',
      'نگرانی درباره امنیت و از دست رفتن داده‌ها',
      'مدیریت سرور وقت تیم فنی رو می‌گیره',
    ],
    useCases: [
      'هاستینگ برنامه‌های وب و موبایل',
      'پایگاه داده‌های سنگین سازمانی',
      'زیرساخت پلتفرم‌های SaaS',
      'فروشگاه‌های اینترنتی پربازدید',
      'API و میکروسرویس‌ها',
    ],
    keyBenefits: [
      '۹۹٫۹٪ آپتایم تضمین‌شده',
      'مقیاس‌پذیری خودکار و آنی',
      'امنیت سطح بانکی',
      'کاهش هزینه‌های زیرساخت تا ۶۰٪',
    ],
    features: [
      '۹۹٫۹٪ آپتایم تضمین‌شده',
      'پشتیبان‌گیری خودکار روزانه',
      'مقیاس‌پذیری خودکار با ترافیک',
      'امنیت پیشرفته و رمزنگاری',
      'پشتیبانی ۲۴/۷',
      'مانیتورینگ مداوم و هشدار فوری',
      'CDN یکپارچه',
      'SSL رایگان',
    ],
    benefits: [
      'کاهش هزینه‌های زیرساخت',
      'افزایش قابلیت اطمینان',
      'مقیاس‌پذیری بدون دردسر',
      'امنیت داده‌ها تضمین شده',
    ],
    process: [
      'بررسی وضعیت فعلی زیرساخت',
      'طراحی معماری ابری',
      'مهاجرت برنامه‌ها',
      'تنظیم امنیت و مانیتورینگ',
      'بهینه‌سازی عملکرد و هزینه',
      'پشتیبانی و نگهداری',
    ],
    technologies: [
      'Docker & Kubernetes',
      'AWS / Azure / Google Cloud',
      'Nginx & Load Balancers',
      'Redis & Caching',
      'PostgreSQL & MySQL',
      'MongoDB & NoSQL',
      'CI/CD Pipelines',
      'Monitoring (Prometheus, Grafana)',
    ],
    pricing: 'از ۲,۹۹۰,۰۰۰ تومان/ماه',
    relatedSolutions: ['devops-cicd', 'api-development-integration', 'technical-consulting'],
  },
  {
    slug: 'custom-software-development',
    icon: Code2,
    title: 'توسعه نرم‌افزار سفارشی',
    tagline: 'نرم‌افزاری که دقیقاً همون‌چیزیه که نیاز دارید',
    shortText: 'نرم‌افزار سفارشی از صفر — ساخته شده دقیقاً برای فرآیندهای شما. نه بیشتر، نه کمتر.',
    fullText: 'نرم‌افزار سفارشی از صفر — ساخته شده دقیقاً برای فرآیندهای شما. نه بیشتر، نه کمتر. اکثر نرم‌افزارهای آماده یا خیلی زیاد دارن (و گرونن) یا کم دارن (و به درد نمی‌خورن). ما راهکاری می‌سازیم که دقیقاً با کسب‌وکار شما هماهنگ باشه. از جلسه اول تا تحویل و بعدش — همراهتون هستیم.',
    problemsSolved: [
      'نرم‌افزارهای آماده زیاد دارن ولی دقیقاً اون چیزی که می‌خواید رو ندارن',
      'فرآیندهای دستی وقت تیم رو می‌گیره',
      'سیستم‌های مختلف به هم وصل نیستن',
      'هر تغییری تو نرم‌افزار فعلی باید ماه‌ها منتظر بمونید',
      'محدودیت‌های نرم‌افزارهای آماده رشدتون رو کُند کرده',
    ],
    useCases: [
      'سیستم‌های مدیریت اختصاصی',
      'پورتال‌های سازمانی',
      'اپ موبایل اختصاصی',
      'سیستم‌های ERP/CRM سفارشی',
      'پلتفرم‌های فروشگاهی',
    ],
    keyBenefits: [
      'دقیقاً همون چیزی که نیاز دارید',
      'مالکیت کامل کد — وابسته به کسی نیستید',
      'قابلیت توسعه نامحدود',
      'سازگاری کامل با فرآیندهاتون',
    ],
    features: [
      'تحلیل دقیق نیازها',
      'توسعه با جدیدترین تکنولوژی‌ها',
      'تست جامع و QA',
      'مستندسازی کامل',
      'پشتیبانی و نگهداری',
      'آموزش تیم شما',
      'UI/UX کاربرپسند',
      'اتصال به سیستم‌های فعلی',
    ],
    benefits: [
      'نرم‌افزار دقیقاً مطابق نیاز شما',
      'فرآیندهاتون رو بهینه می‌کنه',
      'قابل توسعه و ارتقا',
      'کد مال خودته',
    ],
    process: [
      'جلسه و فهمیدن نیازها',
      'طراحی معماری و UI/UX',
      'توسعه مرحله‌به‌مرحله',
      'تست و تضمین کیفیت',
      'راه‌اندازی',
      'آموزش و پشتیبانی',
    ],
    technologies: [
      'React, Vue, Angular',
      'Node.js, Python, .NET',
      'PostgreSQL, MongoDB',
      'Docker & Kubernetes',
      'REST & GraphQL APIs',
      'Microservices Architecture',
      'CI/CD & DevOps',
      'Cloud Platforms',
    ],
    pricing: 'بر اساس پروژه',
    relatedSolutions: ['devops-cicd', 'api-development-integration', 'cloud-infrastructure-hosting'],
  },
  {
    slug: 'devops-cicd',
    icon: GitBranch,
    title: 'DevOps و CI/CD',
    tagline: 'از کد تا سرور — خودکار و بدون خطا',
    shortText: 'پایپ‌لاین استقرار خودکار. تغییرات سریع‌تر برن، خطاهای کمتر، بازگشت راحت.',
    fullText: 'پایپ‌لاین استقرار خودکار. تغییرات سریع‌تر برن، خطاهای کمتر، بازگشت راحت. دیگه لازم نیست نگران استقرار دستی و پرخطا باشید. با CI/CD، هر بار کامیت بشه، تست اجرا می‌شه و اگه همه‌چیز اوکی بود، خودکار میره رو سرور. ما پایپ‌لاین‌های کامل DevOps طراحی می‌کنیم.',
    problemsSolved: [
      'استقرار دستی هم باگ داره هم استرس',
      'از تغییر تا تحویل روزها طول می‌کشه',
      'تستی وجود نداره — کد بره رو سرور، معلوم می‌شه',
      'اگه مشکلی پیش بیاد، برگشتن به نسخه قبلی کابوسه',
      'هماهنگی بین تیم توسعه و عملیات اصلاً وجود نداره',
    ],
    useCases: [
      'استقرار خودکار برنامه‌های وب',
      'پایپ‌لاین CI/CD برای تیم توسعه',
      'مدیریت کانتینر و Kubernetes',
      'Infrastructure as Code',
      'مانیتورینگ و لاگینگ',
    ],
    keyBenefits: [
      'تحویل تغییرات تو دقیقه، نه روز',
      'تست خودکار = کیفیت بالاتر',
      'خطای استقرار نزدیک صفر',
      'بازگشت به نسخه قبلی با یه کلیک',
    ],
    features: [
      'پایپ‌لاین CI/CD کامل',
      'تست خودکار در هر مرحله',
      'استقرار بدون توقف',
      'مانیتورینگ و لاگینگ',
      'مدیریت کانتینر و Kubernetes',
      'Infrastructure as Code',
      'بررسی امنیت (SAST/DAST)',
      'گزارش عملکرد',
    ],
    benefits: [
      'کاهش زمان تحویل',
      'کیفیت بالاتر کد',
      'خطای کمتر',
      'بازگشت سریع',
    ],
    process: [
      'بررسی فرآیند فعلی',
      'طراحی پایپ‌لاین CI/CD',
      'پیاده‌سازی تست خودکار',
      'تنظیم استقرار خودکار',
      'مانیتورینگ و هشدار',
      'آموزش و مستندسازی',
    ],
    technologies: [
      'GitLab CI, GitHub Actions, Jenkins',
      'Docker & Kubernetes',
      'Terraform & Ansible',
      'Prometheus & Grafana',
      'ELK Stack',
      'SonarQube',
      'Helm & Kustomize',
      'AWS CodePipeline, Azure DevOps',
    ],
    pricing: 'از ۴,۹۹۰,۰۰۰ تومان/ماه',
    relatedSolutions: ['cloud-infrastructure-hosting', 'custom-software-development', 'api-development-integration'],
  },
  {
    slug: 'api-development-integration',
    icon: Plug,
    title: 'توسعه و یکپارچه‌سازی API',
    tagline: 'سیستم‌ها رو به هم وصل کنید',
    shortText: 'APIهای سریع و امن. از درگاه پرداخت تا سرویس ابری — همه رو به هم وصل می‌کنیم.',
    fullText: 'APIهای سریع و امن. از درگاه پرداخت تا سرویس ابری — همه رو به هم وصل می‌کنیم. اگه سیستم‌هاتون جدا افتاده‌ان و داده‌ها بینش جابجا نمیشه، مشکل از APIهاست. ما APIهایی می‌سازیم که سریع، امن و مستندسازی‌شده هستن. از درگاه‌های پرداخت ایرانی تا سرویس‌های بین‌المللی.',
    problemsSolved: [
      'سیستم‌ها به هم وصل نیستن و داده‌ها آپدیت نمی‌شه',
      'اتصال دستی به سرویس‌ها وقت‌گیره',
      'امنیت تبادل داده رعایت نمیشه',
      'APIها مستند ندارن و هیچ‌کس نمی‌فهمه',
      'عملکرد ضعیف تو ترافیک بالا',
    ],
    useCases: [
      'اتصال به درگاه‌های پرداخت',
      'اتصال به سرویس‌های ابری',
      'یکپارچه‌سازی با حسابداری',
      'اتصال به پیامک و ایمیل',
      'API Gateway برای میکروسرویس‌ها',
    ],
    keyBenefits: [
      'سیستم‌ها سریع وصل می‌شن',
      'قابلیت اطمینان بالا',
      'کاهش هزینه یکپارچه‌سازی',
      'امنیت سطح سازمانی',
    ],
    features: [
      'طراحی RESTful API',
      'GraphQL برای نیازهای پیچیده',
      'اتصال به سرویس‌های ثالث',
      'احراز هویت و امنیت',
      'مستندسازی کامل',
      'مدیریت ترافیک',
      'Rate Limiting',
      'API Gateway و Load Balancing',
    ],
    benefits: [
      'اتصال سریع سیستم‌ها',
      'کارایی بیشتر',
      'مقیاس‌پذیری',
      'امنیت بالا',
    ],
    process: [
      'فهمیدن نیازهای یکپارچه‌سازی',
      'طراحی معماری API',
      'توسعه و پیاده‌سازی',
      'تست امنیت و عملکرد',
      'مستندسازی',
      'استقرار و پشتیبانی',
    ],
    technologies: [
      'REST & GraphQL',
      'Node.js, Python, .NET Core',
      'OAuth 2.0 & JWT',
      'API Gateway (Kong, AWS)',
      'Swagger/OpenAPI',
      'Postman & API Testing',
      'Redis & Caching',
      'Webhooks & Event-Driven',
    ],
    pricing: 'از ۳,۹۹۰,۰۰۰ تومان/ماه',
    relatedSolutions: ['custom-software-development', 'devops-cicd', 'cloud-infrastructure-hosting'],
  },
  {
    slug: 'technical-consulting',
    icon: MessageSquare,
    title: 'مشاوره فنی',
    tagline: 'مسیر درست رو پیدا کنید',
    shortText: 'راهنمایی تخصصی برای تصمیم‌گیری‌های فنی. قبلاً این راه رو رفتیم.',
    fullText: 'راهنمایی تخصصی برای تصمیم‌گیری‌های فنی. قبلاً این راه رو رفتیم. اگه نمی‌دونید کدوم تکنولوژی مناسبته، زیرساختتون بهینه نیست یا می‌خواید دیجیتال بشید — ما کمک می‌کنیم. نه فروش، واقعاً مشاوره. تصمیم با شماست.',
    problemsSolved: [
      'نمی‌دونید کدوم تکنولوژی رو انتخاب کنید',
      'معماری سیستم پیچیده و ناکارآمد شده',
      'هزینه‌های فنی بالا و بهینه‌سازی نشده',
      'ریسک پروژه‌های فناوری بالاست',
      'نداشتن نقشه راه واضح برای تحول دیجیتال',
    ],
    useCases: [
      'مشاوره معماری سیستم',
      'بهینه‌سازی زیرساخت فعلی',
      'نقشه راه تحول دیجیتال',
      'بررسی امنیت',
      'انتخاب تکنولوژی',
    ],
    keyBenefits: [
      'کاهش ریسک پروژه',
      'بهینه‌سازی هزینه‌ها',
      'تصمیم‌گیری با تجربه واقعی',
      'دسترسی به بهترین روش‌ها',
    ],
    features: [
      'مشاوره معماری سیستم',
      'بهینه‌سازی زیرساخت',
      'نقشه راه تحول دیجیتال',
      'بررسی امنیت',
      'مشاوره انتخاب تکنولوژی',
      'برنامه‌ریزی پروژه',
      'مشاوره DevOps',
      'بررسی عملکرد',
    ],
    benefits: [
      'تصمیم‌گیری آگاهانه',
      'کاهش ریسک',
      'صرفه‌جویی در هزینه',
      'بهترین روش‌ها',
    ],
    process: [
      'جلسه اولیه',
      'بررسی وضعیت فعلی',
      'ارائه راهکارها',
      'انتخاب بهترین مسیر',
      'پیاده‌سازی',
      'نظارت و بهینه‌سازی',
    ],
    technologies: [
      'Architecture Patterns',
      'Cloud Architecture',
      'Microservices & Monolith',
      'Security Best Practices',
      'Performance Optimization',
      'DevOps Methodologies',
      'Agile & Scrum',
      'Technology Stack Evaluation',
    ],
    pricing: 'بر اساس پروژه',
    relatedSolutions: ['custom-software-development', 'devops-cicd', 'cloud-infrastructure-hosting'],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

