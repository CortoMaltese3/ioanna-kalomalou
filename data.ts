import { BsCircleFill } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
import { MdManageAccounts } from "react-icons/md";
import { RiPencilRuler2Line } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";

import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiPencilRuler2Line,
    title: "UI/UX & Graphic Design",
    about:
      "Skilled in designing user-friendly interfaces and creating compelling visuals using Figma, Adobe Illustrator, and Canva to enhance both web and mobile experiences.",
  },
  {
    Icon: MdManageAccounts,
    title: "Project Management",
    about:
      "Expert in managing projects from start to finish, ensuring timely delivery and compliance with requirements",
  },
  {
    Icon: DiScrum,
    title: "Agile & Scrum",
    about:
      "Experienced in Agile and Scrum, leading teams to deliver projects efficiently and effectively.",
  },
  {
    Icon: SiGooglemarketingplatform,
    title: "Digital Marketing",
    about:
      "Utilizes digital marketing strategies to boost brand visibility and engage audiences.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Scrum",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "ExLibris collection",
    description: "The V&A Zevgolis ExLibris digital collection",
    image_path: "/images/exlibris.jpg",
    deployed_url: "https://exlibris-zevgoli.gr/",
    github_url: "https://github.com/CortoMaltese3/exLibrisCore",
    category: [],
    key_techs: ["Figma", "GitHub Projects", "NextJS"],
  },
  {
    name: "Climada Core",
    image_path: "/images/climada.png",
    deployed_url: "https://climada-core.gr/",
    github_url: "https://github.com/CortoMaltese3/climada-core",
    category: [],
    description:
      "Web interface designed to access climate risk assessment tools.",
    key_techs: ["Figma", "GitHub Projects", "NextJS"],
  },
];
