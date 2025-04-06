import React from 'react';

const WorkflowInfographic = () => {
  return (
    <div className="my-10 rounded-lg overflow-hidden border border-neutral-dark shadow-lg">
      <div className="bg-neutral-light p-4 border-b border-neutral-dark">
        <h3 className="text-xl font-semibold text-primary">Traditional vs AI Mapping Workflow</h3>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Traditional Flow */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-neutral-dark">
          <h4 className="text-lg font-semibold mb-4 text-white">Traditional Approach</h4>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-neutral-dark rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">1</div>
              <div>
                <div className="text-white font-medium">Content Creation</div>
                <div className="text-neutral text-sm">Limited by existing components</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-neutral-dark"></div>
            
            <div className="flex items-center">
              <div className="bg-neutral-dark rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">2</div>
              <div>
                <div className="text-white font-medium">Fit to Existing Components</div>
                <div className="text-neutral text-sm">Force content into available structures</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-neutral-dark"></div>
            
            <div className="flex items-center">
              <div className="bg-neutral-dark rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">3</div>
              <div>
                <div className="text-white font-medium">Developer Adjustments</div>
                <div className="text-neutral text-sm">Custom changes per request</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-neutral-dark"></div>
            
            <div className="flex items-center">
              <div className="bg-neutral-dark rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">4</div>
              <div>
                <div className="text-white font-medium">More Adjustments</div>
                <div className="text-neutral text-sm">Back-and-forth revision cycle</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-neutral-dark"></div>
            
            <div className="flex items-center">
              <div className="bg-neutral-dark rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">5</div>
              <div>
                <div className="text-white font-medium">Final Page</div>
                <div className="text-neutral text-sm">After weeks of iterations</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Mapping Flow */}
        <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-background to-neutral-dark">
          <h4 className="text-lg font-semibold mb-4 text-primary">AI Mapping Approach</h4>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">1</div>
              <div>
                <div className="text-white font-medium">Content Creation</div>
                <div className="text-primary text-sm">Without technical constraints</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-primary"></div>
            
            <div className="flex items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">2</div>
              <div>
                <div className="text-white font-medium">AI Analysis</div>
                <div className="text-primary text-sm">Understanding structure & intent</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-primary"></div>
            
            <div className="flex items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">3</div>
              <div>
                <div className="text-white font-medium">Component Mapping</div>
                <div className="text-primary text-sm">Automatic selection & adaptation</div>
              </div>
            </div>
            
            <div className="ml-5 h-6 border-l-2 border-primary"></div>
            
            <div className="flex items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">4</div>
              <div>
                <div className="text-white font-medium">Final Page</div>
                <div className="text-primary text-sm">Ready in minutes, not weeks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowInfographic;