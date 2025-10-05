import React from 'react';

const Engineering: React.FC = () => {
  return (
    <section id="engineering" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            PRECISION ENGINEERED FOR PERFORMANCE
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              UNCOMPROMISING MATERIALS.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The HyperFocus chassis is carved from a single block of aerospace-grade aluminum, anodized for a durable, matte-black finish. The Launch Key is crafted from genuine carbon fiber, and the Ignition button is capped with scratch-resistant sapphire crystal. This isn't a gadget; it's a precision instrument.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://i.imgur.com/Arx6fd5.png" 
              alt="HyperFocus on a modern desk" 
              className="rounded-lg shadow-2xl shadow-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;