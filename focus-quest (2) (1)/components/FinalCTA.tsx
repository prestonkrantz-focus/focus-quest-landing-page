import React from 'react';
import AppStoreButtons from './AppStoreButtons';

interface FinalCTAProps {
  onCTAClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section 
      className="relative py-24 text-center px-4 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://i.imgur.com/UBVOUm4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          Your Adventure Awaits.
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
          Download Focus Quest today and turn your biggest distraction into your greatest{'\u00A0'}weapon.
        </p>
        <AppStoreButtons onClick={onCTAClick} />
      </div>
    </section>
  );
};

export default FinalCTA;