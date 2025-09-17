import React, { useState, useEffect, useRef } from 'react';

const screenshots = [
  { src: "https://i.imgur.com/O7VUIce.png", alt: "Focus Journey screen showing total focus hours and weekly progress." },
  { src: "https://i.imgur.com/nzosNRe.png", alt: "Shadow Tunnels game screen showing a hero fighting monsters in a dark cavern." },
  { src: "https://i.imgur.com/sGsxu7j.png", alt: "Armory and inventory screen displaying various weapons and armor." },
  { src: "https://i.imgur.com/L7snMvU.png", alt: "The legendary Sword of Concentration being forged in a mystical fire." },
];

const Screenshots: React.FC = () => {
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
          <h2 className="text-4xl font-bold mb-2">Enter the World of Focus Quest</h2>
          <div className="inline-block w-24 h-1 bg-cyan-500 rounded"></div>
        </div>
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-3xl border-2 border-slate-700 hover:border-cyan-400 shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-auto object-cover aspect-[9/19.5] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;