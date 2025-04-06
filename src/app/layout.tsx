import type { Metadata, Viewport } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import RootLayout from '@/components/layout/RootLayout';
import { siteConfig } from '@/config/site';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ai-mapping.dev'),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  other: {
    'og:logo': '/images/ai-mapping-logo.png',
  },
  keywords: [
    'AI framework',
    'frontend development',
    'content-first development',
    'React components',
    'AI code generation',
    'marketing websites',
    'landing pages',
    'developer tools',
    'frontend automation',
    'Next.js',
  ],
  authors: [
    {
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.company.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.companyName,
    description: siteConfig.description,
    siteName: siteConfig.companyName,
    images: [
      {
        url: 'https://www.ai-mapping.dev/images/ai-mapping-logo.png',
        width: 800,
        height: 600,
        alt: siteConfig.companyName,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#4F46E5', // Indigo color for AI-Mapping
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return children;
  return <RootLayout>{children}</RootLayout>;
}