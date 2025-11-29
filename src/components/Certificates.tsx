import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/magicui/carousel";

import { certificates } from "@/assets/certificates";
import { useContext, useRef, useState } from "react";
import { awards, diplomas, AwardType, Diploma } from "@/assets/achievements";
import { themeContext } from "@/App";
import Tooltip from "./common/Tooltip";
import { Link } from "react-router-dom";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

type AchievementDetail =
  | (Diploma & { type: "diploma" })
  | (AwardType & { type: "award" });

export function Certificates() {
  const { darkMode } = useContext(themeContext);
  const [selected, setSelected] = useState<AchievementDetail | null>(null);
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      className={`relative py-20 transition-all overflow-hidden ${
        darkMode ? "bg-primary-navy-dark text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="absolute inset-x-0 top-10 h-52 bg-gradient-to-b from-primary-blue/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <p
            className={`text-sm uppercase tracking-[0.3em] ${
              darkMode ? "text-white/70" : "text-primary-blue/70"
            }`}
          >
            Achievements
          </p>
          <span
            className={`text-xs px-3 py-1 rounded-full border ${
              darkMode
                ? "bg-white/10 text-white border-white/20"
                : "bg-accent-teal/15 text-primary-blue border-accent-teal/30"
            }`}
          >
            Formal + accolades
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            className={`rounded-2xl p-6 shadow-lg border ${
              darkMode ? "bg-white/5 border-white/10" : "bg-white border-primary-blue/10"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center bg-accent-teal/20  ${darkMode ? "text-accent-teal" : "text-primary-blue"}`}>
                <GraduationCap />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] ${darkMode ? "text-white/60" : "text-primary-blue/70"}`}>
                  Diplomas/Degrees
                </p>
                <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-primary-blue"}`}>
                  Formal education highlights
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {diplomas.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    darkMode ? "border-white/10 bg-white/5" : "border-primary-blue/10 bg-primary-blue/5 "
                  }`}
                >
                  <div className={`flex items-center pr-2 justify-between`}>
                    <h4 className={` font-semibold text-primary-blue  ${
                    darkMode ? "text-white" : ""
                  }`}>
                      {item.title}
                    </h4>
                    <span className={`text-xs  ${ darkMode ? "text-white/80" : "text-primary-blue/70" }`}>
                      {item.date}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${darkMode ? "text-white" : "text-primary-blue/80"}`}
                  >
                    {item.issuer}
                  </p>
                  <p
                    className={`text-sm mt-1 ${darkMode ? "text-white/80" : "text-primary-blue/70"}`}
                  >
                    {item.focus}
                  </p>
                  <button
                    onClick={() => setSelected({ ...item, type: "diploma" })}
                    className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold  hover:underline ${darkMode ? "text-accent-teal" : "text-accent-teal-dark"}`}
                  >
                    More info
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-lg border ${
              darkMode ? "bg-white/5 border-white/10" : "bg-white border-primary-blue/10"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center bg-accent-teal/20  ${darkMode ? "text-accent-teal" : "text-primary-blue"}`}>
                <Award />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] ${darkMode ? "text-white/60" : "text-primary-blue/70"}`}>
                  Awards
                </p>
                <h3 className={`text-lg font-semibold  ${darkMode ? "text-white" : "text-primary-blue"}`}>
                  Recognition & competitions
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {awards.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    darkMode ? "border-white/10 bg-white/5" : "border-primary-blue/10 bg-primary-blue/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-primary-blue"}`}>
                      {item.title}
                    </h4>
                    <span className={`text-xs text-primary-blue/70 dark:text-white/70 ${ darkMode ? "text-white/80" : "text-primary-blue/70" }`}>
                      {item.date}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${darkMode ? "text-white" : "text-primary-blue/80"}`}
                  >
                    {item.issuer}
                  </p>
                  <p
                    className={`text-sm mt-1 ${darkMode ? "text-white/80" : "text-primary-blue/70"}`}
                  >
                    {item.note}
                  </p>
                  <button
                    onClick={() => setSelected({ ...item, type: "award" })}
                    className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-teal hover:underline  ${darkMode ? "text-accent-teal" : "text-accent-teal-dark"}`}
                  >
                    More info
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

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
                      darkMode ? "bg-white/10 border border-accent-teal" : "bg-white border"
                    }`}
                  >
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      width={500}
                      height={300}
                      className="w-full max-h-40 object-cover transition duration-200 ease-in-out hover:scale-110"
                    />
                    <div className="p-4 flex flex-col gap-2">
                      <h3
                        className={`text-base font-semibold ${
                          darkMode ? "text-neutral-200" : "text-gray-800"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={`text-xs ${darkMode ? "text-neutral-300" : "text-gray-600"}`}
                      >
                        {cert.issuer} - {cert.date}
                      </p>

                      <div className="mt-2 w-[80%] md:grid grid-cols-6 gap-1 hidden">
                        {cert.icons.map((ICON, index) => {
                          return (
                            <Tooltip message={cert.tech[index]} key={index}>
                              <div
                                className={`transition-all border ${
                                  darkMode ? "border-accent-teal-dark text-white/90" : "bg-gray-100"
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
                              key={index}
                              className={`w-auto h-fit flex-grow text-xs transition-all border ${
                                darkMode ? "border-accent-teal-dark text-white/90" : "bg-gray-100"
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
              darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
          <CarouselNext
            className={`mr-8 ${
              darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
        </Carousel>
      </div>
      {selected && (
        <AchievementModal
          item={selected}
          onClose={() => setSelected(null)}
          onZoom={(src) => setZoomSrc(src)}
          darkMode={darkMode}
        />
      )}
      {zoomSrc && (
        <ImageZoomOverlay src={zoomSrc} onClose={() => setZoomSrc(null)} />
      )}
    </section>
  );
}

function ImageZoomOverlay({ src, onClose }: { src: string; onClose: () => void }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const LENS_SIZE = 176; // matches tailwind w-44/h-44
  const [lens, setLens] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const [isPortrait, setIsPortrait] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isPortrait) {
      setLens(null);
      return;
    }

    const containerRect = event.currentTarget.getBoundingClientRect();
    const imgRect = imgRef.current?.getBoundingClientRect();
    if (!imgRect) return;

    const x = event.clientX - imgRect.left;
    const y = event.clientY - imgRect.top;

    // If the cursor leaves the image bounds, hide the lens
    if (x < 0 || y < 0 || x > imgRect.width || y > imgRect.height) {
      setLens(null);
      return;
    }

    setLens({
      x,
      y,
      width: imgRect.width,
      height: imgRect.height,
      offsetX: imgRect.left - containerRect.left,
      offsetY: imgRect.top - containerRect.top,
    });
  };

  const handleImageLoad = () => {
    const { naturalWidth, naturalHeight } = imgRef.current ?? {};
    if (naturalWidth && naturalHeight) {
      setIsPortrait(naturalHeight > naturalWidth);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      <div
        className="relative z-[10000] max-w-6xl w-full max-h-[95vh] flex items-center justify-center"
        onMouseMove={handleMove}
        onMouseLeave={() => setLens(null)}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-3 py-1 rounded-full bg-white/90 text-primary-blue text-xs font-semibold shadow"
        >
          Close
        </button>
        <div className="relative w-full h-full drop-shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <img
            ref={imgRef}
            src={src}
            alt="Zoomed achievement image"
            className="md:w-full md:h-full w-full object-contain rounded-xl shadow-2xl bg-black"
          />
          {lens && !isPortrait && (
            <div
              className="absolute h-44 w-44 border-2  border-white/80 rounded-lg shadow-2xl pointer-events-none hidden md:block"
              style={{
                top: lens.offsetY + lens.y - LENS_SIZE / 2,
                left: lens.offsetX + lens.x - LENS_SIZE / 2,
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${lens.width * 2.5}px ${lens.height * 2.5}px`,
                backgroundPosition: `${(lens.x / lens.width) * 100}% ${(lens.y / lens.height) * 100}%`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function AchievementModal({
  item,
  onClose,
  onZoom,
  darkMode,
}: {
  item: AchievementDetail;
  onClose: () => void;
  onZoom: (src: string) => void;
  darkMode: boolean;
}) {
  const zoomSrc = item.zoomedImage || item.image;
  const displaySrc = item.image || item.zoomedImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative w-full max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl ${
          darkMode ? "bg-primary-navy-dark text-white" : "bg-white text-primary-blue"
        }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          <button
            type="button"
            className="md:w-1/2 w-full h-48 md:h-auto relative bg-gradient-to-br from-accent-teal/20 to-primary-blue/20 overflow-hidden group"
            onClick={() => zoomSrc && onZoom(zoomSrc)}
            disabled={!zoomSrc}
          >
            {displaySrc ? (
              <>
                <img src={displaySrc} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white opacity-0 group-hover:opacity-100 transition">
                  Tap to zoom
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-center text-sm opacity-80">
                No image added yet
              </div>
            )}
          </button>
          <div className="md:w-1/2 w-full p-6 space-y-3 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.2em]">
                {item.type === "diploma" ? "Diploma" : "Award"}
              </div>
              <button onClick={onClose} className="text-sm text-accent-teal hover:underline">
                Close
              </button>
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p
              className={`text-sm ${darkMode ? "text-white/80" : "text-primary-blue/80"}`}
            >
              {item.issuer} - {item.date}
            </p>
            {item.focus && (
              <p className={`text-sm ${darkMode ? "text-white/90" : "text-primary-blue"}`}>
                {item.focus}
              </p>
            )}
            {item.note && (
              <p className={`text-sm ${darkMode ? "text-white/90" : "text-primary-blue"}`}>
                {item.note}
              </p>
            )}
            {item.grades && (
              <div className="text-sm font-semibold text-accent-teal">{item.grades}</div>
            )}
            {item.courses && (
              <div className="space-y-1">
                <p className={`text-xs uppercase tracking-[0.15em] ${darkMode ? "text-white/70" : "text-primary-blue/70"}`}>
                  Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs ${
                        darkMode
                          ? "bg-white/10 border border-white/10"
                          : "bg-primary-blue/5 border border-primary-blue/10"
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.highlights && (
              <div className="space-y-1">
                <p className={`text-xs uppercase tracking-[0.15em] ${darkMode ? "text-white/70" : "text-primary-blue/70"}`}>
                  Highlights
                </p>
                <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? "text-white/90" : "text-primary-blue/90"}`}>
                  {item.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
