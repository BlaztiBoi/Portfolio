
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Certificates } from '@/components/Certificates';

export function Portfolio() {
  return (
    <div className="font-inter">
      <Hero />
      <About />
      <Projects />
      <Certificates/>
      <Contact />
      <Footer />
    </div>
  );
}