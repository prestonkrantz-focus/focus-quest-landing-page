import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <div className="border-2 border-cyan-400/50 p-8 md:p-12 rounded-lg bg-gray-800/30 relative">
                    <svg className="absolute top-4 left-4 h-8 w-8 text-cyan-400/50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.333 22.667h4.333l2.667-8h-5.333l-1.667 8zm10.667 0h4.333l2.667-8h-5.333l-1.667 8zM28 6.667v18.667c0 1.473-.947 2.667-2.113 2.667H6.113C4.947 28 4 26.806 4 25.333V6.667C4 5.194 4.947 4 6.113 4h19.773C27.053 4 28 5.194 28 6.667z" />
                    </svg>
                    <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed italic">
                        "I leveled up my character by writing my entire term paper. I've tried every other focus app and quit them all because they're boring. This one isn't. It's the first tool that feels like it was actually made for me."
                    </blockquote>
                    <cite className="block mt-6 font-orbitron text-lg font-bold text-cyan-400 not-italic tracking-wider">
                        - Alex J., College Student
                    </cite>
                     <svg className="absolute bottom-4 right-4 h-8 w-8 text-cyan-400/50 transform rotate-180" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.333 22.667h4.333l2.667-8h-5.333l-1.667 8zm10.667 0h4.333l2.667-8h-5.333l-1.667 8zM28 6.667v18.667c0 1.473-.947 2.667-2.113 2.667H6.113C4.947 28 4 26.806 4 25.333V6.667C4 5.194 4.947 4 6.113 4h19.773C27.053 4 28 5.194 28 6.667z" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;