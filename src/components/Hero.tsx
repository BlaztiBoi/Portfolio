import { useContext } from "react";
import {
  Github,
  Linkedin,
  FileText,
  ChevronDown,
  Facebook,
} from "lucide-react";

import { themeContext } from "../App";

export function Hero() {
  const age =
  new Date().getFullYear() -
  2006 -
  (new Date() < new Date("2025-02-12") ? 1 : 0);
  const { darkMode } = useContext(themeContext);
  return (
    <div
      id="top"
      className="relative min-h-screen flex items-center px-4 pt-28 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: darkMode
            ? "radial-gradient(circle at 20% 20%, rgba(121, 215, 190, 0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(46, 80, 119, 0.25), transparent 40%), linear-gradient(135deg, #0A192F 0%, #1E3550 45%, #0E2136 100%)"
            : "radial-gradient(circle at 20% 20%, rgba(121, 215, 190, 0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(46, 80, 119, 0.28), transparent 40%), linear-gradient(135deg, #F6F4F0 0%, #DCE6EF 45%, #EEF4F8 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(121,215,190,.18),transparent_35%)]" />
      <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-accent-teal/20 blur-3xl" />
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-blue/30 blur-3xl" />

      <section className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur text-sm shadow ${
                darkMode
                  ? "border-white/20 bg-white/10 text-white/90"
                  : "border-primary-blue/20 bg-white/70 text-primary-blue"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              Open to opportunities
            </div>
            <div className={darkMode ? "text-white" : "text-primary-blue"}>
              <p
                className={`text-base md:text-lg uppercase tracking-[0.2em] ${
                  darkMode ? "text-white/70" : "text-primary-blue/70"
                }`}
              >
                Web Developer & AI Engineer
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Aung Htet Oo
              </h1>
              <p
                className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-2  lg:mx-0 ${
                  darkMode ? "text-white/80" : "text-primary-blue/80"
                }`}
              >
                Learning and adapting to the growing technologies this world has to offer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-teal text-primary-navy font-semibold shadow-lg shadow-accent-teal/30 hover:-translate-y-0.5 transition transform"
                rel="noreferrer"
              >
                <FileText size={20} />
                Resume
              </a>
              <a
                href="#portfolio"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-semibold transition ${
                  darkMode
                    ? "border-white/30 bg-white/10 text-white hover:border-accent-teal hover:text-accent-teal"
                    : "border-primary-blue/30 bg-white/80 text-primary-blue hover:border-accent-teal hover:text-accent-teal"
                }`}
              >
                View Projects
              </a>
            </div>

            <div
              className={`flex gap-4 justify-center lg:justify-start ${
                darkMode ? "text-white" : "text-primary-blue"
              }`}
            >
              <a
                href="https://github.com/BlaztiBoi"
                className="hover:text-accent-teal transition duration-150 hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://facebook.com/AungHtetOo.2006"
                className="hover:text-accent-teal transition duration-150 hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aunghtetoo2006/"
                className="hover:text-accent-teal transition duration-150 hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent-teal/40 via-white/10 to-primary-blue/40 blur-2xl" />
            <div
              className={`relative rounded-3xl border backdrop-blur-xl shadow-2xl overflow-hidden ${
                darkMode
                  ? "border-white/20 bg-white/5"
                  : "border-primary-blue/10 bg-white/80"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  darkMode ? "from-white/10" : "from-primary-blue/5"
                } to-transparent`}
              />
              <img
                src="FACE.jpg"
                className=" h-[520px] object-fit"
                alt="Aung Htet Oo portrait"
              />
            </div>
            <div
              className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 w-90 whitespace-nowrap py-2 rounded-full border backdrop-blur ${
                darkMode
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-white text-primary-blue border-primary-blue/10 shadow-lg"
              }`}
            >
              Aung Htet Oo ( Blazt ) | {age}
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center lg:justify-start mt-12 animate-bounce ${
            darkMode ? "text-white" : "text-primary-blue"
          }`}
        >
          <a
            href="#about"
            className="hover:text-[#79D7BE] transition-colors duration-150"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
