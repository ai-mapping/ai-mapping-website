import React from 'react';

type ChevronIconProps = {
  className?: string;
};

const ChevronIcon: React.FC<ChevronIconProps> = ({ className = "h-5 w-5 text-secondary" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default ChevronIcon;