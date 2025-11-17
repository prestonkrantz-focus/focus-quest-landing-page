
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-hyper-blue">
              HyperFocus
            </a>
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="text-sm font-semibold leading-6 text-gray-900 hover:text-hyper-blue transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
