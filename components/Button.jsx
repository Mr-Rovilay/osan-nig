"use client";

const Button = ({ text, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles =
    "focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer capitalize";
  
  const variantStyles = {
    primary:
      "bg-gray-500 text-black hover:bg-gray-100 focus:ring-gray-300",
    secondary:
      "bg-green-500 text-black hover:bg-green-600 focus:ring-green-300",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
