import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const changeFrequency:
    | 'daily'
    | 'weekly'
    | 'always'
    | 'hourly'
    | 'monthly'
    | 'yearly'
    | 'never' = 'daily';
  const routes = ['', '/catalog', '/about', '/contacts'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
