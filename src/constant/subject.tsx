import type { Subject } from "./type";
import { SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";

const subjects: Subject[] = [
  {
    id: 1,
    link: "#",
    title: "Java Script",
    idTitle: "js",
    subIcon: <SiJavascript className="w-5 h-5 text-[#cfd907]" />
  },
  {
    id: 2,
    link: "#",
    title: "Type Script",
    idTitle: "ts",
    subIcon: <SiTypescript className="w-5 h-5 text-[#1b07cf]" />,
  },
  {
    id: 3,
    link: "#",
    title: "React",
    idTitle: "react",
    subIcon: <SiReact className="w-5 h-5 text-[#0e07d9]" />,
  },
  {
    id: 4,
    link: "#",
    title: "Python",
    idTitle: "python",
    subIcon: <SiPython className="w-5 h-5 text-[#6907d9]" />,
  },
  {
    id: 5,
    link: "#",
    title: "Java",
    idTitle: "java",
    subIcon: <DiJava className="w-5 h-5 text-[#d91807]" />,
  },
];

export { subjects };
