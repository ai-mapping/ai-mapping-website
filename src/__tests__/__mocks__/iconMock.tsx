// Mock for icon components
import React from 'react';

type IconProps = {
  className?: string;
};

// Create a mock component factory for icons
const createIconMock = (name: string) => {
  const IconComponent = ({ className = "h-10 w-10" }: IconProps) => (
    <div data-testid={`${name}-icon`} className={className}>
      {name}
    </div>
  );
  
  return IconComponent;
};

export default createIconMock;