import React from 'react';

type CheckmarkIconProps = {
  className?: string;
};

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({ className = "h-5 w-5 text-primary mr-2 mt-0.5" }) => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default CheckmarkIcon;