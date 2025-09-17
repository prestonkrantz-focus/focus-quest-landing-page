import React from 'react';
import AppStoreButtons from './AppStoreButtons';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
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
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center items-center mb-6">
          <svg className="w-16 h-16 text-cyan-400 mr-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2.5L3.5 6v7c0 4.5 8.5 7.5 8.5 7.5s8.5-3 8.5-7.5V6L12 2.5z" />
            <path d="M12 15V8l-2 2" />
            <path d="M12 8l2 2" />
            <path d="M12 15l-1 4h2l-1-4z" />
          </svg>
          <span className="text-4xl font-black tracking-widest">FOCUS QUEST</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-shadow-lg shadow-cyan-500/50">
          Stop Fighting Your Focus. <br className="hidden md:block" /> Start <span className="text-cyan-400">Weaponizing</span> It.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          Focus Quest is the first focus tool that's actually a game. Turn your homework grind into gear for your hero and conquer your goals, in-game and in real{'\u00A0'}life.
        </p>
        <AppStoreButtons onClick={onCTAClick} />
      </div>
    </section>
  );
};

export default Hero;