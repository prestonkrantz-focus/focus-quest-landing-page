
import React from 'react';

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, imageUrl, imageAlt, reverse = false }) => {
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-16`}>
      <div className="md:w-1/2 flex-shrink-0">
        <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-2xl shadow-yellow-900/20 w-full" />
      </div>
      <div className="md:w-1/2 text-left">
        <p className="text-yellow-400 font-semibold tracking-widest mb-2">{step}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Ritual: React.FC = () => {
  return (
    <section id="ritual" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 md:mb-24">
          THE IGNITION SEQUENCE
        </h2>
        <div className="space-y-16 md:space-y-24">
          <StepCard
            step="STEP 1"
            title="ARM THE SYSTEM."
            description="Commit to your session. Insert the machined Launch Key into its magnetic dock. The ambient light ring will begin to breathe, signaling that the system is armed."
            imageUrl="https://i.imgur.com/ujLEedQ.png"
            imageAlt="Macro Shot 1: Inserting the Launch Key"
          />
          <StepCard
            step="STEP 2"
            title="FLIP THE GUARD."
            description="Prepare for launch. The ignition guard prevents accidental starts and builds anticipation. Flipping it is a deliberate act of intent, readying you for the task ahead."
            imageUrl="https://i.imgur.com/c6RER8e.png"
            imageAlt="Macro Shot 2: Flipping the ignition guard"
            reverse={true}
          />
          <StepCard
            step="STEP 3"
            title="PRESS TO IGNITE."
            description="Engage HyperFocus. A single, satisfying press sends the command to all your devices, blocking distractions instantly. Your engine is now running. Your time is now yours."
            imageUrl="https://i.imgur.com/ORxQXNp.png"
            imageAlt="Product Render: Pressing the Ignition Button"
          />
        </div>
      </div>
    </section>
  );
};

export default Ritual;