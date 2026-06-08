const siteUrl = 'https://tdh.ir';

export interface OrganizationStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
    addressRegion: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  }[];
  sameAs: string[];
}

export interface WebSiteStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface BreadcrumbStructuredData {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

export interface ProductStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image?: string;
  brand: {
    '@type': string;
    name: string;
  };
  offers?: {
    '@type': string;
    priceCurrency: string;
    price: string;
    availability: string;
  };
}

export const organizationStructuredData: OrganizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TDH - Takin Data Hooshmand',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'ساخت و تجاری‌سازی نرم‌افزارها و خدمات کاربردی',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressLocality: 'تهران',
    addressRegion: 'تهران',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+98-21-28428084',
      contactType: 'پشتیبانی',
      email: 'support@tdh.ir',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+98-21-28428084',
      contactType: 'فروش',
      email: 'sales@tdh.ir',
    },
  ],
  sameAs: [
    'https://twitter.com/TDH',
    'https://linkedin.com/company/tdh',
    'https://github.com/tdh',
  ],
};

export const websiteStructuredData: WebSiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TDH',
  url: siteUrl,
  description: 'ساخت و تجاری‌سازی نرم‌افزارها و خدمات کاربردی',
  inLanguage: 'fa-IR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export function createBreadcrumbStructuredData(
  items: { name: string; url: string }[]
): BreadcrumbStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function createProductStructuredData(
  name: string,
  description: string,
  image?: string,
  price?: string
): ProductStructuredData {
  const data: ProductStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'TDH',
    },
  };

  if (image) {
    data.image = image;
  }

  if (price) {
    data.offers = {
      '@type': 'Offer',
      priceCurrency: 'IRR',
      price,
      availability: 'https://schema.org/InStock',
    };
  }

  return data;
}

export function createArticleStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  modifiedTime?: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${siteUrl}/og-image.jpg`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Organization',
      name: 'TDH',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TDH',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}
