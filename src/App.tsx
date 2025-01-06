import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { FloatingNav } from './components/common/FloatingNav';

// import FloatingHeader from './components/common/FloatingHeader';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <div className="font-inter">
        <Routes>
          
          <Route path="/"  element={<Layout />}>
          <Route index element={<Portfolio />} />

          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}