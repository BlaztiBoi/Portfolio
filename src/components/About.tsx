import {
  Code2,
  Brush,
  CurlyBraces,
  Atom,
  Settings,
  File,
  Search,
  Brain,
  Computer,
  Figma,
  Hash,
  CodeSquare,
  Bot,
  Database,
  Languages,
  Network,
  BarChart2,
  Presentation,
  Settings2,
  ClipboardList,
  SearchCheck,
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

const skills = [
  { name: "HTML", icon: Code2, level: 80 },
  { name: "CSS", icon: Brush, level: 70 },
  { name: "JavaScript", icon: CurlyBraces, level: 90 },
  { name: "React", icon: Atom, level: 80 },
  { name: "TailwindCSS", icon: Atom, level: 80 },
];

const miniSkills = [
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
  let { darkMode, setDarkMode } = useContext(themeContext); // ${darkMode ? "text-gray-300" : "text-gray-700"}
  return (
    <section
      id="about"
      className={`py-20 transition ${
        darkMode
          ? "bg-primary-blue-dark text-gray-300"
          : "bg-[#F6F4F0] text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-justify`}>
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-accent-teal" : "text-primary-navy-dark"
              } mb-6`}
            >
              About Me
            </h2>
            <p className="mb-6 leading-relaxed animate-orbit">
              I am Aung Htet Oo, an {age} years old passionate and motivated
              student and a developer. I have a strong foundation in computing
              and a goal to become a professional full-stack or a front end
              developer, I am driven to create , build and shape the future with
              technologies.
            </p>
            <p className="leading-relaxed">
              I began learning to code at the age of 13 and have been
              consistently developing my skills ever since. Over the years, I’ve
              worked on a variety of projects, allowing me to explore different
              techniques and deepen my understanding of key programming
              principles and concepts. I'm highly motivated to take the next
              step by joining the tech industry, where I can continue to grow,
              gain real-world experience, and contribute meaningfully as I begin
              building my future.
            </p>
          </div>
          <div className="flex flex-col md:h-full h-80 justify-around ">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center gap-2 mb-2">
                  <skill.icon className="text-[#4DA1A9]" size={20} />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#4DA1A9] to-[#79D7BE] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 justify-center transition-all duration-200">
          <div className={`text-justify`}>
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-accent-teal" : "text-primary-navy-dark"
              } mt-14 mb-6 `}
            >
              My Skills
            </h2>
            <p className="my-auto leading-relaxed">
              I possess a strong foundation across a wide spectrum of
              technologies from programming languages and front-end development
              to baisc knowledges of networking, database management, and AI. My
              experience can also extends into creative problem-solving, project
              planning, and presentation, enabling me to approach challenges
              with both analytical precision and creative solutions. I&apos;m
              well-rounded and confident in going through almost any
              tech-related area. Even when I'm unfamiliar with a tool or
              concept, I am a quick learner so I can quickly adapt and thrive in
              new environments.
            </p>
            <div className="mt-2 hidden md:block">
            <h2>My basic skills :</h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full bg-accent-teal bg-opacity-50"
            >
              <CarouselContent>
                {miniSkills.map((skill, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/4 basis-1"
                  >
                    <div className="p-1">
                      <div className={`rounded-lg flex flex-grow aspect-square items-center justify-center p-4 ${darkMode ? "bg-white/10 border-accent-teal border" : "bg-accent-teal"}`}>
                        <span className="text-base font-semibold">{skill}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={`${darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"}  hover:text-inherit hover:ring-2 hover:ring-accent-teal border border-accent-teal transition`} />
              <CarouselNext className={`${darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"}  hover:text-inherit hover:ring-2 hover:ring-accent-teal border border-accent-teal transition`}/>
            </Carousel>
            </div>
          </div>

          <div className="md:block hidden relative overflow-hidden h-[500px] w-full">
            {/* Inner Orbit - 100px */}
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

            {/* Outer Orbit - 190px (merged content from 190px and 280px) */}
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
        <Carousel
              className="mt-2 md:hidden block w-full bg-accent-teal bg-opacity-50"
            >
              <span>My basic skills:</span>
              <CarouselContent className="">
                {miniSkills.map((skill, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/3"
                  >
                    <div className="p-1">
                      <div className={`rounded-lg flex aspect-square items-center justify-center p-4 ${darkMode ? "bg-white/10 border-accent-teal border" : "bg-accent-teal"}`}>
                        <span className="text-xs font-semibold">{skill}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={`${darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"}  hover:text-inherit hover:ring-2 hover:ring-accent-teal border border-accent-teal transition`} />
              <CarouselNext className={`mr-8 ${darkMode ? "border-accent-teal bg-gray-900 hover:bg-gray-900" : "border-primary-navy"}  hover:text-inherit hover:ring-2 hover:ring-accent-teal border border-accent-teal transition`}/>
            </Carousel>
      </div>
    </section>
  );
}
