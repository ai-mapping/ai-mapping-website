import React from 'react';

const DevLifeComparison = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Developer Day-to-Day Comparison</h3>
        <p className="text-neutral mt-1">How AI Mapping transforms the developer workflow</p>
      </div>
      
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-dark">
        {/* Traditional Approach */}
        <div className="md:w-1/2 p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Traditional Approach</h4>
          
          <div className="space-y-6">
            <div className="bg-neutral-dark p-4 rounded-lg">
              <div className="text-neutral text-xs mb-2">9:00 AM</div>
              <div className="text-white font-medium mb-1">Morning Stand-up</div>
              <p className="text-sm text-neutral">
                "I'll continue working on those three new component variations for the marketing page."
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg">
              <div className="text-neutral text-xs mb-2">10:30 AM</div>
              <div className="text-white font-medium mb-1">Component Adjustments</div>
              <p className="text-sm text-neutral">
                Modifying the FeatureCard component to accommodate a third button and custom icon position. Copy-pasting and adapting code from existing components.
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg">
              <div className="text-neutral text-xs mb-2">1:15 PM</div>
              <div className="text-white font-medium mb-1">Urgent Request</div>
              <p className="text-sm text-neutral">
                "Marketing needs the hero section to show bullet points instead of paragraphs. Need to create a new variant."
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg">
              <div className="text-neutral text-xs mb-2">3:00 PM</div>
              <div className="text-white font-medium mb-1">Component Documentation</div>
              <p className="text-sm text-neutral">
                Updating Storybook with new component variants and writing prop documentation for the marketing team.
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg">
              <div className="text-neutral text-xs mb-2">4:30 PM</div>
              <div className="text-white font-medium mb-1">Bug Fixing</div>
              <p className="text-sm text-neutral">
                Alignment issues with the new component variants across different screen sizes. Testing and fixing responsive breakpoints.
              </p>
            </div>
          </div>
        </div>
        
        {/* AI Mapping Approach */}
        <div className="md:w-1/2 p-6">
          <h4 className="text-lg font-semibold text-primary mb-4">AI Mapping Approach</h4>
          
          <div className="space-y-6">
            <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary">
              <div className="text-neutral text-xs mb-2">9:00 AM</div>
              <div className="text-primary font-medium mb-1">Morning Stand-up</div>
              <p className="text-sm text-neutral">
                "I'll finish the component capability definitions today and start working on the new authentication feature."
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary">
              <div className="text-neutral text-xs mb-2">10:30 AM</div>
              <div className="text-primary font-medium mb-1">System Architecture</div>
              <p className="text-sm text-neutral">
                Working on the core mapping algorithm to improve component selection accuracy based on content context.
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary">
              <div className="text-neutral text-xs mb-2">1:15 PM</div>
              <div className="text-primary font-medium mb-1">Feature Development</div>
              <p className="text-sm text-neutral">
                Implementing the new authentication system that integrates with the company's single sign-on service.
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary">
              <div className="text-neutral text-xs mb-2">3:00 PM</div>
              <div className="text-primary font-medium mb-1">System Integration</div>
              <p className="text-sm text-neutral">
                Connecting the AI mapping system to the content API to enable real-time content previews and updates.
              </p>
            </div>
            
            <div className="bg-neutral-dark p-4 rounded-lg border-l-4 border-primary">
              <div className="text-neutral text-xs mb-2">4:30 PM</div>
              <div className="text-primary font-medium mb-1">Performance Optimization</div>
              <p className="text-sm text-neutral">
                Benchmarking and optimizing the mapping process to ensure sub-second rendering times for typical content pages.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-neutral-light border-t border-neutral-dark">
        <p className="text-sm text-neutral text-center">
          With AI Mapping, developers shift from repetitive component variations to high-value system architecture and feature development
        </p>
      </div>
    </div>
  );
};

export default DevLifeComparison;