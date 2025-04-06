import heroProps from './hero';
import advantagesProps from './advantages';
import brandsProps from './brands';
import inStockProps from './inStock';
import ctaProps from './cta';
import regionalProps from './regional';
import successProps from './success';
import faqProps from './faq';
import seoTextProps from './seoText';
import trustProps from './trust';
import howWeWorkProps from './howWeWork';

// Define the structure for homepage components
type HomepageComponent = {
  _type: string;
  _id: string;
  props: Record<string, unknown>;
};

// Create the homepage array with all components in order
const homepage: HomepageComponent[] = [
  {
    _type: 'Hero',
    _id: 'hero-section',
    props: heroProps,
  },

  {
    _type: 'Brands',
    _id: 'brands-section',
    props: brandsProps,
  },
  {
    _type: 'Success',
    _id: 'success-section',
    props: successProps,
  },
  {
    _type: 'HowWeWork',
    _id: 'how-we-work-section',
    props: howWeWorkProps,
  },

  {
    _type: 'Advantages',
    _id: 'advantages-section',
    props: advantagesProps,
  },
  {
    _type: 'Trust',
    _id: 'trust-section',
    props: trustProps,
  },
  {
    _type: 'SEOText',
    _id: 'seo-text-section',
    props: seoTextProps,
  },
  {
    _type: 'InStock',
    _id: 'in-stock-section',
    props: inStockProps,
  },
  {
    _type: 'CTA',
    _id: 'cta-section',
    props: ctaProps,
  },
  {
    _type: 'FAQ',
    _id: 'faq-section',
    props: faqProps,
  },
  {
    _type: 'Regional',
    _id: 'regional-section',
    props: regionalProps,
  },
];

export default homepage;
