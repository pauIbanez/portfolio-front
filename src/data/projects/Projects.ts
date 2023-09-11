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
    color: "white",
    backgroundColor: "#E69D2D",
  },
  backEnd: {
    name: "Back-end",
    icon: "backEnd.png",
    color: "#323330",
    backgroundColor: "#659F64",
  },
  frontEnd: {
    name: "Front-end",
    icon: "frontEnd.png",
    color: "#323330",
    backgroundColor: "#525CB0",
  },
  fullStack: {
    name: "Full-Stack",
    icon: "fullStack.png",
    color: "#323330",
    backgroundColor: "#FF25DC",
  },
  cSharp: {
    name: "CSharp",
    icon: "cSharp.png",
    color: "white",
    backgroundColor: "#a179dcff",
  },
} as const;

const ProjectCards: ProjectCardInfo[] = [
  {
    name: "My Portfolio",
    description:
      "A webpage to showcase my portfolio, CV and a little about myself.",
    image: "logo.svg",
    tags: [
      projectTags.javaScript,
      projectTags.react,
      projectTags.javaScript,
      projectTags.react,
      projectTags.javaScript,
    ],
    isInteractive: true,
    link: "/project/myportfolio",
  },
];

export default ProjectCards;
