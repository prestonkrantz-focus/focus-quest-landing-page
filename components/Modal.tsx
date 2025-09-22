import React, { useState } from 'react';

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() === '' || !email.includes('@')) {
            // simple validation
            return;
        }
        console.log('Transmission received for email:', email);
        setSubmitted(true);
    };
    
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="relative bg-gray-800 border-2 border-cyan-400/50 rounded-lg shadow-2xl p-8 m-4 max-w-md w-full text-center transform transition-all duration-300 scale-95 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {!submitted ? (
                    <>
                        <h2 className="font-orbitron text-3xl font-bold text-white mb-2">WELCOME, AWAKENED.</h2>
                        <p className="text-gray-300 mb-6">The Quest will begin soon. Leave your email to secure your place. We will not succumb to the Signal.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="your-callsign@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                            />
                            <button
                                type="submit"
                                className="w-full font-orbitron uppercase font-bold tracking-widest px-6 py-3 bg-cyan-500 text-gray-900 rounded-md hover:bg-cyan-400 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-400"
                            >
                                Submit Transmission
                            </button>
                        </form>
                    </>
                ) : (
                    <div>
                        <h2 className="font-orbitron text-3xl font-bold text-green-400 mb-2">TRANSMISSION RECEIVED.</h2>
                        <p className="text-gray-300">Stand by for a signal. The resistance will contact you when the time is right.</p>
                        <p className="text-sm mt-4 text-gray-500">You may now close this window.</p>
                    </div>
                )}
            </div>
            {/* FIX: The 'jsx' prop on the <style> tag is a Next.js feature and not supported in this React setup, causing a TypeScript error. Removing it reverts to a standard style tag, which corrects the issue. */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Modal;
