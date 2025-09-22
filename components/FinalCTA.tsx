import React from 'react';
import CTAButton from './CTAButton';

interface FinalCTAProps {
    onJoinQuest: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onJoinQuest }) => {
    return (
        <section className="py-20 md:py-32 bg-gray-800/50 text-center">
            <div className="container mx-auto px-4">
                <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white uppercase leading-tight">
                    YOUR FOCUS IS YOUR ULTIMATE WEAPON.
                    <br />
                    <span className="text-cyan-400">FORGE IT.</span>
                </h2>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                    The Attention Apocalypse is here. Are you going to be a Static, or are you going to fight back?
                </p>
                <div className="mt-10">
                    <CTAButton onClick={onJoinQuest}>
                        JOIN THE ALPHA
                    </CTAButton>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;