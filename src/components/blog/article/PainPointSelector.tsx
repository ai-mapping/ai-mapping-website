'use client';

import React, { useState } from 'react';

const PainPointSelector = () => {
  const [activeTab, setActiveTab] = useState('developer');

  const tabs = [
    {
      id: 'developer',
      label: 'Developer',
      painPoints: [
        'Constantly creating small component variations',
        'Technical debt from similar components',
        'Repetitive code adjustments',
        'Difficulty maintaining documentation',
        'Endless component prop changes',
        'Time lost to minor design tweaks'
      ]
    },
    {
      id: 'marketer',
      label: 'Marketer',
      painPoints: [
        'Waiting days for simple content changes',
        'Creative ideas rejected due to technical constraints',
        'Forms that don\'t match marketing needs',
        'Inconsistent branding across pages',
        'Content forced into rigid structures',
        'Limited flexibility for landing pages'
      ]
    },
    {
      id: 'agency',
      label: 'Agency',
      painPoints: [
        'Managing component libraries across multiple client sites',
        'Balancing consistency with client customization',
        'Client revision cycles that extend timelines',
        'Duplicated effort across similar projects',
        'Cross-browser compatibility issues',
        'Scaling development teams efficiently'
      ]
    }
  ];

  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4">
        <h3 className="text-xl font-semibold text-white">Traditional Development Pain Points</h3>
        <p className="text-neutral mt-1">Select your role to see common challenges</p>
      </div>
      
      <div className="border-b border-neutral-dark">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-neutral hover:text-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-300 ${
              activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <ul className="space-y-4">
              {tab.painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-white">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPointSelector;