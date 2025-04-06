import React from 'react';

const SideBySideComparison = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Markdown to Components</h3>
        <p className="text-neutral mt-1">See how content transforms into a rendered page</p>
      </div>
      
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-dark">
        {/* Markdown Side */}
        <div className="md:w-1/2 p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Source Markdown</h4>
          <div className="bg-neutral-light rounded-lg p-4 font-mono text-sm text-white overflow-auto h-[400px]">
            <pre>
{`# AI Mapping Framework
{intent: "hero-heading"}

Transform how websites are built 
by letting content shape your UI.
{intent: "hero-subheading"}

[Get Started](#) [View Demo](#)
{intent: "cta-group"}

## Key Features
{intent: "section-heading"}

### Content-First Development
{intent: "feature-title"}

Start with your content, not your UI 
constraints. Write naturally and let 
AI handle the adaptation.
{intent: "feature-description"}

### Automatic Component Selection
{intent: "feature-title"}

AI selects the most appropriate 
components based on content structure
and intent.
{intent: "feature-description"}

### Design System Consistency
{intent: "feature-title"}

All components follow your design
system, ensuring brand consistency
across all pages.
{intent: "feature-description"}

## How It Works
{intent: "process-heading"}

1. Write content in markdown
2. Add optional intent annotations
3. AI analyzes content structure
4. Components are matched to content
5. Final page is assembled
{intent: "process-steps"}`}
            </pre>
          </div>
        </div>
        
        {/* Rendered Side */}
        <div className="md:w-1/2 p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Rendered Components</h4>
          <div className="bg-neutral-dark rounded-lg overflow-hidden h-[400px] overflow-y-auto">
            {/* Hero Component Preview */}
            <div className="bg-background p-4 border-b border-neutral">
              <div className="mb-2 bg-neutral-light rounded px-2 py-0.5 text-xs text-neutral w-fit">
                HeroComponent
              </div>
              <h1 className="text-2xl font-bold text-primary mb-2">AI Mapping Framework</h1>
              <p className="text-white mb-4">Transform how websites are built by letting content shape your UI.</p>
              <div className="flex space-x-2">
                <button className="bg-primary text-black px-3 py-1.5 rounded text-sm">Get Started</button>
                <button className="bg-neutral border border-primary text-primary px-3 py-1.5 rounded text-sm">View Demo</button>
              </div>
            </div>
            
            {/* Feature Section Preview */}
            <div className="p-4 border-b border-neutral">
              <div className="mb-2 bg-neutral-light rounded px-2 py-0.5 text-xs text-neutral w-fit">
                SectionHeading
              </div>
              <h2 className="text-xl font-semibold text-primary mb-2">Key Features</h2>
            </div>
            
            {/* Features Grid Preview */}
            <div className="p-4 border-b border-neutral">
              <div className="mb-2 bg-neutral-light rounded px-2 py-0.5 text-xs text-neutral w-fit">
                FeatureGridComponent
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-surface p-3 rounded border border-neutral-dark">
                  <h3 className="text-lg font-medium text-white mb-1">Content-First Development</h3>
                  <p className="text-neutral text-sm">Start with your content, not your UI constraints. Write naturally and let AI handle the adaptation.</p>
                </div>
                <div className="bg-surface p-3 rounded border border-neutral-dark">
                  <h3 className="text-lg font-medium text-white mb-1">Automatic Component Selection</h3>
                  <p className="text-neutral text-sm">AI selects the most appropriate components based on content structure and intent.</p>
                </div>
                <div className="bg-surface p-3 rounded border border-neutral-dark">
                  <h3 className="text-lg font-medium text-white mb-1">Design System Consistency</h3>
                  <p className="text-neutral text-sm">All components follow your design system, ensuring brand consistency across all pages.</p>
                </div>
              </div>
            </div>
            
            {/* Process Section Preview */}
            <div className="p-4">
              <div className="mb-2 bg-neutral-light rounded px-2 py-0.5 text-xs text-neutral w-fit">
                ProcessStepsComponent
              </div>
              <h2 className="text-xl font-semibold text-primary mb-2">How It Works</h2>
              <ol className="space-y-2">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-primary text-black flex items-center justify-center text-sm mr-3 flex-shrink-0">1</div>
                  <span className="text-white">Write content in markdown</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-primary text-black flex items-center justify-center text-sm mr-3 flex-shrink-0">2</div>
                  <span className="text-white">Add optional intent annotations</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-primary text-black flex items-center justify-center text-sm mr-3 flex-shrink-0">3</div>
                  <span className="text-white">AI analyzes content structure</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-primary text-black flex items-center justify-center text-sm mr-3 flex-shrink-0">4</div>
                  <span className="text-white">Components are matched to content</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-primary text-black flex items-center justify-center text-sm mr-3 flex-shrink-0">5</div>
                  <span className="text-white">Final page is assembled</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-neutral-light border-t border-neutral-dark">
        <p className="text-center text-xs text-neutral">
          <span className="text-primary">Note:</span> AI Mapping provides immediate previews as you write content, closing the gap between content creation and visualization
        </p>
      </div>
    </div>
  );
};

export default SideBySideComparison;