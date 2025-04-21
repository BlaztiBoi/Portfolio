import { useContext } from "react";
import {
  Github,
  Linkedin,
  FileText,
  ChevronDown,
  Facebook,
  User2Icon,
} from "lucide-react";

import { themeContext } from "../App";

export function Hero() {
  let { darkMode } = useContext(themeContext);
  return (
    <div className="min-h-screen  shadow-1xl border-primary-blue-dark relative flex items-center justify-center px-4">
      <div className="absolute inset-0 transition-opacity duration-100 z-0"
       style={{ 
         background: 'linear-gradient(to bottom right, #2E5077, #4DA1A9, #00B4AB)', 
         opacity: darkMode ? 0 : 1 
       }} />
  <div className="absolute inset-0 transition-opacity duration-100 z-0"
       style={{ 
         background: 'linear-gradient(to bottom right, #0A192F, #2E5077)', 
         opacity: darkMode ? 1 : 0 
       }} />
      <section className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <User2Icon
            size={100}
            className="mx-auto p-1 mb-3 border rounded-full"
          ></User2Icon>
          <h1 className="text-2xl md:text-5xl font-bold mb-6 animate-fade-in ">
            Aung Htet Oo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#F6F4F0] opacity-90">
            Web Developer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full 
            hover:ring-2 hover:ring-accent-teal transition-all duration-100 border border-white/20  "
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 py-3 border backdrop-blur-sm bg-white/10 border-white/20 rounded-full 
            hover:ring-accent-teal hover:ring-2 transition-all duration-100"
            >
              View Projects
            </a>
          </div>
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="https://github.com/BlaztiBoi"
              className="hover:text-accent-teal transition duration-100 hover:ring-2 hover:ring-accent-teal shadow-lg rounded-full p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://facebook.com/AungHtetOo.2006"
              className="hover:text-accent-teal transition duration-100 hover:ring-2 hover:ring-accent-teal shadow-lg rounded-full p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aunghtetoo2006/"
              className="hover:text-accent-teal transition duration-100 hover:ring-2 hover:ring-accent-teal shadow-lg rounded-full p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            
          </div>  
        </div>
        <div className=" flex justify-center animate-bounce">
          <a
            href="#about"
            className="hover:text-[#79D7BE] transition-colors duration-100"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
