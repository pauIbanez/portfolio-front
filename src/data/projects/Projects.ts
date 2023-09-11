import ProjectCardInfo, { ProjectTag } from "../../Types/ProjectCardInfo";

const ProjectTags: { [key: string]: ProjectTag } = {
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
};

const ProjectCards: ProjectCardInfo[] = [
  {
    name: "My Portfolio",
    description: "My webpagePortfolio",
    image: "logo.svg",
    tags: [
      ProjectTags.fullStack,
      ProjectTags.javaScript,
      ProjectTags.javaScript,
      ProjectTags.jest,
      ProjectTags.react,
    ],
    isInteractive: false,
  },
];

export default ProjectCards;
