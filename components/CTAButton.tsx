import React from 'react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick, children, className = '' }) => {
  const altText = typeof children === 'string' ? children : 'Call to action button';

  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-none p-0 cursor-pointer group focus:outline-none ${className}`}
      aria-label={altText}
    >
      <img
        src="https://i.imgur.com/H4g64RX.png"
        alt={altText}
        className="max-w-xs w-full transition-all duration-300 transform group-hover:scale-105 group-focus:ring-4 group-focus:ring-cyan-500 group-focus:ring-offset-4 group-focus:ring-offset-gray-900 rounded-md"
      />
    </button>
  );
};

export default CTAButton;