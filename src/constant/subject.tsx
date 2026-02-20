import type { Subject } from "./type";
import { SiCss3, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";

let id = 0
const subjects: Subject[] = [
  {
    id: ++id,
    link: "#",
    title: "HTML",
    idTitle: "html",
    subIcon: <SiHtml5 className="w-5 h-5 text-[#f00808]" />
  },
  {
    id: ++id,
    link: "#",
    title: "CSS",
    idTitle: "css",
    subIcon: <SiCss3 className="w-5 h-5 text-[#8335f7]" />
  },
  {
    id: ++id,
    link: "#",
    title: "Java Script",
    idTitle: "js",
    subIcon: <SiJavascript className="w-5 h-5 text-[#cfd907]" />
  },
  {
    id: ++id,
    link: "#",
    title: "Type Script",
    idTitle: "ts",
    subIcon: <SiTypescript className="w-5 h-5 text-[#1b07cf]" />,
  },
  {
    id: ++id,
    link: "#",
    title: "React",
    idTitle: "react",
    subIcon: <SiReact className="w-5 h-5 text-[#0e07d9]" />,
  },
  {
    id: ++id,
    link: "#",
    title: "Python",
    idTitle: "python",
    subIcon: <SiPython className="w-5 h-5 text-[#6907d9]" />,
  },
  {
    id: ++id,
    link: "#",
    title: "Java",
    idTitle: "java",
    subIcon: <DiJava className="w-5 h-5 text-[#d91807]" />,
  },
];

export { subjects };
