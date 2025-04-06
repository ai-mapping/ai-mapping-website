import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { siteConfig } from '@/config/site';

// Import the client component for interactive controls
import HeaderControls from './HeaderControls';
import { WhatsAppIcon, TelegramIcon } from '@/components/ui/icons';

// Define types for navigation items
type NavItem = {
  href: string;
  label: string;
};

// Define types for social links
type SocialLink = {
  href: string;
  icon: React.ReactNode;
  className: string;
};

// Main props interface (without callback handlers)
export type HeaderProps = {
  logo: {
    fullName: string;
    image: string;
    textImage: string;
  };
  navItems: NavItem[];
  phone: {
    number: string;
    formatted: string;
  };
  socialLinks: SocialLink[];
  contactButtonText: string;
};

// Helper function to generate a short name from the site name
const getShortName = (name: string): string => {
  // Try to extract capital letters if there are any
  const capitalLetters = name.match(/[A-Z]/g);
  if (capitalLetters && capitalLetters.length >= 2) {
    return capitalLetters.join('');
  }

  // Otherwise take the first 3 characters
  return name.substring(0, 3).toUpperCase();
};

const shortName = getShortName(siteConfig.companyName);

// Default props with values from site config
export const defaultHeaderProps: HeaderProps = {
  logo: {
    fullName: siteConfig.companyName,
    image: '/images/logo/ai-mapping-logo.png',
    textImage: '/images/logo/companyName-text.png',
  },
  // Navigation items - could be moved to site.ts config in the future for greater flexibility
  navItems: [
    { href: '/docs', label: 'Documentation' },
    // { href: '/components', label: 'Components' },
    { href: '/examples', label: 'Examples' },
    // { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ],
  phone: {
    number: `tel:${siteConfig.company.phone.replace(/\D/g, '')}`, // Remove non-digits
    formatted: siteConfig.company.phone,
  },
  socialLinks: [
    // Only add WhatsApp if it exists in config
    ...(siteConfig.links.whatsapp
      ? [
          {
            href: siteConfig.links.whatsapp,
            icon: <WhatsAppIcon />,
            className:
              'text-green-600 p-1 rounded hover:bg-green-100 transition',
          },
        ]
      : []),

    // Only add Telegram if it's enabled in config
    ...(siteConfig.socialMedia.telegram.enabled
      ? [
          {
            href: siteConfig.socialMedia.telegram.url,
            icon: <TelegramIcon />,
            className: 'text-blue-500 p-1 rounded hover:bg-blue-100 transition',
          },
        ]
      : []),
  ],
  contactButtonText: 'Contact Us',
};

const Header = ({
  logo = defaultHeaderProps.logo,
  navItems = defaultHeaderProps.navItems,
}: Partial<Pick<HeaderProps, 'logo' | 'navItems'>>) => {

  return (
    <header className="fixed w-full top-0 z-50 bg-background border-b border-neutral-dark">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center h-4">
          <Link
            href="/"
            className="self-start flex items-center relative -top-5 z-10 p-2"
          >
            <div className="absolute left-0 right-0 top-0 bottom-0 rounded-lg bg-black shadow-md" />
            <div className="relative">
              <Image
                src={logo.image}
                alt={logo.fullName}
                width={110}
                height={110}
                className="h-auto object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-10 text-primary font-bold text-xl rounded-lg opacity-0 fallback-logo">
                AI
              </div>
            </div>
          </Link>
          <Link href="/" className="flex items-center relative z-10 p-2">
            <div className="relative">
              <Image
                src={logo.textImage}
                alt={shortName}
                width={180}
                height={40}
                className="h-auto object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-center opacity-0 fallback-logo">
                <span className="font-semibold text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">AI-Mapping</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex ml-10">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={`nav-item-${index}`}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Use the client component for interactive controls */}
        <HeaderControls />
      </div>
    </header>
  );
};

export default Header;