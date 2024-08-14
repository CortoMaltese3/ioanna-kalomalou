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
    name: "Project Management",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Graphic Design",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Agile",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Scrum",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "HTML & CSS",
    level: "55",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Jira",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub Issues",
    level: "70",
  },
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
    name: "Canva",
    level: "75",
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
    category: ["figma", "github issues"],
    key_techs: ["Figma", "GitHub Issues", "NextJS"],
  },
  {
    name: "Personal portfolio",
    description:
      "Simple & professional UI/UX designer & Product Owner portfolio",
    image_path: "/images/portfolio.webp",
    deployed_url: "https://ioanna-kalomalou.vercel.app//",
    github_url: "https://github.com/CortoMaltese3/simple-portfolio",
    category: ["figma", "github issues", "next"],
    key_techs: ["Figma", "GitHub Issues", "NextJS"],
  },
  {
    name: "Climada Core",
    image_path: "/images/climada.png",
    deployed_url: "https://climada-core.gr/",
    github_url: "https://github.com/CortoMaltese3/climada-core",
    category: ["figma", "next", "django"],
    description:
      "Web interface designed to access climate risk assessment tools.",
    key_techs: ["Figma", "GitHub Issues", "NextJS", "django"],
  },
  {
    name: "Aeolus Cell",
    image_path: "/images/aeolus.png",
    deployed_url: "https://www.instagram.com/aeoluscell/",
    github_url: "",
    category: ["adobe illustrator", "canva"],
    description: "Brand identity for Aeolus Cell AirBnB cycladic house",
    key_techs: ["Adobe Illustrator", "Canva"],
  },
];
