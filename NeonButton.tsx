import React from 'react';

interface NeonButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block px-8 py-4 font-bold text-lg text-yellow-400 uppercase tracking-widest bg-transparent border-2 border-yellow-400 rounded-md transition-all duration-300 ease-in-out overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      <span className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300"></span>
      <span className="relative z-10">
        {children}
      </span>
      <div className="absolute inset-0 border-2 border-yellow-400 rounded-md blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
       <div className="absolute inset-0 border-2 border-yellow-400 rounded-md blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </button>
  );
};

export default NeonButton;