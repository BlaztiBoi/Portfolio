import {
  Code2,
  Brush,
  CurlyBraces,
  Atom,
  Brain,
  Computer,
  CodeSquare,
  Bot,
  File,
  Database,
  Languages,
  Network,
  BarChart2,
  Presentation,
  Settings2,
  ClipboardList,
  CircuitBoard,
} from "lucide-react";
import { useContext } from "react";
import { themeContext } from "../App";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/magicui/carousel";
import { FaRobot } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: Code2, level: 80 },
  { name: "CSS", icon: Brush, level: 70 },
  { name: "JavaScript", icon: CurlyBraces, level: 90 },
  { name: "React", icon: Atom, level: 80 },
  { name: "TailwindCSS", icon: Atom, level: 80 },
  { name: "IoT" , icon: FaRobot , level: 50},
];

const miniSkills = [
  "IoT",
  "Arduino Cloud",
  "Blynk",
  "AI Engineering",
  "Firebase/Firestore",
  "Next.js",
  "Electrical Engineering (learning)",
  "Python",
  "Java",
  "Lua",
  "SQL",
  "SQL Finance",
  "Network Security",
  "Decision-Making",
  "Accounting",
  "Audrino UNO",
  "Invoice Finance",
  "Computer Hardware",
  "Problem Solving",
  "Software Development",
  "Technical Support",
  "Computer Networking",
  "Microsoft Excel",
  "Microsoft Word",
];

const age =
  new Date().getFullYear() -
  2006 -
  (new Date() < new Date("2025-02-12") ? 1 : 0);

