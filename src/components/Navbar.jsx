import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#121212]/70 backdrop-blur-md border-b border-white/10" data-purpose="main-navigation">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="font-mono font-bold text-[#FFD700] tracking-tighter text-xl mr-12">AeroNeural</span>
                    <div className="hidden lg:flex space-x-8 items-center h-full">
                        <a className="font-mono uppercase tracking-widest text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">Complex System</a>
                        <a className="font-mono uppercase tracking-widest text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">Chaos Theory</a>
                        <a className="font-mono uppercase tracking-widest text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">System Thinking</a>
                        <div className="h-4 w-px bg-white/20 mx-2"></div>
                        <a className="font-serif italic text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">Psychology</a>
                        <a className="font-serif italic text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">Business Psych</a>
                        <a className="font-serif italic text-white/80 hover:text-[#FFD700] transition-colors text-[1.1rem] font-bold" href="#">Food Psych</a>
                    </div>
                </div>
                <button className="font-mono text-[10px] border border-[#FFD700]/30 px-4 py-2 hover:bg-[#FFD700] hover:text-[#121212] transition-all text-[#FFD700] rounded-none bg-transparent">
                    LOG_FLIGHT_DATA
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
