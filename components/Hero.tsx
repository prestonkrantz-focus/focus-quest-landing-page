import React from 'react';
import GlitchText from './GlitchText';
import CTAButton from './CTAButton';

interface HeroProps {
  onJoinQuest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinQuest }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-40 p-4 md:p-8">
            <div className="container mx-auto flex justify-center md:justify-start">
                <div className="font-orbitron text-2xl font-bold tracking-wider text-white">
                    FOCUS<span className="text-cyan-400">FALL</span>
                </div>
            </div>
        </div>
        
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
            <source src="https://i.imgur.com/1tBKU3W.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>

        <div className="relative z-30 p-4 max-w-4xl mx-auto">
            <GlitchText className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                YOUR ATTENTION IS UNDER ATTACK.
            </GlitchText>
            <p className="text-xl md:text-2xl font-light text-white mt-4 tracking-wider font-orbitron">
                The RPG timer that makes focus your ultimate weapon.
            </p>
            <p className="mt-8 text-base md:text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed">
                FocusFall is a focus timer disguised as a satirical idle-RPG. We help you beat procrastination by turning your real-world tasks into the ultimate grind for epic loot. Lock your phone, forge legendary gear, and conquer the dumbest apocalypse ever.
            </p>
            <div className="mt-12">
                <CTAButton onClick={onJoinQuest}>
                    BEGIN YOUR QUEST
                </CTAButton>
            </div>
        </div>
    </section>
  );
};

export default Hero;
