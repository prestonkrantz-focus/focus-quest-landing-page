
import React, { useState } from 'react';

const CTASection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert(`Thank you for joining the waitlist with ${email}!`);
        setEmail('');
    };

    return (
        <section id="cta" className="bg-white py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-hyper-blue sm:text-4xl">
                    Ready to Reclaim Your Focus?
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Join the exclusive waitlist for HyperFocus and be the first to experience a quieter, more productive digital life. Spots are limited.
                </p>
                <form onSubmit={handleSubmit} className="mt-10 sm:flex sm:justify-center">
                    <div className="relative rounded-md shadow-sm w-full sm:max-w-md">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-hyper-blue sm:text-sm sm:leading-6"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-md bg-hyper-cyan px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hyper-cyan transition-transform transform hover:scale-105"
                        >
                            Join the Waitlist
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CTASection;
