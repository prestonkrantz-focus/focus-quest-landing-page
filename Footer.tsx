
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hyper-gray">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HyperFocus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
