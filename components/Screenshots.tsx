
import React from 'react';

const ScreenshotCard: React.FC<{ imgSrc: string; caption: string; }> = ({ imgSrc, caption }) => {
    const captionParts = caption.split(':');
    const title = captionParts[0] + ':';
    const description = captionParts.slice(1).join(':').trim();

    return (
        <div className="group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
            <img src={imgSrc} alt="Game Screenshot" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="p-6 bg-gray-800 min-h-[140px] flex flex-col justify-center">
                 <p className="text-gray-300 text-base leading-relaxed">
                    <span className="font-bold text-cyan-400 font-orbitron uppercase tracking-wider block mb-2">{title}</span>
                    {description}
                </p>
            </div>
        </div>
    );
};


const Screenshots: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-gray-800/50">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">GLIMPSES FROM THE ECHO WASTELAND</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <ScreenshotCard 
                        imgSrc="https://i.imgur.com/WP3Q1jE.png" 
                        caption="CRAFT & CUSTOMIZE: Forge hundreds of unique items and create the perfect build to match your playstyle." 
                    />
                    <ScreenshotCard 
                        imgSrc="https://i.imgur.com/3OhzTNd.png" 
                        caption="TRACK YOUR VIGIL: Monitor your progress, see how many hours of focus you've reclaimed, and unlock powerful achievements." 
                    />
                </div>
            </div>
        </section>
    );
};

export default Screenshots;