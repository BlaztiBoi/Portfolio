import { Github, ExternalLink, Sparkles } from "lucide-react";
import Tooltip from "./common/Tooltip";
import { BigProjects, miniProjects } from "@/projects/projects";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "@/App";

export function Projects() {
   let { darkMode } = useContext(themeContext);
  return (
    <section 
      id="portfolio"       
      className={`relative py-20 transition-all overflow-hidden ${
        darkMode
          ? "bg-primary-navy-dark"
          : "bg-white"
    }`}>
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-accent-teal/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className={`text-sm uppercase tracking-[0.3em] ${darkMode ? "text-white/70" : "text-primary-blue/70"}`}>My Work</p>
            <h2 className={`transition text-4xl font-bold ${ darkMode ? "text-accent-teal-dark": "text-primary-blue"} mt-2`}>
              My Projects
            </h2>
          </div>
          <div className={`flex items-center gap-2 text-sm ${darkMode ? "text-white/70" : "text-primary-blue/70"}`}>
            <Sparkles className="h-4 w-4 text-accent-teal" />
            Most Used : React, Typescript , Tailwind
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {miniProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  className={`max-w-sm h-fit p-4 border ${
                    darkMode
                      ? "border-accent-teal-dark bg-white/5"
                      : "border-primary-blue/10 bg-white"
                  } rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition`}
                >
                  <h3 className={`text-lg font-semibold ${ darkMode ? "text-neutral-200": "text-gray-800"}  mb-1`}>
                    {project.title}
                  </h3>
                  <p className={`${ darkMode ? "text-neutral-300": "text-gray-600"}  text-sm mb-3`}>
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 gap-1">
                      {project.icons.map((ICON, index) => {
                        return (
                          <Tooltip message={project.tech[index]} key={index}>
                            <div className="bg-gray-100 shadow-lg rounded-sm p-1 text-gray-900">
                              <ICON size={18} />
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className={`text-xs flex items-center gap-1 ${
                          darkMode
                            ? "text-neutral-200 hover:text-accent-teal-dark"
                            : "text-gray-600 hover:text-[#2E5077]"
                        }  transition-all hover:ring rounded-sm px-2 py-1 hover:ring-accent-teal border-accent-teal`}
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      <Link
                        to={project.demo}
                        className={`text-xs flex items-center gap-1 ${
                          darkMode
                            ? "text-neutral-200 hover:text-accent-teal-dark"
                            : "text-gray-600 hover:text-[#2E5077]"
                        }  transition-all hover:ring rounded-sm px-2 py-1 hover:ring-accent-teal border-accent-teal`}
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
          <div className="grid gap-4">
            {BigProjects.map((project) => (
              <div
                key={project.title}
                className={`w-full h-fit p-6 border ${
                  darkMode
                    ? "border-accent-teal-dark bg-white/5"
                    : "border-primary-blue/10 bg-white"
                } rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition`}
              >
                <div className="flex justify-center rounded-xl overflow-hidden border border-white/10 bg-gray-50 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-40 object-cover"
                  />
                  <div className="absolute inset-0 to-transparent" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${ darkMode ? "text-neutral-200": "text-gray-800"} mb-1`}>
                    {project.title}
                  </h3>
                  <p className={`${ darkMode ? "text-neutral-300": "text-gray-600"} text-sm mb-3 text-justify`}>
                    {project.description}
                  </p>
                  {project.collab && (
                    <div className={`flex items-center ${ darkMode ? "text-neutral-300": "text-gray-600"} text-sm mb-3 self-start flex-row`}>
                      <span className="mr-2">with</span>
                      {project.collab.map((collab, index) => {
                        return (
                          <div className="flex gap-2">
                            <Tooltip message={collab.tech.join(", ")}>
                              <Link
                                to={collab.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                @{collab.name}
                              </Link>
                            </Tooltip>
                            {project.collab &&
                              index !== project.collab.length - 1 && (
                                <span className=""> , </span>
                              )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          darkMode
                            ? "bg-white/10 text-white border border-white/10"
                            : "bg-primary-blue/5 text-primary-blue border border-primary-blue/10"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className={`text-sm flex items-center gap-1 ${ darkMode ? "text-neutral-200 hover:text-accent-teal-dark": "text-gray-600 hover:text-[#2E5077]"} transition-all hover:ring rounded-sm px-2 py-1 hover:ring-accent-teal border-accent-teal`}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <Link
                        to={project.demo}
                        className={`text-sm flex items-center gap-1 ${ darkMode ? "text-neutral-200 hover:text-accent-teal-dark": "text-gray-600 hover:text-[#2E5077]"}  transition-all hover:ring rounded-sm px-2 py-1 hover:ring-accent-teal border-accent-teal`}
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {project.icons.map((ICON, index) => {
                        return (
                          <Tooltip message={project.tech[index]} key={index}>
                            <div className="bg-gray-100 shadow-lg rounded-sm p-1 text-gray-900">
                              <ICON size={20}  />
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
