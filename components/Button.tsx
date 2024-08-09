"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode; // Add this prop for the icon
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  icon // Destructure the icon prop
}) => {
  const baseStyles =
    "font-medium rounded-lg text-sm px-4 py-2 cursor-pointer rounded-xl capitalize";
  
  const variantStyles = {
    primary:
      "bg-gray-500 text-black hover:bg-gray-100 focus:ring-gray-300 flex gap-2 items-center",
    secondary:
      "bg-custom-blue text-white flex gap-2 items-center text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      type={type}
    >
      {icon && <span>{icon}</span>} {/* Render the icon if provided */}
      {text}
    </button>
  );
};

export default Button;
