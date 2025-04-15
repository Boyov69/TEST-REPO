import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-2xl font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
};
