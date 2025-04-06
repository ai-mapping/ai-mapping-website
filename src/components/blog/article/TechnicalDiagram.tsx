import React from 'react';

const TechnicalDiagram = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">AI Mapping Process Flow</h3>
      </div>
      
      <div className="p-6">
        <div className="relative overflow-x-auto">
          {/* Architecture diagram with responsive scrolling */}
          <div className="min-w-[900px]">
            {/* Content Phase */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-neutral flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary font-medium">Content</div>
                  <div className="text-xs text-neutral">Markdown / CMS</div>
                </div>
              </div>
              
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H36M36 12L24 0M36 12L24 24" stroke="#00BFFF" strokeWidth="2"/>
              </svg>
              
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-neutral flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary font-medium">Parser</div>
                  <div className="text-xs text-neutral">Extract Structure</div>
                </div>
              </div>
              
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H36M36 12L24 0M36 12L24 24" stroke="#00BFFF" strokeWidth="2"/>
              </svg>
              
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-neutral flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary font-medium">Content Analysis</div>
                  <div className="text-xs text-neutral">Structure & Intent</div>
                </div>
              </div>
            </div>
            
            {/* Middle connector */}
            <div className="flex justify-center mb-8">
              <div className="h-16 w-0.5 bg-secondary-light"></div>
            </div>
            
            {/* Mapping Phase */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-secondary-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-secondary-light font-medium">Mapping Engine</div>
                  <div className="text-xs text-neutral">Match & Score</div>
                </div>
              </div>
              
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H36M36 12L24 0M36 12L24 24" stroke="#8A2BE2" strokeWidth="2"/>
              </svg>
              
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-secondary-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-secondary-light font-medium">Component Registry</div>
                  <div className="text-xs text-neutral">Capability Definitions</div>
                </div>
              </div>
              
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H36M36 12L24 0M36 12L24 24" stroke="#8A2BE2" strokeWidth="2"/>
              </svg>
              
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-secondary-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-secondary-light font-medium">Component Selection</div>
                  <div className="text-xs text-neutral">Optimal Matching</div>
                </div>
              </div>
            </div>
            
            {/* Bottom connector */}
            <div className="flex justify-center mb-8">
              <div className="h-16 w-0.5 bg-accent"></div>
            </div>
            
            {/* Rendering Phase */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-accent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-accent font-medium">Component Adaptation</div>
                  <div className="text-xs text-neutral">Props & Layout</div>
                </div>
              </div>
              
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H36M36 12L24 0M36 12L24 24" stroke="#38FFB7" strokeWidth="2"/>
              </svg>
              
              <div className="w-40 h-16 bg-neutral-dark rounded-lg border border-accent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-accent font-medium">Rendered Output</div>
                  <div className="text-xs text-neutral">Final Page</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Color Legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-sm text-neutral">Content Processing</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-secondary-light mr-2"></div>
            <span className="text-sm text-neutral">Component Selection</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
            <span className="text-sm text-neutral">Rendering Phase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDiagram;