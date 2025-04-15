import React, { forwardRef } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ 
    label, 
    error, 
    helperText, 
    leftIcon, 
    rightIcon, 
    fullWidth = false,
    className = '',
    id,
    ...props 
  }, ref) => {
    // Generate a unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    // Base classes
    const inputBaseClasses = "block bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
    
    // Error classes
    const errorClasses = error ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300";
    
    // Icon padding classes
    const iconPaddingClasses = leftIcon ? "pl-10" : rightIcon ? "pr-10" : "";
    
    // Width class
    const widthClass = fullWidth ? "w-full" : "";
    
    // Combine all classes
    const inputClasses = `
      ${inputBaseClasses}
      ${errorClasses}
      ${iconPaddingClasses}
      ${widthClass}
      ${className}
      p-2
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
            {error}
          </p>
        )}
        
        {!error && helperText && (
          <p className="mt-1 text-sm text-gray-500" id={`${inputId}-helper`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
