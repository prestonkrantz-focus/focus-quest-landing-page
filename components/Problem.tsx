import React from 'react';

const Problem: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-900 text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <header className="mb-8">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-cyan-400">WELCOME TO THE ATTENTION APOCALYPSE.</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </header>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    You're trying to write a paper, but you're being swarmed by an army of Notification Ghouls. You need to study for a final, but a giant Clickbait Golem is blocking your path. The world hasn't ended with a bang, but with the endless, mindless scroll of Doomscrolling Zombies. Your attention is the last resource worth fighting for.
                </p>
            </div>
        </section>
    );
};

export default Problem;
