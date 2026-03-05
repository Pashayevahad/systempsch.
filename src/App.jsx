import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComplexSystems from './pages/ComplexSystems';

// Extract the layout around the main hero
const HomepageLayout = () => {
  return (
    <div className="animate-fade-in w-full h-full">
      <Hero />

      <section className="relative min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto py-32 text-center h-screen flex flex-col justify-center">
          <h2 className="text-4xl text-white font-serif italic mb-6">Navigating the Turbulence</h2>
          <p className="font-mono text-gray-400">Scroll further down to experience the atmosphere transitioning towards clarity.</p>
        </div>
      </section>

      <section className="relative min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto py-32 text-center h-[150vh] flex flex-col justify-center">
          <h2 className="text-4xl text-white font-serif italic mb-6">Zone of Clarity</h2>
          <p className="font-mono text-gray-400 mb-12">The fog lifts, the system becomes transparent.</p>
        </div>
      </section>
    </div>
  );
};

// Route wrapper to trigger location based cross-fading via standard CSS keys
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/complex-systems" element={<ComplexSystems />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Scrollable Main Content */}
      <div className="relative z-10 bg-charcoal min-h-screen pt-16 lg:pt-0">
        {/* We add top padding corresponding to navbar on mobile since navbar overlaps on desktop relative space vs fixed. Wait, let's keep it immersive. */}
        <AnimatedRoutes />

        <footer className="py-20 px-6 border-t border-[#FFD700]/10 bg-[#121212]" data-purpose="horizon-footer">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-mono font-bold text-[#FFD700] tracking-tighter text-lg mb-2">AeroNeural</h4>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest">The Horizon Line • © 2026</p>
            </div>
            <div className="flex space-x-8 font-mono text-[10px] text-white/60">
              <a href="#" className="hover:text-[#FFD700] uppercase tracking-widest transition-colors">Research Papers</a>
              <a href="#" className="hover:text-[#FFD700] uppercase tracking-widest transition-colors">Methodology</a>
              <a href="#" className="hover:text-[#FFD700] uppercase tracking-widest transition-colors">Terminal Access</a>
            </div>
            <div className="font-mono text-[10px] text-white/20">
              LAT: 37.7749 | LONG: -122.4194
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
