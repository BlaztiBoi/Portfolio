

import { Database, Plug } from "lucide-react";
import { DiBootstrap, DiCss3, DiReact } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiReact , SiJavascript, SiTailwindcss, SiTypescript, SiCss3, SiAxios, SiPhp, SiLaravel, SiBootstrap } from "react-icons/si";

type BigProject = {
  title: string;
  description: string;
  image: string;
  icons: typeof SiReact[];
  tech: string[];
  github: string;
  demo: string;
  collab?: {
    name: string;
    github: string;
    tech: string[];
  }[];
};

type MiniProject = {
  title: string;
  description: string;
  icons: typeof FaReact[];
  tech: string[];
  github: string;
  demo: string;
};

const BigProjects: BigProject[] = [
  {
    title: "Anime Archive",
    description:
      "( Work in progress ) A full-stack web application for anime enthusiasts to discover, watch, and organize their favorite anime shows. It features a profile system, anime database, studio information, and even character details.",
    image: "animearchive.png",
    icons: [SiReact, SiAxios, SiBootstrap, SiPhp, SiLaravel, Database],
    tech: ["React + React Router Dom", "Axios", "Bootstrap", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/ToeOoWaiYan/AnimeArchive",
    demo: "#",
    collab: [
      {
        name: "Toe Oo Wai Yan",
        github: "https://github.com/ToeOoWaiYan",
        tech: ["React Router Dom", "Database System"],
      },
    ],
  }
];

const miniProjects: MiniProject[] = [
  {
    title: "Invoice Generator",
    description: "Interative invoice generator using JSPDF.",
    icons: [SiReact, SiTypescript , SiJavascript],
    tech: ["React", "TypeScript", "JSPDF"],
    github: "https://github.com/BlaztiBoi/Portfolio/tree/main/src/projects/invoice-gen",
    demo: "/projects/invoice-gen",
  },
  {
    title: "Minishop",
    description: "Small shop with minimal morden dark theme design.",
    icons: [SiReact, SiTypescript , SiTailwindcss],
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/BlaztiBoi/Portfolio/tree/main/src/projects/minishop",
    demo: "/projects/minishop",
  },
  {
    title: "Quizzical",
    description: "Small quizzical game with usage of opentdb API.",
    icons: [SiReact,SiCss3,  SiJavascript , Plug],
    tech: ["React", "CSS","Javascript", "Opentdb API"],
    github: "https://github.com/BlaztiBoi/Quizzical",
    demo: "https://quizzical-blazt.netlify.app/",
  },
];


export {  miniProjects , BigProjects };