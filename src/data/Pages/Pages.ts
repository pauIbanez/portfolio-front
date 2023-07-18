import PageInfo from "../../Types/PageInfo";

const Pages: { [key: string]: PageInfo } = {
  home: {
    path: "/home",
    name: "Home",
    translationKey: "home",
  },
  aboutMe: {
    path: "/aboutme",
    name: "About me",
    translationKey: "aboutme",
  },
  projects: {
    path: "/projects",
    name: "Projects",
    translationKey: "projects",
  },
  project: {
    path: "/project",
    name: "Project",
    isDynamic: true,
    id: ":projectId",
  },
  curriculum: {
    path: "/curriculum",
    name: "CV",
    translationKey: "cv",
  },
  contact: {
    path: "/contact",
    name: "Contact",
    translationKey: "contact",
  },
};

export default Pages;
