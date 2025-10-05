
import React from 'react';
import NeonButton from './NeonButton';

interface CtaSectionProps {
  onReserveClick: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="reserve" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          The first production run is limited.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
          Reserve your HyperFocus chassis and be among the first to experience the new era of productivity.
        </p>
        <NeonButton onClick={onReserveClick}>
          SECURE YOUR BUILD SLOT
        </NeonButton>
      </div>
    </section>
  );
};

export default CtaSection;
