
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HyperFocus Industries. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Engineered for the ambitious.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
