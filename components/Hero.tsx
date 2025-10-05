
import React from 'react';
import NeonButton from './NeonButton';

interface HeroProps {
  onReserveClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Background with a subtle gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-70"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hyperfocus-bg/1920/1080?grayscale&blur=2')" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
            YOU DON'T CHECK TIKTOK AT 200 MPH.
          </h1>
          <p className="text-xl md:text-2xl font-light text-yellow-400 mb-8">
            So why let it sabotage your most important work?
          </p>
          <p className="max-w-xl text-base md:text-lg text-gray-400 mb-12">
            Your deep work demands the same level of respect as a high-performance machine. HyperFocus is the ignition system for your ambition. It's a precision-engineered desk controller that pairs with your phone to initiate a full digital lockdown, silencing distractions and giving you the uninterrupted space you need to perform at your peak.
          </p>
          <NeonButton onClick={onReserveClick}>
            RESERVE YOUR KEYS
          </NeonButton>
        </div>

        {/* Right Side: Product Image */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
            <img 
            src="https://i.imgur.com/Y5qmaKp.png" 
            alt="HyperFocus Device" 
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" 
            />
        </div>

      </div>
    </section>
  );
};

export default Hero;