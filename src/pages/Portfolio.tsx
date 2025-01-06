import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio as PortfolioSection } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Portfolio() {
  return (
    <div className="font-inter">
      <Hero />
      <About />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  );
}