import { Database, Globe, Plug } from "lucide-react";
import { DiBootstrap, DiCss3, DiReact } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
  SiAxios,
  SiPhp,
  SiLaravel,
  SiBootstrap,
  SiReactrouter,
} from "react-icons/si";

type BigProject = {
  title: string;
  description: string;
  image: string;
  icons: (typeof SiReact)[];
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
  icons: (typeof FaReact)[];
  tech: string[];
  github: string;
  demo: string;
};

const BigProjects: BigProject[] = [
  {
    title: "SuWayYar",
    description:
      "SuWayYar is a low-bandwidth-friendly platform for schools, startups, NGOs, and community groups to organize, learn, and collaborate together. ( This Project Is Mostly Just Design )",
    image: "suwayar.png",
    icons: [SiReact, SiTypescript, SiTailwindcss],
    tech: ["React + React Router Dom", "Typescript", "TailwindCSS"],
    github: "https://github.com/BlaztiBoi/suwayar-org-hub-9d612d28",
    demo: "https://suwayar-org.vercel.app/",
  },
];

const miniProjects: MiniProject[] = [
  {
    title: "Invoice Generator",
    description: "Interative invoice generator using JSPDF.",
    icons: [SiReact, SiTypescript, SiJavascript],
    tech: ["React", "TypeScript", "JSPDF"],
    github:
      "https://github.com/BlaztiBoi/Portfolio/tree/main/src/projects/invoice-gen",
    demo: "/projects/invoice-gen",
  },
  {
    title: "Minishop",
    description: "Small shop with minimal morden dark theme design.",
    icons: [SiReact, SiTypescript, SiTailwindcss],
    tech: ["React", "TypeScript", "TailwindCSS"],
    github:
      "https://github.com/BlaztiBoi/Portfolio/tree/main/src/projects/minishop",
    demo: "/projects/minishop",
  },
  {
    title: "Quizzical",
    description: "Small quizzical game with usage of opentdb API.",
    icons: [SiReact, SiCss3, SiJavascript, Plug],
    tech: ["React", "CSS", "Javascript", "Opentdb API"],
    github: "https://github.com/BlaztiBoi/Quizzical",
    demo: "https://quizzical-blazt.netlify.app/",
  },
  {
    title: "Mp3 Meta Editor",
    description:
      "Browser-based MP3 tag editor that reads/writes ID3 metadata locally.",
    icons: [SiReact, SiTypescript, SiTailwindcss, Plug , Globe],
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "jsmediatags",
      "browser-id3-writer",
    ],
    github: "https://github.com/BlaztiBoi/mp3-meta-editor/",
    demo: "https://mp3-meta-editor.vercel.app/",
  },
];

export { miniProjects, BigProjects };
