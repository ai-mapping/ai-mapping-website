import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  [key: string]: any; // For any other props
};

const MockNextLink = ({ 
  href, 
  children, 
  className, 
  title,
  ...props 
}: LinkProps) => {
  return (
    <a 
      href={href} 
      className={className} 
      title={title}
      data-testid="next-link"
      {...props}
    >
      {children}
    </a>
  );
};

export default MockNextLink;