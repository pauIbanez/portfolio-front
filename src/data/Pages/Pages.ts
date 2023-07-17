const Pages = {
  home: {
    path: "/home",
    name: "Home",
  },
  aboutMe: {
    path: "/aboutme",
    name: "About me",
  },
  projects: {
    path: "/projects",
    name: "Projects",
  },
  project: {
    path: ":projectId",
    name: "Project",
    dynamic: true,
  },
  curriculum: {
    path: "/curriculum",
    name: "CV",
  },
  contact: {
    path: "/contact",
    name: "Contact",
  },
} as const;

export default Pages;
