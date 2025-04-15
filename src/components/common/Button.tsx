import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary: "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-indigo-500",
    text: "bg-transparent hover:bg-gray-100 text-indigo-600 focus:ring-indigo-500"
  };
  
  // Disabled classes
  const disabledClasses = "opacity-50 cursor-not-allowed";
  
  // Full width class
  const widthClass = fullWidth ? "w-full" : "";
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${(disabled || isLoading) ? disabledClasses : ""}
    ${widthClass}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
