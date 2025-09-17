import React, { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PlayerFeature from './components/PlayerFeature';
import ParentFeature from './components/ParentFeature';
import Screenshots from './components/Screenshots';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#0D1117] text-gray-200 overflow-x-hidden">
      <main>
        <Hero onCTAClick={handleOpenModal} />
        <HowItWorks />
        <Screenshots />
        <PlayerFeature />
        <ParentFeature />
        <FinalCTA onCTAClick={handleOpenModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;