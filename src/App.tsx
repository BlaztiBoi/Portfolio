import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlackjackGame } from './pages/BlackjackGame';
import { Portfolio } from './pages/Portfolio';
import { FloatingNav } from './components/common/FloatingNav';
import { Home } from './pages/Home'

export default function App() {
  return (
    <Router>
      <div className="font-inter">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blackjack" element={<BlackjackGame />} />
        </Routes>
        <FloatingNav />
      </div>
    </Router>
  );
}