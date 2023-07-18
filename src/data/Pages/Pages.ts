import PageInfo from "../../Types/PageInfo";

const Pages: { [key: string]: PageInfo } = {
  home: {
    path: "/home",
    name: "Home",
    title: "Presentation",
  },
  aboutMe: {
    path: "/aboutme",
    name: "About me",
    title: ["Let's hear about ", "me", "!"],
  },
  projects: {
    path: "/projects",
    name: "Projects",
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
    title: ["", "My ", "Curriculum"],
  },
  contact: {
    path: "/contact",
    name: "Contact",
    title: ["Contact ", "me"],
  },
};

export default Pages;
