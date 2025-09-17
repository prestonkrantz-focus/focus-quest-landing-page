import React, { useState, useEffect, useRef } from 'react';

const ParentFeature: React.FC = () => {
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
    <section ref={sectionRef} className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className={`lg:w-1/2 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="https://i.imgur.com/ifN7QDk.png" 
              alt="Parental dashboard in Focus Quest showing a child's progress, focus hours, and achievements."
              className="rounded-2xl shadow-2xl shadow-emerald-500/20 object-cover w-full h-auto aspect-square"
            />
          </div>
          <div className={`lg:w-1/2 transform transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-emerald-400 font-semibold tracking-widest">FOR THE PARENT</span>
            <h2 className="text-4xl font-bold my-4">More Than a Game. It's a Skill-Builder.</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Every sword forged isn't just a sword—it's a completed homework assignment. Every monster defeated is a victory over procrastination. Focus Quest uses proven game design principles to help your child build tangible executive function skills, self-discipline, and the powerful ability to delay gratification. We turn the dopamine loop of gaming into a tool for real-world{'\u00A0'}achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentFeature;