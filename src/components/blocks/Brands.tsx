'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';

// Define types for brand items
export type BrandItem = {
  name: string;
  isLarge?: boolean;
  logoSrc: string; // Changed to string for URL-based images
  logoAlt?: string; // Alt text for accessibility
  logoHeight: number;
  logoWidth?: number; // Optional, Next.js can calculate from aspect ratio
  href: string; // Link to catalog section
};

// Main props interface
export type BrandsProps = {
  heading: string;
  largeBrands: BrandItem[];
  smallBrands: BrandItem[];
};

// Default props
export const defaultBrandsProps: BrandsProps = {
  heading: 'Compatible with Leading Frontend Frameworks',
  largeBrands: [
    {
      name: 'React',
      isLarge: true,
      logoSrc: '/images/placeholders/react-logo.svg',
      logoAlt: 'React logo',
      logoHeight: 70,
      href: '/frameworks/react'
    },
    {
      name: 'Next.js',
      isLarge: true,
      logoSrc: '/images/placeholders/nextjs-logo.png',
      logoAlt: 'Next.js logo',
      logoHeight: 80,
      href: '/frameworks/nextjs'
    }
  ],
  smallBrands: [
    {
      name: 'Tailwind CSS',
      logoSrc: '/images/placeholders/tailwind-logo.svg',
      logoAlt: 'Tailwind CSS logo',
      logoHeight: 40,
      href: '/tools/tailwind'
    },
    {
      name: 'TypeScript',
      logoSrc: '/images/placeholders/typescript-logo.svg',
      logoAlt: 'TypeScript logo',
      logoHeight: 40,
      href: '/tools/typescript'
    },
    {
      name: 'Gatsby',
      logoSrc: '/images/placeholders/gatsby-logo.svg',
      logoAlt: 'Gatsby logo',
      logoHeight: 40,
      href: '/frameworks/gatsby'
    },
    {
      name: 'Remix',
      logoSrc: '/images/placeholders/remix-logo.svg',
      logoAlt: 'Remix logo',
      logoHeight: 40,
      href: '/frameworks/remix'
    },
    {
      name: 'Astro',
      logoSrc: '/images/placeholders/astro-logo.svg',
      logoAlt: 'Astro logo',
      logoHeight: 40,
      href: '/frameworks/astro'
    }
  ]
};

const Brands = ({
  heading = defaultBrandsProps.heading,
  largeBrands = defaultBrandsProps.largeBrands,
  smallBrands = defaultBrandsProps.smallBrands
}: Partial<BrandsProps>) => {
  // State to track image loading errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Handle image error
  const handleImageError = (brandName: string) => {
    console.log(`Failed to load logo for: ${brandName}`);
    setImageErrors(prev => ({
      ...prev,
      [brandName]: true
    }));
  };

  return (
    <Section background="surface" paddingY="md" containerWidth="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {largeBrands.map((brand, index) => (
            <div key={`large-brand-${index}`} className="w-1/3 md:w-auto">
              <Link
                href={brand.href}
                className="block transition-all duration-300 hover:scale-105 hover:shadow-lg"
                title={`View details for ${brand.name}`}
              >
                <div className="bg-neutral-light p-2 rounded-lg flex items-center justify-center h-20 md:h-24 md:w-48 border border-neutral-dark shadow-md">
                  {!imageErrors[brand.name] ? (
                    <Image
                      src={brand.logoSrc}
                      alt={brand.logoAlt || `${brand.name} logo`}
                      height={brand.logoHeight}
                      width={brand.logoWidth || 120}
                      className="h-auto max-h-full w-auto"
                      priority={index < 2} // Prioritize loading for first two logos
                      quality={90}
                      onError={() => handleImageError(brand.name)}
                    />
                  ) : (
                    <div className="text-center font-medium text-neutral">
                      {brand.name}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 my-6">
          {smallBrands.map((brand, index) => (
            <div key={`small-brand-${index}`} className="w-1/4 md:w-auto">
              <Link
                href={brand.href}
                className="block transition-all duration-300 hover:scale-105 hover:shadow-md"
                title={`View details for ${brand.name}`}
              >
                <div className="bg-neutral-light p-3 rounded-lg flex items-center justify-center h-16 md:h-16 md:w-32 border border-neutral-dark shadow-sm">
                  {!imageErrors[brand.name] ? (
                    <Image
                      src={brand.logoSrc}
                      alt={brand.logoAlt || `${brand.name} logo`}
                      height={brand.logoHeight}
                      width={brand.logoWidth || 80}
                      className="h-auto max-h-full w-auto"
                      quality={85}
                      onError={() => handleImageError(brand.name)}
                    />
                  ) : (
                    <div className="text-center font-medium text-neutral">
                      {brand.name}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Brands;