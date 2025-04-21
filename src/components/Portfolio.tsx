import React from "react";
import { Github, ExternalLink, icons } from "lucide-react";
import Tooltip from "./common/Tooltip";
import { Button } from "./magicui/Button";
import { FaHtml5 } from "react-icons/fa";
import { BigProjects, miniProjects } from "@/projects/projects";
import { Link } from "react-router-dom";

// const projects = [
//   {
//     title: "Project #1",
//     description: "My project #1 description.",
//     image:
//       "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
//     tech: ["React", "TypeScript", "Framer Motion"],
//     github: "https://github.com/BlaztiBoi",
//     demo: "#",
//   },
//   {
//     title: "Project #2",
//     description: "My project #2 description.",
//     image:
//       "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
//     tech: ["React", "TailwindCSS", "Weather API"],
//     github: "https://github.com/BlaztiBoi",
//     demo: "#",
//   },
//   {
//     title: "Tabs Saver",
//     description:
//       "Tabs Saver is a user-friendly browser extension that streamlines your web browsing experience. With Tabs Saver, you can effortlessly manage your open tabs, saving them for later reference and decluttering your workspace.",
//     image:
//       "https://media.discordapp.net/attachments/1235919914846650378/1325785812218019891/icon128.png?ex=677d0dc1&is=677bbc41&hm=fef034fb29390dd6257b52541c5ff50ff5facb14ca6d8bc376025bf85427570e&=&format=webp&quality=lossless&width=160&height=160",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/BlaztiBoi/tab-saver",
//     demo: "#",
//   },
// ];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2E5077] mb-12">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-2  gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {miniProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm h-fit p-4 border border-neutral-200 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 gap-1">
                      {project.icons.map((ICON, index) => {
                        return (
                          <Tooltip message={project.tech[index]} key={index}>
                            <div className="bg-gray-100 shadow-lg rounded-sm p-1">
                              <ICON size={18} />
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-xs flex items-center gap-1 text-gray-600 hover:text-[#2E5077] transition-all hover:ring rounded-sm p-1 hover:ring-accent-teal border-accent-teal"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      <Link
                        to={project.demo}
                        className="text-xs flex items-center gap-1 text-gray-600 hover:text-[#2E5077] transition-colors transition-all hover:ring rounded-sm p-1 hover:ring-accent-teal border-accent-teal"
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
          <div className="">
            {BigProjects.map((project) => (
              <div
                key={project.title}
                className="w-full h-fit p-4 border border-neutral-200 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-24 object-cover mb-2 "
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 text-justify">
                    {project.description}
                  </p>
                  {project.collab &&
                  <div className="flex items-center text-gray-600 text-sm mb-3 self-start flex-row">
                    <span className="mr-2">with</span>
                    {
                      project.collab.map((collab, index) => {
                        return (
                          <div className="flex gap-2">
                            <Tooltip message={collab.tech.join(", ")}>
                              <Link to={collab.github} target="_blank" rel="noopener noreferrer">
                                @{collab.name}
                              </Link>
                            </Tooltip>
                            {project.collab &&
                            index !== project.collab.length - 1 && <span className=""> , </span>
                            }
                          </div>
                        );
                      })
                    }
                  </div>  
                    
                  }
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {project.icons.map((ICON, index) => {
                        return (
                          <Tooltip message={project.tech[index]} key={index}>
                            <div className="bg-gray-100 shadow-lg rounded-sm p-1">
                              <ICON size={24} />
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-sm flex items-center gap-1 text-gray-600 hover:text-[#2E5077] transition-all hover:ring rounded-sm p-1 hover:ring-accent-teal border-accent-teal"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <Link
                        to={project.demo}
                        className="text-sm flex items-center gap-1 text-gray-600 hover:text-[#2E5077] transition-colors transition-all hover:ring rounded-sm p-1 hover:ring-accent-teal border-accent-teal"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </Link>
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
