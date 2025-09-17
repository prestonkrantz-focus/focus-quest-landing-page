
import React, { useState, useEffect, useRef } from 'react';

const Step: React.FC<{ icon: JSX.Element; title: string; description: string; stepNumber: number; className?: string }> = ({ icon, title, description, stepNumber, className }) => (
  <div className={`flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 hover:scale-105 transition-all duration-300 ${className}`}>
    <div className="relative mb-4">
      <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-cyan-500 text-slate-900 font-bold rounded-full border-2 border-slate-800">
        {stepNumber}
      </div>
      <div className="flex items-center justify-center w-20 h-20 bg-slate-700 rounded-full text-cyan-400">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#161B22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">The New Meta for Focus</h2>
          <div className="inline-block w-24 h-1 bg-cyan-500 rounded"></div>
        </div>
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Step
            stepNumber={1}
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="SET YOUR FOCUS"
            description="Set a timer for any real-world task. Forging begins, and distracting apps are locked. Your grind starts{'\u00A0'}now."
            className={`duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          />
          <Step
            stepNumber={2}
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L12 12m2.121-2.121L12 12m0 0L9.879 9.879M12 12l2.121 2.121"></path></svg>}
            title="FORGE YOUR GEAR"
            description="Every minute of uninterrupted focus is time your hero spends crafting epic swords, powerful armor, and magical potions. The longer you focus, the stronger you{'\u00A0'}become."
            className={`duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          />
          <Step
            stepNumber={3}
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1.75l-1.41 1.41-5.66 5.66-1.41 1.41L12 18.25l8.48-8.47-1.41-1.41-5.66-5.66L12 1.75zM4.5 12.5l7.5 7.5 7.5-7.5" transform="rotate(45 12 12)"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l9 9 9-9"></path></svg>}
            title="CONQUER YOUR QUEST"
            description="Automatically equip your hero with the gear you've earned and send them into battle. Slay monsters, defeat bosses, and climb the leaderboards—all powered by your real-world{'\u00A0'}effort."
            className={`duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;