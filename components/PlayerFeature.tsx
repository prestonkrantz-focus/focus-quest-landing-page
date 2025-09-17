import React, { useState, useEffect, useRef } from 'react';

const PlayerFeature: React.FC = () => {
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
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#0D1117] to-[#161B22]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              src="https://i.imgur.com/RRJyhIu.png"
              alt="Focus Quest hero clad in glowing blue armor, wielding a powerful sword."
              className="rounded-2xl shadow-2xl shadow-purple-500/20 object-cover w-full h-auto"
            />
          </div>
          <div className={`lg:w-1/2 transform transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-purple-400 font-semibold tracking-widest">FOR THE PLAYER</span>
            <h2 className="text-4xl font-bold my-4">Your Focus Is The Ultimate Stat</h2>
            <div className="w-24 h-1 bg-purple-500 rounded mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Stop grinding boring tasks and start grinding for legendary loot. With Focus Quest, every study session levels up your character. Craft custom builds, theory-craft the perfect gear combos for challenging boss fights, and compete with friends to see whose focus yields the most powerful hero. In this game, the meta isn't about who has the most time to play—it's about who has the most discipline. Your focus is your{'\u00A0'}XP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerFeature;