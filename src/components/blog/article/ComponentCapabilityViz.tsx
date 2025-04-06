import React from 'react';

const ComponentCapabilityViz = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Component Capability Matching</h3>
        <p className="text-neutral mt-1">How content needs match to component capabilities</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Content Structure</h4>
              <div className="bg-neutral-light p-4 rounded-lg border border-neutral-dark">
                <pre className="text-white font-mono text-sm overflow-x-auto">
{`# Transform Your Web Development
{intent: "hero-heading"}

AI Mapping lets content shape your UI
components, not the other way around.
{intent: "hero-subheading"}

## Key Benefits
{intent: "feature-list"}

- 5x faster development cycles
- Content-first workflow
- Reduced technical debt
- Happier teams

[Get Started](#) [View Demo](#)
{intent: "cta-group"}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Content Analysis</h4>
              <div className="space-y-3">
                <div className="bg-neutral-dark p-3 rounded-lg">
                  <div className="text-primary font-medium">Structure</div>
                  <div className="text-neutral text-sm">Heading, Paragraph, Section Heading, List, Buttons</div>
                </div>
                <div className="bg-neutral-dark p-3 rounded-lg">
                  <div className="text-primary font-medium">Intent</div>
                  <div className="text-neutral text-sm">Hero, Feature Highlight, Call to Action</div>
                </div>
                <div className="bg-neutral-dark p-3 rounded-lg">
                  <div className="text-primary font-medium">Content Need Score</div>
                  <div className="text-neutral text-sm">
                    <span className="text-accent">Heading Prominence: 85%</span> •
                    <span className="text-secondary-light"> List Importance: 70%</span> •
                    <span className="text-primary"> CTA Emphasis: 90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Component Registry Side */}
          <div className="lg:w-1/2">
            <h4 className="text-lg font-semibold text-white mb-2">Component Registry</h4>
            
            <div className="space-y-4">
              {/* Hero Component */}
              <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary relative">
                <div className="absolute right-2 top-2 bg-primary text-black text-xs px-2 py-1 rounded-full">
                  Match: 95%
                </div>
                <h5 className="text-primary font-medium">Hero</h5>
                <div className="mt-2 text-neutral text-sm">
                  <div><span className="text-white">Content Types:</span> heading, subheading, cta, image</div>
                  <div><span className="text-white">Required:</span> heading</div>
                  <div><span className="text-white">Optional:</span> subheading, cta, image</div>
                  <div><span className="text-white">Layouts:</span> centered, left-aligned, right-aligned</div>
                </div>
                
                {/* Connecting lines */}
                <div className="hidden lg:flex absolute -left-4 top-1/2 transform -translate-y-1/2">
                  <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="24" y2="1" stroke="#00BFFF" strokeWidth="2" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
              
              {/* FeatureGrid Component */}
              <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-secondary-light relative">
                <div className="absolute right-2 top-2 bg-secondary-light text-black text-xs px-2 py-1 rounded-full">
                  Match: 70%
                </div>
                <h5 className="text-secondary-light font-medium">FeatureGrid</h5>
                <div className="mt-2 text-neutral text-sm">
                  <div><span className="text-white">Content Types:</span> heading, feature-list, icon</div>
                  <div><span className="text-white">Required:</span> feature-list</div>
                  <div><span className="text-white">Optional:</span> heading, icon</div>
                  <div><span className="text-white">Layouts:</span> grid, list, columns</div>
                </div>
              </div>
              
              {/* CTA Component */}
              <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-neutral relative">
                <div className="absolute right-2 top-2 bg-neutral text-black text-xs px-2 py-1 rounded-full">
                  Match: 45%
                </div>
                <h5 className="text-neutral font-medium">CallToAction</h5>
                <div className="mt-2 text-neutral text-sm">
                  <div><span className="text-white">Content Types:</span> heading, paragraph, cta-button</div>
                  <div><span className="text-white">Required:</span> cta-button</div>
                  <div><span className="text-white">Optional:</span> heading, paragraph, image</div>
                  <div><span className="text-white">Layouts:</span> centered, card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Decision */}
        <div className="mt-8 bg-primary bg-opacity-10 border border-primary rounded-lg p-4">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-black mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h5 className="text-primary font-medium">AI Mapping Decision</h5>
              <p className="text-white text-sm">Selected Hero component with left-aligned layout, adjusted for content length and added button group support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCapabilityViz;