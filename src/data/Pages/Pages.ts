import PageInfo from "../../Types/PageInfo";

const Pages: { [key: string]: PageInfo } = {
  home: {
    path: "/home",
    name: "Home",
    translationKey: "home",
    title: "Presentation",
  },
  aboutMe: {
    path: "/aboutme",
    name: "About me",
    translationKey: "aboutme",
    title: ["Let's hear about ", "me", "!"],
  },
  projects: {
    path: "/projects",
    name: "Projects",
    translationKey: "projects",
    title: ["", "My ", "Projects"],
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
    title: ["", "My ", "Curriculum"],
  },
  contact: {
    path: "/contact",
    name: "Contact",
    translationKey: "contact",
    title: ["Contact ", "me"],
  },
};

export default Pages;
