import React, { FormEvent, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '' && email.includes('@')) {
      console.log('Email submitted:', email);
      setSubmitted(true);
      // In a real app, you would make an API call here.
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 border border-yellow-500/50 rounded-lg shadow-2xl shadow-yellow-900/50 w-full max-w-md m-4 p-8 text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              RESERVE YOUR HYPERFOCUS
            </h2>
            <p className="text-gray-400 mb-6">
              Join the waiting list to secure your build slot.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@domain.com"
                required
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-md transition-colors duration-300"
              >
                SECURE MY SLOT
              </button>
            </form>
          </>
        ) : (
          <div>
             <h2 className="text-3xl font-bold uppercase tracking-tight mb-2 text-yellow-400">
              RESERVATION CONFIRMED
            </h2>
            <p className="text-gray-300">
              Thank you. We will notify you when production begins. Keep an eye on your inbox for exclusive updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;