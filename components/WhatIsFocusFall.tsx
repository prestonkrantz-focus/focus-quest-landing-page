import React from 'react';

const WhatIsFocusFall: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-gray-900 border-t-2 border-b-2 border-gray-700">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">A FOCUS TIMER... DISGUISED AS AN EPIC RPG.</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                </header>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="md:w-1/2">
                        <img 
                            src="https://i.imgur.com/HKLUKca.png" 
                            alt="FocusFall gameplay showing a character battling digital monsters" 
                            className="rounded-lg shadow-2xl border-4 border-cyan-400/50 w-full"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="font-orbitron text-3xl font-bold text-cyan-400 mb-4">THE GAME YOU WIN IN THE REAL WORLD.</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Let's be real: most focus timers are boring. FocusFall is different. It's a real game with deep strategy and legendary loot. The catch? The only way to win is by setting a timer, locking your phone, and focusing on your real-life tasks. Every homework assignment you finish is a sword you've forged.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsFocusFall;