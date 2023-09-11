import ProjectCardInfo, { ProjectTag } from "../../Types/ProjectCardInfo";

const projectTags: { [key: string]: ProjectTag } = {
  javaScript: {
    name: "JavaScript",
    icon: "javaScript.png",
    color: "#323330",
    backgroundColor: "#F0DB4F",
  },
  react: {
    name: "React",
    icon: "react.png",
    color: "#61DBFB",
    backgroundColor: "#1C1C1C",
  },
} as const;

const ProjectCards: ProjectCardInfo[] = [
  {
    name: "My Portfolio",
    description: "My webpagePortfolio",
    image: "logo.svg",
    tags: [
      projectTags.javaScript,
      projectTags.react,
      projectTags.javaScript,
      projectTags.react,
      projectTags.javaScript,
    ],
    isInteractive: true,
  },
];

export default ProjectCards;
