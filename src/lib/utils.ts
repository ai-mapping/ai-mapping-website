import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Функция для проверки номера телефона в российском формате
export function isValidRussianPhone(phone: string): boolean {
  // Регулярное выражение для проверки российского номера телефона
  const russianPhoneRegex =
    /^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return russianPhoneRegex.test(phone);
}

// Функция для форматирования российского номера телефона
export function formatRussianPhone(phone: string): string {
  // Убираем все нецифровые символы
  const digits = phone.replace(/\D/g, '');

  // Если номер начинается с 8 или 7, заменяем на +7
  let formattedPhone = digits;
  if (digits.startsWith('8') || digits.startsWith('7')) {
    formattedPhone = '+7' + digits.substring(1);
  } else if (!digits.startsWith('+')) {
    // Если номер не начинается с +, добавляем +7
    formattedPhone = '+7' + digits;
  }

  // Форматируем номер в виде +7 (XXX) XXX-XX-XX
  if (formattedPhone.length === 11) {
    return formattedPhone.replace(
      /(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/,
      '$1 ($2) $3-$4-$5',
    );
  }

  return formattedPhone;
}

// Генератор UTM-меток для отслеживания источников трафика
export function generateUtmParams(
  source: string,
  medium: string,
  campaign: string,
  content?: string,
  term?: string,
): string {
  const params = new URLSearchParams();
  params.append('utm_source', source);
  params.append('utm_medium', medium);
  params.append('utm_campaign', campaign);

  if (content) params.append('utm_content', content);
  if (term) params.append('utm_term', term);

  return `?${params.toString()}`;
}

// Преобразование строки в ЧПУ (человекопонятный URL)
export function slugify(text: string): string {
  // Транслитерация кириллицы
  const transliterate = (str: string): string => {
    const ru = 'щшчцюяёэждлорпавыфъхзьтсмиьнгкуебй';
    const en = 'shshchcyuyaezhcorpavifhztsminqkueby';
    let result = str.toLowerCase();

    for (let i = 0; i < ru.length; i++) {
      result = result.split(ru[i]).join(en[i]);
    }

    return result;
  };

  return transliterate(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// types/index.ts
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    telegram: string;
    whatsapp: string;
    phone: string;
  };
  region: {
    city: string;
    region: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  company: {
    name: string;
    address: string;
    inn: string;
    ogrn: string;
    email: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type PartCategory = {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
};

export type Part = {
  id: string;
  title: string;
  articleNumber: string;
  description: string;
  compatibleModels: string[];
  price?: number;
  inStock: boolean;
  imageUrl: string;
  isOriginal: boolean;
  category: string;
  deliveryTime: {
    min: number;
    max: number;
    unit: 'hour' | 'day' | 'week';
  };
};
