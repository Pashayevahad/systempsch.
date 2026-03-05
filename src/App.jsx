import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ComplexSystems from './pages/ComplexSystems';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-charcoal overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/complex-systems" element={<ComplexSystems />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;