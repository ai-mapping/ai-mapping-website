import React from 'react';
import Hero from './layout/Hero';
import Brands from './blocks/Brands';
import Success from './blocks/Success';
import InStock from './blocks/InStock';
import Advantages from './blocks/Advantages';
import Trust from './blocks/Trust';
import SEOText from './blocks/SEOText';
import FAQ from './blocks/FAQ';
import CTA from './blocks/CTA';
import MarkdownContent from './blocks/MarkdownContent';
import HowWeWork from './blocks/HowWeWork';

// Import homepage content structure
import homepageContent from '@/content/homepage';

// Define component props type
type ComponentProps = Record<string, unknown>;

// Component mapping with proper type
const ComponentMap: Record<string, React.ComponentType<ComponentProps>> = {
  Hero,
  Advantages,
  Brands,
  Success,
  InStock,
  Trust,
  SEOText,
  FAQ,
  CTA,
  Regional: MarkdownContent, // Map the Regional type to the MarkdownContent component
  HowWeWork,
};

const Homepage: React.FC = () => {
  return (
    <>


      {homepageContent.map((section) => {
        const Component = ComponentMap[section._type];

        if (!Component) {
          console.warn(
            `Component type "${section._type}" not found in component map`,
          );
          return null;
        }

        return <Component key={section._id} {...section.props} />;
      })}


    </>
  );
};

export default Homepage;
