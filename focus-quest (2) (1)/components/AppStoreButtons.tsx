import React from 'react';

interface AppStoreButtonsProps {
  onClick: () => void;
}

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button onClick={onClick} className="transform transition-transform duration-300 hover:scale-105 active:scale-100" aria-label="Download Now">
        <img 
          src="https://i.imgur.com/H4g64RX.png" 
          alt="Download Now"
          className="max-w-xl sm:max-w-2xl md:max-w-3xl w-full h-auto"
        />
      </button>
    </div>
  );
};

export default AppStoreButtons;