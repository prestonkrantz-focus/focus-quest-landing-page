import React from 'react';

const AppStoreIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.05 13.375a.75.75 0 01-1.06-1.06L11.94 12 9.89 9.95a.75.75 0 011.06-1.06l2.5 2.5a.75.75 0 010 1.06l-2.5 2.5zM14.5 12a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.05a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5V12z" />
    </svg>
);

const PlayStoreIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-7 9 7-9 7-9-7zm0 0l9 7 9-7" />
    </svg>
);


const Software: React.FC = () => {
  return (
    <section id="software" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
          THE BRAIN BEHIND THE BRAWN
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          INTELLIGENT FOCUS MODES.
        </h3>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed mb-12">
          HyperFocus is powered by a sleek companion app that allows you to customize everything. Create different profiles for "Deep Work," "Creative Sprint," or "Mindful Reading," each with its own set of blocked apps and custom timers. This isn't a blunt instrument; it's a configurable performance system.
        </p>
        <div className="flex justify-center items-center space-x-4">
           <a href="#" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                <AppStoreIcon/>
                <div>
                    <p className="text-xs">Download on the</p>
                    <p className="text-xl font-bold">App Store</p>
                </div>
            </a>
            <a href="#" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                <PlayStoreIcon/>
                <div>
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-xl font-bold">Google Play</p>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Software;