import React from 'react';

interface StepCardProps {
    step: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
    <div className="text-center p-6 bg-gray-900 rounded-lg border-2 border-gray-700 transform transition-transform hover:-translate-y-2">
        <div className="mb-4">
            <span className="font-orbitron text-5xl font-black text-cyan-400 opacity-20">{step}</span>
            <h3 className="font-orbitron text-2xl font-bold text-white mt-[-1.5rem] uppercase">{title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);


const Solution: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-gray-800/50">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">THE GAME YOU WIN BY NOT PLAYING.</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <StepCard 
                        step="01"
                        title="LOCK & FORGE"
                        description="Set a focus timer and lock away the junk-food apps. This is your 'Vigil.' For every minute you focus, your hero is in The Forge, hammering your willpower into a weapon."
                    />
                    <StepCard 
                        step="02"
                        title="CLAIM YOUR LOOT"
                        description="Timer done? Claim your reward. Your focus has been transformed into epic, stat-boosting gear. The longer the focus, the more legendary the loot. No participation trophies here."
                    />
                     <StepCard 
                        step="03"
                        title="CONQUER THE CHAOS"
                        description="Equip your new gear and send your hero into battle. Watch them automatically slash through the mindless enemies of distraction in a fast, satisfying, hands-on game mode."
                    />
                </div>
            </div>
        </section>
    );
};

export default Solution;
