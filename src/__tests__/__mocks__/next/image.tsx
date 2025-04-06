import React from 'react';
import { StaticImageData } from 'next/image';

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  priority?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality?: number;
  [key: string]: any; // For any other props
};

// Mock for next/image
const MockNextImage = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ImageProps) => {
  // Extract image name from StaticImport or path
  const getImageName = (imageSrc: string | StaticImageData): string => {
    if (typeof imageSrc === 'object' && imageSrc.src) {
      // It's a StaticImport
      const parts = imageSrc.src.split('/');
      return parts[parts.length - 1];
    }
    
    if (typeof imageSrc === 'string') {
      const parts = imageSrc.split('/');
      return parts[parts.length - 1];
    }
    
    return 'unknown-image';
  };
  
  const imageName = getImageName(src);
  const srcPath = typeof src === 'object' ? src.src : src;
  
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img 
      src={srcPath}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={`next-image-${alt || imageName}`}
      {...props}
    />
  );
};

export default MockNextImage;