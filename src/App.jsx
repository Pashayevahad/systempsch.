import React from 'react';

function App() {
  return (
    /* The Golden Background from your Stitch design */
    <div className="relative min-h-screen bg-[#FFD700] overflow-hidden font-serif">

      {/* Navigation Bar: Recreated with 6-tab glassmorphism */}
      <nav className="relative z-20 flex justify-between items-center p-8 bg-black/5 backdrop-blur-sm border-b border-white/10">
        <div className="text-xl font-bold tracking-tighter text-white">AeroNeural</div>
        <div className="flex space-x-8 text-[11px] font-mono uppercase tracking-widest text-white/80">
          <a href="#" className="hover:text-white transition">Complex System</a>
          <a href="#" className="hover:text-white transition">Chaos Theory</a>
          <a href="#" className="hover:text-white transition">System Thinking</a>
          <a href="#" className="text-black font-bold">Psychology</a>
          <a href="#" className="hover:text-white transition">Business Psych</a>
          <a href="#" className="hover:text-white transition">Food Psych</a>
        </div>
      </nav>

      {/* Hero Content: Matching "The Ascent" exactly */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
        <h1 className="text-9xl font-black text-white uppercase tracking-tighter drop-shadow-2xl opacity-90">
          The Ascent
        </h1>

        {/* Central Image: This links your screen.png asset */}
        <div className="relative mt-8 w-80 h-80 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
          <img
            src="/screen.png"
            className="relative z-10 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            alt="Neural Tree"
          />
        </div>

        <p className="mt-12 max-w-xl text-white/70 font-mono text-xs uppercase tracking-[0.4em] leading-relaxed">
          Where structural engineering meets cognitive resonance. <br />
          Navigating the turbulence of existence.
        </p>
      </main>

      {/* The Bottom Footer from Stitch */}
      <footer className="absolute bottom-8 w-full flex justify-between px-12 text-[9px] font-mono text-white/30 uppercase tracking-[0.5em]">
        <div>AeroNeural // The Horizon List © 2026</div>
        <div className="flex space-x-6">
          <span>Research Papers</span>
          <span>Methodology</span>
          <span>Terminal Access</span>
        </div>
      </footer>

      {/* The Foundational Glue: Soft Gradient Layer */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-[#FFD700]/40 pointer-events-none z-0" />
    </div>
  );
}

export default App;
