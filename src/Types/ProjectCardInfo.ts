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
  backgroundImage?: string;
  backgroundColor?: string;
  tags: ProjectTag[];
  description: string;
  isInteractive: boolean;
  link: string;
}

export default ProjectCardInfo;
