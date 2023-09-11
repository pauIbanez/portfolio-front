export interface ProjectTag {
  name: string;
  icon: string;
  color: string;
  backgroundColor: string;
}

interface ProjectCardInfo {
  name: string;
  image: string;
  tags: ProjectTag[];
  description: string;
  isInteractive: boolean;
  link: string;
}

export default ProjectCardInfo;
