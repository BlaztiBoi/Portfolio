import { useContext } from "react";
import { themeContext } from "../App";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { darkMode, setDarkMode } = useContext(themeContext);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        darkMode ? "text-white" : "text-gray-200"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-primary-navy/80 to-primary-blue/80 opacity-90" />
      <div className="absolute inset-0 backdrop-blur-md border-b border-white/10" />

      <nav className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold tracking-tight text-lg"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-teal/20 border border-accent-teal/40 text-accent-teal">
            AH
          </span>
          <span className="hidden sm:inline">Aung Htet Oo</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group"
            >
              <span className="transition-colors group-hover:text-accent-teal">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-accent-teal transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="resume.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm hover:bg-white/20 transition"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition shadow-lg ${
              darkMode
                ? "bg-gray-800/80 border-white/20 hover:border-accent-teal"
                : "bg-white/80 border-primary-blue/30 hover:border-accent-teal text-primary-blue"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
