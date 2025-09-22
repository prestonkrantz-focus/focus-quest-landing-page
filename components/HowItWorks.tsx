import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section id="game" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-cyan-400">THE VIGIL & THE BREACH</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </header>

                <div className="space-y-16">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="md:w-1/2">
                            <img src="https://i.imgur.com/JBfLjBU.png" alt="The Vigil: Focus Timer Workbench" className="rounded-lg shadow-2xl border-4 border-gray-700 w-full" />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <h3 className="font-orbitron text-3xl font-bold text-white mb-4">STEP 1: KEEP VIGIL</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Choose your <strong>real-world task</strong>, set your focus timer, and lock away the digital noise. While you focus, your character works at a post-apocalyptic workbench, scavenging resources and forging powerful gear from the wreckage. Longer, uninterrupted sessions yield rarer components. This is your grind.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="md:w-1/2">
                           <img src="https://i.imgur.com/HKLUKca.png" alt="The Breach: Auto-Battler Gameplay" className="rounded-lg shadow-2xl border-4 border-gray-700 w-full" />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <h3 className="font-orbitron text-3xl font-bold text-white mb-4">STEP 2: BREACH THE SIGNAL</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Your Vigil is over. <strong>The timer is done.</strong> Now, unleash the gear you just earned. Equip your hero and Breach into the Signal's data stream in a fast, strategic, auto-battler where you make key decisions to overcome satirical enemies like Notification Ghouls and Rage-Bait Golems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;