import React from 'react';

interface SlideProps {
    imgSrc: string;
    headline: string;
    subtitle: string;
}

const Slide: React.FC<SlideProps> = ({ imgSrc, headline, subtitle }) => (
    <div className="flex-shrink-0 w-11/12 sm:w-80 md:w-96 snap-center rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-800 flex flex-col">
        <img src={imgSrc} alt={headline} className="w-full object-cover" />
        <div className="p-6 text-center flex-grow flex flex-col justify-center">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 uppercase tracking-widest">{headline}</h3>
            <p className="text-gray-400 text-sm mt-2">{subtitle}</p>
        </div>
    </div>
);


const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 md:py-32 bg-gray-900">
             <div className="container mx-auto">
                <header className="text-center mb-16 px-4">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">A GLIMPSE OF THE GRIND.</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                </header>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 space-x-6 pl-4 pr-4 md:justify-center">
                 <Slide 
                    imgSrc="https://i.imgur.com/JBfLjBU.png"
                    headline="THE FORGE"
                    subtitle="Focus Time = Forging Time."
                />
                 <Slide 
                    imgSrc="https://i.imgur.com/WP3Q1jE.png"
                    headline="LEGENDARY LOOT"
                    subtitle="Equip satirical items like the 'Axe of Ad-Block'."
                />
                <Slide 
                    imgSrc="https://i.imgur.com/HKLUKca.png"
                    headline="SLAY YOUR DISTRACTIONS"
                    subtitle="Battle grotesque monsters like the 'Dopamine Fiend'."
                />
                <Slide 
                    imgSrc="https://i.imgur.com/3OhzTNd.png"
                    headline="TRACK YOUR VICTORY"
                    subtitle="Reclaim hours and unlock achievements like 'Bookworm Paladin'."
                />
            </div>
        </section>
    );
};

export default Gallery;
