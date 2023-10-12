import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/header/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import CVPage from "./Pages/CVPage/CVPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import MinigamesPage from "./Pages/MinigamesPage/MinigamesPage";
import { useContext, useState } from "react";
import ResponsiveContext from "./contexts/responsiveContext/ResponsiveContext.contextCreator";
import NoMobilePage from "./Pages/NoMobilePage/NoMobilePage";
import BackendTemplatePage from "./Pages/BackendTemplatePage/BackendTemplatePage";
import MyPortfolioPage from "./Pages/MyPortfolioPage/MyPortfolioPage";
import useEffectOnce from "./hooks/useEffectOnce";
import languages from "./data/languages/languages";
import { useTranslation } from "react-i18next";

function App() {
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);
  const [acceptedMobile, setAcceptedMobile] = useState<boolean>(false);
  const { i18n } = useTranslation();

  useEffectOnce(() => {
    const prevLang = localStorage.getItem("locale");
    if (!prevLang || !languages.some((lang) => prevLang === lang.code)) {
      localStorage.setItem("locale", "en");
      return;
    }
    i18n.changeLanguage(prevLang);
  });

  if (currentWidthBreakPoint === 4 && !acceptedMobile) {
    return <NoMobilePage onClick={() => setAcceptedMobile(true)} />;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={Pages.home.path} />} />
        <Route path={Pages.home.path} element={<HomePage />} />
        <Route path={Pages.aboutMe.path} element={<AboutMePage />} />
        <Route path={Pages.projects.path} element={<ProjectsPage />} />
        <Route path={"/project"}>
          <Route path={Pages.minigames.path} element={<MinigamesPage />} />
          <Route
            path={Pages.backendTemplate.path}
            element={<BackendTemplatePage />}
          />
          <Route path={Pages.myPortfolio.path} element={<MyPortfolioPage />} />
          <Route path={Pages.myPortfolio.path} element={<p>Portfolio</p>} />
        </Route>
        <Route path={Pages.curriculum.path} element={<CVPage />} />
        <Route path={Pages.contact.path} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
