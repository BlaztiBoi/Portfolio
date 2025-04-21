import {useContext} from "react";   // import the useContext hook that will allow you to actually use the created and imported context 
import { themeContext } from "../App";
import { Moon, Sun } from "lucide-react";


export function Header() {
    let {darkMode , setDarkMode} = useContext(themeContext);

  return (
    <section className={` transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <nav className="fixed w-full p-4  z-50 ">
        <div className="max-w-7xl mx-auto flex justify-end items-center  bg-opacity-70">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`backdrop-blur-md shadow-lg p-2 rounded-full focus:outline-none hover:ring-2 hover:ring-accent-teal border-2 border-accent-teal transition ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
        </nav>
    </section>
  );
}