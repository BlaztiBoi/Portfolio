import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f1e33] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(121,215,190,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(46,80,119,0.3),transparent_35%)]" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Aung Htet Oo ( Blazt )</h3>
            <p className="text-white/60">
              Building the future, one line at a time.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/BlaztiBoi"
              className="hover:text-[#79D7BE] transition-colors duration-300 p-2 rounded-full border border-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://facebook.com/AungHtetOo.2006"
              className="hover:text-[#79D7BE] transition-colors duration-300 p-2 rounded-full border border-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:aunghtetoo12nd@gmail.com"
              className="hover:text-[#79D7BE] transition-colors duration-300 p-2 rounded-full border border-white/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} A.H.O (Blazt). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
