import React, { useState, FormEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! We've added ${email} to our list. We'll notify you on launch!`);
      setEmail('');
      onClose();
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-slate-900 border border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-500/20 w-full max-w-md p-8 text-center relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h2 className="text-4xl font-bold mb-3 text-cyan-400">The Quest Begins Soon!</h2>
        <p className="text-gray-300 mb-6">
          Focus Quest is not yet available, but your adventure is just over the horizon. Leave your email below to be the first to know when we{'\u00A0'}launch.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@adventure.com"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-sans"
            required
            aria-label="Email address for launch notification"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-600/30"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;