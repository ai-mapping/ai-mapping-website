'use client';

import React, { useState, useEffect } from 'react';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    teamSize: 5,
    hourlyRate: 75,
    pagesPerMonth: 10,
    complexityLevel: 'medium'
  });
  
  const [results, setResults] = useState({
    timeSaved: 0,
    costSaved: 0,
    roiPercentage: 0
  });
  
  // Calculate complexity multiplier
  const getComplexityMultiplier = (complexity: string): number => {
    switch (complexity) {
      case 'low':
        return 0.7;
      case 'medium':
        return 1.0;
      case 'high':
        return 1.5;
      default:
        return 1.0;
    }
  };
  
  // Calculate ROI whenever form data changes
  useEffect(() => {
    const { hourlyRate, pagesPerMonth, complexityLevel } = formData;
    
    // Traditional approach hours per page (based on complexity)
    const complexityMultiplier = getComplexityMultiplier(complexityLevel);
    const tradHoursPerPage = 20 * complexityMultiplier;
    
    // AI Mapping approach hours per page (based on complexity)
    const aiHoursPerPage = 5 * complexityMultiplier;
    
    // Calculate time saved per month
    const hoursSavedPerMonth = (tradHoursPerPage - aiHoursPerPage) * pagesPerMonth;
    
    // Calculate cost saved per month
    const costSavedPerMonth = hoursSavedPerMonth * hourlyRate;
    
    // Estimate ROI (assuming cost of AI Mapping is $2500/month for this estimation)
    const aiMappingCostPerMonth = 2500;
    const roiPercentage = ((costSavedPerMonth - aiMappingCostPerMonth) / aiMappingCostPerMonth) * 100;
    
    setResults({
      timeSaved: Math.round(hoursSavedPerMonth),
      costSaved: Math.round(costSavedPerMonth),
      roiPercentage: Math.max(0, Math.round(roiPercentage))
    });
  }, [formData]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'complexityLevel' ? value : Number(value)
    }));
  };

  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">ROI Calculator</h3>
        <p className="text-neutral mt-1">Estimate the business impact of AI Mapping</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Input Form */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <label htmlFor="teamSize" className="block text-white font-medium mb-2">
                Development Team Size
              </label>
              <input
                type="range"
                id="teamSize"
                name="teamSize"
                min="1"
                max="20"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full h-2 bg-neutral-dark rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-neutral mt-1">
                <span>1</span>
                <span className="text-primary font-medium">{formData.teamSize} developers</span>
                <span>20</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="hourlyRate" className="block text-white font-medium mb-2">
                Average Developer Hourly Rate
              </label>
              <input
                type="range"
                id="hourlyRate"
                name="hourlyRate"
                min="25"
                max="150"
                step="5"
                value={formData.hourlyRate}
                onChange={handleInputChange}
                className="w-full h-2 bg-neutral-dark rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-neutral mt-1">
                <span>$25</span>
                <span className="text-primary font-medium">${formData.hourlyRate}/hour</span>
                <span>$150</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="pagesPerMonth" className="block text-white font-medium mb-2">
                New Pages Per Month
              </label>
              <input
                type="range"
                id="pagesPerMonth"
                name="pagesPerMonth"
                min="1"
                max="50"
                value={formData.pagesPerMonth}
                onChange={handleInputChange}
                className="w-full h-2 bg-neutral-dark rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-neutral mt-1">
                <span>1</span>
                <span className="text-primary font-medium">{formData.pagesPerMonth} pages</span>
                <span>50</span>
              </div>
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">
                Page Complexity Level
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="complexityLevel"
                    value="low"
                    checked={formData.complexityLevel === 'low'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    formData.complexityLevel === 'low'
                      ? 'bg-primary text-black'
                      : 'bg-neutral-dark text-neutral hover:text-white hover:bg-neutral-light'
                  }`}>
                    Low
                  </span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="complexityLevel"
                    value="medium"
                    checked={formData.complexityLevel === 'medium'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    formData.complexityLevel === 'medium'
                      ? 'bg-primary text-black'
                      : 'bg-neutral-dark text-neutral hover:text-white hover:bg-neutral-light'
                  }`}>
                    Medium
                  </span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="complexityLevel"
                    value="high"
                    checked={formData.complexityLevel === 'high'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    formData.complexityLevel === 'high'
                      ? 'bg-primary text-black'
                      : 'bg-neutral-dark text-neutral hover:text-white hover:bg-neutral-light'
                  }`}>
                    High
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="lg:w-1/2 bg-neutral-light bg-opacity-20 rounded-lg p-6">
            <h4 className="text-white font-semibold text-lg mb-6">Monthly Savings Estimate</h4>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-primary font-medium">Developer Hours Saved</div>
                  <div className="text-sm text-neutral">Time saved on component development</div>
                </div>
                <div className="text-2xl font-bold text-white">{results.timeSaved} <span className="text-sm text-neutral">hours</span></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-primary font-medium">Cost Savings</div>
                  <div className="text-sm text-neutral">Before AI Mapping subscription</div>
                </div>
                <div className="text-2xl font-bold text-white">${results.costSaved.toLocaleString()}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-primary font-medium">Estimated ROI</div>
                  <div className="text-sm text-neutral">Return on investment</div>
                </div>
                <div className="text-2xl font-bold text-white">{results.roiPercentage}%</div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-neutral-dark">
                <div className="text-white">Additional Benefits</div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral">Faster time-to-market for new content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral">Reduced technical debt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral">Improved content team autonomy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;