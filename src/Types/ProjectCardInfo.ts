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
}

interface ProjectCardInfo {
  name: string;
  image: string;
  tags: ProjectTags[];
  description: string;
  isInteractive: boolean;
}

export default ProjectCardInfo;
