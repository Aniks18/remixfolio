import React from 'react';
import { Link } from '@remix-run/react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  external?: boolean;
};

export default function Button({ 
  children, 
  className = '', 
  href, 
  type = 'button',
  variant = 'primary',
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md transition-all duration-300 font-medium';
  
  const variantStyles = {
    primary: 'game-button',
    secondary: 'bg-accent text-white hover:bg-accent/90 hover:-translate-y-1 shadow-lg hover:shadow-accent/20',
    outline: 'border-2 border-primary hover:bg-primary/10 text-primary hover:text-white',
  };
  
  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    if (external) {
      return (
        
          href={href}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={href} className={buttonClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}