import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import AuthPage from './components/AuthPage';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
