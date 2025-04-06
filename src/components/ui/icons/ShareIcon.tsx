import React from 'react';

type ShareIconProps = {
  className?: string;
};

const ShareIcon: React.FC<ShareIconProps> = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21.95 5.05l-3-3a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v10.88h-10.88l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06l-1.72-1.72h10.88v-10.88l1.72 1.72a.75.75 0 001.06 0 .75.75 0 000-1.06z" />
  </svg>
);

export default ShareIcon;