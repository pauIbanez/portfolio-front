import ProjectCardInfo, { ProjectTag } from "../../Types/ProjectCardInfo";

export enum ProjectTags {
  javaScript,
  typeScript,
  react,
  next,
  jest,
  webSockets,
  backEnd,
  frontEnd,
  fullStack,
  cSharp,
  unity,
}

export const projectTagData: { [key: number]: ProjectTag } = {
  0: {
    name: "JavaScript",
    icon: "javaScript.png",
    color: "#323330",
    backgroundColor: "#F0DB4F",
  },
  1: {
    name: "TypeScript",
    icon: "typeScript.png",
    color: "white",
    backgroundColor: "#007ACC",
  },
  2: {
    name: "React",
    icon: "react.png",
    color: "#61DBFB",
    backgroundColor: "#1C1C1C",
  },
  3: {
    name: "Next.js",
    icon: "next.png",
    color: "#F7F7F7",
    backgroundColor: "black",
  },
  4: {
    name: "Jest",
    icon: "jest.png",
    color: "#F7F7F7",
    backgroundColor: "#C03B13",
  },
  5: {
    name: "Web Sockets",
    icon: "webSockets.png",
    color: "#231F20",
    backgroundColor: "#FDC631",
  },
  6: {
    name: "Back-end",
    icon: "backEnd.png",
    color: "white",
    backgroundColor: "#659F64",
  },
  7: {
    name: "Front-end",
    icon: "frontEnd.png",
    color: "white",
    backgroundColor: "#525CB0",
  },
  8: {
    name: "Full-Stack",
    icon: "fullStack.png",
    color: "white",
    backgroundColor: "#FF25DC",
  },
  9: {
    name: "CSharp",
    icon: "cSharp.png",
    color: "white",
    backgroundColor: "#A179DC",
  },
  10: {
    name: "Unity",
    icon: "unity.png",
    color: "white",
    backgroundColor: "#808080",
  },
} as const;

const ProjectCards: ProjectCardInfo[] = [
  {
    name: "My Portfolio",
    description:
      "A webpage to showcase my portfolio, CV and a little about myself.",
    logo: "logo.svg",
    backgroundImage: "portfolio.png",
    tags: [
      ProjectTags.javaScript,
      ProjectTags.typeScript,
      ProjectTags.react,
      ProjectTags.jest,
      ProjectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/myportfolio",
  },
  {
    name: "My menu",
    nameColor: "white",
    description:
      "An assistant tool for menu organization and creation aimed for catering and central kitchens.",
    logo: "logo.svg",
    backgroundImage: "mymenu.png",
    tags: [
      ProjectTags.javaScript,
      ProjectTags.typeScript,
      ProjectTags.react,
      ProjectTags.jest,
      ProjectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/myMenu",
  },
  {
    name: "NPM packages",
    description: "Check out my published NPM packages",
    logo: "npm.png",
    nameColor: "white",
    backgroundColor: "#c93838",
    tags: [
      ProjectTags.javaScript,
      ProjectTags.typeScript,
      ProjectTags.react,
      ProjectTags.jest,
    ],
    isInteractive: false,
    externalLink: true,
    link: "https://www.npmjs.com/~pau678?activeTab=packages",
  },
  {
    name: "Nova",
    description: "An online MOBA game.",
    logo: "logo.svg",
    tags: [ProjectTags.cSharp, ProjectTags.unity, ProjectTags.fullStack],
    isInteractive: false,
    link: "/project/nova",
  },
  {
    name: "Nova client",
    description: "The client to interact with Nova.",
    logo: "logo.svg",
    tags: [
      ProjectTags.javaScript,
      ProjectTags.typeScript,
      ProjectTags.react,
      ProjectTags.jest,
      ProjectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/nova",
  },
  {
    name: "Minigames",
    description: "A few minigames to pass the time.",
    logo: "logo.svg",
    tags: [
      ProjectTags.javaScript,
      ProjectTags.typeScript,
      ProjectTags.react,
      ProjectTags.jest,
      ProjectTags.frontEnd,
    ],
    isInteractive: true,
    link: "/project/minigames",
  },
];

export default ProjectCards;
