import React from 'react';

const ArchitectureDiagram = () => {
  return (
    <div className="my-10 bg-surface rounded-lg border border-neutral-dark shadow-lg overflow-hidden">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Headless CMS Integration</h3>
        <p className="text-neutral mt-1">How AI Mapping connects to content management systems</p>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Architecture Flow Diagram */}
            <div className="relative mb-8 pb-10">
              {/* CMS */}
              <div className="absolute left-0 top-0 w-32 h-32 bg-surface rounded-lg border border-neutral-dark flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#00BFFF">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div className="text-white text-center font-medium">Headless CMS</div>
                <div className="text-xs text-neutral text-center">Contentful, Sanity, Strapi</div>
              </div>
              
              {/* Content API */}
              <div className="absolute left-[180px] top-0 w-32 h-32 bg-surface rounded-lg border border-neutral-dark flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#00BFFF">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-white text-center font-medium">Content API</div>
                <div className="text-xs text-neutral text-center">GraphQL/REST</div>
              </div>
              
              {/* Content Files */}
              <div className="absolute left-[360px] top-0 w-32 h-32 bg-surface rounded-lg border border-neutral-dark flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#8A2BE2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="text-white text-center font-medium">Content Files</div>
                <div className="text-xs text-neutral text-center">Markdown, JSON</div>
              </div>
              
              {/* AI Mapping Engine */}
              <div className="absolute left-[540px] top-0 w-32 h-32 bg-surface rounded-lg border border-primary flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#00BFFF">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-primary text-center font-medium">AI Mapping Engine</div>
                <div className="text-xs text-neutral text-center">Analysis & Selection</div>
              </div>
              
              {/* Component Library */}
              <div className="absolute left-[720px] top-0 w-32 h-32 bg-surface rounded-lg border border-secondary-light flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#B76EFF">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <div className="text-secondary-light text-center font-medium">Component Library</div>
                <div className="text-xs text-neutral text-center">React Components</div>
              </div>
              
              {/* Preview / Production */}
              <div className="absolute left-[360px] top-[180px] w-32 h-32 bg-surface rounded-lg border border-accent flex flex-col items-center justify-center p-2 shadow-md">
                <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="#38FFB7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <div className="text-accent text-center font-medium">Preview / Production</div>
                <div className="text-xs text-neutral text-center">Rendered Pages</div>
              </div>
              
              {/* User Roles - Content Creator */}
              <div className="absolute left-[100px] top-[150px] w-32 px-3 py-2 bg-neutral-light rounded-lg border border-neutral-dark text-center">
                <div className="text-white text-sm font-medium">Content Creator</div>
                <svg className="w-6 h-6 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="#CCCCCC">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              {/* User Roles - Developer */}
              <div className="absolute left-[600px] top-[150px] w-32 px-3 py-2 bg-neutral-light rounded-lg border border-neutral-dark text-center">
                <div className="text-white text-sm font-medium">Developer</div>
                <svg className="w-6 h-6 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="#CCCCCC">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              {/* Flow Lines */}
              <svg className="absolute left-0 top-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* CMS to Content API */}
                <path d="M32 65H180" stroke="#00BFFF" strokeWidth="2" strokeDasharray="4 2" />
                {/* Content API to Content Files */}
                <path d="M212 65H360" stroke="#00BFFF" strokeWidth="2" strokeDasharray="4 2" />
                {/* Content Files to AI Mapping */}
                <path d="M392 65H540" stroke="#8A2BE2" strokeWidth="2" strokeDasharray="4 2" />
                {/* AI Mapping to Component Library */}
                <path d="M572 65H720" stroke="#8A2BE2" strokeWidth="2" strokeDasharray="4 2" />
                {/* AI Mapping to Preview */}
                <path d="M556 130V200" stroke="#38FFB7" strokeWidth="2" strokeDasharray="4 2" />
                {/* Component Library to Preview */}
                <path d="M720 130L400 180" stroke="#38FFB7" strokeWidth="2" strokeDasharray="4 2" />
                {/* Content Creator to CMS */}
                <path d="M116 150L32 110" stroke="#666666" strokeWidth="2" strokeDasharray="4 2" />
                {/* Developer to Components */}
                <path d="M616 150L720 110" stroke="#666666" strokeWidth="2" strokeDasharray="4 2" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Annotations */}
        <div className="mt-8 space-y-3">
          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-black mr-3 flex-shrink-0">
              <span className="text-xs">1</span>
            </div>
            <p className="text-sm text-neutral">
              <span className="text-white font-medium">Content Creation & Storage:</span> Content is created in the headless CMS and stored as structured data or markdown
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-black mr-3 flex-shrink-0">
              <span className="text-xs">2</span>
            </div>
            <p className="text-sm text-neutral">
              <span className="text-white font-medium">AI Analysis:</span> The AI Mapping engine processes content to understand structure and intent
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-black mr-3 flex-shrink-0">
              <span className="text-xs">3</span>
            </div>
            <p className="text-sm text-neutral">
              <span className="text-white font-medium">Component Selection:</span> Components are selected from the library based on content needs
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-black mr-3 flex-shrink-0">
              <span className="text-xs">4</span>
            </div>
            <p className="text-sm text-neutral">
              <span className="text-white font-medium">Preview & Publishing:</span> Content can be previewed and then published to production
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;