import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-hyper-gray py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Manual Configuration Fails.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Modern apps are engineered to be addictive. They leverage variable reward schedules—the same mechanism found in slot machines—to keep you constantly checking your phone. Every buzz and banner is a gamble for a dopamine hit. The system isn't broken; it's working exactly as designed to capture and hold your attention.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;