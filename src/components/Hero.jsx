import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden pointer-events-none" data-purpose="hero-section" id="ascent">
            <div className="relative z-10 text-center max-w-4xl pointer-events-auto" data-purpose="hero-content">
                <p className="font-mono mono-label text-[#FFD700] mb-4 animate-pulse uppercase tracking-[0.15em] text-xs">Initializing Ascent: System.Psyche.v1</p>
                <h1 className="text-6xl md:text-8xl font-bold section-title mb-8 leading-tight tracking-[-0.02em]">
                    The <span className="italic font-serif">Ascent</span>
                </h1>
                {/* Central Image Container */}
                <div className="relative mx-auto w-64 h-64 md:w-96 md:h-96 mb-12 group">
                    <div className="absolute -inset-4 bg-[#FFD700]/20 rounded-full blur-3xl group-hover:bg-[#FFD700]/40 transition-all duration-700"></div>
                    <img
                        alt="A high-resolution, artistic graphic of a hybrid between a neural network and a growing tree."
                        className="relative z-10 w-full h-full object-cover rounded-full border-2 border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20"
                        src="/screen.png"
                    />
                </div>
                <p className="font-mono text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Where structural engineering meets cognitive resonance. Exploring the aerodynamic properties of the human mind as it navigates the turbulence of existence.
                </p>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="font-mono text-[10px] uppercase tracking-widest">Descent into depth</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
