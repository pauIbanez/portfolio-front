import ProjectCardInfo, { ProjectTag } from "../../Types/ProjectCardInfo";

const projectTags: { [key: string]: ProjectTag } = {
  javaScript: {
    name: "JavaScript",
    icon: "javaScript.png",
    color: "#323330",
    backgroundColor: "#F0DB4F",
  },
  typeScript: {
    name: "TypeScript",
    icon: "typeScript.png",
    color: "white",
    backgroundColor: "#007ACC",
  },
  react: {
    name: "React",
    icon: "react.png",
    color: "#61DBFB",
    backgroundColor: "#1C1C1C",
  },
  next: {
    name: "Next.js",
    icon: "next.png",
    color: "#F7F7F7",
    backgroundColor: "black",
  },
  jest: {
    name: "Jest",
    icon: "jest.png",
    color: "#F7F7F7",
    backgroundColor: "#C03B13",
  },
  webSockets: {
    name: "Web Sockets",
    icon: "webSockets.png",
    color: "#231F20",
    backgroundColor: "#FDC631",
  },
  backEnd: {
    name: "Back-end",
    icon: "backEnd.png",
    color: "white",
    backgroundColor: "#659F64",
  },
  frontEnd: {
    name: "Front-end",
    icon: "frontEnd.png",
    color: "white",
    backgroundColor: "#525CB0",
  },
  fullStack: {
    name: "Full-Stack",
    icon: "fullStack.png",
    color: "white",
    backgroundColor: "#FF25DC",
  },
  cSharp: {
    name: "CSharp",
    icon: "cSharp.png",
    color: "white",
    backgroundColor: "#A179DC",
  },
  unity: {
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
      projectTags.javaScript,
      projectTags.typeScript,
      projectTags.react,
      projectTags.jest,
      projectTags.fullStack,
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
      projectTags.javaScript,
      projectTags.typeScript,
      projectTags.react,
      projectTags.jest,
      projectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/myMenu",
  },
  {
    name: "Drink it!",
    nameColor: "white",
    description: "A game hub for mini drinking games as a PWA.",
    logo: "drinkit.png",
    backgroundColor: "#3E51DB",
    tags: [
      projectTags.javaScript,
      projectTags.typeScript,
      projectTags.react,
      projectTags.jest,
      projectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/drinkit",
  },
  {
    name: "Nova",
    description: "An online MOBA game.",
    logo: "logo.svg",
    tags: [projectTags.cSharp, projectTags.unity, projectTags.fullStack],
    isInteractive: false,
    link: "/project/nova",
  },
  {
    name: "Nova client",
    description: "The client to interact with Nova.",
    logo: "logo.svg",
    tags: [
      projectTags.javaScript,
      projectTags.typeScript,
      projectTags.react,
      projectTags.jest,
      projectTags.fullStack,
    ],
    isInteractive: false,
    link: "/project/nova",
  },
  {
    name: "Minigames",
    description: "A few minigames to pass the time.",
    logo: "logo.svg",
    tags: [
      projectTags.javaScript,
      projectTags.typeScript,
      projectTags.react,
      projectTags.jest,
      projectTags.frontEnd,
    ],
    isInteractive: true,
    link: "/project/minigames",
  },
];

export default ProjectCards;
