import Link from 'next/link';
import React from 'react';
import InStockTable from './InStockTable';
import Section from '@/components/layout/Section';

// Define types for table columns
export type TableColumn = {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
};

// Define types for stock items
export type StockItem = {
  id: string;
  name: string;
  partNumber: string;
  compatibility: string;
  inStock: 'available' | 'limited' | 'unavailable';
};

// Main props interface
export type InStockProps = {
  heading: string;
  subheading: string;
  columns: TableColumn[];
  items: StockItem[];
  orderButtonText: string;
  viewAllLinkText: string;
  viewAllLink: string;
};

// Default props
export const defaultInStockProps: InStockProps = {
  heading: 'Components Library',
  subheading: 'Ready-to-use components for your next project',
  columns: [
    { key: 'name', header: 'Component Name', align: 'left' },
    { key: 'partNumber', header: 'Version', align: 'left' },
    { key: 'compatibility', header: 'Framework Support', align: 'left' },
    { key: 'inStock', header: 'Status', align: 'center' },
    { key: 'action', header: 'Action', align: 'center' }
  ],
  items: [
    {
      id: '1',
      name: 'AI Form Builder',
      partNumber: 'v1.2.0',
      compatibility: 'React, Next.js, Vue',
      inStock: 'available'
    },
    {
      id: '2',
      name: 'Dynamic Hero Section',
      partNumber: 'v2.0.1',
      compatibility: 'React, Next.js, Astro',
      inStock: 'available'
    },
    {
      id: '3',
      name: 'Testimonial Carousel',
      partNumber: 'v1.5.2',
      compatibility: 'React, Vue, Svelte',
      inStock: 'available'
    },
    {
      id: '4',
      name: 'AI Content Generator',
      partNumber: 'v0.9.8',
      compatibility: 'React, Next.js',
      inStock: 'limited'
    }
  ],
  orderButtonText: 'Use Component',
  viewAllLinkText: 'View all available components',
  viewAllLink: '/components'
};

const InStock = ({
  heading = defaultInStockProps.heading,
  subheading = defaultInStockProps.subheading,
  columns = defaultInStockProps.columns,
  items = defaultInStockProps.items,
  orderButtonText = defaultInStockProps.orderButtonText,
  viewAllLinkText = defaultInStockProps.viewAllLinkText,
  viewAllLink = defaultInStockProps.viewAllLink
}: Partial<InStockProps>) => {
  return (
    <Section background="surface" paddingY="lg" containerWidth="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3 text-white">
          {heading}
        </h2>
        <p className="text-neutral text-center mb-10 max-w-2xl mx-auto">
          {subheading}
        </p>

        <div className="overflow-x-auto">
          <InStockTable 
            columns={columns} 
            items={items} 
            orderButtonText={orderButtonText} 
          />
        </div>

        <div className="text-center mt-8">
          <Link
            href={viewAllLink}
            className="text-primary font-medium hover:text-primary-light transition-colors duration-300"
          >
            {viewAllLinkText}
          </Link>
        </div>
    </Section>
  );
};

export default InStock;
