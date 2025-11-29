import { Code2, Computer, Globe } from "lucide-react";
import { CgIfDesign } from "react-icons/cg";
import { FaSuitcase } from "react-icons/fa6";
import { GiRelationshipBounds } from "react-icons/gi";
import { GoBrowser } from "react-icons/go";
import { PiBracketsCurly } from "react-icons/pi";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiCss3, SiGithub, SiHtml5, SiJavascript, SiJson, SiJsonwebtokens, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbJson } from "react-icons/tb";

type Certificate = {
    title: string;
    issuer: string;
    description: string;
    date: string;
    badge?: string; // Optional image or badge
    link?: string; // Optional certificate link
    tech: string[];
    icons: typeof SiReact[];
  };
  
  const certificates: Certificate[] = [
    {
      title: "The Frontend Developer Career Path",
      issuer: "Scrimba",
      description: "",
      date: "July 2024",
      badge: "certificates/frontend.png",
      link: "http://www.scrimba.com/certificate/u7DYwzcd/gfrontend",
      tech: ["HTML5", "CSS3", "Javascript", "React" , "UI Design" ,  "Git & Github" , "APIs & JSON" , "Career Preparation" ],
      icons:[SiHtml5, SiCss3 , SiJavascript , SiReact , CgIfDesign ,  SiGithub , PiBracketsCurly , FaSuitcase]
    },
    {
      title: "Certification of Participation IT Challenge",
      issuer: "GUSTO College",
      description: "IT Challege Competitions Between 8 Groups",
      date: "December 2023",
      badge: "achievements/certofParticipation.jpg",
      link: "#",
      tech: ["Networking" , "Programming" , "IT"],
      icons:[Globe , Code2 , Computer],
    },
    {
      title: "Learn Typescript",
      issuer: "Scrimba",
      description: "",
      date: "April 2025",
      badge: "certificates/typescript.png",
      link: "https://scrimba.com/certificate-cert24zAwJ77fGM3QWbjAexKAyuzXPz9VP6H8CSwE",
      tech: ["Typescript"],
      icons:[SiTypescript],
    },
    {
      title: "Learn Tailwind CSS",
      issuer: "Scrimba",
      description: "",
      date: "October 2024",
      badge: "certificates/tailwind.png",
      link: "https://scrimba.com/certificate-cert24zAwJ77fGM3QWbjAexKAyuzXPz9VP6H8CSwE",
      tech: ["TailwindCSS"],
      icons:[SiTailwindcss],
    },
    {
      title: "Build a Product Card with Tailwind CSS",
      issuer: "Scrimba",
      description: "",
      date: "April 2025",
      badge: "certificates/tailwind2.png",
      link: "https://scrimba.com/certificate-cert29m6qiCmMf76fHxiedHUGL7kZobrKQGLthetx26ocgp5a",
      tech: ["TailwindCSS"],
      icons:[SiTailwindcss],
    }, 
     {
      title: "Intro to Supabase",
      issuer: "Scrimba",
      description: "",
      date: "May 2025",
      badge: "certificates/supabase.png",
      link: "https://scrimba.com/certificate-cert29m6qiCmMf76fHxiedHUJ4zhKxT4roLBMZsBd16FVD4ZR",
      tech: ["Supabase"],
      icons:[RiSupabaseFill],
    },
    {
      title: "Learn Next.js",
      issuer: "Scrimba",
      description: "",
      date: "May 2025",
      badge: "certificates/next.png",
      link: "https://scrimba.com/certificate-cert29m6qiCmMf76fHxiedHUG82rBfr3DaVWzZnf6kkThHgQr",
      tech: ["Next.JS"],
      icons:[RiNextjsFill],
    },
  ];
  
  export { certificates };
  