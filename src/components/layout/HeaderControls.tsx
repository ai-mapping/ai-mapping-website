'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PhoneIcon from '@/components/ui/icons/PhoneIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import EmailIcon from '@/components/ui/icons/EmailIcon';
import { WhatsAppIcon, TelegramIcon } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';

// Configuration for enabling/disabling elements
const controlsConfig = {
  desktop: {
    showPhone: true,
    showEmail: true,
    showSocial: false,
    showContactButton: false,
  },
  mobile: {
    showPhone: false,
    showEmail: false,
    showSocial: false,
    showContactButton: false,
    showMenuButton: true,
  }
};

const HeaderControls = () => {
  // State for tracking mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Here you would typically toggle a mobile menu's visibility
  };

  // Phone data from siteConfig
  const phone = {
    number: `tel:${siteConfig.company.phone.replace(/\D/g, '')}`, // Remove non-digits
    formatted: siteConfig.company.phone,
  };

  // Social links from siteConfig
  const socialLinks = [
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
  ];

  return (
    <div className="flex items-center space-x-4">
      {/* Email link */}
      {controlsConfig.desktop.showEmail && (
        <Link
          href={`mailto:${siteConfig.company.email}`}
          className="hidden md:flex items-center text-white hover:text-primary font-medium transition-colors duration-300"
        >
          <EmailIcon className="h-5 w-5 mt-0.5 mr-2 text-primary" />
          {siteConfig.company.email}
        </Link>
      )}

      {/* Phone link */}
      {controlsConfig.desktop.showPhone && (
        <Link
          href={phone.number}
          className="hidden md:flex items-center text-white hover:text-primary font-medium transition-colors duration-300"
        >
          <PhoneIcon className="h-5 w-5 mt-0.5 mr-2 text-primary" />
          {phone.formatted}
        </Link>
      )}

      {/* Social links - desktop */}
      {controlsConfig.desktop.showSocial && (
        <div className="hidden md:flex space-x-3">
          {socialLinks.map((link, index) => (
            <Link
              key={`social-link-desktop-${index}`}
              href={link.href}
              className="p-2 rounded-lg hover:bg-neutral-light text-primary hover:text-primary-light transition-colors duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      )}

      {/* Social links - mobile */}
      {controlsConfig.mobile.showSocial && (
        <div className="md:hidden flex space-x-3">
          {socialLinks.map((link, index) => (
            <Link
              key={`social-link-mobile-${index}`}
              href={link.href}
              className="p-2 rounded-lg hover:bg-neutral-light text-primary hover:text-primary-light transition-colors duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      )}

      {/* Contact button - desktop */}
      {controlsConfig.desktop.showContactButton && (
        <Link
          href="/contact"
          className="hidden md:block bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-light hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
      )}

      {/* Contact button - mobile */}
      {controlsConfig.mobile.showContactButton && (
        <Link
          href="/contact"
          className="md:hidden bg-primary text-black font-bold px-4 py-2 rounded-lg hover:bg-primary-light transition-colors duration-300"
        >
          Contact
        </Link>
      )}

      {/* Mobile menu button */}
      {controlsConfig.mobile.showMenuButton && (
        <button 
          className="md:hidden text-primary hover:text-primary-light p-2 rounded-lg hover:bg-neutral-light transition-colors duration-300" 
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </button>
      )}
    </div>
  );
};

export default HeaderControls;