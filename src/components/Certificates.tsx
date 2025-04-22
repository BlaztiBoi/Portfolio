import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/magicui/carousel";

import { certificates } from "@/assets/certificates"; // adjust path if needed
import { useContext } from "react";
import { themeContext } from "@/App";
import Tooltip from "./common/Tooltip";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function Certificates() {
  let { darkMode } = useContext(themeContext);

  return (
    <section
      id="portfolio"
      className={`py-20 transition-all ${
        darkMode ? "bg-primary-navy-dark text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`transition text-4xl font-bold text-center ${
            darkMode ? "text-accent-teal-dark" : "text-primary-blue"
          } mb-12`}
        >
          Certificates
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <div className="h-full">
                  <div
                    className={`rounded-xl shadow-md overflow-hidden h-full transition ${
                      darkMode
                        ? "bg-white/10 border border-accent-teal"
                        : "bg-white border"
                    }`}
                  >
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      width={500}
                      height={300}
                      className="w-full max-h-40 object-cover transition duration-200 ease-in-out hover:scale-110"
                    />
                    <div className="p-4 flex flex-col">
                      <h3
                        className={`text-base font-semibold ${
                          darkMode ? "text-neutral-200" : "text-gray-800"
                        } mb-1`}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-neutral-300" : "text-gray600"
                        }`}
                      >
                        {cert.issuer} • {cert.date}
                      </p>
                      
                        <div className="mt-2 w-[80%] md:grid grid-cols-6 gap-1 hidden">
                          {cert.icons.map((ICON, index) => {
                            return (
                              <Tooltip message={cert.tech[index]} key={index}>
                                <div
                                  className={`transition-all border ${
                                    darkMode
                                      ? "border-accent-teal-dark text-white/90"
                                      : "bg-gray-100"
                                  } shadow-lg rounded-sm p-1`}
                                >
                                  <ICON size={20} />
                                </div>
                              </Tooltip>
                            );
                          })}
                        </div>
                        <div className="mt-2 flex flex-wrap w-full gap-2 md:hidden">
                          {cert.tech.map((tech, index) => {
                            return (
                              <div
                                className={`w-auto h-fit flex-grow text-xs transition-all border ${
                                  darkMode
                                    ? "border-accent-teal-dark text-white/90"
                                    : "bg-gray-100"
                                } shadow-lg rounded-sm p-1`}
                              >
                                {tech}
                              </div>
                            );
                          })}
                        </div>
                      
                      {cert.link && (
                        <Link
                          to={cert.link}
                          className={` text-sm flex items-center gap-1 self-end ${
                            darkMode
                              ? "text-neutral-200 hover:text-accent-teal-dark"
                              : "text-gray-600 hover:text-[#2E5077]"
                          }  transition-all hover:ring rounded-sm p-1 hover:ring-accent-teal border-accent-teal`}
                        >
                          <ExternalLink size={18} />
                          <span>View</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={`${
              darkMode
                ? "border-accent-teal bg-gray-900 hover:bg-gray-900"
                : "border-primary-navy"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
          <CarouselNext
            className={`mr-8 ${
              darkMode
                ? "border-accent-teal bg-gray-900 hover:bg-gray-900"
                : "border-primary-navy"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
        </Carousel>
      </div>
    </section>
  );
}
