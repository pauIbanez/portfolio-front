import { CVListSectionData } from "../../Types/CVSectionData";

interface Sections {
  readonly education: CVListSectionData;
  readonly experience: CVListSectionData;
  readonly languages: any;
  readonly technologies: any;
  readonly references: any;
  readonly download: any;
}

const sections: Sections = {
  education: {
    title: "Education",
    items: [],
  },
};
