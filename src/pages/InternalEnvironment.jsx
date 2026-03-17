import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const InternalEnvironment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#0E0A08] text-white font-sans overflow-x-hidden pb-12">

            {/* Top Navigation */}
            <div className="flex justify-end p-6">
                <Link to="/chapter-1" className="flex items-center text-[#D95A11] hover:text-[#FF8C42] transition-colors text-sm font-medium uppercase tracking-wider">
                    Back to Chapter
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mt-8 lg:mt-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Core Text */}
                    <div className="flex flex-col">
                        {/* Header Section */}
                        <div className="mb-12 lg:mb-24">
                            <p className="text-[#D95A11] font-bold text-xs tracking-widest uppercase mb-4">Easy Explanation</p>
                            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-2">
                                The Milieu <br /> Intérieur: <br />
                                <span className="text-[#D4AF37] italic">Simply Put</span>
                            </h1>
                            <div className="w-16 h-1 bg-[#D95A11] mt-6"></div>
                        </div>

                        {/* The Key Takeaway */}
                        <div className="mb-12 lg:mb-0">
                            <h2 className="text-3xl font-serif text-[#D95A11] mb-6">The Key Takeaway</h2>
                            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-300 leading-snug">
                                "Life doesn't happen <span className="text-[#D4AF37]">in</span> the world; it happens in the stable liquid environment our bodies create <span className="text-[#D4AF37]">against</span> the world."
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Column: Cards & Graphics */}
                    <div className="flex flex-col">
                        {/* Submarine Metaphor Card */}
                        <div className="border border-[#D95A11] rounded-[2rem] p-8 md:p-10 bg-[#120D0A] mb-16 relative overflow-hidden">
                            {/* Subtle gradient effect inside card */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#D95A11]/5 to-transparent pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <svg className="w-8 h-8 text-[#D95A11] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <h2 className="text-2xl font-serif font-bold text-white">The Submarine Metaphor</h2>
                                </div>

                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Think of a <strong className="text-white">submarine</strong> in the deep ocean.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-[#D95A11] text-xs font-bold uppercase tracking-wider mb-2">External Environment</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">The ocean is freezing and high-pressure.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[#4CAF50] text-xs font-bold uppercase tracking-wider mb-2">Internal Environment</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">Inside, the crew stays warm and can breathe.</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm italic leading-relaxed border-t border-white/10 pt-6">
                                    The submarine maintains its own air and temperature regardless of the chaos outside. This is your body's "Milieu Intérieur."
                                </p>
                            </div>
                        </div>

                        {/* Interactive Dial Graphic */}
                        <div className="flex flex-col items-center justify-center mb-16 relative">
                            <div className="text-[#4C8CBF] text-xs font-bold uppercase tracking-widest mb-8 text-center z-10">
                                -30°C SIBERIA / OCEAN
                            </div>

                            <div className="relative w-64 h-64 flex items-center justify-center">
                                {/* Outer dashed circles */}
                                <div className="absolute inset-0 border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-[#4C8CBF]/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>

                                {/* Directional arrows */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#4C8CBF]/50 rotate-180"></div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#4C8CBF]/50"></div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#4C8CBF]/50 rotate-90"></div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#4C8CBF]/50 -rotate-90"></div>

                                {/* Central glowing dial */}
                                <div className="relative w-40 h-40 rounded-full bg-[#1A110B] border-2 border-[#D95A11] shadow-[0_0_30px_rgba(217,90,17,0.3)] flex flex-col items-center justify-center z-10">
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(217,90,17,0.2)] pointer-events-none"></div>

                                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#D95A11] mb-2"></div>
                                    <div className="text-[#D95A11] text-[10px] font-bold tracking-widest uppercase mb-1">Internal</div>
                                    <div className="text-4xl font-serif text-white font-bold leading-none">37<span className="text-2xl">°C</span></div>
                                    <div className="text-gray-500 text-[9px] font-bold tracking-widest uppercase mt-1">Constant</div>
                                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-transparent border-t-[#D95A11] mt-2"></div>
                                </div>
                            </div>

                            <div className="text-center mt-12 z-10">
                                <h3 className="text-[#D95A11] text-xs font-bold tracking-widest uppercase mb-3">The Protective Barrier</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                    Regulation pushes back against external pressure to maintain the 'Stable Interior'
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-12 lg:mt-20 flex flex-col items-center max-w-xl mx-auto">
                    <Link to="/chapter-1" className="bg-[#D95A11] hover:bg-[#E86A21] transition-colors text-white text-sm font-bold tracking-widest uppercase py-4 px-8 rounded-lg w-full text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                        Got it, Back to Chapter
                    </Link>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold mt-8">
                        Systems Thinking &bull; Foundation Module
                    </p>
                </div>

            </div>
        </div>
    );
};

export default InternalEnvironment;
