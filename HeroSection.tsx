import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="font-extrabold tracking-tight text-gray-900">
            <span className="block text-6xl sm:text-8xl bg-gradient-to-r from-hyper-blue to-hyper-cyan bg-clip-text text-transparent">
              HyperFocus
            </span>
            <span className="block mt-2 text-4xl sm:text-6xl">
              Own Your Attention. Filter the Noise.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            The App-Level Notification Firewall. Designed for professionals and teens who need to silence digital noise and focus on what truly matters.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#cta"
              className="rounded-md bg-hyper-cyan px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hyper-cyan transition-transform transform hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img 
              src="https://i.imgur.com/RLdtmr5.png" 
              alt="A clean phone screen displaying a single, high-priority notification next to a blurry background of suppressed, ignored notifications." 
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;