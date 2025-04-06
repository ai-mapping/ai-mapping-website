const inStockContent = {
  heading: 'Component Library',
  subheading: 'Ready-to-use components available in our framework',
  columns: [
    { key: 'name', header: 'Component', align: 'left' },
    { key: 'partNumber', header: 'Type', align: 'left' },
    { key: 'compatibility', header: 'Framework Support', align: 'left' },
    { key: 'inStock', header: 'Status', align: 'center' },
    { key: 'action', header: 'Action', align: 'center' }
  ],
  items: [
    {
      id: '1',
      name: 'Testimonial Cards',
      partNumber: 'Marketing',
      compatibility: 'React, Next.js, Remix',
      inStock: 'available'
    },
    {
      id: '2',
      name: 'Feature Grid',
      partNumber: 'UI',
      compatibility: 'All frameworks',
      inStock: 'available'
    },
    {
      id: '3',
      name: 'Pricing Table',
      partNumber: 'Marketing',
      compatibility: 'React, Next.js, Astro',
      inStock: 'available'
    },
    {
      id: '4',
      name: 'Hero Section Builder',
      partNumber: 'Layout',
      compatibility: 'React, Next.js',
      inStock: 'limited'
    }
  ],
  orderButtonText: 'Use Component',
  viewAllLinkText: 'Explore the full component library',
  viewAllLink: '/components'
};

export default inStockContent;