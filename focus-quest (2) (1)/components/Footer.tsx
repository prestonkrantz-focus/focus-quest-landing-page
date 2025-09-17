
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4 text-center text-gray-500 flex flex-col items-center">
        <div className="flex justify-center items-center mb-6">
            <svg className="w-12 h-12 text-cyan-400 mr-3 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2.5L3.5 6v7c0 4.5 8.5 7.5 8.5 7.5s8.5-3 8.5-7.5V6L12 2.5z" />
                <path d="M12 15V8l-2 2" />
                <path d="M12 8l2 2" />
                <path d="M12 15l-1 4h2l-1-4z" />
            </svg>
            <span className="text-3xl font-black tracking-widest text-gray-200">FOCUS QUEST</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Focus Quest. All rights reserved. An adventure in{'\u00A0'}productivity.</p>
      </div>
    </footer>
  );
};

export default Footer;