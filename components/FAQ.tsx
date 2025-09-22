
import React from 'react';

const FAQItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => (
    <div className="mb-6">
        <h4 className="font-bold text-cyan-400 mb-2 text-lg">{question}</h4>
        <p className="text-gray-300">{answer}</p>
    </div>
);

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">TRANSMISSIONS FROM THE CITADEL</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* FAQ Column */}
                    <div>
                        <FAQItem 
                            question="Q1: So it locks my phone?"
                            answer="A: Yes. You choose which apps to block. It’s the only way to protect yourself from The Signal and gather resources."
                        />
                         <FAQItem 
                            question="Q2: Is this just another boring timer?"
                            answer="A: No. We are a real game built by gamers. The strategic depth comes from planning your focus sessions to craft the perfect gear set to beat a specific boss."
                        />
                         <FAQItem 
                            question="Q3: Who is this for?"
                            answer="A: The Awakened. Those who know their attention is valuable and are ready to fight for it."
                        />
                    </div>
                    
                    {/* Lore Column */}
                    <div id="lore" className="border-2 border-gray-700 p-8 rounded-lg bg-gray-800/30">
                        <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Lore Entry #001: The Statics</h3>
                        <p className="text-gray-300 italic leading-relaxed">
                            "We don't know when it started. First, it was just a low hum on the edge of hearing. Then, a peace. A strange, placid quiet. People stopped talking. They stopped moving. They just... watch. Their faces lit by the glow, their minds lost in The Signal. We call them the Statics. They are the quiet apocalypse."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
