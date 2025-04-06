import Link from 'next/link';
import React from 'react';
import { siteConfig } from '@/config/site';
import {
  ShareIcon,
  YoutubeIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  WhatsAppIcon,
  TelegramIcon
} from '@/components/ui/icons';

// Define types for navigation links
type NavLink = {
  href: string;
  label: string;
};

// Define types for social links
type SocialLink = {
  href: string;
  icon: React.ReactNode;
  className: string;
};

// Define types for contact information
type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
};

// Define types for legal links
type LegalLink = {
  href: string;
  label: string;
};

// Main props interface
export type FooterProps = {
  aboutSection: {
    title: string;
    description: string;
    socialLinks: SocialLink[];
  };
  productSection: {
    title: string;
    links: NavLink[];
  };
  resourcesSection: {
    title: string;
    links: NavLink[];
  };
  contactSection: {
    title: string;
    contactInfo: ContactInfo;
  };
  copyright: string;
  legalLinks: LegalLink[];
};

// Helper function to get the current year for copyright
const getCurrentYear = (): number => new Date().getFullYear();

// Default props derived from site config
export const defaultFooterProps: FooterProps = {
  aboutSection: {
    title: 'About AI-Mapping',
    description: siteConfig.description,
    socialLinks: [
      // Add social media links
      {
        href: siteConfig.socialMedia.github.url,
        icon: <ShareIcon />,  // Replace with GitHub icon if available
        className: 'text-white hover:text-primary transition'
      },
      {
        href: siteConfig.socialMedia.twitter.url,
        icon: <ShareIcon />,  // Replace with Twitter icon if available
        className: 'text-white hover:text-primary transition'
      },
      {
        href: siteConfig.socialMedia.discord.url,
        icon: <YoutubeIcon />,  // Replace with Discord icon if available
        className: 'text-white hover:text-primary transition'
      }
    ]
  },
  productSection: {
    title: 'Products',
    links: [
      { href: '/core', label: 'Core Framework' },
      { href: '/pro', label: 'AI-Mapping Pro' },
      { href: '/enterprise', label: 'Enterprise' },
      { href: '/studio', label: 'AI-Mapping Studio' },
      { href: '/plugins', label: 'Plugins & Extensions' }
    ]
  },
  resourcesSection: {
    title: 'Resources',
    links: [
      { href: '/docs', label: 'Documentation' },
      { href: '/components', label: 'Component Library' },
      { href: '/examples', label: 'Examples' },
      { href: '/blog', label: 'Blog' },
      { href: '/community', label: 'Community' }
    ]
  },
  contactSection: {
    title: 'Contact',
    contactInfo: {
      address: siteConfig.company.address,
      phone: siteConfig.company.phone,
      email: siteConfig.company.email,
      socialLinks: [
        // Only include WhatsApp if link is available
        ...(siteConfig.links.whatsapp ? [{
          href: siteConfig.links.whatsapp,
          icon: <WhatsAppIcon />,
          className: 'text-gray-300 hover:text-primary transition'
        }] : []),
        // Only include Telegram if enabled
        ...(siteConfig.socialMedia.telegram.enabled ? [{
          href: siteConfig.socialMedia.telegram.url,
          icon: <TelegramIcon />,
          className: 'text-gray-300 hover:text-primary transition'
        }] : [])
      ]
    }
  },
  copyright: `© ${getCurrentYear()} ${siteConfig.company.name}. All rights reserved.`,
  legalLinks: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sitemap.xml', label: 'Sitemap' }
  ]
};

const Footer = ({
  aboutSection = defaultFooterProps.aboutSection,
  productSection = defaultFooterProps.productSection,
  resourcesSection = defaultFooterProps.resourcesSection,
  contactSection = defaultFooterProps.contactSection,
  copyright = defaultFooterProps.copyright,
  legalLinks = defaultFooterProps.legalLinks
}: Partial<FooterProps>) => {
  return (
    <footer className="bg-surface text-white pt-12 pb-6 border-t border-neutral-dark">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">{aboutSection.title}</h3>
            <p className="text-neutral mb-6">
              {aboutSection.description}
            </p>
            <div className="flex space-x-4">
              {aboutSection.socialLinks.map((link, index) => (
                <Link
                  key={`about-social-${index}`}
                  href={link.href}
                  className="text-primary hover:text-primary-light transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">{productSection.title}</h3>
            <ul className="space-y-3">
              {productSection.links.map((link, index) => (
                <li key={`product-link-${index}`}>
                  <Link
                    href={link.href}
                    className="text-neutral hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">{resourcesSection.title}</h3>
            <ul className="space-y-3">
              {resourcesSection.links.map((link, index) => (
                <li key={`resource-link-${index}`}>
                  <Link
                    href={link.href}
                    className="text-neutral hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">{contactSection.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <LocationIcon className="h-5 w-5 mt-0.5 mr-3 text-accent flex-none" />
                <span className="text-neutral text-sm">
                  {contactSection.contactInfo.address}
                </span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mt-0.5 mr-3 text-accent flex-none" />
                <span className="text-neutral">{contactSection.contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <EmailIcon className="h-5 w-5 mt-0.5 mr-3 text-accent flex-none" />
                <span className="text-neutral">{contactSection.contactInfo.email}</span>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                {contactSection.contactInfo.socialLinks.map((link, index) => (
                  <Link
                    key={`contact-social-${index}`}
                    href={link.href}
                    className="text-primary hover:text-primary-light transition-colors duration-300"
                  >
                    {link.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-dark pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-neutral text-sm mb-4 md:mb-0">
              {copyright}
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={`legal-link-${index}`}
                  href={link.href}
                  className="text-neutral text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;