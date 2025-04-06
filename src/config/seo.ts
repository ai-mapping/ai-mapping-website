import { siteConfig } from "./site";

export const defaultSeo = {
  titleTemplate: '%s | ' + siteConfig.companyName,
  defaultTitle: siteConfig.companyName,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.companyName,
    title: siteConfig.companyName,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.companyName,
      },
    ],
  },
  twitter: {
    handle: '@aimappingdev',
    site: '@aimappingdev',
    cardType: 'summary_large_image',
  },
  languageAlternates: [
    {
      hrefLang: 'en-US',
      href: siteConfig.url,
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#4F46E5', // Indigo color for AI-Mapping
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/feed.xml',
    },
  ],
};