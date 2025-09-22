import React, { useState, useCallback } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <div className={`transition-all duration-500 ${isModalOpen ? 'blur-md brightness-50' : ''}`}>
        <Hero onJoinQuest={handleOpenModal} />
        <main>
          <Problem />
          <Solution />
          <Gallery />
          <Testimonial />
          <FAQ />
          <FinalCTA onJoinQuest={handleOpenModal} />
        </main>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;