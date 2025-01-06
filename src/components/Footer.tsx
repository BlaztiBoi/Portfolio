import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E3550] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Aung Htet Oo ( Blazt )</h3>
            <p className="text-white/60">Building the future, one line at a time.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/BlaztiBoi"
              className="hover:text-[#79D7BE] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://facebook.com/AungHtetOo.2006"
              className="hover:text-[#79D7BE] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:aunghtetoo12nd@gmail.com"
              className="hover:text-[#79D7BE] transition-colors duration-300"
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