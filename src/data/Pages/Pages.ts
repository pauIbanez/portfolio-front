import PageInfo from "../../Types/PageInfo";

const Pages: { [key: string]: PageInfo } = {
  home: {
    path: "/home",
    name: "Home",
    translationKey: "home",
  },
  projects: {
    path: "/projects",
    name: "Projects",
    translationKey: "projects",
  },
  minigames: {
    path: "minigames",
    name: "Minigames",
    translationKey: "minigames",
  },
  myPortfolio: {
    path: "myPortfolio",
    name: "Portfolio website",
    translationKey: "myPortfolio",
  },
  curriculum: {
    path: "/curriculum",
    name: "CV",
    translationKey: "cv",
  },
  aboutMe: {
    path: "/aboutme",
    name: "AboutMe",
    translationKey: "aboutme",
  },
  contact: {
    path: "/contact",
    name: "Contact",
    translationKey: "contact",
  },
};

export default Pages;