export function About() {
  const { darkMode } = useContext(themeContext);
  return (
    <section
      id="about"
      className={`relative py-24 transition overflow-hidden ${
        darkMode
          ? "bg-primary-blue-dark text-gray-300"
          : "bg-[#F6F4F0] text-gray-700"
      }`}
    >
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent-teal/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-primary-blue/15 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center relative">
          <div
            className={`space-y-6 rounded-3xl p-6 ${
              darkMode
                ? "bg-white/5 border border-white/10"
                : "bg-white shadow-md border border-primary-blue/10"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                darkMode
                  ? "bg-white/10 border border-white/20 text-accent-teal"
                  : "bg-white shadow-sm border border-primary-blue/10 text-primary-blue"
              }`}
            >
              <Brain size={16} />
              About Me
            </div>
            <h2
              className={`text-4xl font-bold leading-tight ${
                darkMode ? "text-accent-teal" : "text-primary-navy-dark"
              }`}
            >
              A logic-based developer focused on solving problems
            </h2>
            <p className="leading-relaxed">
              I&apos;m Aung Htet Oo, a {age}-year-old computing student and
              aspiring front-end developer. I care about adapting into new technologies and growing into an industry-ready engineer
              who can move ideas from concept to launch.
            </p>
            <p className="leading-relaxed">
              I started coding at 13 and have been sharpening my skills through
              hands-on projects and learning the fundamentals, experimenting with
              different stacks, learning AI Engineering.Also
              looking for opportunities to contribute to real-world products,
              learn from great teams, and keep stretching what I can create.
            </p>

            <div
              className={`rounded-2xl p-6 grid sm:grid-cols-3 gap-4 ${
                darkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-white shadow-md border border-primary-blue/10"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Atom size={16} className="text-accent-teal" />
                  Frontend
                </div>
                <p className="text-sm leading-relaxed">
                  React, TypeScript, Tailwind, NextJS.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Database size={16} className="text-accent-teal" />
                  Fundamentals
                </div>
                <p className="text-sm leading-relaxed">
                  Algorithms, Networking, Machine Learning, Data
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Settings2 size={16} className="text-accent-teal" />
                  Delivery
                </div>
                <p className="text-sm leading-relaxed">
                  Documentation, iteration, and collaboration to ship reliably.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-3xl p-6 h-full relative overflow-hidden ${
              darkMode
                ? "bg-primary-navy-dark/60 border border-white/10"
                : "bg-white shadow-lg border border-primary-blue/10"
            }`}
          >
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_20%,rgba(121,215,190,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(46,80,119,0.15),transparent_35%)]" />
            <div className="relative space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CodeSquare className="text-accent-teal" size={20} />
                Core Stack
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2 text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-[#4DA1A9]" size={18} />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? "bg-white/10" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-[#4DA1A9] via-[#79D7BE] to-[#4DA1A9]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mt-14 md:mt-4 items-center" >
          <div className={`space-y-4 md:col-span-3 rounded-2xl p-6 ${
                darkMode
                  ? "bg-white/10 border border-white/20 "
                  : "bg-white shadow-sm border border-primary-blue/10 text-primary-blue"
              }`}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ClipboardList size={16} className="text-accent-teal" />
              My skills
            </div>
            <p className="leading-relaxed">
              I cover the spectrum from programming languages and front-end
              development to networking basics, database management, and AI. I
              enjoy breaking down problems, planning, and presenting ideas, and
              I pick up new tools quickly.
            </p>
            <div className="mt-4 hidden md:block">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {miniSkills.map((skill, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 lg:basis-1/4 basis-1"
                    >
                      <div className="p-1">
                        <div
                          className={`rounded-lg flex items-center justify-center h-20 px-4 text-sm font-semibold ${
                            darkMode
                              ? "bg-white/10 border border-accent-teal text-white"
                              : "bg-white border border-primary-blue/10 text-primary-blue shadow-sm"
                          }`}
                        >
                          {skill}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className={`${
                    darkMode
                      ? "border-accent-teal bg-gray-900 hover:bg-gray-900 text-white"
                      : "border-primary-navy bg-white hover:bg-gray-100"
                  } hover:ring-2 hover:ring-accent-teal border transition`}
                />
                <CarouselNext
                  className={`${
                    darkMode
                      ? "border-accent-teal bg-gray-900 hover:bg-gray-900 text-white"
                      : "border-primary-navy bg-white hover:bg-gray-100"
                  } hover:ring-2 hover:ring-accent-teal border transition`}
                />
              </Carousel>
            </div>
          </div>

          <div className="md:block hidden relative overflow-hidden h-[500px] md:col-span-2">
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              circleClassName={`${
                darkMode
                  ? "stroke-accent-teal stroke-1"
                  : "stroke-primary-navy-dark stroke-0"
              }`}
              radius={100}
              duration={20}
            >
              <Brain />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={100}
              duration={20}
              delay={15}
            >
              <Computer />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={100}
              duration={20}
              delay={25}
            >
              <CodeSquare />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={100}
              duration={20}
              delay={20}
            >
              <Bot />
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              circleClassName={`${
                darkMode
                  ? "stroke-accent-teal stroke-1"
                  : "stroke-primary-navy-dark stroke-1"
              }`}
              radius={190}
              duration={25}
              reverse
            >
              <File />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={5}
              reverse
            >
              <Database />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={10}
              reverse
            >
              <Languages />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={15}
              reverse
            >
              <Network />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={20}
              reverse
            >
              <BarChart2 />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={25}
              reverse
            >
              <Presentation />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={30}
              reverse
            >
              <Settings2 />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={35}
              reverse
            >
              <ClipboardList />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={25}
              delay={40}
              reverse
            >
              <CircuitBoard />
            </OrbitingCircles>
          </div>
        </div>

        <Carousel className="mt-6 md:hidden block w-full">
          <div className="mb-2 text-sm font-semibold text-primary-blue">
            My basic skills
          </div>
          <CarouselContent className="">
            {miniSkills.map((skill, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <div
                    className={`rounded-lg flex items-center justify-center h-16 px-3 text-xs font-semibold ${
                      darkMode
                        ? "bg-white/10 border border-accent-teal text-white"
                        : "bg-white border border-primary-blue/10 text-primary-blue shadow-sm"
                    }`}
                  >
                    {skill}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`${
              darkMode
                ? "border-accent-teal bg-gray-900 hover:bg-gray-900 text-white"
                : "border-primary-navy bg-white hover:bg-gray-100"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
          <CarouselNext
            className={`mr-8 ${
              darkMode
                ? "border-accent-teal bg-gray-900 hover:bg-gray-900 text-white"
                : "border-primary-navy bg-white hover:bg-gray-100"
            } hover:ring-2 hover:ring-accent-teal border transition`}
          />
        </Carousel>
      </div>
    </section>
  );
}
