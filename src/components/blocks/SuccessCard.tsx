'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CaseStudy } from './Success';

// Props interface
type SuccessCardProps = {
  caseStudy: CaseStudy;
  buttonText: string;
};

const SuccessCard = ({ caseStudy, buttonText }: SuccessCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Handle order button click
  const handleOrder = () => {
    console.log(`Order button clicked for case study ID: ${caseStudy.id}`);
    // Placeholder for actual implementation
    // This would typically navigate to a detail page or documentation
  };

  // Handle image error
  const handleImageError = () => {
    console.log(`Image failed to load for case study ID: ${caseStudy.id}`);
    setImageError(true);
  };

  return (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden border border-neutral-dark hover:shadow-md transition-shadow duration-300">
      <div className="h-48 bg-neutral-dark">
        {!imageError ? (
          <Image
            width={caseStudy.image.width}
            height={caseStudy.image.height}
            src={caseStudy.image.src}
            alt={caseStudy.image.alt}
            className="w-full h-full object-contain"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-light text-neutral text-sm p-4 text-center">
            {caseStudy.image.alt || 'Image placeholder'}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3 text-white">
          {caseStudy.title}
        </h3>
        <div className="flex items-center mb-3">
          <span className="text-sm font-medium bg-accent/20 text-accent px-3 py-1 rounded-lg">
            {caseStudy.deliveryTime}
          </span>
        </div>
        <p className="text-neutral text-sm mb-5">
          {caseStudy.description}
        </p>
        <button
          className="w-full bg-primary text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-light transition-colors duration-300 hover:shadow-lg"
          onClick={handleOrder}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessCard;