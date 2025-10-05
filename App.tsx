
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ritual from './components/Ritual';
import Engineering from './components/Engineering';
import Software from './components/Software';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="bg-black text-gray-300 font-sans antialiased relative">
      <Header onReserveClick={openModal} />
      <main>
        <Hero onReserveClick={openModal} />
        <Ritual />
        <Engineering />
        <Software />
        <CtaSection onReserveClick={openModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
