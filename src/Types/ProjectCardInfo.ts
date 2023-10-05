import { ProjectTags } from "../data/projects/Projects";

export interface ProjectTag {
  name: string;
  icon: string;
  color: string;
  backgroundColor: string;
}

interface ProjectCardInfo {
  name: string;
  nameColor?: string;
  logo: string;
  logoMini?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  tags: ProjectTags[];
  description: string;
  isInteractive: boolean;
  externalLink?: boolean;
  link: string;
}

export default ProjectCardInfo;
