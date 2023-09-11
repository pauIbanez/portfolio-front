import ProjectCardInfo, { ProjectTags } from "../../Types/ProjectCardInfo";

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
