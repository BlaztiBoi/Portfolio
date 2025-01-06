import React from 'react';
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#2E5077] via-[#4DA1A9] to-[#79D7BE] text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#F6F4F0] opacity-90">
          Building Digital Dreams with Code
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full 
            hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <FileText size={20} />
            <span>Resume</span>
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-6 py-3 bg-[#79D7BE] rounded-full 
            hover:bg-[#6BC4AB] transition-all duration-300"
          >
            View Work
          </a>
        </div>
        <div className="flex gap-6 justify-center mb-16">
          <a
            href="https://github.com"
            className="hover:text-[#79D7BE] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-[#79D7BE] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}